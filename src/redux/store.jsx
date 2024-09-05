import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice'

const store= configureStore({
  reducer: {
    allData: cartReducer,
  }
});

export default store;