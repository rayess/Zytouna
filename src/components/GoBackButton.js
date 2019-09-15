import React,{Component} from 'react';
import {TouchableOpacity,Image,StyleSheet} from 'react-native';
import {backfleche} from '../assets/images';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const GoBackButton =({pressFunction})=> {
    return(
      <TouchableOpacity style={styles.gobackbuttonstyle} onPress={pressFunction}>
      <Image source={backfleche}/>
      </TouchableOpacity>
    );
  }

const styles={
gobackbuttonstyle:{
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: 10,
  paddingLeft: 10,

},

}
export default GoBackButton;
