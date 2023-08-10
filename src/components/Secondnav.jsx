import React from "react";
import { Link } from "react-router-dom";

const Secondnav = () => {
  return (
    <div className="mx-10  px-10 rounded-xl text-white  bg-[#d6d8e6] fixed  top-4 left-0 right-0 flex justify-between items-center py-3 border border-white">
      <div>
        <Link to={"/"}>
          <h2 className="font-bold text-[1rem] text-gray-700">
            Material Tailwind React
          </h2>
        </Link>
      </div>
      <div>
        <ul className="flex  text-sm space-x-6 text-gray-800">
          <li className="flex">
            <Link to={"/"} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-[18px] h-[18px] opacity-50 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="flex justify-center  ">
            <Link to={"/"} className=" flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5 mx-2 text-gray-500 "
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Profile
            </Link>
          </li>

          <li className="flex">
            <Link to={"/Signup"} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5 mx-2 text-gray-500 "
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              Sign Up
            </Link>
          </li>
          <li className="">
            <Link to={"/SignIn"} className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-[18px] h-[18px] mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <button className="px-6 py-2 text-[0.7rem] text-white font-bold rounded-lg bg-blue-500">
          FREE DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Secondnav;
