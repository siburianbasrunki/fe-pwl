import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./App";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import DetailProduct from "./pages/detailProduct";
import Cart from "./pages/cart";
import Dashboard from "./admin/admin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/detailproduct",
    element: <DetailProduct />,
  },
  {
    path : "/cart",
    element : <Cart/>
  },
  {
    path : "/admin/dashboard",
    element : <Dashboard/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
