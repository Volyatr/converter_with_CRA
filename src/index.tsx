import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Converter from "./pages/converter/converter";
import ExchangeRate from "./pages/exchange-rate/exchange-rate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Converter />} />,
      <Route path="exchange-rate" element={<ExchangeRate />} />
    </Route>,
  ),
);
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<RouterProvider router={router} />);
