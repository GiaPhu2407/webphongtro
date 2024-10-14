import React from "react";

const FormChangePass = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex justify-center items-center h-full w-full">
        <div className="grid gap-8 w-full">
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
        </div>
      </div>
    </div>
  );
};

export default FormChangePass;
