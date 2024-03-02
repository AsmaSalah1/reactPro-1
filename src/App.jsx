import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots1 from "./routs/Roots1";
import Categories from "./pages/categore/Categories";
import Cards from "./pages/cards/Cards";
import Products from "./pages/Products/Products";
import './App.css'

import 'swiper/css';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots1 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
  
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/cart",
          element: <Cards />,
        }
      ],
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
    
    </>
  );
}

export default App;
