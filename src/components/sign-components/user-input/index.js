import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {nautical} from '../../../assets/icons';
import styles from './user-input';

const UserInput = props => {
  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.inputIcon}
        source={nautical}
        resizeMode={'contain'}
      />
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        placeholderTextColor={'gray'}
        autoCorrect={false}
      />
    </View>
  );
};

export default UserInput;
