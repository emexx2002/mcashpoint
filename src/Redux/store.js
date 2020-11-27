import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';


import thunk from "redux-thunk";

import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

// const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
const store = createStore(rootReducer,  composeWithDevTools(
    applyMiddleware(
      createLogger(), ...middleware)
  ));



export default store;