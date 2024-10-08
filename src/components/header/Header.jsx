import React from "react";
import Navbar from "../navbar/Navbar";
import { FiX } from "react-icons/fi";

const Header = () => {
  return (
    <div className="">
      <div className="w-full h-[38px] bg-black flex justify-center items-center ">
        <div className="container mx-auto flex items-center justify-center">
          <span className="text-white text-[14px] font-normal text-center flex-1">
            Sign up and get 20% off to your first order. Sign Up Now
          </span>
          <FiX className="text-white" />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
