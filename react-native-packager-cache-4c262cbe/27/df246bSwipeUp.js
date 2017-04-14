Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var












SwipeUp=function(_Component){babelHelpers.inherits(SwipeUp,_Component);
function SwipeUp(){babelHelpers.classCallCheck(this,SwipeUp);return babelHelpers.possibleConstructorReturn(this,(SwipeUp.__proto__||Object.getPrototypeOf(SwipeUp)).call(this));

}babelHelpers.createClass(SwipeUp,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.swipeimage},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')})),


_react2.default.createElement(_reactNative.View,{style:styles.swipecontent},
_react2.default.createElement(_reactNative.View,{style:styles.swipecontentleft},

_react2.default.createElement(_reactNative.Text,{style:styles.uparrow},'\uF3D8'),


_react2.default.createElement(_reactNative.Text,{style:styles.uparrow1},'\uF3D8'),


_react2.default.createElement(_reactNative.Text,{style:styles.uparrow2},'\uF3D8'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'To save'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'what I find'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'swipe up')),





_react2.default.createElement(_reactNative.View,{style:styles.swipecontentright},
_react2.default.createElement(_reactNative.Text,{style:styles.uparrow},'\uF3D0'),


_react2.default.createElement(_reactNative.Text,{style:styles.uparrow1},'\uF3D0'),


_react2.default.createElement(_reactNative.Text,{style:styles.uparrow2},'\uF3D0'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'To skip'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'what I find'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'swipe down'))),




_react2.default.createElement(_reactNative.View,{style:styles.swipebottom},

_react2.default.createElement(_reactNative.Text,{style:styles.bootomarrow},'\uF3D8'),



_react2.default.createElement(_reactNative.Text,{style:styles.bottomtext},'EXPLORE FOR YOURSELF'),



_react2.default.createElement(_reactNative.Text,{style:styles.bootomarrow},'\uF3D0'))));







}}]);return SwipeUp;}(_react.Component);exports.default=SwipeUp;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,


backgroundColor:'#729299',
height:_reactNative.Dimensions.get("window").height},

swipebottom:{


flexDirection:'column',
justifyContent:'center',
alignItems:'center'},


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
marginTop:10},

textstyle:{
marginTop:10,

color:'#ffffff',
fontSize:20,
textAlign:'center',
fontFamily:'Quicksand_Light'},

textstyle1:{
color:'#ffffff',

fontSize:20,
textAlign:'center',
fontFamily:'Quicksand_Light'},

textstyle2:{
color:'#ffffff',

fontSize:20,
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

uparrow1:{
fontFamily:'ionicons',
fontSize:30,
marginTop:-20,

textAlign:'center'},

uparrow2:{
fontFamily:'ionicons',
fontSize:30,
marginTop:-20,


textAlign:'center'},

bootomarrow:{
fontFamily:'ionicons',
fontSize:70,
marginTop:0,
color:'#ffffff',
textAlign:'center'},

swipecontent:{

flexDirection:'row',

justifyContent:'flex-start',
alignItems:'flex-start',
marginTop:50},

swipecontentleft:{
width:_reactNative.Dimensions.get("window").width/2.1,

marginRight:5},


swipecontentright:{
width:_reactNative.Dimensions.get("window").width/2.1,

marginLeft:5},


swipebottomleft:{
width:50},

swipebottommiddle:{
width:200},



swipebottomright:{
width:50},

bottomtext:{
marginTop:0,
textAlign:'center',
fontSize:25}});