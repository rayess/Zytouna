import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG5} from '../../assets/_images';
import {default_avatar} from '../../assets/icons';
import {StudentItem,LoadingOverlay} from '../../components';
import styles from './add-student-screen-styles';
import {avatars} from '../../const';
import {toastShow} from '../../redux/actions/show-error';
class AddStudent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const userid=this.props.userid;
    this.props.fetchStudentsData(userid);
  }


  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG5}
        style={styles.container}>
        <LoadingOverlay visible={this.props.loading} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if(this.props.students.length ===4){
              console.log('nn');
              alert('you cannot add another student');
            }
            else{
              this.props.navigation.navigate('addstudentform');
            }
          }}>
          <Text style={styles.textButton}>Add Student</Text>
        </TouchableOpacity>
        <View style={styles.studentsContainer}>
        {this.props.students.map((item, index) => (
          <StudentItem
          onPress={()=>{
            this.props.activeStudent(item.name);
            this.props.navigation.navigate('swiperscreen');
          }}
            key={index.toString()}
           source={
              item.downloadURL.toString().includes('https://firebasestorage')
               ? {uri: item.downloadURL.toString()}
                : avatars[
                    avatars.findIndex(obj => obj.name === item.downloadURL)].source
           }
            label={item.name}
          />
          ))}
        </View>
        <View style={styles.logoutoutcontainer}>
        <TouchableOpacity onPress={()=>
          firebase.auth().signOut().then(()=>{
          console.log('success');
        }).catch((error)=>
      {
         // An error happened.
       })}>
        <Text>Log out </Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({user,student}) => {
  const userid = user.userid;
  const loading=student.loading;
  const students=student.students
  return {
    loading,students,userid
  };
};

export default connect(
  mapStateToProps,
  actions,
)(AddStudent);
