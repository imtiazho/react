import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const book_id = parseInt(id);
  const data = useLoaderData();

  const targetedData = data.find(book => book.bookId === book_id);
  const {image, bookName} = targetedData;

  return <div>
    <img src={image} alt="" />
    <h5>{bookName}</h5>

    <button className="btn btn-accent m-2">Mark as Read</button>
    <button className="btn btn-accent m-2">Wish List</button>
  </div>;
};

export default BookDetails;
