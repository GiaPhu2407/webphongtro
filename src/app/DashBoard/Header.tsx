import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className=" bg-[#159DFF] w-full h-10 mt-2 flex  ">
        <div className="">
          <a href="" className="text-2xl font-bold">
            <span className="text-[#1C30E7] ">PhongTroSinhVien</span>
            <span className="text-[#E71C1C]">Top</span>
            <span className="text-[#8D90AC]">.com</span>
          </a>
        </div>
        <div className="flex ml-[600px] mt-2">
          <FaUserCircle className="mt-[2px]" />
          <p className="ml-4">Gia Phú</p>
        </div>
        <div className="flex ml-64 mt-2">
          <IoIosLogOut className="mt-[2px]" />
          <p className="ml-4">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
