import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import Products from "../products/Products";
import imges from "../../assets/galichka.svg";
import { useGetCategoryQuery } from "../../redux/api/category-api";

const Customer = ({isLoading }) => {
  
  

  const {data} = useGetCategoryQuery()

  const [reviews, setReviews] = useState([
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      name: "Sarah M.",
      review: "Great collection! Absolutely loved the shopping experience.",
      rating: 4,
    },
    {
      name: "Michael B.",
      review: "Fast delivery and top-notch quality products!",
      rating: 5,
    },
    {
      name: "Anna K.",
      review: "Loved the range of products. Will shop again!",
      rating: 4,
    },
    {
      name: "John D.",
      review: "A bit pricey, but the quality is worth it.",
      rating: 4,
    },
    {
      name: "Emily R.",
      review: "Beautiful designs and fast delivery!",
      rating: 5,
    },
    {
      name: "Robert C.",
      review: "Good customer service and high-quality items.",
      rating: 5,
    },
    {
      name: "Laura G.",
      review: "The best online store I've ever shopped at!",
      rating: 5,
    },
  ]);

  const [visibleReviews, setVisibleReviews] = useState(6);


  const showMoreReviews = () => {
    if (visibleReviews < reviews.length) {
      setVisibleReviews((prev) => prev + 2);
    }
  };

  return (
    <div>

      <div className="container w-full border-b py-2 flex items-center justify-between">
        <p className="text-[20px] transition-all cursor-pointer hover:font-bold hover:text-[22px]">
          Product Details
        </p>
        <p className="text-[20px] transition-all cursor-pointer hover:font-bold hover:text-[22px]">
          Rating & Reviews
        </p>
        <p className="text-[20px] transition-all cursor-pointer hover:font-bold hover:text-[22px]">
          FAQs
        </p>
      </div>


      <div className="container w-full py-2 flex items-center justify-between">
        <p className="font-bold text-[22px]">
          All Reviews <span className="font-normal text-[16px]">(451)</span>
        </p>

        <div className="flex items-center gap-3">
          <button className="h-[48px] w-[48px] bg-slate-100 flex items-center justify-center rounded-full text-2xl">
            <GiSettingsKnobs />
          </button>
          <select
            className="h-[48px] w-[120px] bg-slate-100 flex items-center justify-center rounded-full pl-2"
            name=""
            id=""
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
          </select>
          <button className="w-[166px] h-[48px] bg-black flex items-center justify-center rounded-full text-white">
            Write a Review
          </button>
        </div>
      </div>


      <div className="container w-full mt-5 p-3 flex justify-center gap-5 flex-wrap">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div
            key={index}
            className="border rounded-xl w-full md:w-[48%] hover:cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex ml-5 mt-5">
              {[...Array(review.rating)].map((_, i) => (
                <IoIosStar key={i} className="text-yellow-300" />
              ))}
            </div>
            <div className="flex items-center ml-5 mt-1">
              <p className="font-bold text-xl">{review.name}</p>
              <img
                src={imges}
                alt="user-avatar"
                className="ml-2 w-10 rounded-full object-cover"
              />
            </div>
            <p className="ml-5 mt-1 mb-5 mr-5">{review.review}</p>
          </div>
        ))}


        {visibleReviews < reviews.length && (
          <div className="w-full flex items-center justify-center mt-2">
            <button
              onClick={showMoreReviews}
              className="hover:bg-gray-800 hover:text-gray-300 
              active:bg-gray-900 active:scale-95 
              focus:outline-none focus:ring-2 focus:ring-gray-500 
              transition-all duration-300 ease-in-out rounded-full border border-[#0000001A] text-black font-bold h-[52px] w-[230px]"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>


      <div className="mt-[40px] container w-full flex items-center justify-center flex-col gap-20">
        <p className="text-6xl font-bold">YOU MIGHT ALSO LIKE</p>

        <Products data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Customer;