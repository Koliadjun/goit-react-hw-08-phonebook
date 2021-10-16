import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigationLink.module.css';
export default function NavigationLink() {
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Головна
      </NavLink>
      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Контакти
      </NavLink>
    </nav>
  );
}
