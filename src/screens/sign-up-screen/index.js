import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as actions from '../../redux/actions';
import {SignInFbAndGoogle} from '../sign-in-fb-google-screen/index.js';
import {imgbutton, collar, bg1, bateau} from '../../assets/images';
import colors from '../../assets/color';

import styles from './sign-up-screen-styles';
class SignUpScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={bg1}
        style={{width: '100%', height: '100%'}}
        resizeMode={'stretch'}>
        <View style={styles.mainContainer}>
          <Image source={bateau} />
          <View style={styles.secondaryContainer}>
            <Text style={styles.textTitle}>{'Welcome'}</Text>
            <Text style={styles.textSubTitle}>{'TO ZAYTOUNA'}</Text>
            <Text style={styles.textSubTitle}> {'ADVENTURE APP'}</Text>
            <View style={{flexDirection: 'column', paddingTop: 20}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('signinuser')}>
                <Image source={imgbutton} />
                <Text style={styles.textButton}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signfbgle')}>
                <Image source={imgbutton} />
                <Text style={styles.textButton}>NEW ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
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
