import Link from "next/link";
import React from "react";

const FormLogin = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#E4D3D3] w-[1073px] h-[607px] relative top-10 left-[140px] rounded-xl mr-64">
        <p className="absolute top-10 left-20 text-2xl font-serif font-normal">
          Đăng Nhập
        </p>
        <form className="absolute top-32 left-24 ">
          <p className="mt-2 texl-xl ">Tên tài khoản</p>
          <input
            type="text"
            placeholder="Tên tài khoản"
            className="mt-7 py-1 w-[400px]"
          />
          <br />
          <p className="mt-10 text-xl">Mật khẩu</p>
          <input
            type="password"
            placeholder="Mật khẩu"
            className=" mt-6 py-1 w-[400px]"
          />
          <br />
          <button
            type="submit"
            className="absolute bg-[#0071C2] px-96 top-80 left-11 py-2 rounded-2xl whitespace-nowrap text-white"
          >
            Đăng Nhập
          </button>
          <Link
            href={""}
            className="absolute top-[400px] left-12 text-[#00C2FF] underline"
          >
            Quên mật khẩu?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
