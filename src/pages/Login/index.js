// src/components/Login.js
import React from 'react';
import { connect } from 'react-redux';
import { setPlayerInfo } from '../redux/actions';

const Login = ({ player, setPlayerInfo }) => {
  const handleNameChange = (e) => {
    setPlayerInfo(e.target.value, player.email);
  };

  const handleEmailChange = (e) => {
    setPlayerInfo(player.name, e.target.value);
  };

  const isPlayButtonDisabled = !player.name || !player.email;

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={player.name}
        onChange={handleNameChange}
        data-testid="input-player-name"
      />

      <label>Email:</label>
      <input
        type="email"
        value={player.email}
        onChange={handleEmailChange}
        data-testid="input-gravatar-email"
      />

      <button
        disabled={isPlayButtonDisabled}
        data-testid="btn-play"
        onClick={() => console.log('Play button clicked')}
      >
        Play
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  player: state.player,
});

const mapDispatchToProps = {
  setPlayerInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
