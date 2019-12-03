import React from 'react';
import {Text,View,PanResponder,Animated} from 'react-native';
import styles from './draggable-item';
import MovableView from 'react-native-movable-view'
import Draggable from 'react-native-draggable';
class DraggableItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    };
  }
    componentWillMount() {
      // Add a listener for the delta value change

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderGrant: (event, gesture) => {
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value
                });
                console.log(gesture.dy);
                this.state.pan.setValue({ x: 0, y: 0 });
            },
            onPanResponderRelease: (e, gesture) => {
                this.state.pan.flattenOffset();
                console.log(gesture.dy);
                //this.state.pan.setValue({ x: 0, y: 0 });
            }
    });
}


  render() {
    const { text, ...props } = this.props;
    return (
      <Animated.View {...this._panResponder.panHandlers} style={[styles.parentcontainer,this.state.pan.getLayout()] }>
      <Text style={styles.textstyle}>{text}</Text>
      </Animated.View>
    )
  }
}
export default DraggableItem;
