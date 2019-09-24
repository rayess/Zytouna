import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {BG3} from '../../assets/_images';
import ImagePicker from 'react-native-image-picker';
import {Avatar} from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';

import {UserInput} from '../../components';
import {nautical, finish, arrow_picker, addphoto} from '../../assets/icons';
import styles from './add-student-form-screen-styles';

class AddStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      age: '',
      gender: 'Boy',
      pickedImage: addphoto,
      pickerModal: false,
    };
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      {title: 'Pick an Image', maxWidth: 800, maxHeight: 600},
      res => {
        if (res.didCancel) {
          console.log('User cancelled!');
        } else if (res.error) {
          console.log('Error', res.error);
        } else {
          this.setState({
            pickedImage: {uri: res.uri},
          });
        }
      },
    );
  };

  render() {
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG3}
        style={styles.container}>
        <View style={styles.takephotostyle}>
          <Avatar
            rounded
            size="large"
            source={this.state.pickedImage}
            onPress={this.pickImageHandler}
            containerStyle={{marginRight: 15, marginTop: 50}}
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
          <TouchableOpacity>
            <Image source={finish} style={styles.submitIcon} />
          </TouchableOpacity>
        </View>

        <Overlay
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
