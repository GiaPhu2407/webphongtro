import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-[#1266DD] w-full h-32 mt-5 relative">
          <img
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=dSIfHv9KrmkQ7kNvgEkuD7O&_nc_ht=scontent.fdad2-1.fna&_nc_gid=Azx5Mhcf7R_xMTlQu1bStmI&oh=00_AYDzvaaxZ5-mii9t7ISfzZPio0Nfomt9bvnY-o4KeXZzxw&oe=66F89C05"
            alt=""
            className="absolute w-40 h-40 top-10 left-10"
          />
        </div>
      </div>
      <div className="ml-10 0">
        <p className="mt-20">Thông tin cá nhân</p>
        <div className="ml-10">
          <div className="flex gap-10 mt-2">
            <p className="font-extralight text-black opacity-30">Giới tính</p>
            <p className="ml-24">Nam</p>
          </div>
          <div className="flex gap-10 mt-4">
            <p className="font-extralight text-black opacity-30 ">Ngày sinh</p>
            <p className="ml-[86px]">24/07/2003</p>
          </div>
          <div className="flex gap-10 mt-4">
            <p className="font-extralight text-black opacity-30">Điện Thoại</p>
            <p className="ml-20">0333924997</p>
          </div>
          <div className="flex gap-10 mt-4">
            <p className="font-extralight text-black opacity-30">Email</p>
            <p className="ml-[118px]">caongogiaphu2401072@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#1266DD] text-white py-2 px-4 rounded-lg hover:bg-[#6b8bb8]">
          Cập Nhật
        </button>
      </div>
    </div>
  );
};

export default Profile;
