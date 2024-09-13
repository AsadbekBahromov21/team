import React from 'react'
import logo from "../../assets/logo.svg"
import  "./Navbar.css"
import { LuShoppingCart, LuUserCircle2, LuHeart } from "react-icons/lu";

function Navbar({items}) {
  return (
    <div className='container mx-auto flex justify-center items-center gap-10 mb-6'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <ul className='navbar__collection flex justify-center items-center gap-10'>
            {
                items?.map((item, inx) => (
                <li key={inx} className='text-base font-normal text-black'>
                    {item}
                </li>
                ))
            }
        </ul>
        <div className='bg-[#F0F0F0] border flex-1 rounded-[62px] h-12 flex justify-center items-center'>
            <input className='navbar__inp w-full rounded-[62px] h-full bg-inherit py-3 px-4' type="text" placeholder='Search for products...'/>
        </div>
        <div className='flex justify-center items-center gap-3.5'>
        <LuHeart className='w-6 h-6'/>
        <LuShoppingCart className='w-6 h-6'/>
        <LuUserCircle2 className='w-6 h-6'/>
        </div>
    </div>
  )
}

export default Navbar
