import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  secondaryContainer:{
    flexDirection: 'column',
    paddingLeft: 40,

  },
  textTitle:{
    color:'white',
    fontSize: 50,
    fontFamily: 'Duepuntozero-ExtraBold',
    alignSelf: 'center'
  },
  textSubTitle:{
    color:'white',
    fontSize: 30,
    fontFamily: 'Duepuntozero-Bold',
    alignSelf: 'center'
  },
  textButton: {
    color: colors.orange,
    fontSize: 30,
    fontFamily: 'Duepuntozero-Bold',
    position: 'absolute',
    alignSelf: 'center',
    top :30
  }
});
