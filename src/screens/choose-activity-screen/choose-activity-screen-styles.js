import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  container:{
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  titlecontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,

  },
  activitycontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  titlestyle:{
    fontSize: 30,
    fontFamily: 'Duepuntozero-Bold',
    color: colors.white
  },
  button: {
    height: 70,
    width:100,
    backgroundColor: colors.white,
    borderRadius: 24,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
      alignContent: 'center',
      justifyContent: 'center',
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    alignContent: 'center',
    justifyContent: 'center',

  },

});
