import { configureStore } from '@reduxjs/toolkit';
import eBookReducer from './slices/eBookSlice';
import eFilterReducer from './slices/filterSlice';
import filterAutherSlice from './slices/filterAutherSlice';

export const store = configureStore({
  reducer: {
    ebook: eBookReducer,
    filter: eFilterReducer,
    auther:filterAutherSlice,
  },
});
