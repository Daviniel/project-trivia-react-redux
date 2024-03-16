// src/redux/reducers.js
const initialState = {
    player: {
      name: '',
      email: '',
    },
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PLAYER_INFO':
        return {
          ...state,
          player: {
            name: action.payload.name,
            email: action.payload.email,
          },
        };
      default:
        return state;
    }
};
  
export default rootReducer;
  