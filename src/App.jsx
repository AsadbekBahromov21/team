import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/fonts/fonts.css";
import Layout from "./layout/layout";

import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
