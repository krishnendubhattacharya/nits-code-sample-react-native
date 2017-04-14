Object.defineProperty(exports,"__esModule",{value:true});exports.zoomOutRight=exports.zoomOutLeft=exports.zoomOutUp=exports.zoomOutDown=exports.zoomOut=undefined;var _reactNative=require('react-native');

function makeZoomOutTranslation(translationType,pivotPoint){
var modifier=Math.min(1,Math.max(-1,pivotPoint));
return{
easing:_reactNative.Easing.bezier(0.175,0.885,0.320,1),
0:babelHelpers.defineProperty({
opacity:1,
scale:1},
translationType,0),

0.4:babelHelpers.defineProperty({
opacity:1,
scale:0.457},
translationType,pivotPoint),

1:babelHelpers.defineProperty({
opacity:0,
scale:0.1},
translationType,modifier*-1000)};


}

var zoomOut=exports.zoomOut={
from:{
opacity:1,
scale:1},

0.5:{
opacity:1,
scale:0.3},

to:{
opacity:0,
scale:0}};



var zoomOutDown=exports.zoomOutDown=makeZoomOutTranslation('translateY',60);

var zoomOutUp=exports.zoomOutUp=makeZoomOutTranslation('translateY',-60);

var zoomOutLeft=exports.zoomOutLeft=makeZoomOutTranslation('translateX',10);

var zoomOutRight=exports.zoomOutRight=makeZoomOutTranslation('translateX',-10);