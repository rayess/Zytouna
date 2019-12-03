import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'column'
  },
  imagestyle:{
    height: 200,
    width: 200
  },
  answercontainer: {
    width:180,
    height:50,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 24,
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
  titlecontainer: {
    height: 50,
    width:400,
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
  textstyle:{
    fontSize: 20,
    fontFamily: 'Duepuntozero-Bold',
    alignSelf: 'center',


  }
});
