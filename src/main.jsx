// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NovelTime from "./NovelTime";
import BookDetails from "./bookdetails"; // adjust path if needed

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NovelTime />} />
        <Route path="/:bookSlug" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}


