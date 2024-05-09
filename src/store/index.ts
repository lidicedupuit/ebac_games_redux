import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import carrinhoReducer from "./reducers/carrinho"

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})
export type RootReducer = ReturnType<typeof store.getState>
