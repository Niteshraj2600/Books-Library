import React from "react";
import "./Card.css";

function Card({ id, title, author, genre, summary, imageUrl }) {
  const handleDelete = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const updatedBooks = storedBooks.filter((book) => book.id !== id);

    // this updated book can matches all the book and different id was stored in the updated variable
    // and then setItem will update the book in local storage with list present in the updated book value

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    window.location.reload(); // Refresh to update UI
  };
  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <div className="card-description">
        {imageUrl && <img src={imageUrl} alt={title} className="book-image" />}
        <p>Author : {author}</p>
        <p>Genre : {genre} </p>
      </div>
      <p className="card-summary">{summary}</p>
      <div className="card-button">
        <button className="button">Edit </button>
        <button className="button" onClick={handleDelete}>
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
