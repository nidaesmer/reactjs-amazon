import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if in product array
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      // kaldırılacak urunu bulcaz
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      // urun nosundan miktarı kaldır
      state.productsNumber = state.productsNumber - productToRemove.quantity;
      //kaldırılan ürünün dizinini bulun
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      //diziden kaldır
      state.products.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
