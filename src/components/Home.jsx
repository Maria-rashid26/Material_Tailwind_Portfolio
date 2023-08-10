import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row font-Roboto  bg-[#f5f7f8]">
      <Sidebar />
      <div className=" relative left-80  overflow-hidden  w-[75vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
