import React from "react";
import Header from "../components/ChangePass/Header";
import FormChangePass from "../components/ChangePass/FormChangePass";
import Content from "../components/ChangePass/Content";
import Footer from "../components/ChangePass/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <FormChangePass />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
