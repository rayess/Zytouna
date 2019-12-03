import React from 'react';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Avatar,Image} from 'react-native-elements';
import styles from './student-item';

const StudentItem = props => {
  return (
    <View style={styles.container}>
      <Avatar
      rounded
        onPress={props.onPress}
        source={props.source}
        size={115}
        renderPlaceholderContent={<ActivityIndicator />}
        containerStyle={{borderColor: 'white', borderWidth: 3}}
      />
      <Text style={styles.name}>{props.label}</Text>
    </View>
  );
};

export default StudentItem;
