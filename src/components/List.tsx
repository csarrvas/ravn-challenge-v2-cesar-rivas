import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as IconRightArrow } from 'assets/icons/RightArrow.svg';
import {
  defaultBold,
  highEmphasis,
  lowEmphasisNormal,
} from 'styles/mixins/textStyles';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { allPeopleSelector, setPerson } from 'redux/allPeopleSlice';
import { Person } from 'types/allPeople';
import buttonize from 'utils/buttonize';

const Ul = styled.ul`
  padding-left: 0;
  margin: 0;

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1.6rem 2.4rem 1.6rem 1.6rem;
    position: relative;
    cursor: pointer;

    div {
      flex: 1;

      h2 {
        margin: 0;
        ${defaultBold()}
      }

      p {
        margin: 0;
        ${lowEmphasisNormal()}
      }
    }

    &::before {
      content: '';
      position: absolute;
      height: 1px;
      width: calc(100% - 1.8rem);
      bottom: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

const Error = styled.p`
  ${highEmphasis()}
  margin-top: 1.6rem;
  text-align: center;
`;

const List = (): React.ReactElement => {
  const history = useHistory();
  const { people, loading, error } = useAppSelector(allPeopleSelector);
  const dispatch = useAppDispatch();

  const handleOnClick = (person: Person) => {
    dispatch(setPerson(person));
    history.push(person.id);
  };

  return (
    <>
      <Ul>
        {people.map(person => (
          <li key={person.id} {...buttonize(() => handleOnClick(person))}>
            <div>
              <h2>{person.name}</h2>
              <p>{`${
                person.species?.name ? person.species.name : 'Human'
              } from ${person.homeworld.name}`}</p>
            </div>
            <IconRightArrow />
          </li>
        ))}
      </Ul>
      {loading && 'spinner'}
      {error && <Error>{error}</Error>}
    </>
  );
};

export default List;
