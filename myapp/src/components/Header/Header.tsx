import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Search from '../Search/Search';

type HeaderProps = {
  isMainPage: boolean;
  searchHandler: Function;
};

const Header = ({ isMainPage, searchHandler }: HeaderProps) => {
  const search = isMainPage ? <Search searchHandler={searchHandler}/> : null;

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
