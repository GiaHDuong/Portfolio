import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import App from "./App";
import RepoHome from "./pages/RepoHome";
import RepoDetails from "./pages/RepoDetails";
import ErrorPage from "./pages/ErrorPage";
import AppOutlet from "./pages/AppOutlet";

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
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
