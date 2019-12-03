import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  titlecontainer: {
    height: 50,
    width:500,
    backgroundColor: colors.white,
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5,
    elevation: 11,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textstyle:{
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    alignSelf: 'center',
    color: colors.bleu0

  }
});
