// File: pages/api/login.js

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { comparePassword } from "@/utils/hashPassword";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle GET request for checking if email exists
  if (req.method === "GET") {
    const { email } = req.query;

    try {
      const user = await prisma.user.findUnique({
        where: { email: email as string },
      });

      if (!user) {
        return res.status(200).json({ status: false });
      }

      return res.status(200).json({ status: true });
    } catch (error) {
      console.error("Email check error:", error);
      return res.status(500).json({ error: "Lỗi server khi kiểm tra email" });
    }
  }

  // Handle POST request for login
  else if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email và mật khẩu không được để trống" });
    }

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // Check if user exists
      if (!user) {
        return res
          .status(401)
          .json({ error: "Email hoặc mật khẩu không đúng" });
      }

      // Verify password
      const isPasswordValid = await comparePassword(password, user.password);

      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ error: "Email hoặc mật khẩu không đúng" });
      }

      // Return user data (excluding sensitive information)
      return res.status(200).json({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ error: "Lỗi server khi đăng nhập" });
    }
  }

  // Handle unsupported methods
  else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res
      .status(405)
      .json({ error: `Method ${req.method} is not allowed` });
  }
}
