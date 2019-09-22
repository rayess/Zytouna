import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    height: 56,
    width: '35%',
    backgroundColor: colors.blueSky,
    borderRadius: 24,
    alignSelf: 'center',
    marginLeft: 68,
    marginBottom: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Duepuntozero-ExtraBold',
    marginTop: 3,
    textAlign: 'center',
  },

  forgetContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetIcon: {
    height: 40,
    width: 40,
  },

  textForget: {
    marginLeft: 12,
    color: colors.marron,
    fontSize: 18,
    fontFamily: 'Duepuntozero-Bold',
    marginTop: 3,
  },
});
