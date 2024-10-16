"use client";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { useToast } from "../../../components/ui/use-toast";
import { loginUser } from "../(functionHandler)/function";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { useRouter } from "next/navigation";
import Footer from "@/components/component/Footer";
import Content from "@/components/component/ListLiKe/Content";
import { Header } from "@/components/component/header";
import Link from "next/link";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Thay thế Heroicons bằng React Icons

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { toast } = useToast();

  const [showPassword, setShowPassword] = useState(false);
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in both email and password.");
      toast({
        title: "Validation Error!",
        description: "Please fill in both email and password.",
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
          title: "Login Successful!",
          description: "Welcome back!",
          variant: "success",
        });
        router.push("/");
      } else {
        toast({
          title: "Login Failed",
          description: "Please check your email and password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error!",
        description: "Login failed - Please check your email and password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email and password to login.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
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
            <Link
              href={"/ShowForgotPass"}
              className="text-[#00C2FF] text-sm underline mt-7"
            >
              Quên Mật Khẩu?
            </Link>
            {error && <p className="text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>

      <Content />
      <Footer />
    </div>
  );
}
