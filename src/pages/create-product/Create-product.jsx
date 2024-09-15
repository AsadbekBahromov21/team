import React from "react";
import { useCreateCategoryMutation } from "../../redux/api/category-api";

const CreateProduct = () => {
  const [createProduct, {}] = useCreateCategoryMutation();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.url = data.url.split("/n").filter((i) => i);
    data.price = +data.price;
    data.Oldprice = +data.Oldprice;
    data.reting = +data.reting;
    console.log(data);
    createProduct(data);
  };
  return (
    <>
      <div className="border ml-[50px]  mt-[50px] w-[350px]   p-4 ">
        <p className="text-[24px] text-center text-indigo-500 mb-3 font-integral font-[600]">
          Updet
        </p>
        <form
          onSubmit={handleCreateProduct}
          className="flex w-full   m-auto  flex-col gap-[15px]"
          action=""
        >
          <input
            className="w-full py-1 rounded-[5px] border outline-none pl-1"
            type="text"
            name="title"
            placeholder="Title"
            required
          />
          <input
            className="w-full py-1 rounded-[5px] border outline-none pl-1"
            type="number"
            name="price"
            placeholder="Price"
            required
          />
          <input
            className="w-full py-1 rounded-[5px] border outline-none pl-1"
            type="number"
            name="Oldprice"
            placeholder="Oldprice"
            required
          />
          <input
            className="w-full py-1 rounded-[5px] border outline-none pl-1"
            type="text"
            name="desc"
            placeholder="Desc"
            required
          />
          <input
            className="w-full py-1 rounded-[5px] border outline-none pl-1"
            type="number"
            name="reting"
            placeholder="Reting"
            required
          />
          <select
            className="w-full py-1 rounded-[5px] border outline-none"
            name="categorey"
            id=""
            required
          >
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
          </select>
          <select
            className="w-full borderpy-1 rounded-[5px] outline-none"
            name="color"
            id=""
            required
          >
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
          <textarea placeholder="url" required name="url" id=""></textarea>
          <button className="w-full text-[#fff] py-1 rounded-[5px] border bg-blue-600">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
