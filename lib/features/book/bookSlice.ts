import { books } from "@/data/books";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookState {
  _id: string;
  name: string;
  price: number;
  category: string;
}

const initialState: BookState[] = books;

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookState>) => {
      state.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<BookState>) => {
      state[state.findIndex((obj) => obj._id === action.payload._id)] =
        action.payload;
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((obj) => obj._id === action.payload),
        1
      );
    },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
