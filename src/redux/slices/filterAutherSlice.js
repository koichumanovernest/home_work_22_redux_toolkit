import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  auther:'',
}
const filterAutherSlice = createSlice({
  name:"filter",
  initialState:initialState,
  reducers:{
    onChangeAuther:(state,action) => {
      state.auther = action.payload
    },
  },
})

export const {onChangeAuther } = filterAutherSlice.actions;
export default filterAutherSlice.reducer