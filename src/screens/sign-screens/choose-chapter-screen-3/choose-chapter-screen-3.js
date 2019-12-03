import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const jaziraSize = (width*0.6) / 2;
const paddingtopj1=height*0.15;
const marginleftj3=width*0.05;
const marginrightj3=width*0.07;
const margintopj5=height*0.25;
const sizej5=width*0.4;
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  jozorcontainer:{
  height: '90%',
  width: '90%',
  flexDirection: 'row',
},
maincontainer:{
  height: '100%',
  width:'60%',
  flexDirection: 'column'
},
hycontainer:{
  height: '50%',
  width:'100%',
  flexDirection: 'row'
},
lowcontainer:{
  width:'100%',
  height: '50%',
  flexDirection: 'row',
  paddingLeft: marginleftj3

},
lastjaziracontainer:{
  height: '100%',
  width:'60%',


},
j1style:{
  width:jaziraSize,
  height: '60%',
  marginTop: paddingtopj1,
},
j2style:{
  width:jaziraSize,
  height: '60%',
},
j3style:{
  width:jaziraSize,
  height: '70%',
  marginRight: -marginrightj3

},
j4style:{
  width:jaziraSize,
  height: '70%',
},
j5style:{
  width:sizej5,
  height: '60%',
  marginTop: margintopj5,
},


});
