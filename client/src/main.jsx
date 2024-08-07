import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <h1>Welcome to My World</h1>,
      },
      {
        path: "register",
        element: <h1>Register</h1>,
      },
      {
        path: "login",
        element: <h1>Login</h1>,
      },
    ],
  },
  {},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
