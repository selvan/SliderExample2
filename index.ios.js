/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
} = React;

var SliderExample2 = React.createClass({

  getInitialState: function() {
    return {
      showLeftPane: false,
    };
  },

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });  
  },

_handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down?
    return true;
  },

  _handleMoveShouldSetPanResponder:function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
    // this._highlight();
  },

  _handlePanResponderMove:function(e: Object, gestureState: Object) {
    // console.log("x0, y0 : " + ( gestureState.x0 + ", "  + gestureState.y0));
    // console.log("moveX, moveY : " + ( gestureState.moveX + ", "  + gestureState.moveY));
    // console.log("dx, dy : " + ( gestureState.dx + ", "  + gestureState.dy));
    if(gestureState.dx < -10 && this.state.showLeftPane) {
        this.setState({ showLeftPane: !this.state.showLeftPane, })
    }
  },

  _handlePanResponderEnd:function(e: Object, gestureState: Object) {
    // this._unHighlight();
  }, 

  render:function() {

    var leftPane;
    if(this.state.showLeftPane) {
      leftPane = (
        <View style={styles.leftpane} {...this._panResponder.panHandlers}>
            <Text>
              Left pane
            </Text>  
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.rightpane}>
          <Text onPress={() => {
              this.setState({ showLeftPane: !this.state.showLeftPane, });
            }}> = </Text>
          <Text>Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane Right Pane </Text>
        </View>
        {leftPane}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderColor: "#000000",
    borderWidth: 2,
  },

  leftpane: {
    borderColor: "#000000",
    borderWidth: 2,
    marginTop: 20,
    width: 150,
    position: 'absolute',
    left: 0,
    top: 0,    
  },

  rightpane: {
    flex: 1,
    flexDirection: 'row',
    borderColor: "#000000",
    borderWidth: 2,
    marginTop: 20,
  },
});

AppRegistry.registerComponent('SliderExample2', () => SliderExample2);
