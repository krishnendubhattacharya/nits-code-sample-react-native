Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var













SwipeFourth=function(_Component){babelHelpers.inherits(SwipeFourth,_Component);
function SwipeFourth(){babelHelpers.classCallCheck(this,SwipeFourth);return babelHelpers.possibleConstructorReturn(this,(SwipeFourth.__proto__||Object.getPrototypeOf(SwipeFourth)).call(this));

}babelHelpers.createClass(SwipeFourth,[{key:'onButtonClk',value:function onButtonClk()
{
this.props.navigator.replace({
name:'SwipeFifth'});

}},{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.View,{style:styles.swipeimage},
_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/logo.png')})),


_react2.default.createElement(_reactNative.View,{style:styles.swipecontent},

_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'As you swipe, you will earn'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle1},'Kowallo Coins!'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle},'Swipe Item = 1 Coin'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Share Item = 25 Coin'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Add a Friend = 50 Coin'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Swipe for Continues Days'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'One Day = 4 Coins'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Two Days = 8 Coins'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Three Days = 16 Coins'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Four Days = 32 Coins'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Five Days = 64 Coins'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Six Days = 128 Coins'),


_react2.default.createElement(_reactNative.Text,{style:styles.textstyle2},'Seven Days = 256 Coins'),



_react2.default.createElement(_reactNative.TouchableHighlight,{style:styles.fullWidthButton,onPress:this.onButtonClk.bind(this)},
_react2.default.createElement(_reactNative.Text,{style:styles.fullWidthButtonText},'NEXT')))));









}}]);return SwipeFourth;}(_react.Component);exports.default=SwipeFourth;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
container:{
flex:1,


backgroundColor:'#987373',
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
marginTop:10},

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