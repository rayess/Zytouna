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
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
