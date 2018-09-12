import { composeReducer } from 'redux-compose-reducer';
import update from 'update-js';

const initialState = {
  token: null
};

const loginSuccess = (state, { payload }) => (
  update(state, 'token', payload)
);

const logout = () => initialState;

export default composeReducer(
  'session',
  {
    loginSuccess,
    logout
  },
  initialState
);
