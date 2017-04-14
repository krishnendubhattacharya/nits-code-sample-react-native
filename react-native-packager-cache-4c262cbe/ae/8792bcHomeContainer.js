Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');




var _HomeButton=require('./HomeButton');var _HomeButton2=babelHelpers.interopRequireDefault(_HomeButton);var

HomeContainer=function(_Component){babelHelpers.inherits(HomeContainer,_Component);
function HomeContainer(){babelHelpers.classCallCheck(this,HomeContainer);var _this=babelHelpers.possibleConstructorReturn(this,(HomeContainer.__proto__||Object.getPrototypeOf(HomeContainer)).call(this));_this.









openMenu=function(){
alert("Menu button pressed!");
};_this.
goToAbout=function(){
_this.props.navigator.push({
name:'About',
title:'About',
openMenu:_this.openMenu});

};return _this;}babelHelpers.createClass(HomeContainer,[{key:'render',value:function render(){return _react2.default.createElement(_reactNative.View,{style:styles.container},_react2.default.createElement(_HomeButton2.default,null));}}]);return HomeContainer;}(_react.Component);exports.default=HomeContainer;


var styles=_reactNative.StyleSheet.create({
container:{

backgroundColor:'#729299',
height:_reactNative.Dimensions.get("window").height}});