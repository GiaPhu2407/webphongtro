import React from "react";
import Header from "../components/ListPost/Header";
import ListPost from "../components/ListPost/ListPost";
import Content from "../components/ListPost/Content";
import Footer from "../components/ListPost/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <ListPost />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
