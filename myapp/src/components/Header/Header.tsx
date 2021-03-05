import React from 'react';

import './Header.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Search from '../Search/Search';

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Travel App</h1>
      <Search />
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
