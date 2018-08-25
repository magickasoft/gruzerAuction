import {AppRegistry} from 'react-native';
import wrapper from './src/index';
// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => wrapper);
