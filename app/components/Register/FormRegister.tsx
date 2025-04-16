"use client";
import {
  checkUniqueEmail,
  registerUser,
} from "@/app/auth/(functionHandler)/function";
import { Input } from "@/components/ui copy/input";
import { Label } from "@/components/ui copy/label";
import { useToast } from "@/components/ui copy/use-toast";
import Link from "next/link";
import React, { useState } from "react";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "MALE", // Default value
  });

  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (e: { target: { value: any; }; }) => {
    setFormData({
      ...formData,
      gender: e.target.value,
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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const {
      name,
      username,
      phoneNumber,
      email,
      password,
      confirmPassword,
      gender,
    } = formData;

    // Validate all fields are filled
    if (
      !name ||
      !username ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Vui lòng điền đầy đủ thông tin.");
      toast({
        title: "Lỗi xác thực!",
        description: "Vui lòng điền đầy đủ thông tin.",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError("Số điện thoại không hợp lệ.");
      toast({
        title: "Lỗi xác thực!",
        description: "Số điện thoại không hợp lệ. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      setError("Email không hợp lệ.");
      toast({
        title: "Lỗi xác thực!",
        description: "Email không hợp lệ. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      toast({
        title: "Lỗi xác thực!",
        description: "Mật khẩu không khớp. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    try {
      const isUnique = await checkUniqueEmail(email);
      if (isUnique?.status) {
        setError("Email đã tồn tại.");
        toast({
          title: "Lỗi xác thực!",
          description: "Email đã tồn tại. Vui lòng thử lại.",
          variant: "destructive",
        });
        return;
      }

      setError("");
      const userData = {
        name,
        username,
        email,
        password,
        phoneNumber,
        gender,
      };

      await registerUser(userData);
      toast({
        title: "Thành công!",
        description: "Tài khoản đã được đăng ký thành công.",
        variant: "success",
      });

      // Reset form after successful registration
      setFormData({
        name: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "MALE",
      });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        window.location.href = "/ShowLogin";
      }, 2000);
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Lỗi!",
        description: "Đăng ký thất bại. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative py-1 mt-5 sm:max-w-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl sm:mx-auto">
        <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2 sm:p-10">
          <h1 className="text-3xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
            Đăng Ký
          </h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="col-span-2 sm:col-span-1">
                <Label
                  htmlFor="name"
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                >
                  Họ và tên
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Nguyễn Văn A"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Label
                  htmlFor="username"
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                >
                  Tên tài khoản
                </Label>
                <Input
                  id="username"
                  name="username"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="username123"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="email"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label
                htmlFor="phoneNumber"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Số điện thoại
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="0912345678"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label
                  htmlFor="password"
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                >
                  Mật khẩu
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                >
                  Xác nhận mật khẩu
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <p className="font-semibold text-sm text-gray-600 pb-1 block">
                Giới tính
              </p>
              <div className="flex gap-10 mt-2 mb-5 ml-4">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-male"
                    value="MALE"
                    checked={formData.gender === "MALE"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="gender-male" className="ml-2 text-sm">
                    Nam
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-female"
                    value="FEMALE"
                    checked={formData.gender === "FEMALE"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="gender-female" className="ml-2 text-sm">
                    Nữ
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    id="gender-other"
                    value="OTHER"
                    checked={formData.gender === "OTHER"}
                    onChange={handleGenderChange}
                  />
                  <label htmlFor="gender-other" className="ml-2 text-sm">
                    Khác
                  </label>
                </div>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="mt-5">
              <button
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Đăng ký
              </button>
            </div>

            <div className="flex mt-4 justify-center">
              <p>Bạn đã có tài khoản?</p>
              <Link
                href="/ShowLogin"
                className="text-sm text-blue-600 ml-2 hover:underline"
              >
                Đăng nhập ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
