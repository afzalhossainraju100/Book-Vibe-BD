import React from "react";
import Book from "../Book/Book.jsx";
import { Suspense } from "react";

const Books = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-2 mt-4">Books</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-[90%] mx-auto">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
