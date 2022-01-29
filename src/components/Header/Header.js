import Logo from '../../assets/img/logo.svg';

import './Header.scss';

const Header = () => {
  return (
    <header className='main-header'>
      <div className='logo-container'>
        <img src={Logo} alt='silver-byte-logo' />
      </div>
      <nav className='header-nav'>
        <li>Home</li>
        <li>Services</li>
        <li>Portofolio</li>
        <li>Team</li>
        <li>Contact</li>
      </nav>
    </header>
  );
};

export default Header;
