import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    onChangeTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { onChangeTitle } = filterSlice.actions;
export default filterSlice.reducer;
