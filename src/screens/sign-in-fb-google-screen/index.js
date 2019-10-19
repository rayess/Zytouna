import React from 'react';
import {ImageBackground, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG2} from '../../assets/_images';
import {GoBackButton} from '../../components';
import {ButtonWithIcon} from '../../components';
import {GoogleSignin} from 'react-native-google-signin';
import styles from './sign-in-fb-google-screen-styles';
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
             this.props.loginUserGoogle(() => {
            this.props.navigation.navigate('App');
             });
          }}
        />
        <ButtonWithIcon
          style={{width: '40%'}}
          label={'SIGN IN WITH FACEBOOK'}
          onPress={() => {
            const callback = () => this.props.navigation.navigate('App');
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
