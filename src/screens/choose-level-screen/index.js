import React, {Component} from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as actions from '../../redux/actions';
import {bg5,cloud} from '../../assets/images';
import colors from '../../assets/color';
import styles from './choose-level-screen-styles';


const ChooseLevel=()=>{
  return(
    <ImageBackground source={bg5} style={{width: '100%', height: '100%'}}>
    <View style={styles.maincontainer}>
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity >
    <Image source={cloud} />
    <Text style={styles.levelnumberstyle}> 1 </Text>
    </TouchableOpacity >
    <TouchableOpacity style={{paddingTop: 20}} >
    <Image source={cloud} />
    <Text style={styles.levelnumberstyle}> 2 </Text>
    </TouchableOpacity>
    </View>
    <View style={{paddingRight: 80, paddingTop: 10,}}>
    <TouchableOpacity >
    <Image source={cloud} />
    <Text style={styles.levelnumberstyle}> 3 </Text>
    </TouchableOpacity>
    </View>
    </View>
    </ImageBackground>
  );
};
export default ChooseLevel;
