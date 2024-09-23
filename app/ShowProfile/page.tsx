import React from "react";
import Header from "../components/Profile/Header";
import Content from "../components/Profile/Content";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Profile/Footer";

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
