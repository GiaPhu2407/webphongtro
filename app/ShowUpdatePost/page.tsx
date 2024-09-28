import React from "react";
import Header from "../components/Update/Header";
import Content from "../components/Update/Content";
import Footer from "../components/Update/Footer";
import UpdatePost from "../components/Update/UpdatePost";
const page = () => {
  return (
    <div>
      <Header />
      <UpdatePost />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
