import React from "react";
import Header from "../components/Admin/Header";
import Content from "../components/Admin/Content";
import Carousel from "../components/Admin/Carousel";
import Footer from "../components/Admin/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
