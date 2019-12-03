import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, AudioItem, Wrapper,} from '../../../../components/activity-components';
import {FlesheGo} from '../../../../components/helper-activity-components';
import {hot,cold,hungry,thirsty,happy,sad,tired,angry,scared,brave} from '../../../../assets/icons';
import {BG12} from '../../../../assets/_images';
import SoundPlayer from 'react-native-sound-player';
import styles from './lesson1screen';
const feelings = [
  {imagesource: hot, label: 'hot', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fhot.mp3?alt=media&token=70de77d2-6cd7-41e0-8654-0c47267d2df4'},
  {imagesource: cold,     label: 'Cold', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fcold.mp3?alt=media&token=9e00583c-899a-4d82-b898-e18af926f90d'},
  {imagesource: hungry,        label: 'hungry', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fhungry.mp3?alt=media&token=5cabc9b0-9e79-41e6-ad80-99737833b79f'},
  {imagesource: thirsty,   label: 'thirsty', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fthirsty.mp3?alt=media&token=a7a9bdd4-5caf-4963-a1ec-99404574076b'},
  {imagesource: happy,   label: 'happy', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fhappy.mp3?alt=media&token=66003609-2ff5-4f97-804a-f68aa565c813'},
  {imagesource: sad,    label: 'sad', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fsad.mp3?alt=media&token=54ccd41c-91b8-4986-b128-a9b562280745'},
  {imagesource: tired,   label: 'tired', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Ftired.mp3?alt=media&token=0fc44f30-c659-4969-9831-7fb0aac7f3de'},
  {imagesource: angry,    label: 'angry', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fangry.mp3?alt=media&token=c6947b61-6ffc-411c-bbd2-ae6388af4f46'},
  {imagesource: scared,  label: 'scared', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fscared.mp3?alt=media&token=1fa9539c-1de1-4845-b1b6-37ee29310338'},
  {imagesource: brave,  label: 'brave', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fbrave.mp3?alt=media&token=c9a98923-9310-4367-bfcc-9cbdd8f5c714'},

];
class FeelingsLessonScreen extends React.Component {
  _playaudio=audiourl=>{
    try {
      SoundPlayer.playUrl(audiourl);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }
  render() {
    return (
      <Wrapper source={BG12}>
      <LessonHeader name={this.props.name} title={'Feelings and emotions'} onPress={()=>this.props.navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={feelings}
          renderItem={({item, index}) => (
            <AudioItem
              imagesource={item.imagesource}
              onPressAudio={() =>this._playaudio(item.sound) }
              label={item.label}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        </View>
        <View style={{height:150}}>
        <FlesheGo onPress={()=>this.props.navigation.navigate('feelingactivity')}/>
        </View>
      </Wrapper>
    );
  }
}
const mapStateToProps = ({activestudent}) => {
  const name = activestudent.name;
  return {name};
};

export default connect(
  mapStateToProps,
  actions,) (FeelingsLessonScreen);
