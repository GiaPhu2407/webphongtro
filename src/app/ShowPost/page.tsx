import { Header } from "@/components/component/header";
import Content from "@/components/component/Post/Content";
import Footer from "@/components/component/Post/Footer";
import NewPost from "@/components/component/Post/NewPost";
import React from "react";

const page = () => {
  return (
    <div>
      <Header/>
      <NewPost />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
