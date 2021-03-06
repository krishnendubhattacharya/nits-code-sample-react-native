Object.defineProperty(exports,"__esModule",{value:true});exports.zoomInRight=exports.zoomInLeft=exports.zoomInUp=exports.zoomInDown=exports.zoomIn=undefined;var _reactNative=require('react-native');

function makeZoomInTranslation(translationType,pivotPoint){
var modifier=Math.min(1,Math.max(-1,pivotPoint));
return{
easing:_reactNative.Easing.bezier(0.175,0.885,0.320,1),
0:babelHelpers.defineProperty({
opacity:0,
scale:0.1},
translationType,modifier*-1000),

0.6:babelHelpers.defineProperty({
opacity:1,
scale:0.457},
translationType,pivotPoint),

1:babelHelpers.defineProperty({
scale:1},
translationType,0)};


}

var zoomIn=exports.zoomIn={
from:{
opacity:0,
scale:0.3},

0.5:{
opacity:1},

to:{
opacity:1,
scale:1}};



var zoomInDown=exports.zoomInDown=makeZoomInTranslation('translateY',60);

var zoomInUp=exports.zoomInUp=makeZoomInTranslation('translateY',-60);

var zoomInLeft=exports.zoomInLeft=makeZoomInTranslation('translateX',10);

var zoomInRight=exports.zoomInRight=makeZoomInTranslation('translateX',-10);