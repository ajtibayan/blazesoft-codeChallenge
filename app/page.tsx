import BookList from "@/components/BookList/BookList";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="w-full ml-5 mt-5">
      <Link
        className="inline-block mb-5 p-2 bg-slate-700 rounded-md"
        href="/books/addBook"
      >
        Add Book
      </Link>
      <h1 className="mb-5 text-3xl">Book List</h1>
      <BookList />
    </div>
  );
};
export default HomePage;
