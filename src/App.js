import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/index';
import PlayButton from './components/playButton';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path='/gamer' element={ <PlayButton /> }/>
    </Routes>
  );
};

export default App;
