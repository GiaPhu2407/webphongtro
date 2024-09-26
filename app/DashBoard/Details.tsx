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

import { IoArrowBackCircle } from "react-icons/io5";

import Header from "./Header";

export function Details() {
  const roomPosts = [
    {
      id: 1,
      img: "image1-url",
      title: "GẦN TRƯỜNG GTVT, NGOẠI THƯƠNG, HUTECH, HỒNG BÀNG...",
      price: "4.5 triệu/tháng",
      size: "30m2",
      location: "Quận Cẩm Lệ, Đà Nẵng",
      ownerImg: "owner1-url",
      ownerName: "Nhà trọ ngõ sen",
    },
    // other posts
  ];
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
      href: "/ShowServiceManager",
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
        <div className="flex mb-2">
          <Link href="/ShowAdmin/ShowManagerPost">
            <IoArrowBackCircle className="text-2xl mt-6 ml-6 text-purple-500 transition-transform transform hover:scale-110" />
          </Link>

          <p className=" mt-6 font-semibold ">Chi tiết bài đăng</p>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP8Zb0j-VI4vNjGBp4knIPg6W1KyFkKVKtp_Ga7DJnw5DBSwBQv2lRlVw3OG7Fg3VocVI&usqp=CAU"
            alt=""
            className="ml-10"
          />
          <p className="ml-10 text-2xl text-[#FA0404] mt-3">
            Ký túc xá tây đông
          </p>

          <div className="flex justify-around mt-2">
            <p>
              Địa chỉ: Đường Nguyễn Xuân Hữu, Phường Hòa Thọ Đông, Quận Cẩm Lệ,
              Đà Nẵng
            </p>
            <p> Người đăng: Nhà trọ ngỏ sen</p>
          </div>
          <div className="flex gap-10 mt-2 ml-5">
            <p className="text-[#39D336] text-2xl mt-4">1,6 triệu/tháng</p>
            <p className="mt-5"> Trạng Thái:Còn Chỗ</p>
            <button className="bg-[#39D336] px-7 py-3 rounded-3xl ml-20">
              Duyệt Bài
            </button>
            <button className="bg-[#F73859]  px-7 py-3 rounded-3xl">
              Xoá bài
            </button>
          </div>
        </div>
        <div className="border-[1px] border-black mt-5"></div>
        <p className="ml-10">
          Thông tin mô tả <br />
          free 100% tiền phòng tháng đầu <br />
          Vị trí: Gần công viên Hoàng Văn Thái <br />- Gần trường Đại học Đông Á{" "}
          <br />- Thuận đường đi qua các Quận Cẩm lệ, <br />
          --- <br />
          Mỗi bạn một không gian riêng, tủ đồ riêng. <br />
          Bếp sử dụng chung. <br />
          Có máy lạnh, máy giặt. <br />
          Wifi dùng tẹt ga. <br />
          Ra vào bằng cửa khóa vân tay. <br />
          Tòa nhà có thang máy, hầm giữ xe. <br />
          Bảo vệ và quản lý 24/7. <br />
          --- <br />
          Giá siêu ưu đãi: Chỉ 1.600.000đ/tháng. <br />
          Bao full chi phí điện nước và internet. <br />
          Địa chỉ: 71 Nguyễn Xuân Hửu P. HTD, Cẩm Lệ.
        </p>
      </div>
    </div>
  );
};
export default Details;
