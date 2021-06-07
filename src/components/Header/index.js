import './styles.scss';
import React from 'react';
import testLogo from '../../assets/testLogo.jpeg';

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={testLogo} alt="Machua Peru Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
