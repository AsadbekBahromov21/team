import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return 
  <div className="w-full flex flex-col items-center container mx-auto">
      <div className="w-full h-[38px] bg-black">
          <span></span>
      </div>
      <Navbar/>
  </div>
}

export default Header;
