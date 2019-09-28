import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {BG3} from '../../assets/_images';
import ImagePicker from 'react-native-image-picker';
import {Avatar} from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';

import {UserInput} from '../../components';
import {nautical, finish, arrow_picker, addphoto} from '../../assets/icons';
import styles from './add-student-form-screen-styles';
import firebase from 'firebase';

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
  onPress = async () => {
    const image = params ? params.uri : addphoto;
    const {params} = this.props.navigation.state;
    const {app} = firebase.storage();
    console.log('test ', JSON.stringify(app));
  };
  uploadImage = () => {
    const {params} = this.props.navigation.state;
    const filename = `anwer_image`; // Generate unique name
    this.setState({uploading: true});
    firebase
      .storage()
      .ref(`zaytouna/images/${filename}`)
      .putFile(params.uri.uri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            console.log('snapshot ', snapshot);
          }
        },
        error => {
          console.log('error ', error);
        },
      );
  };
  render() {
    const {params} = this.props.navigation.state;
    const uri = params ? params.uri : addphoto;

    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG3}
        style={styles.container}>
        <View style={styles.takephotostyle}>
          <Avatar
            rounded
            size="large"
            source={uri}
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
          <TouchableOpacity onPress={this.uploadImage}>
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
export default AddStudentForm;
