import { createSlice } from "@reduxjs/toolkit";

const initialState = false

const bikeSlice = createSlice({
  name:'toggelDetails',
  initialState,
  reducers:{
    detailsToggled(state){
      state.toggelDetails = !state.toggelDetails
    }
  }
})

export const { detailsToggled } = bikeSlice.actions
export default bikeSlice