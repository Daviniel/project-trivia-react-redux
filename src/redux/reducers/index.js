// reducers/index.js
import actions from '../actions/Actions';

export const USER_EMAIL = 'USER_EMAIL';
export const USER_LOGIN = 'USER_LOGIN';

const initialState = {
  player: {
    name: '',
    email: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_EMAIL:
      return {
        ...state,
        player: {
          ...state.player, 
          email: action.payload,
        },
      };
    case actions.USER_LOGIN:
      return {
        ...state,
        player: {
          ...state.player,
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer; // Remova { USER_EMAIL, USER_LOGIN } e adicione o ponto e vírgula aqui
