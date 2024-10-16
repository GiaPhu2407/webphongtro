"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "../components/component/header";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import Carousel from "@/components/component/Carousel";
import Content from "@/components/component/Content";
import Footer from "@/components/component/Footer";
interface Post {
  id: number;
  title: string;
  price: number;
  area: number;
  location: string;
}
export default function Home() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
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
      location: "Quận Hải Châu, Đà Nẵng",
    },
    // Add more posts as needed
    {
      id: 4,
      title: "GẦN TRƯỜNG ĐH DUY TÂN",
      price: 2000000,
      area: 10,
      location: "Quận Thanh Khê, Đà Nẵng",
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
      <Header />
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
            <Link href={`/ShowRoomForRent`} key={post.id}>
              <div className="flex justify-center items-center">
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
            </Link>
          ))
        ) : (
          <p className="ml-32 hidden"></p>
        )}
      </div>

      <Carousel />
      <Content />
      <Footer />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Phongtrosinhvien. Bản quyền thuộc về mọi quyền.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <div className="text-xs hover:underline underline-offset-4">
            Điều khoản dịch vụ
          </div>
          <div className="text-xs hover:underline underline-offset-4">
            Chính sách bảo mật
          </div>
        </nav>
      </footer>
    </div>
  );
}
