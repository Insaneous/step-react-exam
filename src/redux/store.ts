import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { pizzaSlice } from "./slice/pizzaSlice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [pizzaSlice.name]: pizzaSlice.reducer,
  },
});