import React from "react";
import "./List.css";
import Card from "../Card/Card";

function List({ books }) {
  // console.log(state);
  return (
    <div className="list">
      {books.length > 0 ? (
        books.map((book, index) => (
          <Card
            // item={item}
            key={index}
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            summary={book.summary}
            imageUrl={book.imageUrl || ""}
          />
        ))
      ) : (
        <p className="error-msg">No Book Available ! Enter the book Details</p>
      )}
    </div>
  );
}

export default List;
