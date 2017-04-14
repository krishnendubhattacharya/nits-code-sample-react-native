Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var












Login=function(_Component){babelHelpers.inherits(Login,_Component);
function Login(){babelHelpers.classCallCheck(this,Login);var _this=babelHelpers.possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this));

_this.state={
phnno:''};return _this;

}babelHelpers.createClass(Login,[{key:'onButtonClk',value:function onButtonClk(

event){
var phn_no=this.state.phnno;


if(this.state.phnno){
this.props.navigator.replace({
name:'Passcode'});



}else{
_reactNative.Alert.alert('Please enter mobile number');
}
}},{key:'render',value:function render()
{var _this2=this;
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'Hello, friend.'),


_react2.default.createElement(_reactNative.TextInput,{
ref:function ref(el){_this2.phnno=el;},
onChangeText:function onChangeText(phnno){return _this2.setState({phnno:phnno});},
value:this.state.phnno,
style:styles.textinputstyle,
keyboardType:'numeric',
placeholder:'PHONE NUMBER'}),




_react2.default.createElement(_reactNative.TouchableHighlight,{style:styles.fullWidthButton,onPress:this.onButtonClk.bind(this)},
_react2.default.createElement(_reactNative.Text,{style:styles.fullWidthButtonText},'LOG IN'))));



}}]);return Login;}(_react.Component);exports.default=Login;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#73939A',
height:_reactNative.Dimensions.get("window").height},

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
fontFamily:'Quicksand_Light',
fontWeight:'bold'},

stretch:{
justifyContent:'center',
height:80,
width:100,
marginTop:10},

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