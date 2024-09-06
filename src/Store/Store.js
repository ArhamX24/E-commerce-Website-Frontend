import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice.js'
import WishlistReducer from '../Store/WishlistSlice.js'

const Store = configureStore({
    reducer: {
        cart: CartReducer,
        wishlist: WishlistReducer
    },
});

export default Store


