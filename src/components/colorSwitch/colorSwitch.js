import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color : null
}
export const colorSwitchSlice = createSlice({
  name:"colorSwitch",
  initialState,
  reducers: {
   colorSwitched(state, action) {
    state.color = action.payload
   }
  }
})

export const { colorSwitched } = colorSwitchSlice.actions
export default colorSwitchSlice