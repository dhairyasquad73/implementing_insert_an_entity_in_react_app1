import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <Link to="/add-book" className="add-book-button">Add Book</Link>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

const AddBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: "", author: "", description: "", coverImage: "" });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} className="border p-2 w-full" required />
        <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="description" placeholder="Description" value={book.description} onChange={handleChange} className="border p-2 w-full" required />
        <input type="url" name="coverImage" placeholder="Cover Image URL" value={book.coverImage} onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}
