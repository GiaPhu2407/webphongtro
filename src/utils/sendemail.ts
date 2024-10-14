// import nodemailer from "nodemailer";

// export const sendResetPasswordEmail = async (
//   email: string,
//   resetLink: string
// ) => {
//   // Tạo transporter
//   const transporter = nodemailer.createTransport({
//     host: "smtp.example.com", // Thay đổi với thông tin SMTP của bạn
//     port: 587,
//     secure: false, // true cho 465, false cho các cổng khác
//     auth: {
//       user: process.env.EMAIL_USER, // Email của bạn
//       pass: process.env.EMAIL_PASS, // Mật khẩu email của bạn
//     },
//   });

//   // Tạo nội dung email
//   const mailOptions = {
//     from: '"Tên bạn" <no-reply@example.com>', // Địa chỉ email người gửi
//     to: email, // Địa chỉ email người nhận
//     subject: "Đặt lại mật khẩu của bạn", // Tiêu đề email
//     text: `Nhấn vào liên kết sau để đặt lại mật khẩu của bạn: ${resetLink}`, // Nội dung email
//     html: `<p>Nhấn vào liên kết sau để đặt lại mật khẩu của bạn:</p><a href="${resetLink}">${resetLink}</a>`, // Nội dung email dạng HTML
//   };

//   // Gửi email
//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };
// import nodemailer from 'nodemailer';

// export const sendPasswordResetEmail = async (user: {
//     id?: number;
//     name: string; // Đổi thành string cho rõ ràng
//     email: string; // Đổi thành string cho rõ ràng
// }) => {
//     // Tạo transporter sử dụng Gmail
//     const transporter = nodemailer.createTransport({
//         service: 'gmail', // Bạn có thể thay đổi dịch vụ nếu cần
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     // Tạo nội dung email
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: user.email,
//         subject: 'Đặt lại mật khẩu',
//         text: `Xin chào ${user.name},\n\nVui lòng nhấn vào liên kết dưới đây để đặt lại mật khẩu của bạn:\n\nhttp://example.com/reset-password?token=...`, // Thay đổi liên kết với token thực tế
//     };

//     try {
//         // Gửi email
//         await transporter.sendMail(mailOptions);
//         return true; // Trả về true nếu gửi thành công
//     } catch (error) {
//         // In ra lỗi nếu có
//         console.error('Lỗi khi gửi email:', error);
//         return false; // Trả về false nếu có lỗi
//     }
// };

