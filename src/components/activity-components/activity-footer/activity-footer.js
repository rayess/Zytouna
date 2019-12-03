import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container:{
    flexDirection: 'row',
    paddingVertical: 20,
  },
  fleshecontainer:{
    alignItems: 'flex-start',
    width: '30%',
    marginHorizontal: 20,

  },
  buttoncontainer:{
    alignSelf: 'center',
    width:'40%',
    marginHorizontal: 20,

  },
  fleshebackstyle: {
    height: 18,
    width: 18,
    alignSelf: 'center',

  },
  button: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 5,
    elevation: 11,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textButton: {
    position: 'absolute',
    fontFamily: 'Duepuntozero-Black',
    fontSize: 25,
    color: colors.orange,
    alignSelf: 'center',
  },

});
