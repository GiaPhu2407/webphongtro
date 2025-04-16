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
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "MALE", // Default value
  });

  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fullname, phoneNumber, email, password, confirmPassword, gender } =
      formData;

    if (!validatePhoneNumber(phoneNumber)) {
      setError("Số điện thoại không hợp lệ.");
      toast({
        title: "Validation Error!",
        description: "Số điện thoại không hợp lệ. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      setError("Email không hợp lệ.");
      toast({
        title: "Validation Error!",
        description: "Email không hợp lệ. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      toast({
        title: "Validation Error!",
        description: "Mật khẩu không khớp. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    const isUnique = (await checkUniqueEmail(email)).status;
    if (isUnique) {
      setError("Email đã tồn tại.");
      toast({
        title: "Validation Error!",
        description: "Email đã tồn tại. Vui lòng thử lại.",
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
      gender,
    };
    await registerUser(result);
    toast({
      title: "Thành công!",
      description: "Tài khoản đã được đăng ký thành công.",
      variant: "success",
    });
  };
  return (
    <div className="flex justify-center items-center">
      {/* From Uiverse.io by themrsami */}
      <div className="relative py-1 mt-5 sm:max-w-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl sm:mx-auto">
        <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2 sm:p-10">
          <h1 className="text-3xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
            Đăng Ký
          </h1>
          <div className="max-w-md mx-auto">
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  id="name"
                  name="fullname"
                  placeholder="John Doe"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="text"
                id="fullname"
              />
            </div>
            <div>
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
              />
            </div>
            <div>
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="username"
              >
                Tên tài khoản
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="text"
                id="username"
              />
            </div>
            <div>
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Mật Khẩu
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="gender"
              >
                Số điện thoại
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
              />
              {/* <select
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select> */}
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px] text-gray-600 pb-1 block">
              Giới tính
            </p>
            <div className="flex gap-10 mt-2 ml-4">
              <div>
                <input type="radio" name="gioitinh" id="gioitinh" />
                <label htmlFor="gioitinh" className="ml-2 text-sm">
                  Nam
                </label>
              </div>
              <div>
                <input type="radio" name="gioitinh" id="gioitinh1" />
                <label htmlFor="gioitinh1" className="ml-2 text-sm">
                  Nữ
                </label>
              </div>
              <div>
                <input type="radio" name="gioitinh" id="gioitinh2" />
                <label htmlFor="gioitinh2" className="ml-2 text-sm">
                  Khác
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div className="flex mt-2">
            <p>Bạn đã có tài khoản?</p>
            <Link
              href={"/ShowLogin"}
              className="text-sm text-blue-600 ml-2 underline mt-[2px]"
            >
              Đăng nhập ngay
            </Link>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <Link
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
              href="#"
            >
              have an account? Log in
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
