import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FiChevronUp, FiX, FiMenu } from 'react-icons/fi';

import './BurgherMenu.scss';

const Backdrop = (props) => {
  const { onClick } = props;

  return ReactDOM.createPortal(
    <div className='backdrop' onClick={onClick}></div>,
    document.getElementById('backdrop-root')
  );
};

const BurgherMenu = (props) => {
  const { navLinks } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div
        className='burgher-menu'
        onClick={() => {
          setIsVisible(true);
        }}
      >
        <FiMenu />
      </div>
      {isVisible && <Backdrop onClick={() => setIsVisible(false)} />}
      {isVisible &&
        ReactDOM.createPortal(
          <div className='mobile-menu'>
            <div className='mobile-menu-header'>
              <div
                className='mobile-menu-close'
                onClick={() => setIsVisible(false)}
              >
                <FiX />
              </div>
            </div>
            {navLinks.map((navLink) => navLink)}
          </div>,
          document.getElementById('overlay-root')
        )}
    </>
  );
};

export default BurgherMenu;
