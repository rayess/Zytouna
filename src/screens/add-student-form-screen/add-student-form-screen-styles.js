import {StyleSheet} from 'react-native';
import colors from '../../assets/color';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  formcontainer: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 30,
  },

  takephotostyle: {
    flex: 1.5,
    alignItems: 'flex-end',
  },
  label: {
    fontFamily: 'Duepuntozero-Bold',
    fontSize: 20,
    color: colors.white,
    paddingLeft: 100,
    marginBottom: 8,
  },
  pickerContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerIcon: {
    height: 56,
    width: 56,
  },
  pickerArrowIcon: {
    height: 16,
    width: 16,
  },
  picker: {
    height: 56,
    width: '75%',
    backgroundColor: 'white',
    marginLeft: 12,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  pickerText: {
    color: colors.orange,
    fontSize: 18,
    fontFamily: 'Duepuntozero-ExtraBold',
    textAlign: 'left',
  },
  pickerItemButton: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 2,
  },
  pickerItemText: {
    color: colors.orange,
    fontSize: 24,
    fontFamily: 'Duepuntozero-ExtraBold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttoncontainer: {
    flex: 1.3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  submitIcon: {
    height: 70,
    width: 70,
  },
});
