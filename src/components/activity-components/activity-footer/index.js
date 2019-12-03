import React from 'react';
import styles from './activity-footer';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {fleshe} from '../../../assets/icons';
const ActivityFooter = props => {
  return (
    <View style={styles.container} >
    <View style={styles.fleshecontainer} >
    <TouchableOpacity style={[styles.button, {width: '30%',marginLeft: 30}]} onPress={props.backpress} >
    <Image source={fleshe} style={styles.fleshebackstyle} />
    </TouchableOpacity >
    </View>
    <View style={styles.buttoncontainer}>
    <TouchableOpacity style={[styles.button, {width: '50%',alignSelf: 'center'}]} onPress={props.finishpress}>
    <Text style={styles.textButton} >{'finish'} </Text>
    </TouchableOpacity >
    </View>
    </View>
  )
}
export default ActivityFooter;
