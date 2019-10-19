import React, {Component} from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG3} from '../../assets/_images';
import {GoBackButton, UserInput,LoadingOverlay} from '../../components';
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
    const {fullname, email, password} = this.state;
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG3}
        style={styles.container}>
        <GoBackButton
          onPress={() => {
            console.log('go back');
            this.props.navigation.goBack();
          }}
        />
        <LoadingOverlay visible={this.props.loading} />
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
          secureTextEntry
          onChangeText={password => this.setState({password})}
          value={this.state.password}
          placeholder={'password'}
          textContentType={'password'}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.props.saveuser(fullname, email, password, () =>
              this.props.navigation.navigate('addStudent'),
            )
          }>
            <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({user}) => {
  const {error, loading, userid} = user;
  return {error, loading, userid};
};

export default connect(
  mapStateToProps,
  actions,
)(SignWithEmail);
