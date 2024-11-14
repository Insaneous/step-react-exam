import { createSlice } from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: [
      {
        id: 1,
        name: 'Pepperoni',
        price: 10,
        description: 'Pizza description',
        image: 'https://www.pizzahut.com/wp-content/uploads/2022/03/pepperoni-pizza-1.jpg',
      },
      {
        id: 2,
        name: 'Margherita',
        price: 15,
        description: 'Pizza description',
        image: 'https://www.pizzahut.com/wp-content/uploads/2022/03/margherita-pizza-1.jpg',
      },
      {
        id: 3,
        name: 'Hawaiian',
        price: 20,
        description: 'Pizza description',
        image: 'https://www.pizzahut.com/wp-content/uploads/2022/03/hawaiian-pizza-1.jpg',
      },
      
    ],
  },
  reducers: {

  },
})

export const {  } = pizzaSlice.actions;