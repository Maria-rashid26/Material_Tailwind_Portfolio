import React from "react";
import team1 from "../Assets/team-1.jpeg";
import team2 from "../Assets/team-2.jpeg";
import team3 from "../Assets/team-3.jpeg";
import team4 from "../Assets/team-4.jpeg";
import team5 from "../Assets/team-5.jpeg";

const Authorstable = () => {
  return (
    <div className="bg-white shadow-lg mt-20 mx-4 relative inset-0 rounded-xl">
      <div>
        <div className="shadow-lg shadow-blue-200 bg-gradient-to-tr from-blue-600/70  to-blue-400 py-6 mx-8 rounded-lg  relative -top-7">
          <h1 className="mx-6 text-white  font-bold ">Authors Table</h1>
        </div>
        <div>
          <table className="w-full min-w-[640px] table-auto">
            <thead className="border-b">
              <tr>
                <th className="px-5 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    AUTHOR
                  </p>
                </th>
                <th className="px-3 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    FUNCTION
                  </p>
                </th>
                <th className="px-3 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    STATUS
                  </p>
                </th>
                <th className="px-3 py-3  text-left">
                  <p className="text-[0.7rem] font-bold text-gray-500">
                    EMPLOYED
                  </p>
                </th>
                <th className="  border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="text-blue-gray-400"></p>
                </th>
              </tr>
            </thead>
            <tbody className="border-b">
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={team2}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <div className="pl-6">
                      <p className="font-bold text-gray-700">John Michael</p>
                      <p className="text-[0.77rem] text-gray-600">
                        john@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[0.79rem]">
                  <p className="font-bold text-gray-600">Manager</p>
                  <p className="text-gray-600">Organization</p>
                </td>
                <td className="p-3">
                  <button className="px-2 py-1 bg-[#50b155] items-center flex text-white rounded-xl">
                    <span className="text-[0.7rem]">ONLINE</span>{" "}
                  </button>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    02/13/23
                  </p>
                </td>
                <td className="p-3">
                  <p className="font-bold text-gray-600 text-[0.78rem]">Edit</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={team1}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <div className="pl-6">
                      <p className="font-bold text-gray-700">Alexa Liras</p>
                      <p className="text-[0.77rem] text-gray-600">
                        alexa@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[0.79rem]">
                  <p className="font-bold text-gray-600">Programator</p>
                  <p className="text-gray-600">Developer</p>
                </td>
                <td className="p-3">
                  <button className="px-2 py-1 bg-[#6c8490] items-center flex text-white rounded-xl">
                    <span className="text-[0.7rem]">OFFLINE</span>{" "}
                  </button>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    1/15/18
                  </p>
                </td>
                <td className="p-3">
                  <p className="font-bold text-gray-600 text-[0.78rem]">Edit</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={team4}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <div className="pl-6">
                      <p className="font-bold text-gray-700">Laurent Perrier</p>
                      <p className="text-[0.77rem] text-gray-600">
                        laurent@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[0.79rem]">
                  <p className="font-bold text-gray-600">Executive</p>
                  <p className="text-gray-600">Projects</p>
                </td>
                <td className="p-3">
                  <button className="px-2 py-1 bg-[#50b155] items-center flex text-white rounded-xl">
                    <span className="text-[0.7rem]">ONLINE</span>{" "}
                  </button>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    06/08/19
                  </p>
                </td>
                <td className="p-3">
                  <p className="font-bold text-gray-600 text-[0.78rem]">Edit</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={team3}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <div className="pl-6">
                      <p className="font-bold text-gray-700">Michael Levi</p>
                      <p className="text-[0.77rem] text-gray-600">
                        michael@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[0.79rem]">
                  <p className="font-bold text-gray-600">Programator</p>
                  <p className="text-gray-600">Developer</p>
                </td>
                <td className="p-3">
                  <button className="px-2 py-1 bg-[#50b155] items-center flex text-white rounded-xl">
                    <span className="text-[0.7rem]">ONLINE</span>{" "}
                  </button>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    06/08/19
                  </p>
                </td>
                <td className="p-3">
                  <p className="font-bold text-gray-600 text-[0.78rem]">Edit</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={team5}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <div className="pl-6">
                      <p className="font-bold text-gray-700">blue-400</p>
                      <p className="text-[0.77rem] text-gray-600">
                        alexander@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[0.79rem]">
                  <p className="font-bold text-gray-600">Programator</p>
                  <p className="text-gray-600">Developer</p>
                </td>
                <td className="p-3">
                  <button className="px-2 py-1 bg-[#6c8490] items-center flex text-white rounded-xl">
                    <span className="text-[0.7rem]">OFFLINE</span>{" "}
                  </button>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    06/01/12
                  </p>
                </td>
                <td className="p-3">
                  <p className="font-bold text-gray-600 text-[0.78rem]">Edit</p>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2">
                  <div className="flex justify-start text-sm mx-4">
                    <img
                      src={team2}
                      alt=""
                      className="w-10 h-10 rounded-md mr-4"
                    />
                    <div className="pl-6">
                      <p className="font-bold text-gray-700">Bruce Mars</p>
                      <p className="text-[0.77rem] text-gray-600">
                        bruce@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-[0.79rem]">
                  <p className="font-bold text-gray-600">Manager</p>
                  <p className="text-gray-600">Executive</p>
                </td>
                <td className="p-3">
                  <button className="px-2 py-1 bg-[#6c8490] items-center flex text-white rounded-xl">
                    <span className="text-[0.7rem]">OFFLINE</span>{" "}
                  </button>
                </td>
                <td className="p-3">
                  <p className="font-semibold font-sans text-gray-600 text-[0.8rem]">
                    06/01/12
                  </p>
                </td>
                <td className="p-3">
                  <p className="font-bold text-gray-600 text-[0.78rem]">Edit</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Authorstable;
