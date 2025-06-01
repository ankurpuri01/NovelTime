import React from "react";
import { useParams } from "react-router-dom";

// Dummy book data
const books = [
  { title: "Pride and Prejudice", chapters: 61, status: "Completed" },
  { title: "Moby Dick", chapters: 135, status: "Ongoing" },
  { title: "1984", chapters: 24, status: "Completed" },
  { title: "To Kill a Mockingbird", chapters: 31, status: "Completed" },
  { title: "The Great Gatsby", chapters: 9, status: "Ongoing" },
];

export default function BookDetails() {
  const { bookSlug } = useParams();

  const book = books.find(
    (b) => b.title.replace(/\s+/g, "-").toLowerCase() === bookSlug
  );

  if (!book) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Book not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">{book.title}</h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Chapters:</strong> {book.chapters}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Status:</strong> <span className={book.status === "Completed" ? "text-green-600" : "text-orange-500"}>{book.status}</span>
        </p>
      </div>
    </div>
  );
}
