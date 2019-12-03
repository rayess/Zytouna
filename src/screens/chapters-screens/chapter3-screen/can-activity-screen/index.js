import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {BG13} from '../../../../assets/_images';
import {tennis,herideabike,icanstake,icantskateboard} from '../../../../assets/icons';
import {Wrapper,LessonHeader,CanActivity,QACanActivity,ActivityTitle,ActivityFooter,ChooseBoxActivity} from '../../../../components/activity-components';
import styles from './can-activity-screen-styles'
const canactivities=[
  {source:icanstake,activitytitle:'choose the right answer',answer1:'I can"t stake',answer2:'I can stake',rightanswer:2},
  {source:herideabike ,activitytitle:'Can he ride a bike ?' ,answer1:'No, he can"t ',answer2:'Yes, he can',rightanswer:1},
  {source:tennis ,activitytitle:'Can she play tennis ?' ,answer1:'Yes, she can',answer2:'No, she can"t',rightanswer:1},

];
qacanactivities=[
  {source:tennis ,canquestion:'-Can she play tennis ?' ,cananswer:'-Yes, she '},
  {source:herideabike ,canquestion:'-Can he ride a bike ?' ,cananswer:'-No, he '},
  {source:icantskateboard}

]
class CanActivityScreen extends React.Component {
render(){
  return(
    <Wrapper source={BG13}>
    <LessonHeader name={this.props.name} title={'Activities'} onPress={()=>this.props.navigation.goBack()}/>
    <View style={styles.container}>
    <FlatList
    contentContainerStyle={styles.flatliststyle}
      data={canactivities}
      renderItem={({item, index}) => (
        <ChooseBoxActivity source={item.source} activitytitle={item.activitytitle} answer1={item.answer1} answer2={item.answer2} rightanswer={item.rightanswer}/>
      )}
      numColumns={1}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
    />
    </View>
    <View style={{height:150}} >
    <ActivityFooter finishpress={()=>this.props.navigation.navigate('foodlessonscreen')} backpress={()=>this.props.navigation.goBack()} />
    </View>
    </Wrapper>
  );
}
}
const mapStateToProps = ({activestudent}) => {
  const name = activestudent.name;
  return {name};
};

export default connect(
  mapStateToProps,
  actions,)(CanActivityScreen);
