// userAuth.slice.js
import { createSlice } from "@reduxjs/toolkit";
const storedUserToken = localStorage.getItem('userToken');
const initialState = {

  userToken: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null
};

const userAuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userToken = action.payload;
      localStorage.setItem('userToken', JSON.stringify(action.payload));
    },
    setUserLogout: (state, action) => {
      state.userToken = null;
      localStorage.removeItem('userToken');
    },
  },
});

export const { setUserLogin, setUserLogout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
