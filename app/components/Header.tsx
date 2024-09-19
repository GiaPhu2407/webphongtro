import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

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
          <Link className="ml-1" href={"/ShowLogin"}>
            Đăng nhập
          </Link>
        </div>
        <div className="flex ">
          <GrLogin className="mt-1" />
          <Link className="ml-1" href={"/ShowRegister"}>
            Đăng ký
          </Link>
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
        className=" w-full h-10 mt-2 flex justify-center items-center"
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

      <div
        style={{ backgroundColor: "#DFBF19" }}
        className=" w-[1200px] mx-auto h-10 mt-8 rounded-xl mb-10  flex justify-center items-center gap-10"
      >
        <div className="w-56  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Giá"
            className="bg-[#FFFFFF] pl-5 text-white font-medium rounded-xl mr-10"
          />
        </div>
        <div className=" w-56 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Diện tích"
            className="bg-[#FFFFFF] pl-5 text-white font-medium rounded-xl"
          />
        </div>

        <div className="relative ml-72 flex  ">
          {/* <p className="pl-20 text-white font-medium">Tìm kiếm</p> */}
          <button className=" bg-[#0071C2] -bottom-3 -py-5  absolute whitespace-nowrap text-white  font-medium rounded-xl px-14 ">
            <CiSearch className=" absolute top-[2px] left-0 text-white text-xl " />
            Tim kiếm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
