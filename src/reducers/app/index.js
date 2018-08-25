import { combineReducers } from 'redux';
import devSettings from './devSettings';
import push from './push';

export default combineReducers({
  devSettings,
  push
});
