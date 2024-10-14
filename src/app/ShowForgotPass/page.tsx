import Content from "@/components/component/ForgotPass/Content";
import Footer from "@/components/component/ForgotPass/Footer";
import FormForgotPass from "@/components/component/ForgotPass/FormForgotPass";
import { Header } from "@/components/component/header";
import React from "react";

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
