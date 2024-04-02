import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componenets/Header";
import Footer from "../componenets/Footer";

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
