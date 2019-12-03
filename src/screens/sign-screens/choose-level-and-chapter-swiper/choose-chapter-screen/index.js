import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as actions from '../../../../redux/actions';
import {BG6} from '../../../../assets/_images';
import styles from './choose-chapter-screen-styles';

class ChooseChapter extends React.Component {
  render() {
    return (
      <ImageBackground
        source={BG6}
        style={styles.container}
        resizeMode={'stretch'}>
        <View style={styles.textcontainer}>
          <TouchableOpacity>
            <Text style={styles.hellotextstyle}>{'Hi '}{this.props.name}{' !'}</Text>
            <Text style={styles.subtitlestyle}> {'choose your chapter'}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = ({activestudent}) => {
  const name = activestudent.name;
  return {name};
};

export default connect(
  mapStateToProps,
  actions,) (ChooseChapter);
