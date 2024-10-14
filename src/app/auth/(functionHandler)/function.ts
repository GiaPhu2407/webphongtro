import { TestCase } from "../../../constants/data";
export const registerUser = async (userData: any) => {
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("User created:", data);
    } else {
      console.error("Error:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch("/api/getUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    } else {
      console.error("Error:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log("data:", data);

    if (response.ok) {
      return {
        status: true,
        data,
      };
    } else {
      return {
        status: false,
        data,
      };
    }
  } catch (error) {
    console.error("Lỗi khi gọi API đăng nhập:", error);
    return null;
  }
};

export const callTest = async (item: any) => {
  const response = await fetch("/api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  if (response.ok) {
    return {
      status: "PASSED",
      data,
    };
  } else {
    return {
      status: "FAILED",
      data,
    };
  }
};

export const checkUniqueEmail = async (email: string) => {
  try {
    const response = await fetch(`/api/login?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi gọi API kiểm tra email:", error);
    return null;
  }
};
export const updatePassword = async (
  email: string,
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> => {
  if (!email || !currentPassword || !newPassword) {
    return { success: false, message: "Vui lòng cung cấp đầy đủ thông tin." };
  }

  if (newPassword.length < 8) {
    return { success: false, message: "Mật khẩu mới phải có ít nhất 8 ký tự." };
  }

  try {
    const response = await fetch("/api/update-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, currentPassword, newPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Cập nhật mật khẩu thành công:", data);
      return {
        success: true,
        message: "Mật khẩu đã được cập nhật thành công.",
      };
    } else {
      console.error("Lỗi khi cập nhật mật khẩu:", data);
      return {
        success: false,
        message: data.message || "Đã xảy ra lỗi khi cập nhật mật khẩu.",
      };
    }
  } catch (error) {
    console.error("Lỗi khi cập nhật mật khẩu:", error);
    return {
      success: false,
      message: "Đã xảy ra lỗi không xác định. Vui lòng thử lại sau.",
    };
  }
};
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { comparePassword } from "@/utils/hashPassword";
// import { sendPasswordResetEmail } from "@/utils/sendemail"; // Giả định bạn có hàm này để gửi email

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Đăng nhập
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        res.status(401).json({ error: "Email hoặc mật khẩu không đúng" });
        return;
      }

      const isPasswordValid = comparePassword(password, user.password);

      if (!isPasswordValid) {
        res.status(401).json({ error: "Email hoặc mật khẩu không đúng" });
        return;
      }

      res.status(200).json({
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  } else if (req.method === "GET") {
    const { email } = req.query;

    // Kiểm tra email tồn tại
    try {
      const user = await prisma.user.findFirst({
        where: { email: email as string },
      });

      if (!user) {
        res.status(404).json({ status: false });
        return;
      }

      res.status(200).json({
        status: true,
      });
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  } else if (req.method === "POST" && req.url === "/api/forgot-password") {
    const { email } = req.body;

    // Xử lý quên mật khẩu
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: { name: true, email: true }, // Lấy các trường cần thiết
      });

      if (!user) {
        res.status(404).json({ error: "Email không tồn tại trong hệ thống." });
        return;
      }

      // Gửi email đặt lại mật khẩu
      // const emailSent = await sendPasswordResetEmail(user); // Giả định bạn có hàm này để gửi email

      // if (!emailSent) {
      //   res.status(500).json({ error: "Có lỗi xảy ra khi gửi email." });
      //   return;
      // }

      res.status(200).json({
        message: "Một email đặt lại mật khẩu đã được gửi đến bạn.",
      });
    } catch (error) {
      res.status(500).json({ error: "Lỗi server" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
