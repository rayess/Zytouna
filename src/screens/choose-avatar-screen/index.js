import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {BG5} from '../../assets/_images';
import {addphoto} from '../../assets/icons';

import {GoBackButton, StudentItem, AvatarItem} from '../../components';
import styles from './choose-avatar-styles-screen';
import ImagePicker from 'react-native-image-picker';
import {avatars} from '../../const';

class ChooseAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedImage: addphoto,
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
            uri: {uri: res.uri},
            filepath: res.uri,
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
          <FlatList
            contentContainerStyle={styles.flatlist}
            data={avatars}
            renderItem={({item, index}) => (
              <AvatarItem
                key={index.toString()}
                source={item.source}
                style={styles.avatarStyle}
                onPress={() => {
                  this.props.navigation.navigate('addstudentform', {
                    name: item.name,
                    index: index,
                    filepath: '',
                  });
                }}
              />
            )}
            numColumns={5}
            keyExtractor={(item, index) => index.toString()}
          />
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
