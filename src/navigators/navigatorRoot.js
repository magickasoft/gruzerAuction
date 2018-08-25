import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Home } from 'containers';

const routeConfiguration = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
};

const stackNavigatorConfiguration = {
  headerMode: 'screen'
};

const NavigatorRoot = createStackNavigator(
    routeConfiguration,
    stackNavigatorConfiguration
);

export default NavigatorRoot;
