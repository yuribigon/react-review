import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { useDispatch } from 'react-redux';
import personSlice from './personSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    personReducer: personSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;