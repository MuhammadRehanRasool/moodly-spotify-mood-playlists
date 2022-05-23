import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./../views/Home";
import About from "./../views/About";
import Contact from "./../views/Contact";
export default function Layout() {
  let __init_session = {
    personal: {
      name: "",
      email: "",
      password: "",
      addedAt: "",
      _id: "",
    },
    isLoggedIn: false,
  };
  const [data, setData] = useState(__init_session);
  useEffect(() => {
    let sessionData = JSON.parse(sessionStorage.getItem("loggedin"));
    if (sessionData) {
      setData({
        personal: sessionData.data,
        isLoggedIn: true,
      });
    }
  }, []);
  return (
    <>
      <Navbar session={data} setSession={setData} />
      <Home session={data} />
      <About />
      <Contact />
    </>
  );
}
