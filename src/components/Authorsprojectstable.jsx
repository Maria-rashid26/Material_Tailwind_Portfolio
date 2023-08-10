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

const Authorsprojectstable = () => {
  return (
    <div className="bg-white shadow-lg mt-20 mx-4 relative inset-0 rounded-xl">
      <div>
        <div className="shadow-lg shadow-blue-200 bg-gradient-to-tr from-blue-600/70  to-blue-400 py-6 mx-8 rounded-lg  relative -top-7">
          <h1 className="mx-6 text-white  font-bold ">Projects Table</h1>
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
    </div>
  );
};

export default Authorsprojectstable;
