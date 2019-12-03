import {StyleSheet} from 'react-native';
import colors from '../../../../assets/color';
export default StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcontainer:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '60%',
    alignSelf: 'flex-end',
    height: '40%'

  },
  hellotextstyle:{
    fontSize: 35,
    fontFamily: 'Duepuntozero-ExtraBold',
    color: colors.white,
  },
  subtitlestyle:{
    fontSize: 30,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.white,
  }
});
