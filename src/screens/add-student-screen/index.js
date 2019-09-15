import React, {Component} from 'react';
import {View, Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {textinputbutton,bg4} from '../../assets/images';

import styles from './add-student-screen-styles';
class AddStudent extends React.Component {
  render() {
    return (
      <ImageBackground source={bg4} style={{width: '100%', height: '100%'}}>
      <View style={styles.mainContainer}>
      <TouchableOpacity>
      <Image source={textinputbutton} style={{width: 300, height: 60}} />
      <Text style={styles.textButton}>Add Student</Text>
      </TouchableOpacity>
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
)(AddStudent);
