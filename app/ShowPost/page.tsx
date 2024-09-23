import React from "react";
import Header from "../components/Post/Header";
import NewPost from "../components/Post/NewPost";
import Content from "../components/Post/Content";
import Footer from "../components/Profile/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <NewPost />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
