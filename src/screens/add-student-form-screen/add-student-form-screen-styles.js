import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  maincontainer:{
    flex:1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 40
  },
  textplaceholder:{
    fontFamily: 'Duepuntozero-ExtraLight',
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  textinputcontainer:{
    position:'absolute',
    alignSelf: 'center',
    top:20,
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.orange

  },
  pickerstyle:{
    position: 'absolute',
    width: 300,
    height: '100%',

  },
  pickeritemstyle:{
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    height: 60,
    color: colors.orange,
  },
  takephotostyle:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20
  },
})
