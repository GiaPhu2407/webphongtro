"use client";
import React, { useEffect, useRef, useState } from "react";

const UpdatePost = () => {
  const [image, setImage] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null); // State for video URL
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        console.error("Selected file is not an image");
        return;
      }
      try {
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
      } catch (error) {
        console.error("Error generating image URL:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("video/")) {
        console.error("Selected file is not a video");
        return;
      }
      try {
        const videoURL = URL.createObjectURL(file);
        setVideo(videoURL);
      } catch (error) {
        console.error("Error generating video URL:", error);
      }
    } else {
      console.log("No file selected");
    }
  };

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = e.currentTarget;
    setImageSize({ width: img.naturalWidth, height: img.naturalHeight }); // Set natural width and height
  };

  const handleChangeImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input dialog
    }
  };

  const handleDeleteImage = () => {
    setImage(null); // Clear the image state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  };

  const handleDeleteVideo = () => {
    setVideo(null); // Clear video state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  };

  // Clean up URLs
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image); // Clean up image URL
      }
      if (video) {
        URL.revokeObjectURL(video); // Clean up video URL
      }
    };
  }, [image, video]);

  return (
    <div>
      <div>
        <p className="text-2xl font-semibold">Đăng tin mới</p>
        <div className="border-t w-full h-1 bg-[#1266DD] "></div>
        <p className="text-center text-xl">Địa chỉ cho thuê</p>

        {/* Location Input Fields */}
        <div className="flex justify-center items-center gap-56">
          <div>
            <p>Tỉnh thành phố</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Chọn tỉnh thành phố--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
          <div>
            <p>Quận/huyện</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Quận/huyện--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
          <div>
            <p>Phường/Xã</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Phường/Xã--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
          <div>
            <p>Đường/Phố</p>
            <select className="border-2 p-2 bg-[#FFF5F5] rounded-2xl">
              <option value="">--Đường/Phố--</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
          </div>
        </div>

        {/* Address Input Field */}
        <div className="ml-1 text-center mr-80 mt-2">
          <p className="mr-[880px] text-center">Địa chỉ chính xác</p>
          <input type="text" className="bg-[#FFF5F5] w-[1350px] rounded-2xl" />
        </div>

        {/* Description Information */}
        <div>
          <p className="text-center text-2xl mt-1">Thông tin mô tả</p>
          <div className="flex justify-between items-start gap-10">
            {/* Left Side */}
            <div className="flex-1 ml-1">
              <p>Tiều đề</p>
              <input
                type="text"
                className="bg-[#FFF5F5] w-full h-10 rounded-2xl"
              />
              <p>Mô tả</p>
              <textarea
                cols={36}
                rows={5}
                className="bg-[#FFF5F5] w-full rounded-2xl"
              ></textarea>

              {/* Image Upload Section */}
              <div
                className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg bg-red-50 mt-4"
                style={{
                  width: image ? Math.min(imageSize.width, 400) : "100%", // Set max width
                  height: image ? "auto" : "8rem", // Adjust height dynamically
                }}
              >
                {!image ? (
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <span className="text-4xl text-gray-400">+</span>
                    <span className="mt-2 text-sm text-gray-600">Thêm Ảnh</span>
                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef} // Reference for file input
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src={image}
                      alt="Uploaded"
                      onLoad={handleImageLoad} // Set image size once loaded
                      style={{
                        maxWidth: "100%", // Ensure it doesn't overflow
                        maxHeight: "100%",
                      }}
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleChangeImageClick} // Trigger the image change
                      >
                        Thay đổi ảnh
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                        onClick={handleDeleteImage} // Handle image delete
                      >
                        Xoá ảnh
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 mb-[250px]">
              <p>Thông tin liên hệ</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="bg-[#FFF5F5] w-full h-10 rounded-2xl"
                  placeholder="Nhập họ "
                />
                <input
                  type="text"
                  className="bg-[#FFF5F5] w-full h-10 rounded-2xl"
                  placeholder="Nhập tên"
                />
              </div>
              <input
                type="text"
                className="bg-[#FFF5F5] w-full h-10 rounded-2xl mt-6"
                placeholder="Số điện thoại"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  className="bg-[#FFF5F5] w-full h-10 rounded-2xl mt-12"
                  placeholder="Đối tượng"
                />
                <input
                  type="text"
                  className="bg-[#FFF5F5] w-full h-10 rounded-2xl mt-12"
                  placeholder="Diện tích"
                />
              </div>

              {/* Video Upload Section */}
              <div
                className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-lg bg-red-50 mt-4"
                style={{
                  width: video ? Math.min(imageSize.width, 700) : "100%", // Set max width
                  height: video ? "auto" : "8rem", // Adjust height dynamically
                }}
              >
                {!video ? (
                  <label className="flex flex-col items-center justify-center cursor-pointer">
                    <span className="text-4xl text-gray-400">+</span>
                    <span className="mt-2 text-sm text-gray-600">
                      Thêm Video
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef} // Reference for file input
                      onChange={handleVideoUpload} // Use the new handler
                      accept="video/*" // Accept video files
                    />
                  </label>
                ) : (
                  <div className="flex flex-col items-center">
                    <video
                      src={video}
                      controls // Add controls to the video player
                      style={{
                        maxWidth: "100%", // Ensure it doesn't overflow
                        maxHeight: "100%",
                      }}
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleChangeImageClick} // Trigger the video change
                      >
                        Thay đổi video
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                        onClick={handleDeleteVideo} // Handle video delete
                      >
                        Xoá video
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Add this section at the bottom of your form */}
          <div className="flex justify-center -mt-40">
            <button className="bg-[#1266DD] text-white py-2 px-4 rounded-lg hover:bg-[#6b8bb8]">
              Cập nhật lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
