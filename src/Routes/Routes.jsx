import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Pages/Roots/Roots.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import BookDetails from "../Pages/BookDetails/BookDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json").then((res) => res.json()),
        path: "/",
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/bookDetails/:id',
        Component: BookDetails,
      }
    ],
  },
]);
