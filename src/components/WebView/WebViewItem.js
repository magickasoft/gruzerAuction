import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';
import { LoaderSpinner } from 'components';
import styles from './style';

class WebViewItem extends Component {
    state = {
      isLoaded: false
    };
    onLoadEnd = () => {
        this.setState({ isLoaded: true });
    };
    render() {
      const { onLoadEnd, webViewRef, ...rest } = this.props;
      return (
        <View style={styles.container}>
          <WebView
            ref={webViewRef}
            onLoadEnd={onLoadEnd || this.onLoadEnd}
            {...rest}
          />
          {!this.state.isLoaded && <LoaderSpinner loading={!this.state.isLoaded} /> }
        </View>
      );
    }
}

export default WebViewItem;
