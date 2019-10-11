import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG3} from '../../assets/_images';
import {Avatar} from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import Toast from 'react-native-root-toast';
import colors from '../../assets/color';
import {UserInput} from '../../components';
import {nautical, finish, arrow_picker, addphoto} from '../../assets/icons';
import styles from './add-student-form-screen-styles';

import firebase from 'firebase';
import 'firebase/firestore';
import {avatars} from '../../const';

class AddStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      age: '',
      gender: 'Boy',
      pickerModal: false,
    };
  }
  _submit = () => {
    const {fullname, age, gender} = this.state;
    const {params} = this.props.navigation.state;
    if (!params) {
      Toast.show('You should enter picture', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: colors.blueSky,
        textColor: colors.white,
      });
    } else if (fullname == '' || age == '') {
      Toast.show('You should enter data', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: colors.blueSky,
        textColor: colors.white,
      });
    } else {
      const filepath = params.uri ? params.filepath : params.name;
      const isAssets = params.uri ? false : true;
      const userid = this.props.userid;
      this.props.saveStudent(fullname, age, gender, filepath, userid, isAssets,() =>
        this.props.navigation.navigate('addStudent'));
    }
  };
  render() {
    const {params} = this.props.navigation.state;
    const avatar = params
      ? params.uri
        ? params.uri
        : avatars[params.index].source
      : addphoto;

    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG3}
        style={styles.container}>
        <View style={styles.takephotostyle}>
          <Avatar
            rounded
            size="large"
            source={avatar}
            containerStyle={{marginRight: 15, marginTop: 50}}
            onPress={() => {
              this.props.navigation.navigate('chooseavatar');
            }}
          />
        </View>
        <View style={styles.formcontainer}>
          <Text style={styles.label}>{'Full Name'}</Text>
          <UserInput
            onChangeText={fullname => this.setState({fullname})}
            value={this.state.fullname}
            placeholder={'full name'}
            textContentType={'name'}
            style={{width: '75%', textAlign: 'left'}}
          />
          <Text style={styles.label}>{'Age'}</Text>
          <UserInput
            onChangeText={age => this.setState({age})}
            value={this.state.email}
            placeholder={'Age'}
            textContentType={'name'}
            style={{width: '75%', textAlign: 'left'}}
          />
          <Text style={styles.label}>{'Gender'}</Text>

          <View style={styles.pickerContainer}>
            <Image
              style={styles.pickerIcon}
              source={nautical}
              resizeMode={'contain'}
            />
            <TouchableOpacity
              style={styles.picker}
              onPress={() => this.setState({pickerModal: true})}>
              <Text style={styles.pickerText}>{this.state.gender}</Text>
              <Image
                style={styles.pickerArrowIcon}
                source={arrow_picker}
                resizeMode={'contain'}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={this._submit}>
            <Image source={finish} style={styles.submitIcon} />
          </TouchableOpacity>
        </View>

        <Overlay
          supportedOrientations={['landscape']}
          visible={this.state.pickerModal}
          closeOnTouchOutside={true}
          animationType="zoomIn"
          containerStyle={{backgroundColor: 'rgba(0,0,0,0.32)'}}
          childrenWrapperStyle={{
            backgroundColor: 'transparent',
            borderRadius: 4,
            alignSelf: 'center',
          }}
          animationDuration={500}
          onClose={() => this.setState({pickerModal: false})}>
          <TouchableOpacity
            style={styles.pickerItemButton}
            onPress={() => {
              this.setState({gender: 'Boy', pickerModal: false});
            }}>
            <Text
              style={[
                styles.pickerItemText,
                this.state.gender === 'Boy' ? null : {color: 'gray'},
              ]}>
              {'Boy'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pickerItemButton}
            onPress={() => {
              this.setState({gender: 'Girl', pickerModal: false});
            }}>
            <Text
              style={[
                styles.pickerItemText,
                this.state.gender === 'Girl' ? null : {color: 'gray'},
              ]}>
              {'Girl'}
            </Text>
          </TouchableOpacity>
        </Overlay>
      </ImageBackground>
    );
  }
}
const mapStateToProps = ({user}) => {
  const {userid, loading, error} = user;
  return {userid, loading, error};
};
export default connect(
  mapStateToProps,
  actions,
)(AddStudentForm);
