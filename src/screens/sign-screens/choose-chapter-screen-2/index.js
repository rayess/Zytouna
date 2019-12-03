import React from 'react';
import {View,Image,ImageBackground,TouchableOpacity,Dimensions} from 'react-native';
import {BG9} from '../../../assets/_images';
import {j66,j6,j99,j9,j7,j77,j8,j88,j10,j1010} from '../../../assets/icons';
const height = Dimensions.get('window').height;
const negativepaddingtop=height*0.09;
import styles from './choose-chapter-screen-2';
class ChooseChapterScreen2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {


    };
  }
  render(){
    return(
       <ImageBackground source={BG9} style={styles.container} resizeMode={'stretch'}>
       <View style={styles.jozorcontainer} >
       <View style={styles.primarycontainerStyle} >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j6Style} source={j66} resizeMode={'contain'}/>
       </TouchableOpacity >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j10style} source={j1010} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       <View style={{flexDirection: 'row',height: '50%'}} >
       <View style={styles.secondarycontainerStyle} >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j7style} source={j77} resizeMode={'contain'}/>
       </TouchableOpacity >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j7style} source={j88} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       <View style={{width: '40%',justifyContent: 'flex-start',alignItems: 'center',marginTop:-negativepaddingtop,}} >
       <TouchableOpacity onPress={()=>{this.setState({})}} >
       <Image style={styles.j7style} source={j99} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       </View>
       </View>
       </ImageBackground>
    )


  }
}
export default ChooseChapterScreen2;
