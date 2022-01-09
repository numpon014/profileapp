import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import { userReducer } from './shares/reducers/user';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    user: userReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
}
