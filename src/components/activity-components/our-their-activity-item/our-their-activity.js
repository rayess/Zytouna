import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item:{
    flexDirection: 'column',
    padding: 10,

  },
  imagestyle:{
    height: 200,
    width: 200
  },
  groupstyle:{
    height: 80,
    width: 180,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    top:-35,
    alignSelf: 'center'
  },
  textstyle:{
    fontSize: 15,
    fontFamily: 'Duepuntozero-ExtraLight',

  }
});
