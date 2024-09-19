import React from "react";
import Header from "../components/Register/Header";
import FormRegister from "../components/Register/FormRegister";
import Content from "../components/Register/Content";
import Footer from "../components/Register/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <FormRegister />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
