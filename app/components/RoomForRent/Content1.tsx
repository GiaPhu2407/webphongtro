"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

const Content1 = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State để quản lý hiển thị modal
  const openModal = () => {
    setModalOpen(true); // Mở modal
  };

  const closeModal = () => {
    setModalOpen(false); // Đóng modal
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-[1212px] h-auto bg-[#FFFAFA]">
        <div className="ml-10 mt-2">
          <p className="">Phòng trọ Hải Châu</p>
          <div className="flex">
            <FaMapMarkerAlt className="mt-[3px]" />
            <p>Địa chỉ: 141/45 Tiểu La, Phường Hòa Cường Bắc, Quận Hải Châu</p>
          </div>
          <div className="flex">
            <p className="text-[#39D336] text-2xl mt-2">1,6 triệu/tháng</p>
            <p className="mt-[15px] ml-20">
              Trạng Thái: <span>Còn Chỗ</span>
            </p>
            <button className="w-[170px] h-[48px] bg-[#0071C2] text-[0.875rem] font-semibold text-[#F8EFEF] rounded-2xl ml-[300px] duration-300 hover:bg-gray-400">
              Yêu Thích
            </button>
            <button
              className="w-[170px] h-[35px] bg-[#F73859] text-[#F8EFEF] rounded-2xl ml-12"
              onClick={openModal}
            >
              Thuê Ngay
            </button>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="modal-box bg-[#1266DD] p-6 rounded-lg shadow-lg">
                  <h3 className="font-bold text-lg text-center text-white">
                    Thông tin Liên Hệ
                  </h3>
                  <div className="py-10 text-center">
                    <div className="flex bg-[#39D336] h-10 mx-11 justify-center items-center rounded-xl transform transition-transform duration-300 cursor-pointer hover:scale-110">
                      <FaPhoneVolume />
                      <a href="tel:0333924997" className="ml-2 text-white">
                        0333924997
                      </a>
                    </div>
                    <p className="py-5 text-white">Hoặc</p>
                    <div className="bg-[#D9D9D9] flex h-10 mx-11 justify-center items-center rounded-xl transform transition-transform duration-300 cursor-pointer hover:scale-110">
                      <FaFacebookMessenger />
                      <a href="" className="ml-2">
                        Nhắn tin liên hệ
                      </a>
                    </div>
                  </div>
                  <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Dưới đây là phần nội dung khác */}
        <div className="ml-10">
          <p className="text-xl mt-2">Thông tin mô tả</p>
          <p className="mt-2">
            Chính chủ cho thuê phòng trọ 25-30 m2, còn một phòng master của căn
            nhà do khách có việc mới trả phòng.
          </p>
          <p className="mt-2">
            Nội thất đầy đủ (tủ Hoàng Anh Gia Lai, nệm 1.8 m, tủ lạnh, bếp, WC
            riêng) trên đường Tiểu La, gần chợ gần các chợ, trường Đại Học Ngoại
            Ngữ, Đông Á, Kiến Trúc. Gần các trường tiểu học Núi Thành, Phan Đăng
            Lưu, THCS Tây Sơn, Nguyễn Khuyến, THPT Nguyễn Hiền...
          </p>
          <p className="mt-2">Khu dân cư an ninh tốt.</p>
          <p className="mt-2">Nhà thoáng mát có cửa sổ và ban công.</p>
          <p className="mt-2">Giá thuê: 3,3 triệu đến 3.5 triệu</p>
          <p className="mt-2">Liên hệ: 0982303649</p>
          <p className="mt-4">Bản đồ</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.399470944275!2d108.21386127417912!3d16.04474724009479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c106b37bd7%3A0x8948e865bd9c8b05!2zMTQxIFRp4buDdSBMYSwgSG_DoCBDxrDhu51uZyBC4bqvYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1727101773643!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
        <div className="w-full mx-auto p-4 ">
          {/* Input Section */}
          <div className="flex items-center mb-4">
            <FaRegUser />
            <input
              type="text"
              placeholder="Nhập nội dung..."
              className="flex-grow p-2 ml-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Divider */}
          <div className="border-t h-1 w-full border-[#000000] mt-5"></div>
          <button className="ml-[1000px] mt-2 px-4 py-2 bg-[#00C2FF] text-black font-semibold rounded-lg w-[147px]">
            Bình Luận
          </button>

          {/* Comments Section */}
          <div className="space-y-4 mt-10">
            {/* Comment 1 */}
            <div className="flex items-start mt-4">
              <FaRegUser className="mt-[3px]" />
              <div>
                <p className="text-sm font-semibold ml-4">@lehuy1234</p>
                <p className="ml-4">
                  Phòng trọ oke nha mình mất tới đó xem xong
                </p>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="flex items-start mt-4">
              <FaRegUser className="mt-[3px]" />
              <div>
                <p className="text-sm font-semibold ml-4">@phu1234</p>
                <p className="ml-4">
                  Trọ không ngon nha mọi người toàn là ảo thôi
                </p>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="flex items-start mt-4">
              <FaRegUser className="mt-[3px]" />
              <div>
                <p className="text-sm font-semibold ml-4">@thinhngut245</p>
                <p className="ml-4">
                  Phòng trọ ổn nha có điều hơi xa với trường mình
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
