import React, { PureComponent, Fragment } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { WebView } from 'components';
import config from 'config';
import { getMessage } from 'actions/webMessages';
import { isIphoneX } from 'utils';
import PN from 'utils/notifications';

class Home extends PureComponent {
  componentDidMount(){
    PN.addNotificationListener({ userToken: this.props.session.token });
    // console.log('this.webView', this.webView);
    // setTimeout(() => console.log('this.webView', this.webView), 6000);
  }
  componentWillUnmount() {
    PN.clearNotificationListener();
  }
  render() {

    return (
      <Fragment>
        {Platform.OS === 'ios' &&
          <View
            style={{ height: isIphoneX() ? 40 : (StatusBar.currentHeight + 2) || 21, backgroundColor: '#fff' }}
          />
        }
        <WebView
          webViewRef={webView => {
            this.webView = webView;
          }}
          source={{ uri: config.baseUrl }}
          onMessage={this.props.getMessage}
        />
      </Fragment>
    );
  }
}

const mapState = ({ session }) => ({
  session
});

const mapDispatch = ({
  getMessage
});

export default connect(mapState, mapDispatch)(Home);
