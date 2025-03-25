import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./components/BookCard.jsx";
import "./Home.css"; // Ensure you have styles for Home

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel set in the Jazz Age, exploring themes of wealth and excess.",
    coverImage: "https://images.unsplash.com/photo-1524578271613-d550eac11660",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A story of racial injustice in the American South.",
    coverImage: "https://images.unsplash.com/photo-1524578271613-d550eac11660",
  },
];

function Home() {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button className="add-book-button">Add Book</button>
      </Link>

      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
