import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container:{
    height:'10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerleftcontainer:{
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'48%',
    flexDirection: 'row',
  },
  headerrightcontainer:{
    width:'48%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',

  },
  fleshebackstyle: {
    height: 15,
    width: 15,
  },
  hitextstyle:{
    fontFamily: 'Duepuntozero-ExtraLight',
    fontSize: 15,
    marginLeft: 10,
    fontWeight:'400'
  },
  button: {
    height: 36,
    backgroundColor: colors.orange,
    borderRadius: 24,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textButton: {
    position: 'absolute',
    fontFamily: 'Duepuntozero-Black',
    fontSize: 15,
    color: colors.white,
    alignSelf: 'center',
  },

});
