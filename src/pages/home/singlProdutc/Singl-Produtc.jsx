import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../../redux/api/category-api";
const SinglProdutc = () => {
  const { id } = useParams();
  const { data } = useGetSingleCategoryQuery(id);
  console.log(data);

  console.log(id);
  const discount = ((data?.oldPrice - data?.price) / data?.oldPrice) * 100;
  return (
    <>
      <div className="container  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
        <div className="flex  gap-3">
          <div className="  w-[100px] h-[100px]  ">
            {data?.url?.map((item, inx) => (
              <img
                className=" object-contain m-auto rounded-[20px]"
                src={item}
                key={inx}
                alt=""
              />
            ))}
          </div>
          <div>
            <img
              className="w-[400px] rounded-[20px] h-[500px] mb-4 object-contain border bg-[#F0EEED] "
              src={data?.url}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[4px]">
            <p className=" text-[24px] leading-[50px] font-integral sm:text-[34px] md:text-[30px] lg:text-[34px] font-[700]">
              {data?.title}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px]  text-[#00000094] font-[400]">
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
          <div className="flex gap-1  items-center">
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#000000]">
              ${data?.price}/
            </p>
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700]  text-[#0007] line-through">
              $ {data?.oldPrice}
            </p>{" "}
            <p className="ml-7 text-[#f33] text-[16px] lg:text-[22px] md:text-[22px] font-[500]">
              -{discount > 0 && discount.toFixed(0)}%
            </p>
          </div>
          <hr />
          <p className="text-[15px] text-[#00000094]">Select Colors</p>
          <div className="flex gap-2 mb-2">
            <button className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#4F4631]">
              <FaCheck />
            </button>
            <button className="w-[37px] h-[37px] rounded-full bg-[#314F4A]"></button>
            <button className="w-[37px] h-[37px] rounded-full bg-[#31344F]"></button>
          </div>
          <hr />
          <p className="text-[15px] text-[#00000094]">Choose Size</p>
          <div className="flex gap-2">
            <button className="w-[90px] h-[39px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              {" "}
              Small
            </button>
            <button className="w-[90px] h-[39px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              {" "}
              Medium
            </button>
            <button className="w-[90px] h-[39px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              {" "}
              Large
            </button>
            <button className="w-[90px] h-[39px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#000] hover:text-[#fff]">
              {" "}
              X-Large
            </button>
          </div>
          <hr />
          <div className="flex gap-2">
            <div className="flex items-center justify-between rounded-full bg-[#F0F0F0] px-[10px] py-[4px] w-[30%] lg:w-[20%]">
              <p className="text-[22px]">-</p>
              <p className="text-[18px]">1</p>
              <p className="text-[22px]">+</p>
            </div>
            <button className="w-[80%] rounded-full bg-[#000] text-[#fff] h-[52px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglProdutc;
