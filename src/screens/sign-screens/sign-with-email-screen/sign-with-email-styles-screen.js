import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    height: 56,
    width: '35%',
    backgroundColor: colors.blueSky,
    borderRadius: 24,
    alignSelf: 'center',
    marginLeft: 68,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Duepuntozero-ExtraBold',
    marginTop: 3,
    textAlign: 'center',
  },
});
