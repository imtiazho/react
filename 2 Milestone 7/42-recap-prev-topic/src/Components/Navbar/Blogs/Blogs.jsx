import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";

const Blogs = ({handleBookMark, handleTime}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Total Blogs: {blogs.length}</h1>
      <div className="allBlogs grid grid-cols-2 gap-2">
        {blogs.map((blog) => (
          <Blog handleTime={handleTime} handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
