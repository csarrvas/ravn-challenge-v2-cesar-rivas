import { gql } from '@apollo/client';

export default gql`
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
