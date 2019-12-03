import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: colors.bleu0,
    fontSize: 36,
    fontFamily: 'Duepuntozero-Bold',
  },
  logo: {
    width: '50%',
    marginTop: 20,
  },
});
