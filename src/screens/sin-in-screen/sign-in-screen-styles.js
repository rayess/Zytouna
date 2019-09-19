import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({

  mainContainer:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  secondaryContainer:{
    flexDirection: 'row',
    paddingBottom:10
  },
  forgetpasswordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:  10
  },
  textinputcontainer:{
    position:'absolute',
    alignSelf: 'center',
    top:20,
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.orange

  },
  buttoncontainer:{
    position:'absolute',
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.white,
    top:20,

  },
  forgetpasswordtext:{
    alignSelf: 'center',
    fontSize: 10,
    fontFamily: 'Duepuntozero-Black',
    color: colors.orange,
  }
});
