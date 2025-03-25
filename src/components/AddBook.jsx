import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import styles for the form

function AddBook() {
  const [book, setBook] = useState({ title: "", author: "", description: "", coverImage: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Book Added:", book); // No backend, so just logging
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="url" name="coverImage" placeholder="Cover Image URL" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
