"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBrandTabler } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { GrUserManager } from "react-icons/gr";
import { MdCleaningServices } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import Header from "./Header";
export function ManagerPost() {
  const links = [
    {
      label: "Dashboard",
      href: "/ShowAdmin/Dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý bài đăng",
      href: "/ShowAdmin/ShowManagerPost",
      icon: (
        <GrUserManager className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý bình luận",
      href: "/ShowAdmin/ShowManagerComment",
      icon: (
        <MdCleaningServices className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý thuê phòng",
      href: "#",
      icon: (
        <TbBrandBooking className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý tài khoản người dùng",
      href: "/ShowRoomManger",
      icon: (
        <MdOutlineBedroomParent className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý tài khoản chủ trọ",
      href: "#",
      icon: (
        <IoIosInformationCircleOutline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Gửi thông báo",
      href: "#",
      icon: (
        <FaChartLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="-mt-2">
        {" "}
        <Header />{" "}
      </div>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-white dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border  border-neutral-200 dark:border-neutral-700 overflow-hidden ",
          "min-h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
        )}
      >
        <div className="rounded-lg overflow-hidden">
          <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      className="flex items-center space-x-2 p-2 text-neutral-700 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200"
                    />
                  ))}
                </div>
              </div>
              <div>
                <SidebarLink
                  link={{
                    label: "Gia Phu",
                    href: "#",
                    icon: (
                      <img
                        src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=bOEh471GIxUQ7kNvgHsX5jW&_nc_ht=scontent.fdad2-1.fna&oh=00_AYDcWgJsXxzR4n9Z_AzzVIwJKxH7nhOj5EkpjS99C-PUzg&oe=66DB9B05"
                        className="h-7 w-7 flex-shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                      />
                    ),
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="ml-10">
      <div className=" inline-block mb-5 mt-1">
        {/* Button content */}
        <a
          href="#"
          className="bg-gradient-to-r from-blue-400 to-pink-500 text-white font-bold py-2 px-4 rounded-l-full relative z-10"
        >
          Quản Lý Bài Đăng
        </a>
        {/* Arrow part */}
        <div className="h-full w-6 bg-gradient-to-r from-blue-400 to-pink-500 skew-x-[-30deg]"></div>
      </div>
      <div className="border-2 w-[1026px] h-[1256px]">
        <p className="ml-10 mt-6 font-semibold">
          Danh sách duyệt các phòng trọ
        </p>
        {/* ID:1 */}
        <p className="mt-10 ml-10">ID:1</p>
        <div className=" flex justify-around">
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
                GẦN TRƯỜNG ĐH DUY TÂN (1km), SƯ PHẠM (2km).... - AN NINH, TIỆN
                NGHI - TT…
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
          <Link
            href={"/ShowAdmin/ShowDetails"}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2"
          >
            Xem chi tiết
          </Link>
        </div>
        {/* ID:2 */}
        <p className="mt-10 ml-10">ID:2</p>
        <div className=" flex justify-around">
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
                GẦN TRƯỜNG ĐH DUY TÂN (1km), SƯ PHẠM (2km).... - AN NINH, TIỆN
                NGHI - TT…
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
          <Link
            href={"/ShowAdmin/ShowDetails"}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2"
          >
            Xem chi tiết
          </Link>
        </div>
        {/* ID:3 */}
        <p className="mt-10 ml-10">ID:3</p>
        <div className=" flex justify-around">
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
                GẦN TRƯỜNG ĐÔNG Á ,DUY TÂN, KIẾN TRÚC , AN NINH, TIỆN NGHI - TT…
              </p>
              <p className="text-[#39D336] text-sm font-semibold">
                3.0 triệu/tháng{" "}
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
          <Link
            href={"/ShowAdmin/ShowDetails"}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2"
          >
            Xem chi tiết
          </Link>
        </div>
        {/* ID:4 */}
        <p className="mt-10 ml-10">ID:4</p>
        <div className=" flex justify-around">
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
                GẦN TRƯỜNG ĐÔNG Á ,DUY TÂN, KIẾN TRÚC , AN NINH, TIỆN NGHI - TT…
              </p>
              <p className="text-[#39D336] text-sm font-semibold">
                3.0 triệu/tháng{" "}
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
          <Link
            href={"/ShowAdmin/ShowDetails"}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2"
          >
            Xem chi tiết
          </Link>
        </div>
        {/* ID:5 */}
        <p className="mt-10 ml-10">ID:5</p>
        <div className=" flex justify-around">
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
                GẦN TRƯỜNG ĐÔNG Á ,DUY TÂN, KIẾN TRÚC , AN NINH, TIỆN NGHI - TT…

              </p>
              <p className="text-[#39D336] text-sm font-semibold">
                3.0 triệu/tháng{" "}
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
          <Link
            href={"/ShowAdmin/ShowDetails"}
            className="bg-[#FD4A4A] whitespace-nowrap h-10 px-10 rounded-xl mr-20 mt-24 pt-2"
          >
            Xem chi tiết
          </Link>
        </div>
        {/* ID:6 */}
      </div>
    </div>
  );
};
export default ManagerPost;
