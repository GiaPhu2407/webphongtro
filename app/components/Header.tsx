"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import Link from "next/link";

// Define the interface for posts
interface Post {
  id: number;
  title: string;
  price: number;
  area: number;
  location: string;
}

const Header = () => {
  // State to store input values
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]); // Correctly type the state

  // Sample posts data (replace with your actual data source)
  const posts: Post[] = [
    {
      id: 1,
      title: "GẦN TRƯỜNG GTVT",
      price: 4500000,
      area: 40,
      location: "Quận Cẩm Lệ, Đà Nẵng",
    },
    {
      id: 2,
      title: "GẦN TRƯỜNG ĐH DUY TÂN",
      price: 3000000,
      area: 30,
      location: "Quận Liên Chiểu, Đà Nẵng",
    },
    // Add more posts as needed
    {
      id: 3,
      title: "GẦN TRƯỜNG ĐH DUY TÂN",
      price: 3000000,
      area: 20,
      location: "Quận Liên Chiểu, Đà Nẵng",
    },
    // Add more posts as needed
    {
      id: 4,
      title: "GẦN TRƯỜNG ĐH DUY TÂN",
      price: 2000000,
      area: 10,
      location: "Quận Liên Chiểu, Đà Nẵng",
    },
    // Add more posts as needed
  ];

  // Function to handle search
  const handleSearch = () => {
    const filtered = posts.filter((post) => {
      const isPriceMatch = price ? post.price <= parseInt(price) : true;
      const isAreaMatch = area ? post.area >= parseInt(area) : true;
      return isPriceMatch && isAreaMatch;
    });

    console.log("Filtered posts:", filtered); // Check filtered result

    setFilteredPosts(filtered); // No need for additional check; it's already an array
  };

  return (
    <div>
      <div className="flex ml-10 gap-20 mt-1 justify-center items-center">
        <div>
          <a href="#" className="text-2xl font-bold">
            <span className="text-[#1C30E7]">PhongTroSinhVien</span>
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
          <Link className="ml-1" href="/ShowLogin">
            Đăng nhập
          </Link>
        </div>
        <div className="flex">
          <GrLogin className="mt-1" />
          <Link className="ml-1" href="/ShowRegister">
            Đăng ký
          </Link>
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
        className="w-full h-10 mt-2 flex justify-center items-center"
      >
        <div className="flex content-center gap-12">
          <a href="#" className="hover:bg-red-600 py-2 px-2">
            Trang Chủ
          </a>
          <Link
            className="hover:bg-red-600 py-2 px-2"
            href={"/ShowRoomForRent"}
          >
            {" "}
            Cho thuê phòng trọ
          </Link>

          <a href="#" className="hover:bg-red-600 py-2 px-2">
            Giới thiệu
          </a>
          <a href="#" className="hover:bg-red-600 py-2 px-2">
            Tin Tức
          </a>
          <a href="#" className="hover:bg-red-600 py-2 px-2">
            Liên hệ
          </a>
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-[#FEBB02] w-[1200px] mx-auto h-10 mt-8 rounded-xl mb-10 flex justify-center items-center gap-10">
        <div className="w-56">
          <input
            type="text"
            placeholder="Giá"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-[#FFFFFF] pl-5 text-black font-medium rounded-xl"
          />
        </div>
        <div className="w-56">
          <input
            type="text"
            placeholder="Diện tích"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-[#FFFFFF] pl-5 text-black font-medium rounded-xl"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-[#0071C2] text-white font-medium rounded-xl px-14 py-2"
        >
          Tìm kiếm
        </button>
      </div>

      {/* Content displaying filtered posts */}
      <div className="flex flex-wrap">
        {filteredPosts.length ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="flex justify-center items-center">
              <div className="ml-32 mt-5 bg-slate-50 h-72 w-72 mb-10">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwM9ngYtyaiig-XhzL0ndyIU8oG5Qkyov6A&s"
                    alt=""
                    className="h-40 rounded-xl w-full"
                  />
                </div>
                <div className="ml-7">
                  <p className="font-semibold text-[#FF0000]">{post.title}</p>
                  <p className="text-[#39D336]">
                    {post.price.toLocaleString()} triệu/tháng - {post.area}m²
                  </p>
                  <p>{post.location}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="ml-32">No results found</p>
        )}
      </div>
      <div className=" border-t-2 w-full border-black mb-2"></div>
    </div>
  );
};

export default Header;
