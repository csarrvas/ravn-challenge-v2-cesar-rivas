import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllPeopleInfo, AllPeopleState, Person } from 'types/allPeople';
import { RootState } from './store';

const initialState: AllPeopleState = {
  pageInfo: null,
  totalCount: 0,
  people: [],
  personSelected: null,
  loading: false,
  error: null,
};

export const allPeopleSlice = createSlice({
  name: 'allPeople',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    updateAllPeopleList: (
      state,
      {
        payload: { pageInfo, totalCount, people },
      }: PayloadAction<AllPeopleInfo>,
    ) => {
      state.pageInfo = pageInfo;
      state.totalCount = totalCount;
      state.people = [...state.people, ...people];
      state.loading = false;
      state.error = null;
    },
    setPerson: (state, { payload }: PayloadAction<Person>) => {
      state.personSelected = payload;
    },
    cleanPerson: state => {
      state.personSelected = null;
    },
    setError: state => {
      state.loading = false;
      state.error = 'Failed to Load Data';
    },
  },
});

export const {
  setLoading,
  updateAllPeopleList,
  setPerson,
  cleanPerson,
  setError,
} = allPeopleSlice.actions;

export const allPeopleSelector = ({ allPeople }: RootState) => allPeople;

export default allPeopleSlice.reducer;
