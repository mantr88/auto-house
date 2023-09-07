import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./loyouts/MainLoyout/MainLoyout.tsx";
import ErrorPage from "./loyouts/pages/errorPage.tsx";
import Home from "./loyouts/pages/Home.tsx";
import Catalog from "./loyouts/pages/Catalog.tsx";
import Favorites from "./loyouts/pages/Favorites.tsx";
import "modern-normalize";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
