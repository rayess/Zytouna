

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
import {default_avatar} from '../../assets/icons';
import {StudentItem} from '../../components';
import styles from './add-student-screen-styles';
import 'firebase/firestore';
import firebase from 'firebase';
import {avatars} from '../../const';
class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    studentsdata: [],
    }
  }
  componentDidMount() {
    const userid = this.props.userid;
   this.getStudents(userid);
  }
   getStudents=async(userid)=>{
     const students=[];
    const snapshot = await firebase.firestore().collection('users').doc(userid).collection('students').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        students.push(doc.data());
    });
});
        this.setState({studentsdata:students})
}
  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG5}
        style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>{this.props.navigation.navigate('addstudentform')}}>
          <Text style={styles.textButton}>Add Student</Text>
        </TouchableOpacity>
        <View style={styles.studentsContainer}>
            {this.state.studentsdata.map((item, index) => (
              <StudentItem
                key={index.toString()}
               source={(item.downloadURL.toString().includes('https://firebasestorage'))?
                {uri:item.downloadURL.toString()}:(avatars[avatars.findIndex(obj => obj.name === item.downloadURL)].source)}
                label={item.name}
              />
            ))}
          </View>

        </ImageBackground>
      );
    }
  }
const mapStateToProps = ({user}) => {
  const userid = user.userid;
  return {
    userid
  };
};

export default connect(
  mapStateToProps,
  actions,
)(AddStudent);
