import React from 'react';
import styles from './loadingOverlay';
import Spinner from 'react-native-loading-spinner-overlay';
  import {View} from 'react-native';
const LoadingOverlay = props => {
  return(
<View style={styles.container}>
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={props.visible}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
  </View>
)}

export default LoadingOverlay;
