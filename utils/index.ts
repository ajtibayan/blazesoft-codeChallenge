import { BookState } from "@/lib/features/book/bookSlice";

export type ErrorFormFields = {
  _id?: string;
  name?: string;
  price?: string;
  category?: string;
};

// Generic error handling. Much more robust error handling necessary for production
export const validate = (vals: BookState) => {
  const errors: ErrorFormFields = {};

  if (!vals.name) {
    errors.name = "Name is required!";
  } else if (vals.name.length < 2) {
    errors.name = "Enter at least 2 characters!";
  }

  if (typeof vals.price !== "number") {
    errors.price = "Please enter a number";
  } else if (vals.price === 0) {
    errors.price = "Please enter a value";
  }

  if (!vals.category) {
    errors.category = "Category is required!";
  } else if (vals.category.length < 2) {
    errors.category = "Enter at least 2 characters!";
  }

  return errors;
};
