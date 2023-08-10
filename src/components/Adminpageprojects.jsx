import React from "react";
import { Line } from "rc-progress";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import team1 from "../Assets/team-1.jpeg";
import team2 from "../Assets/team-2.jpeg";
import team3 from "../Assets/team-3.jpeg";
import team4 from "../Assets/team-4.jpeg";
import logo1 from "../Assets/logo-xd.svg";
import logo2 from "../Assets/logo-atlassian.svg";
import logo3 from "../Assets/logo-slack.svg";
import logo4 from "../Assets/logo-spotify.svg";
import logo5 from "../Assets/logo-jira.svg";
import logo6 from "../Assets/logo-invision.svg";
import Tippy from "@tippyjs/react";

const Adminpageprojects = () => {
  return (
    <div className=" grid grid-cols-3 gap-5   mt-20 mx-4 relative inset-0 ">
      {/* left section */}
      <div className="col-span-2 bg-white shadow-lg rounded-xl">
        <div className="py-1 rounded-lg">
          <div className="px-2 my-5 mx-4 w-fit space-y-1 ">
            <h1 className="font-bold ">Projects Table</h1>
            <p className="flex space-x-1 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
              <span className="text-sm font-semibold">30 done </span>
              <span className="text-sm"> this month</span>
            </p>
          </div>
        </div>
        <div>
          <table className="w-full min-w-[640px] table-auto">
            <thead className="border-b">
              <tr>
                <th className="px-5 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    COMPANIES
                  </p>
                </th>
                <th className="px-3 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    MEMEBERS
                  </p>
                </th>
                <th className="px-3 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    BUDGET
                  </p>
                </th>
                <th className="px-3 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    COMPLETION
                  </p>
                </th>
                <th className="  border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="text-blue-gray-400"></p>
                </th>
              </tr>
            </thead>
            <tbody className="border-b">
              {/* first row */}
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={logo1}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <p className="m-2 font-bold">Material XD Version</p>
                  </div>
                </td>
                <td className="py-3 px-5 text-[0.79rem]">
                  <Tippy
                    trigger="mouseenter"
                    content="Alexende Smith"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer"
                  >
                    <img
                      src={team4}
                      alt=""
                      data-tooltip-id="romina hadid"
                      className=" w-6 h-6 rounded-full border-2 cursor-pointer -ml-1 relative border-white inline-block  z-0 "
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Rayan Tomposon"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm"
                  >
                    <img
                      src={team2}
                      alt=""
                      className="w-6 h-6 rounded-full cursor-pointer border-white border-2 text-sm relative inline-block z-10 -ml-2"
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Jessica Doe"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team1}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-2"
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Romina hadid"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team3}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-3"
                    />
                  </Tippy>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    $14,000
                  </p>
                </td>
                <td className="p-3">
                  <div>
                    <label
                      htmlFor="60%"
                      className="text-[0.77rem] mx-4 font-bold text-gray-600"
                    >
                      60%
                    </label>
                    <Line
                      percent={60}
                      strokeWidth={5}
                      trailWidth={5}
                      strokeColor={"blue"}
                      className="px-4"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <Link to={"/"}>
                    <BsThreeDotsVertical className="text-gray-500" />
                  </Link>
                </td>
              </tr>
              {/* second row */}
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={logo2}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <p className="m-2 font-bold">Add Progress Track</p>
                  </div>
                </td>
                <td className="py-3 px-5 text-[0.79rem]">
                  <Tippy
                    trigger="mouseenter"
                    content="Rayan Tomposon"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm"
                  >
                    <img
                      src={team2}
                      alt=""
                      className="w-6 h-6 rounded-full cursor-pointer border-white border-2 text-sm relative inline-block z-10 -ml-2"
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Jessica Doe"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team1}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-2"
                    />
                  </Tippy>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    $3,000
                  </p>
                </td>
                <td className="p-3">
                  <div>
                    <label
                      htmlFor="60%"
                      className="text-[0.77rem] mx-4 font-bold text-gray-600"
                    >
                      10%
                    </label>
                    <Line
                      percent={10}
                      strokeWidth={5}
                      trailWidth={5}
                      strokeColor={"blue"}
                      className="px-4"
                      strokeLinecap="square"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <Link to={"/"}>
                    <BsThreeDotsVertical className="text-gray-500" />
                  </Link>
                </td>
              </tr>
              {/* third row */}
              <tr className="border-b">
                <td className="py-3 px-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={logo3}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <p className="m-2 font-bold">Fix Platform Errors</p>
                  </div>
                </td>
                <td className="py-3 px-5 text-[0.79rem]">
                  <Tippy
                    trigger="mouseenter"
                    content="Alexende Smith"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer"
                  >
                    <img
                      src={team4}
                      alt=""
                      data-tooltip-id="romina hadid"
                      className=" w-6 h-6 rounded-full border-2 cursor-pointer -ml-1 relative border-white inline-block  z-0 "
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Jessica Doe"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team1}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-2"
                    />
                  </Tippy>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    $3,000
                  </p>
                </td>
                <td className="p-3">
                  <div>
                    <label
                      htmlFor="100%"
                      className="text-[0.77rem] mx-4 font-bold text-gray-600"
                    >
                      100%
                    </label>
                    <Line
                      percent={100}
                      strokeWidth={5}
                      trailWidth={5}
                      strokeColor={"green"}
                      className="px-4"
                      strokeLinecap="square"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <Link to={"/"}>
                    <BsThreeDotsVertical className="text-gray-500" />
                  </Link>
                </td>
              </tr>
              {/* fourth row */}
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={logo4}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <p className="m-2 font-bold">Launch our Mobile App</p>
                  </div>
                </td>
                <td className="py-3 px-5 text-[0.79rem]">
                  <Tippy
                    trigger="mouseenter"
                    content="Alexende Smith"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer"
                  >
                    <img
                      src={team4}
                      alt=""
                      data-tooltip-id="romina hadid"
                      className=" w-6 h-6 rounded-full border-2 cursor-pointer -ml-1 relative border-white inline-block  z-0 "
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Rayan Tomposon"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm"
                  >
                    <img
                      src={team2}
                      alt=""
                      className="w-6 h-6 rounded-full cursor-pointer border-white border-2 text-sm relative inline-block z-10 -ml-2"
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Jessica Doe"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team1}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-2"
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Romina hadid"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team3}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-3"
                    />
                  </Tippy>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    $14,000
                  </p>
                </td>
                <td className="p-3">
                  <div>
                    <label
                      htmlFor="60%"
                      className="text-[0.77rem] mx-4 font-bold text-gray-600"
                    >
                      100%
                    </label>
                    <Line
                      percent={100}
                      strokeWidth={5}
                      trailWidth={5}
                      strokeLinecap="square"
                      strokeColor={"green"}
                      className="px-4"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <Link to={"/"}>
                    <BsThreeDotsVertical className="text-gray-500" />
                  </Link>
                </td>
              </tr>
              {/* fifth row */}
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={logo5}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <p className="m-2 font-bold">Add the New Pricing Page</p>
                  </div>
                </td>
                <td className="py-3 px-5 text-[0.79rem]">
                  <Tippy
                    trigger="mouseenter"
                    content="Alexende Smith"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer"
                  >
                    <img
                      src={team4}
                      alt=""
                      data-tooltip-id="romina hadid"
                      className=" w-6 h-6 rounded-full border-2 cursor-pointer -ml-1 relative border-white inline-block  z-0 "
                    />
                  </Tippy>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    $500
                  </p>
                </td>
                <td className="p-3">
                  <div>
                    <label
                      htmlFor="25%"
                      className="text-[0.77rem] mx-4 font-bold text-gray-600"
                    >
                      25%
                    </label>
                    <Line
                      percent={25}
                      strokeWidth={5}
                      trailWidth={5}
                      strokeColor={"blue"}
                      className="px-4"
                      strokeLinecap="square"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <Link to={"/"}>
                    <BsThreeDotsVertical className="text-gray-500" />
                  </Link>
                </td>
              </tr>
              {/*6th row */}
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={logo6}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <p className="m-2 font-bold">Material XD Version</p>
                  </div>
                </td>
                <td className="py-3 px-5 text-[0.79rem]">
                  <Tippy
                    trigger="mouseenter"
                    content="Romina hadid"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md cursor-pointer text-sm"
                  >
                    <img
                      src={team3}
                      alt=""
                      className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-0 -ml-3"
                    />
                  </Tippy>
                  <Tippy
                    trigger="mouseenter"
                    content="Alexende Smith"
                    duration={100}
                    className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer"
                  >
                    <img
                      src={team4}
                      alt=""
                      data-tooltip-id="romina hadid"
                      className=" w-6 h-6 rounded-full border-2 cursor-pointer -ml-2 relative border-white inline-block  z-10 "
                    />
                  </Tippy>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    $14,000
                  </p>
                </td>
                <td className="p-3">
                  <div>
                    <label
                      htmlFor="40%"
                      className="text-[0.77rem] mx-4 font-bold text-gray-600"
                    >
                      40%
                    </label>
                    <Line
                      percent={40}
                      strokeWidth={5}
                      trailWidth={5}
                      strokeColor={"blue"}
                      strokeLinecap="square"
                      className="px-4"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <Link to={"/"}>
                    <BsThreeDotsVertical className="text-gray-500" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* right section */}
      <div className="col-span-1  bg-white shadow-lg rounded-xl">
        <div className="py-[2px] rounded-xl">
          <div className="px-2 my-5 mx-4  space-y-2">
            <h1 className="font-bold ">Orders Overview</h1>
            <p className="flex space-x-1 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                aria-hidden="true"
                className="h-3.5 w-3.5 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                ></path>
              </svg>
              <span className="text-sm font-semibold">24%</span>
              <span className="text-sm"> this month</span>
            </p>
          </div>
        </div>
        <div className="px-6 ">
          <div className="flex space-x-4 py-1 items-center">
            <div className="-mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="!w-5 !h-5 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="m-2 ">
              <p className="font-bold text-gray-800 text-sm">
                $2400, Design changes
              </p>
              <p className="text-[0.77rem] font-semibold text-gray-600">
                22 DEC 7:20 PM
              </p>
            </div>
          </div>
          <div className="flex space-x-4 py-1 items-center">
            <div className="-mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="!w-5 !h-5 text-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="m-2 ">
              <p className="font-bold text-gray-800 text-sm">
                New order #1832412
              </p>
              <p className="text-[0.77rem] font-semibold text-gray-600">
                21 DEC 11 PM
              </p>
            </div>
          </div>
          <div className="flex space-x-4 py-1 items-center">
            <div className="-mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="!w-5 !h-5 text-blue-500"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
              </svg>
            </div>
            <div className="m-2 ">
              <p className="font-bold text-gray-800 text-sm">
                Server payments for April
              </p>
              <p className="text-[0.77rem] font-semibold text-gray-600">
                21 DEC 9:34 PM
              </p>
            </div>
          </div>
          <div className="flex space-x-4 py-1 items-center">
            <div className="-mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="!w-5 !h-5 text-orange-500"
              >
                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z"></path>
                <path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="m-2 ">
              <p className="font-bold text-gray-800 text-sm">
                New card added for order #4395133
              </p>
              <p className="text-[0.77rem] font-semibold text-gray-600">
                20 DEC 2:20 AM
              </p>
            </div>
          </div>
          <div className="flex space-x-4 py-1 items-center">
            <div className="-mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="!w-5 !h-5 text-pink-500"
              >
                <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z"></path>
              </svg>
            </div>
            <div className="m-2 ">
              <p className="font-bold text-gray-800 text-sm">
                Unlock packages for development
              </p>
              <p className="text-[0.77rem] font-semibold text-gray-600">
                18 DEC 4:54 AM
              </p>
            </div>
          </div>
          <div className="flex space-x-4 py-1 items-center">
            <div className="-mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="!w-5 !h-5 text-blue-gray-900"
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
            <div className="m-2 ">
              <p className="font-bold text-gray-800 text-sm">
                New order #9583120
              </p>
              <p className="text-[0.77rem] font-semibold text-gray-600">
                17 DEC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpageprojects;
