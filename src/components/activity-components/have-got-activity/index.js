import React from 'react';
import {View} from 'react-native';
import styles from './have-got-activity';
import {GenericActivity,TextinputActivity,SentenceActivity} from '../../helper-activity-components';
const HaveGotActivity = props => {
  return (
    <GenericActivity source={props.source} height={100}>
    <View style={styles.container}>
    <SentenceActivity text={'- '} />
    <TextinputActivity/>
    <SentenceActivity text={props.subject} />
    <TextinputActivity/>
    </View>
    <SentenceActivity text={props.havequestion} />
    <View style={styles.container}>
    <SentenceActivity text={props.haveanswer} />
    <TextinputActivity/>
    </View>

    </GenericActivity>
  )
}
export default HaveGotActivity;
