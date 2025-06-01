import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NovelTime from "./NovelTime";
import BookDetails from "./bookdetails"; // ✅ use actual file name
import Romantic from "./Romantic";
import Thriller from "./Thriller";
import AboutUs from "./AboutUs";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NovelTime />} />
        <Route path="/:bookSlug" element={<BookDetails />} />
        <Route path="/romantic" element={<Romantic />} />
        <Route path="/thriller" element={<Thriller />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}
