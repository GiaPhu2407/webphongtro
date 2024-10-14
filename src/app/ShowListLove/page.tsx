import React from "react";
import Header from "../components/ListLiKe/Header";
import Footer from "../components/ListLiKe/Footer";
import Content from "../components/ListLiKe/Content";
import List from "../components/ListLiKe/List";
const page = () => {
  return (
    <div>
      <Header />
      <List />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
