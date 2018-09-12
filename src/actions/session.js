import { createTypes } from 'redux-compose-reducer';
import { post, get } from 'utils';
import { registerToken } from 'actions/app/pushNotifications';

const TYPES = createTypes('session', [
  'loginSuccess',
  'logout'
]);

export const logout = () => (dispatch) => {
  dispatch({ type: TYPES.logout });
};


export const login = ({ token }) => dispatch => {
  if (token) {
    dispatch({ type: TYPES.loginSuccess, payload: token });
    dispatch(registerToken());
  }
};
