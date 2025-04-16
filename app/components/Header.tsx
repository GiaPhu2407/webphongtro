"use client";
import React, { useState, useEffect } from "react";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";

// Define the interface for posts
interface Post {
  id: number;
  title: string;
  price: number;
  area: number;
  location: string;
}

// Define the interface for user data
interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  phoneNumber: string;
  gender: string;
}

const Header = () => {
  // State for user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  // State to store input values
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("userData");
      }
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
    setShowUserMenu(false);
    // Optional: redirect to home page or login page
    window.location.href = "/";
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

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
    {
      id: 3,
      title: "GẦN TRƯỜNG ĐH DUY TÂN",
      price: 3000000,
      area: 20,
      location: "Quận Liên Chiểu, Đà Nẵng",
    },
    {
      id: 4,
      title: "GẦN TRƯỜNG ĐH DUY TÂN",
      price: 2000000,
      area: 10,
      location: "Quận Liên Chiểu, Đà Nẵng",
    },
  ];

  // Function to handle search
  const handleSearch = () => {
    const filtered = posts.filter((post) => {
      const isPriceMatch = price ? post.price <= parseInt(price) : true;
      const isAreaMatch = area ? post.area >= parseInt(area) : true;
      return isPriceMatch && isAreaMatch;
    });

    setFilteredPosts(filtered);
  };

  return (
    <div>
      <div className="flex ml-10 gap-20 mt-1 justify-center items-center">
        <div>
          <a href="/" className="text-2xl font-bold">
            <span className="text-[#1C30E7]">PhongTroSinhVien</span>
            <span className="text-[#E71C1C]">Top</span>
            <span className="text-[#8D90AC]">.com</span>
          </a>
        </div>
        <div className="flex ml-36">
          <FaRegHeart className="mt-[3px]" />
          <p className="ml-1">Yêu thích</p>
        </div>

        {isLoggedIn ? (
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleUserMenu}
            >
              <FaUserCircle className="text-xl mr-2" />
              <span className="text-blue-600 font-medium">
                {userData?.name}
              </span>
            </div>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-1">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium">{userData?.name}</p>
                  <p className="text-xs text-gray-500">{userData?.email}</p>
                </div>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Thông tin cá nhân
                </Link>
                <Link
                  href="/favorites"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Danh sách yêu thích
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <IoLogOutOutline className="mr-2" />
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}

        <div>
          <button className="bg-[#F73859] px-5 py-2 rounded-xl hover:bg-red-700 text-white">
            Đăng tin +
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div
        style={{ backgroundColor: "#1266DD" }}
        className="w-full h-10 mt-2 flex justify-center items-center text-white"
      >
        <div className="flex content-center gap-12">
          <a href="/" className="hover:bg-red-600 py-2 px-2">
            Trang Chủ
          </a>
          <Link className="hover:bg-red-600 py-2 px-2" href="/ShowRoomForRent">
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
            placeholder="Giá (VNĐ)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-[#FFFFFF] pl-5 text-black font-medium rounded-xl w-full h-8"
          />
        </div>
        <div className="w-56">
          <input
            type="text"
            placeholder="Diện tích (m²)"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-[#FFFFFF] pl-5 text-black font-medium rounded-xl w-full h-8"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-[#0071C2] text-white font-medium rounded-xl px-14 py-2"
        >
          Tìm kiếm
        </button>
      </div>

      {/* Welcome message when logged in */}
      {isLoggedIn && (
        <div className="w-[1200px] mx-auto mb-6">
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Chào mừng <span className="font-bold">{userData?.name}</span>{" "}
                  đã quay trở lại! Chúc bạn tìm được phòng trọ ưng ý.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content displaying filtered posts */}
      <div className="flex flex-wrap justify-center mb-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="mx-4 my-4">
              <div className="bg-slate-50 h-72 w-72 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwM9ngYtyaiig-XhzL0ndyIU8oG5Qkyov6A&s"
                    alt={post.title}
                    className="h-40 rounded-t-lg w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#FF0000] truncate">
                    {post.title}
                  </p>
                  <p className="text-[#39D336]">
                    {post.price.toLocaleString()} đ/tháng - {post.area}m²
                  </p>
                  <p className="text-gray-600 text-sm">{post.location}</p>
                </div>
              </div>
            </div>
          ))
        ) : filteredPosts.length === 0 && (price || area) ? (
          <div className="text-center w-full py-8">
            <p className="text-gray-500">Không tìm thấy kết quả phù hợp</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="mx-4 my-4">
                <div className="bg-slate-50 h-72 w-72 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwM9ngYtyaiig-XhzL0ndyIU8oG5Qkyov6A&s"
                      alt={post.title}
                      className="h-40 rounded-t-lg w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-[#FF0000] truncate">
                      {post.title}
                    </p>
                    <p className="text-[#39D336]">
                      {post.price.toLocaleString()} đ/tháng - {post.area}m²
                    </p>
                    <p className="text-gray-600 text-sm">{post.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t-2 w-full border-black mb-2"></div>
    </div>
  );
};

export default Header;
