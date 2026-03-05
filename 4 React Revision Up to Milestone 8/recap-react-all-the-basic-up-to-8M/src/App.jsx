import { Suspense } from "react"
import User from "./Components/User/User"
import BottlesWithAsyncUSE from "./Components/BottlesWithAsyncUSE/BottlesWithAsyncUSE";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

function App() {

  return (
    <>
      <Suspense fallback={<h1>Loading Users...</h1>}>
        <User usersPromise={usersPromise}></User>
      </Suspense>
      <BottlesWithAsyncUSE></BottlesWithAsyncUSE>
    </>
  )
}

export default App
