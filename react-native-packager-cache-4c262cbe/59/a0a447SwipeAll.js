'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _reactNativeSwipeCards=require('react-native-swipe-cards');var _reactNativeSwipeCards2=babelHelpers.interopRequireDefault(_reactNativeSwipeCards);


var Card=_react2.default.createClass({displayName:'Card',
render:function render(){
return(
_react2.default.createElement(_reactNative.View,{style:styles.card},

_react2.default.createElement(_reactNative.Image,{style:styles.thumbnail,source:{uri:this.props.image}})));



}});


var NoMoreCards=_react2.default.createClass({displayName:'NoMoreCards',
render:function render(){
return(
_react2.default.createElement(_reactNative.View,{style:styles.noMoreCards},
_react2.default.createElement(_reactNative.Text,null,'No more cards')));


}});


var Cards=[
{name:'1',image:'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
{name:'2',image:'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
{name:'3',image:'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
{name:'4',image:'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
{name:'5',image:'http://104.131.83.218/makeoffer/upload/categoryimage/1.png'},
{name:'6',image:'http://104.131.83.218/makeoffer/upload/categoryimage/2.png'},
{name:'7',image:'http://104.131.83.218/makeoffer/upload/categoryimage/3.png'},
{name:'8',image:'http://104.131.83.218/makeoffer/upload/categoryimage/4.png'},
{name:'9',image:'http://104.131.83.218/makeoffer/upload/categoryimage/bs-news_new.png'}];exports.default=









_react2.default.createClass({displayName:'SwipeAll',
getInitialState:function getInitialState(){
return{
cards:Cards,
outOfCards:false};

},
handleYup:function handleYup(card){
console.log("yup");
},
handleNope:function handleNope(card){
console.log("nope");
},
handleMaybe:function handleMaybe(card){
console.log("maybe");
},
cardRemoved:function cardRemoved(index){
console.log('The index is '+index);

var CARD_REFRESH_LIMIT=3;

if(this.state.cards.length-index<=CARD_REFRESH_LIMIT+1){
console.log('There are only '+(this.state.cards.length-index-1)+' cards left.');










}

},
render:function render(){
return(

_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_react2.default.createElement(_reactNative.View,{style:styles.hesdercontainer},
_react2.default.createElement(_reactNative.View,{style:styles.firstrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo-1.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'shop')),

_react2.default.createElement(_reactNative.View,{style:styles.secondrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'trending')),

_react2.default.createElement(_reactNative.View,{style:styles.thirdrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'kowallo')),

_react2.default.createElement(_reactNative.View,{style:styles.fourthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/logo-4.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'friends')),

_react2.default.createElement(_reactNative.View,{style:styles.fifthrow},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/settings_icons.png')}),

_react2.default.createElement(_reactNative.Text,{style:styles.textcss},'settings'))),



_react2.default.createElement(_reactNativeSwipeCards2.default,{

cards:this.state.cards,
loop:false,

renderCard:function renderCard(cardData){return _react2.default.createElement(Card,cardData);},
renderNoMoreCards:function renderNoMoreCards(){return _react2.default.createElement(NoMoreCards,null);},
showYup:true,
showNope:true,
showMaybe:true,

handleYup:this.handleYup,
handleNope:this.handleNope,
handleMaybe:this.handleMaybe,
cardRemoved:this.cardRemoved})));








}});


var styles=_reactNative.StyleSheet.create({
card:{
alignItems:'center',
overflow:'hidden',
borderColor:'grey',
backgroundColor:'white',
borderWidth:1,
elevation:1},

thumbnail:{

width:_reactNative.Dimensions.get("window").width,
height:_reactNative.Dimensions.get("window").height-_reactNative.Dimensions.get("window").width/5*2},

text:{
fontSize:20},


noMoreCards:{

justifyContent:'center',
alignItems:'center'},

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

textcss:{
justifyContent:'center',
color:'#ffffff'}});