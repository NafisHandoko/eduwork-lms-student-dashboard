import { Draft, PayloadAction } from '@reduxjs/toolkit';

export const removeLoad = <T extends { loads: string[] }>(state: Draft<T>, action: PayloadAction<string>) => {
  const newLoads = state.loads.filter((item) => item !== action.payload);
  state.loads = newLoads;
  return state;
}

export const addLoad = <T extends { loads: string[] }>(state: Draft<T>, action: PayloadAction<string>) => {
  const newLoads = state.loads.find((item) => item === action.payload);
  if (!newLoads) {
    state.loads = [...state.loads, action.payload];
  }
  return state;
}

export const BaseReducer = {
  removeLoad,addLoad
}

export default BaseReducer