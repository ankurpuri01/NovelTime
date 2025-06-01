import React from "react";
import { Link } from "react-router-dom";

const books = [
  { title: "Pride and Prejudice", chapters: 61 },
  { title: "Moby Dick", chapters: 135 },
  { title: "1984", chapters: 24 },
  { title: "To Kill a Mockingbird", chapters: 31 },
  { title: "The Great Gatsby", chapters: 9 },
];

export default function NovelTime() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #d8b4fe, #fbcfe8, #fef3c7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: "1.875rem",
            fontWeight: "800",
            color: "#7c3aed",
            letterSpacing: "0.05em",
          }}
        >
          NovelTime
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            color: "#4b5563",
            fontWeight: "600",
            fontSize: "1.125rem",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#4b5563" }}>
            Home
          </Link>
          <Link
            to="/romantic"
            style={{ textDecoration: "none", color: "#4b5563" }}
          >
            Romantic
          </Link>
          <Link
            to="/thriller"
            style={{ textDecoration: "none", color: "#4b5563" }}
          >
            Thriller
          </Link>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", color: "#4b5563" }}
          >
            About Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{ textAlign: "center", marginTop: "2.5rem", padding: "0 1.5rem" }}
      >
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "700",
            color: "#6b21a8",
            marginBottom: "0.5rem",
          }}
        >
          Welcome to NovelTime
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#4b5563",
            maxWidth: "40rem",
            margin: "0 auto",
          }}
        >
          Discover the world of literature with our curated collection of
          timeless novels. Browse genres, explore chapters, and dive into
          storytelling like never before.
        </p>
      </section>

      {/* Centered Table */}
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2.5rem",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "48rem",
            boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)",
            border: "2px solid #c4b5fd",
            borderRadius: "1rem",
            backgroundColor: "white",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#6b21a8",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Explore Our Book Collection
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    fontSize: "1.25rem",
                    color: "#7c3aed",
                    textAlign: "left",
                    padding: "0.5rem",
                    borderBottom: "2px solid #c4b5fd",
                  }}
                >
                  Book Name
                </th>
                <th
                  style={{
                    fontSize: "1.25rem",
                    color: "#7c3aed",
                    textAlign: "right",
                    padding: "0.5rem",
                    borderBottom: "2px solid #c4b5fd",
                  }}
                >
                  Chapter Count
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr
                  key={index}
                  style={{ transition: "background-color 0.3s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f5f3ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td
                    style={{
                      fontWeight: "600",
                      color: "#374151",
                      padding: "0.5rem",
                    }}
                  >
                    <Link
                      to={`/${book.title.replace(/\s+/g, "-").toLowerCase()}`}
                      style={{ color: "#2563eb", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.textDecoration = "none")
                      }
                    >
                      {book.title}
                    </Link>
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      color: "#4b5563",
                      padding: "0.5rem",
                    }}
                  >
                    {book.chapters}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Quote Section */}
      <section
        style={{ textAlign: "center", marginTop: "3rem", padding: "0 1.5rem" }}
      >
        <blockquote
          style={{
            fontStyle: "italic",
            fontSize: "1.25rem",
            color: "#7c3aed",
            fontWeight: "500",
          }}
        >
          "A reader lives a thousand lives before he dies . . . The man who
          never reads lives only one." – George R.R. Martin
        </blockquote>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "white",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
          padding: "1.5rem",
          textAlign: "center",
          color: "#4b5563",
          marginTop: "2.5rem",
        }}
      >
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#7c3aed",
            marginBottom: "0.5rem",
          }}
        >
          About Us
        </p>
        <p style={{ fontSize: "0.875rem", maxWidth: "40rem", margin: "0 auto" }}>
          NovelTime is your go-to platform for discovering the timeless charm of
          classic literature and the thrill of contemporary stories. Browse by
          genre and explore at your own pace.
        </p>
        <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#6b7280" }}>
          © 2025 NovelTime. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
