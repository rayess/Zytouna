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
  parentcontainer: {
    width:180,
    marginTop: 20,
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
});
