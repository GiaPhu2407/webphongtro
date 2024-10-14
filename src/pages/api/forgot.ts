// // pages/api/forgot-password.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { email } = req.body;

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Đặt lại mật khẩu",
//       text: "Vui lòng nhấn vào liên kết để đặt lại mật khẩu của bạn.",
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email đã được gửi đi." });
//     } catch (error) {
//       console.error("Lỗi khi gửi email:", error);
//       res.status(500).json({ error: "Không thể gửi email." });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
