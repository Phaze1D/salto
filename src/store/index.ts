import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducers';

const reduxEnhancersByEnvironment = {
  production: applyMiddleware(thunk),
  development: compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
};

export const configureStore = () => {
  return createStore(
    reducer,
    reduxEnhancersByEnvironment[process.env.NODE_ENV]
  );
};
