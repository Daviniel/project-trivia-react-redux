// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Importe o seu reducer principal

const store = createStore(rootReducer);

export default store;
