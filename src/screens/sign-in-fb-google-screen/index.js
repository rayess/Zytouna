import React from 'react';
import {ImageBackground, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG2} from '../../assets/_images';
import {GoBackButton} from '../../components';
import {ButtonWithIcon} from '../../components';
import {GoogleSigninButton, GoogleSignin} from 'react-native-google-signin';
import styles from './sign-in-fb-google-screen-styles';

import 'firebase/firestore';
import firebase from 'firebase';

class SignInFbAndGoogle extends React.Component {
  componentDidMount() {
    //initial configuration
    GoogleSignin.configure({
      //It is mandatory to call this method before attempting to call signIn()
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId generated from Firebase console
      webClientId:
        '893199681484-dvjtgh62oacf5ce60mjst3212fteb7ha.apps.googleusercontent.com',
    });
  }
  onLoginOrRegister = () => {
    GoogleSignin.signIn()
      .then(async data => {
        console.log('sign in google data ', data);
        // Create a new Firebase credential with the token
        const credential = await firebase.auth.GoogleAuthProvider.credential(
          data.idToken,
          data.accessToken,
        );
        console.log('credential  ', credential);
        // Login with the credential
        return firebase.auth().signInWithCredential(credential);
      })
      .then(user => {
        console.log('firebase user ', user);
      })
      .catch(err => {
        console.log('firebase error ', err);
      });
  };
  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG2}
        style={styles.container}>
        <GoBackButton
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <ButtonWithIcon
          style={{width: '40%'}}
          label={'SIGN IN WITH GOOGLE'}
          onPress={() => {
            this.onLoginOrRegister();

            // this.props.loginUserGoogle(() => {
            //   console.log('go to ....');
            //   this.props.navigation.navigate('addStudent');
            // });
          }}
        />
        <ButtonWithIcon
          style={{width: '40%'}}
          label={'SIGN IN WITH FACEBOOK'}
          onPress={() => {
            const callback = () => this.props.navigation.navigate('addStudent');
            this.props.loginUserFacebbok(callback);
          }}
        />
        <ButtonWithIcon
          style={{width: '40%'}}
          label={'SIGN IN WITH EMAIL'}
          onPress={() => this.props.navigation.navigate('signemail')}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({user}) => {
  const {userid, error, loading} = user;
  return {userid, error, loading};
};

export default connect(
  mapStateToProps,
  actions,
)(SignInFbAndGoogle);
