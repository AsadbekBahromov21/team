import ReactStars from "react-stars";
import Skeleton from "../skeleton/skeleton";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


import { FaHeart } from "react-icons/fa";
const Products = ({ data, isLoading }) => {
  return (
    <div className=" w-full  lg:gap-4 grid grid-cols-1 sd:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto">
      {data?.map((category) => {
        const discount =
          ((category.oldPrice - category.price) / category.oldPrice) * 100;
        return (
          <div className="" key={category.id}>
            <div className="w-full h-[280px] lg:h-[289px] relative sd:h-[220px] rounded-[20px] overflow-hidden bg-[#f0eeed]">
              <button>
              <FaHeart className="absolute right-5 top-5 text-2xl z-40 hover:text-red-900" />
              </button>
              <Link to={`/products/${category.id}`}>
                <img
                  onClick={(event) => {
                    window.scroll(0, 0);
                  }}
                  className="w-full h-full object-contain duration-300 hover:scale-105"
                  src={
                    category.url.length > 0
                      ? category.url[0]
                      : "https://picsum.photos/400/150"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="flex flex-col gap-[4px]">
                <p className=" text-[13px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-[700]">
                  {category.title}
                </p>
                <p className="text-[15px] font-[600]">
                  {category.desc.slice(0, 0)}
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="flex gap-1">
                  <ReactStars
                    value={category.reting}
                    size={20}
                    color1="white"
                    color2="#FFC633"
                    edit={false}
                  />
                </div>
                <p className="text-[15px] text-[#0007]">{category.reting}</p>
              </div>
              <div className="flex gap-1 items-baseline">
                <p className="text-[18px] font-[700] text-[#000000]">
                  ${category.price}
                </p>
                /
                <p className="text-[18px] font-[700]  text-[#0007] line-through">
                  $ {category.oldPrice}
                </p>{" "}
                <p className="ml-7 text-[#f33] font-[500]">
                  {discount > 0 && discount.toFixed(0)}%
                </p>
              </div>
              <button className="border  py-[2px] px-[10px] text-[#fff] flex items-center justify-center rounded-[4px]">
                <IoCartOutline className="text-[#3BB77E]" />{" "}
                <p className="text-[13px] text-[#3BB77E] font-[500]">Add</p>
              </button>
            </div>
          </div>
        );
      })}
      {isLoading && new Array(4).fill().map((_, idx) => <Skeleton key={idx} />)}
    </div>
  );
};

export default Products;
