import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './audio-item';
import {Avatar} from 'react-native-elements';
import {playaudiobutton} from '../../../assets/icons';
const AudioItem = props => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        onPress={props.onPressimage}
        source={props.imagesource}
        size={90}
        containerStyle={{borderColor: 'white', borderWidth: 3}}
      />
      <TouchableOpacity onPress={props.onPressAudio} style={styles.playbutton}>
        <Text style={styles.textButton}>{props.label} </Text>
        <Image
          style={styles.playicon}
          source={playaudiobutton}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
export default AudioItem;
