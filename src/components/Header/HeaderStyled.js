import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderDiv = styled('nav')`
  background-color: indigo;
  padding: 5px 0 5px 40px;
`;
export const HeaderList = styled('ul')`
  display: flex;
  gap: 10px;
`;
export const HeaderItem = styled('li')``;
export const HeaderNavLink = styled(NavLink)`
  color: white;
  &.active {
    color: pink;
  }
`;
// ug
