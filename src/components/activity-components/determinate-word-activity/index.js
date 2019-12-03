import React from 'react';
import {View, TextInput,Image} from 'react-native';
import styles from './determinate-word-activity';
import {GenericActivity,TextinputActivity} from '../../helper-activity-components';

const DeterminateWordActivity = props => {
  return (
    <GenericActivity source={props.source} height={50} backgroundColor={'#F0FFF0'}>
    </GenericActivity>
  )
}
export default DeterminateWordActivity;
//<GenericActivity source={props.source} height={50}>
//<TextinputActivity />
//</GenericActivity>
