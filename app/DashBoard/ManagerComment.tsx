"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBrandTabler } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { GrUserManager } from "react-icons/gr";
import { MdCleaningServices } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Header from "./Header";
import { MdDelete } from "react-icons/md";
export function ManagerComment() {
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

export const Dashboard = () => {
  // Danh sách các bình luận
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "@lehuy1234",
      content: "Phòng trọ này oke nha mình mới tới xem xong mng",
    },
    {
      id: 2,
      username: "@giaphu",
      content: "Dịch vụ tốt, chủ nhà thân thiện.",
    },
    {
      id: 3,
      username: "@viet",
      content: "Dịch vụ quá chuyên nghiệp, perfect mng ạ.",
    },
  ]);

  // State để quản lý việc hiển thị thông báo
  const [deleteMessage, setDeleteMessage] = useState<string>("");

  // Hàm xử lý sự kiện xoá
  const handleDelete = (commentId: string | number) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );

    setDeleteMessage("Đã xóa bình luận thành công");
    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  };

  return (
    <div className="ml-10">
      <div className="inline-block mb-5 mt-4">
        {/* Button content */}
        <a
          href="#"
          className="bg-gradient-to-r from-blue-400 to-pink-500 text-white font-bold py-2 px-4 rounded-l-full relative z-10"
        >
          Quản Lý Bài Đăng
        </a>

        {/* bài đăng 1 */}
        <div className="bg-[#D9D9D9] w-[1052px] h-[1020px] mt-4">
          <p className="ml-5 mb-10">Danh sách bình luận (Bài đăng 1)</p>
          <div className="bg-[#FFFFFF] w-[975px] h-[929px] ml-10">
            <div className="ml-3 mt-1">
              <p className="mb-4 text-[#F73859]">ID Bài đăng : 1</p>
              <p className="text-[#24A521]">ID Chủ trọ : 1</p>
            </div>
            {/* Danh sách bình luận */}
            {comments.map((comment) => (
              <div key={comment.id} className="flex mt-1 items-center">
                <div>
                  <FaUser />
                </div>
                <div className="ml-2">
                  <p>{comment.username}</p>
                  <p>{comment.content}</p>
                </div>
                <div className="flex ml-auto gap-10 mt-1 items-center">
                  <FaCircleCheck className="text-green-500 text-xl" />
                  <p>Duyệt</p>
                  <MdDelete
                    className="text-red-600 text-xl cursor-pointer"
                    onClick={() => handleDelete(comment.id)}
                  />
                  <p className="mr-4">Xoá</p>
                </div>
              </div>
            ))}

            {/* Thông báo khi xóa */}
            {deleteMessage && (
              <p className="text-red-500 mt-2">{deleteMessage}</p>
            )}
          </div>
        </div>

        {/*bài đăng 2 */}
        <div className="bg-[#D9D9D9] w-[1052px] h-[1020px] -mt-2 ">
          <div className="bg-[#FFFFFF] w-[975px] h-[929px] ml-10">
            <div className="ml-3 mt-1">
              <p className="mb-4 text-[#F73859]">ID Bài đăng : 2</p>
              <p className="text-[#24A521]">ID Chủ trọ : 2</p>
            </div>
            {/* Danh sách bình luận */}
            {comments.map((comment) => (
              <div key={comment.id} className="flex mt-1 items-center">
                <div>
                  <FaUser />
                </div>
                <div className="ml-2">
                  <p>{comment.username}</p>
                  <p>{comment.content}</p>
                </div>
                <div className="flex ml-auto gap-10 mt-1 items-center">
                  <FaCircleCheck className="text-green-500 text-xl" />
                  <p>Duyệt</p>
                  <MdDelete
                    className="text-red-600 text-xl cursor-pointer"
                    onClick={() => handleDelete(comment.id)}
                  />
                  <p className="mr-4">Xoá</p>
                </div>
              </div>
            ))}

            {/* Thông báo khi xóa */}
            {deleteMessage && (
              <p className="text-red-500 mt-2">{deleteMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerComment;
