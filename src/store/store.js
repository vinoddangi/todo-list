import { configureStore } from '@reduxjs/toolkit';
import entityReducer from './entity/entitySlice';

export default configureStore({
  reducer: {
    entity: entityReducer,
  },
});
