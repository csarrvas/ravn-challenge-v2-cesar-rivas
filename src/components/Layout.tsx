import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: calc(25% - 1rem) 1fr;
  grid-template-rows: 5.2rem 1fr;
  height: 100%;
`;

const Layout = (): React.ReactElement => (
  <LayoutStyled>
    <Header />
    <Sidebar />
    <Content />
  </LayoutStyled>
);

export default Layout;
