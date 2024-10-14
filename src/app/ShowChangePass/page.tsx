import Content from "@/components/component/ChangePass/Content";
import Footer from "@/components/component/ChangePass/Footer";
import FormChangePass from "@/components/component/ChangePass/FormChangePass";
import { Header } from "@/components/header1";
import React from "react";

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
