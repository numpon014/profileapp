import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore(initialState, history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const middlewareEnhancer  = [applyMiddleware(...middlewares)];

  return createStore(
    createReducer(),
    initialState,
    compose(...middlewareEnhancer),
  );
}
