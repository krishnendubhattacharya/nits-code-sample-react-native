Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _reactNativeSwipeGestures=require('react-native-swipe-gestures');var _reactNativeSwipeGestures2=babelHelpers.interopRequireDefault(_reactNativeSwipeGestures);
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=babelHelpers.interopRequireWildcard(_reactNativeAnimatable);
var MOOD_LIST=["sunny","cloudy","thunderstorm","warm","suncloudy"];

var MOODS=[
{name:'1',image:'http://107.170.152.166/team2/kowallo/images/8.jpg'},
{name:'2',image:'http://107.170.152.166/team2/kowallo/images/9.jpg'},
{name:'3',image:'http://107.170.152.166/team2/kowallo/images/1.jpg'},
{name:'4',image:'http://107.170.152.166/team2/kowallo/images/2.jpg'},
{name:'5',image:'http://107.170.152.166/team2/kowallo/images/3.jpg'},
{name:'6',image:'http://107.170.152.166/team2/kowallo/images/4.jpg'},
{name:'7',image:'http://107.170.152.166/team2/kowallo/images/5.jpg'},
{name:'8',image:'http://107.170.152.166/team2/kowallo/images/6.jpg'},
{name:'9',image:'http://107.170.152.166/team2/kowallo/images/7.jpg'}];

var i=0;var


SwipeUpDownTrending=function(_Component){babelHelpers.inherits(SwipeUpDownTrending,_Component);
function SwipeUpDownTrending(props){babelHelpers.classCallCheck(this,SwipeUpDownTrending);var _this=babelHelpers.possibleConstructorReturn(this,(SwipeUpDownTrending.__proto__||Object.getPrototypeOf(SwipeUpDownTrending)).call(this,
props));

_this.state={
mood:"sunny"};





_this.state={
myText:'I\'m ready to get swiped!',
gestureName:'none',
backgroundColor:'#fff'};

var Cards=[
{name:'1',image:'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
{name:'2',image:'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
{name:'3',image:'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
{name:'4',image:'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
{name:'5',image:'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
{name:'6',image:'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
{name:'7',image:'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
{name:'8',image:'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
{name:'9',image:'http://104.131.83.218/makeoffer/upload/categoryimage/bs-news_new.png'}];return _this;

}babelHelpers.createClass(SwipeUpDownTrending,[{key:'onShopButtonClk',value:function onShopButtonClk(

event){


i=0;
this.props.navigator.replace({
name:'SwipeUpDown'});


}},{key:'onTrendingButtonClk',value:function onTrendingButtonClk(
event){


i=0;
this.props.navigator.replace({
name:'SwipeUpDownTrending'});


}},{key:'onKowalloButtonClk',value:function onKowalloButtonClk(
event){


i=0;
this.props.navigator.replace({
name:'SwipeUpDownKowallo'});


}},{key:'onFriendsButtonClk',value:function onFriendsButtonClk(
event){


i=0;
this.props.navigator.replace({
name:'SwipeUpDownFriend'});


}},{key:'onSettingButtonClk',value:function onSettingButtonClk(
event){


i=0;
this.props.navigator.replace({
name:'SwipeUpDownSetting'});


}},{key:'onMoodClick',value:function onMoodClick()
























{
i++;
var mood=MOOD_LIST[i];
this.setState({mood:mood});
}},{key:'getMoodImage',value:function getMoodImage()

{


if(i<=8){
_reactNative.ToastAndroid.showWithGravity('Loading..',_reactNative.ToastAndroid.SHORT,_reactNative.ToastAndroid.CENTER);
return MOODS[i].image;
}
}},{key:'swipeApiCall',value:function swipeApiCall(

swipe_direction,swipe_value){
fetch('http://107.170.152.166/team2/kowallo/swipe_points.php',{
method:'POST',
headers:{
'Accept':'application/json',
'Content-Type':'application/json'},

body:JSON.stringify({
swipe_direction:swipe_direction,
swipe_point:swipe_value})}).


then(function(response){return response.json();}).
then(function(responseJson){
console.log(responseJson);
_reactNative.Alert.alert(responseJson.MSG);


}).
catch(function(error){
console.error(error);
});
}},{key:'onSwipeUp',value:function onSwipeUp(

gestureState){
this.setState({myText:'You swiped up!'});

i++;
if(i>=8){
_reactNative.Alert.alert('No more products');
}



}},{key:'onSwipeDown',value:function onSwipeDown(

gestureState){
this.setState({myText:'You swiped down!'});


i++;
if(i>=8){
_reactNative.Alert.alert('No more products');
}
}},{key:'onSwipeLeft',value:function onSwipeLeft(

gestureState){
this.setState({myText:'You swiped left!'});


i++;
if(i>=8){
_reactNative.Alert.alert('No more products');
}

}},{key:'onSwipeRight',value:function onSwipeRight(

gestureState){
this.setState({myText:'You swiped right!'});


i++;
if(i>=8){
_reactNative.Alert.alert('No more products');
}
}},{key:'onSwipe',value:function onSwipe(

gestureName,gestureState){var
SWIPE_UP=_reactNativeSwipeGestures.swipeDirections.SWIPE_UP,SWIPE_DOWN=_reactNativeSwipeGestures.swipeDirections.SWIPE_DOWN,SWIPE_LEFT=_reactNativeSwipeGestures.swipeDirections.SWIPE_LEFT,SWIPE_RIGHT=_reactNativeSwipeGestures.swipeDirections.SWIPE_RIGHT;
this.setState({gestureName:gestureName});
switch(gestureName){
case SWIPE_UP:

this.setState({myText:'You swiped up!'});
break;
case SWIPE_DOWN:
this.setState({backgroundColor:'green'});
break;
case SWIPE_LEFT:
this.setState({backgroundColor:'blue'});

break;
case SWIPE_RIGHT:
this.setState({backgroundColor:'yellow'});
break;}

}},{key:'render',value:function render()
{var _this2=this;


var config={
velocityThreshold:0.3,
directionalOffsetThreshold:80};

return(

_react2.default.createElement(_reactNativeSwipeGestures2.default,{
onSwipe:function onSwipe(direction,state){return _this2.onSwipe(direction,state);},
onSwipeUp:function onSwipeUp(state){return _this2.onSwipeUp(state);},
onSwipeDown:function onSwipeDown(state){return _this2.onSwipeDown(state);},
onSwipeLeft:function onSwipeLeft(state){return _this2.onSwipeLeft(state);},
onSwipeRight:function onSwipeRight(state){return _this2.onSwipeRight(state);},
config:config,
style:{
flex:1,
backgroundColor:'#ffffff'}},


_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_react2.default.createElement(_reactNative.View,{style:styles.hesdercontainer},
_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this.onShopButtonClk.bind(this)},
_react2.default.createElement(_reactNative.View,{style:styles.firstrow},

_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo-1.png')}),


_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'shop'))),


_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this.onTrendingButtonClk.bind(this)},
_react2.default.createElement(_reactNative.View,{style:styles.secondrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/ARROW.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'trending'))),


_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this.onKowalloButtonClk.bind(this)},
_react2.default.createElement(_reactNative.View,{style:styles.thirdrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'kowallo'))),


_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this.onFriendsButtonClk.bind(this)},
_react2.default.createElement(_reactNative.View,{style:styles.fourthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo-4.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'friends'))),


_react2.default.createElement(_reactNative.TouchableHighlight,{onPress:this.onSettingButtonClk.bind(this)},
_react2.default.createElement(_reactNative.View,{style:styles.fifthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcsssettings,
source:require('./Images/settings_icons.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'settings')))),




_react2.default.createElement(_reactNative.View,{style:styles.swipecontainer},

_react2.default.createElement(_reactNative.View,{style:styles.swipeimgview},
_react2.default.createElement(_reactNative.Image,{
style:styles.swipeimgcss,
source:{uri:this.getMoodImage()}}))),





_react2.default.createElement(_reactNative.View,{style:styles.footercontainer},
_react2.default.createElement(_reactNative.View,{style:styles.footerfirstrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.footerimgcss,
source:require('./Images/d-arrow.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.footertextcss},'HATE')),

_react2.default.createElement(_reactNative.View,{style:styles.footersecondrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.footerimgcss,
source:require('./Images/l-arrow.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.footertextcss},'DISLIKE')),

_react2.default.createElement(_reactNative.View,{style:styles.footerthirdrow},
_react2.default.createElement(_reactNative.Text,{style:styles.footertextcss},'42'),
_react2.default.createElement(_reactNative.Text,{style:styles.footertextcss},'COINS')),

_react2.default.createElement(_reactNative.View,{style:styles.footerfourthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.footerimgcss,
source:require('./Images/r-arrow.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.footertextcss},'LIKE')),

_react2.default.createElement(_reactNative.View,{style:styles.footerfifthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.footerimgcss,
source:require('./Images/u-arrow.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.footertextcss},'LOVE'))))));







}}]);return SwipeUpDownTrending;}(_react.Component);exports.default=SwipeUpDownTrending;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};
var styles=_reactNative.StyleSheet.create({
hesdercontainer:{

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
width:35,
alignItems:'center'},

imgcsssettings:{
justifyContent:'center',
height:28,
width:28,
alignItems:'center'},

textcss:{
justifyContent:'center',
color:'#ffffff'},

swipecontainer:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
padding:5,
height:_reactNative.Dimensions.get("window").height-_reactNative.Dimensions.get("window").width/5*2.35},


swipeimgcss:{
height:_reactNative.Dimensions.get("window").height-_reactNative.Dimensions.get("window").width/5*2.35,
width:_reactNative.Dimensions.get("window").width},


footercontainer:{

flexDirection:'row'},


footerfirstrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#585756',
flexDirection:'column',
justifyContent:'center',
alignItems:'center'},

footersecondrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#585756',
justifyContent:'center',
alignItems:'center'},

footerthirdrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#73939A',
justifyContent:'center',
alignItems:'center'},

footerfourthrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#585756',
justifyContent:'center',
alignItems:'center'},

footerfifthrow:{
width:_reactNative.Dimensions.get("window").width/5,
height:_reactNative.Dimensions.get("window").width/5,
backgroundColor:'#585756',
justifyContent:'center',
alignItems:'center'},

footerimgcss:{
justifyContent:'center',
height:23,
width:23,
alignItems:'center'},

footertextcss:{
justifyContent:'center',
color:'#ffffff'}});