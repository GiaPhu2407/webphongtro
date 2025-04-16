// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

let users = [
  {
    username: 'nguyenvana',
    password: bcrypt.hashSync('yourpassword', 10),
    id: 1,
  },
];

export async function POST(req: { json: () => PromiseLike<{ username: any; password: any; }> | { username: any; password: any; }; }) {
  try {
    const { username, password } = await req.json(); // Đảm bảo req được xử lý đúng

    const user = users.find(u => u.username === username);
    if (!user) {
      return NextResponse.json({ message: 'Sai tên tài khoản hoặc mật khẩu.' }, { status: 401 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ message: 'Sai tên tài khoản hoặc mật khẩu.' }, { status: 401 });
    }

    return NextResponse.json({
      message: 'Đăng nhập thành công',
      user: { username: user.username, id: user.id },
    });
  } catch (error) {
    console.error("Error in login API:", error);
    return NextResponse.json({ message: 'Đã xảy ra lỗi. Vui lòng thử lại sau.' }, { status: 500 });
  }
}
