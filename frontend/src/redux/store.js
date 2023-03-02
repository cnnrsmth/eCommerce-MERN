import { configureStore } from "@reduxjs/toolkit"

import { productsApi } from "./productsApi"
import cartReducer from "./cartSlice"
import orderReducer from "./orderSlice"

const store = configureStore({
    reducer: {
      cart: cartReducer,
      [productsApi.reducerPath]: productsApi.reducer,
      orderId: orderReducer
    },
    middleware: (getDefaultMiddleware) =>{
      return getDefaultMiddleware().concat(productsApi.middleware)
    },
});

export default store