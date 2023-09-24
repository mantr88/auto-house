import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./loyouts/MainLoyout/MainLoyout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import Catalog from "./pages/Catalog.tsx";
import Favorites from "./pages/Favorites.tsx";
import "modern-normalize";
import "./fonts.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/theme.ts";

// залишилось зробити

// 1. Виправити помилку 404 на деплої;
// 2. Додати лоадер;
// 3. Зробити сторінку Not Found.

const router = createBrowserRouter([
  {
    path: "/auto-house/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auto-house/",
        element: <Home />,
      },
      {
        path: "/auto-house/catalog",
        element: <Catalog />,
      },
      {
        path: "/auto-house/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
