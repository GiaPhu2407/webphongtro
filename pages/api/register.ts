// File: pages/api/register.js

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/utils/hashPassword";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Method ${req.method} is not allowed` });
  }

  const { name, username, email, password, phoneNumber, gender } = req.body;

  // Validate required fields
  if (!name || !username || !email || !password || !phoneNumber || !gender) {
    return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email không hợp lệ" });
  }

  // Validate phone number format
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ error: "Số điện thoại không hợp lệ" });
  }

  try {
    // Check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUserByEmail) {
      return res.status(400).json({ error: "Email đã tồn tại" });
    }

    // Check if username already exists
    const existingUserByUsername = await prisma.user.findFirst({
      where: { username },
    });

    if (existingUserByUsername) {
      return res.status(400).json({ error: "Tên tài khoản đã tồn tại" });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        phoneNumber,
        gender,
      },
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ error: "Lỗi server khi đăng ký tài khoản" });
  }
}
