import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <div className="mt-10">
        <a href="" className="text-2xl font-bold ml-5 mt-10">
          <span className="text-blue-600 ">PhongTroSinhVien</span>
          <span className="text-red-600">Top</span>.com
        </a>
      </div>
      <div className="flex justify-around mt-5 ">
        <div>
          <p> Về PHONGTROSINHVIENTOP.COM</p>
          <ul className="list-disc ml-7">
            <li>Trang Chủ</li>
            <li>Giới thiệu</li>
            <li>Blog</li>
            <li>Quy Chế hoạt động</li>
            <li>Quy định sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div>
          <p> Hỗ trợ khách hàng</p>
          <ul className="list-disc ml-7">
            <li>Câu hỏi thường gặp</li>
            <li>Hướng dẫn đăng tin</li>
            <li>Bảng giá dịch vụ</li>
            <li>Quy định đăng tin</li>
            <li>Giải quyết khiếu nại</li>
          </ul>
        </div>
        <div>
          <p>Liên hệ với chúng tôi</p>
          <div className="flex gap-4">
            <Link href={""}>
              <div>
                <FaFacebook className="text-blue-700 text-2xl" />
              </div>
            </Link>

            <IoLogoYoutube className="text-red-600 text-2xl" />
            <img
              src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
              alt=""
              className="w-5 h-5 mt-[2px]"
            />
            <AiFillTwitterCircle className="text-blue-500 text-2xl" />
          </div>
          <p className="mt-5">Phương thức thanh toán</p>
          <div className="flex ">
            <img src="/img/icon.png" alt="" className=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
