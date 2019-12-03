import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
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
    fontSize: 22,
    fontFamily: 'Duepuntozero-ExtraBold',
    marginTop: 3,
  },
});
