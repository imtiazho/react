import { useState } from "react";
import Blogs from "./Components/Navbar/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [time, setSet] = useState(0);

  const handleBookMark = (blog) => {
    setBookMark([...bookMark, blog]);
  };

  const handleTime = (blog) => {
    setSet(time + blog.reading_time);
    handleRemoveBookmarked(blog.id);
  };

  const handleRemoveBookmarked = (id) => {
    const restOfBookMarked = bookMark.filter((each) => each.id !== id);
    setBookMark(restOfBookMarked);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="mainContainer flex w-[90%] mx-auto mt-4">
        <div className="leftContainer w-[70%]">
          <Blogs
            handleTime={handleTime}
            handleBookMark={handleBookMark}
            handleRemoveBookmarked={handleRemoveBookmarked}
          ></Blogs>
        </div>
        <div className="rightContainer w-[30%] border p-2">
          <p>Reading Time: {time}</p>
          <p>Bookmarked count: {bookMark.length}</p>
          {bookMark?.map((each) => (
            <h1>{each.title}</h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
