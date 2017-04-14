Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _reactNativeSwipeGestures=require('react-native-swipe-gestures');var _reactNativeSwipeGestures2=babelHelpers.interopRequireDefault(_reactNativeSwipeGestures);var

SwipeFirst=function(_Component){babelHelpers.inherits(SwipeFirst,_Component);
function SwipeFirst(){babelHelpers.classCallCheck(this,SwipeFirst);return babelHelpers.possibleConstructorReturn(this,(SwipeFirst.__proto__||Object.getPrototypeOf(SwipeFirst)).call(this));

}babelHelpers.createClass(SwipeFirst,[{key:'onSwipeUp',value:function onSwipeUp(


gestureState){



}},{key:'onSwipeDown',value:function onSwipeDown(

gestureState){


}},{key:'onSwipeLeft',value:function onSwipeLeft(

gestureState){


this.props.navigator.replace({
name:'SwipeSecond'});


}},{key:'onSwipeRight',value:function onSwipeRight(

gestureState){


this.props.navigator.replace({
name:'SwipeSecond'});

}},{key:'onSwipe',value:function onSwipe(

gestureName,gestureState){var
SWIPE_UP=_reactNativeSwipeGestures.swipeDirections.SWIPE_UP,SWIPE_DOWN=_reactNativeSwipeGestures.swipeDirections.SWIPE_DOWN,SWIPE_LEFT=_reactNativeSwipeGestures.swipeDirections.SWIPE_LEFT,SWIPE_RIGHT=_reactNativeSwipeGestures.swipeDirections.SWIPE_RIGHT;
this.setState({gestureName:gestureName});
switch(gestureName){
case SWIPE_LEFT:
this.setState({backgroundColor:'blue'});

break;
case SWIPE_RIGHT:
this.setState({backgroundColor:'yellow'});
break;}

}},{key:'render',value:function render()





{var _this2=this;

var config={
velocityThreshold:0.3,
directionalOffsetThreshold:80};

return(
_react2.default.createElement(_reactNativeSwipeGestures2.default,{
onSwipe:function onSwipe(direction,state){return _this2.onSwipe(direction,state);},
onSwipeLeft:function onSwipeLeft(state){return _this2.onSwipeLeft(state);},
onSwipeRight:function onSwipeRight(state){return _this2.onSwipeRight(state);},
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
_react2.default.createElement(_reactNative.View,{style:styles.swipecontentleft},


_react2.default.createElement(_reactNative.Image,{
style:styles.upimage,
source:require('./Images/t-d.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'If you dislike'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'what you see'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'swipe left'),


_react2.default.createElement(_reactNative.Text,{style:styles.bootomarrowleftright},'\uF3D2')),





_react2.default.createElement(_reactNative.View,{style:styles.swipecontentright},
_react2.default.createElement(_reactNative.Image,{
style:styles.upimage,
source:require('./Images/tu.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'If you like'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'what you see'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'swipe right'),


_react2.default.createElement(_reactNative.Text,{style:styles.bootomarrowleftright},'\uF3D3'))))));









}}]);return SwipeFirst;}(_react.Component);exports.default=SwipeFirst;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,


backgroundColor:'#729888',
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
height:20,
width:20,
marginTop:15,
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

flexDirection:'row',

justifyContent:'flex-start',
alignItems:'flex-start',
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