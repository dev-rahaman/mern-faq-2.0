import React from "react";
import Footer from "../Sheared/Footer";
import Header from "../Sheared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
