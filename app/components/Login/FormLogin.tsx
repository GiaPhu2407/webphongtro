"use client";
import Link from "next/link";
import React, { useState } from "react";

const FormLogin = () => {
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
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-lg dark:text-gray-300"
                  >
                    Tên tài khoản
                  </label>
                  <input
                    id="username"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="text"
                    placeholder="Tên tài khoản"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <Link
                  href={"/ShowForgotPass"}
                  className="text-blue-400 text-sm transition hover:underline "
                >
                  Forget your password?
                </Link>

                <button
                  className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  ĐĂNG NHẬP
                </button>
              </form>
              <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                <p>
                  Bạn không có tài khoản?
                  <Link
                    href={"/ShowRegister"}
                    className="text-blue-400 transition ml-1 hover:underline"
                  >
                    Đăng ký
                  </Link>
                </p>
              </div>

              <div className="mt-4 text-center text-sm text-gray-500">
                <p>
                  By signing in, you agree to our
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline"
                  >
                    Terms
                  </a>
                  and
                  <a
                    href="#"
                    className="text-blue-400 transition hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
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
