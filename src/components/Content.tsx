import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/client';
import { person } from 'apollo/queries';
import { defaultBold, lowEmphasisBold } from 'styles/mixins/textStyles';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { allPeopleSelector, setPerson } from 'redux/allPeopleSlice';
import { Redirect, useParams } from 'react-router-dom';
import { PersonQuery } from 'types/allPeople';

const Main = styled.main`
  padding: 3.2rem 10rem;
`;

const Title = styled.h2`
  margin: 0 1.6rem 0.8rem 1.6rem;
  ${defaultBold()}
`;

const Table = styled.div`
  margin-bottom: 3.2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1.4rem 1.6rem;

  span {
    &:last-of-type {
      ${defaultBold()}
      text-transform: capitalize;
    }
    &:first-of-type {
      ${lowEmphasisBold()}
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
`;

type Params = {
  id: string;
};

const Content = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { id } = useParams<Params>();
  const { personSelected } = useAppSelector(allPeopleSelector);

  const [getPerson, { data, error }] = useLazyQuery<PersonQuery>(person);

  useEffect(() => {
    if (!personSelected && id) {
      getPerson({
        variables: {
          id,
        },
      });
    }
  }, []);

  if (!personSelected && data && id) {
    dispatch(setPerson(data.person));
  }

  if (!personSelected && error) {
    return <Redirect to="/" />;
  }

  if (!personSelected) {
    return <></>;
  }

  const {
    eyeColor,
    hairColor,
    skinColor,
    birthYear,
    gender,
    height,
    mass,
    vehicleConnection,
  } = personSelected;
  return (
    <Main>
      <Table>
        <Title>General Information</Title>
        <Row>
          <span>Eye Color</span>
          <span>{eyeColor}</span>
        </Row>
        <Row>
          <span>Hair Color</span>
          <span>{hairColor}</span>
        </Row>
        <Row>
          <span>Skin Color</span>
          <span>{skinColor}</span>
        </Row>
        <Row>
          <span>Birth Year</span>
          <span>{birthYear}</span>
        </Row>
        <Row>
          <span>Gender</span>
          <span>{gender}</span>
        </Row>
        <Row>
          <span>Height</span>
          <span>{height} cm</span>
        </Row>
        <Row>
          <span>Mass</span>
          <span>{mass} kg</span>
        </Row>
      </Table>
      {!!vehicleConnection.vehicles.length && (
        <Table>
          <Title>Vehicles</Title>
          {vehicleConnection.vehicles.map(vehicle => (
            <Row key={vehicle.id}>
              <span>{vehicle.name}</span>
            </Row>
          ))}
        </Table>
      )}
    </Main>
  );
};

export default Content;
