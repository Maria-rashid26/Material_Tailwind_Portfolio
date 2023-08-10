import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import bg from "../Assets/photo-1531512073830-ba890ca4eba2.avif";
import Platforms from "./Platforms";
import Platformssetting from "./Platformssetting";
import Projects from "./Projects";
import Profilefoter from "./Profilefoter";

const Profile = () => {
  return (
    <div className="py-4 ">
      {/* navbar  start*/}
      <div className="flex justify-between  mx-4">
        <div className="rounded-lg">
          <ul className="flex space-x-2 text-sm ">
            <Link
              to={"/Dashboard"}
              className="text-[1rem] font-semibold text-gray-500 hover:text-blue-600 duration-200"
            >
              Dashboard
            </Link>
            <li>/</li>
            <li>Profile</li>
          </ul>
          <h3 className="font-semibold">Profile</h3>
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

      {/* backgorun image */}
      <div className=" mt-11 relative ">
        <img
          src={bg}
          alt=""
          className="h-72   mt-4 w-[990px] bg-center rounded-3xl mx-4"
        />
        <div className="absolute inset-0 bg-blue-400/50 h-72 w-[990px]  rounded-3xl mx-4"></div>

        {/* backgorun image */}
        <div className="bg-white -mt-16 rounded-2xl relative mx-8 py-4 shadow-xl">
          <Platforms />
          <Platformssetting />
          <Projects />
        </div>
        <Profilefoter />
      </div>
    </div>
  );
};

export default Profile;
