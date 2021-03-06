Object.defineProperty(exports,"__esModule",{value:true});function makeFadeOutTranslation(translationType,toValue){
return{
from:babelHelpers.defineProperty({
opacity:1},
translationType,0),

to:babelHelpers.defineProperty({
opacity:0},
translationType,toValue)};


}

var fadeOut=exports.fadeOut={
from:{
opacity:1},

to:{
opacity:0}};



var fadeOutDown=exports.fadeOutDown=makeFadeOutTranslation('translateY',100);

var fadeOutUp=exports.fadeOutUp=makeFadeOutTranslation('translateY',-100);

var fadeOutLeft=exports.fadeOutLeft=makeFadeOutTranslation('translateX',-100);

var fadeOutRight=exports.fadeOutRight=makeFadeOutTranslation('translateX',100);

var fadeOutDownBig=exports.fadeOutDownBig=makeFadeOutTranslation('translateY',500);

var fadeOutUpBig=exports.fadeOutUpBig=makeFadeOutTranslation('translateY',-500);

var fadeOutLeftBig=exports.fadeOutLeftBig=makeFadeOutTranslation('translateX',-500);

var fadeOutRightBig=exports.fadeOutRightBig=makeFadeOutTranslation('translateX',500);