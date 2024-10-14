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

import PieChartDemo from "@/components/pieChart";

import ChartDemoPage from "@/components/Barchar";
import { Header } from "@/components/header1";

export function DashBoard() {
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
      href: "/ShowAdmin/ShowManagerHireRoom",
      icon: (
        <TbBrandBooking className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý tài khoản người dùng",
      href: "/ShowAdmin/ShowManagerUsers",
      icon: (
        <MdOutlineBedroomParent className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý tài khoản chủ trọ",
      href: "/ShowAdmin/ShowManagerAccinnkeeper",
      icon: (
        <IoIosInformationCircleOutline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="-mt-2">
        <Header />
      </div>

      <div
        className={cn(
          "rounded-md mt-1 flex flex-col md:flex-row bg-white dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "min-h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
        )}
      >
        {/* Updated Sidebar with margin */}
        <div className="">
          {" "}
          {/* Add margin here to create space */}
          <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      className="flex items-center rounded-3xl space-x-2 p-2 text-neutral-700 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
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
    <div className="">
      <p className="bg-clip- ml-6  ">Welcome Back</p>
      <div className="bg-[#F9F7F7] mt-10 ml-5 w-full h-24 relative">
        <div className="flex justify-between">
          <div className="ml-10">
            {" "}
            <p className="font-semibold">Tổng số người truy cập</p>
            <p className="mt-5 font-medium">+16M People</p>
          </div>
          <div>
            {" "}
            <img
              src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-1/428603879_3699291333727981_8450238390845543097_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=dSIfHv9KrmkQ7kNvgEkuD7O&_nc_ht=scontent.fdad2-1.fna&_nc_gid=AqFcB6TXBD7bdG7ouD6rZvQ&oh=00_AYAxuIAP-XZ3c_KHOQ2KDN-LlDLu6doA2KX9Tt3BdhXu0A&oe=66FA05C7"
              alt=""
              className="absolute -top-3 w-10 h-10 rounded-full"
            />
            <p className="mt-10 mr-2">+100 People</p>
          </div>
        </div>
      </div>
      <div className=" w-[1000px] overflow-hidden shadow-blue-800 mt-5">
        <ChartDemoPage />
      </div>
      <div className=" w-[1000px]  shadow-blue-800 mt-5 ">
        <PieChartDemo />
      </div>
    </div>
  );
};
export default DashBoard;
