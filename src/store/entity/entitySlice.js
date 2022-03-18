import { createSlice } from '@reduxjs/toolkit';

export const entitySlice = createSlice({
  name: 'entity',
  initialState: {
    todos: [],
  },
  reducers: {
    entityChange: (state, action) => {
      const { property, value } = action.payload;
      state[property] = value;
    },
    addToList: (state, action) => {
      const { property, value } = action.payload;
      state[property].push(value);
    },
  },
});

export function entitySelector(property) {
  return (state) => state.entity[property];
}

export const { entityChange, addToList } = entitySlice.actions;

export default entitySlice.reducer;
