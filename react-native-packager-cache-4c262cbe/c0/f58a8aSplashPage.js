Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');var













SplashPage=function(_Component){babelHelpers.inherits(SplashPage,_Component);
function SplashPage(){babelHelpers.classCallCheck(this,SplashPage);return babelHelpers.possibleConstructorReturn(this,(SplashPage.__proto__||Object.getPrototypeOf(SplashPage)).call(this));

}babelHelpers.createClass(SplashPage,[{key:'componentWillMount',value:function componentWillMount()
{
var navigator=this.props.navigator;
setTimeout(function(){
navigator.replace({
name:'SwipeFirst'});

},2000);
}},{key:'render',value:function render()
{
return(

_react2.default.createElement(_reactNative.Image,{
style:styles.stretch,
source:require('./Images/splashscreen.jpg')}));




}}]);return SplashPage;}(_react.Component);exports.default=SplashPage;

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
flex:1,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
height:_reactNative.Dimensions.get("window").height,
width:_reactNative.Dimensions.get("window").width},

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