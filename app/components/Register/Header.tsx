import React from "react";
import { VscAccount } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";

import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="flex ml-10 gap-20 mt-1 justify-center items-center">
        <div>
          <a href="" className="text-2xl font-bold">
            <span className="text-[#1C30E7] ">PhongTroSinhVien</span>
            <span className="text-[#E71C1C]">Top</span>
            <span className="text-[#8D90AC]">.com</span>
          </a>
        </div>
        <div className="flex ml-36">
          <FaRegHeart className="mt-[3px]" />
          <p className="ml-1">Yêu thích</p>
        </div>
        <div className="flex">
          <VscAccount className="mt-[3px]" />
          <a href="" className="ml-1">
            Đăng nhập
          </a>
        </div>
        <div className="flex ">
          <GrLogin className="mt-1" />
          <a href="" className="ml-1">
            Đăng ký
          </a>
        </div>
        <div>
          <button className="bg-[#F73859] px-5 py-2 rounded-xl hover:bg-red-700">
            Đăng tin +
          </button>
        </div>
      </div>
      {/* Nvarbar */}
      <div
        style={{ backgroundColor: "#1266DD" }}
        className=" w-full h-10 mt-2 flex justify-center items-center sticky top-0 z-50 "
      >
        <div className="flex  content-center gap-12">
          <a href="" className=" hover:bg-red-600 py-2 px-2">
            Trang Chủ
          </a>
          <a href="" className=" hover:bg-red-600 py-2 px-2">
            Cho thuê phòng trọ
          </a>
          <a href="" className=" hover:bg-red-600 py-2 px-2">
            Giới thiệu{" "}
          </a>
          <a href="" className=" hover:bg-red-600 py-2 px-2">
            Tin Tức
          </a>
          <a href="" className=" hover:bg-red-600 py-2 px-2">
            Liên hệ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
