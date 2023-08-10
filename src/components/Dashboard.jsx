import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import Dashboardfooter from "./Dashboardfooter";

const Dashboard = () => {
  return (
    <div className=" py-4 mt-2 bg-[#f5f7f8] h-[100vh] overflow-hidden">
      {/* navbar  start*/}
      <div className="flex justify-between  mx-8">
        <div className="rounded-lg">
          <ul className="flex text-sm ">
            <Link
              to={"/Dashboard"}
              className="text-[1rem] mt-3 font-semibold text-gray-500 hover:text-blue-600 duration-200"
            >
              Dashboard
            </Link>
          </ul>
        </div>
        <div className="flex space-x-4 ">
          <input
            type="text"
            placeholder="Type here"
            className="py-[8px] placeholder:text-sm bg-transparent placeholder:text-gray-500 border outline-none px-4 border-gray-400 rounded-lg focus:border-blue-500 focus:border-2 duration-200 "
          />
          <ul className="flex justify-between items-center text-gray-500">
            <Link
              to={"/SignIn"}
              className="flex text-center rounded-xl text-[0.75rem] py-[0.9rem] font-semibold px-4 hover:bg-gray-200 duration-200"
            >
              <CgProfile size={18} className="mx-1" />
              SIGN IN
            </Link>
            <li className="p-3 rounded-lg hover:bg-gray-200 duration-200">
              <span>
                <AiFillSetting size={20} className="" />
              </span>
            </li>
            <li className="p-3 rounded-lg hover:bg-gray-200 duration-200">
              <span>
                <MdNotifications size={20} className="" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* navbar end */}

      <Dashboardfooter />
    </div>
  );
};

export default Dashboard;
