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
          onPress={() => {
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
          onPress={() =>{
            const {fullname,email,password}=this.state;
            this.props.saveuser({
              fullname,email,password
            });
              this.props.navigation.navigate('addStudent', {
              userid: this.props.userid,
            });
          }}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const {error, loading, userid} = state.user;
  return {error, loading, userid};
};

export default connect(
  mapStateToProps,
  actions,
)(SignWithEmail);
