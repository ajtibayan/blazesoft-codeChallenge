"use client";

import { BookState, addBook } from "@/lib/features/book/bookSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import Form, { FormType } from "../Form/Form";

const AddBook = () => {
  const initValue: BookState = {
    _id: crypto.randomUUID(),
    name: "",
    price: 0,
    category: "",
  };
  const dispatch = useAppDispatch();

  return (
    <div className="w-full ml-5 mt-5">
      <Link className="inline-block mb-5 p-2 bg-slate-700 rounded-md" href="/">
        Back to Home
      </Link>
      <Form initVal={initValue} formType={FormType.ADD} />
    </div>
  );
};
export default AddBook;
