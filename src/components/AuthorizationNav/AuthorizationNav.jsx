import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import s from './authorizationNav.module.css';

export default function AuthorizationNav() {
  return (
    <>
      <Nav.Link
        as={NavLink}
        to="/login"
        eventKey="link-2"
        exact
        className={s.link}
      >
        Вхід
      </Nav.Link>
      <Nav.Link
        as={NavLink}
        eventKey="link-3"
        to="/register"
        exact
        className={s.link}
      >
        Реєстрація
      </Nav.Link>
    </>
  );
}
