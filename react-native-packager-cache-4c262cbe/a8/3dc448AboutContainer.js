Object.defineProperty(exports,"__esModule",{value:true});
var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var












AboutContainer=function(_Component){babelHelpers.inherits(AboutContainer,_Component);
function AboutContainer(){babelHelpers.classCallCheck(this,AboutContainer);return babelHelpers.possibleConstructorReturn(this,(AboutContainer.__proto__||Object.getPrototypeOf(AboutContainer)).call(this));

}babelHelpers.createClass(AboutContainer,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'I just texted you a'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'super secret passcode.'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Enter it below!'),


_react2.default.createElement(_reactNative.TextInput,{
style:styles.textinputstyle,
keyboardType:'numeric',
placeholder:'PASSCODE'}),




_react2.default.createElement(_reactNative.TouchableHighlight,{style:styles.fullWidthButton,onPress:onButtonPress},
_react2.default.createElement(_reactNative.Text,{style:styles.fullWidthButtonText},'START'))));



}}]);return AboutContainer;}(_react.Component);exports.default=AboutContainer;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#729299',
height:_reactNative.Dimensions.get("window").height},

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
marginTop:80,
color:'#ffffff',
fontSize:22,
fontFamily:'Quicksand_Light'},

textstyle1:{
color:'#ffffff',
fontSize:22,
fontFamily:'Quicksand_Light'},

textstyle2:{
color:'#ffffff',
fontSize:22,
fontFamily:'Quicksand_Light'},

textinputstyle:{
marginTop:80,
height:50,
width:200,
fontSize:25,
color:'#ffffff',
fontFamily:'Quicksand_Light',
textAlign:'center'}});