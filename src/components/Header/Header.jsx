import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>1</NavLink>
          </li>
          <li>
            <NavLink to={'/movies'}>2</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
