import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigationLink.module.css';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';

export default function NavigationLink() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Nav.Link as={NavLink} className={s.link} eventKey="1" to="/" exact>
        Головна
      </Nav.Link>
      {isLoggedIn && (
        <Nav.Link
          as={NavLink}
          eventKey="link-1"
          to="/contacts"
          className={s.link}
          exact
        >
          Контакти
        </Nav.Link>
      )}
    </>
  );
}
