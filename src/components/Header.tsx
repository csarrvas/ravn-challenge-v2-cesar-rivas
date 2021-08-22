import React from 'react';
import { useHistory } from 'react-router-dom';
import { cleanPerson } from 'redux/allPeopleSlice';
import { useAppDispatch } from 'redux/hooks';
import styled from 'styled-components';
import { headerText } from 'styles/mixins/textStyles';
import colors from 'styles/variables/colors';
import buttonize from 'utils/buttonize';

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
    cursor: pointer;
  }
`;

const Header = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    history.push('/');
    dispatch(cleanPerson());
  };

  return (
    <HeaderStyled>
      <h2 {...buttonize(() => handleOnClick())}>Ravn Star Wars Registry</h2>
    </HeaderStyled>
  );
};

export default Header;
