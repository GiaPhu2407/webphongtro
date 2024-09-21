"use client";
// pages/forgot-password.js
import { useState } from "react";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    try {
      // Replace the console log with your email submission logic, such as an API call
      console.log("Email submitted:", email);

      // You can add additional handling logic here (e.g., sending a POST request)
    } catch (error) {
      console.error("An error occurred during submission:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative py-1 pr-4 mt-5 sm:max-w-3xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl sm:mx-auto w-full">
        <div className="border-10 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-10 m-2 sm:p-14 w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Quên Mật Khẩu
          </h2>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Nhập địa chỉ email của bạn
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Link
              href={"/ShowChangePass"}
              className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Gửi yêu cầu
            </Link>
          </form>
          <p className="text-center text-sm mt-4 text-gray-600">
            <Link href="/login" className="text-green-500 hover:underline">
              Quay lại trang đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

{
}
