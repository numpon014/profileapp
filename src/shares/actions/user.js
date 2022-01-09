import { userService } from '../services';
import { userConstants } from '../constants';

export function getUsers(failMessage, callback) {
  return dispatch => {
    dispatch(request());

    return userService
      .getUsers()
      .then(users => {
        dispatch(success(users));
        if (typeof callback === 'function') callback(users);
      })
      .catch(err => {
        // dispatch(alertActions.error(failMessage));
        dispatch(failure(err.toString()));
      });
  };

  function request() {
    return { type: userConstants.GET_USERS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_USERS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_USERS_REQUEST, error };
  }
}