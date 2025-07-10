import { describe, it, expect } from 'vitest';
import coffeeReducer, { addProfile, deleteProfile, type CoffeeProfile } from './coffeeSlice';

describe('coffeeSlice', () => {
  const initialState = {
    profiles: [],
  };

  it('should handle addProfile', () => {
    const newProfile = {
      coffeName: 'Test Coffee',
      roastLevel: 'medium',
      in: '18g',
      out: '36g',
      totaltime: '25s',
    };

    const action = addProfile(newProfile);
    const state = coffeeReducer(initialState, action);

    expect(state.profiles).toHaveLength(1);
    expect(state.profiles[0]).toMatchObject(newProfile);
    expect(state.profiles[0].id).toBeDefined();
  });

  it('should handle deleteProfile', () => {
    const profile: CoffeeProfile = {
      id: 'test-id',
      coffeName: 'Test Coffee',
      roastLevel: 'medium',
      in: '18g',
      out: '36g',
      totaltime: '25s',
    };

    const stateWithProfile = {
      profiles: [profile],
    };

    const action = deleteProfile({ id: 'test-id' });
    const state = coffeeReducer(stateWithProfile, action);

    expect(state.profiles).toHaveLength(0);
  });
}); 