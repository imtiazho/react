import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
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
            <div className="badge badge-outline">
              {book.rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
