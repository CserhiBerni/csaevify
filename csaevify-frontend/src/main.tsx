import LandingPage from "./pages/Landing/LandingPage";
import ErrorPage from "./pages/Error/ErrorPage";
import ContactPage from "./pages/Contact/ContactPage";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
