import Link from "next/link";
import React from "react";

const FormForgotPass = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#E4D3D3] w-[1073px] h-[923px] relative top-10 left-[140px] rounded-xl mr-64">
        <p className="absolute top-12 left-20 text-2xl font-serif font-normal">
          Quên Mật Khẩu
        </p>
        <form className="absolute top-40 left-24 ">
          <p className="mt-2  text-xl">Tên tài khoản</p>
          <input
            type="text"
            placeholder="Tên tài khoản"
            className="mt-7 py-1 w-[400px]"
          />
          <br />
          <p className="mt-10 text-xl">Mật khẩu mới</p>
          <input
            type="password"
            placeholder="Mật khẩu"
            className=" mt-6 py-1 w-[400px]"
          />
          <br />
          <p className="mt-10  text-xl">Nhập lại mật khẩu</p>
          <input
            type="number"
            placeholder="Số Điện Thoại"
            className=" mt-6 py-1 w-[400px]"
          />
          <br />

          <button
            type="submit"
            className="absolute bg-[#0071C2] px-96 top-[650px] left-11 py-2 rounded-2xl whitespace-nowrap text-white"
          >
            Gửi
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormForgotPass;
