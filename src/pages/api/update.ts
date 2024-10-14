import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { getSession } from "next-auth/react"; // Giả sử bạn đang sử dụng NextAuth

const prisma = new PrismaClient();

// Schema validation cho dữ liệu đầu vào
const updateUserSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  email: z.string().email().optional(),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]{10,14}$/)
    .optional(),
  password: z.string().min(8).optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Xác thực người dùng
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const validatedData = updateUserSchema.parse(req.body);
    const { name, email, phoneNumber, password } = validatedData;

    // Lấy id của người dùng từ session
    const userId = session.user.email;

    // Kiểm tra xem user có tồn tại không
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(404).json({ error: "Người dùng không tồn tại" });
    }

    // Chuẩn bị dữ liệu cập nhật
    const updateData: any = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    // Cập nhật thông tin người dùng
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
      },
    });

    res.status(200).json({
      message: "Cập nhật thông tin thành công",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật người dùng:", error);
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: "Dữ liệu không hợp lệ", details: error.errors });
    }
    res.status(500).json({ error: "Lỗi server" });
  } finally {
    await prisma.$disconnect();
  }
}
