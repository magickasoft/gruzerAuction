import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'components';
import config from 'config';
import styles from './styles';

class Home extends PureComponent {

  render() {
    return <WebView uri={config.baseUrl} />;
  }
}

const mapState = () => ({
});

const mapDispatch = ({

});

export default connect(mapState, mapDispatch)(Home);
