import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";

// https://web.programming-hero.com/update-1/video/update-1-47-6-implement-dynamic-routes

const Book = ({ book }) => {
  console.log(book);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure className="h-60 bg-gray-300">
          <img className="h-full p-2" src={book.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{book.category}</div>
            <div className="badge badge-outline">{book.rating} <FaStarHalfAlt /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
