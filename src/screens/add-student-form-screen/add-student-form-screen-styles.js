import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  maincontainer:{
    flex:1,
    flexDirection: 'row',
    padding: 20
  },
  formcontainer:{
    flex:3,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttoncontainer:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
    flex:1,
    alignItems: 'flex-start',
  },
})
