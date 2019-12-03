import React from 'react';
import {cloud} from '../../../assets/icons';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import styles from './cloud-item';
const CloudItem =props=>{
  return(
    <View style={styles.container}>
    <TouchableOpacity onPress={props.onPress} >
    <Image source={cloud} resizeMode='contain' style={styles.cloudstyle}/>
    <Text style={styles.numberstyle}>{props.label}</Text>
    </TouchableOpacity>
    </View>
  )
}
export default CloudItem;
