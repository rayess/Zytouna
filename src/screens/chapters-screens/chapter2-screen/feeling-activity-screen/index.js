import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, DeterminateWordActivity, Wrapper,ActivityFooter,ActivityTitle,ChooseBoxActivity} from '../../../../components/activity-components';
import {notheyarent,yestheyare,wertired,theyrthirstu,} from '../../../../assets/icons';
import {BG13} from '../../../../assets/_images';
import styles from './feeling-activity-screen';
const feelingdata = [
  {source: wertired,activitytitle:'choose the right answer',answer1:'We are tired',answer2:'we are thirsty',rightanswer:1},
  {source: yestheyare, activitytitle:'Are they hot ?' ,answer1:'No,they aren"t ', answer2:'Yes, they are',rightanswer:2},

];
const askingaboutfeelingdata=[
  {source: theyrthirstu},
  {source: notheyarent},
];
class FeelingActivity extends React.Component {
  render() {
    return (
      <Wrapper source={BG13}>
      <LessonHeader name={this.props.name} title={'Feeling and emotions'} onPress={()=>this.props.navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={feelingdata}
          renderItem={({item, index}) => (
         <ChooseBoxActivity source={item.source} activitytitle={item.activitytitle} answer1={item.answer1} answer2={item.answer2} rightanswer={item.rightanswer}/>
          )}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        </View>
        <View style={{height:150}}>
        <ActivityFooter finishpress={()=>this.props.navigation.navigate('activitieslessonscreen')} backpress={()=>this.props.navigation.goBack()} />
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
  actions,) (FeelingActivity);
