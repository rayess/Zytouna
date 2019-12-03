import React from 'react';
import {View, Text} from 'react-native';
import styles from './activity-title-item';
const ActivityTitle = props => {
  return (
    <View style={styles.container} >
    <View style={styles.titlecontainer}>
    <Text style={styles.textstyle}>{props.activitytitle}</Text>
    </View>
    </View>
  )
}
export default ActivityTitle;
