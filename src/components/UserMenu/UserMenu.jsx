import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/authorization';
import s from './userMenu.module.css';
import avatar from './avatar.png';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(authOperations.logoutUser());
  };
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={avatar} alt="avatar" />
      <h5 className={s.text}>Привіт, {userName}</h5>
      <Button variant="danger" onClick={onClickHandler} type="button">
        Вихід
      </Button>
    </div>
  );
}
