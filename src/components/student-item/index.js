import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Avatar} from 'react-native-elements';

import {default_avatar} from '../../assets/icons';
import {tt_avatar_small} from '../../assets/_images';

import styles from './student-item';

const StudentItem = props => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        onPress={props.onPress}
        source={props.source}
        size={115}
        containerStyle={{borderColor: 'white', borderWidth: 3}}
      />
      <Text style={styles.name}>{props.label}</Text>
    </View>
  );
};

export default StudentItem;
