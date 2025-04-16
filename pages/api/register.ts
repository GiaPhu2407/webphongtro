import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "@/utils/hashPassword";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, username, email, password, phoneNumber, gender } = req.body;

    try {
      // Kiểm tra xem email đã tồn tại chưa
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      // Nếu email đã tồn tại, trả về lỗi
      if (existingUser) {
        return res.status(400).json({ error: "Email đã tồn tại" });
      }

      // Băm mật khẩu
      const hashedPassword = await hashPassword(password);

      // Tạo người dùng mới
      const user = await prisma.user.create({
        data: {
          name,
          username,
          email,
          password: hashedPassword,
          phoneNumber,
          gender,
        },
      });

      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Lỗi server" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
