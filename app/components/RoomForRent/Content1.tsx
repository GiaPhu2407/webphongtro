import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const Content1 = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-[1212px] h-[1215px] bg-[#FFFAFA]">
        <div className="ml-10 mt-2">
          <p className="">Ký túc xá tây đông</p>
          <div className="flex">
            <FaMapMarkerAlt className="mt-[3px]" />
            <p>Địa chỉ: 141/45 Tiểu La, Phường Hòa Cường Bắc, Quận Hải Châu</p>
          </div>
          <div className="flex">
            <p className="text-[#39D336] text-2xl mt-2">1,6 triệu/tháng</p>
            <p className="mt-[15px] ml-20">
              Trạng Thái: <span>Còn Chỗ</span>
            </p>
            <button className="w-[170px] h-[35px] bg-[#0071C2] text-[#F8EFEF] rounded-2xl ml-[300px]">
              Yêu Thích
            </button>
            <button className="w-[170px] h-[35px] bg-[#F73859] text-[#F8EFEF] rounded-2xl ml-12">
              Thuê Ngay
            </button>
          </div>
          <div className="border-t h-1 border-[#000000]  mt-5"></div>
          <p className="text-xl mt-2">Thông tin mô tả</p>
          <p className=" mt-2">
            Chính chủ cho thuê phòng trọ 25-30 m2, còn một phòng master của căn
            nhà do khách có việc mới trả phòng.
          </p>
          <p className=" mt-2">
            Nội thất đầy đủ (tủ Hoàng Anh Gia Lai, nệm 1.8 m, tủ lạnh, bếp, WC
            riêng) trên đường Tiểu La, gần chợ gần các chợ, trường trường Đại
            Học Ngoại Ngữ, Đông Á, Kiến Trúc. Gần các trường tiểu học Núi Thành,
            Phan Đăng Lưu, THCS Tây Sơn, Nguyễn khuyến, THPT Nguyễn Hiền....
          </p>
          <p className=" mt-2">Khu dân cư an ninh tốt.</p>
          <p className=" mt-2">Nhà thoáng mát có cửa sổ và ban công.</p>
          <p className=" mt-2">Giá thuê: 3,3 triệu đến 3.5 triệu</p>
          <p className=" mt-2">Liên hệ: 0982303649</p>
          <p className="mt-4">Bản đồ</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.399470944275!2d108.21386127417912!3d16.04474724009479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c106b37bd7%3A0x8948e865bd9c8b05!2zMTQxIFRp4buDdSBMYSwgSG_DoCBDxrDhu51uZyBC4bqvYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1727101773643!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Content1;
