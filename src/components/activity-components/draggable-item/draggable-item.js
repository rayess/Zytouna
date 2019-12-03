import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({

  parentcontainer: {
    height:50,
    width:180,
    marginTop: 20,
    backgroundColor: colors.white,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000000',
    zIndex: 15,
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
  textstyle:{
    fontSize: 15,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.orange,
    alignSelf: 'center'
  }
});
