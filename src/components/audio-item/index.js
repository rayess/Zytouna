import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import styles from './audio-item';
import {Avatar} from 'react-native-elements';
import {playaudiobutton} from '../../assets/icons';
const AudioItem = ({imagesource,onPressimage,paused,onEnd,audioref,onPressAudio,label}) =>{
    return(
     <View style={styles.container}>
     <Avatar
       rounded
       onPress={onPressimage}
       source={imagesource}
       size={90}
       containerStyle={{borderColor: 'white', borderWidth: 3}}
     />
     <TouchableOpacity onPress={onPressAudio} style={styles.playbutton}>
     <Text style={styles.textButton}>{label} </Text>
     <Image style={styles.playicon} source={playaudiobutton} resizeMode='contain' />
      </TouchableOpacity>
     </View>


   )
};
export default AudioItem;
