import {StyleSheet,Dimensions} from 'react-native';
import colors from '../../../assets/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const hytjaziraSize = (width*0.5) / 2;
const espacebetweenj610=width*0.48;
const lastjaziraSize = (width*0.6) / 3;
const espacebetweenj78=width*0.03;
const paddingtopj9=height*0.03;
const marginleftj7=width*0.18;
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  jozorcontainer:{
  height: '90%',
  width: '95%',
  flexDirection: 'column',
},
  primarycontainerStyle:{
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end'
  },
  j6Style:{
   width: hytjaziraSize,
   height:'70%',
   marginRight: espacebetweenj610

 },
 j10style:{
   width: hytjaziraSize,
   height:'70%',
 },
 secondarycontainerStyle:{
   flexDirection: 'row',
   paddingLeft: marginleftj7,
   width:'60%'


 },
 j7style:{
   width: lastjaziraSize,
   height: '80%',
   marginRight: espacebetweenj78,
   marginTop: paddingtopj9,

 },
 j8style:{
   width: lastjaziraSize,
   height: '80%',
   marginRight: espacebetweenj78,
   marginTop: paddingtopj9,


 },
 j9style:{
   width: lastjaziraSize,
   height: '70%',

 }

})
