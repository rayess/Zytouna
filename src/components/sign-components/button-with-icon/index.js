import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {nautical} from '../../../assets/icons';
import styles from './button-with-icon';

const ButtonWithIcon = props => {
  return (
    <View style={styles.buttonContainer}>
      <Image
        style={styles.buttonIcon}
        source={nautical}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}>
        <Text style={styles.textButton}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithIcon;
