import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const jaziraSize = (width*0.5) / 3;
const leftspace=width*0.2;
const topspace=(height*10)/100;
const spacebetweenj13=width*0.15;
const spacebetweenj12=height*0.07;
const spacebetweenj34=height*0.05;
const toplastjaziraspace=height*0.15;
const lastjaziraleftspace=width*0.08;
const j2leftspace=width*0.08;
const spacebetweenj24=width*0.1;
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',

  },
  jozorcontainer:{
  flexDirection: 'column',
  marginTop: topspace,
  paddingLeft: leftspace,
  width:'70%',
  height: '80%',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
},
  jaziraStyle: {
    height: 150,
    width: jaziraSize,
  },
  j5Style: {
    height: 250,
    width: jaziraSize,
  },
  j1style:{
    marginRight: spacebetweenj13,
    height: 150,
    width: jaziraSize,
  },
  j2style:{
  marginRight: spacebetweenj24,
  marginTop:spacebetweenj12,
  marginLeft:j2leftspace,
  height: 150,
  width: jaziraSize,
  },
  j4style:{
  marginTop:spacebetweenj34,
  height: 150,
  width: jaziraSize,
  },
  j5containerstyle:{
    marginTop: toplastjaziraspace,
    paddingLeft: lastjaziraleftspace
  }
})
