import AuthorizationNav from 'components/AuthorizationNav/AuthorizationNav';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import s from './navBar.module.css';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';

export default function NavBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <nav>
        <Nav variant="tabs" defaultActiveKey="/home">
          <NavigationLink />
          {!isLoggedIn && <AuthorizationNav />}
        </Nav>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
}
