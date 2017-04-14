Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _reactNativeSwipeGestures=require('react-native-swipe-gestures');var _reactNativeSwipeGestures2=babelHelpers.interopRequireDefault(_reactNativeSwipeGestures);var

SwipeThird=function(_Component){babelHelpers.inherits(SwipeThird,_Component);
function SwipeThird(){babelHelpers.classCallCheck(this,SwipeThird);return babelHelpers.possibleConstructorReturn(this,(SwipeThird.__proto__||Object.getPrototypeOf(SwipeThird)).call(this));


}babelHelpers.createClass(SwipeThird,[{key:'onSwipeUp',value:function onSwipeUp(
gestureState){


this.props.navigator.replace({
name:'SwipeFourth'});

}},{key:'onSwipeDown',value:function onSwipeDown(

gestureState){


this.props.navigator.replace({
name:'SwipeFourth'});

}},{key:'onSwipeLeft',value:function onSwipeLeft(

gestureState){




}},{key:'onSwipeRight',value:function onSwipeRight(

gestureState){



}},{key:'onButtonClk',value:function onButtonClk()
{

this.props.navigator.replace({
name:'SwipeFourth'});

}},{key:'onSwipe',value:function onSwipe(

gestureName,gestureState){var
SWIPE_UP=_reactNativeSwipeGestures.swipeDirections.SWIPE_UP,SWIPE_DOWN=_reactNativeSwipeGestures.swipeDirections.SWIPE_DOWN,SWIPE_LEFT=_reactNativeSwipeGestures.swipeDirections.SWIPE_LEFT,SWIPE_RIGHT=_reactNativeSwipeGestures.swipeDirections.SWIPE_RIGHT;
this.setState({gestureName:gestureName});
switch(gestureName){
case SWIPE_UP:
this.setState({backgroundColor:'red'});
break;
case SWIPE_DOWN:
this.setState({backgroundColor:'green'});
break;}

}},{key:'render',value:function render()
{var _this2=this;
var config={
velocityThreshold:0.3,
directionalOffsetThreshold:80};

return(
_react2.default.createElement(_reactNativeSwipeGestures2.default,{
onSwipe:function onSwipe(direction,state){return _this2.onSwipe(direction,state);},
onSwipeUp:function onSwipeUp(state){return _this2.onSwipeUp(state);},
onSwipeDown:function onSwipeDown(state){return _this2.onSwipeDown(state);},
config:config,
style:{
flex:1,
backgroundColor:'#ffffff'}},


_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.swipeimage},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')})),


_react2.default.createElement(_reactNative.View,{style:styles.swipecontent},

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'If you find an item'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'you really like'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'double tap to save it'),


_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this.onButtonClk.bind(this)},
_react2.default.createElement(_reactNative.Image,{
style:styles.upimage,
source:require('./Images/touch.png')}))))));










}}]);return SwipeThird;}(_react.Component);exports.default=SwipeThird;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,


backgroundColor:'#73939A',
height:_reactNative.Dimensions.get("window").height},

swipebottom:{


flexDirection:'row',
justifyContent:'flex-start',
alignItems:'flex-start'},


swipeimage:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
marginTop:50},


fullWidthButton:{
backgroundColor:'#444445',
height:50,
width:220,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
borderRadius:10,
borderWidth:1,
borderColor:'#444445'},

fullWidthButtonText:{
fontSize:26,
color:'white',
fontFamily:'Quicksand_Light',
fontWeight:'bold'},

stretch:{
justifyContent:'center',
height:80,
width:100,
marginTop:30},

textstyle:{
marginTop:10,

color:'#ffffff',
fontSize:18,
textAlign:'center',
fontFamily:'Quicksand_Light'},

textstyle1:{
color:'#ffffff',

fontSize:18,
textAlign:'center',
fontFamily:'Quicksand_Light'},

textstyle2:{
color:'#ffffff',
fontSize:18,
textAlign:'center',
fontFamily:'Quicksand_Light'},

textinputstyle:{
marginTop:80,
height:50,
width:200,
fontSize:25,
color:'#ffffff',
fontFamily:'Quicksand_Light',
textAlign:'center'},


uparrow:{
fontFamily:'ionicons',
fontSize:30,
marginTop:15,

textAlign:'center'},

upimage:{
justifyContent:'center',
height:60,
width:40,
marginTop:40,
alignItems:'center'},

bootomarrowleftright:{
fontFamily:'ionicons',
fontSize:35,
marginTop:5,
color:'#ffffff',
textAlign:'center'},

bootomarrow:{
fontFamily:'ionicons',
fontSize:70,
marginTop:15,
color:'#ffffff',
textAlign:'center'},

swipecontent:{

flexDirection:'column',

justifyContent:'center',
alignItems:'center',
marginTop:50},

swipecontentleft:{
width:_reactNative.Dimensions.get("window").width/2.1,

marginRight:5,
justifyContent:'center',
alignItems:'center'},


swipecontentright:{
width:_reactNative.Dimensions.get("window").width/2.1,

marginLeft:5,
justifyContent:'center',
alignItems:'center'},


swipebottomleft:{
width:50},

swipebottommiddle:{
width:200},



swipebottomright:{
width:50},

bottomtext:{
marginTop:20,
textAlign:'center',
fontSize:22,
marginTop:35}});