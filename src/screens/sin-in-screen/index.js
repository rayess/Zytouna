import React, {Component} from 'react';
import {Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG3} from '../../assets/_images';
import {crab} from '../../assets/icons';

import {GoBackButton, UserInput} from '../../components';
import styles from './sign-in-screen-styles';

class SignInUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG3}
        style={styles.container}>
        <GoBackButton
          pressFunction={() => {
            this.props.navigation.goBack();
          }}
        />
        <UserInput
          onChangeText={email => this.setState({email: email})}
          value={this.state.email}
          placeholder={'Email'}
          textContentType={'emailAddress'}
        />
        <UserInput
          onChangeText={password => this.setState({password: password})}
          value={this.state.password}
          placeholder={'Password'}
          textContentType={'password'}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.props.loginuser(this.state.email, this.state.password)
          }>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgetContainer}>
          <Image
            style={styles.forgetIcon}
            source={crab}
            resizeMode={'contain'}
          />
          <Text style={styles.textForget}>{'Forget your password?'}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const {name, email, password, error, loading, user} = state.user;
  return {name, email, password};
};

export default connect(
  mapStateToProps,
  actions,
)(SignInUser);
