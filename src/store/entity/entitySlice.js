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
      const { property, item } = action.payload;
      state[property].push(item);
    },
    deleteFromList: (state, action) => {
      const { property, id: deletedId } = action.payload;
      state[property] = state[property].filter(({ id }) => deletedId !== id);
    },
    updateFromList: (state, action) => {
      const { property, item: modifiedItem } = action.payload;
      state[property] = state[property].map((item) =>
        item.id === modifiedItem.id ? { ...item, ...modifiedItem } : item
      );
    },
  },
});

export function entitySelector(property) {
  return (state) => state.entity[property];
}

export const { entityChange, addToList, deleteFromList, updateFromList } = entitySlice.actions;

export default entitySlice.reducer;
