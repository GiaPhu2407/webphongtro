import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Content = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-[1212px] h-[1215px] bg-[#FFFAFA]">
        <div className="ml-10">
          <p className="">Ký túc xá tây đông</p>
          <div className="flex">
            <FaMapMarkerAlt className="mt-[3px]" />
            <p>Địa chỉ: 141/45 Tiểu La, Phường Hòa Cường Bắc, Quận Hải Châu</p>
          </div>
          <div className="flex">
            <p className="text-[#39D336] text-2xl mt-2">1,6 triệu/tháng</p>
            <p className="mt-[15px] ml-20">
              Trạng Thái: <span>Còn Chỗ</span>
            </p>
            <button className="w-[170px] h-[35px] bg-[#0071C2] text-[#F8EFEF] rounded-2xl ml-[300px]">
              Yêu Thích
            </button>
            <button className="w-[170px] h-[35px] bg-[#F73859] text-[#F8EFEF] rounded-2xl ml-12">
              Thuê Ngay
            </button>
          </div>
          <div className="border-t h-1 border-[#000000]  mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
