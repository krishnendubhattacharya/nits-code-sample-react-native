Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var












Swipe=function(_Component){babelHelpers.inherits(Swipe,_Component);
function Swipe(){babelHelpers.classCallCheck(this,Swipe);return babelHelpers.possibleConstructorReturn(this,(Swipe.__proto__||Object.getPrototypeOf(Swipe)).call(this));

}babelHelpers.createClass(Swipe,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.swipeimage},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')})),


_react2.default.createElement(_reactNative.View,{style:styles.swipecontent},
_react2.default.createElement(_reactNative.View,{style:styles.swipecontentleft},

_react2.default.createElement(_reactNative.Text,{style:styles.uparrow},'\uF3D2\uF3D2\uF3D2'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'If you don\'t like'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'what I mind'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'swipe left')),





_react2.default.createElement(_reactNative.View,{style:styles.swipecontentright},
_react2.default.createElement(_reactNative.Text,{style:styles.uparrow},'\uF3D3\uF3D3\uF3D3'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'If you like'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'what I mind'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'swipe right'))),




_react2.default.createElement(_reactNative.View,{style:styles.swipebottom},
_react2.default.createElement(_reactNative.View,{style:styles.swipebottomleft},
_react2.default.createElement(_reactNative.Text,{style:styles.bootomarrow},'\uF3D2')),



_react2.default.createElement(_reactNative.View,{style:styles.swipebottommiddle},
_react2.default.createElement(_reactNative.Text,{style:styles.bottomtext},'Explore for yourself')),



_react2.default.createElement(_reactNative.View,{style:styles.swipebottomright},
_react2.default.createElement(_reactNative.Text,{style:styles.bootomarrow},'\uF3D3')))));







}}]);return Swipe;}(_react.Component);exports.default=Swipe;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,


backgroundColor:'#729299',
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
marginTop:20,
textAlign:'center',
fontSize:22,
marginTop:35}});