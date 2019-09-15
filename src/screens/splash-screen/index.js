import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {logo} from '../../assets/images';

import styles from './splash-screen-styles';
class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Zaytouna'}</Text>
        <Text style={styles.title}>{'Adventure App'}</Text>
        <Image source={logo}/>
      </View>
    );
  }
}

const mapStateToProps = ({toggle}) => {
  const tog = toggle.toggle;
  return {
    tog,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(SplashScreen);
