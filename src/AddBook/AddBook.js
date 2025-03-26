import React, { useState } from "react";
import "./AddBook.css";

function AddBook({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre || !summary) {
      alert("Fill all the field");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      summary,
      imageUrl: imageUrl || "",
    };

    addBook(newBook);

    // Clear input fields after adding
    setTitle("");
    setAuthor("");
    setGenre("");
    setSummary("");
    setImageUrl("");
  };

  return (
    <div className="add-book">
      <h1>AddBook</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}

        <label className="add-book_label">Title</label>
        <br />
        <input
          className="add-book_input"
          placeholder="Title*"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        {/*  Image */}

        <label className="add-book_label">Image URL</label>
        <input
          className="add-book_input"
          placeholder="Paste Image URL"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        {/*  Author */}

        <label className="add-book_label">Author</label>
        <br />
        <input
          className="add-book_input"
          placeholder="Author*"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />

        {/* Genre */}

        <label className="add-book_label">Genre</label>
        <br />
        <input
          className="add-book_input"
          placeholder="Genre*"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />

        {/* Summmary */}

        <label className="add-book_label">Summmary</label>
        <br />
        <input
          className="add-book_input"
          placeholder="Summary*"
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <br />

        {/* Buttons */}

        <button className="add-book_button" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
