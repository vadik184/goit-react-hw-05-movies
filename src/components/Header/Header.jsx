import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={'/movies'}>MOVIES</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
