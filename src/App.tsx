import { Examples } from "@pages/examples";
import { Home } from "@pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorPage } from "@pages/error-page";
import { ErrorBoundary } from "@sentry/react";
import { Menu } from "@components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
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
export function App() {

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
        <Menu />
        <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
