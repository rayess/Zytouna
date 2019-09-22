import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';
import {logo} from '../../assets/icons';

import styles from './splash-screen-styles';

import {StackActions, NavigationActions} from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Home'})],
});

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(resetAction);
    }, 50);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Zaytouna'}</Text>
        <Text style={styles.title}>{'Adventure App'}</Text>
        <Image style={styles.logo} resizeMode={'contain'} source={logo} />
      </View>
    );
  }
}

const mapStateToProps = ({toggle}) => {
  const tog = toggle.toggle;
  return {
    tog,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(SplashScreen);
