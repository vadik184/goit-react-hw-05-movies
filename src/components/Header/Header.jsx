// import { NavLink } from 'react-router-dom';
import {
  HeaderDiv,
  HeaderItem,
  HeaderList,
  HeaderNavLink,
} from './HeaderStyled';
const Header = () => {
  return (
    <>
      <HeaderDiv>
        <HeaderList>
          <HeaderItem>
            <HeaderNavLink to={'/'}>HOME</HeaderNavLink>
          </HeaderItem>
          <HeaderList>
            <HeaderNavLink to={'/movies'}>MOVIES</HeaderNavLink>
          </HeaderList>
        </HeaderList>
      </HeaderDiv>
    </>
  );
};

export default Header;
