import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {nautical} from '../../assets/icons';
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
        style={styles.input}
        placeholderTextColor={'gray'}
        autoCorrect={false}
        {...props}
      />
    </View>
  );
};

export default UserInput;
