Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);

var _reactNative=require('react-native');






var _AboutContainer=require('./AboutContainer');var _AboutContainer2=babelHelpers.interopRequireDefault(_AboutContainer);
var _HomeContainer=require('./HomeContainer');var _HomeContainer2=babelHelpers.interopRequireDefault(_HomeContainer);
var _Dashboard=require('./Dashboard');var _Dashboard2=babelHelpers.interopRequireDefault(_Dashboard);
var _Swipe=require('./Swipe');var _Swipe2=babelHelpers.interopRequireDefault(_Swipe);
var _SplashPage=require('./SplashPage');var _SplashPage2=babelHelpers.interopRequireDefault(_SplashPage);
var _SwipeUp=require('./SwipeUp');var _SwipeUp2=babelHelpers.interopRequireDefault(_SwipeUp);
var _Listing=require('./Listing');var _Listing2=babelHelpers.interopRequireDefault(_Listing);
var _SwipeUpDown=require('./SwipeUpDown');var _SwipeUpDown2=babelHelpers.interopRequireDefault(_SwipeUpDown);
var _ProductListing=require('./ProductListing');var _ProductListing2=babelHelpers.interopRequireDefault(_ProductListing);
var _SwipeAll=require('./SwipeAll');var _SwipeAll2=babelHelpers.interopRequireDefault(_SwipeAll);
var _SwipeFirst=require('./SwipeFirst');var _SwipeFirst2=babelHelpers.interopRequireDefault(_SwipeFirst);
var _SwipeSecond=require('./SwipeSecond');var _SwipeSecond2=babelHelpers.interopRequireDefault(_SwipeSecond);
var _SwipeThird=require('./SwipeThird');var _SwipeThird2=babelHelpers.interopRequireDefault(_SwipeThird);
var _SwipeFourth=require('./SwipeFourth');var _SwipeFourth2=babelHelpers.interopRequireDefault(_SwipeFourth);
var _SwipeFifth=require('./SwipeFifth');var _SwipeFifth2=babelHelpers.interopRequireDefault(_SwipeFifth);
var _Login=require('./Login');var _Login2=babelHelpers.interopRequireDefault(_Login);
var _Passcode=require('./Passcode');var _Passcode2=babelHelpers.interopRequireDefault(_Passcode);
var _SwipeAllDirec=require('./SwipeAllDirec');var _SwipeAllDirec2=babelHelpers.interopRequireDefault(_SwipeAllDirec);
var _SwipeAllRest=require('./SwipeAllRest');var _SwipeAllRest2=babelHelpers.interopRequireDefault(_SwipeAllRest);
var _SwipeUpDownFriend=require('./SwipeUpDownFriend');var _SwipeUpDownFriend2=babelHelpers.interopRequireDefault(_SwipeUpDownFriend);
var _SwipeUpDownKowallo=require('./SwipeUpDownKowallo');var _SwipeUpDownKowallo2=babelHelpers.interopRequireDefault(_SwipeUpDownKowallo);
var _SwipeUpDownSetting=require('./SwipeUpDownSetting');var _SwipeUpDownSetting2=babelHelpers.interopRequireDefault(_SwipeUpDownSetting);
var _SwipeUpDownTrending=require('./SwipeUpDownTrending');var _SwipeUpDownTrending2=babelHelpers.interopRequireDefault(_SwipeUpDownTrending);var



Router=function(_Component){babelHelpers.inherits(Router,_Component);
function Router(){babelHelpers.classCallCheck(this,Router);return babelHelpers.possibleConstructorReturn(this,(Router.__proto__||Object.getPrototypeOf(Router)).call(this));

}babelHelpers.createClass(Router,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.Navigator,{
initialRoute:{name:'SplashPage',title:'SplashPage'},
renderScene:this.renderScene}));



}},{key:'renderScene',value:function renderScene(
route,navigator){
if(route.name=='Home'){
return(
_react2.default.createElement(_HomeContainer2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='About'){
return(
_react2.default.createElement(_AboutContainer2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='Dashboard'){
return(
_react2.default.createElement(_Dashboard2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='Swipe'){
return(
_react2.default.createElement(_Swipe2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SplashPage'){
return(
_react2.default.createElement(_SplashPage2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeUp'){
return(
_react2.default.createElement(_SwipeUp2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}

if(route.name=='Listing'){
return(
_react2.default.createElement(_Listing2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeUpDown'){
return(
_react2.default.createElement(_SwipeUpDown2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='ProductListing'){
return(
_react2.default.createElement(_ProductListing2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeAll'){
return(
_react2.default.createElement(_SwipeAll2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeFirst'){
return(
_react2.default.createElement(_SwipeFirst2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeSecond'){
return(
_react2.default.createElement(_SwipeSecond2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeThird'){
return(
_react2.default.createElement(_SwipeThird2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeFourth'){
return(
_react2.default.createElement(_SwipeFourth2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeFifth'){
return(
_react2.default.createElement(_SwipeFifth2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='Login'){
return(
_react2.default.createElement(_Login2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='Passcode'){
return(
_react2.default.createElement(_Passcode2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeAllDirec'){
return(
_react2.default.createElement(_SwipeAllDirec2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeAllRest'){
return(
_react2.default.createElement(_SwipeAllRest2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeUpDownFriend'){
return(
_react2.default.createElement(_SwipeUpDownFriend2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeUpDownKowallo'){
return(
_react2.default.createElement(_SwipeUpDownKowallo2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeUpDownSetting'){
return(
_react2.default.createElement(_SwipeUpDownSetting2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
if(route.name=='SwipeUpDownTrending'){
return(
_react2.default.createElement(_SwipeUpDownTrending2.default,babelHelpers.extends({
navigator:navigator},
route.passProps)));


}
}}]);return Router;}(_react.Component);exports.default=Router;


var NavigationBarRouteMapper={
LeftButton:function LeftButton(route,navigator,index,navState){
if(index>0){
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
onPress:function onPress(){if(index>0){navigator.pop();}}},
_react2.default.createElement(_reactNative.Text,{style:styles.leftButton},'Back')));




}else
{return null;}
},
RightButton:function RightButton(route,navigator,index,navState){
if(route.openMenu)return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
onPress:function onPress(){return route.openMenu();}},
_react2.default.createElement(_reactNative.Text,{style:styles.rightButton},
route.rightText||'Menu')));



},
Title:function Title(route,navigator,index,navState){
return(
_react2.default.createElement(_reactNative.Text,{style:styles.title},
route.title));


}};


var styles=_reactNative.StyleSheet.create({
navigationBar:{
backgroundColor:'blue'},

leftButton:{
color:'#ffffff',
margin:10,
fontSize:17},

title:{
paddingVertical:10,
color:'#ffffff',
justifyContent:'center',
fontSize:18},

rightButton:{
color:'white',
margin:10,
fontSize:16}});