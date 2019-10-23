import React from 'react';
import styles from './lesson-header';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {darkflesheback} from '../../assets/icons';
const LessonHeader = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headerleftcontainer}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={darkflesheback} style={styles.fleshebackstyle}></Image>
        </TouchableOpacity>
        <Text style={styles.hitextstyle}>{`Hi ${props.label} !`}</Text>
      </View>

      <View style={styles.headerrightcontainer}>
        <TouchableOpacity style={[styles.button, {width: '30%'}]}>
          <Text style={styles.textButton}>{'food'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {width: '15%', marginLeft: 10}]}>
          <Text style={styles.textButton}>{'xp'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LessonHeader;
