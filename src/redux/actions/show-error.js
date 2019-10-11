import Toast from 'react-native-root-toast';
import colors from '../../assets/color';
export const toastShow=(message)=>{
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: colors.blueSky,
    textColor:colors.white,
  });
}
