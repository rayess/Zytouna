import React from 'react';
import {View,Image,ImageBackground,TouchableOpacity,} from 'react-native';
import {BG8} from '../../../assets/_images';
import {j11,j1,j22,j2,j33,j3,j44,j4,j55,j5} from '../../../assets/icons';
import styles from './choose-chapter-1-screen';
class ChooseChapter1Screen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      srcj1: j11,
      srcj3:j33,
      srcj2:j22,
      srj4:j44,
      srj5:j55,

    };
  }
  render(){
    return(
       <ImageBackground source={BG8} style={styles.container} resizeMode={'stretch'}>
       <View style={styles.jozorcontainer} >
       <View style={{flexDirection: 'row'}}>
       <TouchableOpacity onPress={()=>{this.setState({srcj1:j1})}} >
       <Image style={styles.j1style} source={this.state.srcj1} resizeMode={'contain'}/>
       </TouchableOpacity >
       <TouchableOpacity onPress={()=>{this.setState({srcj3:j3})}} >
       <Image style={styles.jaziraStyle} source={this.state.srcj3} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       <View style={{flexDirection: 'row', }}>
       <TouchableOpacity onPress={()=>{this.setState({srcj2:j2})}} >
       <Image style={styles.j2style} source={this.state.srcj2} resizeMode={'contain'}/>
       </TouchableOpacity >
       <TouchableOpacity onPress={()=>{this.setState({srj4:j4})}} >
       <Image style={styles.j4style} source={this.state.srj4} resizeMode={'contain'}/>
       </TouchableOpacity >
       </View>
       </View>
       <TouchableOpacity onPress={()=>{this.setState({srj5:j5})}} style={styles.j5containerstyle}>
       <Image style={styles.j5Style} source={this.state.srj5} resizeMode={'contain'}/>
       </TouchableOpacity >
       </ImageBackground>
    )


  }
}
export default ChooseChapter1Screen;
