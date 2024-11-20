import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorized: !!localStorage.getItem('authorized')
  },
  reducers: {
    login: (state) => {
      state.isAuthorized = true;
      localStorage.setItem('authorized', 'true');
    },
    logout: (state) => {
      state.isAuthorized = false;
      localStorage.removeItem('authorized');
      sessionStorage.clear()
    },
  },
});

export const { login, logout } = userSlice.actions;
