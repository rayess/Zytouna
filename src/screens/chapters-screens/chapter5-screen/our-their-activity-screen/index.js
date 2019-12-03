import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {BG13} from '../../../../assets/_images';
import {thesearetshirts,those,thesearebags,playground,artroom,computerroom} from '../../../../assets/icons';
import {OurTheirActivity,Wrapper,LessonHeader,DeterminateWordActivity,ActivityTitle,ActivityFooter} from '../../../../components/activity-components';
import styles from './our-their-activity-screen-styles'
const ourtheiractivities=[
  {label:'bags',ourimagesource:thesearebags, theirimagesource:those},
  {label:'T-shirts',ourimagesource:thesearetshirts, theirimagesource:those},

];
schoolroomsactivities=[
  {source:playground},
  {source:playground},
  {source:artroom},
  {source:computerroom},
]
class OurTheirActivityScreen extends React.Component {
render(){
  return(
    <Wrapper source={BG13}>
    <LessonHeader name={this.props.name} title={'School Subjects'} onPress={()=>this.props.navigation.goBack()}/>
    <View style={styles.container}>
    <ActivityTitle activitytitle={'School rooms'} />
    <FlatList
      data={schoolroomsactivities}
      renderItem={({item, index}) => (
        <DeterminateWordActivity source={item.source} />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
    />
    <ActivityTitle activitytitle={'Write Sentences with "our" and "their" '} />
    {
      ourtheiractivities.map(activity => {
         return (
           <OurTheirActivity label={activity.label} ourimagesource={activity.ourimagesource} theirimagesource={activity.theirimagesource} />
          )
      })
  }
  </View>
  <View style={{height:250}} >
  <ActivityFooter finishpress={()=>this.props.navigation.navigate('partylessonscreen')} backpress={()=>this.props.navigation.goBack()} />
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
  actions,)(OurTheirActivityScreen);
