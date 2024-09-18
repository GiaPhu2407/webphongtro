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
                          className="w-full h-[350px] object-cover rounded-xl"
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
        <div className="">
          <img
            src="https://bds123.cdn.static123.com/images/thumbs/900x600/fit/2024/06/29/f03359771c88aa9e49bd5ac477ed7260_1719624650.jpg"
            alt=""
            className="w-[400px] h-[150px] ml-28 object-cover rounded-xl"
          />
          <img
            src="https://bds123.cdn.static123.com/images/thumbs/900x600/fit/2023/09/27/70_1695787728.jpg"
            alt=""
            className="w-[400px] h-[200px] ml-28 mt-2 rounded-xl"
          />
        </div>
      </div>
      <div className="border-t h-1 border-[#1266DD]  mt-5"></div>
    </div>
  );
};

export default CustomCarousel;
