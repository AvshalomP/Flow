import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Header from './components/Header';

const Routes = (props) => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default Routes;
