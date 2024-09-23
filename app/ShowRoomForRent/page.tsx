import React from "react";
import Header from "../components/RoomForRent/Header";
import CustomCarousel from "../components/RoomForRent/Carousel";
import Content from "../components/RoomForRent/Content";
import Footer from "../components/RoomForRent/Footer";
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
