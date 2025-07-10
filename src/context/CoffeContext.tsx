'use client'; 

import React, { createContext, useContext, useReducer, useMemo, useCallback } from 'react';

interface CoffeeProfile {
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

interface CoffeContextType {
  coffe: CoffeeProfile[];
  addProfile: (profile: Omit<CoffeeProfile, 'id'>) => void;
}

type Action = {type: 'ADD_PROFILE', payload: Omit<CoffeeProfile, 'id'>} | {type: 'DELETE_PROFILE', payload: {id: string}}

const reducer = (state: CoffeeProfile[] , action: Action) => {
  switch(action.type) {
    case 'ADD_PROFILE':
      return [...state, { ...action.payload, id: crypto.randomUUID() }]
    case 'DELETE_PROFILE':
      return state.filter(profile => profile.id !== action.payload.id)
  }
}

const CoffeContext = createContext<CoffeContextType | undefined>(undefined);

export const CoffeProvider = ({ children }: { children: React.ReactNode }) => {
const[coffe, dispatch] = useReducer(reducer, [])

const addProfile = useCallback(
  (payload: Omit<CoffeeProfile, 'id'>) =>
    dispatch({ type: 'ADD_PROFILE', payload }),
  []
);

  const value = useMemo(() => ({ coffe, addProfile }), [coffe, addProfile]);

  return (
    <CoffeContext.Provider value={value}>
      {children}
    </CoffeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCoffeContext = () => {
  const context = useContext(CoffeContext);
  if (!context) {
    throw new Error('useCoffeContext must be used within a CoffeProvider');
  }
  return context;
};

