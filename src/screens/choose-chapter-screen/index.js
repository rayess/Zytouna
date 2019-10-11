import React, {Component} from 'react';
import {View,Text,ImageBackground,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as actions from '../../redux/actions';
import {BG6} from '../../assets/_images';
import styles from './choose-chapter-screen-styles';

class ChooseChapter extends React.Component {
  render(){
  return(
    <ImageBackground source={BG6} style={styles.container} resizeMode={'stretch'}>
    <View style={styles.textcontainer}>
    <TouchableOpacity>
    <Text style={styles.hellotextstyle}>{'Hi Ahmed !'}</Text>
    <Text style={styles.subtitlestyle}> {'choose your chapter'}</Text>
    </TouchableOpacity>
    </View>
    </ImageBackground>


  );
}
  }
export default ChooseChapter;
