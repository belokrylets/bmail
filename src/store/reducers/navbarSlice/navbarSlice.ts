import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState = {
  isActiveBurger: false,
};
const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeActiveBurger: (state, action: PayloadAction<boolean>) => {
      state.isActiveBurger = action.payload;
    },
  },
});

export const { actions } = navbarSlice;
export default navbarSlice.reducer;
