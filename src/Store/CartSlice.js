import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      let productData = action.payload;
      let pid = productData.id;
      let productIdx = state.cart.findIndex((obj) => obj.data.id == pid);
      if (productIdx != -1) {
        let currentProduct = state.cart[productIdx];
        currentProduct.quantity = currentProduct.quantity + 1;
      } else {
        let newObj = { data: productData, quantity: 1 };
        state.cart.push(newObj);
      }
    },
    removeCart: (state, action) => {
      let pid = action.payload;
      let productIdx = state.cart.findIndex((obj) => obj.data.id == pid);
      state.cart.splice(productIdx, 1);
    },
    quantityIncrease: (state, action) => {
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      let existingProduct = state.cart[existingProductIdx];
      existingProduct.quantity = existingProduct.quantity + 1;
    },
    quantityDecrease: (state, action) => {
      let pid = action.payload;
      let existingProductIdx = state.cart.findIndex(
        (cartObj) => cartObj.data.id === pid
      );
      let existingProduct = state.cart[existingProductIdx];
      if (existingProduct.quantity > 1) {
        existingProduct.quantity = existingProduct.quantity - 1;
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const {
  addCart,
  removeCart,
  quantityDecrease,
  quantityIncrease,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
