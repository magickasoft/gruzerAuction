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
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: this.props.uri }}
                    onLoadEnd={() => this.onLoadEnd()}
                />
                {!this.state.isLoaded && <LoaderSpinner loading={!this.state.isLoaded} /> }
            </View>
        );
    }
}

WebViewItem.propTypes = {
 uri: PropTypes.string.isRequired
};

export default WebViewItem;
