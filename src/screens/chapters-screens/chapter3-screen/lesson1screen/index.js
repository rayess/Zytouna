import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {FlatList,View} from 'react-native';
import {LessonHeader, AudioItem, Wrapper,} from '../../../../components/activity-components';
import {FlesheGo} from '../../../../components/helper-activity-components';
import {bike,football,tennis,skateboard,skate,horse} from '../../../../assets/icons';
import {BG12} from '../../../../assets/_images';
import SoundPlayer from 'react-native-sound-player';
import styles from './lesson1screen';
const activities = [
  {imagesource:bike , label: 'Ride a bike', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2FRide%20a%20bike.mp3?alt=media&token=2da46d77-4dd5-48d3-98f8-0323d3bf355d'},
  {imagesource: horse,     label: 'Ride a horse', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2FRide%20a%20horse.mp3?alt=media&token=d8e75cd6-85f9-4cd5-9d59-637d530046a7'},
  {imagesource: skate,        label: 'skate', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fskate.mp3?alt=media&token=460a357a-bbbb-45f6-84de-02c4eba10a6d'},
  {imagesource: skateboard,   label: 'skateboard', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fskateboard.mp3?alt=media&token=b430e7ea-a434-4b9b-bd5a-45a371762ae5'},
  {imagesource: tennis,   label: 'play tennis', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fplay%20tennis.mp3?alt=media&token=2e9c1213-0ce4-4e60-9568-2119805e9078'},
  {imagesource: football,    label: 'play football', sound: 'https://firebasestorage.googleapis.com/v0/b/zaytouna-6e487.appspot.com/o/audios%2Fplay%20football.mp3?alt=media&token=c793b280-8d9d-4e48-b711-1a303ed0a22e'},


];
class ActivitiesLessonScreen extends React.Component {
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
      <LessonHeader name={this.props.name} title={'Activities'} onPress={()=>this.props.navigation.goBack()}/>
      <View style={styles.container}>
        <FlatList
          data={activities}
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
        <FlesheGo onPress={()=>this.props.navigation.navigate('canactivityscreen')}/>
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
  actions,)(ActivitiesLessonScreen);
