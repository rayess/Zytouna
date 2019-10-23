import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const avatarSize = (width - 400) / 5;

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  takephotoContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 50,
    height: '80%',
  },
  avatarContainer: {
    flex: 1,
    height: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  avatarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  avatarStyle: {
    height: avatarSize,
    width: avatarSize,
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // backgroundColor: 'red',
  },
});
