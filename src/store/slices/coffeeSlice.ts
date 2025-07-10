import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CoffeeProfile {
  id: string;
  coffeName: string;
  roastLevel: string;
  in: string;
  out: string;
  preInf?: string;
  totaltime: string;
  firstDropStart?: string;
  dateOfRoast?: string;
  temperatura?: string;
}

interface CoffeeState {
  profiles: CoffeeProfile[];
}

const initialState: CoffeeState = {
  profiles: [],
};

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<Omit<CoffeeProfile, 'id'>>) => {
      const newProfile: CoffeeProfile = {
        ...action.payload,
        id: crypto.randomUUID(),
      };
      state.profiles.push(newProfile);
    },
    deleteProfile: (state, action: PayloadAction<{ id: string }>) => {
      state.profiles = state.profiles.filter(profile => profile.id !== action.payload.id);
    },
  },
});

export const { addProfile, deleteProfile } = coffeeSlice.actions;
export default coffeeSlice.reducer; 