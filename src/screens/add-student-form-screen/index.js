import React, {Component} from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity,TextInput,Picker} from 'react-native';
import {connect} from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as actions from '../../redux/actions';
import {imgbutton,collar,bg3,textinputbutton,bleubutton,takephoto} from '../../assets/images';
import colors from '../../assets/color';
import ImagePicker from 'react-native-image-picker';
import { Avatar } from "react-native-elements";
import styles from './add-student-form-screen-styles';


class AddStudentForm extends React.Component {
  state = {
  pickedImage:takephoto
}

pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });

      }
    });
  }

  render() {
    return(
      <ImageBackground source={bg3} style={{width: '100%', height: '100%'}}>
      <View style={styles.takephotostyle}>
      <Avatar rounded size='large' source={this.state.pickedImage}  onPress={this.pickImageHandler} />
      </View>
      <View style={styles.maincontainer}>
      <View style={{flexDirection: 'row'}}>
      <Image source={collar} style={{alignSelf: 'center'}} />
      <View style={{flexDirection: 'column'}}>
      <Text style={styles.textplaceholder}>Full name</Text>
      <ImageBackground source={textinputbutton} style={{width: 300, height: 60}} >
      <TextInput
          style={styles.textinputcontainer}
          placeholder='Your Name'
          placeholderTextColor={colors.orange}
        />
        </ImageBackground>
        </View>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Image source={collar} style={{alignSelf: 'center'}} />
        <View style={{flexDirection: 'column'}}>
        <Text style={styles.textplaceholder}>Age</Text>
        <ImageBackground source={textinputbutton} style={{width: 300, height: 60}} >
        <TextInput
            style={styles.textinputcontainer}
            placeholder='Your Age'
            placeholderTextColor={colors.orange}
          />
          </ImageBackground>
          </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Image source={collar} style={{alignSelf: 'center'}} />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.textplaceholder}>Gender</Text>
          <ImageBackground source={textinputbutton} style={{width: 300, height: 60}} >
          <Picker
          selectedValue={'Boy'}
          style={styles.pickerstyle}
          itemStyle={styles.pickeritemstyle}
          >
         <Picker.Item label="Girl" value="Girl" />
         <Picker.Item label="Boy" value="Boy" />
         </Picker>
         </ImageBackground>
         </View>
         </View>
      </View>
        </ImageBackground>
      );
}
}
export default AddStudentForm;
