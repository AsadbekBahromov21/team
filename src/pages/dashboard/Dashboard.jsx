import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { FaFile } from "react-icons/fa";
const Dashboard = () => {
  return (
    <>
      <div className="w-full py-10 bg-[#000]"></div>
      <div className="flex">
        <div className="w-[250px] bg-[#000] h-screen  ">
          <div className="container flex flex-col gap-[50px] items-start">
            <div className="flex gap-2 items-center">
              <MdDashboardCustomize className="text-[#fff] text-[18px]" />
              <Link to={`/`} className="text-[#fff] text-[18px]">
                Home
              </Link>
            </div>

            <div>
              <div className="flex gap-2 items-center">
                <MdDashboardCustomize className="text-[#fff] text-[18px]" />
                <Link to={`createproduct`} className="text-[#fff] text-[18px]">
                  Deshboard
                </Link>
              </div>
              <hr className="mt-[10px]  bg-[#fff]" />
            </div>

            <div className="flex gap-2 items-center ">
              <AiOutlineSetting className="text-[#fff] text-[18px]" />
              <Link to={`createproduct`} className="text-[#fff] text-[18px]">
                Companents
              </Link>
            </div>
            <div className="flex gap-2 items-center ">
              <FaFile className="text-[#fff] text-[18px]" />
              <Link to={`createproduct`} className="text-[#fff] text-[18px]">
                Pages
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
