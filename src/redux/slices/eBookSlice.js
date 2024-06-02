import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  // autor=isFavorite:
  // reset:
};

const bookSlice = createSlice({
  name: 'eBook',
  initialState: initialState,
  reducers: {
    getBooks(state, action) {
      return (state.books = action.payload);
    },
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    toggleFavoriteBook: (state, action) => {
      state.books.forEach((item) => {
        if (item.id === action.payload) {
          item.isFavorite = !item.isFavorite;
        }
      });
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((item) => item.id !== action.payload);
    },
  },
});

export const hahaFun = (state) => state.ebook.books;
export const bookActions = bookSlice.actions;
// export const {getBooks} = bookSlice.actions

export default bookSlice.reducer;
