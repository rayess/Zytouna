import React from 'react';
import {View} from 'react-native';
import {LessonHeader,AudioItem} from '../../components';
import {default_avatar} from '../../assets/icons';
import SoundPlayer from 'react-native-sound-player'
class Test extends React.Component{
  render(){
  return(
    <View >
    <LessonHeader label={'Ahmed'}/>
    <AudioItem imagesource={default_avatar} onPressAudio={()=>{
      try {
    SoundPlayer.playUrl('https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3')}
    catch (e) {
    console.log(`cannot play the sound file`, e)
}}} label={'foods'}/>
    </View>
  )
}
}
export default Test;
