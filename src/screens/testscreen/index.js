import React from 'react';
import {FlatList} from 'react-native';
import {LessonHeader, AudioItem, Wrapper} from '../../components';
import {default_avatar} from '../../assets/icons';
import SoundPlayer from 'react-native-sound-player';
const subjects = [
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
  {image: '', title: '', sound: ''},
];
class Test extends React.Component {
  render() {
    return (
      <Wrapper>
        {subjects.map(({item, index}) => (
          <AudioItem
            imagesource={default_avatar}
            onPressAudio={() => {
              try {
                SoundPlayer.playUrl(
                  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
                );
              } catch (e) {
                console.log(`cannot play the sound file`, e);
              }
            }}
            label={'foods'}
          />
        ))}
      </Wrapper>
    );
  }
}
export default Test;
