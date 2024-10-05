const pool = require("../config/database"); // Kết nối đến MySQL
const bcrypt = require("bcrypt"); // Thư viện mã hóa mật khẩu
const jwt = require("jsonwebtoken"); // Thư viện tạo và kiểm tra JWT
const mailer = require("../utils/mailer");
const { parse } = require("dotenv");
const postRegisterUsersAPI = async (req, res) => {
  const { FullName, Email, Username, Password, PhoneNumber, DateofBirth, Gender, Rule } = req.body;

  if (!FullName || !Email || !Username || !Password || !PhoneNumber || !DateofBirth || !Gender) {
    return res.status(400).json({ error: "Tất cả các trường là bắt buộc" });
  }

  try {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const rule = Rule||"client";
    const sql = `INSERT INTO Users (FullName, Email, Username, Password, PhoneNumber, DateofBirth, Gender, rule) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const [result] = await pool.query(sql, [
      FullName,
      Email,
      Username,
      hashedPassword,
      PhoneNumber,
      DateofBirth,
      Gender,
      rule,
    ]);

    

    res.status(200).json({ message: "Đăng ký thành công" });
  } catch (err) {
    console.error("Lỗi khi đăng ký người dùng:", err);
    res.status(500).send("Lỗi server");
  }
};



const postLoginUsersAPI = async (req, res) => {
  const { Username, Password } = req.body;
  console.log('Cookies:', req.cookies); 
  console.log("Request Body:", req.body);

  try { 
    // Truy vấn bảng Users để tìm kiếm tài khoản người dùng
    let sql = "SELECT * FROM `Users` WHERE `Username` = ?";
    let [row] = await pool.query(sql, [Username]);

    // Nếu không tìm thấy tài khoản người dùng, kiểm tra bảng Admins
    // if (row.length === 0) {
    //   sql = "SELECT * FROM `Admins` WHERE `Username` = ?";
    //   [row] = await pool.query(sql, [Username]);
    //   console.log("Admin Query Result:", row);
    // }

    // Kiểm tra xem có tìm thấy người dùng hoặc quản trị viên hay không
    if (row.length === 0) {
      return res
        .status(401)
        .json({ message: "Tên tài khoản hoặc mật khẩu không chính xác" });
    }

    // Lấy thông tin người dùng hoặc quản trị viên
    const user = row[0];

    console.log("User:", user);
    console.log("Input Password:", Password);

    // So sánh mật khẩu nhập vào với mật khẩu đã mã hóa
    const passwordMatch = await bcrypt.compare(Password, user.Password);

    if (passwordMatch) {
      // Nếu mật khẩu đúng, tạo token JWT
      // const rule = user.rule || "admin"; // Nếu không có rule, mặc định là admin
      const token = jwt.sign(
        { username: user.Username, rule: user.rule },
        "secret_key", // Khóa bí mật để tạo JWT
        { expiresIn: "1h" } // Token hết hạn sau 1 giờ
      );

      // Lưu token vào cookie
      res.cookie("token", token, { httpOnly: true });

      // Kiểm tra quyền để chuyển hướng
      if (user.rule === "admin") {
        res.redirect("/dashboard");
      } else {
        res.redirect("/");
      }
    } else {
      // Nếu mật khẩu sai
      return res
        .status(401)
        .json({ message: "Tên tài khoản hoặc mật khẩu không chính xác" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
};

// const postRegisterAdminAPI = async (req, res) => {
//   const { FullName, Email, Username, Password, PhoneNumber, DateofBirth, Gender } = req.body;

//   // Kiểm tra các trường thông tin đầu vào
//   if (!FullName || !Email || !Username || !Password || !PhoneNumber || !DateofBirth || !Gender) {
//     return res.status(400).json({ error: "Tất cả các trường là bắt buộc" });
//   }

//   try {
//     // Hash mật khẩu
//     const hashedPassword = await bcrypt.hash(Password, 10);
//     const rule = "admin"; // Đặt rule là 'admin' để phân biệt

//     // Tạo câu truy vấn chèn thông tin admin vào bảng Users
//     const sql = `INSERT INTO Users (FullName, Email, Username, Password, PhoneNumber, DateofBirth, Gender, rule) 
//                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

//     const [result] = await pool.query(sql, [
//       FullName,
//       Email,
//       Username,
//       hashedPassword,
//       PhoneNumber,
//       DateofBirth,
//       Gender,
//       rule,
//     ]);

//     // Trả về phản hồi thành công
//     res.status(200).json({ message: "Tạo tài khoản admin thành công" });
//   } catch (err) {
//     console.error("Lỗi khi tạo tài khoản admin:", err);
//     res.status(500).send("Lỗi server");
//   }
// };


const logoutUsersAPI = async (req, res) => {
  try {
    await res.clearCookie("token");
    res.redirect("/login");
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).send("Internal Server Error");
  }
};

const verify = async (req, res) => {
  const {email,token} = req.query;

  try {
    //so sánh email với token được mã hóa
    const result = await bcrypt.compare(email, token);
    if(result === true) {
      const sql = `UPDATE Users SET email_verified_at = NOW where email = ?`;
      await pool.query(sql, [email]);
      res.redirect('/login');
    }else {
      res.redirect('/404');
    }
  } catch (error) {
      console.error("error when verifying email", error);
      res.redirect('/502');
  }
};

const sendResetLinkEmail = async (req, res) => {
  const {email} = req.body;
  if(!email) {
    res.redirect('/password/reset');
  }else {
    // Mã hóa email để tạo token
    bcrypt.hash(email, parseInt(process.env.BCRYPT_SALT_ROUND)).then((hashedEmail) => {
        // Gửi email reset password
        mailer.sendEmail(
            email, 
            "Reset Password", 
            `<a href="${process.env.APP_URL}/password/reset/${email}?token=${hashedEmail}"> Reset Password </a>`
        );

        // In đường link ra console để tiện kiểm tra
        console.log(`${process.env.APP_URL}/password/reset/${email}?token=${hashedEmail}`);

        // Chuyển hướng sau khi gửi email thành công
        res.send('check mail for your');
    }).catch((err) => {
        console.error('Error hashing email:', err);
        res.redirect('/password/reset?status=error');
    });
  };
};

const showResetForm = async (req, res) => {
  
  if(!req.params.email || !req.query.token) {  
    res.redirect('/password/reset');
  }else {
    res.render('passwords/reset',{email:req.params.email,token:req.query.token});
  }
};

// const reset = async (req, res) => {
//   const {email,token, password} = req.body;
//   console.log(email, token, password);
//   if(!email||!token||!password) {
//     res.redirect('password/reset');
//   }
//   bcrypt.compare(token, password, (err,result) => {
//     console.log('compare', result);

//     if(result) {

//       bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND))
//       .then((hashedPassword) => {
//         // Thực hiện cập nhật mật khẩu trực tiếp vào database
//         pool.query(
//           "UPDATE users SET password = ? WHERE email = ?",
//           [hashedPassword, email],
//           (err, dbResult) => {
//             if (err) {
//               console.error("Lỗi cập nhật mật khẩu:", err);
//               return res.redirect('/500'); // Lỗi cập nhật database
//             }

//             if (dbResult.affectedRows == 0) {
//               console.log('Không tìm thấy người dùng với email:', email);
//               return res.redirect('/password/reset'); // Không tìm thấy người dùng
//             }

//             // Thành công, chuyển hướng về trang đăng nhập
//             console.log(`Cập nhật mật khẩu thành công cho ${email}`);
//             return res.redirect('/login');
//           }
//         );
//       })
//       .catch((err) => {
//         console.error('Lỗi hash mật khẩu:', err);
//         return res.redirect('/500'); // Lỗi hash mật khẩu
//       });
//     } else {
//       // Token không hợp lệ
//       return res.redirect('/password/reset');
//   }
//   });
// };

const reset = async (req, res) => {
  const { email, token, password } = req.body;
  console.log(email, token, password);

  // Kiểm tra nếu các trường không được cung cấp
  if (!email || !token || !password) {
    return res.redirect('/password/reset');
  }

  try {
    // So sánh token được cung cấp với token đã lưu trong hệ thống (ví dụ: trong DB)
    const user = await pool.query("SELECT reset_token FROM users WHERE email = ?", [email]);
    
    if (user.length === 0) {
      console.log('Không tìm thấy người dùng với email:', email);
      return res.redirect('/password/reset'); // Không tìm thấy người dùng
    }

    const validToken = await bcrypt.compare(token, user[0].reset_token);
    if (!validToken) {
      // Token không hợp lệ
      console.log("Token không hợp lệ");
      return res.redirect('/password/reset');
    }

    // Nếu token hợp lệ, hash mật khẩu mới
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND));

    // Cập nhật mật khẩu trong cơ sở dữ liệu
    const [dbResult] = await pool.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashedPassword, email]
    );

    if (dbResult.affectedRows === 0) {
      console.log('Không tìm thấy người dùng với email:', email);
      return res.redirect('/password/reset'); // Không tìm thấy người dùng
    }

    // Cập nhật thành công, chuyển hướng về trang đăng nhập
    console.log(`Cập nhật mật khẩu thành công cho ${email}`);
    return res.redirect('/login');

  } catch (err) {
    // Xử lý lỗi
    console.error('Lỗi trong quá trình reset mật khẩu:', err);
    return res.redirect('/500'); // Chuyển hướng đến trang lỗi server
  }
};




module.exports = { 
  reset, 
  showResetForm, 
  sendResetLinkEmail, 
  postRegisterUsersAPI, 
  postLoginUsersAPI, 
  logoutUsersAPI, 
  verify,
   };

// const createAdminAccount = async (adminUsername, adminPassword) => {
//   const hashedPassword = await bcrypt.hash(adminPassword, 10);

//   const sql = `INSERT INTO Admins ( Username, Password)  
//                VALUES (?, ?)`;

//   try {
//     const [result] = await pool.query(sql, [adminUsername, hashedPassword]);
//     console.log("Admin đã được tạo thành công:", result);
//   } catch (err) {
//     console.error("Lỗi khi tạo tài khoản admin:", err);
//   }
// };

// // Gọi hàm với mật khẩu bạn muốn
// createAdminAccount('thinhadmin','123456');

const createAdminAccount = async (FullName, Email, Username, Password, PhoneNumber, DateofBirth, Gender) => {
  const hashedPassword = await bcrypt.hash(Password, 10);
  const rule = "admin"; // Đặt quyền là admin

  const sql = `INSERT INTO Users (FullName, Email, Username, Password, PhoneNumber, DateofBirth, Gender, rule) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  try {
    const [result] = await pool.query(sql, [FullName, Email, Username, hashedPassword, PhoneNumber, DateofBirth, Gender, rule]);
    console.log("Admin đã được tạo thành công:", result);
  } catch (err) {
    console.error("Lỗi khi tạo tài khoản admin:", err);
  }
};

// Gọi hàm để tạo tài khoản admin
createAdminAccount('huystupid', 'huyngu@example.com', 'huystupid', 'huystupid', '0123456789', '1990-01-01', 'Male');
