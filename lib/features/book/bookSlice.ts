import { books } from "@/data/books";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface BookState {
  _id: string;
  name: string;
  price: number;
  category: string;
}

// Define the initial state using that type
const initialState: BookState[] = books;

export const bookSlice = createSlice({
  name: "books",
  // `createSlice` will infer the state type from the `initialState` argument
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
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
