import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Students from "./Pages/Students/Students.jsx";
import StudentDetails from "./Pages/StudentDetails/StudentDetails.jsx";
import Error from "./Pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "students",
        loader: () =>
          fetch("https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/marks.json").then(res => res.json()),
        Component: Students,
      },
      {
        path: "/students/:Id",
        Component: StudentDetails,
      },
      {
        path: "*",
        Component: Error
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
