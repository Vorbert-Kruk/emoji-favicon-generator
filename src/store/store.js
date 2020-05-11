import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import initialState from './initialState';

function configureStore() {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
  });

  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
}

const store = configureStore();

export default store;
