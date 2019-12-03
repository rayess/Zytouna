import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    width: '64%',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: 'white',
    fontSize: 56,
    fontFamily: 'Duepuntozero-ExtraBold',
    textAlign: 'center',
  },
  textSubTitle: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Duepuntozero-Bold',
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 2,
    lineHeight: 36,
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    height: 56,
    width: 56,
  },
  button: {
    height: 56,
    width: '50%',
    backgroundColor: 'white',
    marginLeft: 12,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.orange,
    fontSize: 24,
    fontFamily: 'Duepuntozero-ExtraBold',
    marginTop: 3,
  },
});
