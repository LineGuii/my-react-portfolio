import { Examples } from "@pages/examples";
import { Home } from "@pages/home";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorPage } from "@pages/error-page";
import { ErrorBoundary } from "@sentry/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/examples",
    element: <Examples />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPage />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
