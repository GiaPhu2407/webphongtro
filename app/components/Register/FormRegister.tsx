import Link from "next/link";
import React from "react";

const FormRegister = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#E4D3D3] w-[1073px] h-[923px] relative top-10 left-[140px] rounded-xl mr-64">
        <p className="absolute top-12 left-20 text-2xl font-serif font-normal">
          Đăng Ký
        </p>
        <form className="absolute top-40 left-24 ">
          <p className="mt-2  text-xl">Tên tài khoản</p>
          <input
            type="text"
            placeholder="Tên đăng nhập"
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
          <p className="mt-10  text-xl">Số Điện Thoại</p>
          <input
            type="number"
            placeholder="Số Điện Thoại"
            className=" mt-6 py-1 w-[400px]"
          />
          <br />
          <div className="mt-10">
            <p className="mb-10">Loại tài khoản</p>
            <div className="flex ml-4 space-x-14">
              <div>
                <input type="radio" name="accountType" id="personal1" />
                <label htmlFor="personal1">Admin</label>
              </div>
              <div>
                <input type="radio" name="accountType" id="business1" />
                <label htmlFor="business1">Chủ Trọ</label>
              </div>
              <div>
                <input type="radio" name="accountType" id="vip1" />
                <label htmlFor="vip1">Khách Hàng</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="absolute bg-[#0071C2] px-96 top-[650px] left-11 py-2 rounded-2xl whitespace-nowrap text-white"
          >
            Đăng Nhập
          </button>
          <div className=" absolute top-[300px] ml-12 whitespace-nowrap flex">
            <Link
              href={""}
              className="absolute top-[400px] left-40 text-[#00C2FF] underline"
            >
              Quên mật khẩu?
            </Link>
            <Link href={""} className="absolute top-[400px]">
              Bạn đã có tài khoản?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
