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
import UserDetails from "./Components/UserDetails/UserDetails.jsx";
import FormPractice from "./Components/FormPractice/FormPractice.jsx";
import NotFounded from "./Components/NotFounded/NotFounded.jsx";
import Fam from "./Components/FamTree/Fam.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

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
            <UsersSec userPromise={userPromise}></UsersSec>
          </Suspense>
        ),
      },
      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: 'form-practice',
        Component: FormPractice
      },
      {
        path: "famT",
        Component: Fam
      },
      {
        path: "*",
        Component: NotFounded
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
