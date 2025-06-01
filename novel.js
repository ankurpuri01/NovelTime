import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const books = [
  { title: "Pride and Prejudice", chapters: 61 },
  { title: "Moby Dick", chapters: 135 },
  { title: "1984", chapters: 24 },
  { title: "To Kill a Mockingbird", chapters: 31 },
  { title: "The Great Gatsby", chapters: 9 },
];

export default function NovelTime() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex flex-col justify-between font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="text-3xl font-extrabold text-purple-700 tracking-wide">NovelTime</div>
        <div className="space-x-6 text-gray-700 font-semibold text-lg">
          <a href="#" className="hover:text-purple-900 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-purple-900 transition-colors duration-300">Romantic</a>
          <a href="#" className="hover:text-purple-900 transition-colors duration-300">Thriller</a>
          <a href="#" className="hover:text-purple-900 transition-colors duration-300">About Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-10 px-6">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">Welcome to NovelTime</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the world of literature with our curated collection of timeless novels. Browse genres, explore chapters, and dive into storytelling like never before.
        </p>
      </section>

      {/* Centered Table */}
      <main className="flex justify-center items-center mt-10 px-4">
        <Card className="w-full max-w-3xl shadow-2xl border-2 border-purple-300 rounded-2xl bg-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Explore Our Book Collection</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xl text-purple-600">Book Name</TableHead>
                  <TableHead className="text-xl text-right text-purple-600">Chapter Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books.map((book, index) => (
                  <TableRow key={index} className="hover:bg-purple-50 transition-colors">
                    <TableCell className="font-semibold text-gray-800">
                      <a href={`/${book.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-blue-600 hover:underline">
                        {book.title}
                      </a>
                    </TableCell>
                    <TableCell className="text-right text-gray-700">{book.chapters}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      {/* Quote Section */}
      <section className="text-center mt-12 px-6">
        <blockquote className="italic text-xl text-purple-700 font-medium">
          "A reader lives a thousand lives before he dies . . . The man who never reads lives only one." – George R.R. Martin
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-6 text-center text-gray-700 mt-10">
        <p className="text-xl font-bold text-purple-700 mb-2">About Us</p>
        <p className="text-sm max-w-xl mx-auto">
          NovelTime is your go-to platform for discovering the timeless charm of classic literature and the thrill of contemporary stories. Browse by genre and explore at your own pace.
        </p>
        <div className="mt-4 text-sm text-gray-500">© 2025 NovelTime. All rights reserved.</div>
      </footer>
    </div>
  );
}
