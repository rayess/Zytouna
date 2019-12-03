import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG11} from '../../assets/_images';
import {listenactivity,buildactivity,skillsactivity} from '../../assets/icons';
import {ActivityItem,Wrapper} from '../../components';
import styles from './choose-activity-screen-styles';
const activities=[
  {label1:'Listen',label2:'and Learn', source:listenactivity},
  {label1:'Build Words', label2:'and Phrases',source:buildactivity},
  {label1:'Skills', label2:'Challenge',source:skillsactivity},
];
class ChooseActivity extends React.Component {
render(){
  return(

  <ImageBackground source={BG11} style={styles.container} resizeMode={'stretch'} >
  <View style={styles.titlecontainer} >
  <Text style={styles.titlestyle}> {'Choose your activity !'} </Text>
  </View>
  <View style={styles.activitycontainer} >
  {
    activities.map(activity => {
       return (
          <ActivityItem source={activity.source} label1={activity.label1} label2={activity.label2}/>
        )
    })
}
  </View>
  </ImageBackground>

  )
}

}


export default ChooseActivity;
