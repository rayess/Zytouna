import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  playbutton: {
    height: 36,
    width: 150,
    backgroundColor: colors.white,
    borderRadius: 24,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  textButton: {
    fontFamily: 'Duepuntozero',
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
  playicon: {
    height: 30,
    width: 25,
  },
});
