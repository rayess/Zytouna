import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  maincontainer: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  secondarycontainer:{
  flexDirection: 'row',
  },
  textButton: {
    color: colors.orange,
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    position: 'absolute',
    alignSelf: 'center',
    top :30, 
  }
});
