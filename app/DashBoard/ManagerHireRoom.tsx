"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBrandTabler } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GrUserManager } from "react-icons/gr";
import { MdCleaningServices } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
import Header from "./Header";
import { cn } from "@/lib/utils";

export function ManagerHireRoom() {
  const links = [
    {
      label: "Dashboard",
      href: "/ShowAdmin/Dashboard",
      icon: <IconBrandTabler className="h-5 w-5" />,
    },
    {
      label: "Quản lý bài đăng",
      href: "/ShowAdmin/ShowManagerPost",
      icon: <GrUserManager className="h-5 w-5" />,
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
      href: "/ShowRoomManger",
      icon: <MdOutlineBedroomParent className="h-5 w-5" />,
    },
    {
      label: "Quản lý tài khoản chủ trọ",
      href: "#",
      icon: <IoIosInformationCircleOutline className="h-5 w-5" />,
    },
    {
      label: "Gửi thông báo",
      href: "#",
      icon: <FaChartLine className="h-5 w-5" />,
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
          "rounded-md flex flex-col md:flex-row bg-white dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "min-h-screen"
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

interface Comment {
  id: number;
  tenkhachang: string;
  idbaidang: string;
  TenChuTro: string;
  NgayThue: string;
  TrangThai: string;
}

export const Dashboard = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      tenkhachang: "@lehuy1234",
      idbaidang: "1",
      TenChuTro: "Gia Phú",
      NgayThue: "18/11/2024",
      TrangThai: "Đã đặt",
    },
    {
      id: 2,
      tenkhachang: "@giaphu",
      idbaidang: "2",
      TenChuTro: "Nguyễn Văn A",
      NgayThue: "20/11/2024",
      TrangThai: "Chưa đặt",
    },
    {
      id: 3,
      tenkhachang: "@vietngu",
      idbaidang: "3",
      TenChuTro: "Lê Huy",
      NgayThue: "22/11/2024",
      TrangThai: "Đã đặt",
    },
  ]);

  const [editComment, setEditComment] = useState<Comment | null>(null);
  const [deleteMessage, setDeleteMessage] = useState("");

  const handleDelete = (commentId: number) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
    setDeleteMessage("Đã xóa bình luận thành công");

    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  };

  const handleEdit = (comment: Comment) => {
    setEditComment({ ...comment });
  };

  const handleSave = () => {
    if (editComment) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === editComment.id ? editComment : comment
        )
      );
      setEditComment(null);
    }
  };

  return (
    <div className="p-4 flex flex-col w-full overflow-y-auto">
      <div className="border-2 w-[1052px] h-[2000px] mt-4">
        <p className="ml-5 mb-10 mt-10 text-xl font-semibold">
          Danh sách thuê phòng
        </p>
        <table className="min-w-full  border-gray-200">
          <thead>
            <tr>
              <th className="border-r px-4 py-2">ID</th>
              <th className="border-r px-4 py-2">Tên Khách Hàng</th>
              <th className="border-r px-4 py-2">Tên Chủ Trọ</th>
              <th className="border-r px-4 py-2">Ngày Thuê</th>
              <th className="border-r px-4 py-2">Trạng Thái</th>
              <th className="border-r px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td className="border-r px-4 py-2">{comment.id}</td>
                <td className="border-r px-4 py-2">{comment.tenkhachang}</td>
                <td className="border-r px-4 py-2">{comment.TenChuTro}</td>
                <td className="border-r px-4 py-2">{comment.NgayThue}</td>
                <td className="border-r px-4 py-2">{comment.TrangThai}</td>
                <td className="border-r px-4 py-2">
                  <button
                    onClick={() => handleEdit(comment)}
                    className="text-blue-500 hover:underline"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteMessage && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">
            {deleteMessage}
          </div>
        )}
        {editComment && (
          <div className="mt-4">
            <h2 className="text-xl mb-2">Chỉnh sửa thông tin</h2>
            <label className="mt-4 block">ID:</label>
            <input
              type="number" // Đảm bảo loại là number
              value={editComment.id}
              onChange={
                (e) =>
                  setEditComment({ ...editComment, id: Number(e.target.value) }) // Chuyển đổi giá trị sang số
              }
              className="border p-2 rounded mb-2 w-full"
            />

            <label className="mt-4 block">Username:</label>
            <input
              type="text"
              value={editComment.tenkhachang}
              onChange={(e) =>
                setEditComment({ ...editComment, tenkhachang: e.target.value })
              }
              className="border p-2 rounded mb-2 w-full"
            />

            <label className="mt-4 block">Tên chủ trọ:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-2"
              type="text"
              value={editComment.TenChuTro}
              onChange={(e) =>
                setEditComment({ ...editComment, TenChuTro: e.target.value })
              }
            />

            <label className="mt-4 block">Ngày thuê:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-2"
              type="text"
              value={editComment.NgayThue}
              onChange={(e) =>
                setEditComment({ ...editComment, NgayThue: e.target.value })
              }
            />

            <label className="mt-4 block">Trạng thái:</label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-2"
              type="text"
              value={editComment.TrangThai}
              onChange={(e) =>
                setEditComment({ ...editComment, TrangThai: e.target.value })
              }
            />
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Lưu
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerHireRoom;
