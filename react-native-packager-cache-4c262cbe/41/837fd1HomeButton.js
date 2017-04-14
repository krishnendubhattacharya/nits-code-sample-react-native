Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');exports.default=











HomeButton=function HomeButton(props){
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'Hello, friend.'),


_react2.default.createElement(_reactNative.TextInput,{
style:styles.textinputstyle,
keyboardType:'numeric',
placeholder:'PHONE NUMBER'}),




_react2.default.createElement(_reactNative.TouchableHighlight,{style:styles.fullWidthButton,onPress:onButtonPress},
_react2.default.createElement(_reactNative.Text,{style:styles.fullWidthButtonText},'LOG IN'))));



};
var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,

flexDirection:'column',
justifyContent:'center',
alignItems:'center'},

fullWidthButton:{
backgroundColor:'#444445',
height:50,
width:200,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
borderRadius:10,
borderWidth:1,
borderColor:'#444445'},

fullWidthButtonText:{
fontSize:24,
color:'white',
fontFamily:'Quicksand_Light'},

stretch:{
justifyContent:'center',
height:80,
width:100,
marginTop:-50},

textstyle:{
marginTop:100,
color:'#ffffff',
fontSize:20,
fontFamily:'Quicksand_Light'},

textinputstyle:{
marginTop:100,
height:50,
width:200,
fontSize:25,
color:'#ffffff',
fontFamily:'Quicksand_Light'}});