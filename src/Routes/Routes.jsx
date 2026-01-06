import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Pages/Roots/Roots.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Home from "../Pages/Home/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      }
          ]
  },
]);
