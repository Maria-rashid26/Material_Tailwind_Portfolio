import React from "react";
import img1 from "../Assets/home-decor-1.jpeg";
import img2 from "../Assets/home-decor-2.jpeg";
import img3 from "../Assets/home-decor-3.jpeg";
import img4 from "../Assets/home-decor-4.jpeg";
import team1 from "../Assets/team-1.jpeg";
import team2 from "../Assets/team-2.jpeg";
import team3 from "../Assets/team-3.jpeg";
import team4 from "../Assets/team-4.jpeg";
import Tippy from "@tippyjs/react";

const Projects = () => {
  return (
    <div className="mt-14 mx-4 font-sans">
      <h1 className="mx-4 font-bold">Projects</h1>
      <p className="mt-2 mx-4 text-sm text-gray-700">
        Architects design houses
      </p>
      <div className="grid grid-cols-4 gap-10 mx-4  mt-6">
        <div>
          <div>
            <img src={img1} alt="" className="rounded-lg h-36 bg-cover mb-5" />
          </div>
          <div>
            <p className="m-1 text-[0.95rem] text-gray-700">Project #1</p>
            <h1 className="m-1 font-bold text-xl text-gray-800">Modern</h1>
            <p className="m-1 mt-3 text-sm text-gray-600">
              As Uber works through a huge amount of internal management
              turmoil.
            </p>
          </div>
          <div className="flex mt-4">
            <button className="hover:opacity-75 transition-all  text-xs  focus:ring focus:ring-blue-300 active:opacity-[0.85] -z-0 m-1 px-4 py-2 text-blue-500 border border-blue-500 rounded-xl text-[0.77rem] font-bold ">
              VIEW PROJECTS
            </button>

            <div className="my-[0.4rem] rounded-md ">
              <Tippy
                trigger="mouseenter"
                content="Romina hadid"
                duration={100}
                className="bg-black text-white px-2 py-1 rounded-md text-sm cursor-pointer"
              >
                <img
                  src={team1}
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
                  src={team3}
                  alt=""
                  className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-2"
                />
              </Tippy>
              <Tippy
                content="Alexende Smith"
                trigger="mouseenter"
                duration={100}
                className="bg-black text-white px-2 py-1 rounded-md text-sm"
              >
                <img
                  src={team4}
                  alt=""
                  className="w-6 h-6 rounded-full border-white border-2 -ml-3 inline-block relative "
                />
              </Tippy>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={img2} alt="" className="rounded-lg h-36 bg-cover mb-5" />
          </div>
          <div>
            <p className="m-1 text-[0.95rem] text-gray-700">Project #2</p>
            <h1 className="m-1 font-bold text-xl text-gray-800">
              Scandinavian
            </h1>
            <p className="m-1 mt-3 text-sm text-gray-600">
              Music is something that every person has his or her own specific
              opinion about.
            </p>
          </div>
          <div className="flex mt-4">
            <button className="hover:opacity-75 transition-all  text-xs  focus:ring focus:ring-blue-300 active:opacity-[0.85] -z-0 m-1 px-4 py-2 text-blue-500 border border-blue-500 rounded-xl text-[0.77rem] font-bold ">
              VIEW PROJECTS
            </button>

            <div className="my-[0.4rem] rounded-md">
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
                  src={team3}
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
                  src={team1}
                  alt=""
                  className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-2"
                />
              </Tippy>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={img3} alt="" className="rounded-lg h-36 bg-cover mb-5" />
          </div>
          <div>
            <p className="m-1 text-[0.95rem] text-gray-700">Project #3</p>
            <h1 className="m-1 font-bold text-xl text-gray-800">Minimalist</h1>
            <p className="m-1 mt-3 text-sm text-gray-600">
              Different people have different taste, and various types of music.
            </p>
          </div>
          <div className="flex mt-4">
            <button className="hover:opacity-75 transition-all  text-xs  focus:ring focus:ring-blue-300 active:opacity-[0.85] -z-0 m-1 px-4 py-2 text-blue-500 border border-blue-500 rounded-xl text-[0.77rem] font-bold ">
              VIEW PROJECTS
            </button>

            <div className="my-[0.4rem] rounded-md">
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
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={img4} alt="" className="rounded-lg h-36 bg-cover mb-5" />
          </div>
          <div>
            <p className="m-1 text-[0.95rem] text-gray-700">Project #4</p>
            <h1 className="m-1 font-bold text-xl text-gray-800">Gothic</h1>
            <p className="m-1 mt-3 text-sm text-gray-600">
              Why would anyone pick blue over pink? Pink is obviously a better
              color.
            </p>
          </div>
          <div className="flex mt-4">
            <button className="hover:opacity-75 transition-all  text-xs  focus:ring focus:ring-blue-300 active:opacity-[0.85] -z-0 m-1 px-4 py-2 text-blue-500 border border-blue-500 rounded-xl text-[0.77rem] font-bold ">
              VIEW PROJECTS
            </button>

            <div className="my-[0.4rem] rounded-md">
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
                  src={team1}
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
                  src={team3}
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
                  src={team2}
                  alt=""
                  className="w-6 h-6 rounded-full border-white border-2  relative inline-block z-20 -ml-3"
                />
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
