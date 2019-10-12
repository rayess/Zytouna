import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG1} from '../../assets/_images';
import {ButtonWithIcon} from '../../components';

import styles from './sign-up-screen-styles';
class SignUpScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={BG1}
        style={{width: '100%', height: '100%'}}
        resizeMode={'stretch'}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>{'Welcome'}</Text>
          <Text style={styles.textSubTitle}>
            {'TO ZAYTOUNA'}
            {'\n'}
            {'ADVENTURE APP'}
          </Text>
          <ButtonWithIcon
            label={'SIGN IN'}
            onPress={() => this.props.navigation.navigate('signinuser')}
          />
          <ButtonWithIcon
            label={'NEW ACCOUNT'}
            onPress={() => this.props.navigation.navigate('signfbgle')}
          />
        </View>
      </ImageBackground>
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
)(SignUpScreen);
