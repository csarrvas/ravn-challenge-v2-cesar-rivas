import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconSpinner } from 'assets/icons/Spinner.svg';

const SpinnerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1.6rem 0;

  svg {
    margin-right: 1rem;
  }
`;

const Spinner = (): React.ReactElement => (
  <SpinnerStyled>
    <IconSpinner />
    <span>Loading</span>
  </SpinnerStyled>
);

export default Spinner;
