import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'

  },
  cloudcontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  hellotextcontainer:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
  },
  hellotextstyle:{
    fontSize: 30,
    fontFamily: 'Duepuntozero-ExtraBold',
    color: colors.white,
  },
  subtitlestyle:{
    fontSize: 25,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.white,
  }

}
);
