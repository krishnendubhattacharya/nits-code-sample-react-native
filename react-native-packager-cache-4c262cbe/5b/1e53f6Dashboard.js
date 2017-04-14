Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var












Dashboard=function(_Component){babelHelpers.inherits(Dashboard,_Component);
function Dashboard(){babelHelpers.classCallCheck(this,Dashboard);return babelHelpers.possibleConstructorReturn(this,(Dashboard.__proto__||Object.getPrototypeOf(Dashboard)).call(this));

}babelHelpers.createClass(Dashboard,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'Hello, my name is Kowallo.'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'Swipe in any direction'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'to get started.'),



_react2.default.createElement(_reactNative.Text,{style:styles.uparrow},'\uF3D2  \uF3D0  \uF3D8  \uF3D3')));





}}]);return Dashboard;}(_react.Component);exports.default=Dashboard;

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
marginTop:50,
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
textAlign:'center'},


uparrow:{
fontFamily:'ionicons',
fontSize:60,
marginTop:15,
color:'#454445'}});