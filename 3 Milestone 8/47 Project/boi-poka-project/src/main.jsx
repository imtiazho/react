import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./Components/Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { APIProvider } from "@vis.gl/react-google-maps";
import { googlemapAPIKey } from "./Components/Utilities/map-api-key.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APIProvider apiKey={googlemapAPIKey}>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </APIProvider>
  </StrictMode>,
);
