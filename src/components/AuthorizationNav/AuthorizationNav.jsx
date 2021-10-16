import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './authorizationNav.module.css';

export default function AuthorizationNav() {
  return (
    <nav>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Логін
      </NavLink>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Реєстрація
      </NavLink>
    </nav>
  );
}
