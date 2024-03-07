// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" component={Login} />
      </Routes>
    </div>
  );
};

export default App;
