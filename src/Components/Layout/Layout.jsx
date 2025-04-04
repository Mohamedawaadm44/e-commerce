import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./../Footer/Footer";
import { AuthContextObject } from "../../Context/AuthContext";

export default function Layout() {
  const { token, setToken } = useContext(AuthContextObject);
  useEffect(function () {
    if (localStorage.getItem("tkn")) {
      setToken(localStorage.getItem("tkn"));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
