import { gql } from '@apollo/client';

export default gql`
  query allPeople {
    allPeople(first: 5) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
      edges {
        cursor
      }
      people {
        id
        name
        eyeColor
        hairColor
        skinColor
        birthYear
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
