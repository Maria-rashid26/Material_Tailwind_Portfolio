import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import Adminpageprojects from "./Adminpageprojects";
import Profilefoter from "./Profilefoter";

const Adminpage = () => {
  return (
    <div className=" py-4">
      {/* ---- navbar --- */}
      <div className="flex justify-between font-sans mx-4">
        <div className="rounded-lg">
          <ul className="flex space-x-2 text-sm ">
            <Link
              to={"/Dashboard"}
              className="text-[1rem] font-medium text-gray-500 hover:text-blue-600 duration-200"
            >
              Dashboard
            </Link>
            <li>/</li>
            <li>Home</li>
          </ul>
          <h3 className="font-semibold">Home</h3>
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
      {/*  ------ cards ------ */}
      <div className="grid grid-cols-4  gap-[25px] mx-4 mt-16 ">
        <div className="rounded-xl bg-white relative shadow-lg">
          <div className="p-3 border-b ">
            <p className="text-end text-sm text-gray-500">Today's Money</p>
            <h1 className="text-end font-semibold text-2xl text-gray-800">
              $53k
            </h1>
          </div>
          <div className="bg-blue-500 w-16 shadow-lg shadow-blue-300 h-16 flex items-center justify-center rounded-lg absolute left-4 -top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
              <path
                fillRule="evenodd"
                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                clipRule="evenodd"
              ></path>
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
            </svg>
          </div>
          <div className="px-3 py-5">
            <p className="text-gray-500">
              <span className="text-[#4caf5b] font-semibold">+55% </span>than
              last week
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white relative shadow-lg">
          <div className="p-3 border-b ">
            <p className="text-end text-sm text-gray-500">Today's Users</p>
            <h1 className="text-end font-semibold text-2xl text-gray-800">
              2,300
            </h1>
          </div>
          <div className="bg-[#dd2466] w-16 shadow-lg shadow-[#e287a7] h-16 flex items-center justify-center rounded-lg absolute left-4 -top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="px-4 py-5">
            <p className="text-gray-500">
              <span className="text-[#4caf5b] font-semibold">+3% </span>than
              than last month
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white relative shadow-lg">
          <div className="p-3 border-b ">
            <p className="text-end text-sm text-gray-500">New Clients</p>
            <h1 className="text-end font-semibold text-2xl text-gray-800">
              3,462
            </h1>
          </div>
          <div className="bg-[#58b05c] w-16 shadow-lg shadow-[#82ee87] h-16 flex items-center justify-center rounded-lg absolute left-4 -top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
            </svg>
          </div>
          <div className="px-3 py-5">
            <p className="text-gray-500">
              <span className="text-red-400 font-semibold"> -2% </span>than last
              week
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-white relative shadow-lg">
          <div className="p-3 border-b ">
            <p className="text-end text-sm text-gray-500">Sales</p>
            <h1 className="text-end font-semibold text-2xl text-gray-800">
              $103,430
            </h1>
          </div>
          <div className="bg-[#fe9d19] w-16 shadow-lg shadow-[#f1c381] h-16 flex items-center justify-center rounded-lg absolute left-4 -top-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6 text-white"
            >
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </div>
          <div className="px-3 py-5">
            <p className="text-gray-500">
              <span className="text-[#4caf5b] font-semibold">+5% </span>than
              than yesterday
            </p>
          </div>
        </div>
      </div>
      {/*  -----graphs -----  */}
      <div className="grid grid-cols-3 gap-[30px] mx-4 mt-14">
        <div className="bg-white rounded-xl text-sm text-gray-600 shadow-lg relative">
          <div className="h-48 border-b">
            <div className="w-[90%] items-center h-[220px] bg-[#3ca0f2] shadow-lg shadow-[#77b8ec] absolute -top-6 left-4 rounded-lg"></div>
          </div>

          <div className="px-5 py-7 border-b">
            <p className="text-[1rem] font-semibold">Website View</p>
            <p>Last Campaign Performance</p>
          </div>
          <div className="flex p-5">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-inherit mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              campaign sent 2 days ago
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl text-sm text-gray-600 shadow-lg relative">
          <div className="h-48 border-b">
            <div className="w-[90%] items-center h-[220px] bg-[#e4316f] shadow-lg shadow-[#f379a4] absolute -top-6 left-4 rounded-lg"></div>
          </div>

          <div className="px-5 py-7 border-b">
            <p className="text-[1rem] font-semibold">Daily Sales</p>
            <p>15% increase in today sales</p>
          </div>
          <div className="flex p-5">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-inherit mx-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              updated 4 min ago
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl text-sm text-gray-600 shadow-lg relative">
          <div className="h-48 border-b">
            <div className="w-[90%] items-center h-[220px] bg-[#4fa953] shadow-lg shadow-[#89be8c] absolute -top-6 left-4 rounded-lg"></div>
          </div>

          <div className="px-5 py-7 border-b">
            <p className="text-[1rem] font-semibold">Completed Tasks</p>
            <p>Last Campaign Performance</p>
          </div>
          <div className="flex p-5">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-inherit mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              just updated
            </p>
          </div>
        </div>
      </div>
      <Adminpageprojects />
      <Profilefoter />
    </div>
  );
};

export default Adminpage;
