import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  toggled: false
}
const togButtonSlice = createSlice({
  name: "togButton",
  initialState,
  reducers:  {
    toggle:(state) => {
      state.toggled = !state.toggled
    }
  }
})

export const {toggle} = togButtonSlice.actions;
export default togButtonSlice.reducer;