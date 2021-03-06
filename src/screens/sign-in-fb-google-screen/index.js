import React, {Component} from 'react';
import {View, Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {imgbutton,collar,bg2} from '../../assets/images';
import{GoBackButton} from '../../components';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


import styles from './sign-in-fb-google-screen-styles';
class SignInFbAndGoogle extends React.Component {
  render() {

    return (
      <ImageBackground source={bg2} style={{width: '100%', height: '100%'}}>
      <GoBackButton  pressFunction={()=>{this.props.navigation.goBack()}}/>
      <View style={styles.maincontainer}>
      <View style={styles.secondarycontainer}>
      <Image source={collar} />
      <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
      <View style={styles.secondarycontainer}>
      <Image source={collar}/>
      <TouchableOpacity>
      <Image source={imgbutton}/>
      <Text style={styles.textButton}>SIGN IN WITH GOOGLE</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.secondarycontainer}>
      <Image source={collar}/>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('signemail')}>
      <Image source={imgbutton}/>
      <Text style={styles.textButton}>SIGN IN WITH EMAIL</Text>
      </TouchableOpacity>
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
)(SignInFbAndGoogle);
