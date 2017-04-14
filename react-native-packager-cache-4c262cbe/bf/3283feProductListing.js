Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');












var _HeaderMenu=require('./HeaderMenu');var _HeaderMenu2=babelHelpers.interopRequireDefault(_HeaderMenu);
var imagewidth=_reactNative.Dimensions.get("window").width*23/100;
var textwidth=_reactNative.Dimensions.get("window").width*65/100;
var arrowwidth=_reactNative.Dimensions.get("window").width*12/100;var

ProductListing=function(_Component){babelHelpers.inherits(ProductListing,_Component);
function ProductListing(){babelHelpers.classCallCheck(this,ProductListing);var _this=babelHelpers.possibleConstructorReturn(this,(ProductListing.__proto__||Object.getPrototypeOf(ProductListing)).call(this));


_this.state={
dataa:[{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"2","name":"Allergist ","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"3","name":"Cardiologist.","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"4","name":"Dermatologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"5","name":"Gynecologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"6","name":"Nephrologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"}]};



_this.statee=[];


var ds=new _reactNative.ListView.DataSource({rowHasChanged:function rowHasChanged(r1,r2){return r1!==r2;}});
_this.state={
dataSource:ds.cloneWithRows(_this.state.dataa)};return _this;

}babelHelpers.createClass(ProductListing,[{key:'apicall',value:function apicall()
{






















statee=[{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"1","name":"Addiction psychiatrist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"2","name":"Allergist ","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"3","name":"Cardiologist.","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"4","name":"Dermatologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"5","name":"Gynecologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"},{"id":"6","name":"Nephrologist","image":"","basic":"0","skilled":"0","expert":"0","cust_title":"","description":"","meta_keyword":"","meta_description":"","parent_id":"0","active":"1"}];

}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_HeaderMenu2.default,null),
_react2.default.createElement(_reactNative.View,{style:styles.container},
_react2.default.createElement(_reactNative.ListView,{
dataSource:this.state.dataSource,
renderRow:function renderRow(rowData){return _react2.default.createElement(_reactNative.View,{style:styles.innerlistcontainer},
_react2.default.createElement(_reactNative.View,{style:styles.imgview},
_react2.default.createElement(_reactNative.Image,{
style:styles.imgcss,
source:require('./Images/product1.png')})),


_react2.default.createElement(_reactNative.View,{style:styles.textarrowview},
_react2.default.createElement(_reactNative.Text,null,'CURRENT BID: ghhh'),
_react2.default.createElement(_reactNative.Text,null,'TIME REMAINING: FGJ FHF'),
_react2.default.createElement(_reactNative.Text,null,'WEBSITE.COM')),

_react2.default.createElement(_reactNative.View,{style:styles.arrowview},
_react2.default.createElement(_reactNative.Text,null,'fgh')));}}))));







}}]);return ProductListing;}(_react.Component);exports.default=ProductListing;

var onButtonPress=function onButtonPress(){
_reactNative.Alert.alert('Successfully Login');
};

var styles=_reactNative.StyleSheet.create({
container:{

flexDirection:'column',
justifyContent:'flex-start',
alignItems:'flex-start',
padding:5,
marginTop:_reactNative.Dimensions.get("window").width/5},

innerlistcontainer:{
flexDirection:'row',
marginTop:5},

imgview:{
width:imagewidth},

textarrowview:{
marginLeft:5,
width:textwidth,
justifyContent:'flex-start',
alignItems:'flex-start'},

arrowview:{
width:arrowwidth,
justifyContent:'center',
alignItems:'flex-start'},

imgcss:{
height:imagewidth,
width:imagewidth}});