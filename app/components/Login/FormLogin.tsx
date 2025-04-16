"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/auth/(functionHandler)/function";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui copy/input";
import { useToast } from "@/components/ui copy/use-toast";

const FormLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu.");
      toast({
        title: "Lỗi xác thực!",
        description: "Vui lòng nhập email và mật khẩu.",
        variant: "destructive",
      });
      return;
    }

    setError("");
    try {
      const res = await loginUser(email, password);
      if (res?.status) {
        localStorage.setItem("userData", JSON.stringify(res.data));
        toast({
          title: "Đăng nhập thành công!",
          description: `Chào mừng ${res.data.name} trở lại!`,
          variant: "success",
        });
        setIsLoggedIn(true);

        // Redirect to homepage after successful login
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast({
          title: "Đăng nhập thất bại",
          description: "Vui lòng kiểm tra lại email và mật khẩu.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Lỗi!",
        description:
          "Đăng nhập thất bại - Vui lòng kiểm tra lại thông tin đăng nhập.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8">
          <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl">
            <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
              <h1 className="text-3xl font-bold text-center dark:text-gray-300 text-gray-900">
                Đăng Nhập
              </h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg dark:text-gray-300"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="email"
                    placeholder="Email của bạn"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg dark:text-gray-300"
                  >
                    Mật khẩu
                  </label>
                  <Input
                    id="password"
                    name="password"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Mật khẩu"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <Link
                  href="/ShowForgotPass"
                  className="text-blue-400 text-sm transition hover:underline"
                >
                  Quên mật khẩu?
                </Link>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  ĐĂNG NHẬP
                </Button>
              </form>

              <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                <p>
                  Bạn không có tài khoản?
                  <Link
                    href="/ShowRegister"
                    className="text-blue-400 transition ml-1 hover:underline"
                  >
                    Đăng ký
                  </Link>
                </p>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>
                  Bằng cách đăng nhập, bạn đồng ý với
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline ml-1"
                  >
                    Điều khoản
                  </a>{" "}
                  và{" "}
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline ml-1"
                  >
                    Chính sách bảo mật
                  </a>{" "}
                  của chúng tôi.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
