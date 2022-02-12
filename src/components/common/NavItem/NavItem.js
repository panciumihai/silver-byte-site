import { NavLink } from 'react-router-dom';

import './NavItem.scss';

const getActiveTabStyle = (isActive) => {
  return isActive ? 'active' : '';
};

const NavItem = (props) => {
  const { to, className, children } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-item ${className} ${getActiveTabStyle(isActive)}`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
