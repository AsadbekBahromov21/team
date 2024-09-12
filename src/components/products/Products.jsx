import ReactStars from "react-stars";
import Skeleton from "../skeleton/skeleton";
const Products = ({ data, isLoading }) => {
  return (
    <div className=" w-full  lg:gap-4 grid grid-cols-1 sd:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 container mx-auto">
      {data?.map((category) => (
        <div className="  " key={category.id}>
          <div className="p-3 rounded-[20px]">
            <img
              className="w-full h-[280px] lg:h-[289px] sd:h-[220px]  object-cover rounded-[20px] duration-300 hover:scale-105"
              src={
                category.url.length > 0
                  ? category.url[0]
                  : "https://picsum.photos/400/150"
              }
              alt=""
            />
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
              /<p className="text-[15px] text-[#0007]">{category.oldPrice}</p>
            </div>
          </div>
        </div>
      ))}
      {isLoading &&
        new Array(4).fill().map((_, idx) => <Skeleton key={idx.id} />)}
    </div>
  );
};

export default Products;
