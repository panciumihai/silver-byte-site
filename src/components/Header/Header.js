import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import Logo from '../../assets/img/logo.png';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Nagivation';

import './Header.scss';

const navItems = [
  {
    name: 'Home',
    to: 'home',
  },
  {
    name: 'Services',
    to: 'services',
  },
  {
    name: 'Portfolio',
    to: 'portfolio',
  },
  {
    name: 'Team',
    to: 'team',
  },
  {
    name: 'Contact',
    to: 'contact',
  },
];

const Header = () => {
  return (
    <header className='main-header'>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={Logo} alt='silver-byte-logo' />
        </div>
        <span></span>
        <Navigation navItems={navItems} />
        <BurgerMenu navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
