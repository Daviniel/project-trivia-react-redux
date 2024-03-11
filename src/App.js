import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import Game from './pages/Game';
import PlayButton from './components/PlayButton';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path='/game' element = { <Game /> } />
      <Route path='/play' element={ <PlayButton /> }/>
    </Routes>
  );
};

export default App;
