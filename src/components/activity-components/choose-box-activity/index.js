import React from 'react';
import {View,Image,TouchableOpacity,Text} from 'react-native';
import colors from '../../../assets/color';
import styles from './choose-box-activity';
class ChooseBoxActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1Color:'white',
      answer2Color:'white',

    }
  }
   _pressAnswer1=istrue =>{
     console.log(istrue);
     if (istrue)
       {
         this.setState({answer1Color:'green'})}
       else
      {this.setState({answer1Color:'red'})}

      }
      _pressAnswer2=istrue =>{
        console.log(istrue);
        if (istrue)
          {
            this.setState({answer2Color:'green'})}
          else
         {this.setState({answer2Color:'red'})}

         }
  render(){
  return (
    <View style={styles.container} >
    <View style={styles.titlecontainer}>
    <Text style={[styles.textstyle,{color: colors.bleu0}]}>{this.props.activitytitle}</Text>
    </View>
    <Image source={this.props.source} style={styles.imagestyle} resizeMode={'contain'}/>
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity style={[styles.answercontainer,{backgroundColor:this.state.answer1Color}]} onPress={()=>{
      console.log(this.props.rightanswer);
      if (this.props.rightanswer==1)
      {this._pressAnswer1(true)
    }
    else
    {this._pressAnswer1(false)}
  }}>
    <Text style={[styles.textstyle,{position: 'absolute',color: '#000000'}]}>{this.props.answer1}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.answercontainer,{backgroundColor:this.state.answer2Color}]} onPress={()=>{
      console.log(this.props.rightanswer);
      if (this.props.rightanswer==2)
      {this._pressAnswer2(true)
    }
    else
    {this._pressAnswer2(false)}
  }}>
    <Text style={[styles.textstyle,{position: 'absolute',color: '#000000'}]}>{this.props.answer2}</Text>
    </TouchableOpacity>
    </View>
    </View>

  )
}
}
export default ChooseBoxActivity;
