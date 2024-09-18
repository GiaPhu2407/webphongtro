import React from "react";
import { FaHeart } from "react-icons/fa";
const Content = () => {
  return (
    <div className="">
      <div className="mt-5">
        <div className="flex justify-start items-center ml-32">
          <div className="bg-[#F73859] text-white font-semibold py-2 px-4 w-48 transform  -skew-x-12">
            Phòng trọ giá rẻ
          </div>
        </div>
        <div className="border-t border-[#F73859] h-1 flex-row w-[1200px] ml-32"></div>
        <div className="flex justify-center items-center ml-32 mt-1">
          <div className="flex">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwM9ngYtyaiig-XhzL0ndyIU8oG5Qkyov6A&s"
                alt=""
                className="h-40 w-60"
              />
            </div>
            <div className="ml-1">
              <p className="w-[50%] text-[#FF0000] font-semibold">
                {" "}
                GẦN TRƯỜNG GTVT, NGOẠI THƯƠNG, HUTECH, HỒNG BÀNG, UEF - AN NINH,
                TIỆN NGHI - TT…
              </p>
              <p className="text-[#39D336] text-sm font-semibold">
                4.5 triệu/tháng{" "}
                <span className="text-black font-thin">30m2</span>
              </p>
              <p>Quận Cẩm Lệ,Đà Nẵng</p>
              <div className="flex">
                <img
                  src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=rnzU9zsG6hIQ7kNvgH4NySx&_nc_ht=scontent.fdad2-1.fna&oh=00_AYBDhh4h13M-hZxhzak3Cj8YDQ3k8_1KhOMah4vOdofdpA&oe=66F0B305"
                  alt=""
                  className="w-8 h-[25px] rounded-2xl"
                />
                <p className="ml-2">Nhà trọ ngõ sen</p>
                <FaHeart className=" ml-1 mt-1 text-[#FF0000] text-xl" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCYDLB-CiKAPAXAB0Y6nxSC-FNC7zWiC4t6Xbc4qTnzKl8crdloIAl2zFVNPdRjqEg7U&usqp=CAU"
                alt=""
                className="h-40 w-60"
              />
            </div>
            <div className="ml-1">
              <p className="w-[50%] text-[#FF0000] font-semibold">
                {" "}
                GẦN TRƯỜNG ĐH DUY TÂN (1km), SƯ PHẠM (2km).... - AN NINH, TIỆN
                NGHI - TT…
              </p>
              <p className="text-[#39D336] text-sm font-semibold">
                3.0 triệu/tháng{" "}
                <span className="text-black font-thin">30m2</span>
              </p>
              <p>Quận Liên Chiểu,Đà Nẵng</p>
              <div className="flex">
                <img
                  src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=rnzU9zsG6hIQ7kNvgH4NySx&_nc_ht=scontent.fdad2-1.fna&oh=00_AYBDhh4h13M-hZxhzak3Cj8YDQ3k8_1KhOMah4vOdofdpA&oe=66F0B305"
                  alt=""
                  className="w-8 h-[25px] rounded-2xl"
                />
                <p className="ml-2">Nhà trọ ngõ sen</p>
                <FaHeart className=" ml-1 mt-1 text-[#FF0000] text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
