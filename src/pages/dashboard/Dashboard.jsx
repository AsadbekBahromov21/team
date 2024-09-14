import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="w-full py-10 bg-[#000]"></div>
      <div className="flex">
        <div className="w-[400px] bg-[#000] h-screen flex flex-col gap-3 ">
          <Link to={`createproduct`} className="text-[#fff]">
            NAvbar
          </Link>
          <Link className="text-[#fff]">NAvbar</Link>
          <Link className="text-[#fff]">NAvbar</Link>
          <Link className="text-[#fff]">NAvbar</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
