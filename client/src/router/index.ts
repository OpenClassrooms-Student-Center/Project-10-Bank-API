import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/profile";
import { Routes } from "./routes";
import NotFound from "../pages/not-found";
import Layout from "../pages/Layout";
import Login from "../pages/login";
import Home from "../pages/home";
import Account from "../pages/profile/account-page";
import { memo } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: Routes.HOME,
        Component: memo(Home),
      },
      {
        path: Routes.PROFILE,
        Component: Profile,
      },
      {
        path: `${Routes.ACCOUNT}/:id`,
        Component: Account,
      },
      {
        path: Routes.LOGIN,
        Component: Login,
      },
      {
        path: Routes.NOT_FOUND,
        Component: memo(NotFound),
      },
    ],
  },
]);

export default router;
