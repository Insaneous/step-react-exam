import { createSlice } from "@reduxjs/toolkit";

export const login = () => {
  localStorage.setItem('authorized', '');
  return true;
}

export const logout = () => {
  localStorage.removeItem('authorized');
  return false;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: false,
  },
  reducers: {
    setUser: (state: any, action: any) => {
      state.user = action.payload.user;
    },
  },
})

export const { setUser } = userSlice.actions;