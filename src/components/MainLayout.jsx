import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


const MainLayout = () => {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
