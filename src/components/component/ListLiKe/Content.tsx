import React from "react";

const Content = () => {
  return (
    <div>
      <div className="border-t w-full h-1 bg-[#1266DD] mt-20"></div>
      <div className="flex justify-center mt-4">
        <img
          src="https://rungduabaymau.vn/wp-content/uploads/2022/11/bien-my-Khe.jpeg"
          alt=""
          className="w-full h-[500px]  relative opacity-60"
        />
        <p className="absolute mt-20 text-2xl font-semibold text-center">
          Tại sao lại chọn PhongTroSinhVienTop.com?
        </p>
        <p className="absolute mt-40 text-center w-[80%] mx-auto ">
          Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng
          Phongtrosinhvientop.com tự hào là trang web đứng top google về các từ
          khóa: cho thuê phòng trọ, nhà trọ, thuê nhà nguyên căn, cho thuê căn
          hộ, tìm người ở ghép, cho thuê mặt bằng...Vì vậy tin của bạn đăng trên
          website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch
          nhanh hơn, tiết kiệm chi phí hơn
        </p>
        <p className="absolute mt-60 text-center">
          Chi phí thấp, hiệu quả tối đa
        </p>
        <p className="absolute mt-72 text-center">
          Bạn đang có phòng trọ / căn hộ cho thuê? <br />
          Không phải lo tìm người cho thuê, phòng trống kéo dài
        </p>
        <button className="absolute bg-[#F73859] px-5 py-3 rounded-xl mt-96  text-white hover:underline">
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
};

export default Content;
