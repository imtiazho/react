import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./Root.css";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="rott-main">
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
