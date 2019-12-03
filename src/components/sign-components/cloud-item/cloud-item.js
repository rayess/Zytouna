import {StyleSheet} from 'react-native';
import colors from '../../../assets/color';
export default StyleSheet.create({
  container:{
    margin:10,
    alignSelf: 'center',
  },
  cloudstyle:{
    width:110,
    height:80
  },
  numberstyle:{
    fontSize: 30,
    position: 'absolute',
    fontFamily: 'Baloo',
    alignSelf: 'center',
    fontWeight: 'bold',
    top:30,
    color:colors.gris
  }

}
);
