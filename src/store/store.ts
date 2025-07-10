import { configureStore } from '@reduxjs/toolkit';
import coffeeSlice from './slices/coffeeSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

