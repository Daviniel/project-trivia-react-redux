import { createStore, applyMiddleware, compose } from 'redux'; 
import { thunk } from 'redux-thunk';
import rootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  const json = JSON.stringify(store.getState().player); // Acessando o estado do reducer 'player'
  localStorage.setItem('state', json);
});

export default store;
