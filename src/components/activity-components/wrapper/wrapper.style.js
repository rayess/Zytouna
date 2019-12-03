import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  },
});
