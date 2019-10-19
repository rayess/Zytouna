import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  button: {
    height: 56,
    width: '40%',
    backgroundColor: 'white',
    borderRadius: 24,
    marginTop: 30,
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
    fontSize: 28,
    color: colors.bleu,
    alignSelf: 'center',
  },
  studentsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  logoutoutcontainer:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    

  },

});
