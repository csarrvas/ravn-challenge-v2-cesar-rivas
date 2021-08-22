import { gql } from '@apollo/client';

export const allPeople = gql`
  query allPeople($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      people {
        id
        name
        eyeColor
        hairColor
        skinColor
        birthYear
        gender
        height
        mass
        species {
          name
        }
        homeworld {
          name
        }
        vehicleConnection {
          vehicles {
            id
            name
          }
        }
      }
    }
  }
`;

export const person = gql`
  query person($id: ID!) {
    person(id: $id) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      gender
      height
      mass
      species {
        name
      }
      homeworld {
        name
      }
      vehicleConnection {
        vehicles {
          id
          name
        }
      }
    }
  }
`;
