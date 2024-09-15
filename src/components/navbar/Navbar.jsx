import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AccountIcon,
  CartIcon,
  DwopdownIcon,
  SearchIcon,
} from "../../icon/index";
import { Dropdown, Space } from "antd";

function Navbar(scroll) {
  const items = [
    {
      key: "1",
      label: "Kiyimlar",
    },
    {
      key: "3",
      label: "Sport tavarlar",
      disabled: false,
    },
    {
      key: "4",
      danger: false,
      label: "Jihozlar",
    },
  ];
  return (
    <nav
      className={`py-[24px] duration-300 flex items-center "backdrop-blur-xl py-[14px]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between gap-[40px]">
        <Link to={"/"} className="text-[32px] font-bold font-integral">
          SHOP.CO
        </Link>
        <ul className="hidden lg:flex items-center gap-[24px] whitespace-nowrap">
          <li>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="cursor-pointer text-black text-[16px]"
              >
                <Space>
                  Shop
                  <DwopdownIcon />
                </Space>
              </a>
            </Dropdown>
          </li>
          <li>
            <Link to={"#"} className="cursor-pointer text-black text-[16px]">
              On Sale
            </Link>
          </li>
          <li>
            <Link to={"#"} className="cursor-pointer text-black text-[16px]">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to={"#"} className="cursor-pointer text-black text-[16px]">
              Brands
            </Link>
          </li>
        </ul>
        <form className="form hidden sm:flex items-center bg-[#f0eeed] rounded-[62px] px-[16px] w-full">
          <button type="submit" className={"rounded-full"}>
            <SearchIcon />
          </button>
          <input
            type="text"
            className="w-full h-[48px] rounded-[62px] border-none outline-none pl-[12px] text-black bg-transparent"
            placeholder="Search"
          />
        </form>
        <div className="flex items-center gap-[14px]">
          <button>
            <CartIcon />
          </button>
          <Link to={`dashboard`}>
            <button>
              <AccountIcon />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
