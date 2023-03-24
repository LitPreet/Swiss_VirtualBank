import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/pages/index";
import SigninPage from "./src/pages/signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Apps = () => {
  return <Home />;
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Apps />,
  },
  {
    path: "/signinpage",
    element: <SigninPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
