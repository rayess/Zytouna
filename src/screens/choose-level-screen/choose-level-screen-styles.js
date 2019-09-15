import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  maincontainer:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'column',
    paddingTop: 10,
    paddingRight: 20,
  },
  levelnumberstyle:{
    fontSize: 20,
    position: 'absolute',
    fontFamily: 'Baloo',
    top:50,
    alignSelf: 'center',
    color: colors.gris
  }

}
);
