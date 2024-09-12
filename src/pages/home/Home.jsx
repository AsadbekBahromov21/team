import { useState } from "react";
import ProductsSection from "../../components/products-section/Products-section";
import { useGetCategoryQuery } from "../../redux/api/category-api";
import { Button } from "antd";
import Hero from "../../components/hero/Hero";
import Animation from "../../components/animation/Animation";
import Browse from "../../components/browse/Browse";

const Home = () => {
  const [limit, setLimit] = useState(4);
  const { isLoading, data } = useGetCategoryQuery({
    limit,
    page: 1,
  });
  const { isLoading: isLoading2, data: data2 } = useGetCategoryQuery({
    limit: 4,
    page: 2,
  });

  return (
    <>
      <Hero />
      <Animation />
      <section>
        <ProductsSection
          title={"NEW ARRIVALS"}
          data={data}
          isLoading={isLoading}
        />
        <div className="container mx-auto ">
          <Button
            className="mb-[50px] w-[120px] flex m-auto mt-6 rounded-[62px] bg-[#fff]"
            onClick={() => setLimit((prev) => prev + 4)}
            disabled={isLoading}
          >
            View All
          </Button>
          <hr />
        </div>
        <ProductsSection
          className="mt-10"
          title={"BROWSE BY dress STYLE"}
          data={data2}
          isLoading={isLoading2}
        />
      </section>
      <Browse />
    </>
  );
};

export default Home;
