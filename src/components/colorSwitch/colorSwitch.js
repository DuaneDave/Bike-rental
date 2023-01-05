import { createSlice } from '@reduxjs/toolkit'

const intialState = {
  color : null
}
export const colorSwitchSlice = createSlice({
  name:"colorSwitch",
  intialState,
  reducers: {
   colorSwitched(state, action) {
    state.color = action.payload
   }
  }
})

export const {colorSwitched} = colorSwitchSlice.actions
export default colorSwitchSlice.reducer