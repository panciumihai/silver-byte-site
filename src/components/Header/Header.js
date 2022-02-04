import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import Logo from '../../assets/img/logo.svg';

import './Header.scss';
import BurgherMenu from '../BugherMenu/BurgherMenu';

const getActiveTabStyle = (isActive) => {
  return isActive ? 'active-menu-item' : '';
};

const navLinks = [
  <NavLink
    to='home'
    className={({ isActive }) => `menu-item ${getActiveTabStyle(isActive)}`}
  >
    Home
  </NavLink>,
  <NavLink
    to='services'
    className={({ isActive }) => `menu-item ${getActiveTabStyle(isActive)}`}
  >
    Services
  </NavLink>,
  <NavLink
    to='portfolio'
    className={({ isActive }) => `menu-item ${getActiveTabStyle(isActive)}`}
  >
    Portfolio
  </NavLink>,
  <NavLink
    to='team'
    className={({ isActive }) => `menu-item ${getActiveTabStyle(isActive)}`}
  >
    Team
  </NavLink>,
  <NavLink
    to='contact'
    className={({ isActive }) => `menu-item ${getActiveTabStyle(isActive)}`}
  >
    Contact
  </NavLink>,
];

const AppNavigation = () => {
  return (
    <header className='main-header'>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={Logo} alt='silver-byte-logo' />
        </div>
        <nav className='header-nav'>
          {navLinks.map((navlink) => navlink)}
          <BurgherMenu navLinks={navLinks} />
        </nav>
        {/* <div className='humberger-menu d-block d-lg-none pl--20'>
        <span onClick={() => {}} className='menutrigger text-white'>
          <FiMenu />
        </span>
      </div> */}
      </div>
    </header>
  );
};

export default AppNavigation;
