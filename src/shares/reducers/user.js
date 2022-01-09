import { userConstants } from '../constants';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case userConstants.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
