import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import Game from '../src/pages/Game/index';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path='/game' element = { <Game /> } />
    </Routes>
  );
};

export default App;
