import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, AudioItem, Wrapper,} from '../../../../components/activity-components';
import {FlesheGo} from '../../../../components/helper-activity-components';
import {art,math,english,science,pe,music,} from '../../../../assets/icons';
import {BG12} from '../../../../assets/_images';
import SoundPlayer from 'react-native-sound-player';
import styles from './lesson2screen';
const schoolthings = [
  {imagesource: art, label: 'art', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fart.mp3?alt=media&token=0efd40f6-5af9-4784-8293-d460ad75aa70'},
  {imagesource: math,     label: 'maths', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fmaths.mp3?alt=media&token=7ff45f31-ec44-4202-9c54-c3863781ea8e'},
  {imagesource: english,        label: 'English', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2FEnglish.mp3?alt=media&token=a661659c-17cb-4d0b-9daa-a01faaba006e'},
  {imagesource: science,   label: 'Science', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2FScience.mp3?alt=media&token=2e6739f6-b616-4fd5-a902-a4e7e87f49b8'},
  {imagesource: pe,   label: 'PE', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2FPE.mp3?alt=media&token=1c23ff1f-2288-4a3f-9cf5-0286ff7c384f'},
  {imagesource: music,    label: 'music', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fmusic.mp3?alt=media&token=ffeb6686-b91a-43ee-b68a-1d6132ce9d98'},
];
class SchoolThingScreen extends React.Component {
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
      <LessonHeader name={this.props.name} title={'School Subjects'} onPress={()=>this.props.navigation.goBack()}/>
      <View style={styles.container}>
        <FlatList
          data={schoolthings}
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
        <View style={{height:100}}>
        <FlesheGo onPress={()=>this.props.navigation.navigate('ourtheiractivityscreen')}/>
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
  actions,)(SchoolThingScreen);
