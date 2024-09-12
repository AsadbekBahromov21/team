import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
const App = lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="loader flex flex-col gap-4 m-auto mt-[300px]">
          loading...
        </div>
      }
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
