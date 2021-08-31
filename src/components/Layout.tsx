import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { allPeople } from 'apollo/queries';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  allPeopleSelector,
  updateAllPeopleList,
  setLoading,
  setError,
} from 'redux/allPeopleSlice';
import { AllPeopleQuery } from 'types/allPeople';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: calc(25% - 1rem) 1fr;
  grid-template-rows: 5.2rem 1fr;
  height: 100%;
`;

const Layout = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { pageInfo, error: errorState } = useAppSelector(allPeopleSelector);

  const [getMorePeople, { data, error }] =
    useLazyQuery<AllPeopleQuery>(allPeople);

  useEffect(() => {
    if (!errorState && (pageInfo?.hasNextPage || !pageInfo)) {
      dispatch(setLoading());
      getMorePeople({
        variables: {
          first: 5,
          after: pageInfo?.endCursor,
        },
      });
    }
  }, [pageInfo?.endCursor]);

  if (data && pageInfo?.endCursor !== data.allPeople.pageInfo?.endCursor) {
    dispatch(updateAllPeopleList(data.allPeople));
  }

  if (error && !errorState) {
    dispatch(setError());
  }

  return (
    <LayoutStyled>
      <Header />
      <Sidebar />
      <Content />
    </LayoutStyled>
  );
};

export default Layout;
