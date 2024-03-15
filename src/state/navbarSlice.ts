import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NavbarState {
  isNavbarOpen: boolean;
}

const initialState: NavbarState = {
  isNavbarOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbarOpen: (state, action: PayloadAction<boolean>) => {
      state.isNavbarOpen = action.payload;
    },
  },
});

export default navbarSlice.reducer;
export const { setNavbarOpen } = navbarSlice.actions;
