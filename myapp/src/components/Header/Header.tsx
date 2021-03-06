import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Search from '../Search/Search';

type HeaderProps = {
  isMainPage: boolean;
};

const Header = ({ isMainPage }: HeaderProps) => {
  const search = isMainPage ? <Search /> : null;

  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">Travel App</h1>
      </Link>
      {search}
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
