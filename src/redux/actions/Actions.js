// src/actions/todoActions.js
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: { text },
});
  
export const setPlayerInfo = (name, email) => ({
    type: 'SET_PLAYER_INFO',
    payload: { name, email },
});

  // Adicione outras ações conforme necessário
  