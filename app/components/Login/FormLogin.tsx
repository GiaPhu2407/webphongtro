"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/auth/(functionHandler)/function";
import { Button } from "../../../components/ui/button";
import { Input } from "@/components/ui copy/input";
import { useToast } from "@/components/ui copy/use-toast";

const FormLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      setError("Vui lòng nhập tên tài khoản và mật khẩu.");
      toast({
        title: "Validation Error!",
        description: "Vui lòng nhập tên tài khoản và mật khẩu.",
        variant: "destructive",
      });
      return;
    }

    setError("");
    try {
      const res = await loginUser(username, password);
      if (res?.status) {
        localStorage.setItem("userData", JSON.stringify(res.data));
        toast({
          title: "Đăng nhập thành công!",
          description: "Chào mừng trở lại!",
          variant: "success",
        });
        router.push("/");
      } else {
        toast({
          title: "Đăng nhập thất bại",
          description: "Vui lòng kiểm tra lại tài khoản và mật khẩu.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi!",
        description:
          "Đăng nhập thất bại - Vui lòng kiểm tra lại tài khoản và mật khẩu.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8">
          <section
            id="back-div"
            className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
          >
            <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
              <h1 className="text-3xl font-bold text-center dark:text-gray-300 text-gray-900">
                Đăng Nhập
              </h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-lg dark:text-gray-300"
                  >
                    Tên tài khoản
                  </label>
                  <Input
                    id="username"
                    name="username"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="text"
                    placeholder="Tên tài khoản"
                    value={formData.username}
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
                  </a>
                  và
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline ml-1"
                  >
                    Chính sách bảo mật
                  </a>
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
