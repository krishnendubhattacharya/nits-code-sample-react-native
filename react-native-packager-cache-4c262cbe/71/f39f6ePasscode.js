Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var














Passcode=function(_Component){babelHelpers.inherits(Passcode,_Component);
function Passcode(){babelHelpers.classCallCheck(this,Passcode);var _this=babelHelpers.possibleConstructorReturn(this,(Passcode.__proto__||Object.getPrototypeOf(Passcode)).call(this));

_this.state={
passcod:''};return _this;

}babelHelpers.createClass(Passcode,[{key:'onButtonClk',value:function onButtonClk(

event){
var pass_cod=this.state.passcod;


if(this.state.passcod=='123456'){


this.props.navigator.replace({
name:'SwipeUpDown'});


}else{
_reactNative.Alert.alert('Wrong passcode');
}
}},{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')}),



_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'I just texted you a'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'super secret passcode.'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Enter it below!'),


_react2.default.createElement(_reactNative.TextInput,{
ref:function ref(el){_this2.passcod=el;},
onChangeText:function onChangeText(passcod){return _this2.setState({passcod:passcod});},
value:this.state.passcod,
style:styles.textinputstyle,
keyboardType:'numeric',
placeholder:'PASSCODE'}),




_react2.default.createElement(_reactNative.TouchableHighlight,{style:styles.fullWidthButton,onPress:this.onButtonClk.bind(this)},
_react2.default.createElement(_reactNative.Text,{style:styles.fullWidthButtonText},'START'))));



}}]);return Passcode;}(_react.Component);exports.default=Passcode;


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

shopstretch:{
justifyContent:'center',
height:20,
width:25,
marginTop:80},

textstyle:{
marginTop:10,
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