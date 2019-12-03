import React from 'react';
import {View, TextInput,Image} from 'react-native';
import styles from './question-answer-can-activity';
import {GenericActivity,TextinputActivity,SentenceActivity} from '../../helper-activity-components';
const QACanActivity = props => {
  return (
    <GenericActivity source={props.source} height={80}>
    <SentenceActivity text={props.canquestion} />
    <View style={styles.container}>
    <SentenceActivity text={props.cananswer} />
    <TextinputActivity/>
    </View>
    </GenericActivity>
  )
}
export default QACanActivity;
