import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG5} from '../../assets/_images';
import {
  addphoto,
  avatar1,
  avatar1pressed,
  avatar2,
  avatar2pressed,
  avatar3,
  avatar3pressed,
  avatar4,
  avatar4pressed,
  avatar5,
  avatar5pressed,
  avatar6,
  avatar6pressed,
  avatar7,
  avatar7pressed,
  avatar8,
  avatar8pressed,
  avatar9,
  avatar9pressed,
  avatar10,
  avatar10pressed,
} from '../../assets/icons';

import {GoBackButton, StudentItem, AvatarItem} from '../../components';
import styles from './choose-avatar-styles-screen';
import ImagePicker from 'react-native-image-picker';
class ChooseAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedImage: addphoto,
      avatarline1: [
        {
          source: avatar1,
          pressed: avatar1pressed,
        },
        {
          source: avatar2,
          pressed: avatar2pressed,
        },
        {
          source: avatar3,
          pressed: avatar3pressed,
        },
        {
          source: avatar4,
          pressed: avatar4pressed,
        },
        {
          source: avatar5,
          pressed: avatar5pressed,
        },
      ],
      avatarsline2: [
        {
          source: avatar6,
          pressed: avatar6pressed,
        },
        {
          source: avatar7,
          pressed: avatar7pressed,
        },
        {
          source: avatar8,
          pressed: avatar8pressed,
        },
        {
          source: avatar9,
          pressed: avatar9pressed,
        },
        {
          source: avatar10,
          pressed: avatar10pressed,
        },
      ],
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
          this.props.navigation.navigate('addstudentform', {
            uri: {uri: res.uri},filepath:res.uri,
          });
        }
      },
    );
  };
  render() {
    console.log(this.state.pickedImage);
    return (
      <ImageBackground
        resizeMode={'stretch'}
        source={BG5}
        style={styles.container}>
        <View style={styles.takephotoContainer}>
          <StudentItem
            source={this.state.pickedImage}
            onPress={this.pickImageHandler.bind(this)}
          />
        </View>
        <View style={styles.avatarContainer}>
          <View style={{flexDirection: 'row'}}>
            {this.state.avatarline1.map((avatar, i) => (
              <AvatarItem
                key={i}
                source={avatar.source}
                onPress={() => {
                  let newArray = [...this.state.avatarline1];
                  newArray[i].source = avatar.pressed;
                  this.setState({avatarline1: newArray});
                  this.setState({pickedImage: avatar.pressed});
                  this.props.navigation.navigate('addstudentform', {
                    uri: avatar.pressed, filepath:'',
                  });
                }}
              />
            ))}
          </View>
          <View style={{flexDirection: 'row'}}>
            {this.state.avatarsline2.map((avatar, i) => (
              <AvatarItem
                key={i}
                source={avatar.source}
                onPress={() => {
                  let pressedArray = Object.assign({}, this.state.avatarsline2);
                  pressedArray[i].source = avatar.pressed;
                  this.setState({avatarline2: pressedArray});
                  this.setState({pickedImage: avatar.pressed});
                  this.props.navigation.navigate('addstudentform', {
                    uri: avatar.pressed,filepath:'',
                  });
                }}
              />
            ))}
          </View>
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
)(ChooseAvatar);
