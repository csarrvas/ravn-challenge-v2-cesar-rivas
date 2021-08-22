import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllPeopleQuery, AllPeopleState, Person } from 'types/allPeople';
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
    loading: state => {
      state.loading = true;
    },
    updateAllPeopleList: (
      state,
      {
        payload: { pageInfo, totalCount, people },
      }: PayloadAction<AllPeopleQuery>,
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
    error: state => {
      state.error = 'Failed to Load Data';
    },
  },
});

export const { updateAllPeopleList, setPerson } = allPeopleSlice.actions;

export const pageInfoSelector = ({ allPeople }: RootState) =>
  allPeople.pageInfo;
export const peopleSelector = ({ allPeople }: RootState) => allPeople.people;
export const personSelector = ({ allPeople }: RootState) =>
  allPeople.personSelected;
export const loadingSelector = ({ allPeople }: RootState) => allPeople.loading;
export const errorSelector = ({ allPeople }: RootState) => allPeople.error;

export default allPeopleSlice.reducer;
