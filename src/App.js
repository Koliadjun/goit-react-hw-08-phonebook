import './App.css';
import React from 'react';

import NavBar from 'components/NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';
import MainView from 'view/MainView/MainView';
import ContactsView from 'view/ContactsView/ContactsView';
import LoginView from 'view/LoginView/LoginView';
import RegisterView from 'view/RegisterVIew/RegisterView';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact >
          <MainView />
        </Route>
        <Route path='/contacts' exact >
          <ContactsView />
        </Route>
        <Route path='/login' exact >
          <LoginView />
        </Route>
        <Route path='/register' exact >
          <RegisterView />
        </Route>
      </Switch>
    </>
  );
}
export default App;
