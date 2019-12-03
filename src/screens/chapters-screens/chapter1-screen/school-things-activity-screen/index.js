import React from 'react';
import {FlatList,View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {LessonHeader, DeterminateWordActivity, Wrapper,ActivityFooter,ActivityTitle,DraggableItem} from '../../../../components/activity-components';
import {pc,table,saboura,classroom,poster,drawers,khzena,trousse,cdplayer,} from '../../../../assets/icons';
import {BG13} from '../../../../assets/_images';
import styles from './school-things-activity-screen';
const schoolthings = [
  {source: classroom},
  {source: pc},
  {source: classroom},
  {source: poster},
];
class SchoolThingsActivity extends React.Component {
  render() {
    return (
      <Wrapper source={BG13}>
      <LessonHeader name={this.props.name} title={'School things'} onPress={()=>this.props.navigation.goBack()} />
      <View style={styles.container}>
      <ActivityTitle activitytitle={'fill in the blancks'} />
      <View style={{flexDirection: 'row',zIndex: 2}}>
      <DraggableItem  text={'This is a computer'}/><DraggableItem  text={'These are books'}/><DraggableItem  text={'These are posters'}/><DraggableItem  text={'This is a computer'}/>
      </View>
      <FlatList
          data={schoolthings}
          renderItem={({item, index}) => (
         <DeterminateWordActivity source={item.source} />
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
        </View>
        <View style={{height:150}}>
        <ActivityFooter finishpress={()=>this.props.navigation.navigate('feelinglessonscreen')} backpress={()=>this.props.navigation.goBack()} />
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
  actions,)(SchoolThingsActivity);
