import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobile from "./Components/Mobile/Mobile.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Users from "./Components/Users/Users.jsx";
import UsersSec from "./Components/UsersSec/UsersSec.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users");

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobile", Component: Mobile },
      { path: "blogs", Component: Blogs },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "secUser",
        element: (
          <Suspense fallback={<h1>Loading data...</h1>}>
            <UsersSec></UsersSec>
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
