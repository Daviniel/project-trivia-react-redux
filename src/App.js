// src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/index';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
