import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import Home from "./Routes/Home.jsx";
import IngSis from "./Routes/IngSis.jsx";
import IngMec from "./Routes/IngMec";
import IngElec from "./Routes/IngElec";
import Prog from "./Routes/Prog";
import HyS from "./Routes/HyS";
import Mecat from "./Routes/Mecat"; 

import Error from "./Routes/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/IngSis",
    element: <IngSis />,
  },
  {
    path: "/IngMec",
    element: <IngMec />,
  },
  {
    path: "/IngElec",
    element: <IngElec />,
  },
  {
    path: "/Prog",
    element: <Prog />,
  },
  {
    path: "/HyS",
    element: <HyS />,
  },
  {
    path: "/Mecatronica",
    element: <Mecat/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
