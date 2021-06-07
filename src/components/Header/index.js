import './styles.scss';
import React from 'react';
import testLogo from '../../assets/testLogo.jpeg';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={testLogo} alt="Machua Peru Logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration" com>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
