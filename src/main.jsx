import React from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import AppProvider from "./hooks";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig";
import { standardTheme } from "./styles/themes/standard";
import { Router } from "./routes";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
          <Router />
          </BrowserRouter>
            </Elements>
              <GlobalStyles />
        <ToastContainer theme="dark" autoClose={3000} position="bottom-right"/>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
