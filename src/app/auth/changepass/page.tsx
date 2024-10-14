"use client";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Một email đặt lại mật khẩu đã được gửi đến bạn.");
      } else {
        setMessage(data.error || "Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
      setMessage("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-10 border-transparent rounded-xl dark:bg-gray-900 p-6 m-2 sm:p-8 w-full max-w-[400px]">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
          Quên Mật Khẩu
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Nhập email của bạn
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mt-1 mb-6 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full block text-center p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Gửi yêu cầu
          </button>
        </form>
        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">{message}</p>
        )}
        <p className="text-center text-sm mt-4 text-gray-600">
          <Link href="/auth/login" className="text-green-500 hover:underline">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
