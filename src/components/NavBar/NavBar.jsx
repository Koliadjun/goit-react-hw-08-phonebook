import AuthorizationNav from 'components/AuthorizationNav/AuthorizationNav';
import NavigationLink from 'components/NavigationLink/NavigationLink';
import React from 'react';
import s from './navBar.module.css';

export default function NavBar() {
  return (
    <header className={s.header}>
      <NavigationLink />
      <AuthorizationNav />
    </header>
  );
}
