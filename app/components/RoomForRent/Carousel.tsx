import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel as UICarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/86/2020/02/18085024/dragon-bridge-and-firework-ph%C3%A1o-hoa-tr%C3%AAn-c%E1%BA%A7u-r%E1%BB%93ng-Danang-Discovery-4-famous-bridge-in-danang-Restaurant-near-me-dragon-bridge-history-a-new-iconic-image-of-danang.jpg", // Add your image URLs here
  "https://danasun.vn/wp-content/uploads/2022/07/xay-dung-nha-tro-tai-da-nang.jpg",
  "https://cdn.hanamihotel.com/wp-content/uploads/2022/09/cai-tao-nha-tro-tai-da-nang-2.jpg?strip=all&lossy=1&ssl=1",
  "https://sbshouse.vn/wp-content/uploads/2020/05/thiet-ke-nha-tro-cho-thue-ket-hop-sieu-thi-6.jpg",
  "https://cdn.tuoitre.vn/zoom/480_300/2022/7/4/20220527121640-fcb9wm-1656938143947883165271-crop-1656938226347519040255.jpg",
];

const CustomCarousel = () => {
  return (
    <div>
      <p className="ml-[220px] mt-10 text-[#0095FF] ">
        <span className="underline">Cho thuê phòng trọ </span>&gt;{" "}
        <span className="underline">Đà Nẵng </span>&gt;{" "}
        <span className="underline">Quận Cẩm Lệ </span>&gt;{" "}
        <span className="text-black">Ký túc xá Tây Đông</span>
      </p>

      <div className=" flex justify-center items-center">
        <div className="mr-20 w-[600px] ">
          <UICarousel className="w-full mx-10  ">
            <CarouselContent>
              {images.map((imageSrc, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-1">
                    <Card className="w-full h-full rounded-xl border border-gray-300">
                      <CardContent className="p-0">
                        {" "}
                        {/* Remove padding */}
                        <img
                          src={imageSrc}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-[399px] object-cover rounded-xl"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </UICarousel>
        </div>
        <div className="bg-[#DFBF19] w-[326px] h-[399px] ml-4 text-center content-center">
          <div className="flex justify-center items-center">
            {" "}
            <img
              src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/434941654_3533038120250575_2945335566309772509_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGBXos31h9jJMwhKR1qoQb5rujAOIn97oOu6MA4if3ugzIXWDcW2d2Mj-CWLxLvRcEjMfGiiMDqwhxR4QmWRIgu&_nc_ohc=q0rFiTcp1jcQ7kNvgFokIpa&_nc_ht=scontent.fdad1-4.fna&oh=00_AYDeIP4lhHmlEWOg5RXKmqlo5D800S2oqEEFw70VYeStZQ&oe=66F741BD"
              alt=""
              className="rounded-full w-20 h-20 mb-10"
            />
          </div>

          <p className="mb-5">Dịu Hiền</p>
          <div className="flex justify-center items-center">
            <p className="bg-[#39D336] w-3 h-3 rounded-3xl mt-1"></p>
            <p>Đang hoạt động</p>
          </div>
        </div>
      </div>
      <div className="border-t h-1 border-[#1266DD]  mt-5"></div>
    </div>
  );
};

export default CustomCarousel;
