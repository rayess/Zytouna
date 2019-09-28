import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import styles from './avatar-item-styles';

const AvatarItem = props => {
  return (
    <TouchableOpacity style={styles.avatarItem} onPress={props.onPress}>
      <Image
        key={props.key}
        source={props.source}
        style={styles.avatarStyle}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};
export default AvatarItem;
