Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var













SwipeFifth=function(_Component){babelHelpers.inherits(SwipeFifth,_Component);
function SwipeFifth(){babelHelpers.classCallCheck(this,SwipeFifth);return babelHelpers.possibleConstructorReturn(this,(SwipeFifth.__proto__||Object.getPrototypeOf(SwipeFifth)).call(this));

}babelHelpers.createClass(SwipeFifth,[{key:'onButtonClk',value:function onButtonClk()
{
this.props.navigator.replace({
name:'Login'});

}},{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.swipeimage},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')})),


_react2.default.createElement(_reactNative.View,{style:styles.swipecontent},
_react2.default.createElement(_reactNative.Image,{
style:styles.shopstretch,
source:require('./Images/logo-1.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'You can then use the coins to earn'),



_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'free items in the'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'Kowallo Shop!'),




_react2.default.createElement(_reactNative.TouchableHighlight,{style:styles.fullWidthButton,onPress:this.onButtonClk.bind(this)},
_react2.default.createElement(_reactNative.Text,{style:styles.fullWidthButtonText},'START')))));









}}]);return SwipeFifth;}(_react.Component);exports.default=SwipeFifth;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,


backgroundColor:'#A5A07F',
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
backgroundColor:'#434343',
height:50,
width:220,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
borderRadius:10,
borderWidth:1,
borderColor:'#434343',
marginTop:120},

fullWidthButtonText:{
fontSize:20,
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
fontSize:14,
textAlign:'center',
fontFamily:'Quicksand_Light'},

textstyle1:{
color:'#ffffff',

fontSize:14,
textAlign:'center',
fontFamily:'Quicksand_Light'},


textstyle2:{
color:'#ffffff',
fontSize:14,
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
alignItems:'center'},

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