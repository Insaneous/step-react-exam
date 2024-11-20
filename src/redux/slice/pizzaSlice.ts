import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Pizza {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [
      {
        id: 1,
        name: 'Pepperoni',
        price: 10,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 2,
        name: 'Margherita',
        price: 15,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 3,
        name: 'Hawaiian',
        price: 20,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 4,
        name: 'BBQ Chicken',
        price: 18,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 5,
        name: 'Veggie Supreme',
        price: 16,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 6,
        name: 'Meat Lovers',
        price: 22,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 7,
        name: 'Four Cheese',
        price: 17,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 8,
        name: 'Buffalo Chicken',
        price: 19,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 9,
        name: 'Spinach and Feta',
        price: 18,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 10,
        name: 'Truffle Mushroom',
        price: 25,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 11,
        name: 'Cheeseburger Pizza',
        price: 20,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
      {
        id: 12,
        name: 'Pesto Chicken',
        price: 21,
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores!',
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
      },
    ] as Pizza[],
    filteredPizzas: [] as Pizza[],
    nextId: 13,
  },
  reducers: {
    addPizza: (state, action) => {
      state.pizzas.push({
        id: state.nextId,
        ...action.payload
      });
      state.nextId++;
    },
    removePizza: (state, action: PayloadAction<number>) => {
      state.pizzas = state.pizzas.filter((pizza) => pizza.id !== action.payload);
    },
    filterPizzas: (state, action: PayloadAction<string>) => {
      const filteredPizzas = state.pizzas.filter((pizza) => {
        return pizza.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      state.filteredPizzas = filteredPizzas;
    },
  },
});

export const { addPizza, removePizza, filterPizzas } = pizzaSlice.actions;
