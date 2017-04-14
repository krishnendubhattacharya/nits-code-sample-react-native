Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');exports.default=













HeaderMenu=function HeaderMenu(props){


return(

_react2.default.createElement(_reactNative.View,{style:styles.hesdercontainer},
_react2.default.createElement(_reactNative.View,{style:styles.firstrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'newest')),

_react2.default.createElement(_reactNative.View,{style:styles.secondrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'trending')),

_react2.default.createElement(_reactNative.View,{style:styles.thirdrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'kowallo')),

_react2.default.createElement(_reactNative.View,{style:styles.fourthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'relevant')),

_react2.default.createElement(_reactNative.View,{style:styles.fifthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'friends'))));





};
var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
hesdercontainer:{
flex:1,
flexDirection:'row'},

firstrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#8CA89A',
flexDirection:'column',
justifyContent:'center',
alignItems:'center'},

secondrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#A98A88',
justifyContent:'center',
alignItems:'center'},

thirdrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#8EA5AB',
justifyContent:'center',
alignItems:'center'},

fourthrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#8B93A8',
justifyContent:'center',
alignItems:'center'},

fifthrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#A9A38B',
justifyContent:'center',
alignItems:'center'},

imgcss:{
justifyContent:'center',
height:28,
width:35},

textcss:{
justifyContent:'center',
color:'#ffffff'}});