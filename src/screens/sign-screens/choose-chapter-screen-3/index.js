import React from 'react';
import {View,Image,ImageBackground,TouchableOpacity,Dimensions} from 'react-native';
import {BG10} from '../../../assets/_images';
import {j11j,j1111,j12,j1212,j13,j1313,j14,j1414,j15,j1515} from '../../../assets/icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const jaziraSize = (width*0.4) / 2;
import styles from './choose-chapter-screen-3';
class ChooseChapterScreen3 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {


    };
  }
  render(){
    return(
       <ImageBackground source={BG10} style={styles.container} resizeMode={'stretch'}>
       <View style={styles.jozorcontainer}>
       <View style={styles.maincontainer}>
       <View style={styles.hycontainer}>
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j1style} source={j11j} resizeMode={'contain'}/>
       </TouchableOpacity >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j2style} source={j1212} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       <View style={styles.lowcontainer}>
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j3style} source={j1313} resizeMode={'contain'}/>
       </TouchableOpacity >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j4style} source={j1414} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       </View>
       <View style={styles.lastjaziracontainer} >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j5style} source={j1515} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       </View>
       </ImageBackground>
     )
   }
 }
   export default ChooseChapterScreen3;
