import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from './utils/history';
import { userReducer } from './shares/reducers/user';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    router: connectRouter(history),
    user: userReducer,
    ...injectedReducers,
  });
}
