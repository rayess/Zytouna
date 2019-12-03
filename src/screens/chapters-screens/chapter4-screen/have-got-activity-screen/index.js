import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../../../redux/actions';
import {BG13} from '../../../../assets/_images';
import {havemilkshake,havenotfries} from '../../../../assets/icons';
import {Wrapper,LessonHeader,HaveGotActivity,ActivityFooter,ActivityTitle} from '../../../../components/activity-components';
import styles from './have-got-activity-screen'
const havegotctivities=[
  {source:havemilkshake , subject:'You ', havequestion:'a milkshake ?' ,haveanswer:'-Yes, I '},
  {source:havenotfries , subject:'You ', havequestion:'fries ?' ,haveanswer:'-No, I '},

]
class HaveGotActivityScreen extends React.Component {
render(){
  return(
    <Wrapper source={BG13}>
    <LessonHeader name={this.props.name} title={'Food'} onPress={()=>this.props.navigation.goBack()} />
    <View style={styles.container}>
    <ActivityTitle activitytitle={'Ask and answer questions about what people have got'} />
    <FlatList
    contentContainerStyle={styles.flatliststyle}
      data={havegotctivities}
      renderItem={({item, index}) => (
        <HaveGotActivity source={item.source} subject={item.subject}  havequestion={item.havequestion} haveanswer={item.haveanswer} />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
    />
    </View>
    <View style={{height:100}}>
    <ActivityFooter finishpress={()=>this.props.navigation.navigate('schoolthingscreen')} backpress={()=>this.props.navigation.goBack()} />
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
  actions,)(HaveGotActivityScreen);
