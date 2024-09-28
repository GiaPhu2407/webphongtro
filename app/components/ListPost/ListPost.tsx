import Link from "next/link";
import React from "react";

const ListPost = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border-8 border-[#1266DD] w-[1284px] h-[1193px] rounded-2xl ">
        <p className="mt-10 ml-5">Danh sách Bài Yêu Thích</p>
        <p className="border-t-2 border-black w-[1200px] ml-10 mt-2"></p>
        {/* Bài đăng 1 */}
        <div className=" flex justify-around mt-5">
          <div className="flex ml-10">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwM9ngYtyaiig-XhzL0ndyIU8oG5Qkyov6A&s"
                alt=""
                className="h-40 w-60 rounded-xl"
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
              </div>
            </div>
          </div>
          <Link
            href={"/ShowUpdatePost"}
            className="bg-[#0F0E0E] text-white whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2 transform transition-transform duration-300 hover:scale-110"
          >
            Cập Nhật
          </Link>
          <Link
            href={""}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2 transform transition-transform duration-300 hover:scale-110"
          >
            Xoá
          </Link>
        </div>
        {/* Bài đăng 2 */}
        <div className=" flex justify-around mt-10">
          <div className="flex ml-10">
            <div>
              <img
                src="https://bandon.vn/uploads/thiet-ke-nha-tro-dep-2020-bandon-28.jpg"
                alt=""
                className="h-40 w-60 rounded-xl"
              />
            </div>
            <div className="ml-1">
              <p className="w-[50%] text-[#FF0000] font-semibold">
                {" "}
                GẦN TRƯỜNG GTVT, NGOẠI THƯƠNG, HUTECH, HỒNG BÀNG, UEF - AN NINH,
                TIỆN NGHI - TT…
              </p>
              <p className="text-[#39D336] text-sm font-semibold">
                5 triệu/tháng <span className="text-black font-thin">30m2</span>
              </p>
              <p>Quận Thanh Khê,Đà Nẵng</p>
              <div className="flex">
                <img
                  src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=rnzU9zsG6hIQ7kNvgH4NySx&_nc_ht=scontent.fdad2-1.fna&oh=00_AYBDhh4h13M-hZxhzak3Cj8YDQ3k8_1KhOMah4vOdofdpA&oe=66F0B305"
                  alt=""
                  className="w-8 h-[25px] rounded-2xl"
                />
                <p className="ml-2">Nhà trọ ngõ sen</p>
              </div>
            </div>
          </div>
          <Link
            href={"/ShowUpdatePost"}
            className="bg-[#0F0E0E] text-white whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2 transform transition-transform duration-300 hover:scale-110"
          >
            Cập Nhật
          </Link>
          <Link
            href={""}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2 transform transition-transform duration-300 hover:scale-110"
          >
            Xoá
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListPost;
