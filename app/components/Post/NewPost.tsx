import React from "react";

const NewPost = () => {
  return (
    <div>
      <div>
        <p className="text-2xl font-semibold">Đăng tin mới</p>
        <div className="border-t w-full h-1 bg-[#1266DD] "></div>
        <p className="text-center text-xl">Địa chỉ cho thuê</p>

        <div className="flex justify-center items-center gap-56">
          <div>
            <p>Tỉnh thành phố</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Chọn tỉnh thành phố--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà N��ng">Đà N��ng</option>
            </select>
          </div>
          <div>
            <p>Quận/huyện</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Quận/huyện--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà N��ng">Đà N��ng</option>
            </select>
          </div>
          <div>
            <p>Phường/Xã</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Phường/Xã--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà N��ng">Đà N��ng</option>
            </select>
          </div>
          <div>
            <p>Đường/Phố</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Đường/Phố--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà N��ng">Đà N��ng</option>
            </select>
          </div>
        </div>

        <div className="ml-1 text-center mr-80 mt-2">
          <p className="mr-[880px] text-center">Địa chỉ chính xác</p>
          <input
            type="text"
            name=""
            id=""
            className="bg-[#8D90AC] w-[1350px] rounded-2xl"
          />
        </div>

        <div>
          <p className="text-center text-2xl mt-1">Thông tin mô tả</p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
