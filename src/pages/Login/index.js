import React from 'react';
import { connect } from 'react-redux';
import { setPlayerInfo } from '../../actions/Actions';
import  PlayButton  from '../../components/PlayButton';


const Login = ({ player, setPlayerInfo }) => {
  const handleNameChange = (e) => {
    setPlayerInfo(e.target.value, player.email);
  };

  const handleEmailChange = (e) => {
    setPlayerInfo(player.name, e.target.value);
  };

  const isPlayButtonDisabled = !player.name.trim() || !player.email.trim();

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

      <PlayButton disabled={isPlayButtonDisabled} />

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
