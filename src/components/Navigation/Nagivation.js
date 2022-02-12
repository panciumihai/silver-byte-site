import NavItem from '../common/NavItem/NavItem';

import './Navigation.scss';

const Navigation = (props) => {
  const { navItems } = props;

  return (
    <nav className='main-nav'>
      {navItems.map((item) => (
        <NavItem className={'nav-item'} key={item.to} to={item.to}>
          {item.name}
        </NavItem>
      ))}
    </nav>
  );
};

export default Navigation;
