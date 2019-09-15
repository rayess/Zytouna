import React, {Component} from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as actions from '../../redux/actions';
import {ChooseLevel} from '../choose-level-screen';


class ChooseLevelAndChapterSwiper extends React.Component {
  render(){
    return(
      <ChooseLevel />
    );
  }

}

export default ChooseLevelAndChapterSwiper;
