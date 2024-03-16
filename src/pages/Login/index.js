import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlayerInfo } from '../../redux/actions/Actions';
import PlayButton from '../../components/PlayButton';

const Login = ({ setPlayerInfo, fetchApiTokenRedux, clearUserInformations }) => {
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  const handleNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setPlayerEmail(e.target.value);
  };

  useEffect(() => {
    fetchApiTokenRedux();
    clearUserInformations();
  }, [fetchApiTokenRedux, clearUserInformations]);

  useEffect(() => {
    validateEmailAndNameFields();
  }, [playerName, playerEmail]);

  const validateEmailAndNameFields = () => {
    if (playerEmail.length !== 0 && playerName.length !== 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  };

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={playerName}
        onChange={handleNameChange}
        data-testid="input-player-name"
      />

      <label>Email:</label>
      <input
        type="email"
        value={playerEmail}
        onChange={handleEmailChange}
        data-testid="input-gravatar-email"
      />

      <PlayButton
        buttonDisable={disabledButton}
        onClickEvent={() => {
          setPlayerInfoRedux(playerName, playerEmail);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchApiTokenRedux: () => dispatch(fetchApiToken()),
  setPlayerInfoRedux: (playerName, playerEmail) => dispatch(setPlayerInfo(playerName, playerEmail)),
  clearUserInformations: () => dispatch(resetLoggedUserInformations()),
});

export default connect(null, mapDispatchToProps)(Login);
