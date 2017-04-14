Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');



var _reactNativeSwiper=require('react-native-swiper');var _reactNativeSwiper2=babelHelpers.interopRequireDefault(_reactNativeSwiper);



var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

view:{
flex:1,
justifyContent:'center',
alignItems:'center'}});var



TitleText=function(_React$Component){babelHelpers.inherits(TitleText,_React$Component);function TitleText(){babelHelpers.classCallCheck(this,TitleText);return babelHelpers.possibleConstructorReturn(this,(TitleText.__proto__||Object.getPrototypeOf(TitleText)).apply(this,arguments));}babelHelpers.createClass(TitleText,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.Text,{style:{fontSize:48,color:'white'}},
this.props.label));


}}]);return TitleText;}(_react2.default.Component);var


Home=function(_React$Component2){babelHelpers.inherits(Home,_React$Component2);function Home(){babelHelpers.classCallCheck(this,Home);return babelHelpers.possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));}babelHelpers.createClass(Home,[{key:'viewStyle',value:function viewStyle()

{
return{
flex:1,
backgroundColor:'#000000 ',
justifyContent:'center',
alignItems:'center'};

}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNativeSwiper2.default,{
loop:false,
showsPagination:false,
index:1},
_react2.default.createElement(_reactNative.View,{style:this.viewStyle()},
_react2.default.createElement(TitleText,{label:'Left'})),

_react2.default.createElement(_reactNativeSwiper2.default,{
horizontal:false,
loop:false,
showsPagination:false,
index:1},
_react2.default.createElement(_reactNative.View,{style:this.viewStyle()},
_react2.default.createElement(TitleText,{label:'Top'})),

_react2.default.createElement(_reactNative.View,{style:this.viewStyle()},
_react2.default.createElement(TitleText,{label:'Home'})),

_react2.default.createElement(_reactNative.View,{style:this.viewStyle()},
_react2.default.createElement(TitleText,{label:'Bottom'}))),


_react2.default.createElement(_reactNative.View,{style:this.viewStyle()},
_react2.default.createElement(TitleText,{label:'Right'}))));




}}]);return Home;}(_react2.default.Component);exports.default=


Home;