"use client";

import Form, { FormType } from "@/components/Form/Form";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";

const UpdateBook = () => {
  const { id } = useParams();
  const books = useAppSelector((state) => state.books);
  const initValue = books[books.findIndex((obj) => obj._id === id)];

  return (
    <div className="w-full ml-5 mt-5">
      <Link className="inline-block mb-5 p-2 bg-slate-700 rounded-md" href="/">
        Back to Home
      </Link>
      <Form initVal={initValue} formType={FormType.UPDATE} />
    </div>
  );
};
export default UpdateBook;
