(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chord-mark-2-chordpro"] = factory();
	else
		root["chord-mark-2-chordpro"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 681:
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else {}})(self,function(){return(/******/(()=>{// webpackBootstrap
/******/var __webpack_modules__={/***/1110:/***/(module,__unused_webpack_exports,__nested_webpack_require_444__)=>{var Handlebars=__nested_webpack_require_444__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmBarContent\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"barContent"):depth0,depth0))!=null?stack1:"")+"</span>";},"useData":true});/***/},/***/3255:/***/(module,__unused_webpack_exports,__nested_webpack_require_1146__)=>{var Handlebars=__nested_webpack_require_1146__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var helper,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmBarSeparator\">"+container.escapeExpression((helper=(helper=lookupProperty(helpers,"barSeparator")||(depth0!=null?lookupProperty(depth0,"barSeparator"):depth0))!=null?helper:container.hooks.helperMissing,typeof helper==="function"?helper.call(depth0!=null?depth0:container.nullContext||{},{"name":"barSeparator","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":47}}}):helper))+"</span>";},"useData":true});/***/},/***/7132:/***/(module,__unused_webpack_exports,__nested_webpack_require_2138__)=>{var Handlebars=__nested_webpack_require_2138__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"1":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmChordLineOffset\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"chordLineOffset"):depth0,depth0))!=null?stack1:"")+"</span>";},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmChordLine\">"+((stack1=lookupProperty(helpers,"if").call(depth0!=null?depth0:container.nullContext||{},depth0!=null?lookupProperty(depth0,"chordLineOffset"):depth0,{"name":"if","hash":{},"fn":container.program(1,data,0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":128}}}))!=null?stack1:"")+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"chordLine"):depth0,depth0))!=null?stack1:"")+"</span>";},"useData":true});/***/},/***/3524:/***/(module,__unused_webpack_exports,__nested_webpack_require_3583__)=>{var Handlebars=__nested_webpack_require_3583__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"1":function(container,depth0,helpers,partials,data){var lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmChordDuration\">"+container.escapeExpression(container.lambda(depth0!=null?lookupProperty(depth0,"chordDuration"):depth0,depth0))+"</span>";},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmChordSymbol\">"+container.escapeExpression(container.lambda(depth0!=null?lookupProperty(depth0,"chordSymbol"):depth0,depth0))+((stack1=lookupProperty(helpers,"if").call(depth0!=null?depth0:container.nullContext||{},depth0!=null?lookupProperty(depth0,"chordDuration"):depth0,{"name":"if","hash":{},"fn":container.program(1,data,0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":50},"end":{"line":1,"column":144}}}))!=null?stack1:"")+"</span>";},"useData":true});/***/},/***/1354:/***/(module,__unused_webpack_exports,__nested_webpack_require_5021__)=>{var Handlebars=__nested_webpack_require_5021__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){return"<span class=\"cmEmptyLine\">&nbsp;</span>";},"useData":true});/***/},/***/3096:/***/(module,__unused_webpack_exports,__nested_webpack_require_5425__)=>{var Handlebars=__nested_webpack_require_5425__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,helper,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<p class=\""+container.escapeExpression((helper=(helper=lookupProperty(helpers,"lineClasses")||(depth0!=null?lookupProperty(depth0,"lineClasses"):depth0))!=null?helper:container.hooks.helperMissing,typeof helper==="function"?helper.call(depth0!=null?depth0:container.nullContext||{},{"name":"lineClasses","hash":{},"data":data,"loc":{"start":{"line":1,"column":10},"end":{"line":1,"column":27}}}):helper))+"\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"line"):depth0,depth0))!=null?stack1:"")+"</p>";},"useData":true});/***/},/***/36:/***/(module,__unused_webpack_exports,__nested_webpack_require_6504__)=>{var Handlebars=__nested_webpack_require_6504__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmLyricLine\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"lyricLine"):depth0,depth0))!=null?stack1:"")+"</span>";},"useData":true});/***/},/***/4273:/***/(module,__unused_webpack_exports,__nested_webpack_require_7204__)=>{var Handlebars=__nested_webpack_require_7204__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"1":function(container,depth0,helpers,partials,data){var lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmSectionMultiplier\"> "+container.escapeExpression(container.lambda(depth0!=null?lookupProperty(depth0,"multiplier"):depth0,depth0))+"</span>";},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmSectionLabel\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"sectionLabel"):depth0,depth0))!=null?stack1:"")+((stack1=lookupProperty(helpers,"if").call(depth0!=null?depth0:container.nullContext||{},depth0!=null?lookupProperty(depth0,"multiplier"):depth0,{"name":"if","hash":{},"fn":container.program(1,data,0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":147}}}))!=null?stack1:"")+"</span>";},"useData":true});/***/},/***/1196:/***/(module,__unused_webpack_exports,__nested_webpack_require_8642__)=>{var Handlebars=__nested_webpack_require_8642__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<div class=\"cmSong\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"song"):depth0,depth0))!=null?stack1:"")+"</div>";},"useData":true});/***/},/***/4604:/***/(module,__unused_webpack_exports,__nested_webpack_require_9330__)=>{var Handlebars=__nested_webpack_require_9330__(1524);function __default(obj){return obj&&(obj.__esModule?obj["default"]:obj);}module.exports=(Handlebars["default"]||Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data){var stack1,lookupProperty=container.lookupProperty||function(parent,propertyName){if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return parent[propertyName];}return undefined;};return"<span class=\"cmTimeSignature\">"+((stack1=container.lambda(depth0!=null?lookupProperty(depth0,"timeSignature"):depth0,depth0))!=null?stack1:"")+"</span>";},"useData":true});/***/},/***/4208:/***/(module,exports,__nested_webpack_require_10021__)=>{"use strict";exports.__esModule=true;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}// istanbul ignore next
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}var _handlebarsBase=__nested_webpack_require_10021__(7060);var base=_interopRequireWildcard(_handlebarsBase);// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString=__nested_webpack_require_10021__(5442);var _handlebarsSafeString2=_interopRequireDefault(_handlebarsSafeString);var _handlebarsException=__nested_webpack_require_10021__(4936);var _handlebarsException2=_interopRequireDefault(_handlebarsException);var _handlebarsUtils=__nested_webpack_require_10021__(3303);var Utils=_interopRequireWildcard(_handlebarsUtils);var _handlebarsRuntime=__nested_webpack_require_10021__(9657);var runtime=_interopRequireWildcard(_handlebarsRuntime);var _handlebarsNoConflict=__nested_webpack_require_10021__(5727);var _handlebarsNoConflict2=_interopRequireDefault(_handlebarsNoConflict);// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create(){var hb=new base.HandlebarsEnvironment();Utils.extend(hb,base);hb.SafeString=_handlebarsSafeString2['default'];hb.Exception=_handlebarsException2['default'];hb.Utils=Utils;hb.escapeExpression=Utils.escapeExpression;hb.VM=runtime;hb.template=function(spec){return runtime.template(spec,hb);};return hb;}var inst=create();inst.create=create;_handlebarsNoConflict2['default'](inst);inst['default']=inst;exports["default"]=inst;module.exports=exports['default'];/***/},/***/7060:/***/(__unused_webpack_module,exports,__nested_webpack_require_11893__)=>{"use strict";exports.__esModule=true;exports.HandlebarsEnvironment=HandlebarsEnvironment;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utils=__nested_webpack_require_11893__(3303);var _exception=__nested_webpack_require_11893__(4936);var _exception2=_interopRequireDefault(_exception);var _helpers=__nested_webpack_require_11893__(9228);var _decorators=__nested_webpack_require_11893__(2024);var _logger=__nested_webpack_require_11893__(5324);var _logger2=_interopRequireDefault(_logger);var _internalProtoAccess=__nested_webpack_require_11893__(5434);var VERSION='4.7.7';exports.VERSION=VERSION;var COMPILER_REVISION=8;exports.COMPILER_REVISION=COMPILER_REVISION;var LAST_COMPATIBLE_COMPILER_REVISION=7;exports.LAST_COMPATIBLE_COMPILER_REVISION=LAST_COMPATIBLE_COMPILER_REVISION;var REVISION_CHANGES={1:'<= 1.0.rc.2',// 1.0.rc.2 is actually rev2 but doesn't report it
2:'== 1.0.0-rc.3',3:'== 1.0.0-rc.4',4:'== 1.x.x',5:'== 2.0.0-alpha.x',6:'>= 2.0.0-beta.1',7:'>= 4.0.0 <4.3.0',8:'>= 4.3.0'};exports.REVISION_CHANGES=REVISION_CHANGES;var objectType='[object Object]';function HandlebarsEnvironment(helpers,partials,decorators){this.helpers=helpers||{};this.partials=partials||{};this.decorators=decorators||{};_helpers.registerDefaultHelpers(this);_decorators.registerDefaultDecorators(this);}HandlebarsEnvironment.prototype={constructor:HandlebarsEnvironment,logger:_logger2['default'],log:_logger2['default'].log,registerHelper:function registerHelper(name,fn){if(_utils.toString.call(name)===objectType){if(fn){throw new _exception2['default']('Arg not supported with multiple helpers');}_utils.extend(this.helpers,name);}else{this.helpers[name]=fn;}},unregisterHelper:function unregisterHelper(name){delete this.helpers[name];},registerPartial:function registerPartial(name,partial){if(_utils.toString.call(name)===objectType){_utils.extend(this.partials,name);}else{if(typeof partial==='undefined'){throw new _exception2['default']('Attempting to register a partial called "'+name+'" as undefined');}this.partials[name]=partial;}},unregisterPartial:function unregisterPartial(name){delete this.partials[name];},registerDecorator:function registerDecorator(name,fn){if(_utils.toString.call(name)===objectType){if(fn){throw new _exception2['default']('Arg not supported with multiple decorators');}_utils.extend(this.decorators,name);}else{this.decorators[name]=fn;}},unregisterDecorator:function unregisterDecorator(name){delete this.decorators[name];},/**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */resetLoggedPropertyAccesses:function resetLoggedPropertyAccesses(){_internalProtoAccess.resetLoggedProperties();}};var log=_logger2['default'].log;exports.log=log;exports.createFrame=_utils.createFrame;exports.logger=_logger2['default'];/***/},/***/2024:/***/(__unused_webpack_module,exports,__nested_webpack_require_14809__)=>{"use strict";exports.__esModule=true;exports.registerDefaultDecorators=registerDefaultDecorators;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _decoratorsInline=__nested_webpack_require_14809__(882);var _decoratorsInline2=_interopRequireDefault(_decoratorsInline);function registerDefaultDecorators(instance){_decoratorsInline2['default'](instance);}/***/},/***/882:/***/(module,exports,__nested_webpack_require_15273__)=>{"use strict";exports.__esModule=true;var _utils=__nested_webpack_require_15273__(3303);exports["default"]=function(instance){instance.registerDecorator('inline',function(fn,props,container,options){var ret=fn;if(!props.partials){props.partials={};ret=function(context,options){// Create a new partials stack frame prior to exec.
var original=container.partials;container.partials=_utils.extend({},original,props.partials);var ret=fn(context,options);container.partials=original;return ret;};}props.partials[options.args[0]]=options.fn;return ret;});};module.exports=exports['default'];/***/},/***/4936:/***/(module,exports)=>{"use strict";exports.__esModule=true;var errorProps=['description','fileName','lineNumber','endLineNumber','message','name','number','stack'];function Exception(message,node){var loc=node&&node.loc,line=undefined,endLineNumber=undefined,column=undefined,endColumn=undefined;if(loc){line=loc.start.line;endLineNumber=loc.end.line;column=loc.start.column;endColumn=loc.end.column;message+=' - '+line+':'+column;}var tmp=Error.prototype.constructor.call(this,message);// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
for(var idx=0;idx<errorProps.length;idx++){this[errorProps[idx]]=tmp[errorProps[idx]];}/* istanbul ignore else */if(Error.captureStackTrace){Error.captureStackTrace(this,Exception);}try{if(loc){this.lineNumber=line;this.endLineNumber=endLineNumber;// Work around issue under safari where we can't directly set the column value
/* istanbul ignore next */if(Object.defineProperty){Object.defineProperty(this,'column',{value:column,enumerable:true});Object.defineProperty(this,'endColumn',{value:endColumn,enumerable:true});}else{this.column=column;this.endColumn=endColumn;}}}catch(nop){/* Ignore if the browser is very particular */}}Exception.prototype=new Error();exports["default"]=Exception;module.exports=exports['default'];/***/},/***/9228:/***/(__unused_webpack_module,exports,__nested_webpack_require_17257__)=>{"use strict";exports.__esModule=true;exports.registerDefaultHelpers=registerDefaultHelpers;exports.moveHelperToHooks=moveHelperToHooks;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _helpersBlockHelperMissing=__nested_webpack_require_17257__(2984);var _helpersBlockHelperMissing2=_interopRequireDefault(_helpersBlockHelperMissing);var _helpersEach=__nested_webpack_require_17257__(31);var _helpersEach2=_interopRequireDefault(_helpersEach);var _helpersHelperMissing=__nested_webpack_require_17257__(81);var _helpersHelperMissing2=_interopRequireDefault(_helpersHelperMissing);var _helpersIf=__nested_webpack_require_17257__(691);var _helpersIf2=_interopRequireDefault(_helpersIf);var _helpersLog=__nested_webpack_require_17257__(4668);var _helpersLog2=_interopRequireDefault(_helpersLog);var _helpersLookup=__nested_webpack_require_17257__(7245);var _helpersLookup2=_interopRequireDefault(_helpersLookup);var _helpersWith=__nested_webpack_require_17257__(7420);var _helpersWith2=_interopRequireDefault(_helpersWith);function registerDefaultHelpers(instance){_helpersBlockHelperMissing2['default'](instance);_helpersEach2['default'](instance);_helpersHelperMissing2['default'](instance);_helpersIf2['default'](instance);_helpersLog2['default'](instance);_helpersLookup2['default'](instance);_helpersWith2['default'](instance);}function moveHelperToHooks(instance,helperName,keepHelper){if(instance.helpers[helperName]){instance.hooks[helperName]=instance.helpers[helperName];if(!keepHelper){delete instance.helpers[helperName];}}}/***/},/***/2984:/***/(module,exports,__nested_webpack_require_18822__)=>{"use strict";exports.__esModule=true;var _utils=__nested_webpack_require_18822__(3303);exports["default"]=function(instance){instance.registerHelper('blockHelperMissing',function(context,options){var inverse=options.inverse,fn=options.fn;if(context===true){return fn(this);}else if(context===false||context==null){return inverse(this);}else if(_utils.isArray(context)){if(context.length>0){if(options.ids){options.ids=[options.name];}return instance.helpers.each(context,options);}else{return inverse(this);}}else{if(options.data&&options.ids){var data=_utils.createFrame(options.data);data.contextPath=_utils.appendContextPath(options.data.contextPath,options.name);options={data:data};}return fn(context,options);}});};module.exports=exports['default'];/***/},/***/31:/***/(module,exports,__nested_webpack_require_19623__)=>{"use strict";exports.__esModule=true;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utils=__nested_webpack_require_19623__(3303);var _exception=__nested_webpack_require_19623__(4936);var _exception2=_interopRequireDefault(_exception);exports["default"]=function(instance){instance.registerHelper('each',function(context,options){if(!options){throw new _exception2['default']('Must pass iterator to #each');}var fn=options.fn,inverse=options.inverse,i=0,ret='',data=undefined,contextPath=undefined;if(options.data&&options.ids){contextPath=_utils.appendContextPath(options.data.contextPath,options.ids[0])+'.';}if(_utils.isFunction(context)){context=context.call(this);}if(options.data){data=_utils.createFrame(options.data);}function execIteration(field,index,last){if(data){data.key=field;data.index=index;data.first=index===0;data.last=!!last;if(contextPath){data.contextPath=contextPath+field;}}ret=ret+fn(context[field],{data:data,blockParams:_utils.blockParams([context[field],field],[contextPath+field,null])});}if(context&&typeof context==='object'){if(_utils.isArray(context)){for(var j=context.length;i<j;i++){if(i in context){execIteration(i,i,i===context.length-1);}}}else if(__nested_webpack_require_19623__.g.Symbol&&context[__nested_webpack_require_19623__.g.Symbol.iterator]){var newContext=[];var iterator=context[__nested_webpack_require_19623__.g.Symbol.iterator]();for(var it=iterator.next();!it.done;it=iterator.next()){newContext.push(it.value);}context=newContext;for(var j=context.length;i<j;i++){execIteration(i,i,i===context.length-1);}}else{(function(){var priorKey=undefined;Object.keys(context).forEach(function(key){// We're running the iterations one step out of sync so we can detect
// the last iteration without have to scan the object twice and create
// an itermediate keys array.
if(priorKey!==undefined){execIteration(priorKey,i-1);}priorKey=key;i++;});if(priorKey!==undefined){execIteration(priorKey,i-1,true);}})();}}if(i===0){ret=inverse(this);}return ret;});};module.exports=exports['default'];/***/},/***/81:/***/(module,exports,__nested_webpack_require_21719__)=>{"use strict";exports.__esModule=true;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _exception=__nested_webpack_require_21719__(4936);var _exception2=_interopRequireDefault(_exception);exports["default"]=function(instance){instance.registerHelper('helperMissing',function()/* [args, ]options */{if(arguments.length===1){// A missing field in a {{foo}} construct.
return undefined;}else{// Someone is actually trying to call something, blow up.
throw new _exception2['default']('Missing helper: "'+arguments[arguments.length-1].name+'"');}});};module.exports=exports['default'];/***/},/***/691:/***/(module,exports,__nested_webpack_require_22409__)=>{"use strict";exports.__esModule=true;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utils=__nested_webpack_require_22409__(3303);var _exception=__nested_webpack_require_22409__(4936);var _exception2=_interopRequireDefault(_exception);exports["default"]=function(instance){instance.registerHelper('if',function(conditional,options){if(arguments.length!=2){throw new _exception2['default']('#if requires exactly one argument');}if(_utils.isFunction(conditional)){conditional=conditional.call(this);}// Default behavior is to render the positive path if the value is truthy and not empty.
// The `includeZero` option may be set to treat the condtional as purely not empty based on the
// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
if(!options.hash.includeZero&&!conditional||_utils.isEmpty(conditional)){return options.inverse(this);}else{return options.fn(this);}});instance.registerHelper('unless',function(conditional,options){if(arguments.length!=2){throw new _exception2['default']('#unless requires exactly one argument');}return instance.helpers['if'].call(this,conditional,{fn:options.inverse,inverse:options.fn,hash:options.hash});});};module.exports=exports['default'];/***/},/***/4668:/***/(module,exports)=>{"use strict";exports.__esModule=true;exports["default"]=function(instance){instance.registerHelper('log',function()/* message, options */{var args=[undefined],options=arguments[arguments.length-1];for(var i=0;i<arguments.length-1;i++){args.push(arguments[i]);}var level=1;if(options.hash.level!=null){level=options.hash.level;}else if(options.data&&options.data.level!=null){level=options.data.level;}args[0]=level;instance.log.apply(instance,args);});};module.exports=exports['default'];/***/},/***/7245:/***/(module,exports)=>{"use strict";exports.__esModule=true;exports["default"]=function(instance){instance.registerHelper('lookup',function(obj,field,options){if(!obj){// Note for 5.0: Change to "obj == null" in 5.0
return obj;}return options.lookupProperty(obj,field);});};module.exports=exports['default'];/***/},/***/7420:/***/(module,exports,__nested_webpack_require_24598__)=>{"use strict";exports.__esModule=true;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utils=__nested_webpack_require_24598__(3303);var _exception=__nested_webpack_require_24598__(4936);var _exception2=_interopRequireDefault(_exception);exports["default"]=function(instance){instance.registerHelper('with',function(context,options){if(arguments.length!=2){throw new _exception2['default']('#with requires exactly one argument');}if(_utils.isFunction(context)){context=context.call(this);}var fn=options.fn;if(!_utils.isEmpty(context)){var data=options.data;if(options.data&&options.ids){data=_utils.createFrame(options.data);data.contextPath=_utils.appendContextPath(options.data.contextPath,options.ids[0]);}return fn(context,{data:data,blockParams:_utils.blockParams([context],[data&&data.contextPath])});}else{return options.inverse(this);}});};module.exports=exports['default'];/***/},/***/6547:/***/(__unused_webpack_module,exports,__nested_webpack_require_25596__)=>{"use strict";exports.__esModule=true;exports.createNewLookupObject=createNewLookupObject;var _utils=__nested_webpack_require_25596__(3303);/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */function createNewLookupObject(){for(var _len=arguments.length,sources=Array(_len),_key=0;_key<_len;_key++){sources[_key]=arguments[_key];}return _utils.extend.apply(undefined,[Object.create(null)].concat(sources));}/***/},/***/5434:/***/(__unused_webpack_module,exports,__nested_webpack_require_26316__)=>{"use strict";exports.__esModule=true;exports.createProtoAccessControl=createProtoAccessControl;exports.resultIsAllowed=resultIsAllowed;exports.resetLoggedProperties=resetLoggedProperties;// istanbul ignore next
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}var _createNewLookupObject=__nested_webpack_require_26316__(6547);var _logger=__nested_webpack_require_26316__(5324);var logger=_interopRequireWildcard(_logger);var loggedProperties=Object.create(null);function createProtoAccessControl(runtimeOptions){var defaultMethodWhiteList=Object.create(null);defaultMethodWhiteList['constructor']=false;defaultMethodWhiteList['__defineGetter__']=false;defaultMethodWhiteList['__defineSetter__']=false;defaultMethodWhiteList['__lookupGetter__']=false;var defaultPropertyWhiteList=Object.create(null);// eslint-disable-next-line no-proto
defaultPropertyWhiteList['__proto__']=false;return{properties:{whitelist:_createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList,runtimeOptions.allowedProtoProperties),defaultValue:runtimeOptions.allowProtoPropertiesByDefault},methods:{whitelist:_createNewLookupObject.createNewLookupObject(defaultMethodWhiteList,runtimeOptions.allowedProtoMethods),defaultValue:runtimeOptions.allowProtoMethodsByDefault}};}function resultIsAllowed(result,protoAccessControl,propertyName){if(typeof result==='function'){return checkWhiteList(protoAccessControl.methods,propertyName);}else{return checkWhiteList(protoAccessControl.properties,propertyName);}}function checkWhiteList(protoAccessControlForType,propertyName){if(protoAccessControlForType.whitelist[propertyName]!==undefined){return protoAccessControlForType.whitelist[propertyName]===true;}if(protoAccessControlForType.defaultValue!==undefined){return protoAccessControlForType.defaultValue;}logUnexpecedPropertyAccessOnce(propertyName);return false;}function logUnexpecedPropertyAccessOnce(propertyName){if(loggedProperties[propertyName]!==true){loggedProperties[propertyName]=true;logger.log('error','Handlebars: Access has been denied to resolve the property "'+propertyName+'" because it is not an "own property" of its parent.\n'+'You can add a runtime option to disable the check or this warning:\n'+'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');}}function resetLoggedProperties(){Object.keys(loggedProperties).forEach(function(propertyName){delete loggedProperties[propertyName];});}/***/},/***/1208:/***/(__unused_webpack_module,exports)=>{"use strict";exports.__esModule=true;exports.wrapHelper=wrapHelper;function wrapHelper(helper,transformOptionsFn){if(typeof helper!=='function'){// This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
// We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
return helper;}var wrapper=function wrapper()/* dynamic arguments */{var options=arguments[arguments.length-1];arguments[arguments.length-1]=transformOptionsFn(options);return helper.apply(this,arguments);};return wrapper;}/***/},/***/5324:/***/(module,exports,__nested_webpack_require_29623__)=>{"use strict";exports.__esModule=true;var _utils=__nested_webpack_require_29623__(3303);var logger={methodMap:['debug','info','warn','error'],level:'info',// Maps a given level value to the `methodMap` indexes above.
lookupLevel:function lookupLevel(level){if(typeof level==='string'){var levelMap=_utils.indexOf(logger.methodMap,level.toLowerCase());if(levelMap>=0){level=levelMap;}else{level=parseInt(level,10);}}return level;},// Can be overridden in the host environment
log:function log(level){level=logger.lookupLevel(level);if(typeof console!=='undefined'&&logger.lookupLevel(logger.level)<=level){var method=logger.methodMap[level];// eslint-disable-next-line no-console
if(!console[method]){method='log';}for(var _len=arguments.length,message=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){message[_key-1]=arguments[_key];}console[method].apply(console,message);// eslint-disable-line no-console
}}};exports["default"]=logger;module.exports=exports['default'];/***/},/***/5727:/***/(module,exports,__nested_webpack_require_30640__)=>{"use strict";exports.__esModule=true;exports["default"]=function(Handlebars){/* istanbul ignore next */var root=typeof __nested_webpack_require_30640__.g!=='undefined'?__nested_webpack_require_30640__.g:window,$Handlebars=root.Handlebars;/* istanbul ignore next */Handlebars.noConflict=function(){if(root.Handlebars===Handlebars){root.Handlebars=$Handlebars;}return Handlebars;};};module.exports=exports['default'];/***/},/***/9657:/***/(__unused_webpack_module,exports,__nested_webpack_require_31107__)=>{"use strict";exports.__esModule=true;exports.checkRevision=checkRevision;exports.template=template;exports.wrapProgram=wrapProgram;exports.resolvePartial=resolvePartial;exports.invokePartial=invokePartial;exports.noop=noop;// istanbul ignore next
function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}// istanbul ignore next
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}var _utils=__nested_webpack_require_31107__(3303);var Utils=_interopRequireWildcard(_utils);var _exception=__nested_webpack_require_31107__(4936);var _exception2=_interopRequireDefault(_exception);var _base=__nested_webpack_require_31107__(7060);var _helpers=__nested_webpack_require_31107__(9228);var _internalWrapHelper=__nested_webpack_require_31107__(1208);var _internalProtoAccess=__nested_webpack_require_31107__(5434);function checkRevision(compilerInfo){var compilerRevision=compilerInfo&&compilerInfo[0]||1,currentRevision=_base.COMPILER_REVISION;if(compilerRevision>=_base.LAST_COMPATIBLE_COMPILER_REVISION&&compilerRevision<=_base.COMPILER_REVISION){return;}if(compilerRevision<_base.LAST_COMPATIBLE_COMPILER_REVISION){var runtimeVersions=_base.REVISION_CHANGES[currentRevision],compilerVersions=_base.REVISION_CHANGES[compilerRevision];throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. '+'Please update your precompiler to a newer version ('+runtimeVersions+') or downgrade your runtime to an older version ('+compilerVersions+').');}else{// Use the embedded version info since the runtime doesn't know about this revision yet
throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. '+'Please update your runtime to a newer version ('+compilerInfo[1]+').');}}function template(templateSpec,env){/* istanbul ignore next */if(!env){throw new _exception2['default']('No environment passed to template');}if(!templateSpec||!templateSpec.main){throw new _exception2['default']('Unknown template object: '+typeof templateSpec);}templateSpec.main.decorator=templateSpec.main_d;// Note: Using env.VM references rather than local var references throughout this section to allow
// for external users to override these as pseudo-supported APIs.
env.VM.checkRevision(templateSpec.compiler);// backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
var templateWasPrecompiledWithCompilerV7=templateSpec.compiler&&templateSpec.compiler[0]===7;function invokePartialWrapper(partial,context,options){if(options.hash){context=Utils.extend({},context,options.hash);if(options.ids){options.ids[0]=true;}}partial=env.VM.resolvePartial.call(this,partial,context,options);var extendedOptions=Utils.extend({},options,{hooks:this.hooks,protoAccessControl:this.protoAccessControl});var result=env.VM.invokePartial.call(this,partial,context,extendedOptions);if(result==null&&env.compile){options.partials[options.name]=env.compile(partial,templateSpec.compilerOptions,env);result=options.partials[options.name](context,extendedOptions);}if(result!=null){if(options.indent){var lines=result.split('\n');for(var i=0,l=lines.length;i<l;i++){if(!lines[i]&&i+1===l){break;}lines[i]=options.indent+lines[i];}result=lines.join('\n');}return result;}else{throw new _exception2['default']('The partial '+options.name+' could not be compiled when running in runtime-only mode');}}// Just add water
var container={strict:function strict(obj,name,loc){if(!obj||!(name in obj)){throw new _exception2['default']('"'+name+'" not defined in '+obj,{loc:loc});}return container.lookupProperty(obj,name);},lookupProperty:function lookupProperty(parent,propertyName){var result=parent[propertyName];if(result==null){return result;}if(Object.prototype.hasOwnProperty.call(parent,propertyName)){return result;}if(_internalProtoAccess.resultIsAllowed(result,container.protoAccessControl,propertyName)){return result;}return undefined;},lookup:function lookup(depths,name){var len=depths.length;for(var i=0;i<len;i++){var result=depths[i]&&container.lookupProperty(depths[i],name);if(result!=null){return depths[i][name];}}},lambda:function lambda(current,context){return typeof current==='function'?current.call(context):current;},escapeExpression:Utils.escapeExpression,invokePartial:invokePartialWrapper,fn:function fn(i){var ret=templateSpec[i];ret.decorator=templateSpec[i+'_d'];return ret;},programs:[],program:function program(i,data,declaredBlockParams,blockParams,depths){var programWrapper=this.programs[i],fn=this.fn(i);if(data||depths||blockParams||declaredBlockParams){programWrapper=wrapProgram(this,i,fn,data,declaredBlockParams,blockParams,depths);}else if(!programWrapper){programWrapper=this.programs[i]=wrapProgram(this,i,fn);}return programWrapper;},data:function data(value,depth){while(value&&depth--){value=value._parent;}return value;},mergeIfNeeded:function mergeIfNeeded(param,common){var obj=param||common;if(param&&common&&param!==common){obj=Utils.extend({},common,param);}return obj;},// An empty object to use as replacement for null-contexts
nullContext:Object.seal({}),noop:env.VM.noop,compilerInfo:templateSpec.compiler};function ret(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var data=options.data;ret._setup(options);if(!options.partial&&templateSpec.useData){data=initData(context,data);}var depths=undefined,blockParams=templateSpec.useBlockParams?[]:undefined;if(templateSpec.useDepths){if(options.depths){depths=context!=options.depths[0]?[context].concat(options.depths):options.depths;}else{depths=[context];}}function main(context/*, options*/){return''+templateSpec.main(container,context,container.helpers,container.partials,data,blockParams,depths);}main=executeDecorators(templateSpec.main,main,container,options.depths||[],data,blockParams);return main(context,options);}ret.isTop=true;ret._setup=function(options){if(!options.partial){var mergedHelpers=Utils.extend({},env.helpers,options.helpers);wrapHelpersToPassLookupProperty(mergedHelpers,container);container.helpers=mergedHelpers;if(templateSpec.usePartial){// Use mergeIfNeeded here to prevent compiling global partials multiple times
container.partials=container.mergeIfNeeded(options.partials,env.partials);}if(templateSpec.usePartial||templateSpec.useDecorators){container.decorators=Utils.extend({},env.decorators,options.decorators);}container.hooks={};container.protoAccessControl=_internalProtoAccess.createProtoAccessControl(options);var keepHelperInHelpers=options.allowCallsToHelperMissing||templateWasPrecompiledWithCompilerV7;_helpers.moveHelperToHooks(container,'helperMissing',keepHelperInHelpers);_helpers.moveHelperToHooks(container,'blockHelperMissing',keepHelperInHelpers);}else{container.protoAccessControl=options.protoAccessControl;// internal option
container.helpers=options.helpers;container.partials=options.partials;container.decorators=options.decorators;container.hooks=options.hooks;}};ret._child=function(i,data,blockParams,depths){if(templateSpec.useBlockParams&&!blockParams){throw new _exception2['default']('must pass block params');}if(templateSpec.useDepths&&!depths){throw new _exception2['default']('must pass parent depths');}return wrapProgram(container,i,templateSpec[i],data,0,blockParams,depths);};return ret;}function wrapProgram(container,i,fn,data,declaredBlockParams,blockParams,depths){function prog(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var currentDepths=depths;if(depths&&context!=depths[0]&&!(context===container.nullContext&&depths[0]===null)){currentDepths=[context].concat(depths);}return fn(container,context,container.helpers,container.partials,options.data||data,blockParams&&[options.blockParams].concat(blockParams),currentDepths);}prog=executeDecorators(fn,prog,container,depths,data,blockParams);prog.program=i;prog.depth=depths?depths.length:0;prog.blockParams=declaredBlockParams||0;return prog;}/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */function resolvePartial(partial,context,options){if(!partial){if(options.name==='@partial-block'){partial=options.data['partial-block'];}else{partial=options.partials[options.name];}}else if(!partial.call&&!options.name){// This is a dynamic partial that returned a string
options.name=partial;partial=options.partials[partial];}return partial;}function invokePartial(partial,context,options){// Use the current closure context to save the partial-block if this partial
var currentPartialBlock=options.data&&options.data['partial-block'];options.partial=true;if(options.ids){options.data.contextPath=options.ids[0]||options.data.contextPath;}var partialBlock=undefined;if(options.fn&&options.fn!==noop){(function(){options.data=_base.createFrame(options.data);// Wrapper function to get access to currentPartialBlock from the closure
var fn=options.fn;partialBlock=options.data['partial-block']=function partialBlockWrapper(context){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];// Restore the partial-block from the closure for the execution of the block
// i.e. the part inside the block of the partial call.
options.data=_base.createFrame(options.data);options.data['partial-block']=currentPartialBlock;return fn(context,options);};if(fn.partials){options.partials=Utils.extend({},options.partials,fn.partials);}})();}if(partial===undefined&&partialBlock){partial=partialBlock;}if(partial===undefined){throw new _exception2['default']('The partial '+options.name+' could not be found');}else if(partial instanceof Function){return partial(context,options);}}function noop(){return'';}function initData(context,data){if(!data||!('root'in data)){data=data?_base.createFrame(data):{};data.root=context;}return data;}function executeDecorators(fn,prog,container,depths,data,blockParams){if(fn.decorator){var props={};prog=fn.decorator(prog,props,container,depths&&depths[0],data,blockParams,depths);Utils.extend(prog,props);}return prog;}function wrapHelpersToPassLookupProperty(mergedHelpers,container){Object.keys(mergedHelpers).forEach(function(helperName){var helper=mergedHelpers[helperName];mergedHelpers[helperName]=passLookupPropertyOption(helper,container);});}function passLookupPropertyOption(helper,container){var lookupProperty=container.lookupProperty;return _internalWrapHelper.wrapHelper(helper,function(options){return Utils.extend({lookupProperty:lookupProperty},options);});}/***/},/***/5442:/***/(module,exports)=>{"use strict";// Build out our basic SafeString type
exports.__esModule=true;function SafeString(string){this.string=string;}SafeString.prototype.toString=SafeString.prototype.toHTML=function(){return''+this.string;};exports["default"]=SafeString;module.exports=exports['default'];/***/},/***/3303:/***/(__unused_webpack_module,exports)=>{"use strict";exports.__esModule=true;exports.extend=extend;exports.indexOf=indexOf;exports.escapeExpression=escapeExpression;exports.isEmpty=isEmpty;exports.createFrame=createFrame;exports.blockParams=blockParams;exports.appendContextPath=appendContextPath;var escape={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;','=':'&#x3D;'};var badChars=/[&<>"'`=]/g,possible=/[&<>"'`=]/;function escapeChar(chr){return escape[chr];}function extend(obj/* , ...source */){for(var i=1;i<arguments.length;i++){for(var key in arguments[i]){if(Object.prototype.hasOwnProperty.call(arguments[i],key)){obj[key]=arguments[i][key];}}}return obj;}var toString=Object.prototype.toString;exports.toString=toString;// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */var isFunction=function isFunction(value){return typeof value==='function';};// fallback for older versions of Chrome and Safari
/* istanbul ignore next */if(isFunction(/x/)){exports.isFunction=isFunction=function(value){return typeof value==='function'&&toString.call(value)==='[object Function]';};}exports.isFunction=isFunction;/* eslint-enable func-style */ /* istanbul ignore next */var isArray=Array.isArray||function(value){return value&&typeof value==='object'?toString.call(value)==='[object Array]':false;};exports.isArray=isArray;// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array,value){for(var i=0,len=array.length;i<len;i++){if(array[i]===value){return i;}}return-1;}function escapeExpression(string){if(typeof string!=='string'){// don't escape SafeStrings, since they're already safe
if(string&&string.toHTML){return string.toHTML();}else if(string==null){return'';}else if(!string){return string+'';}// Force a string conversion as this will be done by the append regardless and
// the regex test will do this transparently behind the scenes, causing issues if
// an object's to string has escaped characters in it.
string=''+string;}if(!possible.test(string)){return string;}return string.replace(badChars,escapeChar);}function isEmpty(value){if(!value&&value!==0){return true;}else if(isArray(value)&&value.length===0){return true;}else{return false;}}function createFrame(object){var frame=extend({},object);frame._parent=object;return frame;}function blockParams(params,ids){params.path=ids;return params;}function appendContextPath(contextPath,id){return(contextPath?contextPath+'.':'')+id;}/***/},/***/1524:/***/(module,__unused_webpack_exports,__nested_webpack_require_44695__)=>{// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports=__nested_webpack_require_44695__(4208)["default"];/***/},/***/6013:/***/function(module){(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else{}})(typeof self!=='undefined'?self:this,function(){return(/******/(()=>{// webpackBootstrap
/******/var __webpack_modules__={/***/8424:/***/(__unused_webpack_module,__webpack_exports__,__nested_webpack_require_558__)=>{"use strict";// ESM COMPAT FLAG
__nested_webpack_require_558__.r(__webpack_exports__);// EXPORTS
__nested_webpack_require_558__.d(__webpack_exports__,{"chordParserFactory":()=>/* reexport */parser_chordParserFactory,"chordRendererFactory":()=>/* reexport */renderer_chordRendererFactory});// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat=__nested_webpack_require_558__(2222);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter=__nested_webpack_require_558__(7327);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each=__nested_webpack_require_558__(9554);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes=__nested_webpack_require_558__(6699);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name=__nested_webpack_require_558__(8309);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes=__nested_webpack_require_558__(2023);// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each=__nested_webpack_require_558__(4747);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce=__nested_webpack_require_558__(5827);;// CONCATENATED MODULE: ./src/helpers/chain.js
/**
 * Execute given functions in sequence, feeding the result of one as an input to the next.
 *
 * @param {Function[]} allFunctions
 * @param {*} input - parameter given to the first function
 * @returns {*} return value of the last function
 */function chain(allFunctions,input){return allFunctions.reduce(function(value,fn){return value?fn(value):null;},input);}// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep=__nested_webpack_require_558__(361);var cloneDeep_default=/*#__PURE__*/__nested_webpack_require_558__.n(cloneDeep);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some=__nested_webpack_require_558__(5212);;// CONCATENATED MODULE: ./src/helpers/checkCustomFilters.js
var checkCustomFilters=function checkCustomFilters(customFilters){if(!Array.isArray(customFilters)){throw new TypeError('customFilters should be given as an array');}if(customFilters.some(function(filter){return typeof filter!=='function';})){throw new TypeError("The given filter is not a function");}return true;};/* harmony default export */const helpers_checkCustomFilters=checkCustomFilters;// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys=__nested_webpack_require_558__(7941);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec=__nested_webpack_require_558__(4916);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match=__nested_webpack_require_558__(4723);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace=__nested_webpack_require_558__(5306);;// CONCATENATED MODULE: ./src/dictionaries/notes.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var notes={AFlat:'Ab',A:'A',ASharp:'A#',BFlat:'Bb',B:'B',C:'C',CSharp:'C#',DFlat:'Db',D:'D',DSharp:'D#',EFlat:'Eb',E:'E',F:'F',FSharp:'F#',GFlat:'Gb',G:'G',GSharp:'G#'};var english={Ab:notes.AFlat,A:notes.A,'A#':notes.ASharp,Bb:notes.BFlat,B:notes.B,'B#':notes.C,Cb:notes.B,C:notes.C,'C#':notes.CSharp,Db:notes.DFlat,D:notes.D,'D#':notes.DSharp,Eb:notes.EFlat,E:notes.E,'E#':notes.F,Fb:notes.E,F:notes.F,'F#':notes.FSharp,Gb:notes.GFlat,G:notes.G,'G#':notes.GSharp};var latin={Lab:notes.AFlat,La:notes.A,'La#':notes.ASharp,Sib:notes.BFlat,Si:notes.B,'Si#':notes.C,Dob:notes.B,Do:notes.C,'Do#':notes.CSharp,Reb:notes.DFlat,Réb:notes.DFlat,Re:notes.D,Ré:notes.D,'Re#':notes.DSharp,'Ré#':notes.DSharp,Mib:notes.EFlat,Mi:notes.E,'Mi#':notes.F,Fab:notes.E,Fa:notes.F,'Fa#':notes.FSharp,Solb:notes.GFlat,Sol:notes.G,'Sol#':notes.GSharp};var german={As:notes.AFlat,A:notes.A,Ais:notes.ASharp,Hes:notes.BFlat,H:notes.B,His:notes.C,Ces:notes.B,C:notes.C,Cis:notes.CSharp,Des:notes.DFlat,D:notes.D,Dis:notes.DSharp,Es:notes.EFlat,E:notes.E,Eis:notes.F,Fes:notes.E,F:notes.F,Fis:notes.FSharp,Ges:notes.GFlat,G:notes.G,Gis:notes.GSharp};function getAccidentalsVariation(source){var variant;return Object.keys(source).reduce(function(acc,curr){if(curr.match(/.[b|#]$/)){variant=curr.replace('#','♯').replace('b','♭');acc[variant]=source[curr];}return acc;},{});}var englishVariantsToNotes=_objectSpread(_objectSpread({},english),getAccidentalsVariation(english));var latinVariantsToNotes=_objectSpread(_objectSpread({},latin),getAccidentalsVariation(latin));var germanVariantsToNotes=_objectSpread({},german);var allVariantsToNotes=_objectSpread(_objectSpread(_objectSpread({},englishVariantsToNotes),latinVariantsToNotes),germanVariantsToNotes);var allVariants=Object.keys(allVariantsToNotes).sort(function(a,b){return b.length-a.length;});var englishVariants=Object.keys(englishVariantsToNotes).sort(function(a,b){return b.length-a.length;});var latinVariants=Object.keys(latinVariantsToNotes).sort(function(a,b){return b.length-a.length;});var germanVariants=Object.keys(germanVariantsToNotes).sort(function(a,b){return b.length-a.length;});var allVariantsPerGroup=[{name:'english',notes:englishVariants},{name:'german',notes:germanVariants},{name:'latin',notes:latinVariants}];// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join=__nested_webpack_require_558__(9600);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of=__nested_webpack_require_558__(489);;// CONCATENATED MODULE: ./src/helpers/ChordParsingError.js
function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function _construct(Parent,args,Class){if(_isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var InvalidInputError=/*#__PURE__*/function(_Error){_inherits(InvalidInputError,_Error);var _super=_createSuper(InvalidInputError);/**
   *  The parser was not given a valid string to parse
   *  ex: `parseChord(null)`
   */function InvalidInputError(){var _this;_classCallCheck(this,InvalidInputError);_this=_super.call(this,'The given symbol is not a valid string');_this.name='InvalidInput';return _this;}return InvalidInputError;}(/*#__PURE__*/_wrapNativeSuper(Error));var UnexpectedError=/*#__PURE__*/function(_Error2){_inherits(UnexpectedError,_Error2);var _super2=_createSuper(UnexpectedError);/**
   * This error is very unlikely to happen.
   * If it does, it is probably in the context of a custom filter that returns `null` instead of throwing an exception.
   */function UnexpectedError(){var _this2;_classCallCheck(this,UnexpectedError);var message='An unexpected error happened. Maybe a custom filter returned null instead of throwing an exception?';_this2=_super2.call(this,message);_this2.name='UnexpectedError';return _this2;}return UnexpectedError;}(/*#__PURE__*/_wrapNativeSuper(Error));var ChordSymbolError=/*#__PURE__*/function(_Error3){_inherits(ChordSymbolError,_Error3);var _super3=_createSuper(ChordSymbolError);function ChordSymbolError(message,chord,errorName){var _this3;_classCallCheck(this,ChordSymbolError);_this3=_super3.call(this,message);_this3.name=errorName;_this3.chord=chord;return _this3;}return ChordSymbolError;}(/*#__PURE__*/_wrapNativeSuper(Error));var NoSymbolFoundError=/*#__PURE__*/function(_ChordSymbolError){_inherits(NoSymbolFoundError,_ChordSymbolError);var _super4=_createSuper(NoSymbolFoundError);/**
   * The given string cannot be confused with a chord symbol in the current notation system
   * ex: `parseChord('Ape')`
   * @param {Chord} chord - the chord object, in the state that it was when the error occurred
   */function NoSymbolFoundError(chord){_classCallCheck(this,NoSymbolFoundError);var message="\"".concat(chord.input.symbol,"\" does not seems to be a chord");return _super4.call(this,message,chord,'NoSymbolFound');}return NoSymbolFoundError;}(ChordSymbolError);var InvalidModifierError=/*#__PURE__*/function(_ChordSymbolError2){_inherits(InvalidModifierError,_ChordSymbolError2);var _super5=_createSuper(InvalidModifierError);/**
   * The given string looks like a chord symbol, but `ChordSymbol` does not understand its descriptor.
   * It can be either because of a typo, or just because the given word is not a symbol.
   * ex: `parseChord('Amid')`
   * @param {Chord} chord - the chord object, in the state that it was when the error occurred
   * @param {String} invalidChars - the characters that proved problematic when parsing the symbol
   */function InvalidModifierError(chord,invalidChars){_classCallCheck(this,InvalidModifierError);var message="The chord descriptor \"".concat(chord.input.descriptor,"\" contains unknown or duplicated modifiers: \"").concat(invalidChars,"\"");return _super5.call(this,message,chord,'InvalidModifier');}return InvalidModifierError;}(ChordSymbolError);var InvalidIntervalsError=/*#__PURE__*/function(_ChordSymbolError3){_inherits(InvalidIntervalsError,_ChordSymbolError3);var _super6=_createSuper(InvalidIntervalsError);/**
   * The given string is a chord symbol, but the resulting interval list is not valid
   * ex: `parseChord('A7M7')`
   * @param {Chord} chord - the chord object, in the state that it was when the error occurred
   * @param {String[]} forbiddenCombo - intervals that should not belong together in a chord
   */function InvalidIntervalsError(chord,forbiddenCombo){_classCallCheck(this,InvalidIntervalsError);var message="\"".concat(chord.input.symbol,"\" describes a chord with an invalid intervals combo: ")+forbiddenCombo.join(' and ');return _super6.call(this,message,chord,'InvalidIntervals');}return InvalidIntervalsError;}(ChordSymbolError);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find=__nested_webpack_require_558__(9826);// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray=__nested_webpack_require_558__(1469);var isArray_default=/*#__PURE__*/__nested_webpack_require_558__.n(isArray);// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual=__nested_webpack_require_558__(8446);var isEqual_default=/*#__PURE__*/__nested_webpack_require_558__.n(isEqual);;// CONCATENATED MODULE: ./src/helpers/hasElement.js
function hasExactly(allIntervals,search){var arraySearch=isArray_default()(search)?search:[search];return isEqual_default()(allIntervals,arraySearch);}function hasOneOf(allIntervals,search){return has(allIntervals,search,'oneOf');}function hasAll(allIntervals,search){return has(allIntervals,search,'all');}function hasNoneOf(allIntervals,search){return has(allIntervals,search,'none');}function has(allIntervals,search,require){var arraySearch=isArray_default()(search)?search:[search];var lookupMethod=require==='oneOf'?'some':'every';return arraySearch[lookupMethod](function(interval){return require==='none'?!allIntervals.includes(interval):allIntervals.includes(interval);});};// CONCATENATED MODULE: ./src/parser/filters/checkIntervalsConsistency.js
var allForbiddenCombos=[['2','3'],['2','9'],['3','b3'],//['3',  '4'], // valid in the Real Book: F#7SUS(add 3)
['4','11'],['5','b5'],['5','#5'],['b6','#5'],['b6','6'],['b6','13'],['6','13'],['b7','bb7'],['7','b7'],['9','b9'],['9','#9'],['11','#11'],['13','b13']];/**
 * Check parsed interval list to detect potential inconsistencies
 *
 * @param {Chord} chord
 * @returns {Chord|Null}
 */function checkIntervalsConsistency(chord){var intervals=chord.normalized.intervals;var forbiddenCombo=allForbiddenCombos.find(function(combo){return hasAll(intervals,combo);});if(forbiddenCombo){throw new InvalidIntervalsError(chord,forbiddenCombo);}return chord;}// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map=__nested_webpack_require_558__(1249);;// CONCATENATED MODULE: ./src/dictionaries/qualities.js
var qualities={ma:'major',ma6:'major6',ma7:'major7',dom7:'dominant7',mi:'minor',mi6:'minor6',mi7:'minor7',miMa7:'minorMajor7',aug:'augmented',dim:'diminished',dim7:'diminished7',power:'power',bass:'bass'};var majorQualities=[qualities.ma,qualities.ma6,qualities.ma7,qualities.dom7,qualities.aug];var minorQualities=[qualities.mi,qualities.mi6,qualities.mi7,qualities.miMa7,qualities.dim,qualities.dim7];;// CONCATENATED MODULE: ./src/parser/filters/formatSymbolParts.js
var _qualityToDescriptor;function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function formatSymbolParts_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var qualityToDescriptor=(_qualityToDescriptor={},formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.ma,function(){return'';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.ma6,function(chord){return chord.normalized.intervals.includes('9')?'69':'6';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.ma7,function(chord){return'ma'+getHighestExtension(chord);}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.dom7,function(chord){return chord.normalized.intents.alt?'7alt':getHighestExtension(chord);}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.mi,function(){return'mi';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.mi6,function(chord){return chord.normalized.intervals.includes('9')?'mi69':'mi6';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.mi7,function(chord){return'mi'+getHighestExtension(chord);}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.miMa7,function(chord){return'miMa'+getHighestExtension(chord);}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.aug,function(){return'+';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.dim,function(){return'dim';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.dim7,function(){return'dim7';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.power,function(){return'5';}),formatSymbolParts_defineProperty(_qualityToDescriptor,qualities.bass,function(){return' bass';}),_qualityToDescriptor);var chordChangesDescriptors={add:'add',add7:'Ma7',omit:'omit',sus:'sus'};/**
 * Pre-render the chord by formatting all his components: root and bass notes, descriptor and changes
 *
 * @param {Chord} chord
 * @returns {Chord}
 */function formatSymbolParts(chord){chord.formatted={rootNote:chord.normalized.rootNote,bassNote:chord.normalized.bassNote,descriptor:getDescriptor(chord),chordChanges:getChordChanges(chord)};return chord;}function getDescriptor(chord){var descriptor=qualityToDescriptor[chord.normalized.quality](chord);if(chord.normalized.isSuspended){descriptor+=chordChangesDescriptors.sus;}return descriptor;}function getHighestExtension(chord){var extensions=chord.normalized.extensions;var highestExtension=extensions[extensions.length-1];if(highestExtension==='11'&&chord.normalized.intents.major){highestExtension=hasNoneOf(chord.normalized.alterations,['b9','#9'])?'9':'7';}return highestExtension||'7';}function getChordChanges(chord){var formattedOmits=formatOmits(chord.normalized.omits);if(isAltered(chord)){return formattedOmits;}var formattedAdds=formatAdds(chord.normalized.quality,chord.normalized.adds);return[].concat(_toConsumableArray(chord.normalized.alterations),_toConsumableArray(formattedAdds),_toConsumableArray(formattedOmits));}function isAltered(chord){return chord.normalized.intents.alt&&chord.normalized.quality===qualities.dom7;}function formatAdds(quality,adds){return adds.filter(function(add){return!([qualities.ma6,qualities.mi6].includes(quality)&&add==='9');}).map(function(add,index){var formatted='';if(index===0){formatted+=chordChangesDescriptors.add;if(['b','#'].includes(add[0])){formatted+=' ';}}formatted+=add==='7'?chordChangesDescriptors.add7:add;return formatted;});}function formatOmits(omits){return omits.map(function(omitted,index){var formatted='';if(index===0){formatted+=chordChangesDescriptors.omit;}formatted+=omitted==='b3'?'3':omitted;return formatted;});}// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split=__nested_webpack_require_558__(3123);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with=__nested_webpack_require_558__(6755);;// CONCATENATED MODULE: ./src/parser/filters/getParsableDescriptor.js
/**
 * Prepare whatever string has been identified as a descriptor so it is parsable by the next filter
 *
 * @param {Chord} chord
 * @returns {Chord}
 */function getParsableDescriptor(chord){var allFilters=[toLowerCaseExceptMajorM,removeSpaces,addDisambiguators,addMissingVerbs];if(chord.input.descriptor){chord.input.parsableDescriptor=chain(allFilters,chord.input.descriptor);}return chord;}function toLowerCaseExceptMajorM(descriptor){return descriptor.replace(/[A-LN-Za-z]+/g,function(match){return match.toLowerCase();}).replace('oMit','omit').replace('diM','dim').replace('augMented','augmented');}function removeSpaces(descriptor){return descriptor.replace(/ /g,'');}function addDisambiguators(descriptor){return descriptor.replace(/(7?dim)(alt|add)/g,'$1 $2').replace(/([m|M])(alt|add)/g,'$1 $2').replace(/i(no[35])/g,'i $1').replace(/([b♭#♯]9)6/g,'$1 6').replace(/(9\/?6)/g,' $1');}function addMissingVerbs(descriptor){var allTokensWithVerbs;var currentVerb;var hasVerb;return descriptor.replace(/\((.*?)\)/g,function(match,parenthesis){allTokensWithVerbs=[];currentVerb='';parenthesis.split(',').forEach(function(token){hasVerb=true;if(token.startsWith('add')){currentVerb='add';}else if(token.startsWith('omit')){currentVerb='omit';}else if(token.startsWith('no')){currentVerb='no';}else{hasVerb=false;}if(hasVerb){allTokensWithVerbs.push(token);}else{allTokensWithVerbs.push(currentVerb+token);}});return' '+allTokensWithVerbs.join(' ')+' ';});};// CONCATENATED MODULE: ./src/parser/filters/initChord.js
/**
 * @param {String} symbol
 * @param {Object} parserConfiguration
 * @returns {Chord}
 */function initChord(){var parserConfiguration=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var symbol=arguments.length>1?arguments[1]:undefined;return{input:{symbol:symbol},normalized:{},formatted:{},parserConfiguration:cloneDeep_default()(parserConfiguration)};}// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of=__nested_webpack_require_558__(2772);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice=__nested_webpack_require_558__(7042);;// CONCATENATED MODULE: ./src/parser/filters/nameIndividualChordNotes.js
var _rootNoteToScaleAccid;function nameIndividualChordNotes_toConsumableArray(arr){return nameIndividualChordNotes_arrayWithoutHoles(arr)||nameIndividualChordNotes_iterableToArray(arr)||nameIndividualChordNotes_unsupportedIterableToArray(arr)||nameIndividualChordNotes_nonIterableSpread();}function nameIndividualChordNotes_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function nameIndividualChordNotes_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return nameIndividualChordNotes_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nameIndividualChordNotes_arrayLikeToArray(o,minLen);}function nameIndividualChordNotes_iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function nameIndividualChordNotes_arrayWithoutHoles(arr){if(Array.isArray(arr))return nameIndividualChordNotes_arrayLikeToArray(arr);}function nameIndividualChordNotes_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function nameIndividualChordNotes_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var notesSharp=[notes.A,notes.ASharp,notes.B,notes.C,notes.CSharp,notes.D,notes.DSharp,notes.E,notes.F,notes.FSharp,notes.G,notes.GSharp];var notesFlat=[notes.A,notes.BFlat,notes.B,notes.C,notes.DFlat,notes.D,notes.EFlat,notes.E,notes.F,notes.GFlat,notes.G,notes.AFlat];var rootNoteToScaleAccidentals=(_rootNoteToScaleAccid={},nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.C,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.CSharp,{maj:'sharp',min:'sharp'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.DFlat,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.D,{maj:'sharp',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.DSharp,{maj:'sharp',min:'sharp'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.EFlat,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.E,{maj:'sharp',min:'sharp'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.F,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.FSharp,{maj:'sharp',min:'sharp'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.GFlat,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.G,{maj:'sharp',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.GSharp,{maj:'sharp',min:'sharp'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.AFlat,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.A,{maj:'sharp',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.ASharp,{maj:'sharp',min:'sharp'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.BFlat,{maj:'flat',min:'flat'}),nameIndividualChordNotes_defineProperty(_rootNoteToScaleAccid,notes.B,{maj:'sharp',min:'sharp'}),_rootNoteToScaleAccid);/**
 * Convert intervals in actual notes.
 *
 * @param {Chord} chord
 * @returns {Chord}
 */function nameIndividualChordNotes(chord){var rootNote=chord.normalized.rootNote;var semitones=chord.normalized.semitones;var quality=chord.normalized.quality;var minMaj=majorQualities.includes(quality)?'maj':'min';var refNotes=rootNoteToScaleAccidentals[rootNote][minMaj]==='sharp'?notesSharp:notesFlat;var rootNoteIndex=refNotes.indexOf(rootNote);var indexedNotes=[].concat(nameIndividualChordNotes_toConsumableArray(refNotes.slice(rootNoteIndex)),nameIndividualChordNotes_toConsumableArray(refNotes.slice(0,rootNoteIndex)),nameIndividualChordNotes_toConsumableArray(refNotes.slice(rootNoteIndex)),nameIndividualChordNotes_toConsumableArray(refNotes.slice(0,rootNoteIndex)));var chordNotes=semitones.map(function(i){return indexedNotes[i];});chord.normalized.notes=chordNotes;return chord;};// CONCATENATED MODULE: ./src/parser/filters/normalizeNotes.js
/**
 * Convert root/bass notes to English names
 *
 * @param {Chord} chord
 * @returns {Chord}
 */function normalizeNotes(chord){chord.normalized.rootNote=allVariantsToNotes[chord.input.rootNote];if(chord.input.bassNote){chord.normalized.bassNote=allVariantsToNotes[chord.input.bassNote];}return chord;}// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor=__nested_webpack_require_558__(9653);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.parse-int.js
var es_number_parse_int=__nested_webpack_require_558__(9494);// EXTERNAL MODULE: ./node_modules/lodash/clone.js
var clone=__nested_webpack_require_558__(6678);var clone_default=/*#__PURE__*/__nested_webpack_require_558__.n(clone);// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find=__nested_webpack_require_558__(3311);var find_default=/*#__PURE__*/__nested_webpack_require_558__.n(find);// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq=__nested_webpack_require_558__(4908);var uniq_default=/*#__PURE__*/__nested_webpack_require_558__.n(uniq);// EXTERNAL MODULE: ./node_modules/lodash/without.js
var without=__nested_webpack_require_558__(2569);var without_default=/*#__PURE__*/__nested_webpack_require_558__.n(without);;// CONCATENATED MODULE: ./src/parser/filters/normalizeDescriptor.js
function normalizeDescriptor_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function normalizeDescriptor_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){normalizeDescriptor_ownKeys(Object(source),true).forEach(function(key){normalizeDescriptor_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{normalizeDescriptor_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function normalizeDescriptor_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function normalizeDescriptor_toConsumableArray(arr){return normalizeDescriptor_arrayWithoutHoles(arr)||normalizeDescriptor_iterableToArray(arr)||normalizeDescriptor_unsupportedIterableToArray(arr)||normalizeDescriptor_nonIterableSpread();}function normalizeDescriptor_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function normalizeDescriptor_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return normalizeDescriptor_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return normalizeDescriptor_arrayLikeToArray(o,minLen);}function normalizeDescriptor_iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function normalizeDescriptor_arrayWithoutHoles(arr){if(Array.isArray(arr))return normalizeDescriptor_arrayLikeToArray(arr);}function normalizeDescriptor_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/**
 * Detect chord quality and changes (extensions, alterations, adds and omits)
 *
 * @param {Chord} chord
 * @returns {Chord}
 */function normalizeDescriptor(chord){var chordIntervals=clone_default()(chord.normalized.intervals);var normalized={quality:'',isSuspended:false,extensions:[],alterations:[],adds:[],omits:[]};if(isPowerChord(chordIntervals)){normalized.quality=qualities.power;}else if(isBass(chordIntervals)){normalized.quality=qualities.bass;}else{var omits=getOmits(chordIntervals,chord.normalized.intents.major);var isSuspended=getIsSuspended(chordIntervals,chord.normalized.intents.major);var _getChordQuality=getChordQuality(chordIntervals,chord,isSuspended,omits),qualityIntervals=_getChordQuality.qualityIntervals,quality=_getChordQuality.quality;var extensions=getExtensions(chordIntervals,quality);// to be able to detect adds and alterations, we build the "straight" version of the chord,
// ie. the chord as if no alterations/adds/omits where present.
// we will compare this to the actual intervals later on
var baseIntervals=['1'].concat(normalizeDescriptor_toConsumableArray(qualityIntervals),normalizeDescriptor_toConsumableArray(extensions));var _getAddsAndAlteration=getAddsAndAlterations(chordIntervals,baseIntervals,quality),adds=_getAddsAndAlteration.adds,alterations=_getAddsAndAlteration.alterations;normalized=normalizeDescriptor_objectSpread(normalizeDescriptor_objectSpread({},normalized),{},{quality:quality,isSuspended:isSuspended,extensions:extensions,alterations:alterations,adds:adds,omits:omits});}return normalizeDescriptor_objectSpread(normalizeDescriptor_objectSpread({},chord),{},{normalized:normalizeDescriptor_objectSpread(normalizeDescriptor_objectSpread({},chord.normalized),normalized)});}function isPowerChord(intervals){return hasExactly(intervals,['1','5']);}function isBass(intervals){return hasExactly(intervals,['1']);}function getIsSuspended(intervals,hasMajorIntent){return intervals.includes('4')||intervals.includes('11')&&hasMajorIntent&&!intervals.includes('3');}function getOmits(intervals,hasMajorIntent){var omits=[];if(hasNoneOf(intervals,['b3','3','4','11'])||!hasMajorIntent&&hasNoneOf(intervals,['b3','4'])){omits.push(hasMajorIntent?'3':'b3');}if(hasNoneOf(intervals,['b5','5','#5','b13'])){omits.push('5');}return omits;}function getChordQuality(allIntervals,chord,isSuspended,omits){var intervalsForQualityDetection=getIntervalsForQualityDetection(allIntervals,chord,isSuspended,omits);var intervalsToQualities=[// !!! do not change order without a good reason
{qualityIntervals:['b3'],quality:qualities.mi},{qualityIntervals:['b3','6'],quality:qualities.mi6},{qualityIntervals:['b3','7'],quality:qualities.miMa7},{qualityIntervals:['b3','b7'],quality:qualities.mi7},{qualityIntervals:['3'],quality:qualities.ma},{qualityIntervals:['3','6'],quality:qualities.ma6},{qualityIntervals:['3','7'],quality:qualities.ma7},{qualityIntervals:['3','b7'],quality:qualities.dom7},{qualityIntervals:['3','#5'],quality:qualities.aug},{qualityIntervals:['b3','b5'],quality:qualities.dim},{qualityIntervals:['b3','b5','bb7'],quality:qualities.dim7}].sort(function(a,b){return b.qualityIntervals.length-a.qualityIntervals.length;});return find_default()(intervalsToQualities,function(o){return hasAll(intervalsForQualityDetection,o.qualityIntervals);});}// To properly detect the chord quality, we need a "straight" version of the chord,
// meaning with a third interval (= un-suspended, no omit3)
function getIntervalsForQualityDetection(allIntervals,chord,isSuspended,omits){var allFilters=[undoOmit3.bind(null,omits),undoSuspension.bind(null,isSuspended,chord.normalized.intents.major),undoAlt5.bind(null,chord.normalized.intents.alt),uniq_default()];return chain(allFilters,clone_default()(allIntervals));}function undoOmit3(omits,allIntervals){var with3rd=clone_default()(allIntervals);if(omits.includes('3')){with3rd.push('3');}else if(omits.includes('b3')){with3rd.push('b3');}return with3rd;}function undoSuspension(isSuspended,hasMajorIntent,allIntervals){if(isSuspended){var unSuspended=without_default()(allIntervals,'4');unSuspended.push(hasMajorIntent?'3':'b3');return unSuspended;}return allIntervals;}function undoAlt5(isAlt,allIntervals){if(isAlt){var unaltered=without_default()(allIntervals,'b5','#5');unaltered.push('5');return unaltered;}return allIntervals;}function getExtensions(allIntervals,quality){var extensions=[];if(canBeExtended(quality)){if(isMinorExtended13th(allIntervals,quality)){extensions.push('9','11','13');}else if(isMajorExtended13th(allIntervals,quality)){extensions.push('9','13');}else if(isExtended11th(allIntervals)){extensions.push('9','11');}else if(isExtended9th(allIntervals)){extensions.push('9');}}return extensions;}function canBeExtended(quality){return[qualities.ma7,qualities.dom7,qualities.mi7,qualities.miMa7].includes(quality);}function canHave11th(quality){return[qualities.mi7,qualities.miMa7].includes(quality);}function isMinorExtended13th(allIntervals,quality){return canHave11th(quality)&&hasOneOf(allIntervals,'13')&&hasOneOf(allIntervals,['11','#11'])&&hasOneOf(allIntervals,['b9','9','#9']);}function isMajorExtended13th(allIntervals,quality){return!canHave11th(quality)&&hasOneOf(allIntervals,'13')&&hasOneOf(allIntervals,['b9','9','#9']);}function isExtended11th(allIntervals){return hasOneOf(allIntervals,'11')&&hasOneOf(allIntervals,['b9','9','#9']);}function isExtended9th(allIntervals){return allIntervals.includes('9');}function getAddsAndAlterations(chordIntervals,baseIntervals,quality){var adds=[];var alterations=[];chordIntervals.filter(function(interval){return interval!=='5'&&interval!=='4';}).forEach(function(interval){if(!baseIntervals.includes(interval)){if(isAlteration(quality,interval)){alterations.push(interval);}else{adds.push(interval);}}});if(hasAdd3(chordIntervals)){adds.push('3');}return{adds:sortIntervals(adds),alterations:sortIntervals(alterations)};}function isAlteration(quality,interval){var _qualityAlterations;var qualityAlterations=(_qualityAlterations={},normalizeDescriptor_defineProperty(_qualityAlterations,qualities.ma,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.ma6,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.ma7,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.dom7,['b5','#5','b9','#9','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.mi,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.mi6,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.mi7,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.miMa7,['b5','#5','#11','b13']),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.aug,[]),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.dim,[]),normalizeDescriptor_defineProperty(_qualityAlterations,qualities.dim7,[]),_qualityAlterations);return qualityAlterations[quality].includes(interval);}function hasAdd3(allIntervals){return hasAll(allIntervals,['3','4']);}function sortIntervals(intervals){return intervals.sort(function(a,b){var sortableA=Number.parseInt(a.replace(/[b#]/,''));var sortableB=Number.parseInt(b.replace(/[b#]/,''));return sortableA-sortableB;});}// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor=__nested_webpack_require_558__(4603);// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string=__nested_webpack_require_558__(9714);;// CONCATENATED MODULE: ./src/parser/filters/parseBase.js
/**
 * Split symbol in root/bass note and descriptor.
 * Returns null if the given string does not seems to be a chord.
 *
 * @param {String[]} noteVariants - all notes within a given notation system (English, Latin, German...)
 * @param {Chord} chord
 * @returns {Chord|null}
 */function parseBase(noteVariants,chord){var symbol=chord.input.symbol;var notesRegex=noteVariants.join('|');var notesAndDescriptorRegex=new RegExp('^'+'('+notesRegex+')'+'(.*?)'+'(/('+notesRegex+'))?'+'$');var result=symbol.match(notesAndDescriptorRegex);if(result&&result[1]){chord.input.rootNote=result[1];if(result[2]){chord.input.descriptor=result[2];}if(result[4]){chord.input.bassNote=result[4];}return chord;}else{throw new NoSymbolFoundError(chord);}}// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim=__nested_webpack_require_558__(3210);;// CONCATENATED MODULE: ./src/dictionaries/modifiers.js
function modifiers_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function modifiers_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){modifiers_ownKeys(Object(source),true).forEach(function(key){modifiers_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{modifiers_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function modifiers_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var allModifiers={// base
ma:'ma',mi:'mi',dim:'dim',halfDim:'halfDim',aug:'aug',seventh:'seventh',// suspended
sus:'sus',sus2:'sus2',// extensions
ninth:'ninth',eleventh:'eleventh',thirteenth:'thirteenth',// alterations
fifthFlat:'b5',fifthSharp:'#5',ninthFlat:'b9',ninthSharp:'#9',eleventhSharp:'#11',thirteenthFlat:'b13',// added
add3:'add3',add4:'add4',addb6:'addb6',add6:'add6',add69:'add69',add7:'add7',add9:'add9',add11:'add11',add13:'add13',// special
bass:'bass',omit3:'omit3',omit5:'omit5',power:'power',alt:'alt'};/**
 * WARNING: when adding new modifiers symbols, be careful of possible edge cases that might arise with some combinations.
 * For example, without edge case handling, "madd9" would be parsed as "ma" instead of "m"+"add9"
 */var major={'^':[allModifiers.ma,allModifiers.add7],Δ:[allModifiers.ma,allModifiers.add7],M:allModifiers.ma,Ma:allModifiers.ma,Maj:allModifiers.ma,Major:allModifiers.ma,ma:allModifiers.ma,maj:allModifiers.ma,major:allModifiers.ma};var major7th=getDerivedModifiers(major,allModifiers.add7,function(symbol){return symbol+'7';});var add7=getDerivedModifiers(major,allModifiers.add7,function(symbol){return'add'+symbol+'7';});var allSymbols=modifiers_objectSpread(modifiers_objectSpread(modifiers_objectSpread(modifiers_objectSpread({},major),major7th),{},{// minor
'-':allModifiers.mi,m:allModifiers.mi,Mi:allModifiers.mi,Min:allModifiers.mi,Minor:allModifiers.mi,mi:allModifiers.mi,min:allModifiers.mi,minor:allModifiers.mi,// diminished / augmented
'°':allModifiers.dim,o:allModifiers.dim,0:allModifiers.dim,dim:allModifiers.dim,'dim.':allModifiers.dim,diminished:allModifiers.dim,Ø:allModifiers.halfDim,ø:allModifiers.halfDim,h:allModifiers.halfDim,'+':allModifiers.aug,aug:allModifiers.aug,augmented:allModifiers.aug,// seventh
7:allModifiers.seventh,// suspended
4:allModifiers.sus,sus:allModifiers.sus,sus4:allModifiers.sus,suspended:allModifiers.sus,suspended4:allModifiers.sus,sus2:allModifiers.sus2,suspended2:allModifiers.sus2,// extensions
9:allModifiers.ninth,11:allModifiers.eleventh,13:allModifiers.thirteenth,// alterations
b3:allModifiers.mi,b5:allModifiers.fifthFlat,'♭5':allModifiers.fifthFlat,'#5':allModifiers.fifthSharp,'♯5':allModifiers.fifthSharp,b9:allModifiers.ninthFlat,'♭9':allModifiers.ninthFlat,addb9:allModifiers.ninthFlat,'add♭9':allModifiers.ninthFlat,'#9':allModifiers.ninthSharp,'♯9':allModifiers.ninthSharp,'add#9':allModifiers.ninthSharp,'add♯9':allModifiers.ninthSharp,'#11':allModifiers.eleventhSharp,'♯11':allModifiers.eleventhSharp,'add#11':allModifiers.eleventhSharp,b13:allModifiers.thirteenthFlat,'♭13':allModifiers.thirteenthFlat,addb13:allModifiers.thirteenthFlat,'add♭13':allModifiers.thirteenthFlat},add7),{},{2:allModifiers.add9,add2:allModifiers.add9,add3:allModifiers.add3,add4:allModifiers.add4,addb6:allModifiers.addb6,b6:allModifiers.addb6,6:allModifiers.add6,add6:allModifiers.add6,'6/9':allModifiers.add69,69:allModifiers.add69,96:allModifiers.add69,'9/6':allModifiers.add69,add9:allModifiers.add9,add11:allModifiers.add11,add13:allModifiers.add13,// special
bass:allModifiers.bass,omit3:allModifiers.omit3,no3:allModifiers.omit3,omit5:allModifiers.omit5,no5:allModifiers.omit5,5:allModifiers.power,alt:allModifiers.alt,'alt.':allModifiers.alt,altered:allModifiers.alt});function getDerivedModifiers(source,modifierId,derivedFn){return Object.keys(source).map(derivedFn).reduce(function(acc,curr){acc[curr]=modifierId;return acc;},{});}var modifiers_allVariants=Object.keys(allSymbols).sort(function(a,b){return b.length-a.length;});/* harmony default export */const modifiers=allModifiers;;// CONCATENATED MODULE: ./src/dictionaries/intervalsToSemitones.js
/* harmony default export */const intervalsToSemitones={1:0,2:2,b3:3,3:4,4:5,b5:6,5:7,'#5':8,b6:8,6:9,bb7:9,b7:10,7:11,b9:13,9:14,'#9':15,11:17,'#11':18,b13:20,13:21};;// CONCATENATED MODULE: ./src/parser/filters/parseDescriptor.js
function parseDescriptor_toConsumableArray(arr){return parseDescriptor_arrayWithoutHoles(arr)||parseDescriptor_iterableToArray(arr)||parseDescriptor_unsupportedIterableToArray(arr)||parseDescriptor_nonIterableSpread();}function parseDescriptor_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function parseDescriptor_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return parseDescriptor_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return parseDescriptor_arrayLikeToArray(o,minLen);}function parseDescriptor_iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function parseDescriptor_arrayWithoutHoles(arr){if(Array.isArray(arr))return parseDescriptor_arrayLikeToArray(arr);}function parseDescriptor_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/**
 * Convert the descriptor into a suite of intervals, semitones and intents
 *
 * @param {Array<('b5'|'#5'|'b9'|'#9'|'#11'|'b13')>} altIntervals
 * @param {Chord} chord
 * @returns {Chord|Null}
 */function parseDescriptor(altIntervals,chord){var allModifiers=[];if(chord.input.parsableDescriptor){allModifiers=getModifiers(chord);}chord.input.modifiers=allModifiers;chord.normalized.intervals=getIntervals(allModifiers,altIntervals);chord.normalized.semitones=getSemitones(chord.normalized.intervals);chord.normalized.intents=getIntents(allModifiers);return chord;}function getModifiers(chord){var parsableDescriptor=chord.input.parsableDescriptor;var modifiers=[];var descriptorRegex=new RegExp(modifiers_allVariants.map(escapeRegex).join('|'),'g');var descriptorMatches=parsableDescriptor.match(descriptorRegex);var remainingChars=parsableDescriptor;var allModifiersId;if(descriptorMatches){descriptorMatches.forEach(function(match){allModifiersId=allSymbols[match];if(!Array.isArray(allModifiersId)){allModifiersId=[allModifiersId];}allModifiersId.forEach(function(modifierId){if(modifiers.includes(modifierId)){return;}modifiers.push(modifierId);remainingChars=remainingChars.replace(match,'');});});}if(modifiers.length===0){throw new NoSymbolFoundError(chord);}if(remainingChars.trim().length>0){throw new InvalidModifierError(chord,remainingChars);}return modifiers;}function getIntervals(allModifiers,altIntervals){if(allModifiers.includes(modifiers.power)){return['1','5'];}else if(allModifiers.includes(modifiers.bass)){return['1'];}return uniq_default()(['1'].concat(parseDescriptor_toConsumableArray(getThird(allModifiers)),parseDescriptor_toConsumableArray(getFourth(allModifiers)),parseDescriptor_toConsumableArray(getFifths(allModifiers,altIntervals)),parseDescriptor_toConsumableArray(getSixth(allModifiers)),parseDescriptor_toConsumableArray(getSevenths(allModifiers)),parseDescriptor_toConsumableArray(getNinths(allModifiers,altIntervals)),parseDescriptor_toConsumableArray(getElevenths(allModifiers,altIntervals)),parseDescriptor_toConsumableArray(getThirteenths(allModifiers,altIntervals)))).sort(function(a,b){return intervalsToSemitones[a]-intervalsToSemitones[b];});}function getThird(allModifiers){var third=[];if(allModifiers.includes(modifiers.omit3)){return[];}if(!hasOneOf(allModifiers,[modifiers.sus,modifiers.sus2])){if(!hasMajorIntent(allModifiers)){third.push('b3');}else if(!allModifiers.includes(modifiers.eleventh)){third.push('3');}}if(allModifiers.includes(modifiers.add3)){third.push('3');}return third;}function getFourth(allModifiers){var fourth=[];if(hasOneOf(allModifiers,[modifiers.sus,modifiers.add4])){fourth.push('4');}return fourth;}function getFifths(allModifiers,altIntervals){var fifths=[];if(allModifiers.includes(modifiers.omit5)){return[];}if(hasOneOf(allModifiers,[modifiers.dim,modifiers.halfDim,modifiers.fifthFlat])||shouldAlter(allModifiers,altIntervals,'b5')){fifths.push('b5');}if(hasOneOf(allModifiers,[modifiers.aug,modifiers.fifthSharp])||shouldAlter(allModifiers,altIntervals,'#5')){fifths.push('#5');}if(!fifths.length&&!allModifiers.includes(modifiers.thirteenthFlat)){fifths.push('5');}return fifths;}function getSixth(allModifiers){var sixth=[];if(hasOneOf(allModifiers,[modifiers.addb6])){sixth.push('b6');}if(hasOneOf(allModifiers,[modifiers.add6,modifiers.add69])&&!isExtended(allModifiers)&&!hasOneOf(allModifiers,[modifiers.halfDim])){sixth.push('6');}return sixth;}function getSevenths(allModifiers){var sevenths=[];if(hasOneOf(allModifiers,[modifiers.alt])){sevenths.push('b7');}if(hasOneOf(allModifiers,[modifiers.seventh,modifiers.halfDim])){if(allModifiers.includes(modifiers.dim)){sevenths.push('bb7');}else if(allModifiers.includes(modifiers.halfDim)){sevenths.push('b7');}else{sevenths.push(getMinorOrMajorSeventh(allModifiers));}}else if(hasOneOf(allModifiers,[modifiers.ninth,modifiers.eleventh,modifiers.thirteenth])){sevenths.push(getMinorOrMajorSeventh(allModifiers));}if(allModifiers.includes(modifiers.add7)){sevenths.push('7');}return sevenths;}function getMinorOrMajorSeventh(allModifiers){return allModifiers.includes(modifiers.ma)?'7':'b7';}function getNinths(allModifiers,altIntervals){var ninth=[];if(hasOneOf(allModifiers,[modifiers.add69,modifiers.ninth,modifiers.eleventh,modifiers.thirteenth])&&hasNoneOf(allModifiers,[modifiers.ninthFlat,modifiers.ninthSharp])){ninth.push('9');}if(hasOneOf(allModifiers,[modifiers.sus2,modifiers.add9])){ninth.push('9');}if(hasOneOf(allModifiers,[modifiers.ninthFlat])||shouldAlter(allModifiers,altIntervals,'b9')){ninth.push('b9');}if(hasOneOf(allModifiers,[modifiers.ninthSharp])||shouldAlter(allModifiers,altIntervals,'#9')){ninth.push('#9');}return ninth;}function getElevenths(allModifiers,altIntervals){var elevenths=[];if(hasOneOf(allModifiers,[modifiers.thirteenth])&&!hasMajorIntent(allModifiers)){elevenths.push('11');}else if(hasOneOf(allModifiers,[modifiers.eleventh,modifiers.add11])){elevenths.push('11');}if(hasOneOf(allModifiers,[modifiers.eleventhSharp])||shouldAlter(allModifiers,altIntervals,'#11')){elevenths.push('#11');}return elevenths;}function getThirteenths(allModifiers,altIntervals){var thirteenths=[];if(hasOneOf(allModifiers,[modifiers.add13,modifiers.thirteenth])||hasOneOf(allModifiers,[modifiers.add6,modifiers.add69])&&isExtended(allModifiers)||hasOneOf(allModifiers,[modifiers.add6,modifiers.add69])&&hasOneOf(allModifiers,[modifiers.halfDim])){thirteenths.push('13');}if(hasOneOf(allModifiers,[modifiers.thirteenthFlat])||shouldAlter(allModifiers,altIntervals,'b13')){thirteenths.push('b13');}return thirteenths;}function shouldAlter(allModifiers,altIntervals,interval){return allModifiers.includes(modifiers.alt)&&altIntervals.includes(interval);}function hasMajorIntent(allModifiers){return hasNoneOf(allModifiers,[modifiers.mi,modifiers.dim,modifiers.dim7,modifiers.halfDim]);}function isExtended(allModifiers){return hasOneOf(allModifiers,[modifiers.seventh,modifiers.ninth,modifiers.eleventh,modifiers.thirteenth]);}// Based on https://stackoverflow.com/a/6969486
function escapeRegex(string){return string.replace(/[.\-*+?^${}()|[\]\\]/g,'\\$&');}function getSemitones(allIntervals){return allIntervals.map(function(interval){return intervalsToSemitones[interval];}).sort(function(a,b){return a-b;});}// intents will be used later at formatting for disambiguation of some potentially confusing cases
function getIntents(allModifiers){return{major:hasMajorIntent(allModifiers),eleventh:allModifiers.includes(modifiers.eleventh),alt:allModifiers.includes(modifiers.alt)};};// CONCATENATED MODULE: ./src/parser/chordParserFactory.js
function chordParserFactory_toConsumableArray(arr){return chordParserFactory_arrayWithoutHoles(arr)||chordParserFactory_iterableToArray(arr)||chordParserFactory_unsupportedIterableToArray(arr)||chordParserFactory_nonIterableSpread();}function chordParserFactory_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function chordParserFactory_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return chordParserFactory_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return chordParserFactory_arrayLikeToArray(o,minLen);}function chordParserFactory_iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function chordParserFactory_arrayWithoutHoles(arr){if(Array.isArray(arr))return chordParserFactory_arrayLikeToArray(arr);}function chordParserFactory_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/**
 * Create a chord parser function
 * @param {ParserConfiguration} [parserConfiguration]
 * @returns {function(String): Chord}
 */function chordParserFactory(){var parserConfiguration=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var allAltIntervals=['b5','#5','b9','#9','#11','b13'];var allNotationSystems=['english','german','latin'];var _parserConfiguration$=parserConfiguration.notationSystems,notationSystems=_parserConfiguration$===void 0?cloneDeep_default()(allNotationSystems):_parserConfiguration$,_parserConfiguration$2=parserConfiguration.altIntervals,altIntervals=_parserConfiguration$2===void 0?cloneDeep_default()(allAltIntervals):_parserConfiguration$2,_parserConfiguration$3=parserConfiguration.customFilters,customFilters=_parserConfiguration$3===void 0?[]:_parserConfiguration$3;checkAltIntervals(altIntervals,allAltIntervals);checkNotationSystems(notationSystems,allNotationSystems);helpers_checkCustomFilters(customFilters);return parseChord;/**
   * Convert an input string into an abstract chord structure
   * @param {String} symbol - the chord symbol candidate
   * @returns {Chord|Null} A chord object if the given string is successfully parsed. Null otherwise.
   */function parseChord(symbol){var allErrors=[];if(!isInputValid(symbol)){var e=new InvalidInputError();allErrors.push(formatError(e));}var allVariantsPerGroupCopy=cloneDeep_default()(allVariantsPerGroup).filter(function(variantsGroup){return notationSystems.includes(variantsGroup.name);});var chord;var allFilters;var variants;if(!allErrors.length){while(allVariantsPerGroupCopy.length&&!chord){variants=allVariantsPerGroupCopy.shift();allFilters=[initChord.bind(null,parserConfiguration),parseBase.bind(null,variants.notes),getParsableDescriptor,parseDescriptor.bind(null,altIntervals),checkIntervalsConsistency,normalizeNotes,normalizeDescriptor,formatSymbolParts,nameIndividualChordNotes].concat(chordParserFactory_toConsumableArray(customFilters));try{chord=chain(allFilters,symbol);if(chord){chord.input.notationSystem=variants.name;}else{allErrors.push(getUnexpectedError(variants.name));}}catch(e){allErrors.push(formatError(e,variants.name));}}}return chord?chord:{error:allErrors};}}function checkAltIntervals(altIntervals,allAltIntervals){checkArray('altIntervals',altIntervals,allAltIntervals,true);}function checkNotationSystems(notationSystems,allNotationSystems){checkArray('notationSystems',notationSystems,allNotationSystems);}function checkArray(arrayName,arrayToTest,allowedValues,allowEmpty){if(!Array.isArray(arrayToTest)){throw new TypeError("'".concat(arrayName,"' should be an array"));}if(!allowEmpty&&arrayToTest.length===0){throw new TypeError("'".concat(arrayName,"' cannot be empty"));}arrayToTest.forEach(function(system){if(!allowedValues.includes(system)){throw new TypeError("'".concat(system,"' is not a valid value for ").concat(arrayName));}});}function isInputValid(input){return typeof input==='string'&&input.length>0;}function getUnexpectedError(notationSystem){var error=new UnexpectedError();return formatError(error,notationSystem);}function formatError(exceptionError,notationSystem){return{type:exceptionError.name,chord:exceptionError.chord,message:exceptionError.message,notationSystem:notationSystem};}/**
 * @module chordParserFactory
 * Expose the chordParserFactory() function
 */ /* harmony default export */const parser_chordParserFactory=chordParserFactory;;// CONCATENATED MODULE: ./src/renderer/filters/shortenNormalized.js
function shortenNormalized_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function shortenNormalized_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){shortenNormalized_ownKeys(Object(source),true).forEach(function(key){shortenNormalized_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{shortenNormalized_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function shortenNormalized_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var shortDescriptors={sus2:'sus2',add2:'2',omit:'no',ma:'M',mi:'m',dim:'°',aug7:'7+',eleventh:'11'};/**
 * @param {Chord} chord
 * @returns {Chord}
 */function shortenNormalized(chord){var descriptor;var chordChanges=chord.formatted.chordChanges;if(isSus2(chord)){descriptor=shortDescriptors.sus2;chordChanges=[];}else if(isAdd2(chord)){descriptor=shortDescriptors.add2;chordChanges=[];}else if(isAug7(chord)){descriptor=shortDescriptors.aug7;chordChanges=[];}else{descriptor=chord.formatted.descriptor.replace('mi',shortDescriptors.mi).replace(/[m|M]a/,shortDescriptors.ma).replace('dim',shortDescriptors.dim);if(isEleventh(chord)){descriptor=descriptor.replace(/7sus|9sus/,shortDescriptors.eleventh);}}chordChanges=chordChanges.map(function(change){return change.replace(/[m|M]a/,shortDescriptors.ma).replace('omit',shortDescriptors.omit);});return shortenNormalized_objectSpread(shortenNormalized_objectSpread({},chord),{},{formatted:shortenNormalized_objectSpread(shortenNormalized_objectSpread({},chord.formatted),{},{descriptor:descriptor,chordChanges:chordChanges})});}function isSus2(chord){return hasExactly(chord.normalized.intervals,['1','5','9']);}function isAdd2(chord){return hasExactly(chord.normalized.intervals,['1','3','5','9']);}function isAug7(chord){return hasExactly(chord.normalized.intervals,['1','3','#5','b7']);}function isEleventh(chord){return chord.normalized.intents.eleventh;}// EXTERNAL MODULE: ./node_modules/lodash/difference.js
var difference=__nested_webpack_require_558__(1966);var difference_default=/*#__PURE__*/__nested_webpack_require_558__.n(difference);;// CONCATENATED MODULE: ./src/renderer/filters/simplify.js
/**
 * @param {Chord} chord
 * @param {('none'|'max'|'core')} level
 * @returns {Chord}
 */function simplify_simplify(){var level=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'none';var chord=arguments.length>1?arguments[1]:undefined;if(level==='none'){return chord;}var intervalsToRemove={max:['4','b5','#5','6','bb7','b7','7','b9','9','#9','11','#11','b13','13'],core:['4','b9','9','#9','11','#11','b13','13']};var intervals=difference_default()(chord.normalized.intervals,intervalsToRemove[level]);if(hasNoneOf(intervals,['b3','3'])){intervals.push(chord.normalized.intents.major?'3':'b3');}if(hasNoneOf(intervals,['b5','5','#5'])){intervals.push('5');}chord.normalized.intervals=intervals;chord.normalized.semitones=intervals.map(function(interval){return intervalsToSemitones[interval];});chord.normalized.intents.eleventh=false;chord.normalized.intents.alt=false;if(level==='max'){delete chord.normalized.bassNote;}var allFilters=[normalizeDescriptor,formatSymbolParts,nameIndividualChordNotes];return chain(allFilters,chord);}// EXTERNAL MODULE: ./node_modules/lodash/invert.js
var invert=__nested_webpack_require_558__(3137);var invert_default=/*#__PURE__*/__nested_webpack_require_558__.n(invert);;// CONCATENATED MODULE: ./src/renderer/filters/transpose.js
var transpose_notes=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];var sharpsToFlats={'C#':'Db','D#':'Eb','F#':'Gb','G#':'Ab','A#':'Bb'};var flatsToSharps=invert_default()(sharpsToFlats);function transpose(transposeValue,useFlats,chord){var _chord$normalized=chord.normalized,rootNote=_chord$normalized.rootNote,bassNote=_chord$normalized.bassNote;var rootSharp=convertToSharp(rootNote);chord.normalized.rootNote=transposeNote(rootSharp,transposeValue,useFlats);chord.formatted.rootNote=chord.normalized.rootNote;if(bassNote){var bassSharp=convertToSharp(bassNote);chord.normalized.bassNote=transposeNote(bassSharp,transposeValue,useFlats);chord.formatted.bassNote=chord.normalized.bassNote;}return nameIndividualChordNotes(chord);}function transposeNote(note,value,useFlats){var noteIndex=transpose_notes.indexOf(note);var transposedIndex=noteIndex+value;var octaves=Math.floor(transposedIndex/12);var correctedTransposedIndex=transposedIndex-octaves*12;var transposed=transpose_notes[correctedTransposedIndex];return useFlats?sharpsToFlats[transposed]||transposed:transposed;}function convertToSharp(note){return flatsToSharps[note]||note;};// CONCATENATED MODULE: ./src/renderer/filters/convertNotationSystem.js
var translationTables={german:{Ab:'As',A:'A','A#':'Ais',Bb:'Hes',B:'H',C:'C','C#':'Cis',Db:'Des',D:'D','D#':'Dis',Eb:'Es',E:'E',F:'F','F#':'Fis',Gb:'Ges',G:'G','G#':'Gis'},latin:{Ab:'Lab',A:'La','A#':'La#',Bb:'Sib',B:'Si',C:'Do','C#':'Do#',Db:'Reb',D:'Re','D#':'Re#',Eb:'Mib',E:'Mi',F:'Fa','F#':'Fa#',Gb:'Solb',G:'Sol','G#':'Sol#'}};var allNotationSystems=Object.keys(translationTables);/**
 * @param {('auto'|'english'|'german'|'latin')} notationSystem
 * @param {Chord} chord
 * @returns {Chord|Null}
 */function convertNotationSystem(){var notationSystem=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'english';var chord=arguments.length>1?arguments[1]:undefined;var finalNotationSystem=notationSystem==='auto'?chord.input.notationSystem:notationSystem;if(finalNotationSystem==='english')return chord;if(!allNotationSystems.includes(finalNotationSystem))return null;chord.formatted.rootNote=translationTables[finalNotationSystem][chord.formatted.rootNote];if(chord.formatted.bassNote){chord.formatted.bassNote=translationTables[finalNotationSystem][chord.formatted.bassNote];}return chord;};// CONCATENATED MODULE: ./src/renderer/printer/text.js
/**
 * @param {Chord} chord
 * @returns {String}
 */function textPrinter(chord){if(chord){var _chord$formatted=chord.formatted,rootNote=_chord$formatted.rootNote,bassNote=_chord$formatted.bassNote,descriptor=_chord$formatted.descriptor,chordChanges=_chord$formatted.chordChanges;var printed=rootNote;if(descriptor){printed+=descriptor;}if(chordChanges&&chordChanges.length){printed+='('+chordChanges.join(',')+')';}if(bassNote){printed+='/'+bassNote;}return printed;}return null;};// CONCATENATED MODULE: ./src/renderer/printer/raw.js
/**
 * This printer returns a `chord` object reflecting the applied rendering filters. This object is very close to what would
 * be obtained by re-parsing the rendered chord.
 * It is basically the `chord` object in its current state, with 2 differences:
 * - a re-built `input` property to include all the changes applied during rendering (transposition, simplification, etc.)
 * - a removed `notationSystems` parser configuration since it may not be relevant anymore, especially if the rendering changed the notation system
 *
 * @param {Chord} chord
 * @returns {Chord}
 */function rawPrinter(chord){// make sure the chord can be re-parsed, whichever notation system was used for the rendering
delete chord.parserConfiguration.notationSystems;var cloned=cloneDeep_default()(chord);// Re-parse the rendered chord to get the 'input' property right
var textPrinted=textPrinter(chord);var parseChord=parser_chordParserFactory(chord.parserConfiguration);var reParsed=parseChord(textPrinted);cloned.input=reParsed.input;return cloned;};// CONCATENATED MODULE: ./src/renderer/chordRendererFactory.js
function chordRendererFactory_typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){chordRendererFactory_typeof=function _typeof(obj){return typeof obj;};}else{chordRendererFactory_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return chordRendererFactory_typeof(obj);}function chordRendererFactory_toConsumableArray(arr){return chordRendererFactory_arrayWithoutHoles(arr)||chordRendererFactory_iterableToArray(arr)||chordRendererFactory_unsupportedIterableToArray(arr)||chordRendererFactory_nonIterableSpread();}function chordRendererFactory_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function chordRendererFactory_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return chordRendererFactory_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return chordRendererFactory_arrayLikeToArray(o,minLen);}function chordRendererFactory_iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function chordRendererFactory_arrayWithoutHoles(arr){if(Array.isArray(arr))return chordRendererFactory_arrayLikeToArray(arr);}function chordRendererFactory_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}/**
 * Create a pre-configured chord rendering function
 * @param {RendererConfiguration} [rendererConfiguration]
 * @returns {function(Chord): String}
 */function chordRendererFactory(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$useShortNamings=_ref.useShortNamings,useShortNamings=_ref$useShortNamings===void 0?false:_ref$useShortNamings,_ref$simplify=_ref.simplify,simplify=_ref$simplify===void 0?'none':_ref$simplify,_ref$transposeValue=_ref.transposeValue,transposeValue=_ref$transposeValue===void 0?0:_ref$transposeValue,_ref$harmonizeAcciden=_ref.harmonizeAccidentals,harmonizeAccidentals=_ref$harmonizeAcciden===void 0?false:_ref$harmonizeAcciden,_ref$useFlats=_ref.useFlats,useFlats=_ref$useFlats===void 0?false:_ref$useFlats,_ref$printer=_ref.printer,printer=_ref$printer===void 0?'text':_ref$printer,_ref$notationSystem=_ref.notationSystem,notationSystem=_ref$notationSystem===void 0?'english':_ref$notationSystem,_ref$customFilters=_ref.customFilters,customFilters=_ref$customFilters===void 0?[]:_ref$customFilters;helpers_checkCustomFilters(customFilters);var allFilters=[];if(['max','core'].includes(simplify)){allFilters.push(simplify_simplify.bind(null,simplify));}if(harmonizeAccidentals||transposeValue!==0){allFilters.push(transpose.bind(null,transposeValue,useFlats));}if(useShortNamings){allFilters.push(shortenNormalized);}allFilters.push(convertNotationSystem.bind(null,notationSystem));allFilters.push.apply(allFilters,chordRendererFactory_toConsumableArray(customFilters));return renderChord;/**
   * Render a chord structure
   * @param {Chord} chord - the chord structure to render
   * @returns {String|Chord} output depends on the selected printer: string for text printer (default), Chord for raw printer
   */function renderChord(chord){if(!isValidChord(chord)){return null;}var filteredChord=chain(allFilters,cloneDeep_default()(chord));return printer==='raw'?rawPrinter(filteredChord):textPrinter(filteredChord);}}var isValidChord=function isValidChord(chord){return chord&&chordRendererFactory_typeof(chord)==='object'&&!chord.error&&chord.input;};/**
 * @module chordRendererFactory
 * Expose the chordRendererFactory() function
 **/ /* harmony default export */const renderer_chordRendererFactory=chordRendererFactory;;// CONCATENATED MODULE: ./src/index.js
/***/},/***/3099:/***/module=>{module.exports=function(it){if(typeof it!='function'){throw TypeError(String(it)+' is not a function');}return it;};/***/},/***/6077:/***/(module,__unused_webpack_exports,__nested_webpack_require_80051__)=>{var isObject=__nested_webpack_require_80051__(111);module.exports=function(it){if(!isObject(it)&&it!==null){throw TypeError("Can't set "+String(it)+' as a prototype');}return it;};/***/},/***/1223:/***/(module,__unused_webpack_exports,__nested_webpack_require_80344__)=>{var wellKnownSymbol=__nested_webpack_require_80344__(5112);var create=__nested_webpack_require_80344__(30);var definePropertyModule=__nested_webpack_require_80344__(3070);var UNSCOPABLES=wellKnownSymbol('unscopables');var ArrayPrototype=Array.prototype;// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if(ArrayPrototype[UNSCOPABLES]==undefined){definePropertyModule.f(ArrayPrototype,UNSCOPABLES,{configurable:true,value:create(null)});}// add a key to Array.prototype[@@unscopables]
module.exports=function(key){ArrayPrototype[UNSCOPABLES][key]=true;};/***/},/***/1530:/***/(module,__unused_webpack_exports,__nested_webpack_require_81053__)=>{"use strict";var charAt=__nested_webpack_require_81053__(8710).charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports=function(S,index,unicode){return index+(unicode?charAt(S,index).length:1);};/***/},/***/9670:/***/(module,__unused_webpack_exports,__nested_webpack_require_81413__)=>{var isObject=__nested_webpack_require_81413__(111);module.exports=function(it){if(!isObject(it)){throw TypeError(String(it)+' is not an object');}return it;};/***/},/***/8533:/***/(module,__unused_webpack_exports,__nested_webpack_require_81678__)=>{"use strict";var $forEach=__nested_webpack_require_81678__(2092).forEach;var arrayMethodIsStrict=__nested_webpack_require_81678__(9341);var arrayMethodUsesToLength=__nested_webpack_require_81678__(9207);var STRICT_METHOD=arrayMethodIsStrict('forEach');var USES_TO_LENGTH=arrayMethodUsesToLength('forEach');// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports=!STRICT_METHOD||!USES_TO_LENGTH?function forEach(callbackfn/* , thisArg */){return $forEach(this,callbackfn,arguments.length>1?arguments[1]:undefined);}:[].forEach;/***/},/***/1318:/***/(module,__unused_webpack_exports,__nested_webpack_require_82369__)=>{var toIndexedObject=__nested_webpack_require_82369__(5656);var toLength=__nested_webpack_require_82369__(7466);var toAbsoluteIndex=__nested_webpack_require_82369__(1400);// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIndexedObject($this);var length=toLength(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];// eslint-disable-next-line no-self-compare
if(value!=value)return true;// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0;}return!IS_INCLUDES&&-1;};};module.exports={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:createMethod(true),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:createMethod(false)};/***/},/***/2092:/***/(module,__unused_webpack_exports,__nested_webpack_require_83692__)=>{var bind=__nested_webpack_require_83692__(9974);var IndexedObject=__nested_webpack_require_83692__(8361);var toObject=__nested_webpack_require_83692__(7908);var toLength=__nested_webpack_require_83692__(7466);var arraySpeciesCreate=__nested_webpack_require_83692__(5417);var push=[].push;// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod=function(TYPE){var IS_MAP=TYPE==1;var IS_FILTER=TYPE==2;var IS_SOME=TYPE==3;var IS_EVERY=TYPE==4;var IS_FIND_INDEX=TYPE==6;var IS_FILTER_OUT=TYPE==7;var NO_HOLES=TYPE==5||IS_FIND_INDEX;return function($this,callbackfn,that,specificCreate){var O=toObject($this);var self=IndexedObject(O);var boundFunction=bind(callbackfn,that,3);var length=toLength(self.length);var index=0;var create=specificCreate||arraySpeciesCreate;var target=IS_MAP?create($this,length):IS_FILTER||IS_FILTER_OUT?create($this,0):undefined;var value,result;for(;length>index;index++)if(NO_HOLES||index in self){value=self[index];result=boundFunction(value,index,O);if(TYPE){if(IS_MAP)target[index]=result;// map
else if(result)switch(TYPE){case 3:return true;// some
case 5:return value;// find
case 6:return index;// findIndex
case 2:push.call(target,value);// filter
}else switch(TYPE){case 4:return false;// every
case 7:push.call(target,value);// filterOut
}}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:target;};};module.exports={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:createMethod(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:createMethod(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:createMethod(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:createMethod(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:createMethod(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:createMethod(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:createMethod(6),// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
filterOut:createMethod(7)};/***/},/***/1194:/***/(module,__unused_webpack_exports,__nested_webpack_require_86512__)=>{var fails=__nested_webpack_require_86512__(7293);var wellKnownSymbol=__nested_webpack_require_86512__(5112);var V8_VERSION=__nested_webpack_require_86512__(7392);var SPECIES=wellKnownSymbol('species');module.exports=function(METHOD_NAME){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return V8_VERSION>=51||!fails(function(){var array=[];var constructor=array.constructor={};constructor[SPECIES]=function(){return{foo:1};};return array[METHOD_NAME](Boolean).foo!==1;});};/***/},/***/9341:/***/(module,__unused_webpack_exports,__nested_webpack_require_87243__)=>{"use strict";var fails=__nested_webpack_require_87243__(7293);module.exports=function(METHOD_NAME,argument){var method=[][METHOD_NAME];return!!method&&fails(function(){// eslint-disable-next-line no-useless-call,no-throw-literal
method.call(null,argument||function(){throw 1;},1);});};/***/},/***/9207:/***/(module,__unused_webpack_exports,__nested_webpack_require_87655__)=>{var DESCRIPTORS=__nested_webpack_require_87655__(9781);var fails=__nested_webpack_require_87655__(7293);var has=__nested_webpack_require_87655__(6656);var defineProperty=Object.defineProperty;var cache={};var thrower=function(it){throw it;};module.exports=function(METHOD_NAME,options){if(has(cache,METHOD_NAME))return cache[METHOD_NAME];if(!options)options={};var method=[][METHOD_NAME];var ACCESSORS=has(options,'ACCESSORS')?options.ACCESSORS:false;var argument0=has(options,0)?options[0]:thrower;var argument1=has(options,1)?options[1]:undefined;return cache[METHOD_NAME]=!!method&&!fails(function(){if(ACCESSORS&&!DESCRIPTORS)return true;var O={length:-1};if(ACCESSORS)defineProperty(O,1,{enumerable:true,get:thrower});else O[1]=1;method.call(O,argument0,argument1);});};/***/},/***/3671:/***/(module,__unused_webpack_exports,__nested_webpack_require_88627__)=>{var aFunction=__nested_webpack_require_88627__(3099);var toObject=__nested_webpack_require_88627__(7908);var IndexedObject=__nested_webpack_require_88627__(8361);var toLength=__nested_webpack_require_88627__(7466);// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod=function(IS_RIGHT){return function(that,callbackfn,argumentsLength,memo){aFunction(callbackfn);var O=toObject(that);var self=IndexedObject(O);var length=toLength(O.length);var index=IS_RIGHT?length-1:0;var i=IS_RIGHT?-1:1;if(argumentsLength<2)while(true){if(index in self){memo=self[index];index+=i;break;}index+=i;if(IS_RIGHT?index<0:length<=index){throw TypeError('Reduce of empty array with no initial value');}}for(;IS_RIGHT?index>=0:length>index;index+=i)if(index in self){memo=callbackfn(memo,self[index],index,O);}return memo;};};module.exports={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:createMethod(false),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:createMethod(true)};/***/},/***/5417:/***/(module,__unused_webpack_exports,__nested_webpack_require_90010__)=>{var isObject=__nested_webpack_require_90010__(111);var isArray=__nested_webpack_require_90010__(3157);var wellKnownSymbol=__nested_webpack_require_90010__(5112);var SPECIES=wellKnownSymbol('species');// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports=function(originalArray,length){var C;if(isArray(originalArray)){C=originalArray.constructor;// cross-realm fallback
if(typeof C=='function'&&(C===Array||isArray(C.prototype)))C=undefined;else if(isObject(C)){C=C[SPECIES];if(C===null)C=undefined;}}return new(C===undefined?Array:C)(length===0?0:length);};/***/},/***/4326:/***/module=>{var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1);};/***/},/***/9920:/***/(module,__unused_webpack_exports,__nested_webpack_require_90939__)=>{var has=__nested_webpack_require_90939__(6656);var ownKeys=__nested_webpack_require_90939__(3887);var getOwnPropertyDescriptorModule=__nested_webpack_require_90939__(1236);var definePropertyModule=__nested_webpack_require_90939__(3070);module.exports=function(target,source){var keys=ownKeys(source);var defineProperty=definePropertyModule.f;var getOwnPropertyDescriptor=getOwnPropertyDescriptorModule.f;for(var i=0;i<keys.length;i++){var key=keys[i];if(!has(target,key))defineProperty(target,key,getOwnPropertyDescriptor(source,key));}};/***/},/***/4964:/***/(module,__unused_webpack_exports,__nested_webpack_require_91586__)=>{var wellKnownSymbol=__nested_webpack_require_91586__(5112);var MATCH=wellKnownSymbol('match');module.exports=function(METHOD_NAME){var regexp=/./;try{'/./'[METHOD_NAME](regexp);}catch(error1){try{regexp[MATCH]=false;return'/./'[METHOD_NAME](regexp);}catch(error2){/* empty */}}return false;};/***/},/***/8544:/***/(module,__unused_webpack_exports,__nested_webpack_require_92030__)=>{var fails=__nested_webpack_require_92030__(7293);module.exports=!fails(function(){function F(){/* empty */}F.prototype.constructor=null;return Object.getPrototypeOf(new F())!==F.prototype;});/***/},/***/8880:/***/(module,__unused_webpack_exports,__nested_webpack_require_92328__)=>{var DESCRIPTORS=__nested_webpack_require_92328__(9781);var definePropertyModule=__nested_webpack_require_92328__(3070);var createPropertyDescriptor=__nested_webpack_require_92328__(9114);module.exports=DESCRIPTORS?function(object,key,value){return definePropertyModule.f(object,key,createPropertyDescriptor(1,value));}:function(object,key,value){object[key]=value;return object;};/***/},/***/9114:/***/module=>{module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};/***/},/***/6135:/***/(module,__unused_webpack_exports,__nested_webpack_require_93024__)=>{"use strict";var toPrimitive=__nested_webpack_require_93024__(7593);var definePropertyModule=__nested_webpack_require_93024__(3070);var createPropertyDescriptor=__nested_webpack_require_93024__(9114);module.exports=function(object,key,value){var propertyKey=toPrimitive(key);if(propertyKey in object)definePropertyModule.f(object,propertyKey,createPropertyDescriptor(0,value));else object[propertyKey]=value;};/***/},/***/9781:/***/(module,__unused_webpack_exports,__nested_webpack_require_93527__)=>{var fails=__nested_webpack_require_93527__(7293);// Detect IE8's incomplete defineProperty implementation
module.exports=!fails(function(){return Object.defineProperty({},1,{get:function(){return 7;}})[1]!=7;});/***/},/***/317:/***/(module,__unused_webpack_exports,__nested_webpack_require_93842__)=>{var global=__nested_webpack_require_93842__(7854);var isObject=__nested_webpack_require_93842__(111);var document=global.document;// typeof document.createElement is 'object' in old IE
var EXISTS=isObject(document)&&isObject(document.createElement);module.exports=function(it){return EXISTS?document.createElement(it):{};};/***/},/***/8324:/***/module=>{// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};/***/},/***/5268:/***/(module,__unused_webpack_exports,__nested_webpack_require_95062__)=>{var classof=__nested_webpack_require_95062__(4326);var global=__nested_webpack_require_95062__(7854);module.exports=classof(global.process)=='process';/***/},/***/8113:/***/(module,__unused_webpack_exports,__nested_webpack_require_95293__)=>{var getBuiltIn=__nested_webpack_require_95293__(5005);module.exports=getBuiltIn('navigator','userAgent')||'';/***/},/***/7392:/***/(module,__unused_webpack_exports,__nested_webpack_require_95493__)=>{var global=__nested_webpack_require_95493__(7854);var userAgent=__nested_webpack_require_95493__(8113);var process=global.process;var versions=process&&process.versions;var v8=versions&&versions.v8;var match,version;if(v8){match=v8.split('.');version=match[0]+match[1];}else if(userAgent){match=userAgent.match(/Edge\/(\d+)/);if(!match||match[1]>=74){match=userAgent.match(/Chrome\/(\d+)/);if(match)version=match[1];}}module.exports=version&&+version;/***/},/***/748:/***/module=>{// IE8- don't enum bug keys
module.exports=['constructor','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','toLocaleString','toString','valueOf'];/***/},/***/2109:/***/(module,__unused_webpack_exports,__nested_webpack_require_96318__)=>{var global=__nested_webpack_require_96318__(7854);var getOwnPropertyDescriptor=__nested_webpack_require_96318__(1236).f;var createNonEnumerableProperty=__nested_webpack_require_96318__(8880);var redefine=__nested_webpack_require_96318__(1320);var setGlobal=__nested_webpack_require_96318__(3505);var copyConstructorProperties=__nested_webpack_require_96318__(9920);var isForced=__nested_webpack_require_96318__(4705);/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/module.exports=function(options,source){var TARGET=options.target;var GLOBAL=options.global;var STATIC=options.stat;var FORCED,target,key,targetProperty,sourceProperty,descriptor;if(GLOBAL){target=global;}else if(STATIC){target=global[TARGET]||setGlobal(TARGET,{});}else{target=(global[TARGET]||{}).prototype;}if(target)for(key in source){sourceProperty=source[key];if(options.noTargetGet){descriptor=getOwnPropertyDescriptor(target,key);targetProperty=descriptor&&descriptor.value;}else targetProperty=target[key];FORCED=isForced(GLOBAL?key:TARGET+(STATIC?'.':'#')+key,options.forced);// contained in target
if(!FORCED&&targetProperty!==undefined){if(typeof sourceProperty===typeof targetProperty)continue;copyConstructorProperties(sourceProperty,targetProperty);}// add a flag to not completely full polyfills
if(options.sham||targetProperty&&targetProperty.sham){createNonEnumerableProperty(sourceProperty,'sham',true);}// extend global
redefine(target,key,sourceProperty,options);}};/***/},/***/7293:/***/module=>{module.exports=function(exec){try{return!!exec();}catch(error){return true;}};/***/},/***/7007:/***/(module,__unused_webpack_exports,__nested_webpack_require_98969__)=>{"use strict";// TODO: Remove from `core-js@4` since it's moved to entry points
__nested_webpack_require_98969__(4916);var redefine=__nested_webpack_require_98969__(1320);var fails=__nested_webpack_require_98969__(7293);var wellKnownSymbol=__nested_webpack_require_98969__(5112);var regexpExec=__nested_webpack_require_98969__(2261);var createNonEnumerableProperty=__nested_webpack_require_98969__(8880);var SPECIES=wellKnownSymbol('species');var REPLACE_SUPPORTS_NAMED_GROUPS=!fails(function(){// #replace needs built-in support for named groups.
// #match works fine because it just return the exec results, even if it has
// a "grops" property.
var re=/./;re.exec=function(){var result=[];result.groups={a:'7'};return result;};return''.replace(re,'$<a>')!=='7';});// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0=function(){return'a'.replace(/./,'$0')==='$0';}();var REPLACE=wellKnownSymbol('replace');// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE=function(){if(/./[REPLACE]){return /./[REPLACE]('a','$0')==='';}return false;}();// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC=!fails(function(){var re=/(?:)/;var originalExec=re.exec;re.exec=function(){return originalExec.apply(this,arguments);};var result='ab'.split(re);return result.length!==2||result[0]!=='a'||result[1]!=='b';});module.exports=function(KEY,length,exec,sham){var SYMBOL=wellKnownSymbol(KEY);var DELEGATES_TO_SYMBOL=!fails(function(){// String methods call symbol-named RegEp methods
var O={};O[SYMBOL]=function(){return 7;};return''[KEY](O)!=7;});var DELEGATES_TO_EXEC=DELEGATES_TO_SYMBOL&&!fails(function(){// Symbol-named RegExp methods call .exec
var execCalled=false;var re=/a/;if(KEY==='split'){// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
re={};// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
re.constructor={};re.constructor[SPECIES]=function(){return re;};re.flags='';re[SYMBOL]=/./[SYMBOL];}re.exec=function(){execCalled=true;return null;};re[SYMBOL]('');return!execCalled;});if(!DELEGATES_TO_SYMBOL||!DELEGATES_TO_EXEC||KEY==='replace'&&!(REPLACE_SUPPORTS_NAMED_GROUPS&&REPLACE_KEEPS_$0&&!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE)||KEY==='split'&&!SPLIT_WORKS_WITH_OVERWRITTEN_EXEC){var nativeRegExpMethod=/./[SYMBOL];var methods=exec(SYMBOL,''[KEY],function(nativeMethod,regexp,str,arg2,forceStringMethod){if(regexp.exec===regexpExec){if(DELEGATES_TO_SYMBOL&&!forceStringMethod){// The native String method already delegates to @@method (this
// polyfilled function), leasing to infinite recursion.
// We avoid it by directly calling the native @@method method.
return{done:true,value:nativeRegExpMethod.call(regexp,str,arg2)};}return{done:true,value:nativeMethod.call(str,regexp,arg2)};}return{done:false};},{REPLACE_KEEPS_$0:REPLACE_KEEPS_$0,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE});var stringMethod=methods[0];var regexMethod=methods[1];redefine(String.prototype,KEY,stringMethod);redefine(RegExp.prototype,SYMBOL,length==2// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
// 21.2.5.11 RegExp.prototype[@@split](string, limit)
?function(string,arg){return regexMethod.call(string,this,arg);}// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
:function(string){return regexMethod.call(string,this);});}if(sham)createNonEnumerableProperty(RegExp.prototype[SYMBOL],'sham',true);};/***/},/***/9974:/***/(module,__unused_webpack_exports,__nested_webpack_require_103650__)=>{var aFunction=__nested_webpack_require_103650__(3099);// optional / simple context binding
module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 0:return function(){return fn.call(that);};case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function/* ...args */(){return fn.apply(that,arguments);};};/***/},/***/5005:/***/(module,__unused_webpack_exports,__nested_webpack_require_104334__)=>{var path=__nested_webpack_require_104334__(857);var global=__nested_webpack_require_104334__(7854);var aFunction=function(variable){return typeof variable=='function'?variable:undefined;};module.exports=function(namespace,method){return arguments.length<2?aFunction(path[namespace])||aFunction(global[namespace]):path[namespace]&&path[namespace][method]||global[namespace]&&global[namespace][method];};/***/},/***/647:/***/(module,__unused_webpack_exports,__nested_webpack_require_104852__)=>{var toObject=__nested_webpack_require_104852__(7908);var floor=Math.floor;var replace=''.replace;var SUBSTITUTION_SYMBOLS=/\$([$&'`]|\d\d?|<[^>]*>)/g;var SUBSTITUTION_SYMBOLS_NO_NAMED=/\$([$&'`]|\d\d?)/g;// https://tc39.es/ecma262/#sec-getsubstitution
module.exports=function(matched,str,position,captures,namedCaptures,replacement){var tailPos=position+matched.length;var m=captures.length;var symbols=SUBSTITUTION_SYMBOLS_NO_NAMED;if(namedCaptures!==undefined){namedCaptures=toObject(namedCaptures);symbols=SUBSTITUTION_SYMBOLS;}return replace.call(replacement,symbols,function(match,ch){var capture;switch(ch.charAt(0)){case'$':return'$';case'&':return matched;case'`':return str.slice(0,position);case"'":return str.slice(tailPos);case'<':capture=namedCaptures[ch.slice(1,-1)];break;default:// \d\d?
var n=+ch;if(n===0)return match;if(n>m){var f=floor(n/10);if(f===0)return match;if(f<=m)return captures[f-1]===undefined?ch.charAt(1):captures[f-1]+ch.charAt(1);return match;}capture=captures[n-1];}return capture===undefined?'':capture;});};/***/},/***/7854:/***/(module,__unused_webpack_exports,__nested_webpack_require_106286__)=>{var check=function(it){return it&&it.Math==Math&&it;};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports=// eslint-disable-next-line no-undef
check(typeof globalThis=='object'&&globalThis)||check(typeof window=='object'&&window)||check(typeof self=='object'&&self)||check(typeof __nested_webpack_require_106286__.g=='object'&&__nested_webpack_require_106286__.g)||// eslint-disable-next-line no-new-func
function(){return this;}()||Function('return this')();/***/},/***/6656:/***/module=>{var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key);};/***/},/***/3501:/***/module=>{module.exports={};/***/},/***/490:/***/(module,__unused_webpack_exports,__nested_webpack_require_107146__)=>{var getBuiltIn=__nested_webpack_require_107146__(5005);module.exports=getBuiltIn('document','documentElement');/***/},/***/4664:/***/(module,__unused_webpack_exports,__nested_webpack_require_107345__)=>{var DESCRIPTORS=__nested_webpack_require_107345__(9781);var fails=__nested_webpack_require_107345__(7293);var createElement=__nested_webpack_require_107345__(317);// Thank's IE8 for his funny defineProperty
module.exports=!DESCRIPTORS&&!fails(function(){return Object.defineProperty(createElement('div'),'a',{get:function(){return 7;}}).a!=7;});/***/},/***/8361:/***/(module,__unused_webpack_exports,__nested_webpack_require_107780__)=>{var fails=__nested_webpack_require_107780__(7293);var classof=__nested_webpack_require_107780__(4326);var split=''.split;// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports=fails(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins
return!Object('z').propertyIsEnumerable(0);})?function(it){return classof(it)=='String'?split.call(it,''):Object(it);}:Object;/***/},/***/9587:/***/(module,__unused_webpack_exports,__nested_webpack_require_108363__)=>{var isObject=__nested_webpack_require_108363__(111);var setPrototypeOf=__nested_webpack_require_108363__(7674);// makes subclassing work correct for wrapped built-ins
module.exports=function($this,dummy,Wrapper){var NewTarget,NewTargetPrototype;if(// it can work only with native `setPrototypeOf`
setPrototypeOf&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
typeof(NewTarget=dummy.constructor)=='function'&&NewTarget!==Wrapper&&isObject(NewTargetPrototype=NewTarget.prototype)&&NewTargetPrototype!==Wrapper.prototype)setPrototypeOf($this,NewTargetPrototype);return $this;};/***/},/***/2788:/***/(module,__unused_webpack_exports,__nested_webpack_require_109119__)=>{var store=__nested_webpack_require_109119__(5465);var functionToString=Function.toString;// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if(typeof store.inspectSource!='function'){store.inspectSource=function(it){return functionToString.call(it);};}module.exports=store.inspectSource;/***/},/***/9909:/***/(module,__unused_webpack_exports,__nested_webpack_require_109540__)=>{var NATIVE_WEAK_MAP=__nested_webpack_require_109540__(8536);var global=__nested_webpack_require_109540__(7854);var isObject=__nested_webpack_require_109540__(111);var createNonEnumerableProperty=__nested_webpack_require_109540__(8880);var objectHas=__nested_webpack_require_109540__(6656);var shared=__nested_webpack_require_109540__(5465);var sharedKey=__nested_webpack_require_109540__(6200);var hiddenKeys=__nested_webpack_require_109540__(3501);var WeakMap=global.WeakMap;var set,get,has;var enforce=function(it){return has(it)?get(it):set(it,{});};var getterFor=function(TYPE){return function(it){var state;if(!isObject(it)||(state=get(it)).type!==TYPE){throw TypeError('Incompatible receiver, '+TYPE+' required');}return state;};};if(NATIVE_WEAK_MAP){var store=shared.state||(shared.state=new WeakMap());var wmget=store.get;var wmhas=store.has;var wmset=store.set;set=function(it,metadata){metadata.facade=it;wmset.call(store,it,metadata);return metadata;};get=function(it){return wmget.call(store,it)||{};};has=function(it){return wmhas.call(store,it);};}else{var STATE=sharedKey('state');hiddenKeys[STATE]=true;set=function(it,metadata){metadata.facade=it;createNonEnumerableProperty(it,STATE,metadata);return metadata;};get=function(it){return objectHas(it,STATE)?it[STATE]:{};};has=function(it){return objectHas(it,STATE);};}module.exports={set:set,get:get,has:has,enforce:enforce,getterFor:getterFor};/***/},/***/3157:/***/(module,__unused_webpack_exports,__nested_webpack_require_111227__)=>{var classof=__nested_webpack_require_111227__(4326);// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports=Array.isArray||function isArray(arg){return classof(arg)=='Array';};/***/},/***/4705:/***/(module,__unused_webpack_exports,__nested_webpack_require_111530__)=>{var fails=__nested_webpack_require_111530__(7293);var replacement=/#|\.prototype\./;var isForced=function(feature,detection){var value=data[normalize(feature)];return value==POLYFILL?true:value==NATIVE?false:typeof detection=='function'?fails(detection):!!detection;};var normalize=isForced.normalize=function(string){return String(string).replace(replacement,'.').toLowerCase();};var data=isForced.data={};var NATIVE=isForced.NATIVE='N';var POLYFILL=isForced.POLYFILL='P';module.exports=isForced;/***/},/***/111:/***/module=>{module.exports=function(it){return typeof it==='object'?it!==null:typeof it==='function';};/***/},/***/1913:/***/module=>{module.exports=false;/***/},/***/7850:/***/(module,__unused_webpack_exports,__nested_webpack_require_112420__)=>{var isObject=__nested_webpack_require_112420__(111);var classof=__nested_webpack_require_112420__(4326);var wellKnownSymbol=__nested_webpack_require_112420__(5112);var MATCH=wellKnownSymbol('match');// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports=function(it){var isRegExp;return isObject(it)&&((isRegExp=it[MATCH])!==undefined?!!isRegExp:classof(it)=='RegExp');};/***/},/***/133:/***/(module,__unused_webpack_exports,__nested_webpack_require_112914__)=>{var fails=__nested_webpack_require_112914__(7293);module.exports=!!Object.getOwnPropertySymbols&&!fails(function(){// Chrome 38 Symbol has incorrect toString conversion
// eslint-disable-next-line no-undef
return!String(Symbol());});/***/},/***/8536:/***/(module,__unused_webpack_exports,__nested_webpack_require_113247__)=>{var global=__nested_webpack_require_113247__(7854);var inspectSource=__nested_webpack_require_113247__(2788);var WeakMap=global.WeakMap;module.exports=typeof WeakMap==='function'&&/native code/.test(inspectSource(WeakMap));/***/},/***/3929:/***/(module,__unused_webpack_exports,__nested_webpack_require_113554__)=>{var isRegExp=__nested_webpack_require_113554__(7850);module.exports=function(it){if(isRegExp(it)){throw TypeError("The method doesn't accept regular expressions");}return it;};/***/},/***/3009:/***/(module,__unused_webpack_exports,__nested_webpack_require_113834__)=>{var global=__nested_webpack_require_113834__(7854);var trim=__nested_webpack_require_113834__(3111).trim;var whitespaces=__nested_webpack_require_113834__(1361);var $parseInt=global.parseInt;var hex=/^[+-]?0[Xx]/;var FORCED=$parseInt(whitespaces+'08')!==8||$parseInt(whitespaces+'0x16')!==22;// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports=FORCED?function parseInt(string,radix){var S=trim(String(string));return $parseInt(S,radix>>>0||(hex.test(S)?16:10));}:$parseInt;/***/},/***/30:/***/(module,__unused_webpack_exports,__nested_webpack_require_114454__)=>{var anObject=__nested_webpack_require_114454__(9670);var defineProperties=__nested_webpack_require_114454__(6048);var enumBugKeys=__nested_webpack_require_114454__(748);var hiddenKeys=__nested_webpack_require_114454__(3501);var html=__nested_webpack_require_114454__(490);var documentCreateElement=__nested_webpack_require_114454__(317);var sharedKey=__nested_webpack_require_114454__(6200);var GT='>';var LT='<';var PROTOTYPE='prototype';var SCRIPT='script';var IE_PROTO=sharedKey('IE_PROTO');var EmptyConstructor=function(){/* empty */};var scriptTag=function(content){return LT+SCRIPT+GT+content+LT+'/'+SCRIPT+GT;};// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX=function(activeXDocument){activeXDocument.write(scriptTag(''));activeXDocument.close();var temp=activeXDocument.parentWindow.Object;activeXDocument=null;// avoid memory leak
return temp;};// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame=function(){// Thrash, waste and sodomy: IE GC bug
var iframe=documentCreateElement('iframe');var JS='java'+SCRIPT+':';var iframeDocument;iframe.style.display='none';html.appendChild(iframe);// https://github.com/zloirock/core-js/issues/475
iframe.src=String(JS);iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(scriptTag('document.F=Object'));iframeDocument.close();return iframeDocument.F;};// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;var NullProtoObject=function(){try{/* global ActiveXObject */activeXDocument=document.domain&&new ActiveXObject('htmlfile');}catch(error){/* ignore */}NullProtoObject=activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame();var length=enumBugKeys.length;while(length--)delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];return NullProtoObject();};hiddenKeys[IE_PROTO]=true;// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports=Object.create||function create(O,Properties){var result;if(O!==null){EmptyConstructor[PROTOTYPE]=anObject(O);result=new EmptyConstructor();EmptyConstructor[PROTOTYPE]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=NullProtoObject();return Properties===undefined?result:defineProperties(result,Properties);};/***/},/***/6048:/***/(module,__unused_webpack_exports,__nested_webpack_require_117333__)=>{var DESCRIPTORS=__nested_webpack_require_117333__(9781);var definePropertyModule=__nested_webpack_require_117333__(3070);var anObject=__nested_webpack_require_117333__(9670);var objectKeys=__nested_webpack_require_117333__(1956);// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports=DESCRIPTORS?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var keys=objectKeys(Properties);var length=keys.length;var index=0;var key;while(length>index)definePropertyModule.f(O,key=keys[index++],Properties[key]);return O;};/***/},/***/3070:/***/(__unused_webpack_module,exports,__nested_webpack_require_118018__)=>{var DESCRIPTORS=__nested_webpack_require_118018__(9781);var IE8_DOM_DEFINE=__nested_webpack_require_118018__(4664);var anObject=__nested_webpack_require_118018__(9670);var toPrimitive=__nested_webpack_require_118018__(7593);var nativeDefineProperty=Object.defineProperty;// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f=DESCRIPTORS?nativeDefineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return nativeDefineProperty(O,P,Attributes);}catch(error){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported');if('value'in Attributes)O[P]=Attributes.value;return O;};/***/},/***/1236:/***/(__unused_webpack_module,exports,__nested_webpack_require_118868__)=>{var DESCRIPTORS=__nested_webpack_require_118868__(9781);var propertyIsEnumerableModule=__nested_webpack_require_118868__(5296);var createPropertyDescriptor=__nested_webpack_require_118868__(9114);var toIndexedObject=__nested_webpack_require_118868__(5656);var toPrimitive=__nested_webpack_require_118868__(7593);var has=__nested_webpack_require_118868__(6656);var IE8_DOM_DEFINE=__nested_webpack_require_118868__(4664);var nativeGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f=DESCRIPTORS?nativeGetOwnPropertyDescriptor:function getOwnPropertyDescriptor(O,P){O=toIndexedObject(O);P=toPrimitive(P,true);if(IE8_DOM_DEFINE)try{return nativeGetOwnPropertyDescriptor(O,P);}catch(error){/* empty */}if(has(O,P))return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O,P),O[P]);};/***/},/***/8006:/***/(__unused_webpack_module,exports,__nested_webpack_require_119851__)=>{var internalObjectKeys=__nested_webpack_require_119851__(6324);var enumBugKeys=__nested_webpack_require_119851__(748);var hiddenKeys=enumBugKeys.concat('length','prototype');// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return internalObjectKeys(O,hiddenKeys);};/***/},/***/5181:/***/(__unused_webpack_module,exports)=>{exports.f=Object.getOwnPropertySymbols;/***/},/***/9518:/***/(module,__unused_webpack_exports,__nested_webpack_require_120439__)=>{var has=__nested_webpack_require_120439__(6656);var toObject=__nested_webpack_require_120439__(7908);var sharedKey=__nested_webpack_require_120439__(6200);var CORRECT_PROTOTYPE_GETTER=__nested_webpack_require_120439__(8544);var IE_PROTO=sharedKey('IE_PROTO');var ObjectPrototype=Object.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports=CORRECT_PROTOTYPE_GETTER?Object.getPrototypeOf:function(O){O=toObject(O);if(has(O,IE_PROTO))return O[IE_PROTO];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectPrototype:null;};/***/},/***/6324:/***/(module,__unused_webpack_exports,__nested_webpack_require_121197__)=>{var has=__nested_webpack_require_121197__(6656);var toIndexedObject=__nested_webpack_require_121197__(5656);var indexOf=__nested_webpack_require_121197__(1318).indexOf;var hiddenKeys=__nested_webpack_require_121197__(3501);module.exports=function(object,names){var O=toIndexedObject(object);var i=0;var result=[];var key;for(key in O)!has(hiddenKeys,key)&&has(O,key)&&result.push(key);// Don't enum bug & hidden keys
while(names.length>i)if(has(O,key=names[i++])){~indexOf(result,key)||result.push(key);}return result;};/***/},/***/1956:/***/(module,__unused_webpack_exports,__nested_webpack_require_121832__)=>{var internalObjectKeys=__nested_webpack_require_121832__(6324);var enumBugKeys=__nested_webpack_require_121832__(748);// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports=Object.keys||function keys(O){return internalObjectKeys(O,enumBugKeys);};/***/},/***/5296:/***/(__unused_webpack_module,exports)=>{"use strict";var nativePropertyIsEnumerable={}.propertyIsEnumerable;var getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;// Nashorn ~ JDK8 bug
var NASHORN_BUG=getOwnPropertyDescriptor&&!nativePropertyIsEnumerable.call({1:2},1);// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f=NASHORN_BUG?function propertyIsEnumerable(V){var descriptor=getOwnPropertyDescriptor(this,V);return!!descriptor&&descriptor.enumerable;}:nativePropertyIsEnumerable;/***/},/***/7674:/***/(module,__unused_webpack_exports,__nested_webpack_require_122847__)=>{var anObject=__nested_webpack_require_122847__(9670);var aPossiblePrototype=__nested_webpack_require_122847__(6077);// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */module.exports=Object.setPrototypeOf||('__proto__'in{}?function(){var CORRECT_SETTER=false;var test={};var setter;try{setter=Object.getOwnPropertyDescriptor(Object.prototype,'__proto__').set;setter.call(test,[]);CORRECT_SETTER=test instanceof Array;}catch(error){/* empty */}return function setPrototypeOf(O,proto){anObject(O);aPossiblePrototype(proto);if(CORRECT_SETTER)setter.call(O,proto);else O.__proto__=proto;return O;};}():undefined);/***/},/***/3887:/***/(module,__unused_webpack_exports,__nested_webpack_require_123766__)=>{var getBuiltIn=__nested_webpack_require_123766__(5005);var getOwnPropertyNamesModule=__nested_webpack_require_123766__(8006);var getOwnPropertySymbolsModule=__nested_webpack_require_123766__(5181);var anObject=__nested_webpack_require_123766__(9670);// all object keys, includes non-enumerable and symbols
module.exports=getBuiltIn('Reflect','ownKeys')||function ownKeys(it){var keys=getOwnPropertyNamesModule.f(anObject(it));var getOwnPropertySymbols=getOwnPropertySymbolsModule.f;return getOwnPropertySymbols?keys.concat(getOwnPropertySymbols(it)):keys;};/***/},/***/857:/***/(module,__unused_webpack_exports,__nested_webpack_require_124398__)=>{var global=__nested_webpack_require_124398__(7854);module.exports=global;/***/},/***/1320:/***/(module,__unused_webpack_exports,__nested_webpack_require_124558__)=>{var global=__nested_webpack_require_124558__(7854);var createNonEnumerableProperty=__nested_webpack_require_124558__(8880);var has=__nested_webpack_require_124558__(6656);var setGlobal=__nested_webpack_require_124558__(3505);var inspectSource=__nested_webpack_require_124558__(2788);var InternalStateModule=__nested_webpack_require_124558__(9909);var getInternalState=InternalStateModule.get;var enforceInternalState=InternalStateModule.enforce;var TEMPLATE=String(String).split('String');(module.exports=function(O,key,value,options){var unsafe=options?!!options.unsafe:false;var simple=options?!!options.enumerable:false;var noTargetGet=options?!!options.noTargetGet:false;var state;if(typeof value=='function'){if(typeof key=='string'&&!has(value,'name')){createNonEnumerableProperty(value,'name',key);}state=enforceInternalState(value);if(!state.source){state.source=TEMPLATE.join(typeof key=='string'?key:'');}}if(O===global){if(simple)O[key]=value;else setGlobal(key,value);return;}else if(!unsafe){delete O[key];}else if(!noTargetGet&&O[key]){simple=true;}if(simple)O[key]=value;else createNonEnumerableProperty(O,key,value);// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,'toString',function toString(){return typeof this=='function'&&getInternalState(this).source||inspectSource(this);});/***/},/***/7651:/***/(module,__unused_webpack_exports,__nested_webpack_require_126170__)=>{var classof=__nested_webpack_require_126170__(4326);var regexpExec=__nested_webpack_require_126170__(2261);// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports=function(R,S){var exec=R.exec;if(typeof exec==='function'){var result=exec.call(R,S);if(typeof result!=='object'){throw TypeError('RegExp exec method returned something other than an Object or null');}return result;}if(classof(R)!=='RegExp'){throw TypeError('RegExp#exec called on incompatible receiver');}return regexpExec.call(R,S);};/***/},/***/2261:/***/(module,__unused_webpack_exports,__nested_webpack_require_126857__)=>{"use strict";var regexpFlags=__nested_webpack_require_126857__(7066);var stickyHelpers=__nested_webpack_require_126857__(2999);var nativeExec=RegExp.prototype.exec;// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace=String.prototype.replace;var patchedExec=nativeExec;var UPDATES_LAST_INDEX_WRONG=function(){var re1=/a/;var re2=/b*/g;nativeExec.call(re1,'a');nativeExec.call(re2,'a');return re1.lastIndex!==0||re2.lastIndex!==0;}();var UNSUPPORTED_Y=stickyHelpers.UNSUPPORTED_Y||stickyHelpers.BROKEN_CARET;// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED=/()??/.exec('')[1]!==undefined;var PATCH=UPDATES_LAST_INDEX_WRONG||NPCG_INCLUDED||UNSUPPORTED_Y;if(PATCH){patchedExec=function exec(str){var re=this;var lastIndex,reCopy,match,i;var sticky=UNSUPPORTED_Y&&re.sticky;var flags=regexpFlags.call(re);var source=re.source;var charsAdded=0;var strCopy=str;if(sticky){flags=flags.replace('y','');if(flags.indexOf('g')===-1){flags+='g';}strCopy=String(str).slice(re.lastIndex);// Support anchored sticky behavior.
if(re.lastIndex>0&&(!re.multiline||re.multiline&&str[re.lastIndex-1]!=='\n')){source='(?: '+source+')';strCopy=' '+strCopy;charsAdded++;}// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
reCopy=new RegExp('^(?:'+source+')',flags);}if(NPCG_INCLUDED){reCopy=new RegExp('^'+source+'$(?!\\s)',flags);}if(UPDATES_LAST_INDEX_WRONG)lastIndex=re.lastIndex;match=nativeExec.call(sticky?reCopy:re,strCopy);if(sticky){if(match){match.input=match.input.slice(charsAdded);match[0]=match[0].slice(charsAdded);match.index=re.lastIndex;re.lastIndex+=match[0].length;}else re.lastIndex=0;}else if(UPDATES_LAST_INDEX_WRONG&&match){re.lastIndex=re.global?match.index+match[0].length:lastIndex;}if(NPCG_INCLUDED&&match&&match.length>1){// Fix browsers whose `exec` methods don't consistently return `undefined`
// for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
nativeReplace.call(match[0],reCopy,function(){for(i=1;i<arguments.length-2;i++){if(arguments[i]===undefined)match[i]=undefined;}});}return match;};}module.exports=patchedExec;/***/},/***/7066:/***/(module,__unused_webpack_exports,__nested_webpack_require_129759__)=>{"use strict";var anObject=__nested_webpack_require_129759__(9670);// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports=function(){var that=anObject(this);var result='';if(that.global)result+='g';if(that.ignoreCase)result+='i';if(that.multiline)result+='m';if(that.dotAll)result+='s';if(that.unicode)result+='u';if(that.sticky)result+='y';return result;};/***/},/***/2999:/***/(__unused_webpack_module,exports,__nested_webpack_require_130331__)=>{"use strict";var fails=__nested_webpack_require_130331__(7293);// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s,f){return RegExp(s,f);}exports.UNSUPPORTED_Y=fails(function(){// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var re=RE('a','y');re.lastIndex=2;return re.exec('abcd')!=null;});exports.BROKEN_CARET=fails(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var re=RE('^r','gy');re.lastIndex=2;return re.exec('str')!=null;});/***/},/***/4488:/***/module=>{// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on "+it);return it;};/***/},/***/3505:/***/(module,__unused_webpack_exports,__nested_webpack_require_131305__)=>{var global=__nested_webpack_require_131305__(7854);var createNonEnumerableProperty=__nested_webpack_require_131305__(8880);module.exports=function(key,value){try{createNonEnumerableProperty(global,key,value);}catch(error){global[key]=value;}return value;};/***/},/***/6340:/***/(module,__unused_webpack_exports,__nested_webpack_require_131669__)=>{"use strict";var getBuiltIn=__nested_webpack_require_131669__(5005);var definePropertyModule=__nested_webpack_require_131669__(3070);var wellKnownSymbol=__nested_webpack_require_131669__(5112);var DESCRIPTORS=__nested_webpack_require_131669__(9781);var SPECIES=wellKnownSymbol('species');module.exports=function(CONSTRUCTOR_NAME){var Constructor=getBuiltIn(CONSTRUCTOR_NAME);var defineProperty=definePropertyModule.f;if(DESCRIPTORS&&Constructor&&!Constructor[SPECIES]){defineProperty(Constructor,SPECIES,{configurable:true,get:function(){return this;}});}};/***/},/***/6200:/***/(module,__unused_webpack_exports,__nested_webpack_require_132344__)=>{var shared=__nested_webpack_require_132344__(2309);var uid=__nested_webpack_require_132344__(9711);var keys=shared('keys');module.exports=function(key){return keys[key]||(keys[key]=uid(key));};/***/},/***/5465:/***/(module,__unused_webpack_exports,__nested_webpack_require_132627__)=>{var global=__nested_webpack_require_132627__(7854);var setGlobal=__nested_webpack_require_132627__(3505);var SHARED='__core-js_shared__';var store=global[SHARED]||setGlobal(SHARED,{});module.exports=store;/***/},/***/2309:/***/(module,__unused_webpack_exports,__nested_webpack_require_132918__)=>{var IS_PURE=__nested_webpack_require_132918__(1913);var store=__nested_webpack_require_132918__(5465);(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{});})('versions',[]).push({version:'3.8.3',mode:IS_PURE?'pure':'global',copyright:'© 2021 Denis Pushkarev (zloirock.ru)'});/***/},/***/6707:/***/(module,__unused_webpack_exports,__nested_webpack_require_133346__)=>{var anObject=__nested_webpack_require_133346__(9670);var aFunction=__nested_webpack_require_133346__(3099);var wellKnownSymbol=__nested_webpack_require_133346__(5112);var SPECIES=wellKnownSymbol('species');// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports=function(O,defaultConstructor){var C=anObject(O).constructor;var S;return C===undefined||(S=anObject(C)[SPECIES])==undefined?defaultConstructor:aFunction(S);};/***/},/***/8710:/***/(module,__unused_webpack_exports,__nested_webpack_require_133916__)=>{var toInteger=__nested_webpack_require_133916__(9958);var requireObjectCoercible=__nested_webpack_require_133916__(4488);// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod=function(CONVERT_TO_STRING){return function($this,pos){var S=String(requireObjectCoercible($this));var position=toInteger(pos);var size=S.length;var first,second;if(position<0||position>=size)return CONVERT_TO_STRING?'':undefined;first=S.charCodeAt(position);return first<0xD800||first>0xDBFF||position+1===size||(second=S.charCodeAt(position+1))<0xDC00||second>0xDFFF?CONVERT_TO_STRING?S.charAt(position):first:CONVERT_TO_STRING?S.slice(position,position+2):(first-0xD800<<10)+(second-0xDC00)+0x10000;};};module.exports={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:createMethod(false),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:createMethod(true)};/***/},/***/6091:/***/(module,__unused_webpack_exports,__nested_webpack_require_135121__)=>{var fails=__nested_webpack_require_135121__(7293);var whitespaces=__nested_webpack_require_135121__(1361);var non='\u200B\u0085\u180E';// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports=function(METHOD_NAME){return fails(function(){return!!whitespaces[METHOD_NAME]()||non[METHOD_NAME]()!=non||whitespaces[METHOD_NAME].name!==METHOD_NAME;});};/***/},/***/3111:/***/(module,__unused_webpack_exports,__nested_webpack_require_135624__)=>{var requireObjectCoercible=__nested_webpack_require_135624__(4488);var whitespaces=__nested_webpack_require_135624__(1361);var whitespace='['+whitespaces+']';var ltrim=RegExp('^'+whitespace+whitespace+'*');var rtrim=RegExp(whitespace+whitespace+'*$');// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod=function(TYPE){return function($this){var string=String(requireObjectCoercible($this));if(TYPE&1)string=string.replace(ltrim,'');if(TYPE&2)string=string.replace(rtrim,'');return string;};};module.exports={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:createMethod(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:createMethod(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:createMethod(3)};/***/},/***/1400:/***/(module,__unused_webpack_exports,__nested_webpack_require_136743__)=>{var toInteger=__nested_webpack_require_136743__(9958);var max=Math.max;var min=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports=function(index,length){var integer=toInteger(index);return integer<0?max(integer+length,0):min(integer,length);};/***/},/***/5656:/***/(module,__unused_webpack_exports,__nested_webpack_require_137267__)=>{// toObject with fallback for non-array-like ES3 strings
var IndexedObject=__nested_webpack_require_137267__(8361);var requireObjectCoercible=__nested_webpack_require_137267__(4488);module.exports=function(it){return IndexedObject(requireObjectCoercible(it));};/***/},/***/9958:/***/module=>{var ceil=Math.ceil;var floor=Math.floor;// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports=function(argument){return isNaN(argument=+argument)?0:(argument>0?floor:ceil)(argument);};/***/},/***/7466:/***/(module,__unused_webpack_exports,__nested_webpack_require_137906__)=>{var toInteger=__nested_webpack_require_137906__(9958);var min=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports=function(argument){return argument>0?min(toInteger(argument),0x1FFFFFFFFFFFFF):0;// 2 ** 53 - 1 == 9007199254740991
};/***/},/***/7908:/***/(module,__unused_webpack_exports,__nested_webpack_require_138288__)=>{var requireObjectCoercible=__nested_webpack_require_138288__(4488);// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports=function(argument){return Object(requireObjectCoercible(argument));};/***/},/***/7593:/***/(module,__unused_webpack_exports,__nested_webpack_require_138606__)=>{var isObject=__nested_webpack_require_138606__(111);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(input,PREFERRED_STRING){if(!isObject(input))return input;var fn,val;if(PREFERRED_STRING&&typeof(fn=input.toString)=='function'&&!isObject(val=fn.call(input)))return val;if(typeof(fn=input.valueOf)=='function'&&!isObject(val=fn.call(input)))return val;if(!PREFERRED_STRING&&typeof(fn=input.toString)=='function'&&!isObject(val=fn.call(input)))return val;throw TypeError("Can't convert object to primitive value");};/***/},/***/9711:/***/module=>{var id=0;var postfix=Math.random();module.exports=function(key){return'Symbol('+String(key===undefined?'':key)+')_'+(++id+postfix).toString(36);};/***/},/***/3307:/***/(module,__unused_webpack_exports,__nested_webpack_require_139687__)=>{var NATIVE_SYMBOL=__nested_webpack_require_139687__(133);module.exports=NATIVE_SYMBOL// eslint-disable-next-line no-undef
&&!Symbol.sham// eslint-disable-next-line no-undef
&&typeof Symbol.iterator=='symbol';/***/},/***/5112:/***/(module,__unused_webpack_exports,__nested_webpack_require_139996__)=>{var global=__nested_webpack_require_139996__(7854);var shared=__nested_webpack_require_139996__(2309);var has=__nested_webpack_require_139996__(6656);var uid=__nested_webpack_require_139996__(9711);var NATIVE_SYMBOL=__nested_webpack_require_139996__(133);var USE_SYMBOL_AS_UID=__nested_webpack_require_139996__(3307);var WellKnownSymbolsStore=shared('wks');var Symbol=global.Symbol;var createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol:Symbol&&Symbol.withoutSetter||uid;module.exports=function(name){if(!has(WellKnownSymbolsStore,name)){if(NATIVE_SYMBOL&&has(Symbol,name))WellKnownSymbolsStore[name]=Symbol[name];else WellKnownSymbolsStore[name]=createWellKnownSymbol('Symbol.'+name);}return WellKnownSymbolsStore[name];};/***/},/***/1361:/***/module=>{// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports='\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';/***/},/***/2222:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_141115__)=>{"use strict";var $=__nested_webpack_require_141115__(2109);var fails=__nested_webpack_require_141115__(7293);var isArray=__nested_webpack_require_141115__(3157);var isObject=__nested_webpack_require_141115__(111);var toObject=__nested_webpack_require_141115__(7908);var toLength=__nested_webpack_require_141115__(7466);var createProperty=__nested_webpack_require_141115__(6135);var arraySpeciesCreate=__nested_webpack_require_141115__(5417);var arrayMethodHasSpeciesSupport=__nested_webpack_require_141115__(1194);var wellKnownSymbol=__nested_webpack_require_141115__(5112);var V8_VERSION=__nested_webpack_require_141115__(7392);var IS_CONCAT_SPREADABLE=wellKnownSymbol('isConcatSpreadable');var MAX_SAFE_INTEGER=0x1FFFFFFFFFFFFF;var MAXIMUM_ALLOWED_INDEX_EXCEEDED='Maximum allowed index exceeded';// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT=V8_VERSION>=51||!fails(function(){var array=[];array[IS_CONCAT_SPREADABLE]=false;return array.concat()[0]!==array;});var SPECIES_SUPPORT=arrayMethodHasSpeciesSupport('concat');var isConcatSpreadable=function(O){if(!isObject(O))return false;var spreadable=O[IS_CONCAT_SPREADABLE];return spreadable!==undefined?!!spreadable:isArray(O);};var FORCED=!IS_CONCAT_SPREADABLE_SUPPORT||!SPECIES_SUPPORT;// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({target:'Array',proto:true,forced:FORCED},{concat:function concat(arg){// eslint-disable-line no-unused-vars
var O=toObject(this);var A=arraySpeciesCreate(O,0);var n=0;var i,k,length,len,E;for(i=-1,length=arguments.length;i<length;i++){E=i===-1?O:arguments[i];if(isConcatSpreadable(E)){len=toLength(E.length);if(n+len>MAX_SAFE_INTEGER)throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);for(k=0;k<len;k++,n++)if(k in E)createProperty(A,n,E[k]);}else{if(n>=MAX_SAFE_INTEGER)throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);createProperty(A,n++,E);}}A.length=n;return A;}});/***/},/***/7327:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_143484__)=>{"use strict";var $=__nested_webpack_require_143484__(2109);var $filter=__nested_webpack_require_143484__(2092).filter;var arrayMethodHasSpeciesSupport=__nested_webpack_require_143484__(1194);var arrayMethodUsesToLength=__nested_webpack_require_143484__(9207);var HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport('filter');// Edge 14- issue
var USES_TO_LENGTH=arrayMethodUsesToLength('filter');// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({target:'Array',proto:true,forced:!HAS_SPECIES_SUPPORT||!USES_TO_LENGTH},{filter:function filter(callbackfn/* , thisArg */){return $filter(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});/***/},/***/9826:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_144318__)=>{"use strict";var $=__nested_webpack_require_144318__(2109);var $find=__nested_webpack_require_144318__(2092).find;var addToUnscopables=__nested_webpack_require_144318__(1223);var arrayMethodUsesToLength=__nested_webpack_require_144318__(9207);var FIND='find';var SKIPS_HOLES=true;var USES_TO_LENGTH=arrayMethodUsesToLength(FIND);// Shouldn't skip holes
if(FIND in[])Array(1)[FIND](function(){SKIPS_HOLES=false;});// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({target:'Array',proto:true,forced:SKIPS_HOLES||!USES_TO_LENGTH},{find:function find(callbackfn/* , that = undefined */){return $find(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);/***/},/***/9554:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_145228__)=>{"use strict";var $=__nested_webpack_require_145228__(2109);var forEach=__nested_webpack_require_145228__(8533);// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({target:'Array',proto:true,forced:[].forEach!=forEach},{forEach:forEach});/***/},/***/6699:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_145615__)=>{"use strict";var $=__nested_webpack_require_145615__(2109);var $includes=__nested_webpack_require_145615__(1318).includes;var addToUnscopables=__nested_webpack_require_145615__(1223);var arrayMethodUsesToLength=__nested_webpack_require_145615__(9207);var USES_TO_LENGTH=arrayMethodUsesToLength('indexOf',{ACCESSORS:true,1:0});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({target:'Array',proto:true,forced:!USES_TO_LENGTH},{includes:function includes(el/* , fromIndex = 0 */){return $includes(this,el,arguments.length>1?arguments[1]:undefined);}});// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');/***/},/***/2772:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_146418__)=>{"use strict";var $=__nested_webpack_require_146418__(2109);var $indexOf=__nested_webpack_require_146418__(1318).indexOf;var arrayMethodIsStrict=__nested_webpack_require_146418__(9341);var arrayMethodUsesToLength=__nested_webpack_require_146418__(9207);var nativeIndexOf=[].indexOf;var NEGATIVE_ZERO=!!nativeIndexOf&&1/[1].indexOf(1,-0)<0;var STRICT_METHOD=arrayMethodIsStrict('indexOf');var USES_TO_LENGTH=arrayMethodUsesToLength('indexOf',{ACCESSORS:true,1:0});// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({target:'Array',proto:true,forced:NEGATIVE_ZERO||!STRICT_METHOD||!USES_TO_LENGTH},{indexOf:function indexOf(searchElement/* , fromIndex = 0 */){return NEGATIVE_ZERO// convert -0 to +0
?nativeIndexOf.apply(this,arguments)||0:$indexOf(this,searchElement,arguments.length>1?arguments[1]:undefined);}});/***/},/***/9600:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_147431__)=>{"use strict";var $=__nested_webpack_require_147431__(2109);var IndexedObject=__nested_webpack_require_147431__(8361);var toIndexedObject=__nested_webpack_require_147431__(5656);var arrayMethodIsStrict=__nested_webpack_require_147431__(9341);var nativeJoin=[].join;var ES3_STRINGS=IndexedObject!=Object;var STRICT_METHOD=arrayMethodIsStrict('join',',');// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({target:'Array',proto:true,forced:ES3_STRINGS||!STRICT_METHOD},{join:function join(separator){return nativeJoin.call(toIndexedObject(this),separator===undefined?',':separator);}});/***/},/***/1249:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_148167__)=>{"use strict";var $=__nested_webpack_require_148167__(2109);var $map=__nested_webpack_require_148167__(2092).map;var arrayMethodHasSpeciesSupport=__nested_webpack_require_148167__(1194);var arrayMethodUsesToLength=__nested_webpack_require_148167__(9207);var HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport('map');// FF49- issue
var USES_TO_LENGTH=arrayMethodUsesToLength('map');// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({target:'Array',proto:true,forced:!HAS_SPECIES_SUPPORT||!USES_TO_LENGTH},{map:function map(callbackfn/* , thisArg */){return $map(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});/***/},/***/5827:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_148971__)=>{"use strict";var $=__nested_webpack_require_148971__(2109);var $reduce=__nested_webpack_require_148971__(3671).left;var arrayMethodIsStrict=__nested_webpack_require_148971__(9341);var arrayMethodUsesToLength=__nested_webpack_require_148971__(9207);var CHROME_VERSION=__nested_webpack_require_148971__(7392);var IS_NODE=__nested_webpack_require_148971__(5268);var STRICT_METHOD=arrayMethodIsStrict('reduce');var USES_TO_LENGTH=arrayMethodUsesToLength('reduce',{1:0});// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG=!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83;// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({target:'Array',proto:true,forced:!STRICT_METHOD||!USES_TO_LENGTH||CHROME_BUG},{reduce:function reduce(callbackfn/* , initialValue */){return $reduce(this,callbackfn,arguments.length,arguments.length>1?arguments[1]:undefined);}});/***/},/***/7042:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_150028__)=>{"use strict";var $=__nested_webpack_require_150028__(2109);var isObject=__nested_webpack_require_150028__(111);var isArray=__nested_webpack_require_150028__(3157);var toAbsoluteIndex=__nested_webpack_require_150028__(1400);var toLength=__nested_webpack_require_150028__(7466);var toIndexedObject=__nested_webpack_require_150028__(5656);var createProperty=__nested_webpack_require_150028__(6135);var wellKnownSymbol=__nested_webpack_require_150028__(5112);var arrayMethodHasSpeciesSupport=__nested_webpack_require_150028__(1194);var arrayMethodUsesToLength=__nested_webpack_require_150028__(9207);var HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport('slice');var USES_TO_LENGTH=arrayMethodUsesToLength('slice',{ACCESSORS:true,0:0,1:2});var SPECIES=wellKnownSymbol('species');var nativeSlice=[].slice;var max=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({target:'Array',proto:true,forced:!HAS_SPECIES_SUPPORT||!USES_TO_LENGTH},{slice:function slice(start,end){var O=toIndexedObject(this);var length=toLength(O.length);var k=toAbsoluteIndex(start,length);var fin=toAbsoluteIndex(end===undefined?length:end,length);// inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
var Constructor,result,n;if(isArray(O)){Constructor=O.constructor;// cross-realm fallback
if(typeof Constructor=='function'&&(Constructor===Array||isArray(Constructor.prototype))){Constructor=undefined;}else if(isObject(Constructor)){Constructor=Constructor[SPECIES];if(Constructor===null)Constructor=undefined;}if(Constructor===Array||Constructor===undefined){return nativeSlice.call(O,k,fin);}}result=new(Constructor===undefined?Array:Constructor)(max(fin-k,0));for(n=0;k<fin;k++,n++)if(k in O)createProperty(result,n,O[k]);result.length=n;return result;}});/***/},/***/5212:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_152169__)=>{"use strict";var $=__nested_webpack_require_152169__(2109);var $some=__nested_webpack_require_152169__(2092).some;var arrayMethodIsStrict=__nested_webpack_require_152169__(9341);var arrayMethodUsesToLength=__nested_webpack_require_152169__(9207);var STRICT_METHOD=arrayMethodIsStrict('some');var USES_TO_LENGTH=arrayMethodUsesToLength('some');// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({target:'Array',proto:true,forced:!STRICT_METHOD||!USES_TO_LENGTH},{some:function some(callbackfn/* , thisArg */){return $some(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});/***/},/***/8309:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_152901__)=>{var DESCRIPTORS=__nested_webpack_require_152901__(9781);var defineProperty=__nested_webpack_require_152901__(3070).f;var FunctionPrototype=Function.prototype;var FunctionPrototypeToString=FunctionPrototype.toString;var nameRE=/^\s*function ([^ (]*)/;var NAME='name';// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if(DESCRIPTORS&&!(NAME in FunctionPrototype)){defineProperty(FunctionPrototype,NAME,{configurable:true,get:function(){try{return FunctionPrototypeToString.call(this).match(nameRE)[1];}catch(error){return'';}}});}/***/},/***/9653:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_153654__)=>{"use strict";var DESCRIPTORS=__nested_webpack_require_153654__(9781);var global=__nested_webpack_require_153654__(7854);var isForced=__nested_webpack_require_153654__(4705);var redefine=__nested_webpack_require_153654__(1320);var has=__nested_webpack_require_153654__(6656);var classof=__nested_webpack_require_153654__(4326);var inheritIfRequired=__nested_webpack_require_153654__(9587);var toPrimitive=__nested_webpack_require_153654__(7593);var fails=__nested_webpack_require_153654__(7293);var create=__nested_webpack_require_153654__(30);var getOwnPropertyNames=__nested_webpack_require_153654__(8006).f;var getOwnPropertyDescriptor=__nested_webpack_require_153654__(1236).f;var defineProperty=__nested_webpack_require_153654__(3070).f;var trim=__nested_webpack_require_153654__(3111).trim;var NUMBER='Number';var NativeNumber=global[NUMBER];var NumberPrototype=NativeNumber.prototype;// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF=classof(create(NumberPrototype))==NUMBER;// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber=function(argument){var it=toPrimitive(argument,false);var first,third,radix,maxCode,digits,length,index,code;if(typeof it=='string'&&it.length>2){it=trim(it);first=it.charCodeAt(0);if(first===43||first===45){third=it.charCodeAt(2);if(third===88||third===120)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(first===48){switch(it.charCodeAt(1)){case 66:case 98:radix=2;maxCode=49;break;// fast equal of /^0b[01]+$/i
case 79:case 111:radix=8;maxCode=55;break;// fast equal of /^0o[0-7]+$/i
default:return+it;}digits=it.slice(2);length=digits.length;for(index=0;index<length;index++){code=digits.charCodeAt(index);// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if(code<48||code>maxCode)return NaN;}return parseInt(digits,radix);}}return+it;};// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if(isForced(NUMBER,!NativeNumber(' 0o1')||!NativeNumber('0b1')||NativeNumber('+0x1'))){var NumberWrapper=function Number(value){var it=arguments.length<1?0:value;var dummy=this;return dummy instanceof NumberWrapper// check on 1..constructor(foo) case
&&(BROKEN_CLASSOF?fails(function(){NumberPrototype.valueOf.call(dummy);}):classof(dummy)!=NUMBER)?inheritIfRequired(new NativeNumber(toNumber(it)),dummy,NumberWrapper):toNumber(it);};for(var keys=DESCRIPTORS?getOwnPropertyNames(NativeNumber):(// ES3:
'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'+// ES2015 (in case, if modules with ES2015 Number statics required before):
'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'+'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,'+// ESNext
'fromString,range').split(','),j=0,key;keys.length>j;j++){if(has(NativeNumber,key=keys[j])&&!has(NumberWrapper,key)){defineProperty(NumberWrapper,key,getOwnPropertyDescriptor(NativeNumber,key));}}NumberWrapper.prototype=NumberPrototype;NumberPrototype.constructor=NumberWrapper;redefine(global,NUMBER,NumberWrapper);}/***/},/***/9494:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_157143__)=>{var $=__nested_webpack_require_157143__(2109);var parseInt=__nested_webpack_require_157143__(3009);// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
$({target:'Number',stat:true,forced:Number.parseInt!=parseInt},{parseInt:parseInt});/***/},/***/489:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_157507__)=>{var $=__nested_webpack_require_157507__(2109);var fails=__nested_webpack_require_157507__(7293);var toObject=__nested_webpack_require_157507__(7908);var nativeGetPrototypeOf=__nested_webpack_require_157507__(9518);var CORRECT_PROTOTYPE_GETTER=__nested_webpack_require_157507__(8544);var FAILS_ON_PRIMITIVES=fails(function(){nativeGetPrototypeOf(1);});// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({target:'Object',stat:true,forced:FAILS_ON_PRIMITIVES,sham:!CORRECT_PROTOTYPE_GETTER},{getPrototypeOf:function getPrototypeOf(it){return nativeGetPrototypeOf(toObject(it));}});/***/},/***/7941:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_158215__)=>{var $=__nested_webpack_require_158215__(2109);var toObject=__nested_webpack_require_158215__(7908);var nativeKeys=__nested_webpack_require_158215__(1956);var fails=__nested_webpack_require_158215__(7293);var FAILS_ON_PRIMITIVES=fails(function(){nativeKeys(1);});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({target:'Object',stat:true,forced:FAILS_ON_PRIMITIVES},{keys:function keys(it){return nativeKeys(toObject(it));}});/***/},/***/4603:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_158761__)=>{var DESCRIPTORS=__nested_webpack_require_158761__(9781);var global=__nested_webpack_require_158761__(7854);var isForced=__nested_webpack_require_158761__(4705);var inheritIfRequired=__nested_webpack_require_158761__(9587);var defineProperty=__nested_webpack_require_158761__(3070).f;var getOwnPropertyNames=__nested_webpack_require_158761__(8006).f;var isRegExp=__nested_webpack_require_158761__(7850);var getFlags=__nested_webpack_require_158761__(7066);var stickyHelpers=__nested_webpack_require_158761__(2999);var redefine=__nested_webpack_require_158761__(1320);var fails=__nested_webpack_require_158761__(7293);var setInternalState=__nested_webpack_require_158761__(9909).set;var setSpecies=__nested_webpack_require_158761__(6340);var wellKnownSymbol=__nested_webpack_require_158761__(5112);var MATCH=wellKnownSymbol('match');var NativeRegExp=global.RegExp;var RegExpPrototype=NativeRegExp.prototype;var re1=/a/g;var re2=/a/g;// "new" should create a new object, old webkit bug
var CORRECT_NEW=new NativeRegExp(re1)!==re1;var UNSUPPORTED_Y=stickyHelpers.UNSUPPORTED_Y;var FORCED=DESCRIPTORS&&isForced('RegExp',!CORRECT_NEW||UNSUPPORTED_Y||fails(function(){re2[MATCH]=false;// RegExp constructor can alter flags and IsRegExp works correct with @@match
return NativeRegExp(re1)!=re1||NativeRegExp(re2)==re2||NativeRegExp(re1,'i')!='/a/i';}));// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(FORCED){var RegExpWrapper=function RegExp(pattern,flags){var thisIsRegExp=this instanceof RegExpWrapper;var patternIsRegExp=isRegExp(pattern);var flagsAreUndefined=flags===undefined;var sticky;if(!thisIsRegExp&&patternIsRegExp&&pattern.constructor===RegExpWrapper&&flagsAreUndefined){return pattern;}if(CORRECT_NEW){if(patternIsRegExp&&!flagsAreUndefined)pattern=pattern.source;}else if(pattern instanceof RegExpWrapper){if(flagsAreUndefined)flags=getFlags.call(pattern);pattern=pattern.source;}if(UNSUPPORTED_Y){sticky=!!flags&&flags.indexOf('y')>-1;if(sticky)flags=flags.replace(/y/g,'');}var result=inheritIfRequired(CORRECT_NEW?new NativeRegExp(pattern,flags):NativeRegExp(pattern,flags),thisIsRegExp?this:RegExpPrototype,RegExpWrapper);if(UNSUPPORTED_Y&&sticky)setInternalState(result,{sticky:sticky});return result;};var proxy=function(key){key in RegExpWrapper||defineProperty(RegExpWrapper,key,{configurable:true,get:function(){return NativeRegExp[key];},set:function(it){NativeRegExp[key]=it;}});};var keys=getOwnPropertyNames(NativeRegExp);var index=0;while(keys.length>index)proxy(keys[index++]);RegExpPrototype.constructor=RegExpWrapper;RegExpWrapper.prototype=RegExpPrototype;redefine(global,'RegExp',RegExpWrapper);}// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');/***/},/***/4916:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_161827__)=>{"use strict";var $=__nested_webpack_require_161827__(2109);var exec=__nested_webpack_require_161827__(2261);// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({target:'RegExp',proto:true,forced:/./.exec!==exec},{exec:exec});/***/},/***/9714:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_162198__)=>{"use strict";var redefine=__nested_webpack_require_162198__(1320);var anObject=__nested_webpack_require_162198__(9670);var fails=__nested_webpack_require_162198__(7293);var flags=__nested_webpack_require_162198__(7066);var TO_STRING='toString';var RegExpPrototype=RegExp.prototype;var nativeToString=RegExpPrototype[TO_STRING];var NOT_GENERIC=fails(function(){return nativeToString.call({source:'a',flags:'b'})!='/a/b';});// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME=nativeToString.name!=TO_STRING;// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if(NOT_GENERIC||INCORRECT_NAME){redefine(RegExp.prototype,TO_STRING,function toString(){var R=anObject(this);var p=String(R.source);var rf=R.flags;var f=String(rf===undefined&&R instanceof RegExp&&!('flags'in RegExpPrototype)?flags.call(R):rf);return'/'+p+'/'+f;},{unsafe:true});}/***/},/***/2023:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_163258__)=>{"use strict";var $=__nested_webpack_require_163258__(2109);var notARegExp=__nested_webpack_require_163258__(3929);var requireObjectCoercible=__nested_webpack_require_163258__(4488);var correctIsRegExpLogic=__nested_webpack_require_163258__(4964);// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({target:'String',proto:true,forced:!correctIsRegExpLogic('includes')},{includes:function includes(searchString/* , position = 0 */){return!!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString),arguments.length>1?arguments[1]:undefined);}});/***/},/***/4723:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_163969__)=>{"use strict";var fixRegExpWellKnownSymbolLogic=__nested_webpack_require_163969__(7007);var anObject=__nested_webpack_require_163969__(9670);var toLength=__nested_webpack_require_163969__(7466);var requireObjectCoercible=__nested_webpack_require_163969__(4488);var advanceStringIndex=__nested_webpack_require_163969__(1530);var regExpExec=__nested_webpack_require_163969__(7651);// @@match logic
fixRegExpWellKnownSymbolLogic('match',1,function(MATCH,nativeMatch,maybeCallNative){return[// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function match(regexp){var O=requireObjectCoercible(this);var matcher=regexp==undefined?undefined:regexp[MATCH];return matcher!==undefined?matcher.call(regexp,O):new RegExp(regexp)[MATCH](String(O));},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(regexp){var res=maybeCallNative(nativeMatch,regexp,this);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);if(!rx.global)return regExpExec(rx,S);var fullUnicode=rx.unicode;rx.lastIndex=0;var A=[];var n=0;var result;while((result=regExpExec(rx,S))!==null){var matchStr=String(result[0]);A[n]=matchStr;if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength(rx.lastIndex),fullUnicode);n++;}return n===0?null:A;}];});/***/},/***/5306:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_165606__)=>{"use strict";var fixRegExpWellKnownSymbolLogic=__nested_webpack_require_165606__(7007);var anObject=__nested_webpack_require_165606__(9670);var toLength=__nested_webpack_require_165606__(7466);var toInteger=__nested_webpack_require_165606__(9958);var requireObjectCoercible=__nested_webpack_require_165606__(4488);var advanceStringIndex=__nested_webpack_require_165606__(1530);var getSubstitution=__nested_webpack_require_165606__(647);var regExpExec=__nested_webpack_require_165606__(7651);var max=Math.max;var min=Math.min;var maybeToString=function(it){return it===undefined?it:String(it);};// @@replace logic
fixRegExpWellKnownSymbolLogic('replace',2,function(REPLACE,nativeReplace,maybeCallNative,reason){var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE=reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;var REPLACE_KEEPS_$0=reason.REPLACE_KEEPS_$0;var UNSAFE_SUBSTITUTE=REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE?'$':'$0';return[// `String.prototype.replace` method
// https://tc39.es/ecma262/#sec-string.prototype.replace
function replace(searchValue,replaceValue){var O=requireObjectCoercible(this);var replacer=searchValue==undefined?undefined:searchValue[REPLACE];return replacer!==undefined?replacer.call(searchValue,O,replaceValue):nativeReplace.call(String(O),searchValue,replaceValue);},// `RegExp.prototype[@@replace]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
function(regexp,replaceValue){if(!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE&&REPLACE_KEEPS_$0||typeof replaceValue==='string'&&replaceValue.indexOf(UNSAFE_SUBSTITUTE)===-1){var res=maybeCallNative(nativeReplace,regexp,this,replaceValue);if(res.done)return res.value;}var rx=anObject(regexp);var S=String(this);var functionalReplace=typeof replaceValue==='function';if(!functionalReplace)replaceValue=String(replaceValue);var global=rx.global;if(global){var fullUnicode=rx.unicode;rx.lastIndex=0;}var results=[];while(true){var result=regExpExec(rx,S);if(result===null)break;results.push(result);if(!global)break;var matchStr=String(result[0]);if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength(rx.lastIndex),fullUnicode);}var accumulatedResult='';var nextSourcePosition=0;for(var i=0;i<results.length;i++){result=results[i];var matched=String(result[0]);var position=max(min(toInteger(result.index),S.length),0);var captures=[];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var j=1;j<result.length;j++)captures.push(maybeToString(result[j]));var namedCaptures=result.groups;if(functionalReplace){var replacerArgs=[matched].concat(captures,position,S);if(namedCaptures!==undefined)replacerArgs.push(namedCaptures);var replacement=String(replaceValue.apply(undefined,replacerArgs));}else{replacement=getSubstitution(matched,S,position,captures,namedCaptures,replaceValue);}if(position>=nextSourcePosition){accumulatedResult+=S.slice(nextSourcePosition,position)+replacement;nextSourcePosition=position+matched.length;}}return accumulatedResult+S.slice(nextSourcePosition);}];});/***/},/***/3123:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_169636__)=>{"use strict";var fixRegExpWellKnownSymbolLogic=__nested_webpack_require_169636__(7007);var isRegExp=__nested_webpack_require_169636__(7850);var anObject=__nested_webpack_require_169636__(9670);var requireObjectCoercible=__nested_webpack_require_169636__(4488);var speciesConstructor=__nested_webpack_require_169636__(6707);var advanceStringIndex=__nested_webpack_require_169636__(1530);var toLength=__nested_webpack_require_169636__(7466);var callRegExpExec=__nested_webpack_require_169636__(7651);var regexpExec=__nested_webpack_require_169636__(2261);var fails=__nested_webpack_require_169636__(7293);var arrayPush=[].push;var min=Math.min;var MAX_UINT32=0xFFFFFFFF;// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y=!fails(function(){return!RegExp(MAX_UINT32,'y');});// @@split logic
fixRegExpWellKnownSymbolLogic('split',2,function(SPLIT,nativeSplit,maybeCallNative){var internalSplit;if('abbc'.split(/(b)*/)[1]=='c'||'test'.split(/(?:)/,-1).length!=4||'ab'.split(/(?:ab)*/).length!=2||'.'.split(/(.?)(.?)/).length!=4||'.'.split(/()()/).length>1||''.split(/.?/).length){// based on es5-shim implementation, need to rework it
internalSplit=function(separator,limit){var string=String(requireObjectCoercible(this));var lim=limit===undefined?MAX_UINT32:limit>>>0;if(lim===0)return[];if(separator===undefined)return[string];// If `separator` is not a regex, use native split
if(!isRegExp(separator)){return nativeSplit.call(string,separator,lim);}var output=[];var flags=(separator.ignoreCase?'i':'')+(separator.multiline?'m':'')+(separator.unicode?'u':'')+(separator.sticky?'y':'');var lastLastIndex=0;// Make `global` and avoid `lastIndex` issues by working with a copy
var separatorCopy=new RegExp(separator.source,flags+'g');var match,lastIndex,lastLength;while(match=regexpExec.call(separatorCopy,string)){lastIndex=separatorCopy.lastIndex;if(lastIndex>lastLastIndex){output.push(string.slice(lastLastIndex,match.index));if(match.length>1&&match.index<string.length)arrayPush.apply(output,match.slice(1));lastLength=match[0].length;lastLastIndex=lastIndex;if(output.length>=lim)break;}if(separatorCopy.lastIndex===match.index)separatorCopy.lastIndex++;// Avoid an infinite loop
}if(lastLastIndex===string.length){if(lastLength||!separatorCopy.test(''))output.push('');}else output.push(string.slice(lastLastIndex));return output.length>lim?output.slice(0,lim):output;};// Chakra, V8
}else if('0'.split(undefined,0).length){internalSplit=function(separator,limit){return separator===undefined&&limit===0?[]:nativeSplit.call(this,separator,limit);};}else internalSplit=nativeSplit;return[// `String.prototype.split` method
// https://tc39.es/ecma262/#sec-string.prototype.split
function split(separator,limit){var O=requireObjectCoercible(this);var splitter=separator==undefined?undefined:separator[SPLIT];return splitter!==undefined?splitter.call(separator,O,limit):internalSplit.call(String(O),separator,limit);},// `RegExp.prototype[@@split]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(regexp,limit){var res=maybeCallNative(internalSplit,regexp,this,limit,internalSplit!==nativeSplit);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);var C=speciesConstructor(rx,RegExp);var unicodeMatching=rx.unicode;var flags=(rx.ignoreCase?'i':'')+(rx.multiline?'m':'')+(rx.unicode?'u':'')+(SUPPORTS_Y?'y':'g');// ^(? + rx + ) is needed, in combination with some S slicing, to
// simulate the 'y' flag.
var splitter=new C(SUPPORTS_Y?rx:'^(?:'+rx.source+')',flags);var lim=limit===undefined?MAX_UINT32:limit>>>0;if(lim===0)return[];if(S.length===0)return callRegExpExec(splitter,S)===null?[S]:[];var p=0;var q=0;var A=[];while(q<S.length){splitter.lastIndex=SUPPORTS_Y?q:0;var z=callRegExpExec(splitter,SUPPORTS_Y?S:S.slice(q));var e;if(z===null||(e=min(toLength(splitter.lastIndex+(SUPPORTS_Y?0:q)),S.length))===p){q=advanceStringIndex(S,q,unicodeMatching);}else{A.push(S.slice(p,q));if(A.length===lim)return A;for(var i=1;i<=z.length-1;i++){A.push(z[i]);if(A.length===lim)return A;}q=p=e;}}A.push(S.slice(p));return A;}];},!SUPPORTS_Y);/***/},/***/6755:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_175047__)=>{"use strict";var $=__nested_webpack_require_175047__(2109);var getOwnPropertyDescriptor=__nested_webpack_require_175047__(1236).f;var toLength=__nested_webpack_require_175047__(7466);var notARegExp=__nested_webpack_require_175047__(3929);var requireObjectCoercible=__nested_webpack_require_175047__(4488);var correctIsRegExpLogic=__nested_webpack_require_175047__(4964);var IS_PURE=__nested_webpack_require_175047__(1913);var nativeStartsWith=''.startsWith;var min=Math.min;var CORRECT_IS_REGEXP_LOGIC=correctIsRegExpLogic('startsWith');// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG=!IS_PURE&&!CORRECT_IS_REGEXP_LOGIC&&!!function(){var descriptor=getOwnPropertyDescriptor(String.prototype,'startsWith');return descriptor&&!descriptor.writable;}();// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({target:'String',proto:true,forced:!MDN_POLYFILL_BUG&&!CORRECT_IS_REGEXP_LOGIC},{startsWith:function startsWith(searchString/* , position = 0 */){var that=String(requireObjectCoercible(this));notARegExp(searchString);var index=toLength(min(arguments.length>1?arguments[1]:undefined,that.length));var search=String(searchString);return nativeStartsWith?nativeStartsWith.call(that,search,index):that.slice(index,index+search.length)===search;}});/***/},/***/3210:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_176514__)=>{"use strict";var $=__nested_webpack_require_176514__(2109);var $trim=__nested_webpack_require_176514__(3111).trim;var forcedStringTrimMethod=__nested_webpack_require_176514__(6091);// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({target:'String',proto:true,forced:forcedStringTrimMethod('trim')},{trim:function trim(){return $trim(this);}});/***/},/***/4747:/***/(__unused_webpack_module,__unused_webpack_exports,__nested_webpack_require_177001__)=>{var global=__nested_webpack_require_177001__(7854);var DOMIterables=__nested_webpack_require_177001__(8324);var forEach=__nested_webpack_require_177001__(8533);var createNonEnumerableProperty=__nested_webpack_require_177001__(8880);for(var COLLECTION_NAME in DOMIterables){var Collection=global[COLLECTION_NAME];var CollectionPrototype=Collection&&Collection.prototype;// some Chrome versions have non-configurable methods on DOMTokenList
if(CollectionPrototype&&CollectionPrototype.forEach!==forEach)try{createNonEnumerableProperty(CollectionPrototype,'forEach',forEach);}catch(error){CollectionPrototype.forEach=forEach;}}/***/},/***/8552:/***/(module,__unused_webpack_exports,__nested_webpack_require_177727__)=>{var getNative=__nested_webpack_require_177727__(852),root=__nested_webpack_require_177727__(5639);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;/***/},/***/1989:/***/(module,__unused_webpack_exports,__nested_webpack_require_178039__)=>{var hashClear=__nested_webpack_require_178039__(1789),hashDelete=__nested_webpack_require_178039__(401),hashGet=__nested_webpack_require_178039__(7667),hashHas=__nested_webpack_require_178039__(1327),hashSet=__nested_webpack_require_178039__(1866);/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;/***/},/***/8407:/***/(module,__unused_webpack_exports,__nested_webpack_require_178894__)=>{var listCacheClear=__nested_webpack_require_178894__(7040),listCacheDelete=__nested_webpack_require_178894__(4125),listCacheGet=__nested_webpack_require_178894__(2117),listCacheHas=__nested_webpack_require_178894__(7518),listCacheSet=__nested_webpack_require_178894__(3399);/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;/***/},/***/7071:/***/(module,__unused_webpack_exports,__nested_webpack_require_179847__)=>{var getNative=__nested_webpack_require_179847__(852),root=__nested_webpack_require_179847__(5639);/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;/***/},/***/3369:/***/(module,__unused_webpack_exports,__nested_webpack_require_180144__)=>{var mapCacheClear=__nested_webpack_require_180144__(4785),mapCacheDelete=__nested_webpack_require_180144__(1285),mapCacheGet=__nested_webpack_require_180144__(6000),mapCacheHas=__nested_webpack_require_180144__(9916),mapCacheSet=__nested_webpack_require_180144__(5265);/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;/***/},/***/3818:/***/(module,__unused_webpack_exports,__nested_webpack_require_181102__)=>{var getNative=__nested_webpack_require_181102__(852),root=__nested_webpack_require_181102__(5639);/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;/***/},/***/8525:/***/(module,__unused_webpack_exports,__nested_webpack_require_181411__)=>{var getNative=__nested_webpack_require_181411__(852),root=__nested_webpack_require_181411__(5639);/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;/***/},/***/8668:/***/(module,__unused_webpack_exports,__nested_webpack_require_181708__)=>{var MapCache=__nested_webpack_require_181708__(3369),setCacheAdd=__nested_webpack_require_181708__(619),setCacheHas=__nested_webpack_require_181708__(2385);/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;/***/},/***/6384:/***/(module,__unused_webpack_exports,__nested_webpack_require_182436__)=>{var ListCache=__nested_webpack_require_182436__(8407),stackClear=__nested_webpack_require_182436__(7465),stackDelete=__nested_webpack_require_182436__(3779),stackGet=__nested_webpack_require_182436__(7599),stackHas=__nested_webpack_require_182436__(4758),stackSet=__nested_webpack_require_182436__(4309);/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;/***/},/***/2705:/***/(module,__unused_webpack_exports,__nested_webpack_require_183276__)=>{var root=__nested_webpack_require_183276__(5639);/** Built-in value references. */var Symbol=root.Symbol;module.exports=Symbol;/***/},/***/1149:/***/(module,__unused_webpack_exports,__nested_webpack_require_183495__)=>{var root=__nested_webpack_require_183495__(5639);/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;/***/},/***/577:/***/(module,__unused_webpack_exports,__nested_webpack_require_183725__)=>{var getNative=__nested_webpack_require_183725__(852),root=__nested_webpack_require_183725__(5639);/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;/***/},/***/6874:/***/module=>{/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}module.exports=apply;/***/},/***/7412:/***/module=>{/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}module.exports=arrayEach;/***/},/***/4963:/***/module=>{/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;/***/},/***/7443:/***/(module,__unused_webpack_exports,__nested_webpack_require_186058__)=>{var baseIndexOf=__nested_webpack_require_186058__(2118);/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}module.exports=arrayIncludes;/***/},/***/1196:/***/module=>{/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}module.exports=arrayIncludesWith;/***/},/***/4636:/***/(module,__unused_webpack_exports,__nested_webpack_require_187340__)=>{var baseTimes=__nested_webpack_require_187340__(2545),isArguments=__nested_webpack_require_187340__(5694),isArray=__nested_webpack_require_187340__(1469),isBuffer=__nested_webpack_require_187340__(4144),isIndex=__nested_webpack_require_187340__(5776),isTypedArray=__nested_webpack_require_187340__(6719);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}module.exports=arrayLikeKeys;/***/},/***/9932:/***/module=>{/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;/***/},/***/2488:/***/module=>{/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;/***/},/***/2908:/***/module=>{/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;/***/},/***/4865:/***/(module,__unused_webpack_exports,__nested_webpack_require_190956__)=>{var baseAssignValue=__nested_webpack_require_190956__(9465),eq=__nested_webpack_require_190956__(7813);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}module.exports=assignValue;/***/},/***/8470:/***/(module,__unused_webpack_exports,__nested_webpack_require_191955__)=>{var eq=__nested_webpack_require_191955__(7813);/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;/***/},/***/4037:/***/(module,__unused_webpack_exports,__nested_webpack_require_192546__)=>{var copyObject=__nested_webpack_require_192546__(8363),keys=__nested_webpack_require_192546__(3674);/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}module.exports=baseAssign;/***/},/***/3886:/***/(module,__unused_webpack_exports,__nested_webpack_require_193119__)=>{var copyObject=__nested_webpack_require_193119__(8363),keysIn=__nested_webpack_require_193119__(1704);/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}module.exports=baseAssignIn;/***/},/***/9465:/***/(module,__unused_webpack_exports,__nested_webpack_require_193702__)=>{var defineProperty=__nested_webpack_require_193702__(8777);/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}module.exports=baseAssignValue;/***/},/***/5990:/***/(module,__unused_webpack_exports,__nested_webpack_require_194418__)=>{var Stack=__nested_webpack_require_194418__(6384),arrayEach=__nested_webpack_require_194418__(7412),assignValue=__nested_webpack_require_194418__(4865),baseAssign=__nested_webpack_require_194418__(4037),baseAssignIn=__nested_webpack_require_194418__(3886),cloneBuffer=__nested_webpack_require_194418__(4626),copyArray=__nested_webpack_require_194418__(278),copySymbols=__nested_webpack_require_194418__(8805),copySymbolsIn=__nested_webpack_require_194418__(1911),getAllKeys=__nested_webpack_require_194418__(8234),getAllKeysIn=__nested_webpack_require_194418__(6904),getTag=__nested_webpack_require_194418__(4160),initCloneArray=__nested_webpack_require_194418__(3824),initCloneByTag=__nested_webpack_require_194418__(9148),initCloneObject=__nested_webpack_require_194418__(8517),isArray=__nested_webpack_require_194418__(1469),isBuffer=__nested_webpack_require_194418__(4144),isMap=__nested_webpack_require_194418__(6688),isObject=__nested_webpack_require_194418__(3218),isSet=__nested_webpack_require_194418__(2928),keys=__nested_webpack_require_194418__(3674),keysIn=__nested_webpack_require_194418__(1704);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}module.exports=baseClone;/***/},/***/3118:/***/(module,__unused_webpack_exports,__nested_webpack_require_200164__)=>{var isObject=__nested_webpack_require_200164__(3218);/** Built-in value references. */var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();module.exports=baseCreate;/***/},/***/731:/***/(module,__unused_webpack_exports,__nested_webpack_require_200947__)=>{var SetCache=__nested_webpack_require_200947__(8668),arrayIncludes=__nested_webpack_require_200947__(7443),arrayIncludesWith=__nested_webpack_require_200947__(1196),arrayMap=__nested_webpack_require_200947__(9932),baseUnary=__nested_webpack_require_200947__(1717),cacheHas=__nested_webpack_require_200947__(4757);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}module.exports=baseDifference;/***/},/***/1848:/***/module=>{/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}module.exports=baseFindIndex;/***/},/***/1078:/***/(module,__unused_webpack_exports,__nested_webpack_require_203774__)=>{var arrayPush=__nested_webpack_require_203774__(2488),isFlattenable=__nested_webpack_require_203774__(7285);/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}module.exports=baseFlatten;/***/},/***/8483:/***/(module,__unused_webpack_exports,__nested_webpack_require_205069__)=>{var createBaseFor=__nested_webpack_require_205069__(5063);/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var baseFor=createBaseFor();module.exports=baseFor;/***/},/***/7816:/***/(module,__unused_webpack_exports,__nested_webpack_require_205754__)=>{var baseFor=__nested_webpack_require_205754__(8483),keys=__nested_webpack_require_205754__(3674);/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}module.exports=baseForOwn;/***/},/***/7786:/***/(module,__unused_webpack_exports,__nested_webpack_require_206316__)=>{var castPath=__nested_webpack_require_206316__(1811),toKey=__nested_webpack_require_206316__(327);/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;/***/},/***/8866:/***/(module,__unused_webpack_exports,__nested_webpack_require_207034__)=>{var arrayPush=__nested_webpack_require_207034__(2488),isArray=__nested_webpack_require_207034__(1469);/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;/***/},/***/4239:/***/(module,__unused_webpack_exports,__nested_webpack_require_207874__)=>{var Symbol=__nested_webpack_require_207874__(2705),getRawTag=__nested_webpack_require_207874__(9607),objectToString=__nested_webpack_require_207874__(2333);/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=Symbol?Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;/***/},/***/13:/***/module=>{/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;/***/},/***/2118:/***/(module,__unused_webpack_exports,__nested_webpack_require_209183__)=>{var baseFindIndex=__nested_webpack_require_209183__(1848),baseIsNaN=__nested_webpack_require_209183__(2722),strictIndexOf=__nested_webpack_require_209183__(2351);/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}module.exports=baseIndexOf;/***/},/***/8975:/***/(module,__unused_webpack_exports,__nested_webpack_require_209934__)=>{var baseForOwn=__nested_webpack_require_209934__(7816);/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}module.exports=baseInverter;/***/},/***/9454:/***/(module,__unused_webpack_exports,__nested_webpack_require_210765__)=>{var baseGetTag=__nested_webpack_require_210765__(4239),isObjectLike=__nested_webpack_require_210765__(7005);/** `Object#toString` result references. */var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}module.exports=baseIsArguments;/***/},/***/939:/***/(module,__unused_webpack_exports,__nested_webpack_require_211347__)=>{var baseIsEqualDeep=__nested_webpack_require_211347__(2492),isObjectLike=__nested_webpack_require_211347__(7005);/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}module.exports=baseIsEqual;/***/},/***/2492:/***/(module,__unused_webpack_exports,__nested_webpack_require_212456__)=>{var Stack=__nested_webpack_require_212456__(6384),equalArrays=__nested_webpack_require_212456__(7114),equalByTag=__nested_webpack_require_212456__(8351),equalObjects=__nested_webpack_require_212456__(6096),getTag=__nested_webpack_require_212456__(4160),isArray=__nested_webpack_require_212456__(1469),isBuffer=__nested_webpack_require_212456__(4144),isTypedArray=__nested_webpack_require_212456__(6719);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}module.exports=baseIsEqualDeep;/***/},/***/5588:/***/(module,__unused_webpack_exports,__nested_webpack_require_215580__)=>{var getTag=__nested_webpack_require_215580__(4160),isObjectLike=__nested_webpack_require_215580__(7005);/** `Object#toString` result references. */var mapTag='[object Map]';/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}module.exports=baseIsMap;/***/},/***/2958:/***/(module,__unused_webpack_exports,__nested_webpack_require_216157__)=>{var Stack=__nested_webpack_require_216157__(6384),baseIsEqual=__nested_webpack_require_216157__(939);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;/***/},/***/2722:/***/module=>{/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}module.exports=baseIsNaN;/***/},/***/8458:/***/(module,__unused_webpack_exports,__nested_webpack_require_218364__)=>{var isFunction=__nested_webpack_require_218364__(3560),isMasked=__nested_webpack_require_218364__(5346),isObject=__nested_webpack_require_218364__(3218),toSource=__nested_webpack_require_218364__(346);/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;/***/},/***/9221:/***/(module,__unused_webpack_exports,__nested_webpack_require_219886__)=>{var getTag=__nested_webpack_require_219886__(4160),isObjectLike=__nested_webpack_require_219886__(7005);/** `Object#toString` result references. */var setTag='[object Set]';/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}module.exports=baseIsSet;/***/},/***/8749:/***/(module,__unused_webpack_exports,__nested_webpack_require_220463__)=>{var baseGetTag=__nested_webpack_require_220463__(4239),isLength=__nested_webpack_require_220463__(1780),isObjectLike=__nested_webpack_require_220463__(7005);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}module.exports=baseIsTypedArray;/***/},/***/7206:/***/(module,__unused_webpack_exports,__nested_webpack_require_222784__)=>{var baseMatches=__nested_webpack_require_222784__(1573),baseMatchesProperty=__nested_webpack_require_222784__(6432),identity=__nested_webpack_require_222784__(6557),isArray=__nested_webpack_require_222784__(1469),property=__nested_webpack_require_222784__(9601);/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;/***/},/***/280:/***/(module,__unused_webpack_exports,__nested_webpack_require_223777__)=>{var isPrototype=__nested_webpack_require_223777__(5726),nativeKeys=__nested_webpack_require_223777__(6916);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}module.exports=baseKeys;/***/},/***/313:/***/(module,__unused_webpack_exports,__nested_webpack_require_224647__)=>{var isObject=__nested_webpack_require_224647__(3218),isPrototype=__nested_webpack_require_224647__(5726),nativeKeysIn=__nested_webpack_require_224647__(3498);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}module.exports=baseKeysIn;/***/},/***/1573:/***/(module,__unused_webpack_exports,__nested_webpack_require_225614__)=>{var baseIsMatch=__nested_webpack_require_225614__(2958),getMatchData=__nested_webpack_require_225614__(1499),matchesStrictComparable=__nested_webpack_require_225614__(2634);/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;/***/},/***/6432:/***/(module,__unused_webpack_exports,__nested_webpack_require_226405__)=>{var baseIsEqual=__nested_webpack_require_226405__(939),get=__nested_webpack_require_226405__(7361),hasIn=__nested_webpack_require_226405__(9095),isKey=__nested_webpack_require_226405__(5403),isStrictComparable=__nested_webpack_require_226405__(9162),matchesStrictComparable=__nested_webpack_require_226405__(2634),toKey=__nested_webpack_require_226405__(327);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}module.exports=baseMatchesProperty;/***/},/***/371:/***/module=>{/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;/***/},/***/9152:/***/(module,__unused_webpack_exports,__nested_webpack_require_228041__)=>{var baseGet=__nested_webpack_require_228041__(7786);/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;/***/},/***/5976:/***/(module,__unused_webpack_exports,__nested_webpack_require_228530__)=>{var identity=__nested_webpack_require_228530__(6557),overRest=__nested_webpack_require_228530__(5357),setToString=__nested_webpack_require_228530__(61);/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}module.exports=baseRest;/***/},/***/6560:/***/(module,__unused_webpack_exports,__nested_webpack_require_229188__)=>{var constant=__nested_webpack_require_229188__(5703),defineProperty=__nested_webpack_require_229188__(8777),identity=__nested_webpack_require_229188__(6557);/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};module.exports=baseSetToString;/***/},/***/2545:/***/module=>{/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;/***/},/***/531:/***/(module,__unused_webpack_exports,__nested_webpack_require_230478__)=>{var Symbol=__nested_webpack_require_230478__(2705),arrayMap=__nested_webpack_require_230478__(9932),isArray=__nested_webpack_require_230478__(1469),isSymbol=__nested_webpack_require_230478__(3448);/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;/***/},/***/1717:/***/module=>{/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;/***/},/***/5652:/***/(module,__unused_webpack_exports,__nested_webpack_require_232122__)=>{var SetCache=__nested_webpack_require_232122__(8668),arrayIncludes=__nested_webpack_require_232122__(7443),arrayIncludesWith=__nested_webpack_require_232122__(1196),cacheHas=__nested_webpack_require_232122__(4757),createSet=__nested_webpack_require_232122__(3593),setToArray=__nested_webpack_require_232122__(1814);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}module.exports=baseUniq;/***/},/***/4757:/***/module=>{/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;/***/},/***/1811:/***/(module,__unused_webpack_exports,__nested_webpack_require_234510__)=>{var isArray=__nested_webpack_require_234510__(1469),isKey=__nested_webpack_require_234510__(5403),stringToPath=__nested_webpack_require_234510__(5514),toString=__nested_webpack_require_234510__(9833);/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}module.exports=castPath;/***/},/***/4318:/***/(module,__unused_webpack_exports,__nested_webpack_require_235187__)=>{var Uint8Array=__nested_webpack_require_235187__(1149);/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}module.exports=cloneArrayBuffer;/***/},/***/4626:/***/(module,exports,__nested_webpack_require_235714__)=>{/* module decorator */module=__nested_webpack_require_235714__.nmd(module);var root=__nested_webpack_require_235714__(5639);/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}module.exports=cloneBuffer;/***/},/***/7157:/***/(module,__unused_webpack_exports,__nested_webpack_require_236910__)=>{var cloneArrayBuffer=__nested_webpack_require_236910__(4318);/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}module.exports=cloneDataView;/***/},/***/3147:/***/module=>{/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}module.exports=cloneRegExp;/***/},/***/419:/***/(module,__unused_webpack_exports,__nested_webpack_require_237991__)=>{var Symbol=__nested_webpack_require_237991__(2705);/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}module.exports=cloneSymbol;/***/},/***/7133:/***/(module,__unused_webpack_exports,__nested_webpack_require_238614__)=>{var cloneArrayBuffer=__nested_webpack_require_238614__(4318);/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}module.exports=cloneTypedArray;/***/},/***/278:/***/module=>{/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}module.exports=copyArray;/***/},/***/8363:/***/(module,__unused_webpack_exports,__nested_webpack_require_239730__)=>{var assignValue=__nested_webpack_require_239730__(4865),baseAssignValue=__nested_webpack_require_239730__(9465);/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}module.exports=copyObject;/***/},/***/8805:/***/(module,__unused_webpack_exports,__nested_webpack_require_240864__)=>{var copyObject=__nested_webpack_require_240864__(8363),getSymbols=__nested_webpack_require_240864__(9551);/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}module.exports=copySymbols;/***/},/***/1911:/***/(module,__unused_webpack_exports,__nested_webpack_require_241406__)=>{var copyObject=__nested_webpack_require_241406__(8363),getSymbolsIn=__nested_webpack_require_241406__(1442);/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}module.exports=copySymbolsIn;/***/},/***/4429:/***/(module,__unused_webpack_exports,__nested_webpack_require_241970__)=>{var root=__nested_webpack_require_241970__(5639);/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;/***/},/***/5063:/***/module=>{/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}module.exports=createBaseFor;/***/},/***/7740:/***/(module,__unused_webpack_exports,__nested_webpack_require_242923__)=>{var baseIteratee=__nested_webpack_require_242923__(7206),isArrayLike=__nested_webpack_require_242923__(8612),keys=__nested_webpack_require_242923__(3674);/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=baseIteratee(predicate,3);collection=keys(collection);predicate=function(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}module.exports=createFind;/***/},/***/7779:/***/(module,__unused_webpack_exports,__nested_webpack_require_243878__)=>{var baseInverter=__nested_webpack_require_243878__(8975);/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}module.exports=createInverter;/***/},/***/3593:/***/(module,__unused_webpack_exports,__nested_webpack_require_244468__)=>{var Set=__nested_webpack_require_244468__(8525),noop=__nested_webpack_require_244468__(308),setToArray=__nested_webpack_require_244468__(1814);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};module.exports=createSet;/***/},/***/8777:/***/(module,__unused_webpack_exports,__nested_webpack_require_245079__)=>{var getNative=__nested_webpack_require_245079__(852);var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();module.exports=defineProperty;/***/},/***/7114:/***/(module,__unused_webpack_exports,__nested_webpack_require_245407__)=>{var SetCache=__nested_webpack_require_245407__(8668),arraySome=__nested_webpack_require_245407__(2908),cacheHas=__nested_webpack_require_245407__(4757);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}module.exports=equalArrays;/***/},/***/8351:/***/(module,__unused_webpack_exports,__nested_webpack_require_248171__)=>{var Symbol=__nested_webpack_require_248171__(2705),Uint8Array=__nested_webpack_require_248171__(1149),eq=__nested_webpack_require_248171__(7813),equalArrays=__nested_webpack_require_248171__(7114),mapToArray=__nested_webpack_require_248171__(8776),setToArray=__nested_webpack_require_248171__(1814);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;/***/},/***/6096:/***/(module,__unused_webpack_exports,__nested_webpack_require_252029__)=>{var getAllKeys=__nested_webpack_require_252029__(8234);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}module.exports=equalObjects;/***/},/***/1957:/***/(module,__unused_webpack_exports,__nested_webpack_require_255095__)=>{/** Detect free variable `global` from Node.js. */var freeGlobal=typeof __nested_webpack_require_255095__.g=='object'&&__nested_webpack_require_255095__.g&&__nested_webpack_require_255095__.g.Object===Object&&__nested_webpack_require_255095__.g;module.exports=freeGlobal;/***/},/***/8234:/***/(module,__unused_webpack_exports,__nested_webpack_require_255422__)=>{var baseGetAllKeys=__nested_webpack_require_255422__(8866),getSymbols=__nested_webpack_require_255422__(9551),keys=__nested_webpack_require_255422__(3674);/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;/***/},/***/6904:/***/(module,__unused_webpack_exports,__nested_webpack_require_255977__)=>{var baseGetAllKeys=__nested_webpack_require_255977__(8866),getSymbolsIn=__nested_webpack_require_255977__(1442),keysIn=__nested_webpack_require_255977__(1704);/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}module.exports=getAllKeysIn;/***/},/***/5050:/***/(module,__unused_webpack_exports,__nested_webpack_require_256561__)=>{var isKeyable=__nested_webpack_require_256561__(7019);/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;/***/},/***/1499:/***/(module,__unused_webpack_exports,__nested_webpack_require_257057__)=>{var isStrictComparable=__nested_webpack_require_257057__(9162),keys=__nested_webpack_require_257057__(3674);/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;/***/},/***/852:/***/(module,__unused_webpack_exports,__nested_webpack_require_257724__)=>{var baseIsNative=__nested_webpack_require_257724__(8458),getValue=__nested_webpack_require_257724__(7801);/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;/***/},/***/5924:/***/(module,__unused_webpack_exports,__nested_webpack_require_258303__)=>{var overArg=__nested_webpack_require_258303__(5569);/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;/***/},/***/9607:/***/(module,__unused_webpack_exports,__nested_webpack_require_258564__)=>{var Symbol=__nested_webpack_require_258564__(2705);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=Symbol?Symbol.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;/***/},/***/9551:/***/(module,__unused_webpack_exports,__nested_webpack_require_259802__)=>{var arrayFilter=__nested_webpack_require_259802__(4963),stubArray=__nested_webpack_require_259802__(479);/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};module.exports=getSymbols;/***/},/***/1442:/***/(module,__unused_webpack_exports,__nested_webpack_require_260784__)=>{var arrayPush=__nested_webpack_require_260784__(2488),getPrototype=__nested_webpack_require_260784__(5924),getSymbols=__nested_webpack_require_260784__(9551),stubArray=__nested_webpack_require_260784__(479);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};module.exports=getSymbolsIn;/***/},/***/4160:/***/(module,__unused_webpack_exports,__nested_webpack_require_261636__)=>{var DataView=__nested_webpack_require_261636__(8552),Map=__nested_webpack_require_261636__(7071),Promise=__nested_webpack_require_261636__(3818),Set=__nested_webpack_require_261636__(8525),WeakMap=__nested_webpack_require_261636__(577),baseGetTag=__nested_webpack_require_261636__(4239),toSource=__nested_webpack_require_261636__(346);/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;/***/},/***/7801:/***/module=>{/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;/***/},/***/222:/***/(module,__unused_webpack_exports,__nested_webpack_require_263968__)=>{var castPath=__nested_webpack_require_263968__(1811),isArguments=__nested_webpack_require_263968__(5694),isArray=__nested_webpack_require_263968__(1469),isIndex=__nested_webpack_require_263968__(5776),isLength=__nested_webpack_require_263968__(1780),toKey=__nested_webpack_require_263968__(327);/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}module.exports=hasPath;/***/},/***/1789:/***/(module,__unused_webpack_exports,__nested_webpack_require_265169__)=>{var nativeCreate=__nested_webpack_require_265169__(4536);/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}module.exports=hashClear;/***/},/***/401:/***/module=>{/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}module.exports=hashDelete;/***/},/***/7667:/***/(module,__unused_webpack_exports,__nested_webpack_require_266034__)=>{var nativeCreate=__nested_webpack_require_266034__(4536);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;/***/},/***/1327:/***/(module,__unused_webpack_exports,__nested_webpack_require_266899__)=>{var nativeCreate=__nested_webpack_require_266899__(4536);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;/***/},/***/1866:/***/(module,__unused_webpack_exports,__nested_webpack_require_267618__)=>{var nativeCreate=__nested_webpack_require_267618__(4536);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;/***/},/***/3824:/***/module=>{/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}module.exports=initCloneArray;/***/},/***/9148:/***/(module,__unused_webpack_exports,__nested_webpack_require_269048__)=>{var cloneArrayBuffer=__nested_webpack_require_269048__(4318),cloneDataView=__nested_webpack_require_269048__(7157),cloneRegExp=__nested_webpack_require_269048__(3147),cloneSymbol=__nested_webpack_require_269048__(419),cloneTypedArray=__nested_webpack_require_269048__(7133);/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}module.exports=initCloneByTag;/***/},/***/8517:/***/(module,__unused_webpack_exports,__nested_webpack_require_271391__)=>{var baseCreate=__nested_webpack_require_271391__(3118),getPrototype=__nested_webpack_require_271391__(5924),isPrototype=__nested_webpack_require_271391__(5726);/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}module.exports=initCloneObject;/***/},/***/7285:/***/(module,__unused_webpack_exports,__nested_webpack_require_271971__)=>{var Symbol=__nested_webpack_require_271971__(2705),isArguments=__nested_webpack_require_271971__(5694),isArray=__nested_webpack_require_271971__(1469);/** Built-in value references. */var spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined;/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}module.exports=isFlattenable;/***/},/***/5776:/***/module=>{/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;/***/},/***/5403:/***/(module,__unused_webpack_exports,__nested_webpack_require_273490__)=>{var isArray=__nested_webpack_require_273490__(1469),isSymbol=__nested_webpack_require_273490__(3448);/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;/***/},/***/7019:/***/module=>{/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;/***/},/***/5346:/***/(module,__unused_webpack_exports,__nested_webpack_require_274950__)=>{var coreJsData=__nested_webpack_require_274950__(4429);/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;/***/},/***/5726:/***/module=>{/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;/***/},/***/9162:/***/(module,__unused_webpack_exports,__nested_webpack_require_276136__)=>{var isObject=__nested_webpack_require_276136__(3218);/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;/***/},/***/7040:/***/module=>{/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}module.exports=listCacheClear;/***/},/***/4125:/***/(module,__unused_webpack_exports,__nested_webpack_require_276913__)=>{var assocIndexOf=__nested_webpack_require_276913__(8470);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}module.exports=listCacheDelete;/***/},/***/2117:/***/(module,__unused_webpack_exports,__nested_webpack_require_277781__)=>{var assocIndexOf=__nested_webpack_require_277781__(8470);/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;/***/},/***/7518:/***/(module,__unused_webpack_exports,__nested_webpack_require_278294__)=>{var assocIndexOf=__nested_webpack_require_278294__(8470);/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;/***/},/***/3399:/***/(module,__unused_webpack_exports,__nested_webpack_require_278790__)=>{var assocIndexOf=__nested_webpack_require_278790__(8470);/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;/***/},/***/4785:/***/(module,__unused_webpack_exports,__nested_webpack_require_279436__)=>{var Hash=__nested_webpack_require_279436__(1989),ListCache=__nested_webpack_require_279436__(8407),Map=__nested_webpack_require_279436__(7071);/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;/***/},/***/1285:/***/(module,__unused_webpack_exports,__nested_webpack_require_279940__)=>{var getMapData=__nested_webpack_require_279940__(5050);/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}module.exports=mapCacheDelete;/***/},/***/6000:/***/(module,__unused_webpack_exports,__nested_webpack_require_280485__)=>{var getMapData=__nested_webpack_require_280485__(5050);/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;/***/},/***/9916:/***/(module,__unused_webpack_exports,__nested_webpack_require_280910__)=>{var getMapData=__nested_webpack_require_280910__(5050);/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;/***/},/***/5265:/***/(module,__unused_webpack_exports,__nested_webpack_require_281387__)=>{var getMapData=__nested_webpack_require_281387__(5050);/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}module.exports=mapCacheSet;/***/},/***/8776:/***/module=>{/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;/***/},/***/2634:/***/module=>{/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;/***/},/***/4523:/***/(module,__unused_webpack_exports,__nested_webpack_require_283002__)=>{var memoize=__nested_webpack_require_283002__(8306);/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}module.exports=memoizeCapped;/***/},/***/4536:/***/(module,__unused_webpack_exports,__nested_webpack_require_283734__)=>{var getNative=__nested_webpack_require_283734__(852);/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;/***/},/***/6916:/***/(module,__unused_webpack_exports,__nested_webpack_require_284016__)=>{var overArg=__nested_webpack_require_284016__(5569);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;/***/},/***/3498:/***/module=>{/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}module.exports=nativeKeysIn;/***/},/***/1167:/***/(module,exports,__nested_webpack_require_284838__)=>{/* module decorator */module=__nested_webpack_require_284838__.nmd(module);var freeGlobal=__nested_webpack_require_284838__(1957);/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;/***/},/***/2333:/***/module=>{/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;/***/},/***/5569:/***/module=>{/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;/***/},/***/5357:/***/(module,__unused_webpack_exports,__nested_webpack_require_287008__)=>{var apply=__nested_webpack_require_287008__(6874);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}module.exports=overRest;/***/},/***/5639:/***/(module,__unused_webpack_exports,__nested_webpack_require_288204__)=>{var freeGlobal=__nested_webpack_require_288204__(1957);/** Detect free variable `self`. */var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;/***/},/***/619:/***/module=>{/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;/***/},/***/2385:/***/module=>{/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;/***/},/***/1814:/***/module=>{/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;/***/},/***/61:/***/(module,__unused_webpack_exports,__nested_webpack_require_289822__)=>{var baseSetToString=__nested_webpack_require_289822__(6560),shortOut=__nested_webpack_require_289822__(1275);/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var setToString=shortOut(baseSetToString);module.exports=setToString;/***/},/***/1275:/***/module=>{/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeNow=Date.now;/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}module.exports=shortOut;/***/},/***/7465:/***/(module,__unused_webpack_exports,__nested_webpack_require_291295__)=>{var ListCache=__nested_webpack_require_291295__(8407);/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}module.exports=stackClear;/***/},/***/3779:/***/module=>{/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}module.exports=stackDelete;/***/},/***/7599:/***/module=>{/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;/***/},/***/4758:/***/module=>{/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;/***/},/***/4309:/***/(module,__unused_webpack_exports,__nested_webpack_require_292785__)=>{var ListCache=__nested_webpack_require_292785__(8407),Map=__nested_webpack_require_292785__(7071),MapCache=__nested_webpack_require_292785__(3369);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}module.exports=stackSet;/***/},/***/2351:/***/module=>{/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}module.exports=strictIndexOf;/***/},/***/5514:/***/(module,__unused_webpack_exports,__nested_webpack_require_294392__)=>{var memoizeCapped=__nested_webpack_require_294392__(4523);/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;/***/},/***/327:/***/(module,__unused_webpack_exports,__nested_webpack_require_295323__)=>{var isSymbol=__nested_webpack_require_295323__(3448);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;/***/},/***/346:/***/module=>{/** Used for built-in method references. */var funcProto=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;/***/},/***/6678:/***/(module,__unused_webpack_exports,__nested_webpack_require_296546__)=>{var baseClone=__nested_webpack_require_296546__(5990);/** Used to compose bitmasks for cloning. */var CLONE_SYMBOLS_FLAG=4;/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}module.exports=clone;/***/},/***/361:/***/(module,__unused_webpack_exports,__nested_webpack_require_297706__)=>{var baseClone=__nested_webpack_require_297706__(5990);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_SYMBOLS_FLAG=4;/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}module.exports=cloneDeep;/***/},/***/5703:/***/module=>{/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}module.exports=constant;/***/},/***/1966:/***/(module,__unused_webpack_exports,__nested_webpack_require_299056__)=>{var baseDifference=__nested_webpack_require_299056__(731),baseFlatten=__nested_webpack_require_299056__(1078),baseRest=__nested_webpack_require_299056__(5976),isArrayLikeObject=__nested_webpack_require_299056__(9246);/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});module.exports=difference;/***/},/***/7813:/***/module=>{/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;/***/},/***/3311:/***/(module,__unused_webpack_exports,__nested_webpack_require_301053__)=>{var createFind=__nested_webpack_require_301053__(7740),findIndex=__nested_webpack_require_301053__(998);/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */var find=createFind(findIndex);module.exports=find;/***/},/***/998:/***/(module,__unused_webpack_exports,__nested_webpack_require_302453__)=>{var baseFindIndex=__nested_webpack_require_302453__(1848),baseIteratee=__nested_webpack_require_302453__(7206),toInteger=__nested_webpack_require_302453__(554);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,baseIteratee(predicate,3),index);}module.exports=findIndex;/***/},/***/7361:/***/(module,__unused_webpack_exports,__nested_webpack_require_304200__)=>{var baseGet=__nested_webpack_require_304200__(7786);/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;/***/},/***/9095:/***/(module,__unused_webpack_exports,__nested_webpack_require_305182__)=>{var baseHasIn=__nested_webpack_require_305182__(13),hasPath=__nested_webpack_require_305182__(222);/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;/***/},/***/6557:/***/module=>{/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}module.exports=identity;/***/},/***/3137:/***/(module,__unused_webpack_exports,__nested_webpack_require_306449__)=>{var constant=__nested_webpack_require_306449__(5703),createInverter=__nested_webpack_require_306449__(7779),identity=__nested_webpack_require_306449__(6557);/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */var invert=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}result[value]=key;},constant(identity));module.exports=invert;/***/},/***/5694:/***/(module,__unused_webpack_exports,__nested_webpack_require_307676__)=>{var baseIsArguments=__nested_webpack_require_307676__(9454),isObjectLike=__nested_webpack_require_307676__(7005);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};module.exports=isArguments;/***/},/***/1469:/***/module=>{/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;module.exports=isArray;/***/},/***/8612:/***/(module,__unused_webpack_exports,__nested_webpack_require_309327__)=>{var isFunction=__nested_webpack_require_309327__(3560),isLength=__nested_webpack_require_309327__(1780);/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}module.exports=isArrayLike;/***/},/***/9246:/***/(module,__unused_webpack_exports,__nested_webpack_require_310257__)=>{var isArrayLike=__nested_webpack_require_310257__(8612),isObjectLike=__nested_webpack_require_310257__(7005);/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}module.exports=isArrayLikeObject;/***/},/***/4144:/***/(module,exports,__nested_webpack_require_311077__)=>{/* module decorator */module=__nested_webpack_require_311077__.nmd(module);var root=__nested_webpack_require_311077__(5639),stubFalse=__nested_webpack_require_311077__(5062);/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;/***/},/***/8446:/***/(module,__unused_webpack_exports,__nested_webpack_require_312334__)=>{var baseIsEqual=__nested_webpack_require_312334__(939);/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function isEqual(value,other){return baseIsEqual(value,other);}module.exports=isEqual;/***/},/***/3560:/***/(module,__unused_webpack_exports,__nested_webpack_require_313413__)=>{var baseGetTag=__nested_webpack_require_313413__(4239),isObject=__nested_webpack_require_313413__(3218);/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}module.exports=isFunction;/***/},/***/1780:/***/module=>{/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;/***/},/***/6688:/***/(module,__unused_webpack_exports,__nested_webpack_require_315354__)=>{var baseIsMap=__nested_webpack_require_315354__(5588),baseUnary=__nested_webpack_require_315354__(1717),nodeUtil=__nested_webpack_require_315354__(1167);/* Node.js helper references. */var nodeIsMap=nodeUtil&&nodeUtil.isMap;/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;module.exports=isMap;/***/},/***/3218:/***/module=>{/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}module.exports=isObject;/***/},/***/7005:/***/module=>{/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&typeof value=='object';}module.exports=isObjectLike;/***/},/***/2928:/***/(module,__unused_webpack_exports,__nested_webpack_require_317509__)=>{var baseIsSet=__nested_webpack_require_317509__(9221),baseUnary=__nested_webpack_require_317509__(1717),nodeUtil=__nested_webpack_require_317509__(1167);/* Node.js helper references. */var nodeIsSet=nodeUtil&&nodeUtil.isSet;/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;module.exports=isSet;/***/},/***/3448:/***/(module,__unused_webpack_exports,__nested_webpack_require_318223__)=>{var baseGetTag=__nested_webpack_require_318223__(4239),isObjectLike=__nested_webpack_require_318223__(7005);/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}module.exports=isSymbol;/***/},/***/6719:/***/(module,__unused_webpack_exports,__nested_webpack_require_319000__)=>{var baseIsTypedArray=__nested_webpack_require_319000__(8749),baseUnary=__nested_webpack_require_319000__(1717),nodeUtil=__nested_webpack_require_319000__(1167);/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;/***/},/***/3674:/***/(module,__unused_webpack_exports,__nested_webpack_require_319789__)=>{var arrayLikeKeys=__nested_webpack_require_319789__(4636),baseKeys=__nested_webpack_require_319789__(280),isArrayLike=__nested_webpack_require_319789__(8612);/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}module.exports=keys;/***/},/***/1704:/***/(module,__unused_webpack_exports,__nested_webpack_require_320768__)=>{var arrayLikeKeys=__nested_webpack_require_320768__(4636),baseKeysIn=__nested_webpack_require_320768__(313),isArrayLike=__nested_webpack_require_320768__(8612);/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}module.exports=keysIn;/***/},/***/8306:/***/(module,__unused_webpack_exports,__nested_webpack_require_321639__)=>{var MapCache=__nested_webpack_require_321639__(3369);/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;module.exports=memoize;/***/},/***/308:/***/module=>{/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */function noop(){// No operation performed.
}module.exports=noop;/***/},/***/9601:/***/(module,__unused_webpack_exports,__nested_webpack_require_324256__)=>{var baseProperty=__nested_webpack_require_324256__(371),basePropertyDeep=__nested_webpack_require_324256__(9152),isKey=__nested_webpack_require_324256__(5403),toKey=__nested_webpack_require_324256__(327);/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;/***/},/***/479:/***/module=>{/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}module.exports=stubArray;/***/},/***/5062:/***/module=>{/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=stubFalse;/***/},/***/8601:/***/(module,__unused_webpack_exports,__nested_webpack_require_325910__)=>{var toNumber=__nested_webpack_require_325910__(4841);/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}module.exports=toFinite;/***/},/***/554:/***/(module,__unused_webpack_exports,__nested_webpack_require_326875__)=>{var toFinite=__nested_webpack_require_326875__(8601);/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}module.exports=toInteger;/***/},/***/4841:/***/(module,__unused_webpack_exports,__nested_webpack_require_327733__)=>{var isObject=__nested_webpack_require_327733__(3218),isSymbol=__nested_webpack_require_327733__(3448);/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/***/9833:/***/(module,__unused_webpack_exports,__nested_webpack_require_329407__)=>{var baseToString=__nested_webpack_require_329407__(531);/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;/***/},/***/4908:/***/(module,__unused_webpack_exports,__nested_webpack_require_330079__)=>{var baseUniq=__nested_webpack_require_330079__(5652);/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */function uniq(array){return array&&array.length?baseUniq(array):[];}module.exports=uniq;/***/},/***/2569:/***/(module,__unused_webpack_exports,__nested_webpack_require_330864__)=>{var baseDifference=__nested_webpack_require_330864__(731),baseRest=__nested_webpack_require_330864__(5976),isArrayLikeObject=__nested_webpack_require_330864__(9246);/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});module.exports=without;/***/}/******/};/************************************************************************/ /******/ // The module cache
/******/var __webpack_module_cache__={};/******/ /******/ // The require function
/******/function __nested_webpack_require_331974__(moduleId){/******/ // Check if module is in cache
/******/if(__webpack_module_cache__[moduleId]){/******/return __webpack_module_cache__[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=__webpack_module_cache__[moduleId]={/******/id:moduleId,/******/loaded:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/__webpack_modules__[moduleId](module,module.exports,__nested_webpack_require_331974__);/******/ /******/ // Flag the module as loaded
/******/module.loaded=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/(()=>{/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__nested_webpack_require_331974__.n=module=>{/******/var getter=module&&module.__esModule?/******/()=>module['default']:/******/()=>module;/******/__nested_webpack_require_331974__.d(getter,{a:getter});/******/return getter;/******/};/******/})();/******/ /******/ /* webpack/runtime/define property getters */ /******/(()=>{/******/ // define getter functions for harmony exports
/******/__nested_webpack_require_331974__.d=(exports,definition)=>{/******/for(var key in definition){/******/if(__nested_webpack_require_331974__.o(definition,key)&&!__nested_webpack_require_331974__.o(exports,key)){/******/Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});/******/}/******/}/******/};/******/})();/******/ /******/ /* webpack/runtime/global */ /******/(()=>{/******/__nested_webpack_require_331974__.g=function(){/******/if(typeof globalThis==='object')return globalThis;/******/try{/******/return this||new Function('return this')();/******/}catch(e){/******/if(typeof window==='object')return window;/******/}/******/}();/******/})();/******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/(()=>{/******/__nested_webpack_require_331974__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop);/******/})();/******/ /******/ /* webpack/runtime/make namespace object */ /******/(()=>{/******/ // define __esModule on exports
/******/__nested_webpack_require_331974__.r=exports=>{/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/})();/******/ /******/ /* webpack/runtime/node module decorator */ /******/(()=>{/******/__nested_webpack_require_331974__.nmd=module=>{/******/module.paths=[];/******/if(!module.children)module.children=[];/******/return module;/******/};/******/})();/******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/return __nested_webpack_require_331974__(8424);/******/})());});//# sourceMappingURL=chord-symbol.js.map
/***/},/***/7856:/***/function(module){/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */(function(global,factory){ true?module.exports=factory():0;})(this,function(){'use strict';function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var hasOwnProperty=Object.hasOwnProperty,setPrototypeOf=Object.setPrototypeOf,isFrozen=Object.isFrozen,getPrototypeOf=Object.getPrototypeOf,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;var freeze=Object.freeze,seal=Object.seal,create=Object.create;// eslint-disable-line import/no-mutable-exports
var _ref=typeof Reflect!=='undefined'&&Reflect,apply=_ref.apply,construct=_ref.construct;if(!apply){apply=function apply(fun,thisValue,args){return fun.apply(thisValue,args);};}if(!freeze){freeze=function freeze(x){return x;};}if(!seal){seal=function seal(x){return x;};}if(!construct){construct=function construct(Func,args){return new(Function.prototype.bind.apply(Func,[null].concat(_toConsumableArray(args))))();};}var arrayForEach=unapply(Array.prototype.forEach);var arrayPop=unapply(Array.prototype.pop);var arrayPush=unapply(Array.prototype.push);var stringToLowerCase=unapply(String.prototype.toLowerCase);var stringMatch=unapply(String.prototype.match);var stringReplace=unapply(String.prototype.replace);var stringIndexOf=unapply(String.prototype.indexOf);var stringTrim=unapply(String.prototype.trim);var regExpTest=unapply(RegExp.prototype.test);var typeErrorCreate=unconstruct(TypeError);function unapply(func){return function(thisArg){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}return apply(func,thisArg,args);};}function unconstruct(func){return function(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return construct(func,args);};}/* Add properties to a lookup table */function addToSet(set,array){if(setPrototypeOf){// Make 'in' and truthy checks like Boolean(set.constructor)
// independent of any properties defined on Object.prototype.
// Prevent prototype setters from intercepting set as a this value.
setPrototypeOf(set,null);}var l=array.length;while(l--){var element=array[l];if(typeof element==='string'){var lcElement=stringToLowerCase(element);if(lcElement!==element){// Config presets (e.g. tags.js, attrs.js) are immutable.
if(!isFrozen(array)){array[l]=lcElement;}element=lcElement;}}set[element]=true;}return set;}/* Shallow clone an object */function clone(object){var newObject=create(null);var property=void 0;for(property in object){if(apply(hasOwnProperty,object,[property])){newObject[property]=object[property];}}return newObject;}/* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */function lookupGetter(object,prop){while(object!==null){var desc=getOwnPropertyDescriptor(object,prop);if(desc){if(desc.get){return unapply(desc.get);}if(typeof desc.value==='function'){return unapply(desc.value);}}object=getPrototypeOf(object);}function fallbackValue(element){console.warn('fallback value for',element);return null;}return fallbackValue;}var html=freeze(['a','abbr','acronym','address','area','article','aside','audio','b','bdi','bdo','big','blink','blockquote','body','br','button','canvas','caption','center','cite','code','col','colgroup','content','data','datalist','dd','decorator','del','details','dfn','dialog','dir','div','dl','dt','element','em','fieldset','figcaption','figure','font','footer','form','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i','img','input','ins','kbd','label','legend','li','main','map','mark','marquee','menu','menuitem','meter','nav','nobr','ol','optgroup','option','output','p','picture','pre','progress','q','rp','rt','ruby','s','samp','section','select','shadow','small','source','spacer','span','strike','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','tr','track','tt','u','ul','var','video','wbr']);// SVG
var svg=freeze(['svg','a','altglyph','altglyphdef','altglyphitem','animatecolor','animatemotion','animatetransform','circle','clippath','defs','desc','ellipse','filter','font','g','glyph','glyphref','hkern','image','line','lineargradient','marker','mask','metadata','mpath','path','pattern','polygon','polyline','radialgradient','rect','stop','style','switch','symbol','text','textpath','title','tref','tspan','view','vkern']);var svgFilters=freeze(['feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence']);// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
var svgDisallowed=freeze(['animate','color-profile','cursor','discard','fedropshadow','feimage','font-face','font-face-format','font-face-name','font-face-src','font-face-uri','foreignobject','hatch','hatchpath','mesh','meshgradient','meshpatch','meshrow','missing-glyph','script','set','solidcolor','unknown','use']);var mathMl=freeze(['math','menclose','merror','mfenced','mfrac','mglyph','mi','mlabeledtr','mmultiscripts','mn','mo','mover','mpadded','mphantom','mroot','mrow','ms','mspace','msqrt','mstyle','msub','msup','msubsup','mtable','mtd','mtext','mtr','munder','munderover']);// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
var mathMlDisallowed=freeze(['maction','maligngroup','malignmark','mlongdiv','mscarries','mscarry','msgroup','mstack','msline','msrow','semantics','annotation','annotation-xml','mprescripts','none']);var text=freeze(['#text']);var html$1=freeze(['accept','action','align','alt','autocapitalize','autocomplete','autopictureinpicture','autoplay','background','bgcolor','border','capture','cellpadding','cellspacing','checked','cite','class','clear','color','cols','colspan','controls','controlslist','coords','crossorigin','datetime','decoding','default','dir','disabled','disablepictureinpicture','disableremoteplayback','download','draggable','enctype','enterkeyhint','face','for','headers','height','hidden','high','href','hreflang','id','inputmode','integrity','ismap','kind','label','lang','list','loading','loop','low','max','maxlength','media','method','min','minlength','multiple','muted','name','noshade','novalidate','nowrap','open','optimum','pattern','placeholder','playsinline','poster','preload','pubdate','radiogroup','readonly','rel','required','rev','reversed','role','rows','rowspan','spellcheck','scope','selected','shape','size','sizes','span','srclang','start','src','srcset','step','style','summary','tabindex','title','translate','type','usemap','valign','value','width','xmlns','slot']);var svg$1=freeze(['accent-height','accumulate','additive','alignment-baseline','ascent','attributename','attributetype','azimuth','basefrequency','baseline-shift','begin','bias','by','class','clip','clippathunits','clip-path','clip-rule','color','color-interpolation','color-interpolation-filters','color-profile','color-rendering','cx','cy','d','dx','dy','diffuseconstant','direction','display','divisor','dur','edgemode','elevation','end','fill','fill-opacity','fill-rule','filter','filterunits','flood-color','flood-opacity','font-family','font-size','font-size-adjust','font-stretch','font-style','font-variant','font-weight','fx','fy','g1','g2','glyph-name','glyphref','gradientunits','gradienttransform','height','href','id','image-rendering','in','in2','k','k1','k2','k3','k4','kerning','keypoints','keysplines','keytimes','lang','lengthadjust','letter-spacing','kernelmatrix','kernelunitlength','lighting-color','local','marker-end','marker-mid','marker-start','markerheight','markerunits','markerwidth','maskcontentunits','maskunits','max','mask','media','method','mode','min','name','numoctaves','offset','operator','opacity','order','orient','orientation','origin','overflow','paint-order','path','pathlength','patterncontentunits','patterntransform','patternunits','points','preservealpha','preserveaspectratio','primitiveunits','r','rx','ry','radius','refx','refy','repeatcount','repeatdur','restart','result','rotate','scale','seed','shape-rendering','specularconstant','specularexponent','spreadmethod','startoffset','stddeviation','stitchtiles','stop-color','stop-opacity','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke','stroke-width','style','surfacescale','systemlanguage','tabindex','targetx','targety','transform','text-anchor','text-decoration','text-rendering','textlength','type','u1','u2','unicode','values','viewbox','visibility','version','vert-adv-y','vert-origin-x','vert-origin-y','width','word-spacing','wrap','writing-mode','xchannelselector','ychannelselector','x','x1','x2','xmlns','y','y1','y2','z','zoomandpan']);var mathMl$1=freeze(['accent','accentunder','align','bevelled','close','columnsalign','columnlines','columnspan','denomalign','depth','dir','display','displaystyle','encoding','fence','frame','height','href','id','largeop','length','linethickness','lspace','lquote','mathbackground','mathcolor','mathsize','mathvariant','maxsize','minsize','movablelimits','notation','numalign','open','rowalign','rowlines','rowspacing','rowspan','rspace','rquote','scriptlevel','scriptminsize','scriptsizemultiplier','selection','separator','separators','stretchy','subscriptshift','supscriptshift','symmetric','voffset','width','xmlns']);var xml=freeze(['xlink:href','xml:id','xlink:title','xml:space','xmlns:xlink']);// eslint-disable-next-line unicorn/better-regex
var MUSTACHE_EXPR=seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm);// Specify template detection regex for SAFE_FOR_TEMPLATES mode
var ERB_EXPR=seal(/<%[\s\S]*|[\s\S]*%>/gm);var DATA_ATTR=seal(/^data-[\-\w.\u00B7-\uFFFF]/);// eslint-disable-line no-useless-escape
var ARIA_ATTR=seal(/^aria-[\-\w]+$/);// eslint-disable-line no-useless-escape
var IS_ALLOWED_URI=seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i// eslint-disable-line no-useless-escape
);var IS_SCRIPT_OR_DATA=seal(/^(?:\w+script|data):/i);var ATTR_WHITESPACE=seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g// eslint-disable-line no-control-regex
);var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _toConsumableArray$1(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var getGlobal=function getGlobal(){return typeof window==='undefined'?null:window;};/**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */var _createTrustedTypesPolicy=function _createTrustedTypesPolicy(trustedTypes,document){if((typeof trustedTypes==='undefined'?'undefined':_typeof(trustedTypes))!=='object'||typeof trustedTypes.createPolicy!=='function'){return null;}// Allow the callers to control the unique policy name
// by adding a data-tt-policy-suffix to the script element with the DOMPurify.
// Policy creation with duplicate names throws in Trusted Types.
var suffix=null;var ATTR_NAME='data-tt-policy-suffix';if(document.currentScript&&document.currentScript.hasAttribute(ATTR_NAME)){suffix=document.currentScript.getAttribute(ATTR_NAME);}var policyName='dompurify'+(suffix?'#'+suffix:'');try{return trustedTypes.createPolicy(policyName,{createHTML:function createHTML(html$$1){return html$$1;}});}catch(_){// Policy creation failed (most likely another DOMPurify script has
// already run). Skip creating the policy, as this will only cause errors
// if TT are enforced.
console.warn('TrustedTypes policy '+policyName+' could not be created.');return null;}};function createDOMPurify(){var window=arguments.length>0&&arguments[0]!==undefined?arguments[0]:getGlobal();var DOMPurify=function DOMPurify(root){return createDOMPurify(root);};/**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */DOMPurify.version='2.3.3';/**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */DOMPurify.removed=[];if(!window||!window.document||window.document.nodeType!==9){// Not running in a browser, provide a factory function
// so that you can pass your own Window
DOMPurify.isSupported=false;return DOMPurify;}var originalDocument=window.document;var document=window.document;var DocumentFragment=window.DocumentFragment,HTMLTemplateElement=window.HTMLTemplateElement,Node=window.Node,Element=window.Element,NodeFilter=window.NodeFilter,_window$NamedNodeMap=window.NamedNodeMap,NamedNodeMap=_window$NamedNodeMap===undefined?window.NamedNodeMap||window.MozNamedAttrMap:_window$NamedNodeMap,Text=window.Text,Comment=window.Comment,DOMParser=window.DOMParser,trustedTypes=window.trustedTypes;var ElementPrototype=Element.prototype;var cloneNode=lookupGetter(ElementPrototype,'cloneNode');var getNextSibling=lookupGetter(ElementPrototype,'nextSibling');var getChildNodes=lookupGetter(ElementPrototype,'childNodes');var getParentNode=lookupGetter(ElementPrototype,'parentNode');// As per issue #47, the web-components registry is inherited by a
// new document created via createHTMLDocument. As per the spec
// (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
// a new empty registry is used when creating a template contents owner
// document, so we use that as our parent document to ensure nothing
// is inherited.
if(typeof HTMLTemplateElement==='function'){var template=document.createElement('template');if(template.content&&template.content.ownerDocument){document=template.content.ownerDocument;}}var trustedTypesPolicy=_createTrustedTypesPolicy(trustedTypes,originalDocument);var emptyHTML=trustedTypesPolicy&&RETURN_TRUSTED_TYPE?trustedTypesPolicy.createHTML(''):'';var _document=document,implementation=_document.implementation,createNodeIterator=_document.createNodeIterator,createDocumentFragment=_document.createDocumentFragment,getElementsByTagName=_document.getElementsByTagName;var importNode=originalDocument.importNode;var documentMode={};try{documentMode=clone(document).documentMode?document.documentMode:{};}catch(_){}var hooks={};/**
     * Expose whether this browser supports running the full DOMPurify.
     */DOMPurify.isSupported=typeof getParentNode==='function'&&implementation&&typeof implementation.createHTMLDocument!=='undefined'&&documentMode!==9;var MUSTACHE_EXPR$$1=MUSTACHE_EXPR,ERB_EXPR$$1=ERB_EXPR,DATA_ATTR$$1=DATA_ATTR,ARIA_ATTR$$1=ARIA_ATTR,IS_SCRIPT_OR_DATA$$1=IS_SCRIPT_OR_DATA,ATTR_WHITESPACE$$1=ATTR_WHITESPACE;var IS_ALLOWED_URI$$1=IS_ALLOWED_URI;/**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */ /* allowed element names */var ALLOWED_TAGS=null;var DEFAULT_ALLOWED_TAGS=addToSet({},[].concat(_toConsumableArray$1(html),_toConsumableArray$1(svg),_toConsumableArray$1(svgFilters),_toConsumableArray$1(mathMl),_toConsumableArray$1(text)));/* Allowed attribute names */var ALLOWED_ATTR=null;var DEFAULT_ALLOWED_ATTR=addToSet({},[].concat(_toConsumableArray$1(html$1),_toConsumableArray$1(svg$1),_toConsumableArray$1(mathMl$1),_toConsumableArray$1(xml)));/* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */var FORBID_TAGS=null;/* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */var FORBID_ATTR=null;/* Decide if ARIA attributes are okay */var ALLOW_ARIA_ATTR=true;/* Decide if custom data attributes are okay */var ALLOW_DATA_ATTR=true;/* Decide if unknown protocols are okay */var ALLOW_UNKNOWN_PROTOCOLS=false;/* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */var SAFE_FOR_TEMPLATES=false;/* Decide if document with <html>... should be returned */var WHOLE_DOCUMENT=false;/* Track whether config is already set on this instance of DOMPurify. */var SET_CONFIG=false;/* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */var FORCE_BODY=false;/* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */var RETURN_DOM=false;/* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */var RETURN_DOM_FRAGMENT=false;/* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
     * `Node` is imported into the current `Document`. If this flag is not enabled the
     * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
     * DOMPurify.
     *
     * This defaults to `true` starting DOMPurify 2.2.0. Note that setting it to `false`
     * might cause XSS from attacks hidden in closed shadowroots in case the browser
     * supports Declarative Shadow: DOM https://web.dev/declarative-shadow-dom/
     */var RETURN_DOM_IMPORT=true;/* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */var RETURN_TRUSTED_TYPE=false;/* Output should be free from DOM clobbering attacks? */var SANITIZE_DOM=true;/* Keep element content when removing element? */var KEEP_CONTENT=true;/* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */var IN_PLACE=false;/* Allow usage of profiles like html, svg and mathMl */var USE_PROFILES={};/* Tags to ignore content of when KEEP_CONTENT is true */var FORBID_CONTENTS=null;var DEFAULT_FORBID_CONTENTS=addToSet({},['annotation-xml','audio','colgroup','desc','foreignobject','head','iframe','math','mi','mn','mo','ms','mtext','noembed','noframes','noscript','plaintext','script','style','svg','template','thead','title','video','xmp']);/* Tags that are safe for data: URIs */var DATA_URI_TAGS=null;var DEFAULT_DATA_URI_TAGS=addToSet({},['audio','video','img','source','image','track']);/* Attributes safe for values like "javascript:" */var URI_SAFE_ATTRIBUTES=null;var DEFAULT_URI_SAFE_ATTRIBUTES=addToSet({},['alt','class','for','id','label','name','pattern','placeholder','role','summary','title','value','style','xmlns']);var MATHML_NAMESPACE='http://www.w3.org/1998/Math/MathML';var SVG_NAMESPACE='http://www.w3.org/2000/svg';var HTML_NAMESPACE='http://www.w3.org/1999/xhtml';/* Document namespace */var NAMESPACE=HTML_NAMESPACE;var IS_EMPTY_INPUT=false;/* Parsing of strict XHTML documents */var PARSER_MEDIA_TYPE=void 0;var SUPPORTED_PARSER_MEDIA_TYPES=['application/xhtml+xml','text/html'];var DEFAULT_PARSER_MEDIA_TYPE='text/html';var transformCaseFunc=void 0;/* Keep a reference to config to pass to hooks */var CONFIG=null;/* Ideally, do not touch anything below this line */ /* ______________________________________________ */var formElement=document.createElement('form');/**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */ // eslint-disable-next-line complexity
var _parseConfig=function _parseConfig(cfg){if(CONFIG&&CONFIG===cfg){return;}/* Shield configuration object from tampering */if(!cfg||(typeof cfg==='undefined'?'undefined':_typeof(cfg))!=='object'){cfg={};}/* Shield configuration object from prototype pollution */cfg=clone(cfg);/* Set configuration parameters */ALLOWED_TAGS='ALLOWED_TAGS'in cfg?addToSet({},cfg.ALLOWED_TAGS):DEFAULT_ALLOWED_TAGS;ALLOWED_ATTR='ALLOWED_ATTR'in cfg?addToSet({},cfg.ALLOWED_ATTR):DEFAULT_ALLOWED_ATTR;URI_SAFE_ATTRIBUTES='ADD_URI_SAFE_ATTR'in cfg?addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),cfg.ADD_URI_SAFE_ATTR):DEFAULT_URI_SAFE_ATTRIBUTES;DATA_URI_TAGS='ADD_DATA_URI_TAGS'in cfg?addToSet(clone(DEFAULT_DATA_URI_TAGS),cfg.ADD_DATA_URI_TAGS):DEFAULT_DATA_URI_TAGS;FORBID_CONTENTS='FORBID_CONTENTS'in cfg?addToSet({},cfg.FORBID_CONTENTS):DEFAULT_FORBID_CONTENTS;FORBID_TAGS='FORBID_TAGS'in cfg?addToSet({},cfg.FORBID_TAGS):{};FORBID_ATTR='FORBID_ATTR'in cfg?addToSet({},cfg.FORBID_ATTR):{};USE_PROFILES='USE_PROFILES'in cfg?cfg.USE_PROFILES:false;ALLOW_ARIA_ATTR=cfg.ALLOW_ARIA_ATTR!==false;// Default true
ALLOW_DATA_ATTR=cfg.ALLOW_DATA_ATTR!==false;// Default true
ALLOW_UNKNOWN_PROTOCOLS=cfg.ALLOW_UNKNOWN_PROTOCOLS||false;// Default false
SAFE_FOR_TEMPLATES=cfg.SAFE_FOR_TEMPLATES||false;// Default false
WHOLE_DOCUMENT=cfg.WHOLE_DOCUMENT||false;// Default false
RETURN_DOM=cfg.RETURN_DOM||false;// Default false
RETURN_DOM_FRAGMENT=cfg.RETURN_DOM_FRAGMENT||false;// Default false
RETURN_DOM_IMPORT=cfg.RETURN_DOM_IMPORT!==false;// Default true
RETURN_TRUSTED_TYPE=cfg.RETURN_TRUSTED_TYPE||false;// Default false
FORCE_BODY=cfg.FORCE_BODY||false;// Default false
SANITIZE_DOM=cfg.SANITIZE_DOM!==false;// Default true
KEEP_CONTENT=cfg.KEEP_CONTENT!==false;// Default true
IN_PLACE=cfg.IN_PLACE||false;// Default false
IS_ALLOWED_URI$$1=cfg.ALLOWED_URI_REGEXP||IS_ALLOWED_URI$$1;NAMESPACE=cfg.NAMESPACE||HTML_NAMESPACE;PARSER_MEDIA_TYPE=// eslint-disable-next-line unicorn/prefer-includes
SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE)===-1?PARSER_MEDIA_TYPE=DEFAULT_PARSER_MEDIA_TYPE:PARSER_MEDIA_TYPE=cfg.PARSER_MEDIA_TYPE;// HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
transformCaseFunc=PARSER_MEDIA_TYPE==='application/xhtml+xml'?function(x){return x;}:stringToLowerCase;if(SAFE_FOR_TEMPLATES){ALLOW_DATA_ATTR=false;}if(RETURN_DOM_FRAGMENT){RETURN_DOM=true;}/* Parse profile info */if(USE_PROFILES){ALLOWED_TAGS=addToSet({},[].concat(_toConsumableArray$1(text)));ALLOWED_ATTR=[];if(USE_PROFILES.html===true){addToSet(ALLOWED_TAGS,html);addToSet(ALLOWED_ATTR,html$1);}if(USE_PROFILES.svg===true){addToSet(ALLOWED_TAGS,svg);addToSet(ALLOWED_ATTR,svg$1);addToSet(ALLOWED_ATTR,xml);}if(USE_PROFILES.svgFilters===true){addToSet(ALLOWED_TAGS,svgFilters);addToSet(ALLOWED_ATTR,svg$1);addToSet(ALLOWED_ATTR,xml);}if(USE_PROFILES.mathMl===true){addToSet(ALLOWED_TAGS,mathMl);addToSet(ALLOWED_ATTR,mathMl$1);addToSet(ALLOWED_ATTR,xml);}}/* Merge configuration parameters */if(cfg.ADD_TAGS){if(ALLOWED_TAGS===DEFAULT_ALLOWED_TAGS){ALLOWED_TAGS=clone(ALLOWED_TAGS);}addToSet(ALLOWED_TAGS,cfg.ADD_TAGS);}if(cfg.ADD_ATTR){if(ALLOWED_ATTR===DEFAULT_ALLOWED_ATTR){ALLOWED_ATTR=clone(ALLOWED_ATTR);}addToSet(ALLOWED_ATTR,cfg.ADD_ATTR);}if(cfg.ADD_URI_SAFE_ATTR){addToSet(URI_SAFE_ATTRIBUTES,cfg.ADD_URI_SAFE_ATTR);}if(cfg.FORBID_CONTENTS){if(FORBID_CONTENTS===DEFAULT_FORBID_CONTENTS){FORBID_CONTENTS=clone(FORBID_CONTENTS);}addToSet(FORBID_CONTENTS,cfg.FORBID_CONTENTS);}/* Add #text in case KEEP_CONTENT is set to true */if(KEEP_CONTENT){ALLOWED_TAGS['#text']=true;}/* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */if(WHOLE_DOCUMENT){addToSet(ALLOWED_TAGS,['html','head','body']);}/* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */if(ALLOWED_TAGS.table){addToSet(ALLOWED_TAGS,['tbody']);delete FORBID_TAGS.tbody;}// Prevent further manipulation of configuration.
// Not available in IE8, Safari 5, etc.
if(freeze){freeze(cfg);}CONFIG=cfg;};var MATHML_TEXT_INTEGRATION_POINTS=addToSet({},['mi','mo','mn','ms','mtext']);var HTML_INTEGRATION_POINTS=addToSet({},['foreignobject','desc','title','annotation-xml']);/* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */var ALL_SVG_TAGS=addToSet({},svg);addToSet(ALL_SVG_TAGS,svgFilters);addToSet(ALL_SVG_TAGS,svgDisallowed);var ALL_MATHML_TAGS=addToSet({},mathMl);addToSet(ALL_MATHML_TAGS,mathMlDisallowed);/**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */var _checkValidNamespace=function _checkValidNamespace(element){var parent=getParentNode(element);// In JSDOM, if we're inside shadow DOM, then parentNode
// can be null. We just simulate parent in this case.
if(!parent||!parent.tagName){parent={namespaceURI:HTML_NAMESPACE,tagName:'template'};}var tagName=stringToLowerCase(element.tagName);var parentTagName=stringToLowerCase(parent.tagName);if(element.namespaceURI===SVG_NAMESPACE){// The only way to switch from HTML namespace to SVG
// is via <svg>. If it happens via any other tag, then
// it should be killed.
if(parent.namespaceURI===HTML_NAMESPACE){return tagName==='svg';}// The only way to switch from MathML to SVG is via
// svg if parent is either <annotation-xml> or MathML
// text integration points.
if(parent.namespaceURI===MATHML_NAMESPACE){return tagName==='svg'&&(parentTagName==='annotation-xml'||MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);}// We only allow elements that are defined in SVG
// spec. All others are disallowed in SVG namespace.
return Boolean(ALL_SVG_TAGS[tagName]);}if(element.namespaceURI===MATHML_NAMESPACE){// The only way to switch from HTML namespace to MathML
// is via <math>. If it happens via any other tag, then
// it should be killed.
if(parent.namespaceURI===HTML_NAMESPACE){return tagName==='math';}// The only way to switch from SVG to MathML is via
// <math> and HTML integration points
if(parent.namespaceURI===SVG_NAMESPACE){return tagName==='math'&&HTML_INTEGRATION_POINTS[parentTagName];}// We only allow elements that are defined in MathML
// spec. All others are disallowed in MathML namespace.
return Boolean(ALL_MATHML_TAGS[tagName]);}if(element.namespaceURI===HTML_NAMESPACE){// The only way to switch from SVG to HTML is via
// HTML integration points, and from MathML to HTML
// is via MathML text integration points
if(parent.namespaceURI===SVG_NAMESPACE&&!HTML_INTEGRATION_POINTS[parentTagName]){return false;}if(parent.namespaceURI===MATHML_NAMESPACE&&!MATHML_TEXT_INTEGRATION_POINTS[parentTagName]){return false;}// Certain elements are allowed in both SVG and HTML
// namespace. We need to specify them explicitly
// so that they don't get erronously deleted from
// HTML namespace.
var commonSvgAndHTMLElements=addToSet({},['title','style','font','a','script']);// We disallow tags that are specific for MathML
// or SVG and should never appear in HTML namespace
return!ALL_MATHML_TAGS[tagName]&&(commonSvgAndHTMLElements[tagName]||!ALL_SVG_TAGS[tagName]);}// The code should never reach this place (this means
// that the element somehow got namespace that is not
// HTML, SVG or MathML). Return false just in case.
return false;};/**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */var _forceRemove=function _forceRemove(node){arrayPush(DOMPurify.removed,{element:node});try{// eslint-disable-next-line unicorn/prefer-dom-node-remove
node.parentNode.removeChild(node);}catch(_){try{node.outerHTML=emptyHTML;}catch(_){node.remove();}}};/**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */var _removeAttribute=function _removeAttribute(name,node){try{arrayPush(DOMPurify.removed,{attribute:node.getAttributeNode(name),from:node});}catch(_){arrayPush(DOMPurify.removed,{attribute:null,from:node});}node.removeAttribute(name);// We void attribute values for unremovable "is"" attributes
if(name==='is'&&!ALLOWED_ATTR[name]){if(RETURN_DOM||RETURN_DOM_FRAGMENT){try{_forceRemove(node);}catch(_){}}else{try{node.setAttribute(name,'');}catch(_){}}}};/**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */var _initDocument=function _initDocument(dirty){/* Create a HTML document */var doc=void 0;var leadingWhitespace=void 0;if(FORCE_BODY){dirty='<remove></remove>'+dirty;}else{/* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */var matches=stringMatch(dirty,/^[\r\n\t ]+/);leadingWhitespace=matches&&matches[0];}if(PARSER_MEDIA_TYPE==='application/xhtml+xml'){// Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
dirty='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+dirty+'</body></html>';}var dirtyPayload=trustedTypesPolicy?trustedTypesPolicy.createHTML(dirty):dirty;/*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */if(NAMESPACE===HTML_NAMESPACE){try{doc=new DOMParser().parseFromString(dirtyPayload,PARSER_MEDIA_TYPE);}catch(_){}}/* Use createHTMLDocument in case DOMParser is not available */if(!doc||!doc.documentElement){doc=implementation.createDocument(NAMESPACE,'template',null);try{doc.documentElement.innerHTML=IS_EMPTY_INPUT?'':dirtyPayload;}catch(_){// Syntax error if dirtyPayload is invalid xml
}}var body=doc.body||doc.documentElement;if(dirty&&leadingWhitespace){body.insertBefore(document.createTextNode(leadingWhitespace),body.childNodes[0]||null);}/* Work on whole document or just its body */if(NAMESPACE===HTML_NAMESPACE){return getElementsByTagName.call(doc,WHOLE_DOCUMENT?'html':'body')[0];}return WHOLE_DOCUMENT?doc.documentElement:body;};/**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */var _createIterator=function _createIterator(root){return createNodeIterator.call(root.ownerDocument||root,root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT,null,false);};/**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */var _isClobbered=function _isClobbered(elm){if(elm instanceof Text||elm instanceof Comment){return false;}if(typeof elm.nodeName!=='string'||typeof elm.textContent!=='string'||typeof elm.removeChild!=='function'||!(elm.attributes instanceof NamedNodeMap)||typeof elm.removeAttribute!=='function'||typeof elm.setAttribute!=='function'||typeof elm.namespaceURI!=='string'||typeof elm.insertBefore!=='function'){return true;}return false;};/**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */var _isNode=function _isNode(object){return(typeof Node==='undefined'?'undefined':_typeof(Node))==='object'?object instanceof Node:object&&(typeof object==='undefined'?'undefined':_typeof(object))==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string';};/**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */var _executeHook=function _executeHook(entryPoint,currentNode,data){if(!hooks[entryPoint]){return;}arrayForEach(hooks[entryPoint],function(hook){hook.call(DOMPurify,currentNode,data,CONFIG);});};/**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */var _sanitizeElements=function _sanitizeElements(currentNode){var content=void 0;/* Execute a hook if present */_executeHook('beforeSanitizeElements',currentNode,null);/* Check if element is clobbered or can clobber */if(_isClobbered(currentNode)){_forceRemove(currentNode);return true;}/* Check if tagname contains Unicode */if(stringMatch(currentNode.nodeName,/[\u0080-\uFFFF]/)){_forceRemove(currentNode);return true;}/* Now let's check the element's type and name */var tagName=transformCaseFunc(currentNode.nodeName);/* Execute a hook if present */_executeHook('uponSanitizeElement',currentNode,{tagName:tagName,allowedTags:ALLOWED_TAGS});/* Detect mXSS attempts abusing namespace confusion */if(!_isNode(currentNode.firstElementChild)&&(!_isNode(currentNode.content)||!_isNode(currentNode.content.firstElementChild))&&regExpTest(/<[/\w]/g,currentNode.innerHTML)&&regExpTest(/<[/\w]/g,currentNode.textContent)){_forceRemove(currentNode);return true;}/* Mitigate a problem with templates inside select */if(tagName==='select'&&regExpTest(/<template/i,currentNode.innerHTML)){_forceRemove(currentNode);return true;}/* Remove element if anything forbids its presence */if(!ALLOWED_TAGS[tagName]||FORBID_TAGS[tagName]){/* Keep content except for bad-listed elements */if(KEEP_CONTENT&&!FORBID_CONTENTS[tagName]){var parentNode=getParentNode(currentNode)||currentNode.parentNode;var childNodes=getChildNodes(currentNode)||currentNode.childNodes;if(childNodes&&parentNode){var childCount=childNodes.length;for(var i=childCount-1;i>=0;--i){parentNode.insertBefore(cloneNode(childNodes[i],true),getNextSibling(currentNode));}}}_forceRemove(currentNode);return true;}/* Check whether element has a valid namespace */if(currentNode instanceof Element&&!_checkValidNamespace(currentNode)){_forceRemove(currentNode);return true;}if((tagName==='noscript'||tagName==='noembed')&&regExpTest(/<\/no(script|embed)/i,currentNode.innerHTML)){_forceRemove(currentNode);return true;}/* Sanitize element content to be template-safe */if(SAFE_FOR_TEMPLATES&&currentNode.nodeType===3){/* Get the element's text content */content=currentNode.textContent;content=stringReplace(content,MUSTACHE_EXPR$$1,' ');content=stringReplace(content,ERB_EXPR$$1,' ');if(currentNode.textContent!==content){arrayPush(DOMPurify.removed,{element:currentNode.cloneNode()});currentNode.textContent=content;}}/* Execute a hook if present */_executeHook('afterSanitizeElements',currentNode,null);return false;};/**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */ // eslint-disable-next-line complexity
var _isValidAttribute=function _isValidAttribute(lcTag,lcName,value){/* Make sure attribute cannot clobber */if(SANITIZE_DOM&&(lcName==='id'||lcName==='name')&&(value in document||value in formElement)){return false;}/* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */if(ALLOW_DATA_ATTR&&!FORBID_ATTR[lcName]&&regExpTest(DATA_ATTR$$1,lcName));else if(ALLOW_ARIA_ATTR&&regExpTest(ARIA_ATTR$$1,lcName));else if(!ALLOWED_ATTR[lcName]||FORBID_ATTR[lcName]){return false;/* Check value is safe. First, is attr inert? If so, is safe */}else if(URI_SAFE_ATTRIBUTES[lcName]);else if(regExpTest(IS_ALLOWED_URI$$1,stringReplace(value,ATTR_WHITESPACE$$1,'')));else if((lcName==='src'||lcName==='xlink:href'||lcName==='href')&&lcTag!=='script'&&stringIndexOf(value,'data:')===0&&DATA_URI_TAGS[lcTag]);else if(ALLOW_UNKNOWN_PROTOCOLS&&!regExpTest(IS_SCRIPT_OR_DATA$$1,stringReplace(value,ATTR_WHITESPACE$$1,'')));else if(!value);else{return false;}return true;};/**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */var _sanitizeAttributes=function _sanitizeAttributes(currentNode){var attr=void 0;var value=void 0;var lcName=void 0;var l=void 0;/* Execute a hook if present */_executeHook('beforeSanitizeAttributes',currentNode,null);var attributes=currentNode.attributes;/* Check if we have attributes; if not we might have a text node */if(!attributes){return;}var hookEvent={attrName:'',attrValue:'',keepAttr:true,allowedAttributes:ALLOWED_ATTR};l=attributes.length;/* Go backwards over all attributes; safely remove bad ones */while(l--){attr=attributes[l];var _attr=attr,name=_attr.name,namespaceURI=_attr.namespaceURI;value=stringTrim(attr.value);lcName=transformCaseFunc(name);/* Execute a hook if present */hookEvent.attrName=lcName;hookEvent.attrValue=value;hookEvent.keepAttr=true;hookEvent.forceKeepAttr=undefined;// Allows developers to see this is a property they can set
_executeHook('uponSanitizeAttribute',currentNode,hookEvent);value=hookEvent.attrValue;/* Did the hooks approve of the attribute? */if(hookEvent.forceKeepAttr){continue;}/* Remove attribute */_removeAttribute(name,currentNode);/* Did the hooks approve of the attribute? */if(!hookEvent.keepAttr){continue;}/* Work around a security issue in jQuery 3.0 */if(regExpTest(/\/>/i,value)){_removeAttribute(name,currentNode);continue;}/* Sanitize attribute content to be template-safe */if(SAFE_FOR_TEMPLATES){value=stringReplace(value,MUSTACHE_EXPR$$1,' ');value=stringReplace(value,ERB_EXPR$$1,' ');}/* Is `value` valid for this attribute? */var lcTag=transformCaseFunc(currentNode.nodeName);if(!_isValidAttribute(lcTag,lcName,value)){continue;}/* Handle invalid data-* attribute set by try-catching it */try{if(namespaceURI){currentNode.setAttributeNS(namespaceURI,name,value);}else{/* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */currentNode.setAttribute(name,value);}arrayPop(DOMPurify.removed);}catch(_){}}/* Execute a hook if present */_executeHook('afterSanitizeAttributes',currentNode,null);};/**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */var _sanitizeShadowDOM=function _sanitizeShadowDOM(fragment){var shadowNode=void 0;var shadowIterator=_createIterator(fragment);/* Execute a hook if present */_executeHook('beforeSanitizeShadowDOM',fragment,null);while(shadowNode=shadowIterator.nextNode()){/* Execute a hook if present */_executeHook('uponSanitizeShadowNode',shadowNode,null);/* Sanitize tags and elements */if(_sanitizeElements(shadowNode)){continue;}/* Deep shadow DOM detected */if(shadowNode.content instanceof DocumentFragment){_sanitizeShadowDOM(shadowNode.content);}/* Check attributes, sanitize if necessary */_sanitizeAttributes(shadowNode);}/* Execute a hook if present */_executeHook('afterSanitizeShadowDOM',fragment,null);};/**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */ // eslint-disable-next-line complexity
DOMPurify.sanitize=function(dirty,cfg){var body=void 0;var importedNode=void 0;var currentNode=void 0;var oldNode=void 0;var returnNode=void 0;/* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */IS_EMPTY_INPUT=!dirty;if(IS_EMPTY_INPUT){dirty='<!-->';}/* Stringify, in case dirty is an object */if(typeof dirty!=='string'&&!_isNode(dirty)){// eslint-disable-next-line no-negated-condition
if(typeof dirty.toString!=='function'){throw typeErrorCreate('toString is not a function');}else{dirty=dirty.toString();if(typeof dirty!=='string'){throw typeErrorCreate('dirty is not a string, aborting');}}}/* Check we can run. Otherwise fall back or ignore */if(!DOMPurify.isSupported){if(_typeof(window.toStaticHTML)==='object'||typeof window.toStaticHTML==='function'){if(typeof dirty==='string'){return window.toStaticHTML(dirty);}if(_isNode(dirty)){return window.toStaticHTML(dirty.outerHTML);}}return dirty;}/* Assign config vars */if(!SET_CONFIG){_parseConfig(cfg);}/* Clean up removed elements */DOMPurify.removed=[];/* Check if dirty is correctly typed for IN_PLACE */if(typeof dirty==='string'){IN_PLACE=false;}if(IN_PLACE);else if(dirty instanceof Node){/* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */body=_initDocument('<!---->');importedNode=body.ownerDocument.importNode(dirty,true);if(importedNode.nodeType===1&&importedNode.nodeName==='BODY'){/* Node is already a body, use as is */body=importedNode;}else if(importedNode.nodeName==='HTML'){body=importedNode;}else{// eslint-disable-next-line unicorn/prefer-dom-node-append
body.appendChild(importedNode);}}else{/* Exit directly if we have nothing to do */if(!RETURN_DOM&&!SAFE_FOR_TEMPLATES&&!WHOLE_DOCUMENT&&// eslint-disable-next-line unicorn/prefer-includes
dirty.indexOf('<')===-1){return trustedTypesPolicy&&RETURN_TRUSTED_TYPE?trustedTypesPolicy.createHTML(dirty):dirty;}/* Initialize the document to work on */body=_initDocument(dirty);/* Check we have a DOM node from the data */if(!body){return RETURN_DOM?null:emptyHTML;}}/* Remove first element node (ours) if FORCE_BODY is set */if(body&&FORCE_BODY){_forceRemove(body.firstChild);}/* Get node iterator */var nodeIterator=_createIterator(IN_PLACE?dirty:body);/* Now start iterating over the created document */while(currentNode=nodeIterator.nextNode()){/* Fix IE's strange behavior with manipulated textNodes #89 */if(currentNode.nodeType===3&&currentNode===oldNode){continue;}/* Sanitize tags and elements */if(_sanitizeElements(currentNode)){continue;}/* Shadow DOM detected, sanitize it */if(currentNode.content instanceof DocumentFragment){_sanitizeShadowDOM(currentNode.content);}/* Check attributes, sanitize if necessary */_sanitizeAttributes(currentNode);oldNode=currentNode;}oldNode=null;/* If we sanitized `dirty` in-place, return it. */if(IN_PLACE){return dirty;}/* Return sanitized string or DOM */if(RETURN_DOM){if(RETURN_DOM_FRAGMENT){returnNode=createDocumentFragment.call(body.ownerDocument);while(body.firstChild){// eslint-disable-next-line unicorn/prefer-dom-node-append
returnNode.appendChild(body.firstChild);}}else{returnNode=body;}if(RETURN_DOM_IMPORT){/*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */returnNode=importNode.call(originalDocument,returnNode,true);}return returnNode;}var serializedHTML=WHOLE_DOCUMENT?body.outerHTML:body.innerHTML;/* Sanitize final string template-safe */if(SAFE_FOR_TEMPLATES){serializedHTML=stringReplace(serializedHTML,MUSTACHE_EXPR$$1,' ');serializedHTML=stringReplace(serializedHTML,ERB_EXPR$$1,' ');}return trustedTypesPolicy&&RETURN_TRUSTED_TYPE?trustedTypesPolicy.createHTML(serializedHTML):serializedHTML;};/**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */DOMPurify.setConfig=function(cfg){_parseConfig(cfg);SET_CONFIG=true;};/**
     * Public method to remove the configuration
     * clearConfig
     *
     */DOMPurify.clearConfig=function(){CONFIG=null;SET_CONFIG=false;};/**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */DOMPurify.isValidAttribute=function(tag,attr,value){/* Initialize shared config vars if necessary. */if(!CONFIG){_parseConfig({});}var lcTag=transformCaseFunc(tag);var lcName=transformCaseFunc(attr);return _isValidAttribute(lcTag,lcName,value);};/**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */DOMPurify.addHook=function(entryPoint,hookFunction){if(typeof hookFunction!=='function'){return;}hooks[entryPoint]=hooks[entryPoint]||[];arrayPush(hooks[entryPoint],hookFunction);};/**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     */DOMPurify.removeHook=function(entryPoint){if(hooks[entryPoint]){arrayPop(hooks[entryPoint]);}};/**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */DOMPurify.removeHooks=function(entryPoint){if(hooks[entryPoint]){hooks[entryPoint]=[];}};/**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */DOMPurify.removeAllHooks=function(){hooks={};};return DOMPurify;}var purify=createDOMPurify();return purify;});//# sourceMappingURL=purify.js.map
/***/},/***/8552:/***/(module,__unused_webpack_exports,__nested_webpack_require_398586__)=>{var getNative=__nested_webpack_require_398586__(852),root=__nested_webpack_require_398586__(5639);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;/***/},/***/1989:/***/(module,__unused_webpack_exports,__nested_webpack_require_398862__)=>{var hashClear=__nested_webpack_require_398862__(1789),hashDelete=__nested_webpack_require_398862__(401),hashGet=__nested_webpack_require_398862__(7667),hashHas=__nested_webpack_require_398862__(1327),hashSet=__nested_webpack_require_398862__(1866);/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;/***/},/***/8407:/***/(module,__unused_webpack_exports,__nested_webpack_require_399598__)=>{var listCacheClear=__nested_webpack_require_399598__(7040),listCacheDelete=__nested_webpack_require_399598__(4125),listCacheGet=__nested_webpack_require_399598__(2117),listCacheHas=__nested_webpack_require_399598__(7518),listCacheSet=__nested_webpack_require_399598__(4705);/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;/***/},/***/7071:/***/(module,__unused_webpack_exports,__nested_webpack_require_400432__)=>{var getNative=__nested_webpack_require_400432__(852),root=__nested_webpack_require_400432__(5639);/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;/***/},/***/3369:/***/(module,__unused_webpack_exports,__nested_webpack_require_400693__)=>{var mapCacheClear=__nested_webpack_require_400693__(4785),mapCacheDelete=__nested_webpack_require_400693__(1285),mapCacheGet=__nested_webpack_require_400693__(6000),mapCacheHas=__nested_webpack_require_400693__(9916),mapCacheSet=__nested_webpack_require_400693__(5265);/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;/***/},/***/3818:/***/(module,__unused_webpack_exports,__nested_webpack_require_401532__)=>{var getNative=__nested_webpack_require_401532__(852),root=__nested_webpack_require_401532__(5639);/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;/***/},/***/8525:/***/(module,__unused_webpack_exports,__nested_webpack_require_401805__)=>{var getNative=__nested_webpack_require_401805__(852),root=__nested_webpack_require_401805__(5639);/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;/***/},/***/8668:/***/(module,__unused_webpack_exports,__nested_webpack_require_402066__)=>{var MapCache=__nested_webpack_require_402066__(3369),setCacheAdd=__nested_webpack_require_402066__(619),setCacheHas=__nested_webpack_require_402066__(2385);/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;/***/},/***/6384:/***/(module,__unused_webpack_exports,__nested_webpack_require_402704__)=>{var ListCache=__nested_webpack_require_402704__(8407),stackClear=__nested_webpack_require_402704__(7465),stackDelete=__nested_webpack_require_402704__(3779),stackGet=__nested_webpack_require_402704__(7599),stackHas=__nested_webpack_require_402704__(4758),stackSet=__nested_webpack_require_402704__(4309);/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;/***/},/***/2705:/***/(module,__unused_webpack_exports,__nested_webpack_require_403453__)=>{var root=__nested_webpack_require_403453__(5639);/** Built-in value references. */var Symbol=root.Symbol;module.exports=Symbol;/***/},/***/1149:/***/(module,__unused_webpack_exports,__nested_webpack_require_403644__)=>{var root=__nested_webpack_require_403644__(5639);/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;/***/},/***/577:/***/(module,__unused_webpack_exports,__nested_webpack_require_403846__)=>{var getNative=__nested_webpack_require_403846__(852),root=__nested_webpack_require_403846__(5639);/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;/***/},/***/7412:/***/module=>{/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}module.exports=arrayEach;/***/},/***/4963:/***/module=>{/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;/***/},/***/4636:/***/(module,__unused_webpack_exports,__nested_webpack_require_405193__)=>{var baseTimes=__nested_webpack_require_405193__(2545),isArguments=__nested_webpack_require_405193__(5694),isArray=__nested_webpack_require_405193__(1469),isBuffer=__nested_webpack_require_405193__(4144),isIndex=__nested_webpack_require_405193__(5776),isTypedArray=__nested_webpack_require_405193__(6719);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}module.exports=arrayLikeKeys;/***/},/***/9932:/***/module=>{/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;/***/},/***/2488:/***/module=>{/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;/***/},/***/2908:/***/module=>{/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;/***/},/***/4865:/***/(module,__unused_webpack_exports,__nested_webpack_require_408248__)=>{var baseAssignValue=__nested_webpack_require_408248__(9465),eq=__nested_webpack_require_408248__(7813);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}module.exports=assignValue;/***/},/***/8470:/***/(module,__unused_webpack_exports,__nested_webpack_require_409162__)=>{var eq=__nested_webpack_require_409162__(7813);/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;/***/},/***/4037:/***/(module,__unused_webpack_exports,__nested_webpack_require_409687__)=>{var copyObject=__nested_webpack_require_409687__(8363),keys=__nested_webpack_require_409687__(3674);/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}module.exports=baseAssign;/***/},/***/3886:/***/(module,__unused_webpack_exports,__nested_webpack_require_410217__)=>{var copyObject=__nested_webpack_require_410217__(8363),keysIn=__nested_webpack_require_410217__(1704);/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}module.exports=baseAssignIn;/***/},/***/9465:/***/(module,__unused_webpack_exports,__nested_webpack_require_410757__)=>{var defineProperty=__nested_webpack_require_410757__(8777);/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}module.exports=baseAssignValue;/***/},/***/5990:/***/(module,__unused_webpack_exports,__nested_webpack_require_411375__)=>{var Stack=__nested_webpack_require_411375__(6384),arrayEach=__nested_webpack_require_411375__(7412),assignValue=__nested_webpack_require_411375__(4865),baseAssign=__nested_webpack_require_411375__(4037),baseAssignIn=__nested_webpack_require_411375__(3886),cloneBuffer=__nested_webpack_require_411375__(4626),copyArray=__nested_webpack_require_411375__(278),copySymbols=__nested_webpack_require_411375__(8805),copySymbolsIn=__nested_webpack_require_411375__(1911),getAllKeys=__nested_webpack_require_411375__(8234),getAllKeysIn=__nested_webpack_require_411375__(6904),getTag=__nested_webpack_require_411375__(4160),initCloneArray=__nested_webpack_require_411375__(3824),initCloneByTag=__nested_webpack_require_411375__(9148),initCloneObject=__nested_webpack_require_411375__(8517),isArray=__nested_webpack_require_411375__(1469),isBuffer=__nested_webpack_require_411375__(4144),isMap=__nested_webpack_require_411375__(6688),isObject=__nested_webpack_require_411375__(3218),isSet=__nested_webpack_require_411375__(2928),keys=__nested_webpack_require_411375__(3674),keysIn=__nested_webpack_require_411375__(1704);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}module.exports=baseClone;/***/},/***/3118:/***/(module,__unused_webpack_exports,__nested_webpack_require_416178__)=>{var isObject=__nested_webpack_require_416178__(3218);/** Built-in value references. */var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();module.exports=baseCreate;/***/},/***/1848:/***/module=>{/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}module.exports=baseFindIndex;/***/},/***/7786:/***/(module,__unused_webpack_exports,__nested_webpack_require_417575__)=>{var castPath=__nested_webpack_require_417575__(1811),toKey=__nested_webpack_require_417575__(327);/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;/***/},/***/8866:/***/(module,__unused_webpack_exports,__nested_webpack_require_418201__)=>{var arrayPush=__nested_webpack_require_418201__(2488),isArray=__nested_webpack_require_418201__(1469);/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;/***/},/***/4239:/***/(module,__unused_webpack_exports,__nested_webpack_require_418991__)=>{var Symbol=__nested_webpack_require_418991__(2705),getRawTag=__nested_webpack_require_418991__(9607),objectToString=__nested_webpack_require_418991__(2333);/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=Symbol?Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;/***/},/***/13:/***/module=>{/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;/***/},/***/9454:/***/(module,__unused_webpack_exports,__nested_webpack_require_420165__)=>{var baseGetTag=__nested_webpack_require_420165__(4239),isObjectLike=__nested_webpack_require_420165__(7005);/** `Object#toString` result references. */var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}module.exports=baseIsArguments;/***/},/***/939:/***/(module,__unused_webpack_exports,__nested_webpack_require_420700__)=>{var baseIsEqualDeep=__nested_webpack_require_420700__(2492),isObjectLike=__nested_webpack_require_420700__(7005);/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}module.exports=baseIsEqual;/***/},/***/2492:/***/(module,__unused_webpack_exports,__nested_webpack_require_421716__)=>{var Stack=__nested_webpack_require_421716__(6384),equalArrays=__nested_webpack_require_421716__(7114),equalByTag=__nested_webpack_require_421716__(8351),equalObjects=__nested_webpack_require_421716__(6096),getTag=__nested_webpack_require_421716__(4160),isArray=__nested_webpack_require_421716__(1469),isBuffer=__nested_webpack_require_421716__(4144),isTypedArray=__nested_webpack_require_421716__(6719);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}module.exports=baseIsEqualDeep;/***/},/***/5588:/***/(module,__unused_webpack_exports,__nested_webpack_require_424408__)=>{var getTag=__nested_webpack_require_424408__(4160),isObjectLike=__nested_webpack_require_424408__(7005);/** `Object#toString` result references. */var mapTag='[object Map]';/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}module.exports=baseIsMap;/***/},/***/2958:/***/(module,__unused_webpack_exports,__nested_webpack_require_424938__)=>{var Stack=__nested_webpack_require_424938__(6384),baseIsEqual=__nested_webpack_require_424938__(939);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;/***/},/***/8458:/***/(module,__unused_webpack_exports,__nested_webpack_require_426422__)=>{var isFunction=__nested_webpack_require_426422__(3560),isMasked=__nested_webpack_require_426422__(5346),isObject=__nested_webpack_require_426422__(3218),toSource=__nested_webpack_require_426422__(346);/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;/***/},/***/9221:/***/(module,__unused_webpack_exports,__nested_webpack_require_427819__)=>{var getTag=__nested_webpack_require_427819__(4160),isObjectLike=__nested_webpack_require_427819__(7005);/** `Object#toString` result references. */var setTag='[object Set]';/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}module.exports=baseIsSet;/***/},/***/8749:/***/(module,__unused_webpack_exports,__nested_webpack_require_428349__)=>{var baseGetTag=__nested_webpack_require_428349__(4239),isLength=__nested_webpack_require_428349__(1780),isObjectLike=__nested_webpack_require_428349__(7005);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}module.exports=baseIsTypedArray;/***/},/***/7206:/***/(module,__unused_webpack_exports,__nested_webpack_require_430399__)=>{var baseMatches=__nested_webpack_require_430399__(1573),baseMatchesProperty=__nested_webpack_require_430399__(6432),identity=__nested_webpack_require_430399__(6557),isArray=__nested_webpack_require_430399__(1469),property=__nested_webpack_require_430399__(9601);/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;/***/},/***/280:/***/(module,__unused_webpack_exports,__nested_webpack_require_431267__)=>{var isPrototype=__nested_webpack_require_431267__(5726),nativeKeys=__nested_webpack_require_431267__(6916);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}module.exports=baseKeys;/***/},/***/313:/***/(module,__unused_webpack_exports,__nested_webpack_require_432039__)=>{var isObject=__nested_webpack_require_432039__(3218),isPrototype=__nested_webpack_require_432039__(5726),nativeKeysIn=__nested_webpack_require_432039__(3498);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}module.exports=baseKeysIn;/***/},/***/1573:/***/(module,__unused_webpack_exports,__nested_webpack_require_432889__)=>{var baseIsMatch=__nested_webpack_require_432889__(2958),getMatchData=__nested_webpack_require_432889__(1499),matchesStrictComparable=__nested_webpack_require_432889__(2634);/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;/***/},/***/6432:/***/(module,__unused_webpack_exports,__nested_webpack_require_433597__)=>{var baseIsEqual=__nested_webpack_require_433597__(939),get=__nested_webpack_require_433597__(7361),hasIn=__nested_webpack_require_433597__(9095),isKey=__nested_webpack_require_433597__(5403),isStrictComparable=__nested_webpack_require_433597__(9162),matchesStrictComparable=__nested_webpack_require_433597__(2634),toKey=__nested_webpack_require_433597__(327);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}module.exports=baseMatchesProperty;/***/},/***/371:/***/module=>{/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;/***/},/***/9152:/***/(module,__unused_webpack_exports,__nested_webpack_require_435043__)=>{var baseGet=__nested_webpack_require_435043__(7786);/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;/***/},/***/2545:/***/module=>{/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;/***/},/***/531:/***/(module,__unused_webpack_exports,__nested_webpack_require_435981__)=>{var Symbol=__nested_webpack_require_435981__(2705),arrayMap=__nested_webpack_require_435981__(9932),isArray=__nested_webpack_require_435981__(1469),isSymbol=__nested_webpack_require_435981__(3448);/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;/***/},/***/7561:/***/(module,__unused_webpack_exports,__nested_webpack_require_437088__)=>{var trimmedEndIndex=__nested_webpack_require_437088__(7990);/** Used to match leading whitespace. */var reTrimStart=/^\s+/;/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,''):string;}module.exports=baseTrim;/***/},/***/1717:/***/module=>{/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;/***/},/***/4757:/***/module=>{/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;/***/},/***/1811:/***/(module,__unused_webpack_exports,__nested_webpack_require_438269__)=>{var isArray=__nested_webpack_require_438269__(1469),isKey=__nested_webpack_require_438269__(5403),stringToPath=__nested_webpack_require_438269__(5514),toString=__nested_webpack_require_438269__(9833);/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}module.exports=castPath;/***/},/***/4318:/***/(module,__unused_webpack_exports,__nested_webpack_require_438875__)=>{var Uint8Array=__nested_webpack_require_438875__(1149);/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}module.exports=cloneArrayBuffer;/***/},/***/4626:/***/(module,exports,__nested_webpack_require_439363__)=>{/* module decorator */module=__nested_webpack_require_439363__.nmd(module);var root=__nested_webpack_require_439363__(5639);/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}module.exports=cloneBuffer;/***/},/***/7157:/***/(module,__unused_webpack_exports,__nested_webpack_require_440432__)=>{var cloneArrayBuffer=__nested_webpack_require_440432__(4318);/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}module.exports=cloneDataView;/***/},/***/3147:/***/module=>{/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}module.exports=cloneRegExp;/***/},/***/419:/***/(module,__unused_webpack_exports,__nested_webpack_require_441427__)=>{var Symbol=__nested_webpack_require_441427__(2705);/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}module.exports=cloneSymbol;/***/},/***/7133:/***/(module,__unused_webpack_exports,__nested_webpack_require_441995__)=>{var cloneArrayBuffer=__nested_webpack_require_441995__(4318);/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}module.exports=cloneTypedArray;/***/},/***/278:/***/module=>{/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}module.exports=copyArray;/***/},/***/8363:/***/(module,__unused_webpack_exports,__nested_webpack_require_443001__)=>{var assignValue=__nested_webpack_require_443001__(4865),baseAssignValue=__nested_webpack_require_443001__(9465);/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}module.exports=copyObject;/***/},/***/8805:/***/(module,__unused_webpack_exports,__nested_webpack_require_443960__)=>{var copyObject=__nested_webpack_require_443960__(8363),getSymbols=__nested_webpack_require_443960__(9551);/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}module.exports=copySymbols;/***/},/***/1911:/***/(module,__unused_webpack_exports,__nested_webpack_require_444461__)=>{var copyObject=__nested_webpack_require_444461__(8363),getSymbolsIn=__nested_webpack_require_444461__(1442);/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}module.exports=copySymbolsIn;/***/},/***/4429:/***/(module,__unused_webpack_exports,__nested_webpack_require_444984__)=>{var root=__nested_webpack_require_444984__(5639);/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;/***/},/***/8777:/***/(module,__unused_webpack_exports,__nested_webpack_require_445214__)=>{var getNative=__nested_webpack_require_445214__(852);var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();module.exports=defineProperty;/***/},/***/7114:/***/(module,__unused_webpack_exports,__nested_webpack_require_445481__)=>{var SetCache=__nested_webpack_require_445481__(8668),arraySome=__nested_webpack_require_445481__(2908),cacheHas=__nested_webpack_require_445481__(4757);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}module.exports=equalArrays;/***/},/***/8351:/***/(module,__unused_webpack_exports,__nested_webpack_require_447721__)=>{var Symbol=__nested_webpack_require_447721__(2705),Uint8Array=__nested_webpack_require_447721__(1149),eq=__nested_webpack_require_447721__(7813),equalArrays=__nested_webpack_require_447721__(7114),mapToArray=__nested_webpack_require_447721__(8776),setToArray=__nested_webpack_require_447721__(1814);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;/***/},/***/6096:/***/(module,__unused_webpack_exports,__nested_webpack_require_450975__)=>{var getAllKeys=__nested_webpack_require_450975__(8234);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Check that cyclic values are equal.
var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}module.exports=equalObjects;/***/},/***/1957:/***/(module,__unused_webpack_exports,__nested_webpack_require_453550__)=>{/** Detect free variable `global` from Node.js. */var freeGlobal=typeof __nested_webpack_require_453550__.g=='object'&&__nested_webpack_require_453550__.g&&__nested_webpack_require_453550__.g.Object===Object&&__nested_webpack_require_453550__.g;module.exports=freeGlobal;/***/},/***/8234:/***/(module,__unused_webpack_exports,__nested_webpack_require_453843__)=>{var baseGetAllKeys=__nested_webpack_require_453843__(8866),getSymbols=__nested_webpack_require_453843__(9551),keys=__nested_webpack_require_453843__(3674);/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;/***/},/***/6904:/***/(module,__unused_webpack_exports,__nested_webpack_require_454351__)=>{var baseGetAllKeys=__nested_webpack_require_454351__(8866),getSymbolsIn=__nested_webpack_require_454351__(1442),keysIn=__nested_webpack_require_454351__(1704);/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}module.exports=getAllKeysIn;/***/},/***/5050:/***/(module,__unused_webpack_exports,__nested_webpack_require_454888__)=>{var isKeyable=__nested_webpack_require_454888__(7019);/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;/***/},/***/1499:/***/(module,__unused_webpack_exports,__nested_webpack_require_455329__)=>{var isStrictComparable=__nested_webpack_require_455329__(9162),keys=__nested_webpack_require_455329__(3674);/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;/***/},/***/852:/***/(module,__unused_webpack_exports,__nested_webpack_require_455907__)=>{var baseIsNative=__nested_webpack_require_455907__(8458),getValue=__nested_webpack_require_455907__(7801);/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;/***/},/***/5924:/***/(module,__unused_webpack_exports,__nested_webpack_require_456437__)=>{var overArg=__nested_webpack_require_456437__(5569);/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;/***/},/***/9607:/***/(module,__unused_webpack_exports,__nested_webpack_require_456669__)=>{var Symbol=__nested_webpack_require_456669__(2705);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=Symbol?Symbol.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;/***/},/***/9551:/***/(module,__unused_webpack_exports,__nested_webpack_require_457763__)=>{var arrayFilter=__nested_webpack_require_457763__(4963),stubArray=__nested_webpack_require_457763__(479);/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};module.exports=getSymbols;/***/},/***/1442:/***/(module,__unused_webpack_exports,__nested_webpack_require_458654__)=>{var arrayPush=__nested_webpack_require_458654__(2488),getPrototype=__nested_webpack_require_458654__(5924),getSymbols=__nested_webpack_require_458654__(9551),stubArray=__nested_webpack_require_458654__(479);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};module.exports=getSymbolsIn;/***/},/***/4160:/***/(module,__unused_webpack_exports,__nested_webpack_require_459417__)=>{var DataView=__nested_webpack_require_459417__(8552),Map=__nested_webpack_require_459417__(7071),Promise=__nested_webpack_require_459417__(3818),Set=__nested_webpack_require_459417__(8525),WeakMap=__nested_webpack_require_459417__(577),baseGetTag=__nested_webpack_require_459417__(4239),toSource=__nested_webpack_require_459417__(346);/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;/***/},/***/7801:/***/module=>{/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;/***/},/***/222:/***/(module,__unused_webpack_exports,__nested_webpack_require_461390__)=>{var castPath=__nested_webpack_require_461390__(1811),isArguments=__nested_webpack_require_461390__(5694),isArray=__nested_webpack_require_461390__(1469),isIndex=__nested_webpack_require_461390__(5776),isLength=__nested_webpack_require_461390__(1780),toKey=__nested_webpack_require_461390__(327);/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}module.exports=hasPath;/***/},/***/1789:/***/(module,__unused_webpack_exports,__nested_webpack_require_462400__)=>{var nativeCreate=__nested_webpack_require_462400__(4536);/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}module.exports=hashClear;/***/},/***/401:/***/module=>{/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}module.exports=hashDelete;/***/},/***/7667:/***/(module,__unused_webpack_exports,__nested_webpack_require_463180__)=>{var nativeCreate=__nested_webpack_require_463180__(4536);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;/***/},/***/1327:/***/(module,__unused_webpack_exports,__nested_webpack_require_463963__)=>{var nativeCreate=__nested_webpack_require_463963__(4536);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;/***/},/***/1866:/***/(module,__unused_webpack_exports,__nested_webpack_require_464627__)=>{var nativeCreate=__nested_webpack_require_464627__(4536);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;/***/},/***/3824:/***/module=>{/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}module.exports=initCloneArray;/***/},/***/9148:/***/(module,__unused_webpack_exports,__nested_webpack_require_465908__)=>{var cloneArrayBuffer=__nested_webpack_require_465908__(4318),cloneDataView=__nested_webpack_require_465908__(7157),cloneRegExp=__nested_webpack_require_465908__(3147),cloneSymbol=__nested_webpack_require_465908__(419),cloneTypedArray=__nested_webpack_require_465908__(7133);/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}module.exports=initCloneByTag;/***/},/***/8517:/***/(module,__unused_webpack_exports,__nested_webpack_require_467912__)=>{var baseCreate=__nested_webpack_require_467912__(3118),getPrototype=__nested_webpack_require_467912__(5924),isPrototype=__nested_webpack_require_467912__(5726);/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}module.exports=initCloneObject;/***/},/***/5776:/***/module=>{/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){var type=typeof value;length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;/***/},/***/5403:/***/(module,__unused_webpack_exports,__nested_webpack_require_469133__)=>{var isArray=__nested_webpack_require_469133__(1469),isSymbol=__nested_webpack_require_469133__(3448);/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;/***/},/***/7019:/***/module=>{/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;/***/},/***/5346:/***/(module,__unused_webpack_exports,__nested_webpack_require_470407__)=>{var coreJsData=__nested_webpack_require_470407__(4429);/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;/***/},/***/5726:/***/module=>{/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;/***/},/***/9162:/***/(module,__unused_webpack_exports,__nested_webpack_require_471467__)=>{var isObject=__nested_webpack_require_471467__(3218);/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;/***/},/***/7040:/***/module=>{/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}module.exports=listCacheClear;/***/},/***/4125:/***/(module,__unused_webpack_exports,__nested_webpack_require_472175__)=>{var assocIndexOf=__nested_webpack_require_472175__(8470);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}module.exports=listCacheDelete;/***/},/***/2117:/***/(module,__unused_webpack_exports,__nested_webpack_require_472934__)=>{var assocIndexOf=__nested_webpack_require_472934__(8470);/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;/***/},/***/7518:/***/(module,__unused_webpack_exports,__nested_webpack_require_473394__)=>{var assocIndexOf=__nested_webpack_require_473394__(8470);/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;/***/},/***/4705:/***/(module,__unused_webpack_exports,__nested_webpack_require_473856__)=>{var assocIndexOf=__nested_webpack_require_473856__(8470);/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;/***/},/***/4785:/***/(module,__unused_webpack_exports,__nested_webpack_require_474421__)=>{var Hash=__nested_webpack_require_474421__(1989),ListCache=__nested_webpack_require_474421__(8407),Map=__nested_webpack_require_474421__(7071);/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;/***/},/***/1285:/***/(module,__unused_webpack_exports,__nested_webpack_require_474855__)=>{var getMapData=__nested_webpack_require_474855__(5050);/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}module.exports=mapCacheDelete;/***/},/***/6000:/***/(module,__unused_webpack_exports,__nested_webpack_require_475354__)=>{var getMapData=__nested_webpack_require_475354__(5050);/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;/***/},/***/9916:/***/(module,__unused_webpack_exports,__nested_webpack_require_475747__)=>{var getMapData=__nested_webpack_require_475747__(5050);/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;/***/},/***/5265:/***/(module,__unused_webpack_exports,__nested_webpack_require_476192__)=>{var getMapData=__nested_webpack_require_476192__(5050);/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}module.exports=mapCacheSet;/***/},/***/8776:/***/module=>{/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;/***/},/***/2634:/***/module=>{/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;/***/},/***/4523:/***/(module,__unused_webpack_exports,__nested_webpack_require_477612__)=>{var memoize=__nested_webpack_require_477612__(8306);/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}module.exports=memoizeCapped;/***/},/***/4536:/***/(module,__unused_webpack_exports,__nested_webpack_require_478266__)=>{var getNative=__nested_webpack_require_478266__(852);/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;/***/},/***/6916:/***/(module,__unused_webpack_exports,__nested_webpack_require_478519__)=>{var overArg=__nested_webpack_require_478519__(5569);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;/***/},/***/3498:/***/module=>{/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}module.exports=nativeKeysIn;/***/},/***/1167:/***/(module,exports,__nested_webpack_require_479251__)=>{/* module decorator */module=__nested_webpack_require_479251__.nmd(module);var freeGlobal=__nested_webpack_require_479251__(1957);/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;/***/},/***/2333:/***/module=>{/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;/***/},/***/5569:/***/module=>{/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;/***/},/***/5639:/***/(module,__unused_webpack_exports,__nested_webpack_require_481209__)=>{var freeGlobal=__nested_webpack_require_481209__(1957);/** Detect free variable `self`. */var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;/***/},/***/619:/***/module=>{/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;/***/},/***/2385:/***/module=>{/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;/***/},/***/1814:/***/module=>{/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;/***/},/***/7465:/***/(module,__unused_webpack_exports,__nested_webpack_require_482663__)=>{var ListCache=__nested_webpack_require_482663__(8407);/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}module.exports=stackClear;/***/},/***/3779:/***/module=>{/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}module.exports=stackDelete;/***/},/***/7599:/***/module=>{/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;/***/},/***/4758:/***/module=>{/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;/***/},/***/4309:/***/(module,__unused_webpack_exports,__nested_webpack_require_484016__)=>{var ListCache=__nested_webpack_require_484016__(8407),Map=__nested_webpack_require_484016__(7071),MapCache=__nested_webpack_require_484016__(3369);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}module.exports=stackSet;/***/},/***/5514:/***/(module,__unused_webpack_exports,__nested_webpack_require_484843__)=>{var memoizeCapped=__nested_webpack_require_484843__(4523);/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;/***/},/***/327:/***/(module,__unused_webpack_exports,__nested_webpack_require_485685__)=>{var isSymbol=__nested_webpack_require_485685__(3448);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;/***/},/***/346:/***/module=>{/** Used for built-in method references. */var funcProto=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;/***/},/***/7990:/***/module=>{/** Used to match a single whitespace character. */var reWhitespace=/\s/;/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function trimmedEndIndex(string){var index=string.length;while(index--&&reWhitespace.test(string.charAt(index))){}return index;}module.exports=trimmedEndIndex;/***/},/***/361:/***/(module,__unused_webpack_exports,__nested_webpack_require_487250__)=>{var baseClone=__nested_webpack_require_487250__(5990);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_SYMBOLS_FLAG=4;/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}module.exports=cloneDeep;/***/},/***/7813:/***/module=>{/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;/***/},/***/998:/***/(module,__unused_webpack_exports,__nested_webpack_require_488784__)=>{var baseFindIndex=__nested_webpack_require_488784__(1848),baseIteratee=__nested_webpack_require_488784__(7206),toInteger=__nested_webpack_require_488784__(554);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,baseIteratee(predicate,3),index);}module.exports=findIndex;/***/},/***/7361:/***/(module,__unused_webpack_exports,__nested_webpack_require_490420__)=>{var baseGet=__nested_webpack_require_490420__(7786);/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;/***/},/***/9095:/***/(module,__unused_webpack_exports,__nested_webpack_require_491351__)=>{var baseHasIn=__nested_webpack_require_491351__(13),hasPath=__nested_webpack_require_491351__(222);/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;/***/},/***/6557:/***/module=>{/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}module.exports=identity;/***/},/***/5694:/***/(module,__unused_webpack_exports,__nested_webpack_require_492546__)=>{var baseIsArguments=__nested_webpack_require_492546__(9454),isObjectLike=__nested_webpack_require_492546__(7005);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};module.exports=isArguments;/***/},/***/1469:/***/module=>{/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;module.exports=isArray;/***/},/***/8612:/***/(module,__unused_webpack_exports,__nested_webpack_require_494101__)=>{var isFunction=__nested_webpack_require_494101__(3560),isLength=__nested_webpack_require_494101__(1780);/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}module.exports=isArrayLike;/***/},/***/4144:/***/(module,exports,__nested_webpack_require_494970__)=>{/* module decorator */module=__nested_webpack_require_494970__.nmd(module);var root=__nested_webpack_require_494970__(5639),stubFalse=__nested_webpack_require_494970__(5062);/** Detect free variable `exports`. */var freeExports= true&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&"object"=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;/***/},/***/8446:/***/(module,__unused_webpack_exports,__nested_webpack_require_496132__)=>{var baseIsEqual=__nested_webpack_require_496132__(939);/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function isEqual(value,other){return baseIsEqual(value,other);}module.exports=isEqual;/***/},/***/7398:/***/(module,__unused_webpack_exports,__nested_webpack_require_497178__)=>{var root=__nested_webpack_require_497178__(5639);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsFinite=root.isFinite;/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}module.exports=isFinite;/***/},/***/3560:/***/(module,__unused_webpack_exports,__nested_webpack_require_498032__)=>{var baseGetTag=__nested_webpack_require_498032__(4239),isObject=__nested_webpack_require_498032__(3218);/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}module.exports=isFunction;/***/},/***/1780:/***/module=>{/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;/***/},/***/6688:/***/(module,__unused_webpack_exports,__nested_webpack_require_499821__)=>{var baseIsMap=__nested_webpack_require_499821__(5588),baseUnary=__nested_webpack_require_499821__(1717),nodeUtil=__nested_webpack_require_499821__(1167);/* Node.js helper references. */var nodeIsMap=nodeUtil&&nodeUtil.isMap;/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;module.exports=isMap;/***/},/***/3218:/***/module=>{/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}module.exports=isObject;/***/},/***/7005:/***/module=>{/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&typeof value=='object';}module.exports=isObjectLike;/***/},/***/2928:/***/(module,__unused_webpack_exports,__nested_webpack_require_501848__)=>{var baseIsSet=__nested_webpack_require_501848__(9221),baseUnary=__nested_webpack_require_501848__(1717),nodeUtil=__nested_webpack_require_501848__(1167);/* Node.js helper references. */var nodeIsSet=nodeUtil&&nodeUtil.isSet;/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;module.exports=isSet;/***/},/***/7037:/***/(module,__unused_webpack_exports,__nested_webpack_require_502509__)=>{var baseGetTag=__nested_webpack_require_502509__(4239),isArray=__nested_webpack_require_502509__(1469),isObjectLike=__nested_webpack_require_502509__(7005);/** `Object#toString` result references. */var stringTag='[object String]';/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}module.exports=isString;/***/},/***/3448:/***/(module,__unused_webpack_exports,__nested_webpack_require_503266__)=>{var baseGetTag=__nested_webpack_require_503266__(4239),isObjectLike=__nested_webpack_require_503266__(7005);/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}module.exports=isSymbol;/***/},/***/6719:/***/(module,__unused_webpack_exports,__nested_webpack_require_503986__)=>{var baseIsTypedArray=__nested_webpack_require_503986__(8749),baseUnary=__nested_webpack_require_503986__(1717),nodeUtil=__nested_webpack_require_503986__(1167);/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;/***/},/***/3674:/***/(module,__unused_webpack_exports,__nested_webpack_require_504722__)=>{var arrayLikeKeys=__nested_webpack_require_504722__(4636),baseKeys=__nested_webpack_require_504722__(280),isArrayLike=__nested_webpack_require_504722__(8612);/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}module.exports=keys;/***/},/***/1704:/***/(module,__unused_webpack_exports,__nested_webpack_require_505652__)=>{var arrayLikeKeys=__nested_webpack_require_505652__(4636),baseKeysIn=__nested_webpack_require_505652__(313),isArrayLike=__nested_webpack_require_505652__(8612);/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}module.exports=keysIn;/***/},/***/8306:/***/(module,__unused_webpack_exports,__nested_webpack_require_506473__)=>{var MapCache=__nested_webpack_require_506473__(3369);/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;module.exports=memoize;/***/},/***/9601:/***/(module,__unused_webpack_exports,__nested_webpack_require_508636__)=>{var baseProperty=__nested_webpack_require_508636__(371),basePropertyDeep=__nested_webpack_require_508636__(9152),isKey=__nested_webpack_require_508636__(5403),toKey=__nested_webpack_require_508636__(327);/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;/***/},/***/479:/***/module=>{/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}module.exports=stubArray;/***/},/***/5062:/***/module=>{/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=stubFalse;/***/},/***/8601:/***/(module,__unused_webpack_exports,__nested_webpack_require_510179__)=>{var toNumber=__nested_webpack_require_510179__(4841);/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}module.exports=toFinite;/***/},/***/554:/***/(module,__unused_webpack_exports,__nested_webpack_require_511033__)=>{var toFinite=__nested_webpack_require_511033__(8601);/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}module.exports=toInteger;/***/},/***/4841:/***/(module,__unused_webpack_exports,__nested_webpack_require_511829__)=>{var baseTrim=__nested_webpack_require_511829__(7561),isObject=__nested_webpack_require_511829__(3218),isSymbol=__nested_webpack_require_511829__(3448);/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/***/9833:/***/(module,__unused_webpack_exports,__nested_webpack_require_513259__)=>{var baseToString=__nested_webpack_require_513259__(531);/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;/***/}/******/};/************************************************************************/ /******/ // The module cache
/******/var __webpack_module_cache__={};/******/ /******/ // The require function
/******/function __nested_webpack_require_514049__(moduleId){/******/ // Check if module is in cache
/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=__webpack_module_cache__[moduleId]={/******/id:moduleId,/******/loaded:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/__webpack_modules__[moduleId].call(module.exports,module,module.exports,__nested_webpack_require_514049__);/******/ /******/ // Flag the module as loaded
/******/module.loaded=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/(()=>{/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__nested_webpack_require_514049__.n=module=>{/******/var getter=module&&module.__esModule?/******/()=>module['default']:/******/()=>module;/******/__nested_webpack_require_514049__.d(getter,{a:getter});/******/return getter;/******/};/******/})();/******/ /******/ /* webpack/runtime/define property getters */ /******/(()=>{/******/ // define getter functions for harmony exports
/******/__nested_webpack_require_514049__.d=(exports,definition)=>{/******/for(var key in definition){/******/if(__nested_webpack_require_514049__.o(definition,key)&&!__nested_webpack_require_514049__.o(exports,key)){/******/Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});/******/}/******/}/******/};/******/})();/******/ /******/ /* webpack/runtime/global */ /******/(()=>{/******/__nested_webpack_require_514049__.g=function(){/******/if(typeof globalThis==='object')return globalThis;/******/try{/******/return this||new Function('return this')();/******/}catch(e){/******/if(typeof window==='object')return window;/******/}/******/}();/******/})();/******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/(()=>{/******/__nested_webpack_require_514049__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop);/******/})();/******/ /******/ /* webpack/runtime/make namespace object */ /******/(()=>{/******/ // define __esModule on exports
/******/__nested_webpack_require_514049__.r=exports=>{/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/})();/******/ /******/ /* webpack/runtime/node module decorator */ /******/(()=>{/******/__nested_webpack_require_514049__.nmd=module=>{/******/module.paths=[];/******/if(!module.children)module.children=[];/******/return module;/******/};/******/})();/******/ /************************************************************************/var __webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";// ESM COMPAT FLAG
__nested_webpack_require_514049__.r(__webpack_exports__);// EXPORTS
__nested_webpack_require_514049__.d(__webpack_exports__,{"lineTypes":()=>/* reexport */parser_lineTypes,"parseSong":()=>/* reexport */parseSong,"renderSong":()=>/* reexport */renderSong});// EXTERNAL MODULE: ./node_modules/lodash/isArray.js
var isArray=__nested_webpack_require_514049__(1469);var isArray_default=/*#__PURE__*/__nested_webpack_require_514049__.n(isArray);// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.js
var purify=__nested_webpack_require_514049__(7856);var purify_default=/*#__PURE__*/__nested_webpack_require_514049__.n(purify);;// CONCATENATED MODULE: ./src/core/dom/escapeHTML.js
function escapeHTML(unescaped){return purify_default().sanitize(unescaped);};// CONCATENATED MODULE: ./src/core/dom/stripTags.js
function stripTags(html){return purify_default().sanitize(html,{ALLOWED_TAGS:['#text'],KEEP_CONTENT:true});}// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep=__nested_webpack_require_514049__(361);var cloneDeep_default=/*#__PURE__*/__nested_webpack_require_514049__.n(cloneDeep);;// CONCATENATED MODULE: ./src/parser/lineTypes.js
/**
 * @enum {String}
 * @readonly
 */ /* harmony default export */const parser_lineTypes={CHORD:'chord',CHORD_LINE_REPEATER:'chordLineRepeater',EMPTY_LINE:'emptyLine',LYRIC:'lyric',SECTION_LABEL:'sectionLabel',TIME_SIGNATURE:'timeSignature'};;// CONCATENATED MODULE: ./src/parser/matchers/isTimeSignatureString.js
const allowedTimeSignatures=['2/2','3/2','2/4','3/4','4/4','5/4','3/8','6/8','9/8','12/8'];function isTimeSignatureString(string){return allowedTimeSignatures.includes(string);};// CONCATENATED MODULE: ./src/parser/syntax.js
/* harmony default export */const syntax={barRepeat:'%',chordBeatCount:'\\.',chordLineRepeat:'%',chordPositionMarker:'_',noChord:'NC',noLyrics:'NL',sectionLabel:'#'};;// CONCATENATED MODULE: ./src/parser/matchers/isSectionLabel.js
const sectionLabelRegexp=new RegExp('^'+syntax.sectionLabel+'([a-zA-Z]+)([1-9])?( x[2-9])?$');function isSectionLabel(string){const found=string.trim().match(sectionLabelRegexp);return found!==null;};// CONCATENATED MODULE: ./src/parser/helper/clearSpaces.js
function clearSpaces(string){return string.replace(/\t+/g,' ').replace(/  +/g,' ').trim();}// EXTERNAL MODULE: ./node_modules/chord-symbol/lib/chord-symbol.js
var chord_symbol=__nested_webpack_require_514049__(6013);;// CONCATENATED MODULE: ./src/parser/matchers/isChord.js
function isChord(potentialChord){const parseChord=(0,chord_symbol.chordParserFactory)();const parsed=parseChord(potentialChord);return!parsed.error;};// CONCATENATED MODULE: ./src/parser/matchers/isChordLine.js
const chordBeatCountSymbols=new RegExp(syntax.chordBeatCount+'*$','g');const barRepeatSymbols=new RegExp('^'+syntax.barRepeat+'+$');function isChordLine(line=''){return clearSpaces(line).split(' ').every((potentialChordToken,index)=>{const withoutBeatCount=potentialChordToken.replace(chordBeatCountSymbols,'');return isChord(withoutBeatCount)||potentialChordToken.match(barRepeatSymbols)&&index>0||withoutBeatCount===syntax.noChord;});};// CONCATENATED MODULE: ./src/parser/matchers/isChordLineRepeater.js
function isChordLineRepeater(string){const candidate=clearSpaces(string);return candidate===syntax.chordLineRepeat||candidate===syntax.chordLineRepeat.repeat(2);};// CONCATENATED MODULE: ./src/parser/matchers/isEmptyLine.js
function isEmptyLine(string){return clearSpaces(string)==='';};// CONCATENATED MODULE: ./src/parser/parseTimeSignature.js
/**
 * @typedef {Object} TimeSignature
 * @type {Object}
 * @property {String} string - original string
 * @property {Number} count - upper part of time signature
 * @property {Number} value - lower part of time signature
 * @property {Number} beatCount - number of beats per bar
 */ /**
 * @param {String} string
 * @returns {TimeSignature}
 */function parseTimeSignature(string){if(!isTimeSignatureString(string)){throw new TypeError('Expected time signature string, received: '+string);}const array=string.split('/');const count=Number.parseInt(array[0],10);const value=Number.parseInt(array[1],10);let beatCount=count;if(value===2){beatCount=count*2;}else if(value===8){beatCount=count/3;}return{string,count,value,beatCount};}// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual=__nested_webpack_require_514049__(8446);var isEqual_default=/*#__PURE__*/__nested_webpack_require_514049__.n(isEqual);;// CONCATENATED MODULE: ./src/parser/parseChord.js
/**
 * @param chordString
 * @returns {Chord}
 */function parseChordWrapper(chordString){const parseChord=(0,chord_symbol.chordParserFactory)();return parseChord(chordString);}// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString=__nested_webpack_require_514049__(7037);var isString_default=/*#__PURE__*/__nested_webpack_require_514049__.n(isString);// EXTERNAL MODULE: ./node_modules/lodash/isFinite.js
var lodash_isFinite=__nested_webpack_require_514049__(7398);var isFinite_default=/*#__PURE__*/__nested_webpack_require_514049__.n(lodash_isFinite);;// CONCATENATED MODULE: ./src/parser/exceptions/IncorrectBeatCountException.js
class IncorrectBeatCountException extends Error{constructor({string,duration,currentBeatCount,beatCount}={}){if(!string||!isString_default()(string)){throw new TypeError('IncorrectBeatCountException cannot be created without chord string, received: '+string);}if(!duration||!isFinite_default()(duration)){throw new TypeError('IncorrectBeatCountException cannot be created without chord duration, received: '+duration);}if(!currentBeatCount||!isFinite_default()(currentBeatCount)){throw new TypeError('IncorrectBeatCountException cannot be created without currentBeatCount, received: '+currentBeatCount);}if(!beatCount||!isFinite_default()(beatCount)){throw new TypeError('IncorrectBeatCountException cannot be created without beatCount, received: '+beatCount);}super();this.name='IncorrectBeatCountException';this.string=string;this.duration=duration;this.currentBeatCount=currentBeatCount;this.beatCount=beatCount;}};// CONCATENATED MODULE: ./src/parser/exceptions/InvalidChordRepetitionException.js
class InvalidChordRepetitionException extends Error{constructor({string}={}){if(!string||!isString_default()(string)){throw new TypeError('InvalidChordRepetitionException cannot be created without chord string, received: '+string);}super();this.name='InvalidChordRepetitionException';this.string=string;}};// CONCATENATED MODULE: ./src/parser/parseChordLine.js
const parseChordLine_chordBeatCountSymbols=new RegExp(syntax.chordBeatCount,'g');const parseChordLine_barRepeatSymbols=new RegExp('^'+syntax.barRepeat+'+$');const defaultTimeSignature=parseTimeSignature('4/4');/**
 * @typedef {Object} ChordLine
 * @type {Object}
 * @property {Bar[]} allBars
 * @property {Boolean} hasPositionedChords
 */ /**
 * @typedef {Object} Bar
 * @type {Object}
 * @property {TimeSignature} timeSignature
 * @property {ChordLineChord[]} allChords
 * @property {Boolean} isRepeated
 * @property {Boolean} hasUnevenChordsDurations
 */ /**
 * @typedef {Object} ChordLineChord
 * @type {Object}
 * @property {String} string - original chord string
 * @property {ChordDef|String} model - parsed chord or "NC" if "no chord" symbol
 * @property {Number} duration - number of beats the chord lasts
 * @property {Number} beat - beat on which the chord starts
 * @property {Boolean} isPositioned - whether this chord has been positioned over a specific lyric or not
 */ /**
 * @param {String} chordLine
 * @param {TimeSignature} timeSignature
 * @returns {ChordLine}
 */function parseChordLine(chordLine,{timeSignature=defaultTimeSignature}={}){const{beatCount}=timeSignature;const allBars=[];const emptyBar={allChords:[]};let bar=cloneDeep_default()(emptyBar);let chord={};let tokenWithoutBeatCount;let currentBeatCount=0;let previousBar;const allTokens=clearSpaces(chordLine).split(' ');allTokens.forEach((token,tokenIndex)=>{if(token.match(parseChordLine_barRepeatSymbols)){if(previousBar){const repeatedBar=cloneDeep_default()(previousBar);repeatedBar.isRepeated=true;for(let i=0;i<token.length;i++){allBars.push(cloneDeep_default()(repeatedBar));}}else{throw new Error('A chord line cannot start with the barRepeat symbol');}}else{tokenWithoutBeatCount=token.replace(parseChordLine_chordBeatCountSymbols,'');chord={string:token,duration:getChordDuration(token,beatCount),model:isNoChordSymbol(tokenWithoutBeatCount)?syntax.noChord:parseChordWrapper(tokenWithoutBeatCount),beat:currentBeatCount+1};currentBeatCount+=chord.duration;checkInvalidChordRepetition(bar,chord);bar.allChords.push(chord);if(shouldChangeBar(currentBeatCount,beatCount)){bar.timeSignature=timeSignature;bar.hasUnevenChordsDurations=hasUnevenChordsDurations(bar);const barClone=cloneDeep_default()(bar);bar.isRepeated=isEqual_default()(bar,previousBar);allBars.push(cloneDeep_default()(bar));previousBar=barClone;bar=cloneDeep_default()(emptyBar);currentBeatCount=0;}else{checkInvalidBeatCount(chord,currentBeatCount,beatCount,allTokens.length===tokenIndex+1);}}});return{allBars};}function isNoChordSymbol(token){return token===syntax.noChord;}function getChordDuration(token,beatCount){return(token.match(parseChordLine_chordBeatCountSymbols)||[]).length||beatCount;}function checkInvalidChordRepetition(bar,currentChord){if(bar.allChords.length>0){const previousChord=bar.allChords[bar.allChords.length-1];if(isEqual_default()(previousChord.model,currentChord.model)){throw new InvalidChordRepetitionException({string:currentChord.string});}}}function shouldChangeBar(currentBeatCount,beatCount){return currentBeatCount===beatCount;}function checkInvalidBeatCount(chord,currentBeatCount,beatCount,isLast){if(hasInvalidBeatCount(currentBeatCount,beatCount,isLast)){throw new IncorrectBeatCountException({message:'',string:chord.string,duration:chord.duration,currentBeatCount,beatCount});}}function hasInvalidBeatCount(currentBeatCount,barBeatCount,isLast){return hasTooManyBeats(currentBeatCount,barBeatCount)||hasTooFewBeats(currentBeatCount,barBeatCount,isLast);}function hasTooManyBeats(currentBeatCount,barBeatCount){return currentBeatCount>barBeatCount;}function hasTooFewBeats(currentBeatCount,barBeatCount,isLast){return isLast&&currentBeatCount<barBeatCount;}function hasUnevenChordsDurations(bar){let firstChordDuration=bar.allChords[0].duration;return bar.allChords.some(chord=>chord.duration!==firstChordDuration);};// CONCATENATED MODULE: ./src/parser/parseSectionLabel.js
/**
 * @typedef {Object} SectionLabel
 * @type {Object}
 * @property {String} string - original string
 * @property {String} label - label of the section
 * @property {Number} multiplyTimes - number of times the section should be multiplied
 * @property {Number} copyIndex - index of the section that should be copied
 */ /**
 * @param {String} string
 * @returns {SectionLabel}
 */function parseSectionLabel(string){if(!isSectionLabel(string)){throw new TypeError('Expected section identifier string, received: '+string);}const found=string.trim().match(sectionLabelRegexp);return{string,label:found[1],copyIndex:found[2]?Number.parseInt(found[2]):1,multiplyTimes:found[3]?Number.parseInt(found[3].replace(' x','')):0};};// CONCATENATED MODULE: ./src/parser/parseLyricLine.js
/**
 * @typedef {Object} LyricLine
 * @type {Object}
 * @property {String} lyrics
 * @property {Number[]} chordPositions
 */ /**
 * @param {String} string
 * @returns {LyricLine}
 */function parseLyricLine(string){const regexp=new RegExp(syntax.chordPositionMarker,'g');const stringWithoutPositionMarkers=string.replace(regexp,'');const chordPositions=[];let tmpString=string;let position;while((position=tmpString.indexOf(syntax.chordPositionMarker))!==-1){if(!chordPositions.includes(position)){chordPositions.push(position);}tmpString=tmpString.replace(syntax.chordPositionMarker,'');}return{lyrics:stringWithoutPositionMarkers,chordPositions};};// CONCATENATED MODULE: ./src/parser/helper/songs.js
/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each bar
 * @returns {SongLine[]}
 */function forEachBarInSong(allLines,fn){const newLines=_cloneDeep(allLines);newLines.forEach(line=>{if(line.type===lineTypes.CHORD){line.model.allBars.forEach(bar=>{fn(bar);});}});return newLines;}/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each chord
 * @returns {SongLine[]}
 */function forEachChordInSong(allLines,fn){const newLines=cloneDeep_default()(allLines);newLines.forEach(line=>{if(line.type===parser_lineTypes.CHORD){line.model.allBars.forEach(bar=>{bar.allChords.forEach(chord=>{fn(chord);});});}});return newLines;}/**
 * @param {ChordLine} chordLine
 * @param {Function} fn - to execute on each chord
 * @returns {ChordLine}
 */function forEachChordInChordLine(chordLine,fn){const newChordLine=cloneDeep_default()(chordLine);newChordLine.allBars.forEach((bar,barIndex)=>{bar.allChords.forEach((chord,chordIndex)=>{fn(chord,chordIndex,barIndex);});});return newChordLine;}/**
 * @param {SongLine[]} allLines
 * @param {String} label - the label to select
 * @param {Number} n - the index of the section to select
 * @returns {SongLine[]} all lines of the requested section
 */function getNthOfLabel(allLines,label,n){const selected=[];const typesCount={};let enableSelect=false;let currentLabel='';allLines.forEach(line=>{if(line.type===parser_lineTypes.SECTION_LABEL){currentLabel=line.model.label;if(!typesCount[currentLabel]){typesCount[currentLabel]=1;}else{typesCount[currentLabel]++;}enableSelect=line.id===label+n;}else if(enableSelect){selected.push(line);}});return selected;};// CONCATENATED MODULE: ./src/parser/songLinesFactory.js
/*eslint-disable max-lines-per-function */const songLinesFactory_defaultTimeSignature='4/4';/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|lyric|timeSignature|sectionLabel...
 * @property {Boolean} [isFromSectionMultiply] - line created by a section multiply directive (#chorus x3, for ex)
 * @property {Boolean} [isFromSectionCopy] - line created by a section copy (eg empty # section)
 * @property {Boolean} [isFromAutoRepeatChords] - line created by auto repeats of chords from a section to another
 */ /**
 * @typedef {SongLine} SongChordLine
 * @type {Object}
 * @property {ChordLine} model
 * @property {Boolean} [isFromChordLineRepeater] - line created by the chordLine repeat symbol
 */ /**
 * @typedef {SongLine} SongTimeSignatureLine
 * @type {Object}
 * @property {TimeSignature} model
 */ /**
 * @typedef {SongLine} SongLyricLine
 * @type {Object}
 * @property {LyricLine} model
 */ /**
 * @typedef {SongLine} SongSectionLabelLine
 * @type {Object}
 * @property {SectionLabel} model
 * @property {Number} index - index of the section for a given label (#v, #v x2, #v => 1, 2, 3, 4)
 * @property {Number} indexWithoutMultiply - idem, but not taking repeats into account (#v, #v x2, #v => 1, 2, 3)
 * @property {String} id
 */function songLinesFactory(){const allLines=[];const sectionsStats={};let currentTimeSignature=parseTimeSignature(songLinesFactory_defaultTimeSignature);let currentSection;let currentSectionStats;const MAX_PREVIOUS_CHORD_LINES=2;let previousChordLines=[];let previousSectionLabelLine;let blueprint=[];let blueprintIndex=0;let blueprintLine='';let isRepeatingChords=false;let shouldMultiplySection=false;let shouldCopySection=false;/**
   * @returns {SongTimeSignatureLine}
   */function getTimeSignatureLine(string){currentTimeSignature=parseTimeSignature(string);return{string,type:parser_lineTypes.TIME_SIGNATURE,model:currentTimeSignature};}/**
   * @returns {SongSectionLabelLine}
   */function getSectionLabelLine(string,lineIndex,allSrcLines){currentSection=parseSectionLabel(string);increaseSectionStats(currentSection.label);currentSectionStats=getSectionCount(currentSection.label);const line={string,type:parser_lineTypes.SECTION_LABEL,model:currentSection,index:currentSectionStats.count,indexWithoutMultiply:currentSectionStats.withoutMultiply,id:currentSection.label+currentSectionStats.count};shouldCopySection=isCurrentSectionEmpty(lineIndex,allSrcLines)&&currentSectionStats.count>1;if(shouldCopySection){line.isFromSectionCopy=true;}shouldMultiplySection=currentSection.multiplyTimes>0;previousSectionLabelLine=cloneDeep_default()(line);if(!isFirstOfLabel(currentSection,allLines)){blueprint=getNthOfLabel(allLines,currentSection.label,1);blueprintIndex=0;isRepeatingChords=true;}else{isRepeatingChords=false;}return line;}/**
   * @returns {SongLyricLine}
   */function getEmptyLine(string){return{string,type:parser_lineTypes.EMPTY_LINE};}/**
   * @returns {SongChordLine|SongLyricLine}
   */function getChordLine(string){let line;try{const model=parseChordLine(string,{timeSignature:currentTimeSignature});line={string,type:parser_lineTypes.CHORD,model};addPreviousChordLine(line);}catch(e){line=getLyricLine(string);}return line;}function addPreviousChordLine(line){if(previousChordLines.length>=MAX_PREVIOUS_CHORD_LINES){previousChordLines.shift();}previousChordLines.push(line);}/**
   * @returns {SongChordLine|SongLyricLine}
   */function getRepeatedChordLine(string){const repeatString=clearSpaces(string);const sliceStart=-repeatString.length;const sliceEnd=sliceStart<-1?sliceStart+1:undefined;if(previousChordLines.length>=repeatString.length){return{...cloneDeep_default()(...previousChordLines.slice(sliceStart,sliceEnd)),isFromChordLineRepeater:true};}return getLyricLine(string);}/**
   * @returns {SongLyricLine}
   */function getLyricLine(string){return{string,type:parser_lineTypes.LYRIC,model:parseLyricLine(string)};}function increaseSectionStats(label,isMultiplied=false){if(!sectionsStats[label]){sectionsStats[label]={count:1,withoutMultiply:1};}else{sectionsStats[label].count++;if(!isMultiplied){sectionsStats[label].withoutMultiply++;}}}function getSectionCount(label){return sectionsStats[label];}function repeatLinesFromBlueprint(line){if(isRepeatingChords&&line.type!==parser_lineTypes.SECTION_LABEL){blueprintLine=blueprint[blueprintIndex];let repeatedLine;while(shouldRepeatLineFromBlueprint(blueprintLine,line)){if(blueprintLine.type===parser_lineTypes.CHORD){addPreviousChordLine(cloneDeep_default()(blueprintLine));}repeatedLine={...cloneDeep_default()(blueprintLine),isFromAutoRepeatChords:true};allLines.push(repeatedLine);blueprintIndex++;blueprintLine=blueprint[blueprintIndex];}blueprintIndex++;}}function copySection(){if(shouldCopySection){const toCopy=getNthOfLabel(allLines,currentSection.label,currentSection.copyIndex).map(line=>({...cloneDeep_default()(line),isFromSectionCopy:true}));if(!toCopy.length)return;if(endsWithEmptyLine(toCopy)){toCopy.pop();}allLines.push(...cloneDeep_default()(toCopy));shouldCopySection=false;}}function isCurrentSectionEmpty(lineIndex,allSrcLines){const remainingLines=allSrcLines.slice(lineIndex+1);let nextSectionIndex=remainingLines.findIndex(line=>isSectionLabel(line));if(nextSectionIndex===0){return true;}const currentSectionContent=remainingLines.slice(0,nextSectionIndex!==-1?nextSectionIndex:undefined).filter(line=>!(isTimeSignatureString(line)||isEmptyLine(line)));return currentSectionContent.length===0;}function multiplySection(lineIndex,allSrcLines){if(shouldMultiplySection&&isLastLineOfSection(lineIndex,allSrcLines)){const toMultiply=getNthOfLabel(allLines,currentSection.label,currentSectionStats.count).map(line=>({...cloneDeep_default()(line),isFromSectionMultiply:true}));let sectionLabelLine;for(let i=1;i<currentSection.multiplyTimes;i++){increaseSectionStats(currentSection.label,true);currentSectionStats=getSectionCount(currentSection.label);sectionLabelLine={...cloneDeep_default()(previousSectionLabelLine),index:currentSectionStats.count,indexWithoutMultiply:currentSectionStats.withoutMultiply,id:currentSection.label+currentSectionStats.count,isFromSectionMultiply:true};allLines.push(sectionLabelLine);allLines.push(...cloneDeep_default()(toMultiply));}}}return{addLine(lineSrc,lineIndex,allSrcLines){let line;if(isTimeSignatureString(lineSrc)){line=getTimeSignatureLine(lineSrc);}else if(isSectionLabel(lineSrc)){line=getSectionLabelLine(lineSrc,lineIndex,allSrcLines);}else if(isChordLine(lineSrc)){line=getChordLine(lineSrc);}else if(isChordLineRepeater(lineSrc)){line=getRepeatedChordLine(lineSrc);}else if(isEmptyLine(lineSrc)){line=getEmptyLine(lineSrc);}else{line=getLyricLine(lineSrc);}repeatLinesFromBlueprint(line);allLines.push(line);copySection();multiplySection(lineIndex,allSrcLines);},/**
     * returns {SongLine[]}
     */asArray(){return cloneDeep_default()(allLines);},flagPositionedChords(){let nextLine;let lineChordCount;allLines.forEach((line,lineIndex)=>{nextLine=allLines[lineIndex+1];if(shouldPositionChords(line,nextLine)){lineChordCount=0;line.model.hasPositionedChords=true;line.model=forEachChordInChordLine(line.model,chord=>{chord.isPositioned=lineChordCount<nextLine.model.chordPositions.length;lineChordCount++;});}else if(line.type===parser_lineTypes.CHORD){line.model.hasPositionedChords=false;line.model=forEachChordInChordLine(line.model,chord=>{chord.isPositioned=false;});}});}};}function isFirstOfLabel(currentLabel,allLines){return allLines.every(line=>line.type===parser_lineTypes.SECTION_LABEL&&line.model.label!==currentLabel.label);}function shouldRepeatLineFromBlueprint(blueprintLine,currentLine){return blueprintLine&&blueprintLine.type!==parser_lineTypes.LYRIC&&blueprintLine.type!==parser_lineTypes.EMPTY_LINE&&blueprintLine.type!==currentLine.type&&currentLine.type!==parser_lineTypes.EMPTY_LINE;}function isLastLineOfSection(lineIndex,allSrcLines){const nextLine=allSrcLines[lineIndex+1];return typeof nextLine==='undefined'||isSectionLabel(nextLine);}function shouldPositionChords(line,nextLine){return line.type===parser_lineTypes.CHORD&&nextLine&&nextLine.type===parser_lineTypes.LYRIC&&nextLine.model.chordPositions.length>0;}function endsWithEmptyLine(allLines){const lastLine=allLines[allLines.length-1];return lastLine.type===parser_lineTypes.EMPTY_LINE;}// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex=__nested_webpack_require_514049__(998);var findIndex_default=/*#__PURE__*/__nested_webpack_require_514049__.n(findIndex);;// CONCATENATED MODULE: ./src/parser/getAllChordsInSong.js
/**
 * @param {SongLine[]} allLines
 * @returns {SongChord[]}
 */function getAllChordsInSong(allLines){const allChords=[];let i;forEachChordInSong(allLines,chord=>{i=findIndex_default()(allChords,o=>isEqual_default()(o.model,chord.model));if(i===-1){allChords.push({model:cloneDeep_default()(chord.model),occurrences:1});}else{allChords[i].occurrences++;}});return allChords;};// CONCATENATED MODULE: ./src/parser/parseSong.js
/**
 * @typedef {Object} Song
 * @type {Object}
 * @property {SongLine[]} allLines
 * @property {SongChord[]} allChords
 */ /**
 * @typedef {Object} SongChord
 * @type {Object}
 * @property {ChordDef} model
 * @property {number} occurrences - number of times the chord appears in the song
 */ /**
 * @param {string|array} songSrc
 * @returns {Song}
 */function parseSong(songSrc){const songArray=!isArray_default()(songSrc)?songSrc.split('\n'):songSrc;const songLines=songLinesFactory();/**
   * @type {SongLine[]}
   */songArray.map(escapeHTML).map(stripTags).forEach(songLines.addLine);songLines.flagPositionedChords();const allLines=songLines.asArray();const allChords=getAllChordsInSong(allLines);return{allLines,allChords};};// CONCATENATED MODULE: ./src/renderer/symbols.js
/* harmony default export */const symbols={barRepeat:'%',barSeparator:'|',chordBeat:'.',chordLineOffsetSpacer:' ',emptyBeatSpaces:1,lyricsSpacer:' ',noChordSymbol:'NC',spacesAfterDefault:2};;// CONCATENATED MODULE: ./src/renderer/spacers/chord/getMaxBeatsWidth.js
/**
 * @param {SongLine[]} allLines
 * @param {Function} shouldAlignChords
 * @returns {Array}
 */function getMaxBeatsWidth(allLines,shouldAlignChords){const maxBeatsWidth=[];allLines.filter(line=>line.type===parser_lineTypes.CHORD).filter(line=>!shouldAlignChords(line)).forEach(line=>{line.model.allBars.forEach((bar,barIndex)=>{if(!maxBeatsWidth[barIndex]){maxBeatsWidth[barIndex]={};for(let i=1;i<=bar.timeSignature.beatCount;i++){maxBeatsWidth[barIndex][i]=0;}}bar.allChords.forEach(chord=>{let symbolLength=chord.symbol.length;if(bar.shouldPrintChordsDuration){symbolLength+=symbols.chordBeat.repeat(chord.duration).length;}maxBeatsWidth[barIndex][chord.beat]=Math.max(maxBeatsWidth[barIndex][chord.beat],symbolLength);});});});return maxBeatsWidth;};// CONCATENATED MODULE: ./src/renderer/spacers/chord/simple.js
/**
 * Simple spacer: simply happens default spaces value after each chord.
 * @param {ChordLine} chordLineInput
 */function space(chordLineInput){const chordLine=cloneDeep_default()(chordLineInput);chordLine.allBars.forEach(bar=>{bar.allChords.forEach(chord=>{chord.spacesAfter=symbols.spacesAfterDefault;});});return chordLine;};// CONCATENATED MODULE: ./src/renderer/spacers/chord/aligned.js
function aligned_space(chordLineInput,maxBeatsWidth){const chordLine=cloneDeep_default()(chordLineInput);let beatMaxWidth;chordLine.allBars.forEach((bar,barIndex)=>{bar.allChords.forEach(chord=>{let symbolLength=chord.symbol.length;if(bar.shouldPrintChordsDuration){symbolLength+=symbols.chordBeat.repeat(chord.duration).length;}chord.spacesWithin=maxBeatsWidth[barIndex][chord.beat]-symbolLength;chord.spacesAfter=0;if(chord.beat!==bar.timeSignature.beatCount){chord.spacesAfter=symbols.spacesAfterDefault;for(let i=chord.beat+1;i<chord.beat+chord.duration;i++){beatMaxWidth=maxBeatsWidth[barIndex][i];chord.spacesAfter+=beatMaxWidth?beatMaxWidth:symbols.emptyBeatSpaces;if(i!==bar.timeSignature.beatCount&&beatMaxWidth){chord.spacesAfter+=symbols.spacesAfterDefault;}}}});});return chordLine;};// CONCATENATED MODULE: ./src/renderer/spacers/chord/chordLyrics.js
const chordSpaceAfterDefault=1;/**
 * @param {ChordLine} chordLineInput
 * @param {LyricLine} lyricsLineInput
 * @returns {Object}
 */function chordLyrics_space(chordLineInput,lyricsLineInput){const chordLine=cloneDeep_default()(chordLineInput);const lyricsLine=cloneDeep_default()(lyricsLineInput);if(hasNoPositionMarkers(lyricsLine)){return{chordLine,lyricsLine};}const tokenizedLyrics=lyricsLine.chordPositions.map((position,i,allPositions)=>{return lyricsLine.lyrics.substring(position,allPositions[i+1]);});let spacedLyricsLine='';let chordToken;let lyricToken;let currentBarIndex=0;chordLine.allBars.forEach((bar,barIndex)=>{bar.allChords.forEach((chord,chordIndex)=>{lyricToken=tokenizedLyrics.shift();if(lyricToken){chordToken=chord.symbol;if(bar.shouldPrintChordsDuration){chordToken+=symbols.chordBeat.repeat(chord.duration);}if(isFirstChord(barIndex,chordIndex)){chordToken=symbols.barSeparator+chordToken;}else if(isNewBar(currentBarIndex,barIndex)){chordToken=symbols.barSeparator+chordToken;currentBarIndex=barIndex;}if(startsWithSpace(lyricToken)){lyricToken=symbols.lyricsSpacer.repeat(chordToken.length)+lyricToken;}if(lyricToken.length-chordToken.length>0){chord.spacesAfter=lyricToken.length-chordToken.length;}else{chord.spacesAfter=chordSpaceAfterDefault;const lyricsSpaceAfter=chordToken.length-lyricToken.length+chordSpaceAfterDefault;lyricToken+=symbols.lyricsSpacer.repeat(lyricsSpaceAfter);}spacedLyricsLine+=lyricToken;}else{chord.spacesAfter=chordSpaceAfterDefault;}chord.spacesWithin=0;});});if(shouldOffsetChordLine(lyricsLine)){const chordLineOffset=lyricsLine.chordPositions[0];chordLine.offset=chordLineOffset;spacedLyricsLine=lyricsLine.lyrics.substring(0,chordLineOffset)+spacedLyricsLine;}if(tokenizedLyrics.length){spacedLyricsLine+=tokenizedLyrics.join('');}lyricsLine.lyrics=trimEnd(spacedLyricsLine);return{chordLine,lyricsLine};}const hasNoPositionMarkers=lyricsLine=>lyricsLine.chordPositions.length===0;const shouldOffsetChordLine=lyricsLine=>lyricsLine.chordPositions[0]>0;const isFirstChord=(barIndex,chordIndex)=>barIndex===0&&chordIndex===0;const isNewBar=(currentBarIndex,barIndex)=>currentBarIndex!==barIndex;// source: https://github.com/es-shims/String.prototype.trimEnd/blob/main/implementation.js
const trimEnd=str=>{const endWhitespace=// eslint-disable-next-line max-len,no-control-regex
/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;return str.replace(endWhitespace,'');};const startsWithSpace=str=>str.indexOf(' ')===0;// EXTERNAL MODULE: ./src/renderer/components/tpl/chordLine.hbs
var tpl_chordLine=__nested_webpack_require_514049__(7132);var chordLine_default=/*#__PURE__*/__nested_webpack_require_514049__.n(tpl_chordLine);// EXTERNAL MODULE: ./src/renderer/components/tpl/chordSymbol.hbs
var chordSymbol=__nested_webpack_require_514049__(3524);var chordSymbol_default=/*#__PURE__*/__nested_webpack_require_514049__.n(chordSymbol);;// CONCATENATED MODULE: ./src/renderer/components/renderChordSymbol.js
/**
 * @param {ChordLineChord} chord
 * @param {Boolean} shouldPrintChordsDuration
 * @returns {String} rendered html
 */function renderChordSymbol(chord,shouldPrintChordsDuration=false){return chordSymbol_default()({chordSymbol:chord.symbol,chordDuration:shouldPrintChordsDuration?symbols.chordBeat.repeat(chord.duration):false});}// EXTERNAL MODULE: ./src/renderer/components/tpl/barContent.hbs
var tpl_barContent=__nested_webpack_require_514049__(1110);var barContent_default=/*#__PURE__*/__nested_webpack_require_514049__.n(tpl_barContent);;// CONCATENATED MODULE: ./src/renderer/components/renderBarContent.js
const renderBarContent_space=' ';const defaultSpacesWithin=0;const defaultSpacesAfter=2;/**
 * @param {Bar} bar
 * @returns {String} rendered html
 */function renderBarContent(bar){let spacesWithin=0;let spacesAfter=0;const barContent=bar.allChords.reduce((rendering,chord)=>{spacesWithin=isFinite_default()(chord.spacesWithin)?chord.spacesWithin:defaultSpacesWithin;spacesAfter=isFinite_default()(chord.spacesAfter)?chord.spacesAfter:defaultSpacesAfter;rendering+=renderChordSymbol(chord,bar.shouldPrintChordsDuration)+renderBarContent_space.repeat(spacesWithin)+renderBarContent_space.repeat(spacesAfter);return rendering;},'');return barContent_default()({barContent});}// EXTERNAL MODULE: ./src/renderer/components/tpl/barSeparator.hbs
var tpl_barSeparator=__nested_webpack_require_514049__(3255);var barSeparator_default=/*#__PURE__*/__nested_webpack_require_514049__.n(tpl_barSeparator);;// CONCATENATED MODULE: ./src/renderer/components/renderChordLine.js
/**
 * @param {ChordLine} chordLineModel
 * @returns {String} rendered html
 */function renderChordLine(chordLineModel){const allBarsRendered=chordLineModel.allBars.map(bar=>renderBarContent(bar));const barSeparator=barSeparator_default()({barSeparator:symbols.barSeparator});const chordLine=barSeparator+allBarsRendered.join(barSeparator)+barSeparator;const chordLineOffset=symbols.chordLineOffsetSpacer.repeat(chordLineModel.offset||0);return chordLine_default()({chordLineOffset,chordLine});}// EXTERNAL MODULE: ./src/renderer/components/tpl/emptyLine.hbs
var emptyLine=__nested_webpack_require_514049__(1354);var emptyLine_default=/*#__PURE__*/__nested_webpack_require_514049__.n(emptyLine);;// CONCATENATED MODULE: ./src/renderer/components/renderEmptyLine.js
/**
 * @returns {String} rendered html
 */function render(){return emptyLine_default()();}// EXTERNAL MODULE: ./src/renderer/components/tpl/line.hbs
var tpl_line=__nested_webpack_require_514049__(3096);var line_default=/*#__PURE__*/__nested_webpack_require_514049__.n(tpl_line);;// CONCATENATED MODULE: ./src/renderer/components/renderLine.js
/**
 * @param {string} line
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @param {Boolean} isFromSectionCopy
 * @param {Boolean} isFromSectionMultiply
 * @returns {String} rendered html
 */function renderLine_render(line,{isFromAutoRepeatChords=false,isFromChordLineRepeater=false,isFromSectionCopy=false,isFromSectionMultiply=false}={}){const lineClasses=['cmLine'];if(isFromAutoRepeatChords){lineClasses.push('cmLine--isFromAutoRepeatChords');}if(isFromChordLineRepeater){lineClasses.push('cmLine--isFromChordLineRepeater');}if(isFromSectionCopy){lineClasses.push('cmLine--isFromSectionCopy');}if(isFromSectionMultiply){lineClasses.push('cmLine--isFromSectionMultiply');}return line_default()({line,lineClasses:lineClasses.join(' ')});}// EXTERNAL MODULE: ./src/renderer/components/tpl/sectionLabel.hbs
var sectionLabel=__nested_webpack_require_514049__(4273);var sectionLabel_default=/*#__PURE__*/__nested_webpack_require_514049__.n(sectionLabel);;// CONCATENATED MODULE: ./src/renderer/components/renderSectionLabel.js
const labelsMapping={a:'adlib',b:'bridge',c:'chorus',i:'intro',o:'outro',p:'pre-chorus',s:'solo',u:'interlude',v:'verse'};/**
 * @param {SongSectionLabelLine} sectionLabelLine
 * @param {Boolean} expandSectionMultiply
 * @param {Object} sectionsStats - key = section label, value = section count in song
 * @returns {String} rendered html
 */function renderSectionLabel(sectionLabelLine,{expandSectionMultiply=true,sectionsStats={}}={}){const{model,index,indexWithoutMultiply}=sectionLabelLine;const labelRaw=labelsMapping[model.label]?labelsMapping[model.label]:model.label;let rendered=labelRaw[0].toUpperCase()+labelRaw.substring(1);let multiplier;if(sectionsStats[model.label]>1){rendered+=' ';rendered+=expandSectionMultiply?index:indexWithoutMultiply;}if(!expandSectionMultiply&&model.multiplyTimes){multiplier='x'+model.multiplyTimes;}return sectionLabel_default()({sectionLabel:rendered,multiplier});}// EXTERNAL MODULE: ./src/renderer/components/tpl/lyricLine.hbs
var tpl_lyricLine=__nested_webpack_require_514049__(36);var lyricLine_default=/*#__PURE__*/__nested_webpack_require_514049__.n(tpl_lyricLine);;// CONCATENATED MODULE: ./src/renderer/components/renderLyricLine.js
/**
 * @param {SongLyricLine} lyricLine
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chartType
 * @returns {String} rendered html
 */function renderLyricLine_render(lyricLine,{alignChordsWithLyrics=false,chartType='all'}={}){const trimmedLyricLine=shouldTrimLine(alignChordsWithLyrics,chartType)?lyricLine.model.lyrics.trim():lyricLine.model.lyrics;return lyricLine_default()({lyricLine:trimmedLyricLine});}const shouldTrimLine=(alignChordsWithLyrics,chartType)=>!alignChordsWithLyrics||chartType==='lyrics';// EXTERNAL MODULE: ./src/renderer/components/tpl/timeSignature.hbs
var timeSignature=__nested_webpack_require_514049__(4604);var timeSignature_default=/*#__PURE__*/__nested_webpack_require_514049__.n(timeSignature);;// CONCATENATED MODULE: ./src/renderer/components/renderTimeSignature.js
/**
 * @param {SongTimeSignatureLine} timeSignatureLine
 * @returns {String} rendered html
 */function renderTimeSignature_render(timeSignatureLine){return timeSignature_default()({timeSignature:timeSignatureLine.string});}// EXTERNAL MODULE: ./src/renderer/components/tpl/song.hbs
var tpl_song=__nested_webpack_require_514049__(1196);var song_default=/*#__PURE__*/__nested_webpack_require_514049__.n(tpl_song);;// CONCATENATED MODULE: ./src/renderer/helpers/getChordSymbol.js
const defaultRenderChord=(0,chord_symbol.chordRendererFactory)();/**
 * @param {Chord|String} model
 * @param {Function} renderChord
 * @returns {string}
 */ /* harmony default export */function getChordSymbol(model,renderChord=defaultRenderChord){switch(model){case syntax.noChord:return symbols.noChordSymbol;case symbols.barRepeat:return symbols.barRepeat;default:return renderChord(model);}};// CONCATENATED MODULE: ./src/renderer/helpers/getSectionsStats.js
/**
 * Returns the number of usage of each section label
 *
 * @param {SongSectionLabelLine[]} allLines
 * @returns {Object} key = label, value = number of usage
 */function getSectionsStats(allLines){const stats={};allLines.filter(line=>line.type===parser_lineTypes.SECTION_LABEL).forEach(line=>{if(!stats[line.model.label]){stats[line.model.label]=1;}else{stats[line.model.label]++;}});return stats;};// CONCATENATED MODULE: ./src/renderer/helpers/getMainAccidental.js
/**
 * Returns the most used accidental of a song.
 *
 * @param {SongChord[]} allChords
 * @returns {('flat'|'sharp')}
 */function getMainAccidental(allChords){let rootNote='';let flatCount=0;let sharpCount=0;allChords.filter(chord=>chord.model!==syntax.noChord).forEach(chord=>{rootNote=chord.model.formatted.rootNote;if(rootNote.length===2){let accidental=rootNote[1];if(accidental==='b'){flatCount+=chord.occurrences;}else{sharpCount+=chord.occurrences;}}});return flatCount>sharpCount?'flat':'sharp';};// CONCATENATED MODULE: ./src/renderer/replaceRepeatedBars.js
const replaceRepeatedBars=(line,{alignChordsWithLyrics})=>{if(line.type===parser_lineTypes.CHORD){line.model.allBars.forEach(bar=>{if(shouldReplaceWithBarRepeat(line,bar,alignChordsWithLyrics)){bar.allChords=[{string:symbols.barRepeat,model:symbols.barRepeat,symbol:symbols.barRepeat,duration:bar.timeSignature.beatCount,beat:1}];bar.shouldPrintChordsDuration=false;}});}return line;};const shouldReplaceWithBarRepeat=(line,bar,alignChordsWithLyrics)=>{return bar.isRepeated&&!barHasMultiplePositionedChords(line,bar,alignChordsWithLyrics);};const barHasMultiplePositionedChords=(line,bar,alignChordsWithLyrics)=>{return alignChordsWithLyrics&&line.model.hasPositionedChords&&bar.allChords.length>1&&bar.allChords.some(chord=>chord.isPositioned);};/* harmony default export */const renderer_replaceRepeatedBars=replaceRepeatedBars;;// CONCATENATED MODULE: ./src/renderer/components/renderSong.js
/**
 * @param {Song} parsedSong
 * @param {Boolean} alignBars
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chartType
 * @param {Number} transposeValue
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} harmonizeAccidentals
 * @param {Boolean} expandSectionMultiply
 * @param {Boolean} expandSectionCopy
 * @param {Boolean} autoRepeatChords
 * @param {Boolean|('none'|'max'|'core')} simplifyChords
 * @param {Boolean} useShortNamings
 * @param {('never'|'uneven'|'always')} printChordsDuration
 * @param {Function|Boolean} customRenderer
 * @returns {String} rendered HTML
 */ // eslint-disable-next-line max-lines-per-function
function renderSong(parsedSong,{alignBars=true,alignChordsWithLyrics=true,chartType='all',transposeValue=0,accidentalsType='auto',harmonizeAccidentals=true,expandSectionMultiply=false,expandSectionCopy=true,autoRepeatChords=true,simplifyChords='none',useShortNamings=true,printChordsDuration='uneven',customRenderer=false}={}){let{allLines,allChords}=parsedSong;let isFirstLyricLineOfSection=false;allLines=renderChords().map(addPrintChordsDurationsFlag).filter(shouldRenderLine).map(line=>{return renderer_replaceRepeatedBars(line,{alignChordsWithLyrics});});const sectionsStats=getSectionsStats(allLines);const maxBeatsWidth=getMaxBeatsWidth(allLines,shouldAlignChords);allLines.forEach(spaceChordLine);if(customRenderer){return customRenderer(allLines,{});}else{const song=renderAllLines().join('');return song_default()({song});}function renderChords(){const accidental=accidentalsType==='auto'?getMainAccidental(allChords):accidentalsType;const renderChord=(0,chord_symbol.chordRendererFactory)({simplify:simplifyChords,useShortNamings,transposeValue,harmonizeAccidentals,useFlats:accidental==='flat'});return forEachChordInSong(allLines,chord=>{chord.symbol=getChordSymbol(chord.model,renderChord);});}function addPrintChordsDurationsFlag(line){if(line.type===parser_lineTypes.CHORD){line.model.allBars.forEach(bar=>{bar.shouldPrintChordsDuration=shouldPrintChordsDuration(bar);});}return line;}function shouldPrintChordsDuration(bar){return bar.allChords.length>1&&(printChordsDuration==='uneven'&&bar.hasUnevenChordsDurations||printChordsDuration==='always');}function shouldRenderLine(line){return shouldRepeatLines(line)&&!isFiltered(line);}function shouldRepeatLines(line){const shouldSkipAutoRepeatChordLine=line.isFromAutoRepeatChords&&!autoRepeatChords;const shouldSkipSectionMultiplyLine=line.isFromSectionMultiply&&!expandSectionMultiply;const shouldSkipSectionCopyLine=line.type!==parser_lineTypes.SECTION_LABEL&&line.isFromSectionCopy&&!expandSectionCopy;return!shouldSkipSectionMultiplyLine&&!shouldSkipAutoRepeatChordLine&&!shouldSkipSectionCopyLine;}function isFiltered(line){if(chartType==='chordsFirstLyricLine'){if(line.type===parser_lineTypes.SECTION_LABEL){isFirstLyricLineOfSection=true;return false;}if(isFirstLyricLineOfSection&&line.type===parser_lineTypes.LYRIC){isFirstLyricLineOfSection=false;return false;}}return['chords','chordsFirstLyricLine'].includes(chartType)&&line.type===parser_lineTypes.LYRIC||chartType==='lyrics'&&line.type===parser_lineTypes.CHORD;}function spaceChordLine(line,lineIndex){if(line.type===parser_lineTypes.CHORD){let spaced=alignBars&&!shouldAlignChords(line)?aligned_space(line.model,maxBeatsWidth):space(line.model);const nextLine=allLines[lineIndex+1];if(shouldAlignChords(line)){const{chordLine,lyricsLine}=chordLyrics_space(spaced,nextLine.model);allLines[lineIndex+1].model=lyricsLine;spaced=chordLine;}allLines[lineIndex].model=spaced;}}function renderAllLines(){return allLines.map(line=>{let rendered;if(line.type===parser_lineTypes.CHORD){rendered=renderChordLine(line.model);}else if(line.type===parser_lineTypes.EMPTY_LINE){rendered=render();}else if(line.type===parser_lineTypes.SECTION_LABEL){rendered=renderSectionLabel(line,{sectionsStats,expandSectionMultiply});}else if(line.type===parser_lineTypes.TIME_SIGNATURE){rendered=renderTimeSignature_render(line);}else{rendered=renderLyricLine_render(line,{alignChordsWithLyrics,chartType});}return renderLine_render(rendered,{isFromSectionMultiply:line.isFromSectionMultiply,isFromAutoRepeatChords:line.isFromAutoRepeatChords,isFromChordLineRepeater:line.isFromChordLineRepeater,isFromSectionCopy:line.isFromSectionCopy});}).filter(Boolean);}function shouldAlignChords(line){return chartType==='all'&&alignChordsWithLyrics&&line.model.hasPositionedChords;}};// CONCATENATED MODULE: ./src/chordMark.js
})();/******/return __webpack_exports__;/******/})());});//# sourceMappingURL=chord-mark.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chord_mark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(681);
/* harmony import */ var chord_mark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chord_mark__WEBPACK_IMPORTED_MODULE_0__);


const chordMark2ChordPro = allLines => {
  const chordProLines = [];
  let currentLabel;
  allLines.forEach((line, index) => {
    switch (line.type) {
      case chord_mark__WEBPACK_IMPORTED_MODULE_0__.lineTypes.SECTION_LABEL:
        addLabel(line);
        break;

      case chord_mark__WEBPACK_IMPORTED_MODULE_0__.lineTypes.CHORD:
        addChordLine(line);
        break;

      case chord_mark__WEBPACK_IMPORTED_MODULE_0__.lineTypes.LYRIC:
        addLyricLine(line, index);
        break;

      case chord_mark__WEBPACK_IMPORTED_MODULE_0__.lineTypes.EMPTY_LINE:
        chordProLines.push('');
        break;
    }
  });

  if (currentLabel) {
    chordProLines.push(getEndSectionDirective(currentLabel));
  }
  /**
   * @param {SongSectionLabelLine} line
   */


  function addLabel(line) {
    if (currentLabel) {
      const endLine = getEndSectionDirective(currentLabel);
      const lastNonEmptyLineIndex = findLastIndex(chordProLines, i => i !== '');
      chordProLines.splice(lastNonEmptyLineIndex + 1, 0, endLine);
    }

    currentLabel = { ...line
    };
    chordProLines.push(getOpenSectionDirective(line));
  }

  function getOpenSectionDirective(line) {
    return getEnvironmentDirective(line, 'start');
  }

  function getEndSectionDirective(line) {
    return getEnvironmentDirective(line, 'end');
  }

  function getEnvironmentDirective(line, startEnd) {
    let sectionName;

    switch (line.model.label) {
      case 'b':
        sectionName = 'bridge' + getSectionTitle(line, startEnd, 'Bridge');
        break;

      case 'c':
        sectionName = 'chorus' + getSectionTitle(line, startEnd, 'Chorus');
        break;

      default:
      case 'v':
        sectionName = 'verse' + getSectionTitle(line, startEnd, 'Verse');
        break;
    }

    return `{${startEnd}_of_${sectionName}}`;
  }

  function getSectionTitle(line, startEnd, title) {
    return startEnd === 'start' ? `: ${title} ${line.indexWithoutMultiply}` : '';
  }
  /**
   * @param {SongChordLine} line
   */


  function addChordLine(line) {
    if (line.model.hasPositionedChords) return;
    let chordLine = '';
    line.model.allBars.map(bar => {
      chordLine += '| ';
      bar.allChords.map(chord => {
        chordLine += chord.symbol + ' '.repeat((chord.spacesWithin || 0) + (chord.spacesAfter || 0));
      });
    });
    chordLine += '|';
    chordProLines.push(chordLine.trim());
  }
  /**
   * @param {SongLyricLine} line
   * @param {Number} index
   */


  function addLyricLine(line, index) {
    let lyrics = line.string;

    if (line.model.chordPositions.length && index > 0) {
      const chordLine = allLines[index - 1];

      if (chordLine.type === chord_mark__WEBPACK_IMPORTED_MODULE_0__.lineTypes.CHORD) {
        const allSymbols = [];
        chordLine.model.allBars.map(bar => {
          bar.allChords.map(chord => {
            allSymbols.push('[' + chord.symbol + ']');
          });
        });
        let previousSymbol = '';

        while (allSymbols.length) {
          let inlineSymbol = allSymbols.shift();

          if (lyrics.indexOf('_') !== -1) {
            const replaceString = ![previousSymbol, '[%]'].includes(inlineSymbol) ? inlineSymbol : '';
            lyrics = lyrics.replace('_', replaceString);
          } else {
            lyrics += ' ' + inlineSymbol;
          }

          previousSymbol = inlineSymbol;
        } // remove extra position markers


        lyrics = lyrics.replace(/_/g, '');
      }
    }

    chordProLines.push(lyrics.trim());
  }

  return chordProLines.join('\n');
}; // https://stackoverflow.com/a/40929530


function findLastIndex(array, fn) {
  const index = array.slice().reverse().findIndex(x => fn(x));
  const maxIndex = array.length - 1;
  return index >= 0 ? maxIndex - index : index;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chordMark2ChordPro);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=chord-mark-2-chordpro.js.map