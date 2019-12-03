import React from 'react';
import styles from './loadingOverlay';
import Spinner from 'react-native-loading-spinner-overlay';
import {View,ActivityIndicator} from 'react-native';
const LoadingOverlay = props => {
  return(
<View style={styles.container}>
        <Spinner
          visible={props.visible}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        </View>
)}

export default LoadingOverlay;
