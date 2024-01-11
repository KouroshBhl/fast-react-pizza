import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feautures/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;
