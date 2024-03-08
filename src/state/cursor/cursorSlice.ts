import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CursorState {
  cursorVariant: string;
  cursorBorderVariant: string;
}

const initialState: CursorState = {
  cursorVariant: 'default',
  cursorBorderVariant: 'default',
};

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursorVariant: (state, action: PayloadAction<string>) => {
      state.cursorVariant = action.payload;
    },
    setCursorBorderVariant: (state, action: PayloadAction<string>) => {
      state.cursorBorderVariant = action.payload;
    },
  },
});

export default cursorSlice.reducer;
export const { setCursorVariant, setCursorBorderVariant } = cursorSlice.actions;
