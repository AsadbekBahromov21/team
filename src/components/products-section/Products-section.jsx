import React from "react";
import Products from "../products/Products";

const ProductsSection = ({ title, data, isLoading, className }) => {
  return (
    <div className={className}>
      <h1 className=" text-[24px] sm:text-[28px] md:text-[34px] text-center lg:-[40px] font-integral font-[700] text-[#000] mb-5 ">
        {title}
      </h1>
      <Products data={data} isLoading={isLoading} />
    </div>
  );
};

export default ProductsSection;
