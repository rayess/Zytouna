import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import ChooseChapter from './choose-chapter-screen';

class ChooseLevelAndChapterSwiper extends React.Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%', height: '100%'}}>
      <Swiper showsButtons={true} removeClippedSubviews={false} index={1}>
      <ChooseChapter />
        </Swiper>
      </View>
    );
  }
}

export default ChooseLevelAndChapterSwiper;
