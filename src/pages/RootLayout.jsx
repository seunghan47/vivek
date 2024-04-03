import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componenets/page_wrapper/Header";
import Footer from "../componenets/page_wrapper/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
