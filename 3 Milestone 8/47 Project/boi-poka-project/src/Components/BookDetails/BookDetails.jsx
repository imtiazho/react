import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { addToStoredDB } from "../../addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const book_id = parseInt(id);
  const data = useLoaderData();

  const targetedData = data.find((book) => book.bookId === book_id);
  const { image, bookName, totalPages } = targetedData;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
    // Can store with id

    // Where to store

    // Array or like a collection

    // If book already exist the a alert
    MySwal.fire({
      title: <p>Hello World</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.showLoading();
      },
    }).then(() => {
      return MySwal.fire(<p>Shorthand works too</p>);
    });
  };

  return (
    <div>
      <img src={image} alt="" />
      <h5>{bookName}</h5>
      <p>{totalPages}</p>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-accent m-2">Wish List</button>
    </div>
  );
};

export default BookDetails;
