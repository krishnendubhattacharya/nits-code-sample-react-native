Object.defineProperty(exports,"__esModule",{value:true});exports.default=































































































createAnimatableComponent;var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);var _reactNative=require('react-native');var _wrapStyleTransforms=require('./wrapStyleTransforms');var _wrapStyleTransforms2=babelHelpers.interopRequireDefault(_wrapStyleTransforms);var _getStyleValues=require('./getStyleValues');var _getStyleValues2=babelHelpers.interopRequireDefault(_getStyleValues);var _flattenStyle=require('./flattenStyle');var _flattenStyle2=babelHelpers.interopRequireDefault(_flattenStyle);var _createAnimation=require('./createAnimation');var _createAnimation2=babelHelpers.interopRequireDefault(_createAnimation);var _registry=require('./registry');var _easing=require('./easing');var _easing2=babelHelpers.interopRequireDefault(_easing);var INTERPOLATION_STYLE_PROPERTIES=['rotate','rotateX','rotateY','rotateZ','skewX','skewY','transformMatrix','backgroundColor','borderColor','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','shadowColor','color','textDecorationColor'];function omit(keys,source){var filtered={};Object.keys(source).forEach(function(key){if(keys.indexOf(key)===-1){filtered[key]=source[key];}});return filtered;}function getAnimationTarget(iteration,direction){switch(direction){case'reverse':return 0;case'alternate':return iteration%2?0:1;case'alternate-reverse':return iteration%2?1:0;case'normal':default:return 1;}}function getAnimationOrigin(iteration,direction){return getAnimationTarget(iteration,direction)?0:1;}function getCompiledAnimation(animation){if(typeof animation==='string'){var compiledAnimation=(0,_registry.getAnimationByName)(animation);if(!compiledAnimation){throw new Error('No animation registred by the name of '+animation);}return compiledAnimation;}return(0,_createAnimation2.default)(animation);}function makeInterpolatedStyle(compiledAnimation,animationValue){var style={};Object.keys(compiledAnimation).forEach(function(key){if(key==='style'){babelHelpers.extends(style,compiledAnimation.style);}else if(key!=='easing'){style[key]=animationValue.interpolate(compiledAnimation[key]);}});return(0,_wrapStyleTransforms2.default)(style);}function transitionToValue(transitionValue,toValue,duration,easing){var useNativeDriver=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;if(duration||easing){_reactNative.Animated.timing(transitionValue,{toValue:toValue,duration:duration||1000,easing:typeof easing==='function'?easing:_easing2.default[easing||'ease'],useNativeDriver:useNativeDriver}).start();}else{_reactNative.Animated.spring(transitionValue,{toValue:toValue,useNativeDriver:useNativeDriver}).start();}}function createAnimatableComponent(WrappedComponent){var _class,_temp,_initialiseProps;
var wrappedComponentName=WrappedComponent.displayName||
WrappedComponent.name||
'Component';

var Animatable=_reactNative.Animated.createAnimatedComponent(WrappedComponent);

return _temp=_class=function(_Component){babelHelpers.inherits(AnimatableComponent,_Component);










































function AnimatableComponent(props){babelHelpers.classCallCheck(this,AnimatableComponent);var _this=babelHelpers.possibleConstructorReturn(this,(AnimatableComponent.__proto__||Object.getPrototypeOf(AnimatableComponent)).call(this,
props));_initialiseProps.call(_this);

var animationValue=new _reactNative.Animated.Value(getAnimationOrigin(0,_this.props.direction));
var animationStyle={};
var compiledAnimation={};
if(props.animation){
compiledAnimation=getCompiledAnimation(props.animation);
animationStyle=makeInterpolatedStyle(compiledAnimation,animationValue);
}
_this.state={
animationValue:animationValue,
animationStyle:animationStyle,
compiledAnimation:compiledAnimation,
transitionStyle:{},
transitionValues:{},
currentTransitionValues:{}};


if(props.transition){
_this.state=babelHelpers.extends({},
_this.state,
_this.initializeTransitionState(props.transition));

}
_this.delayTimer=null;


(0,_registry.getAnimationNames)().forEach(function(animationName){
if(!(animationName in _this)){
_this[animationName]=_this.animate.bind(_this,animationName);
}
});return _this;
}babelHelpers.createClass(AnimatableComponent,[{key:'initializeTransitionState',value:function initializeTransitionState(

transitionKeys){
var transitionValues={};
var styleValues={};

var currentTransitionValues=(0,_getStyleValues2.default)(transitionKeys,this.props.style);
Object.keys(currentTransitionValues).forEach(function(key){
var value=currentTransitionValues[key];
if(INTERPOLATION_STYLE_PROPERTIES.indexOf(key)!==-1){
transitionValues[key]=new _reactNative.Animated.Value(0);
styleValues[key]=value;
}else{
transitionValues[key]=styleValues[key]=new _reactNative.Animated.Value(value);
}
});

return{
currentTransitionValues:currentTransitionValues,
transitionStyle:styleValues,
transitionValues:transitionValues};

}},{key:'getTransitionState',value:function getTransitionState(

keys){var _this2=this;
var transitionKeys=typeof keys==='string'?[keys]:keys;var _state=
this.state,transitionValues=_state.transitionValues,currentTransitionValues=_state.currentTransitionValues,transitionStyle=_state.transitionStyle;
var missingKeys=transitionKeys.filter(function(key){return!_this2.state.transitionValues[key];});
if(missingKeys.length){
var transitionState=this.initializeTransitionState(missingKeys);
transitionValues=babelHelpers.extends({},
transitionValues,
transitionState.transitionValues);

currentTransitionValues=babelHelpers.extends({},
currentTransitionValues,
transitionState.currentTransitionValues);

transitionStyle=babelHelpers.extends({},
transitionStyle,
transitionState.transitionStyle);

}
return{transitionValues:transitionValues,currentTransitionValues:currentTransitionValues,transitionStyle:transitionStyle};
}},{key:'setNativeProps',value:function setNativeProps(






nativeProps){
if(this.ref){
this.ref.setNativeProps(nativeProps);
}
}},{key:'componentDidMount',value:function componentDidMount()

{var _this3=this;var _props=
this.props,animation=_props.animation,duration=_props.duration,delay=_props.delay,onAnimationBegin=_props.onAnimationBegin,onAnimationEnd=_props.onAnimationEnd;
if(animation){
var startAnimation=function startAnimation(){
onAnimationBegin();
_this3.startAnimation(duration,0,onAnimationEnd);
_this3.delayTimer=null;
};
if(delay){
this.delayTimer=setTimeout(startAnimation,delay);
}else{
startAnimation();
}
}
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

props){var
animation=props.animation,duration=props.duration,easing=props.easing,transition=props.transition,onAnimationBegin=props.onAnimationBegin,onAnimationEnd=props.onAnimationEnd;

if(transition){
var values=(0,_getStyleValues2.default)(transition,props.style);
this.transitionTo(values,duration,easing);
}else if(animation!==this.props.animation){
if(animation){
if(this.delayTimer){
this.setAnimation(animation);
}else{
onAnimationBegin();
this.animate(animation,duration).then(onAnimationEnd);
}
}else{
this.stopAnimation();
}
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
if(this.delayTimer){
clearTimeout(this.delayTimer);
}
}},{key:'setAnimation',value:function setAnimation(

animation,callback){
var compiledAnimation=getCompiledAnimation(animation);
var animationStyle=makeInterpolatedStyle(compiledAnimation,this.state.animationValue);
this.setState({animationStyle:animationStyle,compiledAnimation:compiledAnimation},callback);
}},{key:'animate',value:function animate(

animation,duration){var _this4=this;
return new Promise(function(resolve){
_this4.setAnimation(animation,function(){
_this4.startAnimation(duration,0,resolve);
});
});
}},{key:'stopAnimation',value:function stopAnimation()

{
this.setState({
scheduledAnimation:false,
animationStyle:{}});

this.state.animationValue.stopAnimation();
if(this.delayTimer){
clearTimeout(this.delayTimer);
this.delayTimer=null;
}
}},{key:'startAnimation',value:function startAnimation(

duration,iteration,callback){var _this5=this;var _state2=
this.state,animationValue=_state2.animationValue,compiledAnimation=_state2.compiledAnimation;var _props2=
this.props,direction=_props2.direction,iterationCount=_props2.iterationCount,useNativeDriver=_props2.useNativeDriver;
var easing=this.props.easing||compiledAnimation.easing||'ease';
var currentIteration=iteration||0;
var fromValue=getAnimationOrigin(currentIteration,direction);
var toValue=getAnimationTarget(currentIteration,direction);
animationValue.setValue(fromValue);

if(typeof easing==='string'){
easing=_easing2.default[easing];
}

var reversed=
direction==='reverse'||
direction==='alternate'&&!toValue||
direction==='alternate-reverse'&&!toValue;

if(reversed){
easing=_reactNative.Easing.out(easing);
}

_reactNative.Animated.timing(animationValue,{
toValue:toValue,
easing:easing,
isInteraction:!iterationCount,
duration:duration||this.props.duration||1000,
useNativeDriver:useNativeDriver}).
start(function(endState){
currentIteration+=1;
if(endState.finished&&_this5.props.animation&&(iterationCount==='infinite'||currentIteration<iterationCount)){
_this5.startAnimation(duration,currentIteration,callback);
}else if(callback){
callback(endState);
}
});
}},{key:'transition',value:function transition(

fromValues,toValues,duration,easing){var _this6=this;
var fromValuesFlat=(0,_flattenStyle2.default)(fromValues);
var toValuesFlat=(0,_flattenStyle2.default)(toValues);
var transitionKeys=Object.keys(toValuesFlat);var _getTransitionState=




this.getTransitionState(transitionKeys),transitionValues=_getTransitionState.transitionValues,currentTransitionValues=_getTransitionState.currentTransitionValues,transitionStyle=_getTransitionState.transitionStyle;

transitionKeys.forEach(function(property){
var fromValue=fromValuesFlat[property];
var toValue=toValuesFlat[property];
var transitionValue=transitionValues[property];
if(!transitionValue){
transitionValue=new _reactNative.Animated.Value(0);
}
transitionStyle[property]=transitionValue;
var needsInterpolation=INTERPOLATION_STYLE_PROPERTIES.indexOf(property)!==-1;
if(needsInterpolation){
transitionValue.setValue(0);
transitionStyle[property]=transitionValue.interpolate({
inputRange:[0,1],
outputRange:[fromValue,toValue]});

currentTransitionValues[property]=toValue;
toValuesFlat[property]=1;
}else{
transitionValue.setValue(fromValue);
}
});
this.setState({transitionValues:transitionValues,transitionStyle:transitionStyle,currentTransitionValues:currentTransitionValues},function(){
_this6.transitionToValues(toValuesFlat,duration||_this6.props.duration,easing);
});
}},{key:'transitionTo',value:function transitionTo(

toValues,duration,easing){var _this7=this;var
currentTransitionValues=this.state.currentTransitionValues;
var toValuesFlat=(0,_flattenStyle2.default)(toValues);
var transitions={
from:{},
to:{}};


Object.keys(toValuesFlat).forEach(function(property){
var toValue=toValuesFlat[property];
var needsInterpolation=INTERPOLATION_STYLE_PROPERTIES.indexOf(property)!==-1;
var transitionStyle=_this7.state.transitionStyle[property];
var transitionValue=_this7.state.transitionValues[property];
if(!needsInterpolation&&transitionStyle&&transitionStyle===transitionValue){
transitionToValue(transitionValue,toValue,duration,easing);
}else{
var currentTransitionValue=currentTransitionValues[property];
if(typeof currentTransitionValue==='undefined'&&_this7.props.style){
var style=(0,_getStyleValues2.default)(property,_this7.props.style);
currentTransitionValue=style[property];
}
transitions.from[property]=currentTransitionValue;
transitions.to[property]=toValue;
}
});

if(Object.keys(transitions.from).length){
this.transition(transitions.from,transitions.to,duration,easing);
}
}},{key:'transitionToValues',value:function transitionToValues(

toValues,duration,easing){var _this8=this;
Object.keys(toValues).forEach(function(property){
var transitionValue=_this8.state.transitionValues[property];
var toValue=toValues[property];
transitionToValue(transitionValue,toValue,duration,easing);
});
}},{key:'render',value:function render()

{var _props3=
this.props,style=_props3.style,animation=_props3.animation,transition=_props3.transition;
if(animation&&transition){
throw new Error('You cannot combine animation and transition props');
}
var restProps=omit(Object.keys(AnimatableComponent.propTypes),this.props);

return(
_react2.default.createElement(Animatable,babelHelpers.extends({
ref:this.handleRef,
style:[
style,
this.state.animationStyle,
(0,_wrapStyleTransforms2.default)(this.state.transitionStyle)]},

restProps)));


}}]);return AnimatableComponent;}(_react.Component),_class.displayName='withAnimatable('+wrappedComponentName+')',_class.propTypes={animation:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.object]),duration:_react.PropTypes.number,direction:_react.PropTypes.oneOf(['normal','reverse','alternate','alternate-reverse']),delay:_react.PropTypes.number,easing:_react.PropTypes.oneOfType([_react.PropTypes.oneOf(Object.keys(_easing2.default)),_react.PropTypes.func]),iterationCount:function iterationCount(props,propName){var val=props[propName];if(val!=='infinite'&&!(typeof val==='number'&&val>=1)){return new Error('iterationCount must be a positive number or "infinite"');}return null;},onAnimationBegin:_react.PropTypes.func,onAnimationEnd:_react.PropTypes.func,style:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.array,_react.PropTypes.object]),transition:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.arrayOf(_react.PropTypes.string)]),useNativeDriver:_react.PropTypes.bool},_class.defaultProps={iterationCount:1,onAnimationBegin:function onAnimationBegin(){},onAnimationEnd:function onAnimationEnd(){},useNativeDriver:false},_initialiseProps=function _initialiseProps(){var _this9=this;this.ref=null;this.handleRef=function(ref){_this9.ref=ref;};},_temp;

}