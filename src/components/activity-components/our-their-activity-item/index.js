import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground,Image,TextInput} from 'react-native';
import styles from './our-their-activity';
import {their_activity,our_activity} from '../../../assets/icons';
import {TextinputActivity,SentenceActivity} from '../../helper-activity-components';
const OurTheirActivity = props => {
  return (
    <View style={styles.container} >
    <View style={styles.item}>
    <Image source={props.ourimagesource} style={styles.imagestyle} resizeMode={'contain'}/>
    <ImageBackground source={our_activity} style={styles.groupstyle} >
    <SentenceActivity text={'-These are'} />
    <View style={{flexDirection: 'row'}}>
    <TextinputActivity />
    <SentenceActivity text={props.label} />
    </View>
    </ImageBackground>
    </View>
    <View style={styles.item}>
    <Image source={props.theirimagesource} style={styles.imagestyle} resizeMode={'contain'}/>
    <ImageBackground source={their_activity} style={styles.groupstyle} >
    <SentenceActivity text={'-Those are'} />
    <View style={{flexDirection: 'row'}}>
    <TextinputActivity />
    <SentenceActivity text={props.label} />
    </View>
    </ImageBackground>
    </View>
    </View>


  );
};
export default OurTheirActivity;
