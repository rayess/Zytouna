import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, AudioItem, Wrapper,} from '../../../../components/activity-components';
import {FlesheGo} from '../../../../components/helper-activity-components';
import {chiken,cheesesandwich,fries,pizza,salad,milkshake} from '../../../../assets/icons';
import {BG12} from '../../../../assets/_images';
import SoundPlayer from 'react-native-sound-player';
import styles from './lesson1screen';
const foods = [
  {imagesource:salad , label: 'salad', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fsalad.mp3?alt=media&token=bc064107-211d-440c-9686-45ebdd255e6a'},
  {imagesource: fries,     label: 'fries', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Ffries.mp3?alt=media&token=37c01984-872d-4fdd-9ddb-430f590b6630'},
  {imagesource: pizza,        label: 'pizza', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fpizza.mp3?alt=media&token=510655ee-82e4-453f-9ac3-4015e3747650'},
  {imagesource: milkshake,   label: 'milkshake', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fmilkshake.mp3?alt=media&token=366c35b6-eac5-4779-8dc3-3acde96380f7'},
  {imagesource: cheesesandwich,   label: 'cheese sandwich', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fcheese%20sandwich.mp3?alt=media&token=ea1b76e7-11ae-4b8c-a32a-3bd48f21d694'},
  {imagesource: chiken,    label: 'chicken', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fchicken.mp3?alt=media&token=a99ca37f-8a7b-45cb-8db4-38d1b434c5e0'},


];
class FoodLessonScreen extends React.Component {
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
      <LessonHeader name={this.props.name} title={'Food'} onPress={()=>this.props.navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={foods}
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
        <FlesheGo onPress={()=>this.props.navigation.navigate('havegotactivityscreen')}/>
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
  actions,)(FoodLessonScreen);
