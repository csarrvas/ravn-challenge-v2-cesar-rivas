import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import allPeopleReducer from './allPeopleSlice';

export const store = configureStore({
  reducer: {
    allPeople: allPeopleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
