import { Header } from "@/components/component/header";
import Content from "@/components/component/Profile/Content";
import Footer from "@/components/component/Profile/Footer";
import Profile from "@/components/component/Profile/Profile";
import React from "react";
const page = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Content />

      <Footer />
    </div>
  );
};

export default page;
