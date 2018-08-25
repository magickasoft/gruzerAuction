import { createTypes } from 'redux-compose-reducer';
import { post, get } from 'utils';
import { registerToken } from 'actions/app/pushNotifications';

const TYPES = createTypes('session', [
  'loginSuccess',
  'getCurrentUserStart',
  'getCurrentUserSuccess',
  'getCurrentUserFailure',
  'logout'
]);

export const logout = () => (dispatch) => {
  dispatch({ type: TYPES.logout });
};

export const getCurrentUser = () => (dispatch) => {
  dispatch(({ type: TYPES.getCurrentUserStart }));
  return get('/session')
    .then(({ data }) => {
      dispatch(({ type: TYPES.getCurrentUserSuccess, payload: data }));
      return data;
    })
    .catch((err) => {
      dispatch(logout());
      throw err;
    });
};

export const login = user => dispatch =>
  post('/session', { user })
    .then(({ data: { token } }) => {
      if (token) {
        dispatch({ type: TYPES.loginSuccess, payload: token });
        dispatch(getCurrentUser());
        dispatch(registerToken());
      }
    });
