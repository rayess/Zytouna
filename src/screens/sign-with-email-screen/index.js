import React from 'react';
import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG3} from '../../assets/_images';
import {GoBackButton, UserInput} from '../../components';
import styles from './sign-with-email-styles-screen';

class SignWithEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
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
          onChangeText={fullname => this.setState({fullname})}
          value={this.state.fullname}
          placeholder={'full name'}
          textContentType={'name'}
        />
        <UserInput
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          placeholder={'email'}
          textContentType={'emailAddress'}
        />
        <UserInput
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          placeholder={'password'}
          textContentType={'password'}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.props.saveuser(
              this.state.fullname,
              this.state.email,
              this.state.password,
            )
          }>
          <Text style={styles.textButton}>Sign Up</Text>
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
)(SignWithEmail);
