import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
export const cartCounterSlice = createSlice({
    name: 'productTypes',
    initialState,
    reducers: {
      Add_TO_Cart: (state) => {
        state.value += 1
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { Add_TO_Cart } = cartCounterSlice.actions
  
  export default cartCounterSlice.reducer