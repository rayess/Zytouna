import React from 'react';
import {ImageBackground, ScrollView, Dimensions} from 'react-native';

import {BG7} from '../../assets/_images';
import styles from './wrapper.style';

const height = Dimensions.get('screen').height;
const Wrapper = props => {
  return (
    <ScrollView>
      <ImageBackground
        source={BG7}
        resizeMode={'stretch'}
        style={styles.wrapper}>
        {props.children}
      </ImageBackground>
    </ScrollView>
  );
};

export default Wrapper;
