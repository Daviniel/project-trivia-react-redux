import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import Game from './pages/Game/index';
import Settings from './pages/Settings/index';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path='/game' element = { <Game /> } />
      <Route path='/settings' element = { <Settings /> } />
    </Routes>
  );
};

export default App;
