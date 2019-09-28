import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  takephotoContainer:{
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '30%',
  },
  avatarContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    flexDirection: 'column',
  },
  avatarItem:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  avatarStyle:{
    height:70,
    width:60,
  }
});
