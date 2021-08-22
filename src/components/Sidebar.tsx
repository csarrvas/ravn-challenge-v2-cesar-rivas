import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconRightArrow } from 'assets/icons/RightArrow.svg';
import { defaultBold, lowEmphasisNormal } from 'styles/mixins/textStyles';
import data from 'data';

const Nav = styled.nav`
  overflow-y: auto;
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.15);

  ul {
    padding-left: 0;
    margin: 0;

    li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1.6rem 2.4rem 1.6rem 1.6rem;
      position: relative;

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
  }

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
    <ul>
      {data.people.map(({ id, name, species, homeworld }) => (
        <li key={id}>
          <div>
            <h2>{name}</h2>
            <p>{`${species?.name ? species.name : 'Human'} from ${
              homeworld.name
            }`}</p>
          </div>
          <IconRightArrow />
        </li>
      ))}
    </ul>
  </Nav>
);

export default Sidebar;
