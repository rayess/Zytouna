import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './activity-item';
import {playaudiobutton,cloudactivity} from '../../../assets/icons';
const ActivityItem = props => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress} >
    <Image source={cloudactivity} resizeMode='contain' style={styles.cloudstyle}/>
    <Text style={styles.textstyle}>{props.label1}{'\n'}{props.label2}</Text>
    </TouchableOpacity>
    <Image source={props.source} style={styles.imagestyle} resizeMode='contain' />
    </View>
  );
};
export default ActivityItem;
