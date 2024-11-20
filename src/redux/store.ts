import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { pizzaSlice } from "./slice/pizzaSlice";
import { cartSlice } from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [pizzaSlice.name]: pizzaSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;