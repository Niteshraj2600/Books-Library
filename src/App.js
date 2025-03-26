import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";
import List from "./List/List";
import AddBook from "./AddBook/AddBook";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  // Function to add a new book

  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    // <div className="app">
    //   <Nav />
    //   <div className="app-body">
    //     <List books={books} />
    //     <AddBook addBook={addBook} />
    //   </div>
    // </div>

    <>
      <Nav />

      <div className="book-container">
        <List books={books} />
        <AddBook addBook={addBook} />
      </div>
    </>
  );
}

export default App;
