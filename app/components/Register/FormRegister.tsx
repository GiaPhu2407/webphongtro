import Link from "next/link";
import React from "react";

const FormRegister = () => {
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
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="fullname"
                >
                  Họ tên
                </label>
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
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="dob"
                >
                  Ngày sinh
                </label>
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="date"
                  id="dob"
                />
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
    </div>
  );
};

export default FormRegister;
