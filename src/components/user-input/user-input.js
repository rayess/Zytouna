import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIcon: {
    height: 56,
    width: 56,
  },
  input: {
    height: 56,
    width: '35%',
    backgroundColor: 'white',
    marginLeft: 12,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.orange,
    fontSize: 18,
    fontFamily: 'Duepuntozero-ExtraBold',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});
