import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  cloudstyle:{
    width:140,
    height:100
  },
  imagestyle:{
    width:100,
    height:150
  },
  textstyle:{
    position:'absolute',
    top:50,
    fontSize: 15,
    fontFamily: 'Duepuntozero-Bold',
    alignSelf: 'center',
    color: colors.bleu0,
  }
});
