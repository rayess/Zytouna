import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG6} from '../../assets/_images';
import styles from './choose-level-screen-styles';
import {CloudItem} from '../../components';

class ChooseLevel extends React.Component {
  render() {
    return (
      <ImageBackground
        source={BG6}
        style={styles.container}
        resizeMode={'stretch'}>
        <View style={styles.hellotextcontainer}>
          <Text style={styles.hellotextstyle}>{'Hi Ahmed !'}</Text>
          <Text style={styles.subtitlestyle}> {'choose your level'}</Text>
        </View>
        <View style={styles.cloudcontainer}>
          <View style={{flexDirection: 'row'}}>
            <CloudItem label={'1'} />
            <CloudItem label={'2'} />
          </View>
          <View>
            <CloudItem label={'3'} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default ChooseLevel;
