// src/actions/todoActions.js
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: { text },
});
  
export const setPlayerInfo = (playerName, playerEmail) => ({
    type: PLAYER_REDUCER,
    playerName,
    playerEmail,
});

  // Adicione outras ações conforme necessário
  