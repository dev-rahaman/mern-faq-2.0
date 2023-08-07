import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Users/Login";
import ForgetPass from "../Users/ForgetPass";
import RefundPolicy from "../OtherPages/RefundPolicy";
import Terms from "../OtherPages/Terms";
import PrivacyPolicy from "../OtherPages/PrivacyPolicy";
import Checkout from "../Users/CheckOut";
import Success from "../Users/Success";
import Registration from "../Users/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/forget-pass",
        element: <ForgetPass />,
      },
      {
        path: "/refundPolicy",
        element: <RefundPolicy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

export default router;
