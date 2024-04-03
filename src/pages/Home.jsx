import React from "react";
import Main from "../componenets/home_components/Main";
import AboutMe from "../componenets/home_components/AboutMe";
import Sports from "../componenets/home_components/Sports";
import Different from "../componenets/home_components/Different";
import Contact from "../componenets/home_components/Contact";

const Home = () => {
  return (
    <div>
      <Main />
      <AboutMe />
      <Sports />
      <Different />
      <Contact />
    </div>
  );
};

export default Home;
