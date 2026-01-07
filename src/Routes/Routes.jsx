import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Roots from "../Pages/Roots/Roots.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import Home from "../Pages/Home/Home.jsx";
import About from "../Pages/About/About.jsx";
import BookDetails from "../Pages/BookDetails/BookDetails.jsx";
import ReadList from "../Pages/ReadList/ReadList.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json").then((res) => res.json()),
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/readList',
        loader: () => fetch("/booksData.json").then((res) => res.json()),
        Component: ReadList,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch("/booksData.json").then((res) => res.json()),
        Component: BookDetails,
      }
    ],
  },
]);
