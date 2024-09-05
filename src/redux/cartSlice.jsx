import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
      addItem: (state, action)=>{
        state.cart.push(action.payload);
      },
    //   delete
     deleteItem: (state, action)=>{
       state.cart= state.cart.filter((item)=> item.id !==action.payload.id);
       console.log(state.cart)
     }
  }

})
export const {addItem, deleteItem}=cartSlice.actions;

export default cartSlice.reducer;