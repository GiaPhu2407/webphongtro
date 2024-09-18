import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div>
      <div className="flex ml-10 gap-20 mt-1 justify-center items-center">
        <div>
          <a href="" className="text-2xl font-bold">
            <span className="text-blue-600 ">PhongTroSinhVien</span>
            <span className="text-red-600">Top</span>.com
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
          <button className="bg-red-500 px-5 py-2 rounded-xl hover:bg-red-700">
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
        className=" w-[1200px] mx-auto h-10 mt-8 rounded-xl  flex justify-center items-center gap-10"
      >
        <div className="w-56  ">
          <select name="" id="" className="w-56 rounded-xl">
            <option value="" className="text-xl">
              Chọn giá
            </option>
            <option value="">1.000.000</option>
            <option value="">1.500.000</option>
            <option value="">2.000.000</option>
            <option value="">2.500.000</option>
            <option value="">3.000.000</option>
            <option value="">3.500.000</option>
            <option value="">4.000.000</option>
          </select>
        </div>
        <div className=" w-56 ">
          <select name="" id="" className="w-56 rounded-xl">
            <option value="">Chọn diện tích</option>
            <option value="">36m2</option>
            <option value="">40m2</option>
            <option value="">45m2</option>
            <option value="">50m2</option>
          </select>
        </div>

        <div className="relative ml-72 flex">
          <CiSearch className=" absolute top-[2px] left-0 text-white text-xl" />
          {/* <p className="pl-20 text-white font-medium">Tìm kiếm</p> */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Tìm Kiếm......."
            style={{ backgroundColor: "#0071C2" }}
            className="bg-blue-600 pl-5 text-white font-medium rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
