import React from "react";

import CustomCarousel from "@/components/component/RoomForRent/Carousel";
import Content from "@/components/component/RoomForRent/Content";
import Footer from "@/components/component/RoomForRent/Footer";
import { Header } from "@/components/component/header";
const page = () => {
  return (
    <div>
      <Header />
      <CustomCarousel />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
