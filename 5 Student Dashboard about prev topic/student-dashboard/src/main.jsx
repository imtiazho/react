import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./Components/Root/Root.jsx";
import Content from "./Components/Content/Content.jsx";
import StudentDetails from "./Components/StudentDetails/StudentDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("Data.json"), Component: Content },
      { path: "student-details", Component: StudentDetails },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
