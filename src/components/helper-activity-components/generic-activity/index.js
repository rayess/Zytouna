import React from 'react';
import {View, Image} from 'react-native';
import styles from './generic-activity';
const GenericActivity = props => {
  return (
    <View style={styles.container} >
    <Image source={props.source} style={styles.imagestyle} resizeMode={'contain'}/>
    <View style={[styles.parentcontainer,{height: props.height,backgroundColor: props.backgroundColor}]}>
    {props.children}
    </View>
    </View>
  )
}
export default GenericActivity;
