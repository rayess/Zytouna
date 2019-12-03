import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, AudioItem, Wrapper,} from '../../../../components/activity-components';
import {FlesheGo} from '../../../../components/helper-activity-components';
import {tie,sweets,pastries,presents,nuts,neighbor,card,cake,chocoalte,baloon,} from '../../../../assets/icons';
import {BG12} from '../../../../assets/_images';
import SoundPlayer from 'react-native-sound-player';
import styles from './lesson1-screen';
const partydata = [
  {imagesource:chocoalte ,  label: 'chocolate', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fchocolate.mp3?alt=media&token=b14ccc94-0519-48b1-ab03-3c31d08ed333'},
  {imagesource: sweets,     label: 'sweets', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fsweets.mp3?alt=media&token=2551b4b5-8b8c-4ff6-9fab-bf636b44f8c2'},
  {imagesource: baloon,     label: 'baloon', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fbaloon.mp3?alt=media&token=964baf48-0ebb-4ee2-b4ff-bd8309bb118f'},
  {imagesource: presents,   label: 'presents', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fpresents.mp3?alt=media&token=a9e696bd-b759-4cb6-914c-3375b994ae1e'},
  {imagesource: cake,       label: 'cake', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fcake.mp3?alt=media&token=17188c38-8d07-47e2-b53b-07c353b5bf50'},
  {imagesource: card,       label: 'card', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fcard.mp3?alt=media&token=273a66bf-5276-4863-acfa-471e4a1d31d9'},
  {imagesource: neighbor,   label: 'neighbor', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fneighbor.mp3?alt=media&token=d62212e0-199b-4bf5-b323-b3c3aea4ca51'},
  {imagesource: pastries,   label: 'pastries', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fpastries.mp3?alt=media&token=1b3f01dd-bb7a-476b-b309-04a0676bfa2f'},
  {imagesource: nuts,       label: 'nuts', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fnuts.mp3?alt=media&token=56529e26-a364-491d-a225-0567e8d910aa'},
  {imagesource: tie,        label: 'tie', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Ftie.mp3?alt=media&token=8a0d26ae-cf9b-4961-9a0b-1df4642ebfdb'},




];
class PartyLessonScreen extends React.Component {
  _playaudio=audiourl=>{
    try {
      SoundPlayer.playUrl(audiourl);
      console.warn('done');
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }
  render() {
    return (
      <Wrapper source={BG12}>
      <LessonHeader name={this.props.name} title={'Party'} onPress={()=>this.props.navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={partydata}
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
        <View style={{height:150}}>
        <FlesheGo />
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
  actions,)(PartyLessonScreen);
