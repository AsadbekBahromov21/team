import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/fonts/fonts.css";
import Layout from "./layout/layout";

import Home from "./pages/home/Home";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import SinglProdutc from "./pages/home/singlProdutc/Singl-Produtc";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateProduct from "./pages/create-product/Create-product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="products/:id" element={<SinglProdutc />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="createproduct" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
