"use client";

import { deleteBook } from "@/lib/features/book/bookSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const BookList = () => {
  const books = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteBook(id));
  };

  const render = books.map((book) => {
    return (
      <li key={book._id}>
        <Link href={`/books/updateBook/${book._id}`}>
          {book.name} - ${book.price.toFixed(2)} - {book.category} - {book._id}
        </Link>
        <button
          className="inline-block ml-5 mb-5 p-2 bg-slate-700 rounded-md"
          onClick={() => handleDelete(book._id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>{render}</ul>
    </div>
  );
};
export default BookList;
