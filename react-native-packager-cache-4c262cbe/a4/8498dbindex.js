'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.swipeDirections=undefined;

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');

var swipeDirections=exports.swipeDirections={
SWIPE_UP:'SWIPE_UP',
SWIPE_DOWN:'SWIPE_DOWN',
SWIPE_LEFT:'SWIPE_LEFT',
SWIPE_RIGHT:'SWIPE_RIGHT'};


var swipeConfig={
velocityThreshold:0.3,
directionalOffsetThreshold:80};


function isValidSwipe(velocity,velocityThreshold,directionalOffset,directionalOffsetThreshold){
return Math.abs(velocity)>velocityThreshold&&Math.abs(directionalOffset)<directionalOffsetThreshold;
}var

GestureRecognizer=function(_Component){babelHelpers.inherits(GestureRecognizer,_Component);

function GestureRecognizer(props,context){babelHelpers.classCallCheck(this,GestureRecognizer);var _this=babelHelpers.possibleConstructorReturn(this,(GestureRecognizer.__proto__||Object.getPrototypeOf(GestureRecognizer)).call(this,
props,context));
_this.swipeConfig=babelHelpers.extends(swipeConfig,props.config);return _this;
}babelHelpers.createClass(GestureRecognizer,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){
this.swipeConfig=babelHelpers.extends(swipeConfig,props.config);
}},{key:'componentWillMount',value:function componentWillMount()

{
var responderEnd=this._handlePanResponderEnd.bind(this);
var shouldSetResponder=this._handleShouldSetPanResponder.bind(this);
this._panResponder=_reactNative.PanResponder.create({
onStartShouldSetPanResponder:shouldSetResponder,
onMoveShouldSetPanResponder:shouldSetResponder,
onPanResponderRelease:responderEnd,
onPanResponderTerminate:responderEnd});

}},{key:'_handleShouldSetPanResponder',value:function _handleShouldSetPanResponder(

evt,gestureState){
return evt.nativeEvent.touches.length===1&&!this._gestureIsClick(gestureState);
}},{key:'_gestureIsClick',value:function _gestureIsClick(

gestureState){
return Math.abs(gestureState.dx)<5&&Math.abs(gestureState.dy)<5;
}},{key:'_handlePanResponderEnd',value:function _handlePanResponderEnd(

evt,gestureState){
var swipeDirection=this._getSwipeDirection(gestureState);
this._triggerSwipeHandlers(swipeDirection,gestureState);
}},{key:'_triggerSwipeHandlers',value:function _triggerSwipeHandlers(

swipeDirection,gestureState){var _props=
this.props,onSwipe=_props.onSwipe,onSwipeUp=_props.onSwipeUp,onSwipeDown=_props.onSwipeDown,onSwipeLeft=_props.onSwipeLeft,onSwipeRight=_props.onSwipeRight;var
SWIPE_LEFT=swipeDirections.SWIPE_LEFT,SWIPE_RIGHT=swipeDirections.SWIPE_RIGHT,SWIPE_UP=swipeDirections.SWIPE_UP,SWIPE_DOWN=swipeDirections.SWIPE_DOWN;
onSwipe&&onSwipe(swipeDirection,gestureState);
switch(swipeDirection){
case SWIPE_LEFT:
onSwipeLeft&&onSwipeLeft(gestureState);
break;
case SWIPE_RIGHT:
onSwipeRight&&onSwipeRight(gestureState);
break;
case SWIPE_UP:
onSwipeUp&&onSwipeUp(gestureState);
break;
case SWIPE_DOWN:
onSwipeDown&&onSwipeDown(gestureState);
break;}

}},{key:'_getSwipeDirection',value:function _getSwipeDirection(

gestureState){var
SWIPE_LEFT=swipeDirections.SWIPE_LEFT,SWIPE_RIGHT=swipeDirections.SWIPE_RIGHT,SWIPE_UP=swipeDirections.SWIPE_UP,SWIPE_DOWN=swipeDirections.SWIPE_DOWN;var
dx=gestureState.dx,dy=gestureState.dy;
if(this._isValidHorizontalSwipe(gestureState)){
return dx>0?
SWIPE_RIGHT:
SWIPE_LEFT;
}else if(this._isValidVerticalSwipe(gestureState)){
return dy>0?
SWIPE_DOWN:
SWIPE_UP;
}
return null;
}},{key:'_isValidHorizontalSwipe',value:function _isValidHorizontalSwipe(

gestureState){var
vx=gestureState.vx,dy=gestureState.dy;var _swipeConfig=
this.swipeConfig,velocityThreshold=_swipeConfig.velocityThreshold,directionalOffsetThreshold=_swipeConfig.directionalOffsetThreshold;
return isValidSwipe(vx,velocityThreshold,dy,directionalOffsetThreshold);
}},{key:'_isValidVerticalSwipe',value:function _isValidVerticalSwipe(

gestureState){var
vy=gestureState.vy,dx=gestureState.dx;var _swipeConfig2=
this.swipeConfig,velocityThreshold=_swipeConfig2.velocityThreshold,directionalOffsetThreshold=_swipeConfig2.directionalOffsetThreshold;
return isValidSwipe(vy,velocityThreshold,dx,directionalOffsetThreshold);
}},{key:'render',value:function render()

{
return _react2.default.createElement(_reactNative.View,babelHelpers.extends({},this.props,this._panResponder.panHandlers));
}}]);return GestureRecognizer;}(_react.Component);
;exports.default=

GestureRecognizer;