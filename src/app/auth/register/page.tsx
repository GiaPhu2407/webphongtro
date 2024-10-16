"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { checkUniqueEmail, registerUser } from "../(functionHandler)/function";
import { Header } from "@/components/component/header";
import Footer from "@/components/component/Footer";
import Content from "@/components/component/ListLiKe/Content";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Thay thế Heroicons bằng React Icons

export default function Page() {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const { toast } = useToast();

  // State để điều khiển hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const re = /^\+?[0-9]{10,15}$/;
    return re.test(phoneNumber);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { fullname, phoneNumber, email, password, confirmPassword } =
      formData;

    if (fullname.includes("@")) {
      setError("Tên không được chứa ký tự '@'");
      toast({
        title: "Lỗi xác thực!",
        description: "Tên không được chứa ký tự '@'. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (fullname.length < 8) {
      setError("Tên phải có ít nhất 8 ký tự");
      toast({
        title: "Lỗi xác thực!",
        description: "Tên phải có ít nhất 8 ký tự. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError("Số điện thoại không hợp lệ");
      toast({
        title: "Lỗi xác thực!",
        description: "Số điện thoại không hợp lệ - Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      setError("Email không hợp lệ");
      toast({
        title: "Lỗi xác thực!",
        description: "Email không hợp lệ - Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
      toast({
        title: "Lỗi xác thực!",
        description: "Mật khẩu không khớp - Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    const isUnique = (await checkUniqueEmail(email)).status;
    console.log("isUnique:", isUnique);

    if (isUnique) {
      setError("Email đã tồn tại");
      toast({
        title: "Lỗi xác thực!",
        description: "Email đã tồn tại - Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    setError("");
    const result = {
      fullname,
      phoneNumber,
      email,
      password,
    };
    await registerUser(result);
    toast({
      title: "Thành công!",
      description: "Tài khoản đã được đăng ký thành công.",
      variant: "success",
    });
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Đăng ký</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Tạo tài khoản để bắt đầu.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  id="name"
                  name="fullname"
                  placeholder=""
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phoneNumber"
                  placeholder="+84 (555) 555-5555"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Mật khẩu với biểu tượng con mắt */}
            <div className="space-y-2 relative">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <div
                className="absolute right-2 top-8 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="h-6 w-6 text-gray-500" />
                ) : (
                  <AiFillEye className="h-6 w-6 text-gray-500" />
                )}
              </div>
            </div>

            {/* Xác nhận mật khẩu với biểu tượng con mắt */}
            <div className="space-y-2 relative">
              <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <div
                className="absolute right-2 top-8 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible className="h-6 w-6 text-gray-500" />
                ) : (
                  <AiFillEye className="h-6 w-6 text-gray-500" />
                )}
              </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Đăng ký
            </Button>
          </form>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  );
}
