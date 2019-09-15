import React, {Component} from 'react';
import {View, Text,Image,ImageBackground,TouchableOpacity,TextInput} from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as actions from '../../redux/actions';
import {imgbutton,collar,bg3,textinputbutton,bleubutton,crab} from '../../assets/images';
import {GoBackButton} from '../../components';
import colors from '../../assets/color';
import styles from './sign-with-email-styles-screen';


class SignWithEmail extends React.Component {
  render() {
    return(
      <ImageBackground source={bg3} style={{width: '100%', height: '100%'}}>
      <GoBackButton  pressFunction={()=>{this.props.navigation.goBack()}}/>
      <View style={styles.mainContainer}>
      <View style={styles.secondaryContainer}>
      <Image source={collar} />
      <ImageBackground source={textinputbutton} style={{width: 300, height: 60}} >
      <TextInput
          style={styles.textinputcontainer}
          placeholder='email'
          placeholderTextColor={colors.orange}
          value={this.props.email}
          onChangeText={(text) => this.props.userstate({prop:'email',value:text})}
        />
        </ImageBackground>
      </View>
      <View style={styles.secondaryContainer}>
      <Image source={collar}/>
      <ImageBackground source={textinputbutton} style={{width: 300, height: 60}} >
      <TextInput
          style={styles.textinputcontainer}
          placeholder='password'
          placeholderTextColor={colors.orange}
          secureTextEntry
          onChangeText={(text) => this.props.userstate({prop:'password',value:text})}
          value={this.props.password}
        />
        </ImageBackground>
      </View>
      <TouchableOpacity style={{paddingLeft: 60}}
      onPress={()=>{
        const {name,email,password}=this.props;
        this.props.saveuser({name,email,password});
        this.props.navigation.navigate('addstudentform')
      }} >
      <Image source={bleubutton} style={{width: 300, height: 60}}/>
      <Text style={styles.buttoncontainer}>sign up</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.forgetpasswordContainer}>
      <Image source={crab}/>
      <TouchableOpacity>
      <Text style={styles.forgetpasswordtext}> forget your password</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
     );
  }
}

  const mapStateToProps = state => {
    const {name,email,password} = state.user;
    return(
      {name,email,password}
    );

  };

  export default connect(
    mapStateToProps,
    actions,
  )(SignWithEmail);
