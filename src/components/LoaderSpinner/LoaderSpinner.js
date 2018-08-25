import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View } from 'react-native';
import styles from './style';

const LoaderSpinner = ({ loading }) => (
    loading && (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    )
);

LoaderSpinner.propTypes = {
    loading: PropTypes.bool.isRequired
};

LoaderSpinner.defaultProps = {
    loading: false
};

export default LoaderSpinner;
