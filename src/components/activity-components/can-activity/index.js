import React from 'react';
import {View} from 'react-native';
import styles from './can-activity';
import {GenericActivity,TextinputActivity,SentenceActivity} from '../../helper-activity-components';
const CanActivity = props => {
  return (
    <GenericActivity source={props.source} height={50}>
    <View style={styles.container}>
    <SentenceActivity text={'I '} />
    <TextinputActivity/>
    <SentenceActivity text={props.activitylabel} />
    </View>
    </GenericActivity>
  )
}
export default CanActivity;
