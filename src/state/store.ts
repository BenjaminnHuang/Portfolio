import { configureStore } from '@reduxjs/toolkit';
import cursorReducer from './cursor/cursorSlice';
import navbarReducer from './navbarSlice';

export const store = configureStore({
  reducer: {
    cursor: cursorReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
