import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import ReactStars from "react-stars";
import {useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../../redux/api/category-api";
import Customer from "../../../components/customer/Customer";

const SinglProdutc = () => {
  const { id } = useParams();
  const { data } = useGetSingleCategoryQuery(id);
  console.log(data);

  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("color1");

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const discount = ((data?.oldPrice - data?.price) / data?.oldPrice) * 100;

  return (
    <>


<div className="container my-3 w-full flex items-center">

</div>
      <div className="container grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
        <div className="flex gap-3 flex-col-reverse mb-[30px] md:flex-row">
          <div className="w-[100px] h-[100px]">
            {data?.url?.map((item, inx) => (
              <img
                className="object-contain m-auto rounded-[20px]"
                src={item}
                key={inx}
                alt=""
              />
            ))}
          </div>
          <div>
            <img
              className="w-[400px] rounded-[20px] h-[500px] mb-4 object-contain border bg-[#F0EEED]"
              src={data?.url}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[24px] leading-[50px] font-integral sm:text-[34px] md:text-[30px] lg:text-[34px] font-[700]">
              {data?.title}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {data?.desc}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex gap-1">
              <ReactStars
                value={data?.reting}
                size={20}
                color1="white"
                color2="#FFC633"
                edit={false}
              />
            </div>
            <p className="text-[15px] text-[#0007]">{data?.reting}</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#000000]">
              ${data?.price}/
            </p>
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#0007] line-through">
              $ {data?.oldPrice}
            </p>
            <p className="ml-7 text-[#f33] text-[16px] lg:text-[22px] md:text-[22px] font-[500]">
              -{discount > 0 && discount.toFixed(0)}%
            </p>
          </div>
          <hr />
          <p className="text-[15px] text-[#00000094]">Select Colors</p>
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => setSelectedColor("color1")}
              className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#4F4631]"
            >
              {selectedColor === "color1" && <FaCheck />}
            </button>
            <button
              onClick={() => setSelectedColor("color2")}
              className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#314F4A]"
            >
              {selectedColor === "color2" && <FaCheck />}
            </button>
            <button
              onClick={() => setSelectedColor("color3")}
              className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#31344F]"
            >
              {selectedColor === "color3" && <FaCheck />}
            </button>
          </div>
          <hr />
          <p className="text-[15px] text-[#00000094]">Choose Size</p>
          <div className="flex gap-2">
            <button className="w-[90px] h-[39px] transition-all rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              Small
            </button>
            <button className="w-[90px] h-[39px] transition-all rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              Medium
            </button>
            <button className="w-[90px] h-[39px] transition-all rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              Large
            </button>
            <button className="w-[90px] h-[39px] transition-all rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              X-Large
            </button>
          </div>
          <hr />
          <div className="flex gap-2">
            <div className="flex items-center justify-between rounded-full bg-[#F0F0F0] px-[10px] py-[4px] w-[30%] lg:w-[20%]">
              <button onClick={decrement} className="text-[22px]">
                -
              </button>
              <p className="text-[18px]">{count}</p>
              <button onClick={increment} className="text-[22px]">
                +
              </button>
            </div>
            <button
              className="w-[80%] rounded-full bg-black text-white h-[52px] 
                hover:bg-gray-800 hover:text-gray-300 
                active:bg-gray-900 active:scale-95 
                focus:outline-none focus:ring-2 focus:ring-gray-500 
                transition-all duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Customer />
    </>
  );
};

export default SinglProdutc;