import React from 'react';
import styled from 'styled-components';
import data from 'data';
import { defaultBold, lowEmphasisBold } from 'styles/mixins/textStyles';

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

const Content = (): React.ReactElement => (
  <Main>
    <Table>
      <Title>General Information</Title>
      <Row>
        <span>Eye Color</span>
        <span>{data.people[0].eyeColor}</span>
      </Row>
      <Row>
        <span>Hair Color</span>
        <span>{data.people[0].hairColor}</span>
      </Row>
      <Row>
        <span>Skin Color</span>
        <span>{data.people[0].skinColor}</span>
      </Row>
      <Row>
        <span>Birth Year</span>
        <span>{data.people[0].birthYear}</span>
      </Row>
    </Table>
    {!!data.people[0].vehicleConnection.vehicles.length && (
      <Table>
        <Title>Vehicles</Title>
        {data.people[0].vehicleConnection.vehicles.map(vehicle => (
          <Row>
            <span>{vehicle.name}</span>
          </Row>
        ))}
      </Table>
    )}
  </Main>
);

export default Content;
