import React,{Component} from 'react';
import {TouchableOpacity,Image,StyleSheet,View} from 'react-native';
import {backfleche} from '../../../assets/icons';
import styles from './go-back-button-styles';
const GoBackButton =({onPress})=> {
    return(
      <View style={styles.container}>
      <TouchableOpacity  onPress={onPress}>
      <Image source={backfleche} style={styles.fleshebackstyle} resizeMode={'contain'} />
      </TouchableOpacity>
      </View>
    );
  }
  export default GoBackButton
