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
        onPress={() => console.log('Works!')}
        source={tt_avatar_small}
        size={100}
        containerStyle={{borderColor: 'white', borderWidth: 3}}
      />
      <Text style={styles.name}>
        {'User '}
        <Text style={styles.number}>
          {'1'}
          <Text style={styles.name}>
            {' : '}
            {'Ahmed'}
          </Text>
        </Text>
      </Text>
    </View>
  );
};

export default StudentItem;
