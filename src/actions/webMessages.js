import { has } from 'lodash';
import { login } from 'actions/session';

const ACTION_LOGIN = 'login';

export const getMessage = ({ nativeEvent }) => dispatch => {
  const { data } = nativeEvent;
  const parseData = JSON.parse(data);

  switch (has(parseData, 'action') && parseData.action) {
    case ACTION_LOGIN: {
      console.log('login:', ACTION_LOGIN);
      const token = has(parseData, 'token') ? parseData.token : null;
      dispatch(login({ token }));
    }
    default: {
      console.log('default')
    }
  }
};