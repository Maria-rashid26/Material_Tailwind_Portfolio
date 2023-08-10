import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import team1 from "../Assets/team-1.jpeg";
import team2 from "../Assets/team-2.jpeg";
import team3 from "../Assets/team-3.jpeg";
import team4 from "../Assets/team-4.jpeg";
import team5 from "../Assets/team-5.jpeg";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

import Switch from "react-switch";
const Platformssetting = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);

  const handleSwitchChange1 = (checked) => {
    setChecked1(checked);
  };

  const handleSwitchChange2 = (checked) => {
    setChecked2(checked);
  };

  const handleSwitchChange3 = (checked) => {
    setChecked3(checked);
  };
  const handleSwitchChange4 = (checked) => {
    setChecked4(checked);
  };
  const handleSwitchChange5 = (checked) => {
    setChecked5(checked);
  };
  const handleSwitchChange6 = (checked) => {
    setChecked6(checked);
  };
  return (
    <div className="mx-4 text-gray-600">
      <div className="grid grid-cols-3 gap-14 mx-4 mt-10 items-start">
        {/* first col */}
        <div className=" space-y-3">
          <h1 className="font-bold">Platform Settings</h1>
          <p className="text-gray-600 font-bold text-[0.85rem]">ACCOUNT</p>
          <div className="space-y-6 pb-4">
            <div className="flex items-center">
              <Switch
                checked={checked1}
                onChange={handleSwitchChange1}
                onColor="#86d3ff"
                onHandleColor="#2699f6"
                onHandleBorder="grey"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch "
              />
              <p className="px-4 text-sm text-gray-700">
                Email me when someone follow me
              </p>
            </div>
            <div className="flex items-center">
              <Switch
                checked={checked2}
                onChange={handleSwitchChange2}
                onColor="#86d3ff"
                onHandleColor="#2699f6"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
              ></Switch>
              <p className="px-4 text-sm text-gray-700">
                Email me when someone answer on my post
              </p>
            </div>
            <div className="flex items-center">
              <Switch
                checked={checked3}
                onChange={handleSwitchChange3}
                onColor="#86d3ff"
                onHandleColor="#2699f6"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
              ></Switch>
              <p className="px-4 text-sm text-gray-700">
                Email me when someone mention me
              </p>
            </div>
          </div>
          <p className="text-gray-600 font-bold text-[0.85rem]">Application</p>
          <div className="space-y-6">
            <div className="flex items-center">
              <Switch
                checked={checked4}
                onChange={handleSwitchChange4}
                onColor="#86d3ff"
                onHandleColor="#2699f6"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
              />
              <p className="px-4 text-sm text-gray-700">
                New launches and projects
              </p>
            </div>
            <div className="flex items-center">
              <Switch
                checked={checked5}
                onChange={handleSwitchChange5}
                onColor="#86d3ff"
                onHandleColor="#2699f6"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
              ></Switch>
              <p className="px-4 text-sm text-gray-700">
                Monthly products updates
              </p>
            </div>
            <div className="flex items-center">
              <Switch
                checked={checked6}
                onChange={handleSwitchChange6}
                onColor="#86d3ff"
                onHandleColor="#2699f6"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
              ></Switch>
              <p className="px-4 text-sm text-gray-700">
                Subscribe to newsletter
              </p>
            </div>
          </div>
        </div>

        {/* second col */}
        <div className="h-full space-y-9">
          <h1 className="font-bold">Profile Information</h1>
          <p className="text-sm">
            Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is
            no. If two equally difficult paths, choose the one more painful in
            the short term (pain avoidance is creating an illusion of equality).
          </p>
          <p className="bg-gray-300 h-[1px] my-5"></p>
          <ul className="space-y-4">
            <li className="space-x-4 flex text-sm">
              <p className="font-bold text-gray-950">First Name:</p>
              <p className="text-gray-500">Alec M. Thompson</p>
            </li>
            <li className="space-x-4 flex text-sm">
              <p className="font-bold text-gray-950">Mobile:</p>
              <p className="text-gray-500">(44) 123 1234 123</p>
            </li>
            <li className="space-x-4 flex text-sm">
              <p className="font-bold text-gray-950">Email:</p>
              <p className="text-gray-500">alecthompson@mail.com</p>
            </li>
            <li className="space-x-4 flex text-sm">
              <p className="font-bold text-gray-950">Location:</p>
              <p className="text-gray-500">USA</p>
            </li>
            <li className="space-x-4 flex text-sm">
              <p className="font-bold text-gray-950">Social:</p>
              <ul className="flex items-center space-x-4">
                <li>
                  <BsFacebook className="text-blue-600" size={16} />
                </li>
                <li>
                  <AiFillTwitterCircle className="text-blue-500" size={20} />
                </li>
                <li>
                  <AiOutlineInstagram className="text-purple-700" size={20} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* third col */}
        <div className="space-y-5">
          <h1 className="font-semibold">Platform Settings</h1>
          <div className="flex items-center">
            <img
              src={team1}
              alt=""
              className="w-[50px] h-[50px] rounded-xl mr-4"
            />
            <div className="space-y-1">
              <p className="font-semibold text-gray-950 text-sm">Sophie B.</p>
              <p className="text-[0.75rem] text-gray-500">
                Hi! I need more information...
              </p>
            </div>
            <button className="px-4 py-2 text-[13px] ml-4 rounded-lg text-blue-500 font-semibold">
              Reply
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={team3}
              alt=""
              className="w-[50px] h-[50px] rounded-xl mr-4"
            />
            <div className="space-y-1">
              <p className="font-semibold text-gray-950 text-sm">Ivanna</p>
              <p className="text-[0.75rem] text-gray-500">
                About files I can...
              </p>
            </div>
            <button className="px-4 py-2 text-[13px] ml-4 rounded-lg text-blue-500 font-semibold">
              Reply
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={team2}
              alt=""
              className="w-[50px] h-[50px] rounded-xl mr-4"
            />
            <div className="space-y-1">
              <p className="font-semibold text-gray-950 text-sm">Alexander</p>
              <p className="text-[0.75rem] text-gray-500">
                Awesome work, can you...
              </p>
            </div>
            <button className="px-4 py-2 text-[13px] ml-4 rounded-lg text-blue-500 font-semibold">
              Reply
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={team5}
              alt=""
              className="w-[50px] h-[50px] rounded-xl mr-4"
            />
            <div className="space-y-1">
              <p className="font-semibold text-gray-950 text-sm">Bruce Mars</p>
              <p className="text-[0.75rem] text-gray-500">
                Hi! I need more information...
              </p>
            </div>
            <button className="px-4 py-2 text-[13px] ml-4 rounded-lg text-blue-500 font-semibold">
              Reply
            </button>
          </div>
          <div className="flex items-center">
            <img
              src={team4}
              alt=""
              className="w-[50px] h-[50px] rounded-xl mr-4"
            />
            <div className="space-y-1">
              <p className="font-semibold text-gray-950 text-sm">Peterson</p>
              <p className="text-[0.75rem] text-gray-500">
                Have a great afternoon...
              </p>
            </div>
            <button className="px-4 py-2 text-[13px] ml-4 rounded-lg text-blue-500 font-semibold">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Platformssetting;
