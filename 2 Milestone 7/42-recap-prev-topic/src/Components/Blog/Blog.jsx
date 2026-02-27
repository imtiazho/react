import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleTime }) => {
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="object-cover" src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleTime(blog)} className="btn btn-primary">Marked as Read</button>
            <FaBookmark onClick={() => handleBookMark(blog)} size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
