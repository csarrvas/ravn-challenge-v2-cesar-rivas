import React from 'react';
import styled from 'styled-components';
import { headerText } from 'styles/mixins/textStyles';
import colors from 'styles/variables/colors';

const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${colors.ravnBlack};
  display: flex;
  grid-column: 1 / 3;
  height: 5.2rem;
  padding: 1.6rem 3.2rem;

  h2 {
    margin: 0;
    ${headerText()}
  }
`;

const Header = (): React.ReactElement => (
  <HeaderStyled>
    <h2>Ravn Star Wars Registry</h2>
  </HeaderStyled>
);

export default Header;
