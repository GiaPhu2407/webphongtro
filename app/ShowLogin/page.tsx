import React from "react";
import Header from "../components/Login/Header";
import FormLogin from "../components/Login/FormLogin";
import Content from "../components/Login/Content";
import Footer from "../components/Login/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <FormLogin />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
