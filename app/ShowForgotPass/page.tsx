import React from "react";
import Header from "../components/ForgotPass/Header";
import Content from "../components/ForgotPass/Content";
import Footer from "../components/ForgotPass/Footer";
import FormForgotPass from "../components/ForgotPass/FormForgotPass";
const page = () => {
  return (
    <div>
      <Header />
      <FormForgotPass />
      <Content />
      <Footer />
    </div>
  );
};

export default page;
