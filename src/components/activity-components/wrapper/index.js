import React from 'react';
import {ImageBackground, ScrollView, Dimensions,View} from 'react-native';
import styles from './wrapper.style';

const height = Dimensions.get('screen').height;
const Wrapper = props => {
  return (
    <ScrollView style={{flex:1,}}>
      <ImageBackground
        source={props.source}
        resizeMode={'stretch'}
        style={styles.wrapper}>
        {props.children}
      </ImageBackground>
    </ScrollView>
  );
};

export default Wrapper;
