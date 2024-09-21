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
            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Gửi yêu cầu
            </button>
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
  /* <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8 w-full">
          <section
            id="back-div"
            className="relative py-1 pr-4 mt-5 sm:max-w-3xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl sm:mx-auto w-full"
          >
            <div className="border-10 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-10 m-2 sm:p-14 w-full">
              <h1 className="text-3xl font-bold text-center dark:text-gray-300 text-gray-900">
                Quên Mật Khẩu
              </h1>
              <form action="#" method="post" className="space-y-8">
                <div>
                  <label
                    htmlFor="tên tài khoản"
                    className="block mb-2 text-xl dark:text-gray-300"
                  >
                    Tên tài khoản
                  </label>
                  <input
                    id="email"
                    className="border p-4 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-[400px] focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="tên tài khoản"
                    placeholder="Tên tài khoản"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xl dark:text-gray-300"
                  >
                    Mật khẩu mới
                  </label>
                  <input
                    id="password"
                    className="border p-4 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg  w-[400px] focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xl dark:text-gray-300"
                  >
                    Nhập lại mật khẩu mới
                  </label>
                  <input
                    id="password"
                    className="border p-4 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg  w-[400px] focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <button
                  className=" w-[150px] p-4 mt-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  Gửi
                </button>
              </form>
            </div>
          </section>
        </div>
      </div> */
}
