import React from 'react';
import {Text} from 'react-native';
import styles from './sentence-activity';
const SentenceActivity =props=>{
  return(
    <Text style={styles.textstyle} >
    {props.text}
    </Text>
  )
}
export default SentenceActivity;
