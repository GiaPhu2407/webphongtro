"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Function to close dropdown when clicking outside
  //   const closeDropdown = () => {
  //     setDropdownOpen(false);
  //   };

  return (
    <div>
      <div className="flex ml-10 gap-20 mt-1 justify-center items-center">
        <div>
          <a href="" className="text-2xl font-bold">
            <span className="text-[#1C30E7]">PhongTroSinhVien</span>
            <span className="text-[#E71C1C]">Top</span>
            <span className="text-[#8D90AC]">.com</span>
          </a>
        </div>
        <div className="flex ml-36">
          <FaRegHeart className="mt-[3px]" />
          <p className="ml-1">Yêu thích</p>
        </div>

        <div className="flex relative">
          <FaUser className="mt-1" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" onClick={toggleDropdown}>
              <p className="mt-[3px] ml-1">Gia Phú</p>
            </div>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="menu menu-sm dropdown-content bg-[#D9D9D9] rounded-box absolute z-[101] mt-3 w-52 p-2 shadow py-5">
                <li>
                  <Link
                    href={"/ShowAdmin/Dashboard"}
                    className="justify-between"
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <a className="justify-between">Thông tin cá nhân</a>
                </li>
                <li>
                  <a>Đổi mật khẩu</a>
                </li>
                <li>
                  <a>Đăng xuất</a>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <button className="bg-[#F73859] px-5 py-2 rounded-xl hover:bg-red-700">
            Đăng tin +
          </button>
        </div>
      </div>
      {/* Navbar */}
      <div
        style={{ backgroundColor: "#1266DD" }}
        className="w-full h-10 mt-2 flex justify-center items-center sticky top-0 z-[100]"
      >
        <div className="flex content-center gap-12">
          <a href="" className="hover:bg-red-600 py-2 px-2">
            Trang Chủ
          </a>
          <a href="" className="hover:bg-red-600 py-2 px-2">
            Cho thuê phòng trọ
          </a>
          <a href="" className="hover:bg-red-600 py-2 px-2">
            Giới thiệu
          </a>
          <a href="" className="hover:bg-red-600 py-2 px-2">
            Tin Tức
          </a>
          <a href="" className="hover:bg-red-600 py-2 px-2">
            Liên hệ
          </a>
        </div>
      </div>
      <div className=" bg-[#FEBB02] w-[1200px] mx-auto h-10 mt-8 rounded-xl mb-10  flex justify-center items-center gap-10">
        <div className="w-56  ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Giá"
            className="bg-[#FFFFFF] absolute right-[1000px] top-[132px]  pl-5 text-black font-medium rounded-xl "
          />
        </div>
        <div className=" w-56 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Diện tích"
            className="absolute right-[750px] top-[132px] bg-[#FFFFFF] pl-5 text-black font-medium rounded-xl"
          />
        </div>

        <div className="relative ml-72 flex  ">
          {/* <p className="pl-20 text-white font-medium">Tìm kiếm</p> */}
          <button className=" bg-[#0071C2] -bottom-[14px] -right-[132px] -py-5 py-[2px] absolute whitespace-nowrap text-white  font-medium rounded-xl px-14 ">
            <CiSearch className=" absolute top-[2px] left-0 text-white text-xl " />
            Tim kiếm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
