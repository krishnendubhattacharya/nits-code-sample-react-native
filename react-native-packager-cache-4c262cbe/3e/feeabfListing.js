Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');











var _HeaderMenu=require('./HeaderMenu');var _HeaderMenu2=babelHelpers.interopRequireDefault(_HeaderMenu);var

Listing=function(_Component){babelHelpers.inherits(Listing,_Component);
function Listing(){babelHelpers.classCallCheck(this,Listing);return babelHelpers.possibleConstructorReturn(this,(Listing.__proto__||Object.getPrototypeOf(Listing)).call(this));

}babelHelpers.createClass(Listing,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_HeaderMenu2.default,null),
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.Text,{style:styles.listingfirsttext},'SET STYLE'),
_react2.default.createElement(_reactNative.Text,{style:styles.listingsecondtext},'SAVED ITEMS'),
_react2.default.createElement(_reactNative.Text,{style:styles.listingthirdtext},'INVITE FRIENDS'),
_react2.default.createElement(_reactNative.Text,{style:styles.listingfourthtext},'NOTIFICATIONS'),
_react2.default.createElement(_reactNative.Text,{style:styles.listingfifthtext},'SETTINGS'))));




}}]);return Listing;}(_react.Component);exports.default=Listing;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};

var styles=_reactNative.StyleSheet.create({
container:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
marginTop:_reactNative.Dimensions.get("window").width/5},

container:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
marginTop:_reactNative.Dimensions.get("window").width/5},

listingfirsttext:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
fontSize:30,
marginTop:45,
color:'#5D7881'},

listingsecondtext:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
fontSize:30,
marginTop:45,
color:'#9E7B77'},

listingthirdtext:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
fontSize:30,
marginTop:45,
color:'#86A192'},

listingfourthtext:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
fontSize:30,
marginTop:45,
color:'#5F6F88'},

listingfifthtext:{

flexDirection:'column',
justifyContent:'center',
alignItems:'center',
fontSize:30,
marginTop:45,
color:'#95876C'}});