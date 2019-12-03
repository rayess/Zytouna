import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, AudioItem, Wrapper,} from '../../../../components/activity-components';
import {FlesheGo} from '../../../../components/helper-activity-components';
import {pc,table,saboura,classroom,poster,drawers,khzena,trousse,cdplayer,} from '../../../../assets/icons';
import {BG12} from '../../../../assets/_images';
import SoundPlayer from 'react-native-sound-player';
import styles from './lesson1screen';
const schoolthings = [
  {imagesource: classroom, label: 'classroom', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fclassroom.mp3?alt=media&token=06f3b4d5-7749-47e9-920f-18388d98f5e3'},
  {imagesource: table,     label: 'table', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Ftable.mp3?alt=media&token=0ecefbf4-2a53-4ef1-b722-42cd465cf54f'},
  {imagesource: pc,        label: 'computer', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fcomputer.mp3?alt=media&token=442297cd-14f8-4130-b3ce-88feef33f288'},
  {imagesource: trousse,   label: 'pencil case', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fpencil-case.mp3?alt=media&token=e5283025-4256-470b-a6f9-9bc4bff8b5ea'},
  {imagesource: saboura,   label: 'board', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fboard.mp3?alt=media&token=e9ba048c-88ca-4f40-806b-f90696b2f4a6'},
  {imagesource: poster,    label: 'poster', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fposter.mp3?alt=media&token=31fa9985-4ef8-4595-b565-d03ded9b07fb'},
  {imagesource: drawers,   label: 'drawers', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fdrawers.mp3?alt=media&token=d1c4615f-c1cf-4f5b-9b83-077dd2a177cf'},
  {imagesource: khzena,    label: 'cupboard', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fcupboard.mp3?alt=media&token=70b6af9b-3b12-436b-a19e-7bff2338aa18'},
  {imagesource: cdplayer,  label: 'CD player', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2FCD%20player.mp3?alt=media&token=b8c7cce3-fd98-4933-beba-7b605544a876'},
];
class Lesson1Screen extends React.Component {
  _playaudio=(audiourl)=>{
  try {
     SoundPlayer.playUrl(audiourl);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }

  render() {
    return (
      <Wrapper source={BG12}>
      <LessonHeader name={this.props.name} title={'School things'} onPress={()=>this.props.navigation.goBack()}/>
      <View style={styles.container}>
        <FlatList
          data={schoolthings}
          renderItem={({item, index}) => (
            <AudioItem
              imagesource={item.imagesource}
              onPressAudio={() =>this._playaudio(item.sound)}
              label={item.label}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        </View>
        <View style={{height:100}}>
         <FlesheGo onPress={()=>this.props.navigation.navigate('feelinglessonscreen')}/>
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
  actions,)(Lesson1Screen);
