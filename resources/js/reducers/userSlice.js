import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {
      firstname: 'John',
      lastname: 'Doe'
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.data;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;