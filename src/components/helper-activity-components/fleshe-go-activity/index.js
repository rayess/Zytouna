import React from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import {flechedroit} from '../../../assets/icons';
import styles from './fleshe-go-activity';
const FlesheGo = props => {
  return (
    <View style={styles.container} >
    <TouchableOpacity  onPress={props.onPress} >
    <Image source={flechedroit} style={styles.fleshegostyle} resizeMode={'contain'}/>
    </TouchableOpacity >
    </View>
  )
}
export default FlesheGo;
