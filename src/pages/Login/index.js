import React from 'react';
import { connect } from 'react-redux';
import { setPlayerInfo } from '../../redux/actions/Actions';
import  PlayButton  from '../../components/PlayButton';


const Login = () => {

  this.state = {
    playerName: '',
    disabledButton: true
  }

  const handleNameChange = (e) => {
    setPlayerInfo(e.target.value, player.email);
  };

  componentDiMount() {
    const { fetchApiTokenRedux, clearUserInformations } = this.props;
    fetchApiTokenRedux();
    clearUserInformations();
  }

  const handleEmailChange = (e) => {
    setPlayerInfo(player.name, e.target.value);
  };

  validateEmailAndNameFilds = () => {
    const { playerEmail, playerName } = this.state;
    if (playerEmail.length !== 0 && playerName.length !== 0) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  }
  
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

      <PlayButton 
        buttonDisable={ disabledButton } 
        onClickEvent = { () => {
            playerActionRedux(playerName, playerEmail)
          }
          
        }
      
      />

    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchApiTokenRedux: () => dispatch(fetchApiToken()),
  playerActionRedux: (playerName, playerEmail) => dispatch(
    playerAction(playerName, playerEmail),
  ),
  clearUserInformations: () => dispatch(resetLoggedUserInformations()),
});

export default connect(null, mapDispatchToProps)(Login);
