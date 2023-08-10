import React from "react";
import logo from "../Assets/logo-ct (1).png";
import { HiHome, HiOutlineTable } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { GoSignIn } from "react-icons/go";
import { BsPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="w-[21vw] h-[95vh] fixed rounded-lg m-4 flex flex-col text-white bg-[#33444d]">
      <div className="border-b border-white/20 ">
        <Link
          to={"/"}
          className="flex items-center  py-6  justify-center space-x-3"
        >
          <img src={logo} alt="logo" className="w-[35px] rounded" />
          <h2 className="font-bold mt-1">Material Tailwind React</h2>
        </Link>
      </div>
      <div className=" mx-4 my-4">
        <ul className="space-y-1 ">
          <Link
            to={"/"}
            className="flex text-center rounded-lg px-2 py-[15px] hover:bg-[#40535e] duration-200"
          >
            <HiHome size={20} className="text-white" />
            <span className="mx-4 font-semibold">Dashboard</span>
          </Link>
          <Link
            to={"/Profile"}
            className="flex text-center px-2 rounded-lg py-[15px] hover:bg-[#40535e] duration-200"
          >
            <CgProfile size={20} className="text-white" />
            <span className="mx-4 font-semibold">Profile</span>
          </Link>
          <Link
            to={"/Tables"}
            className="flex text-center rounded-lg py-[15px] px-2 hover:bg-[#40535e] duration-200"
          >
            <HiOutlineTable size={20} className="text-white" />
            <span className="mx-4 font-semibold">Tables</span>
          </Link>
          <Link>
            <p className="text-sm mx-5 my-5 text-gray-300 font-semibold">
              AUTH PAGES
            </p>
          </Link>
          <Link
            to={"/SignIn"}
            className="flex text-center px-2 rounded-lg py-[15px] hover:bg-[#40535e] duration-200"
          >
            <GoSignIn size={20} className="text-white" />
            <span className="mx-4 font-semibold">Sign In</span>
          </Link>
          <Link
            to={"/Signup"}
            className="flex text-center px-2 rounded-lg py-[15px] hover:bg-[#40535e] duration-200"
          >
            <BsPersonPlusFill size={20} className="text-white" />
            <span className="mx-4 font-semibold">Sign Up</span>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
