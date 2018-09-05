import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WebView } from 'components';
import config from 'config';

class Home extends PureComponent {
  render() {

    return (
      <WebView
        webViewRef={webView => {
          this.webView = webView;
        }}
        source={{ uri: config.baseUrl }}
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
