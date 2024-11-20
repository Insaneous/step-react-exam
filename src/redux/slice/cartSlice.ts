import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PizzaCart {
  id: number;
  count: number;
}

const loadCartFromSession = () => {
  const storedCart = sessionStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzas: loadCartFromSession() as PizzaCart[],
  },
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const existingPizza = state.pizzas.find((pizza) => pizza.id === action.payload);
      if (existingPizza) {
        existingPizza.count += 1;
      } else {
        state.pizzas.push({ id: action.payload, count: 1 });
      }
      sessionStorage.setItem("cart", JSON.stringify(state.pizzas));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const pizzaIndex = state.pizzas.findIndex((pizza) => pizza.id === action.payload);
      if (pizzaIndex !== -1) {
        state.pizzas[pizzaIndex].count -= 1;
        if (state.pizzas[pizzaIndex].count === 0) {
          state.pizzas.splice(pizzaIndex, 1);
        }
        sessionStorage.setItem("cart", JSON.stringify(state.pizzas));
      }
    },
    clearCart: (state) => {
      state.pizzas = [];
      sessionStorage.setItem("cart", JSON.stringify(state.pizzas));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
