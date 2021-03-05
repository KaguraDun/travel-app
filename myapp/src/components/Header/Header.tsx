import React from 'react';

import './Header.scss';
import Search from '../Search/Search';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Travel App</h1>
      <Search />
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
