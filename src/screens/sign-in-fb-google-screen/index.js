import React from 'react';
import {ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG2} from '../../assets/_images';
import {GoBackButton} from '../../components';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {ButtonWithIcon} from '../../components';
import styles from './sign-in-fb-google-screen-styles';
class SignInFbAndGoogle extends React.Component {
  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG2}
        style={styles.container}>
        <GoBackButton
          pressFunction={() => {
            this.props.navigation.goBack();
          }}
        />

        <ButtonWithIcon
          style={{width: '40%'}}
          label={'SIGN IN WITH FACEBOOK'}
          onPress={() => this.props.navigation.navigate('signemail')}
        />
        <ButtonWithIcon
          style={{width: '40%'}}
          label={'SIGN IN WITH GOOGLE'}
          onPress={() => this.props.navigation.navigate('signemail')}
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
