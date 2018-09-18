import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WebView } from 'components';
import config from 'config';
import { getMessage } from 'actions/webMessages';

class Home extends PureComponent {
  componentDidMount(){
    // console.log('this.webView', this.webView);
    // setTimeout(() => console.log('this.webView', this.webView), 6000);
  }
  render() {

    return (
      <WebView
        webViewRef={webView => {
          this.webView = webView;
        }}
        source={{ uri: config.baseUrl }}
        onMessage={this.props.getMessage}
      />
    );
  }
}

const mapState = () => ({
});

const mapDispatch = ({
  getMessage
});

export default connect(mapState, mapDispatch)(Home);
