import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  playbutton: {
    height: 36,
    width:110,
    padding:10,
    backgroundColor: colors.white,
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

  },
  textButton: {
    fontFamily: 'Duepuntozero-ExtraLight',
    fontSize: 15,
    color: '#000000',
    alignSelf: 'center'
  },
  playicon:{
    height:30,
    width:25,
    alignSelf: 'flex-end',
    position: 'absolute',
    marginVertical: 3,
    
  }
});
