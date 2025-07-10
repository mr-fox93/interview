import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  mode: boolean;
}

const initialState: ThemeState = {
  mode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer; 