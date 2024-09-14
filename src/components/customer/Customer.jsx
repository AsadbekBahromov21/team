import React from "react";
import { IoIosStar } from "react-icons/io";
import imges from "../../assets/galichka.svg";
import SectionTitle from "../../components/section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Customer = () => {
  return (
    <div className="w-full container mx-auto">
      <div className=" w-full  justify-center gap-5 flex flex-wrap">

<div className="w-full border">
    <p>Product Details</p>
    <p>Rating & Reviews</p>
    <p>FAQs</p>
</div>

        <div className="w-full">
          <p className="text-[24px] font-bold">All Reviews  <span className="text-[16px] font-normal">(451)</span></p>
        </div>
        <div className="border rounded-xl h-[190px] w-[48%]">
          <div className="flex ml-5 mt-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <div className="flex ml-5 mt-1">
            <p className="font-bold text-xl">Sarah M.</p>
            {/* <img src={svg} alt="" /> */}
          </div>
          <p className="flex ml-5 mt-1 mb-5 mr-5">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border rounded-xl h-[190px] w-[48%]">
          <div className="flex ml-5 mt-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <div className="flex ml-5 mt-1">
            <p className="font-bold text-xl">Alex K.</p>
            <img src={imges} alt="" />
          </div>
          <p className="flex ml-5 mt-1 mb-5 mr-5">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="border rounded-xl h-[190px] w-[48%]">
          <div className="flex ml-5 mt-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <div className="flex ml-5 mt-1">
            <p className="font-bold text-xl">James L.</p>
            <img src={imges} alt="" />
          </div>
          <p className="flex ml-5 mt-1 mb-5 mr-5">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
        <div className="border  w-[48%] rounded-xl h-[190px]">
          <div className="flex ml-5 mt-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <div className="flex ml-5 mt-1">
            <p className="font-bold text-xl">Sarah M.</p>
            <img src={imges} alt="" />
          </div>
          <p className="flex ml-5 mt-1 mb-5 mr-5">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="border rounded-xl  w-[48%] h-[190px]">
          <div className="flex ml-5 mt-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <div className="flex ml-5 mt-1">
            <p className="font-bold text-xl">Alex K.</p>
            <img src={imges} alt="" />
          </div>
          <p className="flex ml-5 mt-1 mb-5 mr-5">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="border rounded-xl h-[190px]  w-[48%]">
          <div className="flex ml-5 mt-5">
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
            <IoIosStar className="text-yellow-300" />
          </div>
          <div className="flex ml-5 mt-1">
            <p className="font-bold text-xl">James L.</p>
            <img src={imges} alt="" />
          </div>
          <p className="flex ml-5 mt-1 mb-5 mr-5">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
