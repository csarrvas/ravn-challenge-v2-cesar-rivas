import React from 'react';
import styled from 'styled-components';
import List from './List';

const Nav = styled.nav`
  overflow-y: auto;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #777;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:active {
    background-color: #666;
  }
  &::-webkit-scrollbar-track {
    background-color: #ddd;
    border-radius: 4px;
  }
`;

const Sidebar = (): React.ReactElement => (
  <Nav>
    <List />
  </Nav>
);

export default Sidebar;
