import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    data: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.data;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.authenticate;
    }
  }
});

export const { setUser, setIsAuthenticated } = userSlice.actions;
export default userSlice.reducer;