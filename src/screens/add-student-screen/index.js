import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG5} from '../../assets/_images';
import {default_avatar} from '../../assets/icons'
import {StudentItem} from '../../components';
import styles from './add-student-screen-styles';
const dataSource = [1, 2, 3];
class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    const userid=JSON.stringify(this.props.navigation.getParam('userid', null));
  }
  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG5}
        style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('addstudentform')}>
          <Text style={styles.textButton}>Add Student</Text>
        </TouchableOpacity>
        <View style={styles.studentsContainer}>
          {dataSource.map((item, index) => (
           <StudentItem key={index.toString()} source={default_avatar } label='Khalil' />
        ))}
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
