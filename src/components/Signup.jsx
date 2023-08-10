import React from "react";
import Secondnav from "./Secondnav";
import Secondfooter from "./Secondfooter";
import { Link } from "react-router-dom";
import bg from "../Assets/photo-1497294815431-9365093b7331 (1).avif";

const Signup = () => {
  return (
    <div className="font-Roboto">
      <img src={bg} alt="" className="bg-top bg-contain fixed" />
      <div>
        {/* navbar */}
        <Secondnav />

        {/* Signin section start */}
        <div className="w-[380px] bg-white rounded-xl  absolute top-[110px] left-[36vw]">
          <div className="bg-blue-500  justify-center flex items-center shadow-lg shadow-blue-400 h-28 m-4 -mt-8 rounded-xl">
            <span className="text-white font-bold text-3xl ">Sign Up</span>
          </div>
          <div className="py-4 space-y-3">
            <input
              type="Name"
              placeholder="Name"
              className="py-[9px] w-[330px] mx-6 placeholder:text-sm bg-transparent placeholder:text-gray-500  outline-none px-4 border-gray-300 border-2 rounded-lg focus:border-blue-500 focus:border-2 duration-200 "
            />
            <input
              type="Email"
              placeholder="Email"
              className="py-[9px] w-[330px] mx-6 placeholder:text-sm bg-transparent placeholder:text-gray-500  outline-none px-4 border-gray-300 border-2 rounded-lg focus:border-blue-500 focus:border-2 duration-200 "
            />
            <input
              type="password"
              placeholder="Password"
              className="py-[9px] w-[330px] mx-6 placeholder:text-sm bg-transparent placeholder:text-gray-500  outline-none px-4 border-gray-300 border-2 rounded-lg focus:border-blue-500 focus:border-2 duration-200 "
            />
            <div className="py-[2px] w-[330px] mx-6 flex items-center">
              <span className="px-3 flex items-center py-3 rounded-3xl active:bg-slate-300 duration-300">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
              </span>
              <span className="text-gray-600 text-[-rem]">
                I agree the Terms and Conditions.
              </span>
            </div>
          </div>
          <button className="text-white font-semibold active:bg-blue-300 duration-300 text-[0.8rem] py-[9px] w-[330px] mx-6   outline-none px-4 border-2 rounded-lg   bg-blue-600/80">
            SIGN UP
          </button>
          <p className="my-4 py-[3px] w-[330px] mx-6 text-center text-sm text-gray-600 ">
            Already have an account?
            <Link to={"/SignIn"}>
              {" "}
              <span className="text-blue-700/70 font-bold"> Sign In</span>
            </Link>
          </p>
        </div>

        {/* Footer  */}
        <Secondfooter />
      </div>
    </div>
  );
};

export default Signup;
