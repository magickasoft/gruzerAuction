import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'components';
import config from 'config';
import styles from './styles';

class Home extends PureComponent {

  render() {
      // window.postMessage('asdsd','*');
    return (
      <WebView
        ref={webview => {
          this.myWebView = webview;
        }}
        uri={config.baseUrl}
        scrollEnabled={false}
        onMessage={(event)=> console.log(event.nativeEvent.data)}
      />
    );
  }
}

const mapState = () => ({
});

const mapDispatch = ({

});

export default connect(mapState, mapDispatch)(Home);
