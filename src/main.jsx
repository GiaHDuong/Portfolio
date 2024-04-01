import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import RepoHome from "./pages/RepoHome";
import RepoDetails from "./pages/RepoDetails";
import ErrorPage from "./pages/ErrorPage";
import AppOutlet from "./pages/AppOutlet";

import DesktopNav from "./components/navbars/DesktopNav";
import HamburgerNav from "./components/navbars/HamburgerNav";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RepoHome />} errorElement={<ErrorPage />} />
      <Route path="/repodetails" element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <DesktopNav />
      <HamburgerNav />
    </>
    <RouterProvider router={router} />
  </React.StrictMode>
);
