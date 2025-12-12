import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{minWidth="100vh"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
