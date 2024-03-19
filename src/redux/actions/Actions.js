
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: { text },
  });
  

 // Importações de constantes
import { USER_EMAIL, USER_LOGIN } from '../reducers/index';

export function userEmail(email) {
  return {
    type: USER_EMAIL,
    payload: email,
  };
}

export function userLogin(user) {
  return {
    type: USER_LOGIN,
    payload: user,
  };
}

export function nameAction(payload) {
  return {
    type: NAME,
    payload,
  };
}

export default { USER_EMAIL, USER_LOGIN };