import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import FCM from 'react-native-fcm';

import NavigatorRoot from 'navigators/navigatorRoot';

import { saveToken } from 'actions/app/pushNotifications';

import PN from 'utils/notifications';

class AppContainer extends PureComponent {

  componentDidMount() {
    setTimeout(SplashScreen.hide, 1000); // Avoiding flicker

    setTimeout(async () => {
      await PN.getNotificationsPermissions();
      PN.registerFCMToken().then((token) => {
        console.log('registerFCMToken', token);
        this.props.dispatch(saveToken(token));
      });

      await FCM.createNotificationChannel({
        id: 'default',
        name: 'default',
        priority: 'normal'
      });
    }, 2000); // After login transition
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <NavigatorRoot />
      </View>
    );
  }
}

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(null)(AppContainer);
