import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({

  mainContainer:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  textButton:{
    position:'absolute',
    fontFamily: 'Duepuntozero-Black',
    fontSize: 20,
    color: colors.bleu,
    alignSelf: 'center',
    top: 20
  }
}
);
