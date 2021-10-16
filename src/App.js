import './App.css';
import React, { useEffect } from 'react';

import NavBar from 'components/NavBar/NavBar';
import { Switch } from 'react-router-dom';
import MainView from 'view/MainView/MainView';
import ContactsView from 'view/ContactsView/ContactsView';
import LoginView from 'view/LoginView/LoginView';
import RegisterView from 'view/RegisterVIew/RegisterView';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/authorization';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import Container from 'components/Container/Container';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1> Завантаження</h1 >
      ) : (
        <>
          <NavBar />
          <Switch>
            <PublicRoute exact path="/">
              <MainView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
          </Switch>
        </>)
      }
    </Container>);
}
export default App;
