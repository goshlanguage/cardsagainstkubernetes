(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=o(s);fetch(s.href,u)}})();function ho(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var eu={exports:{}},ye={};var _p;function Ky(){if(_p)return ye;_p=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(_){return _===null||typeof _!="object"?null:(_=y&&_[y]||_["@@iterator"],typeof _=="function"?_:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,R={};function T(_,b,ue){this.props=_,this.context=b,this.refs=R,this.updater=ue||x}T.prototype.isReactComponent={},T.prototype.setState=function(_,b){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,b,"setState")},T.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function M(){}M.prototype=T.prototype;function P(_,b,ue){this.props=_,this.context=b,this.refs=R,this.updater=ue||x}var W=P.prototype=new M;W.constructor=P,I(W,T.prototype),W.isPureReactComponent=!0;var H=Array.isArray,j=Object.prototype.hasOwnProperty,Q={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function re(_,b,ue){var ce,pe={},ge=null,Ae=null;if(b!=null)for(ce in b.ref!==void 0&&(Ae=b.ref),b.key!==void 0&&(ge=""+b.key),b)j.call(b,ce)&&!ee.hasOwnProperty(ce)&&(pe[ce]=b[ce]);var we=arguments.length-2;if(we===1)pe.children=ue;else if(1<we){for(var Te=Array(we),rn=0;rn<we;rn++)Te[rn]=arguments[rn+2];pe.children=Te}if(_&&_.defaultProps)for(ce in we=_.defaultProps,we)pe[ce]===void 0&&(pe[ce]=we[ce]);return{$$typeof:n,type:_,key:ge,ref:Ae,props:pe,_owner:Q.current}}function de(_,b){return{$$typeof:n,type:_.type,key:b,ref:_.ref,props:_.props,_owner:_._owner}}function ve(_){return typeof _=="object"&&_!==null&&_.$$typeof===n}function ae(_){var b={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(ue){return b[ue]})}var se=/\/+/g;function V(_,b){return typeof _=="object"&&_!==null&&_.key!=null?ae(""+_.key):b.toString(36)}function fe(_,b,ue,ce,pe){var ge=typeof _;(ge==="undefined"||ge==="boolean")&&(_=null);var Ae=!1;if(_===null)Ae=!0;else switch(ge){case"string":case"number":Ae=!0;break;case"object":switch(_.$$typeof){case n:case r:Ae=!0}}if(Ae)return Ae=_,pe=pe(Ae),_=ce===""?"."+V(Ae,0):ce,H(pe)?(ue="",_!=null&&(ue=_.replace(se,"$&/")+"/"),fe(pe,b,ue,"",function(rn){return rn})):pe!=null&&(ve(pe)&&(pe=de(pe,ue+(!pe.key||Ae&&Ae.key===pe.key?"":(""+pe.key).replace(se,"$&/")+"/")+_)),b.push(pe)),1;if(Ae=0,ce=ce===""?".":ce+":",H(_))for(var we=0;we<_.length;we++){ge=_[we];var Te=ce+V(ge,we);Ae+=fe(ge,b,ue,Te,pe)}else if(Te=S(_),typeof Te=="function")for(_=Te.call(_),we=0;!(ge=_.next()).done;)ge=ge.value,Te=ce+V(ge,we++),Ae+=fe(ge,b,ue,Te,pe);else if(ge==="object")throw b=String(_),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return Ae}function Oe(_,b,ue){if(_==null)return _;var ce=[],pe=0;return fe(_,ce,"","",function(ge){return b.call(ue,ge,pe++)}),ce}function Se(_){if(_._status===-1){var b=_._result;b=b(),b.then(function(ue){(_._status===0||_._status===-1)&&(_._status=1,_._result=ue)},function(ue){(_._status===0||_._status===-1)&&(_._status=2,_._result=ue)}),_._status===-1&&(_._status=0,_._result=b)}if(_._status===1)return _._result.default;throw _._result}var he={current:null},Y={transition:null},X={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Y,ReactCurrentOwner:Q};function B(){throw Error("act(...) is not supported in production builds of React.")}return ye.Children={map:Oe,forEach:function(_,b,ue){Oe(_,function(){b.apply(this,arguments)},ue)},count:function(_){var b=0;return Oe(_,function(){b++}),b},toArray:function(_){return Oe(_,function(b){return b})||[]},only:function(_){if(!ve(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},ye.Component=T,ye.Fragment=o,ye.Profiler=s,ye.PureComponent=P,ye.StrictMode=a,ye.Suspense=m,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ye.act=B,ye.cloneElement=function(_,b,ue){if(_==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var ce=I({},_.props),pe=_.key,ge=_.ref,Ae=_._owner;if(b!=null){if(b.ref!==void 0&&(ge=b.ref,Ae=Q.current),b.key!==void 0&&(pe=""+b.key),_.type&&_.type.defaultProps)var we=_.type.defaultProps;for(Te in b)j.call(b,Te)&&!ee.hasOwnProperty(Te)&&(ce[Te]=b[Te]===void 0&&we!==void 0?we[Te]:b[Te])}var Te=arguments.length-2;if(Te===1)ce.children=ue;else if(1<Te){we=Array(Te);for(var rn=0;rn<Te;rn++)we[rn]=arguments[rn+2];ce.children=we}return{$$typeof:n,type:_.type,key:pe,ref:ge,props:ce,_owner:Ae}},ye.createContext=function(_){return _={$$typeof:f,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},_.Provider={$$typeof:u,_context:_},_.Consumer=_},ye.createElement=re,ye.createFactory=function(_){var b=re.bind(null,_);return b.type=_,b},ye.createRef=function(){return{current:null}},ye.forwardRef=function(_){return{$$typeof:p,render:_}},ye.isValidElement=ve,ye.lazy=function(_){return{$$typeof:g,_payload:{_status:-1,_result:_},_init:Se}},ye.memo=function(_,b){return{$$typeof:v,type:_,compare:b===void 0?null:b}},ye.startTransition=function(_){var b=Y.transition;Y.transition={};try{_()}finally{Y.transition=b}},ye.unstable_act=B,ye.useCallback=function(_,b){return he.current.useCallback(_,b)},ye.useContext=function(_){return he.current.useContext(_)},ye.useDebugValue=function(){},ye.useDeferredValue=function(_){return he.current.useDeferredValue(_)},ye.useEffect=function(_,b){return he.current.useEffect(_,b)},ye.useId=function(){return he.current.useId()},ye.useImperativeHandle=function(_,b,ue){return he.current.useImperativeHandle(_,b,ue)},ye.useInsertionEffect=function(_,b){return he.current.useInsertionEffect(_,b)},ye.useLayoutEffect=function(_,b){return he.current.useLayoutEffect(_,b)},ye.useMemo=function(_,b){return he.current.useMemo(_,b)},ye.useReducer=function(_,b,ue){return he.current.useReducer(_,b,ue)},ye.useRef=function(_){return he.current.useRef(_)},ye.useState=function(_){return he.current.useState(_)},ye.useSyncExternalStore=function(_,b,ue){return he.current.useSyncExternalStore(_,b,ue)},ye.useTransition=function(){return he.current.useTransition()},ye.version="18.3.1",ye}var Ap;function ec(){return Ap||(Ap=1,eu.exports=Ky()),eu.exports}var k=ec();const gn=ho(k);var La={},nu={exports:{}},pn={},tu={exports:{}},ru={};var kp;function Gy(){return kp||(kp=1,(function(n){function r(Y,X){var B=Y.length;Y.push(X);e:for(;0<B;){var _=B-1>>>1,b=Y[_];if(0<s(b,X))Y[_]=X,Y[B]=b,B=_;else break e}}function o(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var X=Y[0],B=Y.pop();if(B!==X){Y[0]=B;e:for(var _=0,b=Y.length,ue=b>>>1;_<ue;){var ce=2*(_+1)-1,pe=Y[ce],ge=ce+1,Ae=Y[ge];if(0>s(pe,B))ge<b&&0>s(Ae,pe)?(Y[_]=Ae,Y[ge]=B,_=ge):(Y[_]=pe,Y[ce]=B,_=ce);else if(ge<b&&0>s(Ae,B))Y[_]=Ae,Y[ge]=B,_=ge;else break e}}return X}function s(Y,X){var B=Y.sortIndex-X.sortIndex;return B!==0?B:Y.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var m=[],v=[],g=1,y=null,S=3,x=!1,I=!1,R=!1,T=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(Y){for(var X=o(v);X!==null;){if(X.callback===null)a(v);else if(X.startTime<=Y)a(v),X.sortIndex=X.expirationTime,r(m,X);else break;X=o(v)}}function H(Y){if(R=!1,W(Y),!I)if(o(m)!==null)I=!0,Se(j);else{var X=o(v);X!==null&&he(H,X.startTime-Y)}}function j(Y,X){I=!1,R&&(R=!1,M(re),re=-1),x=!0;var B=S;try{for(W(X),y=o(m);y!==null&&(!(y.expirationTime>X)||Y&&!ae());){var _=y.callback;if(typeof _=="function"){y.callback=null,S=y.priorityLevel;var b=_(y.expirationTime<=X);X=n.unstable_now(),typeof b=="function"?y.callback=b:y===o(m)&&a(m),W(X)}else a(m);y=o(m)}if(y!==null)var ue=!0;else{var ce=o(v);ce!==null&&he(H,ce.startTime-X),ue=!1}return ue}finally{y=null,S=B,x=!1}}var Q=!1,ee=null,re=-1,de=5,ve=-1;function ae(){return!(n.unstable_now()-ve<de)}function se(){if(ee!==null){var Y=n.unstable_now();ve=Y;var X=!0;try{X=ee(!0,Y)}finally{X?V():(Q=!1,ee=null)}}else Q=!1}var V;if(typeof P=="function")V=function(){P(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Oe=fe.port2;fe.port1.onmessage=se,V=function(){Oe.postMessage(null)}}else V=function(){T(se,0)};function Se(Y){ee=Y,Q||(Q=!0,V())}function he(Y,X){re=T(function(){Y(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){I||x||(I=!0,Se(j))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return o(m)},n.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var B=S;S=X;try{return Y()}finally{S=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,X){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var B=S;S=Y;try{return X()}finally{S=B}},n.unstable_scheduleCallback=function(Y,X,B){var _=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?_+B:_):B=_,Y){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=B+b,Y={id:g++,callback:X,priorityLevel:Y,startTime:B,expirationTime:b,sortIndex:-1},B>_?(Y.sortIndex=B,r(v,Y),o(m)===null&&Y===o(v)&&(R?(M(re),re=-1):R=!0,he(H,B-_))):(Y.sortIndex=b,r(m,Y),I||x||(I=!0,Se(j))),Y},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(Y){var X=S;return function(){var B=S;S=X;try{return Y.apply(this,arguments)}finally{S=B}}}})(ru)),ru}var Op;function qy(){return Op||(Op=1,tu.exports=Gy()),tu.exports}var Tp;function Qy(){if(Tp)return pn;Tp=1;var n=ec(),r=qy();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function S(e){return m.call(y,e)?!0:m.call(g,e)?!1:v.test(e)?y[e]=!0:(g[e]=!0,!1)}function x(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,i,l){if(t===null||typeof t>"u"||x(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,i,l,c,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function P(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,P);T[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,P);T[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,P);T[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,i,l){var c=T.hasOwnProperty(t)?T[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,i,c,l)&&(i=null),l||c===null?S(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var H=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),Q=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),ae=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),Y=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,_;function b(e){if(_===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);_=t&&t[1]||""}return`
`+_+e}var ue=!1;function ce(e,t){if(!e||ue)return"";ue=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(N){var l=N}Reflect.construct(e,[],t)}else{try{t.call()}catch(N){l=N}e.call(t.prototype)}else{try{throw Error()}catch(N){l=N}e()}}catch(N){if(N&&l&&typeof N.stack=="string"){for(var c=N.stack.split(`
`),d=l.stack.split(`
`),h=c.length-1,w=d.length-1;1<=h&&0<=w&&c[h]!==d[w];)w--;for(;1<=h&&0<=w;h--,w--)if(c[h]!==d[w]){if(h!==1||w!==1)do if(h--,w--,0>w||c[h]!==d[w]){var E=`
`+c[h].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=h&&0<=w);break}}}finally{ue=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?b(e):""}function pe(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function ge(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case Q:return"Portal";case de:return"Profiler";case re:return"StrictMode";case V:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}function Ae(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(t);case 8:return t===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rn(e){var t=Te(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(h){l=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(h){l=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vt(e){e._valueTracker||(e._valueTracker=rn(e))}function _o(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=Te(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function Yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var i=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ao(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=we(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function oi(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function dr(e,t){oi(e,t);var i=we(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,i):t.hasOwnProperty("defaultValue")&&ai(e,t.type,we(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ko(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ai(e,t,i){(t!=="number"||Yt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var yn=Array.isArray;function Ln(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+we(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function pr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function li(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(yn(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:we(i)}}function mr(e,t){var i=we(t.value),l=we(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function si(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ui(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ui(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vt,Mc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vt=Vt||document.createElement("div"),Vt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ci(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xg=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Xg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function jc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=jc(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var Jg=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dl(e,t){if(t){if(Jg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,vr=null,gr=null;function zc(e){if(e=bi(e)){if(typeof vl!="function")throw Error(o(280));var t=e.stateNode;t&&(t=qo(t),vl(e.stateNode,e.type,t))}}function $c(e){vr?gr?gr.push(e):gr=[e]:vr=e}function Bc(){if(vr){var e=vr,t=gr;if(gr=vr=null,zc(e),t)for(e=0;e<t.length;e++)zc(t[e])}}function Wc(e,t){return e(t)}function Hc(){}var gl=!1;function Yc(e,t,i){if(gl)return e(t,i);gl=!0;try{return Wc(e,t,i)}finally{gl=!1,(vr!==null||gr!==null)&&(Hc(),Bc())}}function di(e,t){var i=e.stateNode;if(i===null)return null;var l=qo(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var yl=!1;if(p)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){yl=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{yl=!1}function Zg(e,t,i,l,c,d,h,w,E){var N=Array.prototype.slice.call(arguments,3);try{t.apply(i,N)}catch(F){this.onError(F)}}var mi=!1,Oo=null,To=!1,wl=null,e0={onError:function(e){mi=!0,Oo=e}};function n0(e,t,i,l,c,d,h,w,E){mi=!1,Oo=null,Zg.apply(e0,arguments)}function t0(e,t,i,l,c,d,h,w,E){if(n0.apply(this,arguments),mi){if(mi){var N=Oo;mi=!1,Oo=null}else throw Error(o(198));To||(To=!0,wl=N)}}function Kt(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kc(e){if(Kt(e)!==e)throw Error(o(188))}function r0(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return Kc(c),e;if(d===l)return Kc(c),t;d=d.sibling}throw Error(o(188))}if(i.return!==l.return)i=c,l=d;else{for(var h=!1,w=c.child;w;){if(w===i){h=!0,i=c,l=d;break}if(w===l){h=!0,l=c,i=d;break}w=w.sibling}if(!h){for(w=d.child;w;){if(w===i){h=!0,i=d,l=c;break}if(w===l){h=!0,l=d,i=c;break}w=w.sibling}if(!h)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function Gc(e){return e=r0(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var Qc=r.unstable_scheduleCallback,Xc=r.unstable_cancelCallback,i0=r.unstable_shouldYield,o0=r.unstable_requestPaint,Me=r.unstable_now,a0=r.unstable_getCurrentPriorityLevel,El=r.unstable_ImmediatePriority,Jc=r.unstable_UserBlockingPriority,No=r.unstable_NormalPriority,l0=r.unstable_LowPriority,Zc=r.unstable_IdlePriority,Ro=null,Hn=null;function s0(e){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:f0,u0=Math.log,c0=Math.LN2;function f0(e){return e>>>=0,e===0?32:31-(u0(e)/c0|0)|0}var Io=64,Po=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,d=e.pingedLanes,h=i&268435455;if(h!==0){var w=h&~c;w!==0?l=hi(w):(d&=h,d!==0&&(l=hi(d)))}else h=i&~c,h!==0?l=hi(h):d!==0&&(l=hi(d));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-Dn(t),c=1<<i,l|=e[i],t&=~c;return l}function d0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p0(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Dn(d),w=1<<h,E=c[h];E===-1?((w&i)===0||(w&l)!==0)&&(c[h]=d0(w,t)):E<=t&&(e.expiredLanes|=w),d&=~w}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ef(){var e=Io;return Io<<=1,(Io&4194240)===0&&(Io=64),e}function Cl(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function vi(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dn(t),e[t]=i}function m0(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-Dn(i),d=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~d}}function xl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-Dn(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var ke=0;function nf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var tf,_l,rf,of,af,Al=!1,Lo=[],gt=null,yt=null,wt=null,gi=new Map,yi=new Map,Et=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function wi(e,t,i,l,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:d,targetContainers:[c]},t!==null&&(t=bi(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function v0(e,t,i,l,c){switch(t){case"focusin":return gt=wi(gt,e,t,i,l,c),!0;case"dragenter":return yt=wi(yt,e,t,i,l,c),!0;case"mouseover":return wt=wi(wt,e,t,i,l,c),!0;case"pointerover":var d=c.pointerId;return gi.set(d,wi(gi.get(d)||null,e,t,i,l,c)),!0;case"gotpointercapture":return d=c.pointerId,yi.set(d,wi(yi.get(d)||null,e,t,i,l,c)),!0}return!1}function sf(e){var t=Gt(e.target);if(t!==null){var i=Kt(t);if(i!==null){if(t=i.tag,t===13){if(t=Vc(i),t!==null){e.blockedOn=t,af(e.priority,function(){rf(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);ml=l,i.target.dispatchEvent(l),ml=null}else return t=bi(i),t!==null&&_l(t),e.blockedOn=i,!1;t.shift()}return!0}function uf(e,t,i){Do(e)&&i.delete(t)}function g0(){Al=!1,gt!==null&&Do(gt)&&(gt=null),yt!==null&&Do(yt)&&(yt=null),wt!==null&&Do(wt)&&(wt=null),gi.forEach(uf),yi.forEach(uf)}function Ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Al||(Al=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,g0)))}function Si(e){function t(c){return Ei(c,e)}if(0<Lo.length){Ei(Lo[0],e);for(var i=1;i<Lo.length;i++){var l=Lo[i];l.blockedOn===e&&(l.blockedOn=null)}}for(gt!==null&&Ei(gt,e),yt!==null&&Ei(yt,e),wt!==null&&Ei(wt,e),gi.forEach(t),yi.forEach(t),i=0;i<Et.length;i++)l=Et[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Et.length&&(i=Et[0],i.blockedOn===null);)sf(i),i.blockedOn===null&&Et.shift()}var yr=H.ReactCurrentBatchConfig,Fo=!0;function y0(e,t,i,l){var c=ke,d=yr.transition;yr.transition=null;try{ke=1,kl(e,t,i,l)}finally{ke=c,yr.transition=d}}function w0(e,t,i,l){var c=ke,d=yr.transition;yr.transition=null;try{ke=4,kl(e,t,i,l)}finally{ke=c,yr.transition=d}}function kl(e,t,i,l){if(Fo){var c=Ol(e,t,i,l);if(c===null)Hl(e,t,l,Mo,i),lf(e,l);else if(v0(c,e,t,i,l))l.stopPropagation();else if(lf(e,l),t&4&&-1<h0.indexOf(e)){for(;c!==null;){var d=bi(c);if(d!==null&&tf(d),d=Ol(e,t,i,l),d===null&&Hl(e,t,l,Mo,i),d===c)break;c=d}c!==null&&l.stopPropagation()}else Hl(e,t,l,null,i)}}var Mo=null;function Ol(e,t,i,l){if(Mo=null,e=hl(l),e=Gt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Vc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function cf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case El:return 1;case Jc:return 4;case No:case l0:return 16;case Zc:return 536870912;default:return 16}default:return 16}}var St=null,Tl=null,jo=null;function ff(){if(jo)return jo;var e,t=Tl,i=t.length,l,c="value"in St?St.value:St.textContent,d=c.length;for(e=0;e<i&&t[e]===c[e];e++);var h=i-e;for(l=1;l<=h&&t[i-l]===c[d-l];l++);return jo=c.slice(e,1<l?1-l:void 0)}function Uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function df(){return!1}function wn(e){function t(i,l,c,d,h){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(i=e[w],this[w]=i?i(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?zo:df,this.isPropagationStopped=df,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=wn(wr),Ci=B({},wr,{view:0,detail:0}),E0=wn(Ci),Rl,Il,xi,$o=B({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Rl=e.screenX-xi.screenX,Il=e.screenY-xi.screenY):Il=Rl=0,xi=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),pf=wn($o),S0=B({},$o,{dataTransfer:0}),C0=wn(S0),x0=B({},Ci,{relatedTarget:0}),Pl=wn(x0),_0=B({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=wn(_0),k0=B({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=wn(k0),T0=B({},wr,{data:0}),mf=wn(T0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I0[e])?!!t[e]:!1}function bl(){return P0}var b0=B({},Ci,{key:function(e){if(e.key){var t=N0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L0=wn(b0),D0=B({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hf=wn(D0),F0=B({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),M0=wn(F0),j0=B({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),U0=wn(j0),z0=B({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=wn(z0),B0=[9,13,27,32],Ll=p&&"CompositionEvent"in window,_i=null;p&&"documentMode"in document&&(_i=document.documentMode);var W0=p&&"TextEvent"in window&&!_i,vf=p&&(!Ll||_i&&8<_i&&11>=_i),gf=" ",yf=!1;function wf(e,t){switch(e){case"keyup":return B0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function H0(e,t){switch(e){case"compositionend":return Ef(t);case"keypress":return t.which!==32?null:(yf=!0,gf);case"textInput":return e=t.data,e===gf&&yf?null:e;default:return null}}function Y0(e,t){if(Er)return e==="compositionend"||!Ll&&wf(e,t)?(e=ff(),jo=Tl=St=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vf&&t.locale!=="ko"?null:t.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V0[e.type]:t==="textarea"}function Cf(e,t,i,l){$c(l),t=Vo(t,"onChange"),0<t.length&&(i=new Nl("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var Ai=null,ki=null;function K0(e){zf(e,0)}function Bo(e){var t=Ar(e);if(_o(t))return e}function G0(e,t){if(e==="change")return t}var xf=!1;if(p){var Dl;if(p){var Fl="oninput"in document;if(!Fl){var _f=document.createElement("div");_f.setAttribute("oninput","return;"),Fl=typeof _f.oninput=="function"}Dl=Fl}else Dl=!1;xf=Dl&&(!document.documentMode||9<document.documentMode)}function Af(){Ai&&(Ai.detachEvent("onpropertychange",kf),ki=Ai=null)}function kf(e){if(e.propertyName==="value"&&Bo(ki)){var t=[];Cf(t,ki,e,hl(e)),Yc(K0,t)}}function q0(e,t,i){e==="focusin"?(Af(),Ai=t,ki=i,Ai.attachEvent("onpropertychange",kf)):e==="focusout"&&Af()}function Q0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(ki)}function X0(e,t){if(e==="click")return Bo(t)}function J0(e,t){if(e==="input"||e==="change")return Bo(t)}function Z0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:Z0;function Oi(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!m.call(t,c)||!Fn(e[c],t[c]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tf(e,t){var i=Of(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Of(i)}}function Nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rf(){for(var e=window,t=Yt();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Yt(e.document)}return t}function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ey(e){var t=Rf(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Nf(i.ownerDocument.documentElement,i)){if(l!==null&&Ml(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,d=Math.min(l.start,c);l=l.end===void 0?d:Math.min(l.end,c),!e.extend&&d>l&&(c=l,l=d,d=c),c=Tf(i,d);var h=Tf(i,l);c&&h&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>l?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ny=p&&"documentMode"in document&&11>=document.documentMode,Sr=null,jl=null,Ti=null,Ul=!1;function If(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ul||Sr==null||Sr!==Yt(l)||(l=Sr,"selectionStart"in l&&Ml(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ti&&Oi(Ti,l)||(Ti=l,l=Vo(jl,"onSelect"),0<l.length&&(t=new Nl("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Sr)))}function Wo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Cr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},zl={},Pf={};p&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Ho(e){if(zl[e])return zl[e];if(!Cr[e])return e;var t=Cr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Pf)return zl[e]=t[i];return e}var bf=Ho("animationend"),Lf=Ho("animationiteration"),Df=Ho("animationstart"),Ff=Ho("transitionend"),Mf=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Mf.set(e,t),u(t,[e])}for(var $l=0;$l<jf.length;$l++){var Bl=jf[$l],ty=Bl.toLowerCase(),ry=Bl[0].toUpperCase()+Bl.slice(1);Ct(ty,"on"+ry)}Ct(bf,"onAnimationEnd"),Ct(Lf,"onAnimationIteration"),Ct(Df,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(Ff,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function Uf(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,t0(l,t,void 0,e),e.currentTarget=null}function zf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var d=void 0;if(t)for(var h=l.length-1;0<=h;h--){var w=l[h],E=w.instance,N=w.currentTarget;if(w=w.listener,E!==d&&c.isPropagationStopped())break e;Uf(c,w,N),d=E}else for(h=0;h<l.length;h++){if(w=l[h],E=w.instance,N=w.currentTarget,w=w.listener,E!==d&&c.isPropagationStopped())break e;Uf(c,w,N),d=E}}}if(To)throw e=wl,To=!1,wl=null,e}function Re(e,t){var i=t[Ql];i===void 0&&(i=t[Ql]=new Set);var l=e+"__bubble";i.has(l)||($f(t,e,2,!1),i.add(l))}function Wl(e,t,i){var l=0;t&&(l|=4),$f(i,e,l,t)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[Yo]){e[Yo]=!0,a.forEach(function(i){i!=="selectionchange"&&(iy.has(i)||Wl(i,!1,e),Wl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yo]||(t[Yo]=!0,Wl("selectionchange",!1,t))}}function $f(e,t,i,l){switch(cf(t)){case 1:var c=y0;break;case 4:c=w0;break;default:c=kl}i=c.bind(null,t,i,e),c=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Hl(e,t,i,l,c){var d=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var w=l.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(h===4)for(h=l.return;h!==null;){var E=h.tag;if((E===3||E===4)&&(E=h.stateNode.containerInfo,E===c||E.nodeType===8&&E.parentNode===c))return;h=h.return}for(;w!==null;){if(h=Gt(w),h===null)return;if(E=h.tag,E===5||E===6){l=d=h;continue e}w=w.parentNode}}l=l.return}Yc(function(){var N=d,F=hl(i),U=[];e:{var D=Mf.get(e);if(D!==void 0){var K=Nl,q=e;switch(e){case"keypress":if(Uo(i)===0)break e;case"keydown":case"keyup":K=L0;break;case"focusin":q="focus",K=Pl;break;case"focusout":q="blur",K=Pl;break;case"beforeblur":case"afterblur":K=Pl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=M0;break;case bf:case Lf:case Df:K=A0;break;case Ff:K=U0;break;case"scroll":K=E0;break;case"wheel":K=$0;break;case"copy":case"cut":case"paste":K=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=hf}var J=(t&4)!==0,je=!J&&e==="scroll",A=J?D!==null?D+"Capture":null:D;J=[];for(var C=N,O;C!==null;){O=C;var $=O.stateNode;if(O.tag===5&&$!==null&&(O=$,A!==null&&($=di(C,A),$!=null&&J.push(Ii(C,$,O)))),je)break;C=C.return}0<J.length&&(D=new K(D,q,null,i,F),U.push({event:D,listeners:J}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",D&&i!==ml&&(q=i.relatedTarget||i.fromElement)&&(Gt(q)||q[et]))break e;if((K||D)&&(D=F.window===F?F:(D=F.ownerDocument)?D.defaultView||D.parentWindow:window,K?(q=i.relatedTarget||i.toElement,K=N,q=q?Gt(q):null,q!==null&&(je=Kt(q),q!==je||q.tag!==5&&q.tag!==6)&&(q=null)):(K=null,q=N),K!==q)){if(J=pf,$="onMouseLeave",A="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(J=hf,$="onPointerLeave",A="onPointerEnter",C="pointer"),je=K==null?D:Ar(K),O=q==null?D:Ar(q),D=new J($,C+"leave",K,i,F),D.target=je,D.relatedTarget=O,$=null,Gt(F)===N&&(J=new J(A,C+"enter",q,i,F),J.target=O,J.relatedTarget=je,$=J),je=$,K&&q)n:{for(J=K,A=q,C=0,O=J;O;O=xr(O))C++;for(O=0,$=A;$;$=xr($))O++;for(;0<C-O;)J=xr(J),C--;for(;0<O-C;)A=xr(A),O--;for(;C--;){if(J===A||A!==null&&J===A.alternate)break n;J=xr(J),A=xr(A)}J=null}else J=null;K!==null&&Bf(U,D,K,J,!1),q!==null&&je!==null&&Bf(U,je,q,J,!0)}}e:{if(D=N?Ar(N):window,K=D.nodeName&&D.nodeName.toLowerCase(),K==="select"||K==="input"&&D.type==="file")var Z=G0;else if(Sf(D))if(xf)Z=J0;else{Z=Q0;var ie=q0}else(K=D.nodeName)&&K.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(Z=X0);if(Z&&(Z=Z(e,N))){Cf(U,Z,i,F);break e}ie&&ie(e,D,N),e==="focusout"&&(ie=D._wrapperState)&&ie.controlled&&D.type==="number"&&ai(D,"number",D.value)}switch(ie=N?Ar(N):window,e){case"focusin":(Sf(ie)||ie.contentEditable==="true")&&(Sr=ie,jl=N,Ti=null);break;case"focusout":Ti=jl=Sr=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,If(U,i,F);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":If(U,i,F)}var oe;if(Ll)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Er?wf(e,i)&&(le="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(le="onCompositionStart");le&&(vf&&i.locale!=="ko"&&(Er||le!=="onCompositionStart"?le==="onCompositionEnd"&&Er&&(oe=ff()):(St=F,Tl="value"in St?St.value:St.textContent,Er=!0)),ie=Vo(N,le),0<ie.length&&(le=new mf(le,e,null,i,F),U.push({event:le,listeners:ie}),oe?le.data=oe:(oe=Ef(i),oe!==null&&(le.data=oe)))),(oe=W0?H0(e,i):Y0(e,i))&&(N=Vo(N,"onBeforeInput"),0<N.length&&(F=new mf("onBeforeInput","beforeinput",null,i,F),U.push({event:F,listeners:N}),F.data=oe))}zf(U,t)})}function Ii(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Vo(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=di(e,i),d!=null&&l.unshift(Ii(e,d,c)),d=di(e,t),d!=null&&l.push(Ii(e,d,c))),e=e.return}return l}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bf(e,t,i,l,c){for(var d=t._reactName,h=[];i!==null&&i!==l;){var w=i,E=w.alternate,N=w.stateNode;if(E!==null&&E===l)break;w.tag===5&&N!==null&&(w=N,c?(E=di(i,d),E!=null&&h.unshift(Ii(i,E,w))):c||(E=di(i,d),E!=null&&h.push(Ii(i,E,w)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var oy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Wf(e){return(typeof e=="string"?e:""+e).replace(oy,`
`).replace(ay,"")}function Ko(e,t,i){if(t=Wf(t),Wf(e)!==t&&i)throw Error(o(425))}function Go(){}var Yl=null,Vl=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(uy)}:Gl;function uy(e){setTimeout(function(){throw e})}function ql(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),Si(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);Si(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Yn="__reactFiber$"+_r,Pi="__reactProps$"+_r,et="__reactContainer$"+_r,Ql="__reactEvents$"+_r,cy="__reactListeners$"+_r,fy="__reactHandles$"+_r;function Gt(e){var t=e[Yn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[et]||i[Yn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Yf(e);e!==null;){if(i=e[Yn])return i;e=Yf(e)}return t}e=i,i=e.parentNode}return null}function bi(e){return e=e[Yn]||e[et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function qo(e){return e[Pi]||null}var Xl=[],kr=-1;function _t(e){return{current:e}}function Ie(e){0>kr||(e.current=Xl[kr],Xl[kr]=null,kr--)}function Ne(e,t){kr++,Xl[kr]=e.current,e.current=t}var At={},Je=_t(At),sn=_t(!1),qt=At;function Or(e,t){var i=e.type.contextTypes;if(!i)return At;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in i)c[d]=t[d];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function un(e){return e=e.childContextTypes,e!=null}function Qo(){Ie(sn),Ie(Je)}function Vf(e,t,i){if(Je.current!==At)throw Error(o(168));Ne(Je,t),Ne(sn,i)}function Kf(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(o(108,Ae(e)||"Unknown",c));return B({},i,l)}function Xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,qt=Je.current,Ne(Je,e),Ne(sn,sn.current),!0}function Gf(e,t,i){var l=e.stateNode;if(!l)throw Error(o(169));i?(e=Kf(e,t,qt),l.__reactInternalMemoizedMergedChildContext=e,Ie(sn),Ie(Je),Ne(Je,e)):Ie(sn),Ne(sn,i)}var nt=null,Jo=!1,Jl=!1;function qf(e){nt===null?nt=[e]:nt.push(e)}function dy(e){Jo=!0,qf(e)}function kt(){if(!Jl&&nt!==null){Jl=!0;var e=0,t=ke;try{var i=nt;for(ke=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}nt=null,Jo=!1}catch(c){throw nt!==null&&(nt=nt.slice(e+1)),Qc(El,kt),c}finally{ke=t,Jl=!1}}return null}var Tr=[],Nr=0,Zo=null,ea=0,kn=[],On=0,Qt=null,tt=1,rt="";function Xt(e,t){Tr[Nr++]=ea,Tr[Nr++]=Zo,Zo=e,ea=t}function Qf(e,t,i){kn[On++]=tt,kn[On++]=rt,kn[On++]=Qt,Qt=e;var l=tt;e=rt;var c=32-Dn(l)-1;l&=~(1<<c),i+=1;var d=32-Dn(t)+c;if(30<d){var h=c-c%5;d=(l&(1<<h)-1).toString(32),l>>=h,c-=h,tt=1<<32-Dn(t)+c|i<<c|l,rt=d+e}else tt=1<<d|i<<c|l,rt=e}function Zl(e){e.return!==null&&(Xt(e,1),Qf(e,1,0))}function es(e){for(;e===Zo;)Zo=Tr[--Nr],Tr[Nr]=null,ea=Tr[--Nr],Tr[Nr]=null;for(;e===Qt;)Qt=kn[--On],kn[On]=null,rt=kn[--On],kn[On]=null,tt=kn[--On],kn[On]=null}var En=null,Sn=null,be=!1,Mn=null;function Xf(e,t){var i=In(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Jf(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,En=e,Sn=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,En=e,Sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Qt!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=In(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,En=e,Sn=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(be){var t=Sn;if(t){var i=t;if(!Jf(e,t)){if(ns(e))throw Error(o(418));t=xt(i.nextSibling);var l=En;t&&Jf(e,t)?Xf(l,i):(e.flags=e.flags&-4097|2,be=!1,En=e)}}else{if(ns(e))throw Error(o(418));e.flags=e.flags&-4097|2,be=!1,En=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;En=e}function na(e){if(e!==En)return!1;if(!be)return Zf(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=Sn)){if(ns(e))throw ed(),Error(o(418));for(;t;)Xf(e,t),t=xt(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Sn=xt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Sn=null}}else Sn=En?xt(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=Sn;e;)e=xt(e.nextSibling)}function Rr(){Sn=En=null,be=!1}function rs(e){Mn===null?Mn=[e]:Mn.push(e)}var py=H.ReactCurrentBatchConfig;function Li(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var l=i.stateNode}if(!l)throw Error(o(147,e));var c=l,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var w=c.refs;h===null?delete w[d]:w[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function ta(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nd(e){var t=e._init;return t(e._payload)}function td(e){function t(A,C){if(e){var O=A.deletions;O===null?(A.deletions=[C],A.flags|=16):O.push(C)}}function i(A,C){if(!e)return null;for(;C!==null;)t(A,C),C=C.sibling;return null}function l(A,C){for(A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function c(A,C){return A=Lt(A,C),A.index=0,A.sibling=null,A}function d(A,C,O){return A.index=O,e?(O=A.alternate,O!==null?(O=O.index,O<C?(A.flags|=2,C):O):(A.flags|=2,C)):(A.flags|=1048576,C)}function h(A){return e&&A.alternate===null&&(A.flags|=2),A}function w(A,C,O,$){return C===null||C.tag!==6?(C=Gs(O,A.mode,$),C.return=A,C):(C=c(C,O),C.return=A,C)}function E(A,C,O,$){var Z=O.type;return Z===ee?F(A,C,O.props.children,$,O.key):C!==null&&(C.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Se&&nd(Z)===C.type)?($=c(C,O.props),$.ref=Li(A,C,O),$.return=A,$):($=ka(O.type,O.key,O.props,null,A.mode,$),$.ref=Li(A,C,O),$.return=A,$)}function N(A,C,O,$){return C===null||C.tag!==4||C.stateNode.containerInfo!==O.containerInfo||C.stateNode.implementation!==O.implementation?(C=qs(O,A.mode,$),C.return=A,C):(C=c(C,O.children||[]),C.return=A,C)}function F(A,C,O,$,Z){return C===null||C.tag!==7?(C=or(O,A.mode,$,Z),C.return=A,C):(C=c(C,O),C.return=A,C)}function U(A,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Gs(""+C,A.mode,O),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case j:return O=ka(C.type,C.key,C.props,null,A.mode,O),O.ref=Li(A,null,C),O.return=A,O;case Q:return C=qs(C,A.mode,O),C.return=A,C;case Se:var $=C._init;return U(A,$(C._payload),O)}if(yn(C)||X(C))return C=or(C,A.mode,O,null),C.return=A,C;ta(A,C)}return null}function D(A,C,O,$){var Z=C!==null?C.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return Z!==null?null:w(A,C,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case j:return O.key===Z?E(A,C,O,$):null;case Q:return O.key===Z?N(A,C,O,$):null;case Se:return Z=O._init,D(A,C,Z(O._payload),$)}if(yn(O)||X(O))return Z!==null?null:F(A,C,O,$,null);ta(A,O)}return null}function K(A,C,O,$,Z){if(typeof $=="string"&&$!==""||typeof $=="number")return A=A.get(O)||null,w(C,A,""+$,Z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case j:return A=A.get($.key===null?O:$.key)||null,E(C,A,$,Z);case Q:return A=A.get($.key===null?O:$.key)||null,N(C,A,$,Z);case Se:var ie=$._init;return K(A,C,O,ie($._payload),Z)}if(yn($)||X($))return A=A.get(O)||null,F(C,A,$,Z,null);ta(C,$)}return null}function q(A,C,O,$){for(var Z=null,ie=null,oe=C,le=C=0,Ke=null;oe!==null&&le<O.length;le++){oe.index>le?(Ke=oe,oe=null):Ke=oe.sibling;var xe=D(A,oe,O[le],$);if(xe===null){oe===null&&(oe=Ke);break}e&&oe&&xe.alternate===null&&t(A,oe),C=d(xe,C,le),ie===null?Z=xe:ie.sibling=xe,ie=xe,oe=Ke}if(le===O.length)return i(A,oe),be&&Xt(A,le),Z;if(oe===null){for(;le<O.length;le++)oe=U(A,O[le],$),oe!==null&&(C=d(oe,C,le),ie===null?Z=oe:ie.sibling=oe,ie=oe);return be&&Xt(A,le),Z}for(oe=l(A,oe);le<O.length;le++)Ke=K(oe,A,le,O[le],$),Ke!==null&&(e&&Ke.alternate!==null&&oe.delete(Ke.key===null?le:Ke.key),C=d(Ke,C,le),ie===null?Z=Ke:ie.sibling=Ke,ie=Ke);return e&&oe.forEach(function(Dt){return t(A,Dt)}),be&&Xt(A,le),Z}function J(A,C,O,$){var Z=X(O);if(typeof Z!="function")throw Error(o(150));if(O=Z.call(O),O==null)throw Error(o(151));for(var ie=Z=null,oe=C,le=C=0,Ke=null,xe=O.next();oe!==null&&!xe.done;le++,xe=O.next()){oe.index>le?(Ke=oe,oe=null):Ke=oe.sibling;var Dt=D(A,oe,xe.value,$);if(Dt===null){oe===null&&(oe=Ke);break}e&&oe&&Dt.alternate===null&&t(A,oe),C=d(Dt,C,le),ie===null?Z=Dt:ie.sibling=Dt,ie=Dt,oe=Ke}if(xe.done)return i(A,oe),be&&Xt(A,le),Z;if(oe===null){for(;!xe.done;le++,xe=O.next())xe=U(A,xe.value,$),xe!==null&&(C=d(xe,C,le),ie===null?Z=xe:ie.sibling=xe,ie=xe);return be&&Xt(A,le),Z}for(oe=l(A,oe);!xe.done;le++,xe=O.next())xe=K(oe,A,le,xe.value,$),xe!==null&&(e&&xe.alternate!==null&&oe.delete(xe.key===null?le:xe.key),C=d(xe,C,le),ie===null?Z=xe:ie.sibling=xe,ie=xe);return e&&oe.forEach(function(Vy){return t(A,Vy)}),be&&Xt(A,le),Z}function je(A,C,O,$){if(typeof O=="object"&&O!==null&&O.type===ee&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case j:e:{for(var Z=O.key,ie=C;ie!==null;){if(ie.key===Z){if(Z=O.type,Z===ee){if(ie.tag===7){i(A,ie.sibling),C=c(ie,O.props.children),C.return=A,A=C;break e}}else if(ie.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Se&&nd(Z)===ie.type){i(A,ie.sibling),C=c(ie,O.props),C.ref=Li(A,ie,O),C.return=A,A=C;break e}i(A,ie);break}else t(A,ie);ie=ie.sibling}O.type===ee?(C=or(O.props.children,A.mode,$,O.key),C.return=A,A=C):($=ka(O.type,O.key,O.props,null,A.mode,$),$.ref=Li(A,C,O),$.return=A,A=$)}return h(A);case Q:e:{for(ie=O.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===O.containerInfo&&C.stateNode.implementation===O.implementation){i(A,C.sibling),C=c(C,O.children||[]),C.return=A,A=C;break e}else{i(A,C);break}else t(A,C);C=C.sibling}C=qs(O,A.mode,$),C.return=A,A=C}return h(A);case Se:return ie=O._init,je(A,C,ie(O._payload),$)}if(yn(O))return q(A,C,O,$);if(X(O))return J(A,C,O,$);ta(A,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,C!==null&&C.tag===6?(i(A,C.sibling),C=c(C,O),C.return=A,A=C):(i(A,C),C=Gs(O,A.mode,$),C.return=A,A=C),h(A)):i(A,C)}return je}var Ir=td(!0),rd=td(!1),ra=_t(null),ia=null,Pr=null,is=null;function os(){is=Pr=ia=null}function as(e){var t=ra.current;Ie(ra),e._currentValue=t}function ls(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function br(e,t){ia=e,is=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(cn=!0),e.firstContext=null)}function Tn(e){var t=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(ia===null)throw Error(o(308));Pr=e,ia.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Jt=null;function ss(e){Jt===null?Jt=[e]:Jt.push(e)}function id(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,ss(t)):(i.next=c.next,c.next=i),t.interleaved=i,it(e,l)}function it(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Ot=!1;function us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ce&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,it(e,i)}return c=l.interleaved,c===null?(t.next=t,ss(l)):(t.next=c.next,c.next=t),l.interleaved=t,it(e,i)}function oa(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,xl(e,i)}}function ad(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var h={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};d===null?c=d=h:d=d.next=h,i=i.next}while(i!==null);d===null?c=d=t:d=d.next=t}else c=d=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function aa(e,t,i,l){var c=e.updateQueue;Ot=!1;var d=c.firstBaseUpdate,h=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var E=w,N=E.next;E.next=null,h===null?d=N:h.next=N,h=E;var F=e.alternate;F!==null&&(F=F.updateQueue,w=F.lastBaseUpdate,w!==h&&(w===null?F.firstBaseUpdate=N:w.next=N,F.lastBaseUpdate=E))}if(d!==null){var U=c.baseState;h=0,F=N=E=null,w=d;do{var D=w.lane,K=w.eventTime;if((l&D)===D){F!==null&&(F=F.next={eventTime:K,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var q=e,J=w;switch(D=t,K=i,J.tag){case 1:if(q=J.payload,typeof q=="function"){U=q.call(K,U,D);break e}U=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,D=typeof q=="function"?q.call(K,U,D):q,D==null)break e;U=B({},U,D);break e;case 2:Ot=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,D=c.effects,D===null?c.effects=[w]:D.push(w))}else K={eventTime:K,lane:D,tag:w.tag,payload:w.payload,callback:w.callback,next:null},F===null?(N=F=K,E=U):F=F.next=K,h|=D;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;D=w,w=D.next,D.next=null,c.lastBaseUpdate=D,c.shared.pending=null}}while(!0);if(F===null&&(E=U),c.baseState=E,c.firstBaseUpdate=N,c.lastBaseUpdate=F,t=c.shared.interleaved,t!==null){c=t;do h|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);nr|=h,e.lanes=h,e.memoizedState=U}}function ld(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(o(191,c));c.call(l)}}}var Di={},Vn=_t(Di),Fi=_t(Di),Mi=_t(Di);function Zt(e){if(e===Di)throw Error(o(174));return e}function cs(e,t){switch(Ne(Mi,t),Ne(Fi,e),Ne(Vn,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hr(t,e)}Ie(Vn),Ne(Vn,t)}function Lr(){Ie(Vn),Ie(Fi),Ie(Mi)}function sd(e){Zt(Mi.current);var t=Zt(Vn.current),i=hr(t,e.type);t!==i&&(Ne(Fi,e),Ne(Vn,i))}function fs(e){Fi.current===e&&(Ie(Vn),Ie(Fi))}var Le=_t(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function ps(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var sa=H.ReactCurrentDispatcher,ms=H.ReactCurrentBatchConfig,er=0,De=null,$e=null,Ye=null,ua=!1,ji=!1,Ui=0,my=0;function Ze(){throw Error(o(321))}function hs(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Fn(e[i],t[i]))return!1;return!0}function vs(e,t,i,l,c,d){if(er=d,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sa.current=e===null||e.memoizedState===null?yy:wy,e=i(l,c),ji){d=0;do{if(ji=!1,Ui=0,25<=d)throw Error(o(301));d+=1,Ye=$e=null,t.updateQueue=null,sa.current=Ey,e=i(l,c)}while(ji)}if(sa.current=da,t=$e!==null&&$e.next!==null,er=0,Ye=$e=De=null,ua=!1,t)throw Error(o(300));return e}function gs(){var e=Ui!==0;return Ui=0,e}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Nn(){if($e===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Ye===null?De.memoizedState:Ye.next;if(t!==null)Ye=t,$e=e;else{if(e===null)throw Error(o(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ye===null?De.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function zi(e,t){return typeof t=="function"?t(e):t}function ys(e){var t=Nn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=$e,c=l.baseQueue,d=i.pending;if(d!==null){if(c!==null){var h=c.next;c.next=d.next,d.next=h}l.baseQueue=c=d,i.pending=null}if(c!==null){d=c.next,l=l.baseState;var w=h=null,E=null,N=d;do{var F=N.lane;if((er&F)===F)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),l=N.hasEagerState?N.eagerState:e(l,N.action);else{var U={lane:F,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(w=E=U,h=l):E=E.next=U,De.lanes|=F,nr|=F}N=N.next}while(N!==null&&N!==d);E===null?h=l:E.next=w,Fn(l,t.memoizedState)||(cn=!0),t.memoizedState=l,t.baseState=h,t.baseQueue=E,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do d=c.lane,De.lanes|=d,nr|=d,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ws(e){var t=Nn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,d=t.memoizedState;if(c!==null){i.pending=null;var h=c=c.next;do d=e(d,h.action),h=h.next;while(h!==c);Fn(d,t.memoizedState)||(cn=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),i.lastRenderedState=d}return[d,l]}function ud(){}function cd(e,t){var i=De,l=Nn(),c=t(),d=!Fn(l.memoizedState,c);if(d&&(l.memoizedState=c,cn=!0),l=l.queue,Es(pd.bind(null,i,l,e),[e]),l.getSnapshot!==t||d||Ye!==null&&Ye.memoizedState.tag&1){if(i.flags|=2048,$i(9,dd.bind(null,i,l,c,t),void 0,null),Ve===null)throw Error(o(349));(er&30)!==0||fd(i,t,c)}return c}function fd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function dd(e,t,i,l){t.value=i,t.getSnapshot=l,md(t)&&hd(e)}function pd(e,t,i){return i(function(){md(t)&&hd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Fn(e,i)}catch{return!0}}function hd(e){var t=it(e,1);t!==null&&$n(t,e,1,-1)}function vd(e){var t=Kn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t.queue=e,e=e.dispatch=gy.bind(null,De,e),[t.memoizedState,e]}function $i(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function gd(){return Nn().memoizedState}function ca(e,t,i,l){var c=Kn();De.flags|=e,c.memoizedState=$i(1|t,i,void 0,l===void 0?null:l)}function fa(e,t,i,l){var c=Nn();l=l===void 0?null:l;var d=void 0;if($e!==null){var h=$e.memoizedState;if(d=h.destroy,l!==null&&hs(l,h.deps)){c.memoizedState=$i(t,i,d,l);return}}De.flags|=e,c.memoizedState=$i(1|t,i,d,l)}function yd(e,t){return ca(8390656,8,e,t)}function Es(e,t){return fa(2048,8,e,t)}function wd(e,t){return fa(4,2,e,t)}function Ed(e,t){return fa(4,4,e,t)}function Sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,i){return i=i!=null?i.concat([e]):null,fa(4,4,Sd.bind(null,t,e),i)}function Ss(){}function xd(e,t){var i=Nn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&hs(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function _d(e,t){var i=Nn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&hs(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function Ad(e,t,i){return(er&21)===0?(e.baseState&&(e.baseState=!1,cn=!0),e.memoizedState=i):(Fn(i,t)||(i=ef(),De.lanes|=i,nr|=i,e.baseState=!0),t)}function hy(e,t){var i=ke;ke=i!==0&&4>i?i:4,e(!0);var l=ms.transition;ms.transition={};try{e(!1),t()}finally{ke=i,ms.transition=l}}function kd(){return Nn().memoizedState}function vy(e,t,i){var l=Pt(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Od(e))Td(t,i);else if(i=id(e,t,i,l),i!==null){var c=an();$n(i,e,l,c),Nd(i,t,l)}}function gy(e,t,i){var l=Pt(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Od(e))Td(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,w=d(h,i);if(c.hasEagerState=!0,c.eagerState=w,Fn(w,h)){var E=t.interleaved;E===null?(c.next=c,ss(t)):(c.next=E.next,E.next=c),t.interleaved=c;return}}catch{}i=id(e,t,c,l),i!==null&&(c=an(),$n(i,e,l,c),Nd(i,t,l))}}function Od(e){var t=e.alternate;return e===De||t!==null&&t===De}function Td(e,t){ji=ua=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Nd(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,xl(e,i)}}var da={readContext:Tn,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},yy={readContext:Tn,useCallback:function(e,t){return Kn().memoizedState=[e,t===void 0?null:t],e},useContext:Tn,useEffect:yd,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ca(4194308,4,Sd.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return ca(4,2,e,t)},useMemo:function(e,t){var i=Kn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=Kn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=vy.bind(null,De,e),[l.memoizedState,e]},useRef:function(e){var t=Kn();return e={current:e},t.memoizedState=e},useState:vd,useDebugValue:Ss,useDeferredValue:function(e){return Kn().memoizedState=e},useTransition:function(){var e=vd(!1),t=e[0];return e=hy.bind(null,e[1]),Kn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=De,c=Kn();if(be){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ve===null)throw Error(o(349));(er&30)!==0||fd(l,t,i)}c.memoizedState=i;var d={value:i,getSnapshot:t};return c.queue=d,yd(pd.bind(null,l,d,e),[e]),l.flags|=2048,$i(9,dd.bind(null,l,d,i,t),void 0,null),i},useId:function(){var e=Kn(),t=Ve.identifierPrefix;if(be){var i=rt,l=tt;i=(l&~(1<<32-Dn(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=Ui++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=my++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wy={readContext:Tn,useCallback:xd,useContext:Tn,useEffect:Es,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:Ed,useMemo:_d,useReducer:ys,useRef:gd,useState:function(){return ys(zi)},useDebugValue:Ss,useDeferredValue:function(e){var t=Nn();return Ad(t,$e.memoizedState,e)},useTransition:function(){var e=ys(zi)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:kd,unstable_isNewReconciler:!1},Ey={readContext:Tn,useCallback:xd,useContext:Tn,useEffect:Es,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:Ed,useMemo:_d,useReducer:ws,useRef:gd,useState:function(){return ws(zi)},useDebugValue:Ss,useDeferredValue:function(e){var t=Nn();return $e===null?t.memoizedState=e:Ad(t,$e.memoizedState,e)},useTransition:function(){var e=ws(zi)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:kd,unstable_isNewReconciler:!1};function jn(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Cs(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:B({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var pa={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=an(),c=Pt(e),d=ot(l,c);d.payload=t,i!=null&&(d.callback=i),t=Tt(e,d,c),t!==null&&($n(t,e,c,l),oa(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=an(),c=Pt(e),d=ot(l,c);d.tag=1,d.payload=t,i!=null&&(d.callback=i),t=Tt(e,d,c),t!==null&&($n(t,e,c,l),oa(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=an(),l=Pt(e),c=ot(i,l);c.tag=2,t!=null&&(c.callback=t),t=Tt(e,c,l),t!==null&&($n(t,e,l,i),oa(t,e,l))}};function Rd(e,t,i,l,c,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,h):t.prototype&&t.prototype.isPureReactComponent?!Oi(i,l)||!Oi(c,d):!0}function Id(e,t,i){var l=!1,c=At,d=t.contextType;return typeof d=="object"&&d!==null?d=Tn(d):(c=un(t)?qt:Je.current,l=t.contextTypes,d=(l=l!=null)?Or(e,c):At),t=new t(i,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pa,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function Pd(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&pa.enqueueReplaceState(t,t.state,null)}function xs(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},us(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=Tn(d):(d=un(t)?qt:Je.current,c.context=Or(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Cs(e,t,d,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&pa.enqueueReplaceState(c,c.state,null),aa(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var i="",l=t;do i+=pe(l),l=l.return;while(l);var c=i}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function _s(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Sy=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,i){i=ot(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){Ea||(Ea=!0,zs=l),As(e,t)},i}function Ld(e,t,i){i=ot(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){As(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(i.callback=function(){As(e,t),typeof l!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),i}function Dd(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Sy;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=Dy.bind(null,e,t,i),t.then(e,e))}function Fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Md(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=ot(-1,1),t.tag=2,Tt(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Cy=H.ReactCurrentOwner,cn=!1;function on(e,t,i,l){t.child=e===null?rd(t,null,i,l):Ir(t,e.child,i,l)}function jd(e,t,i,l,c){i=i.render;var d=t.ref;return br(t,c),l=vs(e,t,i,l,d,c),i=gs(),e!==null&&!cn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,at(e,t,c)):(be&&i&&Zl(t),t.flags|=1,on(e,t,l,c),t.child)}function Ud(e,t,i,l,c){if(e===null){var d=i.type;return typeof d=="function"&&!Ks(d)&&d.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=d,zd(e,t,d,l,c)):(e=ka(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var h=d.memoizedProps;if(i=i.compare,i=i!==null?i:Oi,i(h,l)&&e.ref===t.ref)return at(e,t,c)}return t.flags|=1,e=Lt(d,l),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,i,l,c){if(e!==null){var d=e.memoizedProps;if(Oi(d,l)&&e.ref===t.ref)if(cn=!1,t.pendingProps=l=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(cn=!0);else return t.lanes=e.lanes,at(e,t,c)}return ks(e,t,i,l,c)}function $d(e,t,i){var l=t.pendingProps,c=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Mr,Cn),Cn|=i;else{if((i&1073741824)===0)return e=d!==null?d.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(Mr,Cn),Cn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=d!==null?d.baseLanes:i,Ne(Mr,Cn),Cn|=l}else d!==null?(l=d.baseLanes|i,t.memoizedState=null):l=i,Ne(Mr,Cn),Cn|=l;return on(e,t,c,i),t.child}function Bd(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function ks(e,t,i,l,c){var d=un(i)?qt:Je.current;return d=Or(t,d),br(t,c),i=vs(e,t,i,l,d,c),l=gs(),e!==null&&!cn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,at(e,t,c)):(be&&l&&Zl(t),t.flags|=1,on(e,t,i,c),t.child)}function Wd(e,t,i,l,c){if(un(i)){var d=!0;Xo(t)}else d=!1;if(br(t,c),t.stateNode===null)ha(e,t),Id(t,i,l),xs(t,i,l,c),l=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var E=h.context,N=i.contextType;typeof N=="object"&&N!==null?N=Tn(N):(N=un(i)?qt:Je.current,N=Or(t,N));var F=i.getDerivedStateFromProps,U=typeof F=="function"||typeof h.getSnapshotBeforeUpdate=="function";U||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==l||E!==N)&&Pd(t,h,l,N),Ot=!1;var D=t.memoizedState;h.state=D,aa(t,l,h,c),E=t.memoizedState,w!==l||D!==E||sn.current||Ot?(typeof F=="function"&&(Cs(t,i,F,l),E=t.memoizedState),(w=Ot||Rd(t,i,w,l,D,E,N))?(U||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),h.props=l,h.state=E,h.context=N,l=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{h=t.stateNode,od(e,t),w=t.memoizedProps,N=t.type===t.elementType?w:jn(t.type,w),h.props=N,U=t.pendingProps,D=h.context,E=i.contextType,typeof E=="object"&&E!==null?E=Tn(E):(E=un(i)?qt:Je.current,E=Or(t,E));var K=i.getDerivedStateFromProps;(F=typeof K=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==U||D!==E)&&Pd(t,h,l,E),Ot=!1,D=t.memoizedState,h.state=D,aa(t,l,h,c);var q=t.memoizedState;w!==U||D!==q||sn.current||Ot?(typeof K=="function"&&(Cs(t,i,K,l),q=t.memoizedState),(N=Ot||Rd(t,i,N,l,D,q,E)||!1)?(F||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,q,E),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,q,E)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=q),h.props=l,h.state=q,h.context=E,l=N):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),l=!1)}return Os(e,t,i,l,d,c)}function Os(e,t,i,l,c,d){Bd(e,t);var h=(t.flags&128)!==0;if(!l&&!h)return c&&Gf(t,i,!1),at(e,t,d);l=t.stateNode,Cy.current=t;var w=h&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&h?(t.child=Ir(t,e.child,null,d),t.child=Ir(t,null,w,d)):on(e,t,w,d),t.memoizedState=l.state,c&&Gf(t,i,!0),t.child}function Hd(e){var t=e.stateNode;t.pendingContext?Vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vf(e,t.context,!1),cs(e,t.containerInfo)}function Yd(e,t,i,l,c){return Rr(),rs(c),t.flags|=256,on(e,t,i,l),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vd(e,t,i){var l=t.pendingProps,c=Le.current,d=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(c&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ne(Le,c&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=l.children,e=l.fallback,d?(l=t.mode,d=t.child,h={mode:"hidden",children:h},(l&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Oa(h,l,0,null),e=or(e,l,i,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=Ns(i),t.memoizedState=Ts,e):Rs(t,h));if(c=e.memoizedState,c!==null&&(w=c.dehydrated,w!==null))return xy(e,t,h,l,w,c,i);if(d){d=l.fallback,h=t.mode,c=e.child,w=c.sibling;var E={mode:"hidden",children:l.children};return(h&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=E,t.deletions=null):(l=Lt(c,E),l.subtreeFlags=c.subtreeFlags&14680064),w!==null?d=Lt(w,d):(d=or(d,h,i,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,l=d,d=t.child,h=e.child.memoizedState,h=h===null?Ns(i):{baseLanes:h.baseLanes|i,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~i,t.memoizedState=Ts,l}return d=e.child,e=d.sibling,l=Lt(d,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function Rs(e,t){return t=Oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ma(e,t,i,l){return l!==null&&rs(l),Ir(t,e.child,null,i),e=Rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xy(e,t,i,l,c,d,h){if(i)return t.flags&256?(t.flags&=-257,l=_s(Error(o(422))),ma(e,t,h,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=l.fallback,c=t.mode,l=Oa({mode:"visible",children:l.children},c,0,null),d=or(d,c,h,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,(t.mode&1)!==0&&Ir(t,e.child,null,h),t.child.memoizedState=Ns(h),t.memoizedState=Ts,d);if((t.mode&1)===0)return ma(e,t,h,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var w=l.dgst;return l=w,d=Error(o(419)),l=_s(d,l,void 0),ma(e,t,h,l)}if(w=(h&e.childLanes)!==0,cn||w){if(l=Ve,l!==null){switch(h&-h){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|h))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,it(e,c),$n(l,e,c,-1))}return Vs(),l=_s(Error(o(421))),ma(e,t,h,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Fy.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,Sn=xt(c.nextSibling),En=t,be=!0,Mn=null,e!==null&&(kn[On++]=tt,kn[On++]=rt,kn[On++]=Qt,tt=e.id,rt=e.overflow,Qt=t),t=Rs(t,l.children),t.flags|=4096,t)}function Kd(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),ls(e.return,t,i)}function Is(e,t,i,l,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=i,d.tailMode=c)}function Gd(e,t,i){var l=t.pendingProps,c=l.revealOrder,d=l.tail;if(on(e,t,l.children,i),l=Le.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kd(e,i,t);else if(e.tag===19)Kd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ne(Le,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&la(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Is(t,!1,c,i,d);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&la(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Is(t,!0,i,null,d);break;case"together":Is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Lt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Lt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function _y(e,t,i){switch(t.tag){case 3:Hd(t),Rr();break;case 5:sd(t);break;case 1:un(t.type)&&Xo(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Ne(ra,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Ne(Le,Le.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Vd(e,t,i):(Ne(Le,Le.current&1),e=at(e,t,i),e!==null?e.sibling:null);Ne(Le,Le.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return Gd(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ne(Le,Le.current),l)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,i)}return at(e,t,i)}var qd,Ps,Qd,Xd;qd=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ps=function(){},Qd=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Zt(Vn.current);var d=null;switch(i){case"input":c=ii(e,c),l=ii(e,l),d=[];break;case"select":c=B({},c,{value:void 0}),l=B({},l,{value:void 0}),d=[];break;case"textarea":c=pr(e,c),l=pr(e,l),d=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Go)}dl(i,l);var h;i=null;for(N in c)if(!l.hasOwnProperty(N)&&c.hasOwnProperty(N)&&c[N]!=null)if(N==="style"){var w=c[N];for(h in w)w.hasOwnProperty(h)&&(i||(i={}),i[h]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(s.hasOwnProperty(N)?d||(d=[]):(d=d||[]).push(N,null));for(N in l){var E=l[N];if(w=c?.[N],l.hasOwnProperty(N)&&E!==w&&(E!=null||w!=null))if(N==="style")if(w){for(h in w)!w.hasOwnProperty(h)||E&&E.hasOwnProperty(h)||(i||(i={}),i[h]="");for(h in E)E.hasOwnProperty(h)&&w[h]!==E[h]&&(i||(i={}),i[h]=E[h])}else i||(d||(d=[]),d.push(N,i)),i=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(d=d||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(d=d||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(s.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&Re("scroll",e),d||w===E||(d=[])):(d=d||[]).push(N,E))}i&&(d=d||[]).push("style",i);var N=d;(t.updateQueue=N)&&(t.flags|=4)}},Xd=function(e,t,i,l){i!==l&&(t.flags|=4)};function Bi(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function en(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function Ay(e,t,i){var l=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(t),null;case 1:return un(t.type)&&Qo(),en(t),null;case 3:return l=t.stateNode,Lr(),Ie(sn),Ie(Je),ps(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(na(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mn!==null&&(Ws(Mn),Mn=null))),Ps(e,t),en(t),null;case 5:fs(t);var c=Zt(Mi.current);if(i=t.type,e!==null&&t.stateNode!=null)Qd(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(o(166));return en(t),null}if(e=Zt(Vn.current),na(t)){l=t.stateNode,i=t.type;var d=t.memoizedProps;switch(l[Yn]=t,l[Pi]=d,e=(t.mode&1)!==0,i){case"dialog":Re("cancel",l),Re("close",l);break;case"iframe":case"object":case"embed":Re("load",l);break;case"video":case"audio":for(c=0;c<Ni.length;c++)Re(Ni[c],l);break;case"source":Re("error",l);break;case"img":case"image":case"link":Re("error",l),Re("load",l);break;case"details":Re("toggle",l);break;case"input":Ao(l,d),Re("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!d.multiple},Re("invalid",l);break;case"textarea":li(l,d),Re("invalid",l)}dl(i,d),c=null;for(var h in d)if(d.hasOwnProperty(h)){var w=d[h];h==="children"?typeof w=="string"?l.textContent!==w&&(d.suppressHydrationWarning!==!0&&Ko(l.textContent,w,e),c=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&Ko(l.textContent,w,e),c=["children",""+w]):s.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&Re("scroll",l)}switch(i){case"input":vt(l),ko(l,d,!0);break;case"textarea":vt(l),si(l);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(l.onclick=Go)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{h=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ui(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=h.createElement(i,{is:l.is}):(e=h.createElement(i),i==="select"&&(h=e,l.multiple?h.multiple=!0:l.size&&(h.size=l.size))):e=h.createElementNS(e,i),e[Yn]=t,e[Pi]=l,qd(e,t,!1,!1),t.stateNode=e;e:{switch(h=pl(i,l),i){case"dialog":Re("cancel",e),Re("close",e),c=l;break;case"iframe":case"object":case"embed":Re("load",e),c=l;break;case"video":case"audio":for(c=0;c<Ni.length;c++)Re(Ni[c],e);c=l;break;case"source":Re("error",e),c=l;break;case"img":case"image":case"link":Re("error",e),Re("load",e),c=l;break;case"details":Re("toggle",e),c=l;break;case"input":Ao(e,l),c=ii(e,l),Re("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=B({},l,{value:void 0}),Re("invalid",e);break;case"textarea":li(e,l),c=pr(e,l),Re("invalid",e);break;default:c=l}dl(i,c),w=c;for(d in w)if(w.hasOwnProperty(d)){var E=w[d];d==="style"?Uc(e,E):d==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Mc(e,E)):d==="children"?typeof E=="string"?(i!=="textarea"||E!=="")&&ci(e,E):typeof E=="number"&&ci(e,""+E):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(s.hasOwnProperty(d)?E!=null&&d==="onScroll"&&Re("scroll",e):E!=null&&W(e,d,E,h))}switch(i){case"input":vt(e),ko(e,l,!1);break;case"textarea":vt(e),si(e);break;case"option":l.value!=null&&e.setAttribute("value",""+we(l.value));break;case"select":e.multiple=!!l.multiple,d=l.value,d!=null?Ln(e,!!l.multiple,d,!1):l.defaultValue!=null&&Ln(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Go)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return en(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(i=Zt(Mi.current),Zt(Vn.current),na(t)){if(l=t.stateNode,i=t.memoizedProps,l[Yn]=t,(d=l.nodeValue!==i)&&(e=En,e!==null))switch(e.tag){case 3:Ko(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(l.nodeValue,i,(e.mode&1)!==0)}d&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Yn]=t,t.stateNode=l}return en(t),null;case 13:if(Ie(Le),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Sn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ed(),Rr(),t.flags|=98560,d=!1;else if(d=na(t),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Yn]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;en(t),d=!1}else Mn!==null&&(Ws(Mn),Mn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?Be===0&&(Be=3):Vs())),t.updateQueue!==null&&(t.flags|=4),en(t),null);case 4:return Lr(),Ps(e,t),e===null&&Ri(t.stateNode.containerInfo),en(t),null;case 10:return as(t.type._context),en(t),null;case 17:return un(t.type)&&Qo(),en(t),null;case 19:if(Ie(Le),d=t.memoizedState,d===null)return en(t),null;if(l=(t.flags&128)!==0,h=d.rendering,h===null)if(l)Bi(d,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=la(e),h!==null){for(t.flags|=128,Bi(d,!1),l=h.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)d=i,e=l,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ne(Le,Le.current&1|2),t.child}e=e.sibling}d.tail!==null&&Me()>jr&&(t.flags|=128,l=!0,Bi(d,!1),t.lanes=4194304)}else{if(!l)if(e=la(h),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Bi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!be)return en(t),null}else 2*Me()-d.renderingStartTime>jr&&i!==1073741824&&(t.flags|=128,l=!0,Bi(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(i=d.last,i!==null?i.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Me(),t.sibling=null,i=Le.current,Ne(Le,l?i&1|2:i&1),t):(en(t),null);case 22:case 23:return Ys(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Cn&1073741824)!==0&&(en(t),t.subtreeFlags&6&&(t.flags|=8192)):en(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function ky(e,t){switch(es(t),t.tag){case 1:return un(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),Ie(sn),Ie(Je),ps(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return fs(t),null;case 13:if(Ie(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Le),null;case 4:return Lr(),null;case 10:return as(t.type._context),null;case 22:case 23:return Ys(),null;case 24:return null;default:return null}}var va=!1,nn=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,G=null;function Fr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){Fe(e,t,l)}else i.current=null}function bs(e,t,i){try{i()}catch(l){Fe(e,t,l)}}var Jd=!1;function Ty(e,t){if(Yl=Fo,e=Rf(),Ml(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var h=0,w=-1,E=-1,N=0,F=0,U=e,D=null;n:for(;;){for(var K;U!==i||c!==0&&U.nodeType!==3||(w=h+c),U!==d||l!==0&&U.nodeType!==3||(E=h+l),U.nodeType===3&&(h+=U.nodeValue.length),(K=U.firstChild)!==null;)D=U,U=K;for(;;){if(U===e)break n;if(D===i&&++N===c&&(w=h),D===d&&++F===l&&(E=h),(K=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=K}i=w===-1||E===-1?null:{start:w,end:E}}else i=null}i=i||{start:0,end:0}}else i=null;for(Vl={focusedElem:e,selectionRange:i},Fo=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var J=q.memoizedProps,je=q.memoizedState,A=t.stateNode,C=A.getSnapshotBeforeUpdate(t.elementType===t.type?J:jn(t.type,J),je);A.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var O=t.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch($){Fe(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return q=Jd,Jd=!1,q}function Wi(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&bs(t,i,d)}c=c.next}while(c!==l)}}function ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Ls(e){var t=e.ref;if(t!==null){var i=e.stateNode;e.tag,e=i,typeof t=="function"?t(e):t.current=e}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[Pi],delete t[Ql],delete t[cy],delete t[fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function np(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ds(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Go));else if(l!==4&&(e=e.child,e!==null))for(Ds(e,t,i),e=e.sibling;e!==null;)Ds(e,t,i),e=e.sibling}function Fs(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Fs(e,t,i),e=e.sibling;e!==null;)Fs(e,t,i),e=e.sibling}var Ge=null,Un=!1;function Nt(e,t,i){for(i=i.child;i!==null;)tp(e,t,i),i=i.sibling}function tp(e,t,i){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Ro,i)}catch{}switch(i.tag){case 5:nn||Fr(i,t);case 6:var l=Ge,c=Un;Ge=null,Nt(e,t,i),Ge=l,Un=c,Ge!==null&&(Un?(e=Ge,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ge.removeChild(i.stateNode));break;case 18:Ge!==null&&(Un?(e=Ge,i=i.stateNode,e.nodeType===8?ql(e.parentNode,i):e.nodeType===1&&ql(e,i),Si(e)):ql(Ge,i.stateNode));break;case 4:l=Ge,c=Un,Ge=i.stateNode.containerInfo,Un=!0,Nt(e,t,i),Ge=l,Un=c;break;case 0:case 11:case 14:case 15:if(!nn&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var d=c,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&bs(i,t,h),c=c.next}while(c!==l)}Nt(e,t,i);break;case 1:if(!nn&&(Fr(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(w){Fe(i,t,w)}Nt(e,t,i);break;case 21:Nt(e,t,i);break;case 22:i.mode&1?(nn=(l=nn)||i.memoizedState!==null,Nt(e,t,i),nn=l):Nt(e,t,i);break;default:Nt(e,t,i)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Oy),t.forEach(function(l){var c=My.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function zn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var d=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Ge=w.stateNode,Un=!1;break e;case 3:Ge=w.stateNode.containerInfo,Un=!0;break e;case 4:Ge=w.stateNode.containerInfo,Un=!0;break e}w=w.return}if(Ge===null)throw Error(o(160));tp(d,h,c),Ge=null,Un=!1;var E=c.alternate;E!==null&&(E.return=null),c.return=null}catch(N){Fe(c,t,N)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ip(t,e),t=t.sibling}function ip(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zn(t,e),Gn(e),l&4){try{Wi(3,e,e.return),ga(3,e)}catch(J){Fe(e,e.return,J)}try{Wi(5,e,e.return)}catch(J){Fe(e,e.return,J)}}break;case 1:zn(t,e),Gn(e),l&512&&i!==null&&Fr(i,i.return);break;case 5:if(zn(t,e),Gn(e),l&512&&i!==null&&Fr(i,i.return),e.flags&32){var c=e.stateNode;try{ci(c,"")}catch(J){Fe(e,e.return,J)}}if(l&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,h=i!==null?i.memoizedProps:d,w=e.type,E=e.updateQueue;if(e.updateQueue=null,E!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&oi(c,d),pl(w,h);var N=pl(w,d);for(h=0;h<E.length;h+=2){var F=E[h],U=E[h+1];F==="style"?Uc(c,U):F==="dangerouslySetInnerHTML"?Mc(c,U):F==="children"?ci(c,U):W(c,F,U,N)}switch(w){case"input":dr(c,d);break;case"textarea":mr(c,d);break;case"select":var D=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var K=d.value;K!=null?Ln(c,!!d.multiple,K,!1):D!==!!d.multiple&&(d.defaultValue!=null?Ln(c,!!d.multiple,d.defaultValue,!0):Ln(c,!!d.multiple,d.multiple?[]:"",!1))}c[Pi]=d}catch(J){Fe(e,e.return,J)}}break;case 6:if(zn(t,e),Gn(e),l&4){if(e.stateNode===null)throw Error(o(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(J){Fe(e,e.return,J)}}break;case 3:if(zn(t,e),Gn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(J){Fe(e,e.return,J)}break;case 4:zn(t,e),Gn(e);break;case 13:zn(t,e),Gn(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(Us=Me())),l&4&&rp(e);break;case 22:if(F=i!==null&&i.memoizedState!==null,e.mode&1?(nn=(N=nn)||F,zn(t,e),nn=N):zn(t,e),Gn(e),l&8192){if(N=e.memoizedState!==null,(e.stateNode.isHidden=N)&&!F&&(e.mode&1)!==0)for(G=e,F=e.child;F!==null;){for(U=G=F;G!==null;){switch(D=G,K=D.child,D.tag){case 0:case 11:case 14:case 15:Wi(4,D,D.return);break;case 1:Fr(D,D.return);var q=D.stateNode;if(typeof q.componentWillUnmount=="function"){l=D,i=D.return;try{t=l,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(J){Fe(l,i,J)}}break;case 5:Fr(D,D.return);break;case 22:if(D.memoizedState!==null){lp(U);continue}}K!==null?(K.return=D,G=K):lp(U)}F=F.sibling}e:for(F=null,U=e;;){if(U.tag===5){if(F===null){F=U;try{c=U.stateNode,N?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=U.stateNode,E=U.memoizedProps.style,h=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=jc("display",h))}catch(J){Fe(e,e.return,J)}}}else if(U.tag===6){if(F===null)try{U.stateNode.nodeValue=N?"":U.memoizedProps}catch(J){Fe(e,e.return,J)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;F===U&&(F=null),U=U.return}F===U&&(F=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:zn(t,e),Gn(e),l&4&&rp(e);break;case 21:break;default:zn(t,e),Gn(e)}}function Gn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(ep(i)){var l=i;break e}i=i.return}throw Error(o(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ci(c,""),l.flags&=-33);var d=np(e);Fs(e,d,c);break;case 3:case 4:var h=l.stateNode.containerInfo,w=np(e);Ds(e,w,h);break;default:throw Error(o(161))}}catch(E){Fe(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ny(e,t,i){G=e,op(e)}function op(e,t,i){for(var l=(e.mode&1)!==0;G!==null;){var c=G,d=c.child;if(c.tag===22&&l){var h=c.memoizedState!==null||va;if(!h){var w=c.alternate,E=w!==null&&w.memoizedState!==null||nn;w=va;var N=nn;if(va=h,(nn=E)&&!N)for(G=c;G!==null;)h=G,E=h.child,h.tag===22&&h.memoizedState!==null?sp(c):E!==null?(E.return=h,G=E):sp(c);for(;d!==null;)G=d,op(d),d=d.sibling;G=c,va=w,nn=N}ap(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,G=d):ap(e)}}function ap(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:nn||ga(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!nn)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:jn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&ld(t,d,l);break;case 3:var h=t.updateQueue;if(h!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}ld(t,h,i)}break;case 5:var w=t.stateNode;if(i===null&&t.flags&4){i=w;var E=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&i.focus();break;case"img":E.src&&(i.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var N=t.alternate;if(N!==null){var F=N.memoizedState;if(F!==null){var U=F.dehydrated;U!==null&&Si(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}nn||t.flags&512&&Ls(t)}catch(D){Fe(t,t.return,D)}}if(t===e){G=null;break}if(i=t.sibling,i!==null){i.return=t.return,G=i;break}G=t.return}}function lp(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var i=t.sibling;if(i!==null){i.return=t.return,G=i;break}G=t.return}}function sp(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{ga(4,t)}catch(E){Fe(t,i,E)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(E){Fe(t,c,E)}}var d=t.return;try{Ls(t)}catch(E){Fe(t,d,E)}break;case 5:var h=t.return;try{Ls(t)}catch(E){Fe(t,h,E)}}}catch(E){Fe(t,t.return,E)}if(t===e){G=null;break}var w=t.sibling;if(w!==null){w.return=t.return,G=w;break}G=t.return}}var Ry=Math.ceil,ya=H.ReactCurrentDispatcher,Ms=H.ReactCurrentOwner,Rn=H.ReactCurrentBatchConfig,Ce=0,Ve=null,Ue=null,qe=0,Cn=0,Mr=_t(0),Be=0,Hi=null,nr=0,wa=0,js=0,Yi=null,fn=null,Us=0,jr=1/0,lt=null,Ea=!1,zs=null,Rt=null,Sa=!1,It=null,Ca=0,Vi=0,$s=null,xa=-1,_a=0;function an(){return(Ce&6)!==0?Me():xa!==-1?xa:xa=Me()}function Pt(e){return(e.mode&1)===0?1:(Ce&2)!==0&&qe!==0?qe&-qe:py.transition!==null?(_a===0&&(_a=ef()),_a):(e=ke,e!==0||(e=window.event,e=e===void 0?16:cf(e.type)),e)}function $n(e,t,i,l){if(50<Vi)throw Vi=0,$s=null,Error(o(185));vi(e,i,l),((Ce&2)===0||e!==Ve)&&(e===Ve&&((Ce&2)===0&&(wa|=i),Be===4&&bt(e,qe)),dn(e,l),i===1&&Ce===0&&(t.mode&1)===0&&(jr=Me()+500,Jo&&kt()))}function dn(e,t){var i=e.callbackNode;p0(e,t);var l=bo(e,e===Ve?qe:0);if(l===0)i!==null&&Xc(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&Xc(i),t===1)e.tag===0?dy(cp.bind(null,e)):qf(cp.bind(null,e)),sy(function(){(Ce&6)===0&&kt()}),i=null;else{switch(nf(l)){case 1:i=El;break;case 4:i=Jc;break;case 16:i=No;break;case 536870912:i=Zc;break;default:i=No}i=yp(i,up.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function up(e,t){if(xa=-1,_a=0,(Ce&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Ur()&&e.callbackNode!==i)return null;var l=bo(e,e===Ve?qe:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=Aa(e,l);else{t=l;var c=Ce;Ce|=2;var d=dp();(Ve!==e||qe!==t)&&(lt=null,jr=Me()+500,rr(e,t));do try{by();break}catch(w){fp(e,w)}while(!0);os(),ya.current=d,Ce=c,Ue!==null?t=0:(Ve=null,qe=0,t=Be)}if(t!==0){if(t===2&&(c=Sl(e),c!==0&&(l=c,t=Bs(e,c))),t===1)throw i=Hi,rr(e,0),bt(e,l),dn(e,Me()),i;if(t===6)bt(e,l);else{if(c=e.current.alternate,(l&30)===0&&!Iy(c)&&(t=Aa(e,l),t===2&&(d=Sl(e),d!==0&&(l=d,t=Bs(e,d))),t===1))throw i=Hi,rr(e,0),bt(e,l),dn(e,Me()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(o(345));case 2:ir(e,fn,lt);break;case 3:if(bt(e,l),(l&130023424)===l&&(t=Us+500-Me(),10<t)){if(bo(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){an(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Gl(ir.bind(null,e,fn,lt),t);break}ir(e,fn,lt);break;case 4:if(bt(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var h=31-Dn(l);d=1<<h,h=t[h],h>c&&(c=h),l&=~d}if(l=c,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ry(l/1960))-l,10<l){e.timeoutHandle=Gl(ir.bind(null,e,fn,lt),l);break}ir(e,fn,lt);break;case 5:ir(e,fn,lt);break;default:throw Error(o(329))}}}return dn(e,Me()),e.callbackNode===i?up.bind(null,e):null}function Bs(e,t){var i=Yi;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Aa(e,t),e!==2&&(t=fn,fn=i,t!==null&&Ws(t)),e}function Ws(e){fn===null?fn=e:fn.push.apply(fn,e)}function Iy(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],d=c.getSnapshot;c=c.value;try{if(!Fn(d(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~js,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Dn(t),l=1<<i;e[i]=-1,t&=~l}}function cp(e){if((Ce&6)!==0)throw Error(o(327));Ur();var t=bo(e,0);if((t&1)===0)return dn(e,Me()),null;var i=Aa(e,t);if(e.tag!==0&&i===2){var l=Sl(e);l!==0&&(t=l,i=Bs(e,l))}if(i===1)throw i=Hi,rr(e,0),bt(e,t),dn(e,Me()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,fn,lt),dn(e,Me()),null}function Hs(e,t){var i=Ce;Ce|=1;try{return e(t)}finally{Ce=i,Ce===0&&(jr=Me()+500,Jo&&kt())}}function tr(e){It!==null&&It.tag===0&&(Ce&6)===0&&Ur();var t=Ce;Ce|=1;var i=Rn.transition,l=ke;try{if(Rn.transition=null,ke=1,e)return e()}finally{ke=l,Rn.transition=i,Ce=t,(Ce&6)===0&&kt()}}function Ys(){Cn=Mr.current,Ie(Mr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,ly(i)),Ue!==null)for(i=Ue.return;i!==null;){var l=i;switch(es(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Qo();break;case 3:Lr(),Ie(sn),Ie(Je),ps();break;case 5:fs(l);break;case 4:Lr();break;case 13:Ie(Le);break;case 19:Ie(Le);break;case 10:as(l.type._context);break;case 22:case 23:Ys()}i=i.return}if(Ve=e,Ue=e=Lt(e.current,null),qe=Cn=t,Be=0,Hi=null,js=wa=nr=0,fn=Yi=null,Jt!==null){for(t=0;t<Jt.length;t++)if(i=Jt[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,d=i.pending;if(d!==null){var h=d.next;d.next=c,l.next=h}i.pending=l}Jt=null}return e}function fp(e,t){do{var i=Ue;try{if(os(),sa.current=da,ua){for(var l=De.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ua=!1}if(er=0,Ye=$e=De=null,ji=!1,Ui=0,Ms.current=null,i===null||i.return===null){Be=1,Hi=t,Ue=null;break}e:{var d=e,h=i.return,w=i,E=t;if(t=qe,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,F=w,U=F.tag;if((F.mode&1)===0&&(U===0||U===11||U===15)){var D=F.alternate;D?(F.updateQueue=D.updateQueue,F.memoizedState=D.memoizedState,F.lanes=D.lanes):(F.updateQueue=null,F.memoizedState=null)}var K=Fd(h);if(K!==null){K.flags&=-257,Md(K,h,w,d,t),K.mode&1&&Dd(d,N,t),t=K,E=N;var q=t.updateQueue;if(q===null){var J=new Set;J.add(E),t.updateQueue=J}else q.add(E);break e}else{if((t&1)===0){Dd(d,N,t),Vs();break e}E=Error(o(426))}}else if(be&&w.mode&1){var je=Fd(h);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),Md(je,h,w,d,t),rs(Dr(E,w));break e}}d=E=Dr(E,w),Be!==4&&(Be=2),Yi===null?Yi=[d]:Yi.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var A=bd(d,E,t);ad(d,A);break e;case 1:w=E;var C=d.type,O=d.stateNode;if((d.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(Rt===null||!Rt.has(O)))){d.flags|=65536,t&=-t,d.lanes|=t;var $=Ld(d,w,t);ad(d,$);break e}}d=d.return}while(d!==null)}mp(i)}catch(Z){t=Z,Ue===i&&i!==null&&(Ue=i=i.return);continue}break}while(!0)}function dp(){var e=ya.current;return ya.current=da,e===null?da:e}function Vs(){(Be===0||Be===3||Be===2)&&(Be=4),Ve===null||(nr&268435455)===0&&(wa&268435455)===0||bt(Ve,qe)}function Aa(e,t){var i=Ce;Ce|=2;var l=dp();(Ve!==e||qe!==t)&&(lt=null,rr(e,t));do try{Py();break}catch(c){fp(e,c)}while(!0);if(os(),Ce=i,ya.current=l,Ue!==null)throw Error(o(261));return Ve=null,qe=0,Be}function Py(){for(;Ue!==null;)pp(Ue)}function by(){for(;Ue!==null&&!i0();)pp(Ue)}function pp(e){var t=gp(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?mp(e):Ue=t,Ms.current=null}function mp(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Ay(i,t,Cn),i!==null){Ue=i;return}}else{if(i=ky(i,t),i!==null){i.flags&=32767,Ue=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Be===0&&(Be=5)}function ir(e,t,i){var l=ke,c=Rn.transition;try{Rn.transition=null,ke=1,Ly(e,t,i,l)}finally{Rn.transition=c,ke=l}return null}function Ly(e,t,i,l){do Ur();while(It!==null);if((Ce&6)!==0)throw Error(o(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=i.lanes|i.childLanes;if(m0(e,d),e===Ve&&(Ue=Ve=null,qe=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Sa||(Sa=!0,yp(No,function(){return Ur(),null})),d=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||d){d=Rn.transition,Rn.transition=null;var h=ke;ke=1;var w=Ce;Ce|=4,Ms.current=null,Ty(e,i),ip(i,e),ey(Vl),Fo=!!Yl,Vl=Yl=null,e.current=i,Ny(i),o0(),Ce=w,ke=h,Rn.transition=d}else e.current=i;if(Sa&&(Sa=!1,It=e,Ca=c),d=e.pendingLanes,d===0&&(Rt=null),s0(i.stateNode),dn(e,Me()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ea)throw Ea=!1,e=zs,zs=null,e;return(Ca&1)!==0&&e.tag!==0&&Ur(),d=e.pendingLanes,(d&1)!==0?e===$s?Vi++:(Vi=0,$s=e):Vi=0,kt(),null}function Ur(){if(It!==null){var e=nf(Ca),t=Rn.transition,i=ke;try{if(Rn.transition=null,ke=16>e?16:e,It===null)var l=!1;else{if(e=It,It=null,Ca=0,(Ce&6)!==0)throw Error(o(331));var c=Ce;for(Ce|=4,G=e.current;G!==null;){var d=G,h=d.child;if((G.flags&16)!==0){var w=d.deletions;if(w!==null){for(var E=0;E<w.length;E++){var N=w[E];for(G=N;G!==null;){var F=G;switch(F.tag){case 0:case 11:case 15:Wi(8,F,d)}var U=F.child;if(U!==null)U.return=F,G=U;else for(;G!==null;){F=G;var D=F.sibling,K=F.return;if(Zd(F),F===N){G=null;break}if(D!==null){D.return=K,G=D;break}G=K}}}var q=d.alternate;if(q!==null){var J=q.child;if(J!==null){q.child=null;do{var je=J.sibling;J.sibling=null,J=je}while(J!==null)}}G=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,G=h;else e:for(;G!==null;){if(d=G,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Wi(9,d,d.return)}var A=d.sibling;if(A!==null){A.return=d.return,G=A;break e}G=d.return}}var C=e.current;for(G=C;G!==null;){h=G;var O=h.child;if((h.subtreeFlags&2064)!==0&&O!==null)O.return=h,G=O;else e:for(h=C;G!==null;){if(w=G,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:ga(9,w)}}catch(Z){Fe(w,w.return,Z)}if(w===h){G=null;break e}var $=w.sibling;if($!==null){$.return=w.return,G=$;break e}G=w.return}}if(Ce=c,kt(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Ro,e)}catch{}l=!0}return l}finally{ke=i,Rn.transition=t}}return!1}function hp(e,t,i){t=Dr(i,t),t=bd(e,t,1),e=Tt(e,t,1),t=an(),e!==null&&(vi(e,1,t),dn(e,t))}function Fe(e,t,i){if(e.tag===3)hp(e,e,i);else for(;t!==null;){if(t.tag===3){hp(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rt===null||!Rt.has(l))){e=Dr(i,e),e=Ld(t,e,1),t=Tt(t,e,1),e=an(),t!==null&&(vi(t,1,e),dn(t,e));break}}t=t.return}}function Dy(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=an(),e.pingedLanes|=e.suspendedLanes&i,Ve===e&&(qe&i)===i&&(Be===4||Be===3&&(qe&130023424)===qe&&500>Me()-Us?rr(e,0):js|=i),dn(e,t)}function vp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var i=an();e=it(e,t),e!==null&&(vi(e,t,i),dn(e,i))}function Fy(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),vp(e,i)}function My(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(o(314))}l!==null&&l.delete(t),vp(e,i)}var gp;gp=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||sn.current)cn=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return cn=!1,_y(e,t,i);cn=(e.flags&131072)!==0}else cn=!1,be&&(t.flags&1048576)!==0&&Qf(t,ea,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ha(e,t),e=t.pendingProps;var c=Or(t,Je.current);br(t,i),c=vs(null,t,l,e,c,i);var d=gs();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,un(l)?(d=!0,Xo(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,us(t),c.updater=pa,t.stateNode=c,c._reactInternals=t,xs(t,l,e,i),t=Os(null,t,l,!0,d,i)):(t.tag=0,be&&d&&Zl(t),on(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(ha(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=Uy(l),e=jn(l,e),c){case 0:t=ks(null,t,l,e,i);break e;case 1:t=Wd(null,t,l,e,i);break e;case 11:t=jd(null,t,l,e,i);break e;case 14:t=Ud(null,t,l,jn(l.type,e),i);break e}throw Error(o(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:jn(l,c),ks(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:jn(l,c),Wd(e,t,l,c,i);case 3:e:{if(Hd(t),e===null)throw Error(o(387));l=t.pendingProps,d=t.memoizedState,c=d.element,od(e,t),aa(t,l,null,i);var h=t.memoizedState;if(l=h.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=Dr(Error(o(423)),t),t=Yd(e,t,l,i,c);break e}else if(l!==c){c=Dr(Error(o(424)),t),t=Yd(e,t,l,i,c);break e}else for(Sn=xt(t.stateNode.containerInfo.firstChild),En=t,be=!0,Mn=null,i=rd(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Rr(),l===c){t=at(e,t,i);break e}on(e,t,l,i)}t=t.child}return t;case 5:return sd(t),e===null&&ts(t),l=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,h=c.children,Kl(l,c)?h=null:d!==null&&Kl(l,d)&&(t.flags|=32),Bd(e,t),on(e,t,h,i),t.child;case 6:return e===null&&ts(t),null;case 13:return Vd(e,t,i);case 4:return cs(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ir(t,null,l,i):on(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:jn(l,c),jd(e,t,l,c,i);case 7:return on(e,t,t.pendingProps,i),t.child;case 8:return on(e,t,t.pendingProps.children,i),t.child;case 12:return on(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,d=t.memoizedProps,h=c.value,Ne(ra,l._currentValue),l._currentValue=h,d!==null)if(Fn(d.value,h)){if(d.children===c.children&&!sn.current){t=at(e,t,i);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){h=d.child;for(var E=w.firstContext;E!==null;){if(E.context===l){if(d.tag===1){E=ot(-1,i&-i),E.tag=2;var N=d.updateQueue;if(N!==null){N=N.shared;var F=N.pending;F===null?E.next=E:(E.next=F.next,F.next=E),N.pending=E}}d.lanes|=i,E=d.alternate,E!==null&&(E.lanes|=i),ls(d.return,i,t),w.lanes|=i;break}E=E.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(o(341));h.lanes|=i,w=h.alternate,w!==null&&(w.lanes|=i),ls(h,i,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}on(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,br(t,i),c=Tn(c),l=l(c),t.flags|=1,on(e,t,l,i),t.child;case 14:return l=t.type,c=jn(l,t.pendingProps),c=jn(l.type,c),Ud(e,t,l,c,i);case 15:return zd(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:jn(l,c),ha(e,t),t.tag=1,un(l)?(e=!0,Xo(t)):e=!1,br(t,i),Id(t,l,c),xs(t,l,c,i),Os(null,t,l,!0,e,i);case 19:return Gd(e,t,i);case 22:return $d(e,t,i)}throw Error(o(156,t.tag))};function yp(e,t){return Qc(e,t)}function jy(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,t,i,l){return new jy(e,t,i,l)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uy(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===se)return 11;if(e===Oe)return 14}return 2}function Lt(e,t){var i=e.alternate;return i===null?(i=In(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function ka(e,t,i,l,c,d){var h=2;if(l=e,typeof e=="function")Ks(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case ee:return or(i.children,c,d,t);case re:h=8,c|=8;break;case de:return e=In(12,i,t,c|2),e.elementType=de,e.lanes=d,e;case V:return e=In(13,i,t,c),e.elementType=V,e.lanes=d,e;case fe:return e=In(19,i,t,c),e.elementType=fe,e.lanes=d,e;case he:return Oa(i,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:h=10;break e;case ae:h=9;break e;case se:h=11;break e;case Oe:h=14;break e;case Se:h=16,l=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=In(h,i,t,c),t.elementType=e,t.type=l,t.lanes=d,t}function or(e,t,i,l){return e=In(7,e,l,t),e.lanes=i,e}function Oa(e,t,i,l){return e=In(22,e,l,t),e.elementType=he,e.lanes=i,e.stateNode={isHidden:!1},e}function Gs(e,t,i){return e=In(6,e,null,t),e.lanes=i,e}function qs(e,t,i){return t=In(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zy(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Qs(e,t,i,l,c,d,h,w,E){return e=new zy(e,t,i,w,E),t===1?(t=1,d===!0&&(t|=8)):t=0,d=In(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},us(d),e}function $y(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function wp(e){if(!e)return At;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(un(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(un(i))return Kf(e,i,t)}return t}function Ep(e,t,i,l,c,d,h,w,E){return e=Qs(i,l,!0,e,c,d,h,w,E),e.context=wp(null),i=e.current,l=an(),c=Pt(i),d=ot(l,c),d.callback=t??null,Tt(i,d,c),e.current.lanes=c,vi(e,c,l),dn(e,l),e}function Ta(e,t,i,l){var c=t.current,d=an(),h=Pt(c);return i=wp(i),t.context===null?t.context=i:t.pendingContext=i,t=ot(d,h),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Tt(c,t,h),e!==null&&($n(e,c,h,d),oa(e,c,h)),h}function Na(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Xs(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function By(){return null}var Cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}Ra.prototype.render=Js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ta(e,t,null,null)},Ra.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){Ta(null,e,null,null)}),t[et]=null}};function Ra(e){this._internalRoot=e}Ra.prototype.unstable_scheduleHydration=function(e){if(e){var t=of();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Et.length&&t!==0&&t<Et[i].priority;i++);Et.splice(i,0,e),i===0&&sf(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Wy(e,t,i,l,c){if(c){if(typeof l=="function"){var d=l;l=function(){var N=Na(h);d.call(N)}}var h=Ep(t,l,e,0,null,!1,!1,"",xp);return e._reactRootContainer=h,e[et]=h.current,Ri(e.nodeType===8?e.parentNode:e),tr(),h}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var w=l;l=function(){var N=Na(E);w.call(N)}}var E=Qs(e,0,!1,null,null,!1,!1,"",xp);return e._reactRootContainer=E,e[et]=E.current,Ri(e.nodeType===8?e.parentNode:e),tr(function(){Ta(t,E,i,l)}),E}function Pa(e,t,i,l,c){var d=i._reactRootContainer;if(d){var h=d;if(typeof c=="function"){var w=c;c=function(){var E=Na(h);w.call(E)}}Ta(t,h,e,c)}else h=Wy(i,t,e,c,l);return Na(h)}tf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=hi(t.pendingLanes);i!==0&&(xl(t,i|1),dn(t,Me()),(Ce&6)===0&&(jr=Me()+500,kt()))}break;case 13:tr(function(){var l=it(e,1);if(l!==null){var c=an();$n(l,e,1,c)}}),Xs(e,1)}},_l=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var i=an();$n(t,e,134217728,i)}Xs(e,134217728)}},rf=function(e){if(e.tag===13){var t=Pt(e),i=it(e,t);if(i!==null){var l=an();$n(i,e,t,l)}Xs(e,t)}},of=function(){return ke},af=function(e,t){var i=ke;try{return ke=e,t()}finally{ke=i}},vl=function(e,t,i){switch(t){case"input":if(dr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=qo(l);if(!c)throw Error(o(90));_o(l),dr(l,c)}}}break;case"textarea":mr(e,i);break;case"select":t=i.value,t!=null&&Ln(e,!!i.multiple,t,!1)}},Wc=Hs,Hc=tr;var Hy={usingClientEntryPoint:!1,Events:[bi,Ar,qo,$c,Bc,Hs]},Ki={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yy={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:H.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{Ro=ba.inject(Yy),Hn=ba}catch{}}return pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy,pn.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(t))throw Error(o(200));return $y(e,t,null,i)},pn.createRoot=function(e,t){if(!Zs(e))throw Error(o(299));var i=!1,l="",c=Cp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Qs(e,1,!1,null,null,i,!1,l,c),e[et]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Js(t)},pn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Gc(t),e=e===null?null:e.stateNode,e},pn.flushSync=function(e){return tr(e)},pn.hydrate=function(e,t,i){if(!Ia(t))throw Error(o(200));return Pa(null,e,t,!0,i)},pn.hydrateRoot=function(e,t,i){if(!Zs(e))throw Error(o(405));var l=i!=null&&i.hydratedSources||null,c=!1,d="",h=Cp;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),t=Ep(t,null,e,1,i??null,c,!1,d,h),e[et]=t.current,Ri(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new Ra(t)},pn.render=function(e,t,i){if(!Ia(t))throw Error(o(200));return Pa(null,e,t,!1,i)},pn.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(o(40));return e._reactRootContainer?(tr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[et]=null})}),!0):!1},pn.unstable_batchedUpdates=Hs,pn.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!Ia(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Pa(e,t,i,!1,l)},pn.version="18.3.1-next-f1338f8080-20240426",pn}var Np;function Xy(){if(Np)return nu.exports;Np=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),nu.exports=Qy(),nu.exports}var Rp;function Jy(){if(Rp)return La;Rp=1;var n=Xy();return La.createRoot=n.createRoot,La.hydrateRoot=n.hydrateRoot,La}var Zy=Jy();const e1=ho(Zy);function eh(n){return typeof n>"u"||n===null}function n1(n){return typeof n=="object"&&n!==null}function t1(n){return Array.isArray(n)?n:eh(n)?[]:[n]}function r1(n,r){var o,a,s,u;if(r)for(u=Object.keys(r),o=0,a=u.length;o<a;o+=1)s=u[o],n[s]=r[s];return n}function i1(n,r){var o="",a;for(a=0;a<r;a+=1)o+=n;return o}function o1(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var a1=eh,l1=n1,s1=t1,u1=i1,c1=o1,f1=r1,He={isNothing:a1,isObject:l1,toArray:s1,repeat:u1,isNegativeZero:c1,extend:f1};function nh(n,r){var o="",a=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!r&&n.mark.snippet&&(o+=`

`+n.mark.snippet),a+" "+o):a}function ao(n,r){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=r,this.message=nh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ao.prototype=Object.create(Error.prototype);ao.prototype.constructor=ao;ao.prototype.toString=function(r){return this.name+": "+nh(this,r)};var ln=ao;function iu(n,r,o,a,s){var u="",f="",p=Math.floor(s/2)-1;return a-r>p&&(u=" ... ",r=a-p+u.length),o-a>p&&(f=" ...",o=a+p-f.length),{str:u+n.slice(r,o).replace(/\t/g,"→")+f,pos:a-r+u.length}}function ou(n,r){return He.repeat(" ",r-n.length)+n}function d1(n,r){if(r=Object.create(r||null),!n.buffer)return null;r.maxLength||(r.maxLength=79),typeof r.indent!="number"&&(r.indent=1),typeof r.linesBefore!="number"&&(r.linesBefore=3),typeof r.linesAfter!="number"&&(r.linesAfter=2);for(var o=/\r?\n|\r|\0/g,a=[0],s=[],u,f=-1;u=o.exec(n.buffer);)s.push(u.index),a.push(u.index+u[0].length),n.position<=u.index&&f<0&&(f=a.length-2);f<0&&(f=a.length-1);var p="",m,v,g=Math.min(n.line+r.linesAfter,s.length).toString().length,y=r.maxLength-(r.indent+g+3);for(m=1;m<=r.linesBefore&&!(f-m<0);m++)v=iu(n.buffer,a[f-m],s[f-m],n.position-(a[f]-a[f-m]),y),p=He.repeat(" ",r.indent)+ou((n.line-m+1).toString(),g)+" | "+v.str+`
`+p;for(v=iu(n.buffer,a[f],s[f],n.position,y),p+=He.repeat(" ",r.indent)+ou((n.line+1).toString(),g)+" | "+v.str+`
`,p+=He.repeat("-",r.indent+g+3+v.pos)+`^
`,m=1;m<=r.linesAfter&&!(f+m>=s.length);m++)v=iu(n.buffer,a[f+m],s[f+m],n.position-(a[f]-a[f+m]),y),p+=He.repeat(" ",r.indent)+ou((n.line+m+1).toString(),g)+" | "+v.str+`
`;return p.replace(/\n$/,"")}var p1=d1,m1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],h1=["scalar","sequence","mapping"];function v1(n){var r={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(a){r[String(a)]=o})}),r}function g1(n,r){if(r=r||{},Object.keys(r).forEach(function(o){if(m1.indexOf(o)===-1)throw new ln('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=r,this.tag=n,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(o){return o},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.representName=r.representName||null,this.defaultStyle=r.defaultStyle||null,this.multi=r.multi||!1,this.styleAliases=v1(r.styleAliases||null),h1.indexOf(this.kind)===-1)throw new ln('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var Qe=g1;function Ip(n,r){var o=[];return n[r].forEach(function(a){var s=o.length;o.forEach(function(u,f){u.tag===a.tag&&u.kind===a.kind&&u.multi===a.multi&&(s=f)}),o[s]=a}),o}function y1(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},r,o;function a(s){s.multi?(n.multi[s.kind].push(s),n.multi.fallback.push(s)):n[s.kind][s.tag]=n.fallback[s.tag]=s}for(r=0,o=arguments.length;r<o;r+=1)arguments[r].forEach(a);return n}function Tu(n){return this.extend(n)}Tu.prototype.extend=function(r){var o=[],a=[];if(r instanceof Qe)a.push(r);else if(Array.isArray(r))a=a.concat(r);else if(r&&(Array.isArray(r.implicit)||Array.isArray(r.explicit)))r.implicit&&(o=o.concat(r.implicit)),r.explicit&&(a=a.concat(r.explicit));else throw new ln("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(u){if(!(u instanceof Qe))throw new ln("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new ln("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new ln("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(u){if(!(u instanceof Qe))throw new ln("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Tu.prototype);return s.implicit=(this.implicit||[]).concat(o),s.explicit=(this.explicit||[]).concat(a),s.compiledImplicit=Ip(s,"implicit"),s.compiledExplicit=Ip(s,"explicit"),s.compiledTypeMap=y1(s.compiledImplicit,s.compiledExplicit),s};var th=Tu,rh=new Qe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),ih=new Qe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),oh=new Qe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),ah=new th({explicit:[rh,ih,oh]});function w1(n){if(n===null)return!0;var r=n.length;return r===1&&n==="~"||r===4&&(n==="null"||n==="Null"||n==="NULL")}function E1(){return null}function S1(n){return n===null}var lh=new Qe("tag:yaml.org,2002:null",{kind:"scalar",resolve:w1,construct:E1,predicate:S1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function C1(n){if(n===null)return!1;var r=n.length;return r===4&&(n==="true"||n==="True"||n==="TRUE")||r===5&&(n==="false"||n==="False"||n==="FALSE")}function x1(n){return n==="true"||n==="True"||n==="TRUE"}function _1(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var sh=new Qe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:C1,construct:x1,predicate:_1,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function A1(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function k1(n){return 48<=n&&n<=55}function O1(n){return 48<=n&&n<=57}function T1(n){if(n===null)return!1;var r=n.length,o=0,a=!1,s;if(!r)return!1;if(s=n[o],(s==="-"||s==="+")&&(s=n[++o]),s==="0"){if(o+1===r)return!0;if(s=n[++o],s==="b"){for(o++;o<r;o++)if(s=n[o],s!=="_"){if(s!=="0"&&s!=="1")return!1;a=!0}return a&&s!=="_"}if(s==="x"){for(o++;o<r;o++)if(s=n[o],s!=="_"){if(!A1(n.charCodeAt(o)))return!1;a=!0}return a&&s!=="_"}if(s==="o"){for(o++;o<r;o++)if(s=n[o],s!=="_"){if(!k1(n.charCodeAt(o)))return!1;a=!0}return a&&s!=="_"}}if(s==="_")return!1;for(;o<r;o++)if(s=n[o],s!=="_"){if(!O1(n.charCodeAt(o)))return!1;a=!0}return!(!a||s==="_")}function N1(n){var r=n,o=1,a;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),a=r[0],(a==="-"||a==="+")&&(a==="-"&&(o=-1),r=r.slice(1),a=r[0]),r==="0")return 0;if(a==="0"){if(r[1]==="b")return o*parseInt(r.slice(2),2);if(r[1]==="x")return o*parseInt(r.slice(2),16);if(r[1]==="o")return o*parseInt(r.slice(2),8)}return o*parseInt(r,10)}function R1(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!He.isNegativeZero(n)}var uh=new Qe("tag:yaml.org,2002:int",{kind:"scalar",resolve:T1,construct:N1,predicate:R1,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),I1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function P1(n){return!(n===null||!I1.test(n)||n[n.length-1]==="_")}function b1(n){var r,o;return r=n.replace(/_/g,"").toLowerCase(),o=r[0]==="-"?-1:1,"+-".indexOf(r[0])>=0&&(r=r.slice(1)),r===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:r===".nan"?NaN:o*parseFloat(r,10)}var L1=/^[-+]?[0-9]+e/;function D1(n,r){var o;if(isNaN(n))switch(r){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(r){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(r){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(He.isNegativeZero(n))return"-0.0";return o=n.toString(10),L1.test(o)?o.replace("e",".e"):o}function F1(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||He.isNegativeZero(n))}var ch=new Qe("tag:yaml.org,2002:float",{kind:"scalar",resolve:P1,construct:b1,predicate:F1,represent:D1,defaultStyle:"lowercase"}),fh=ah.extend({implicit:[lh,sh,uh,ch]}),dh=fh,ph=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),mh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function M1(n){return n===null?!1:ph.exec(n)!==null||mh.exec(n)!==null}function j1(n){var r,o,a,s,u,f,p,m=0,v=null,g,y,S;if(r=ph.exec(n),r===null&&(r=mh.exec(n)),r===null)throw new Error("Date resolve error");if(o=+r[1],a=+r[2]-1,s=+r[3],!r[4])return new Date(Date.UTC(o,a,s));if(u=+r[4],f=+r[5],p=+r[6],r[7]){for(m=r[7].slice(0,3);m.length<3;)m+="0";m=+m}return r[9]&&(g=+r[10],y=+(r[11]||0),v=(g*60+y)*6e4,r[9]==="-"&&(v=-v)),S=new Date(Date.UTC(o,a,s,u,f,p,m)),v&&S.setTime(S.getTime()-v),S}function U1(n){return n.toISOString()}var hh=new Qe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:M1,construct:j1,instanceOf:Date,represent:U1});function z1(n){return n==="<<"||n===null}var vh=new Qe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:z1}),nc=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function $1(n){if(n===null)return!1;var r,o,a=0,s=n.length,u=nc;for(o=0;o<s;o++)if(r=u.indexOf(n.charAt(o)),!(r>64)){if(r<0)return!1;a+=6}return a%8===0}function B1(n){var r,o,a=n.replace(/[\r\n=]/g,""),s=a.length,u=nc,f=0,p=[];for(r=0;r<s;r++)r%4===0&&r&&(p.push(f>>16&255),p.push(f>>8&255),p.push(f&255)),f=f<<6|u.indexOf(a.charAt(r));return o=s%4*6,o===0?(p.push(f>>16&255),p.push(f>>8&255),p.push(f&255)):o===18?(p.push(f>>10&255),p.push(f>>2&255)):o===12&&p.push(f>>4&255),new Uint8Array(p)}function W1(n){var r="",o=0,a,s,u=n.length,f=nc;for(a=0;a<u;a++)a%3===0&&a&&(r+=f[o>>18&63],r+=f[o>>12&63],r+=f[o>>6&63],r+=f[o&63]),o=(o<<8)+n[a];return s=u%3,s===0?(r+=f[o>>18&63],r+=f[o>>12&63],r+=f[o>>6&63],r+=f[o&63]):s===2?(r+=f[o>>10&63],r+=f[o>>4&63],r+=f[o<<2&63],r+=f[64]):s===1&&(r+=f[o>>2&63],r+=f[o<<4&63],r+=f[64],r+=f[64]),r}function H1(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var gh=new Qe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:$1,construct:B1,predicate:H1,represent:W1}),Y1=Object.prototype.hasOwnProperty,V1=Object.prototype.toString;function K1(n){if(n===null)return!0;var r=[],o,a,s,u,f,p=n;for(o=0,a=p.length;o<a;o+=1){if(s=p[o],f=!1,V1.call(s)!=="[object Object]")return!1;for(u in s)if(Y1.call(s,u))if(!f)f=!0;else return!1;if(!f)return!1;if(r.indexOf(u)===-1)r.push(u);else return!1}return!0}function G1(n){return n!==null?n:[]}var yh=new Qe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:K1,construct:G1}),q1=Object.prototype.toString;function Q1(n){if(n===null)return!0;var r,o,a,s,u,f=n;for(u=new Array(f.length),r=0,o=f.length;r<o;r+=1){if(a=f[r],q1.call(a)!=="[object Object]"||(s=Object.keys(a),s.length!==1))return!1;u[r]=[s[0],a[s[0]]]}return!0}function X1(n){if(n===null)return[];var r,o,a,s,u,f=n;for(u=new Array(f.length),r=0,o=f.length;r<o;r+=1)a=f[r],s=Object.keys(a),u[r]=[s[0],a[s[0]]];return u}var wh=new Qe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:Q1,construct:X1}),J1=Object.prototype.hasOwnProperty;function Z1(n){if(n===null)return!0;var r,o=n;for(r in o)if(J1.call(o,r)&&o[r]!==null)return!1;return!0}function ew(n){return n!==null?n:{}}var Eh=new Qe("tag:yaml.org,2002:set",{kind:"mapping",resolve:Z1,construct:ew}),tc=dh.extend({implicit:[hh,vh],explicit:[gh,yh,wh,Eh]}),Ut=Object.prototype.hasOwnProperty,Ha=1,Sh=2,Ch=3,Ya=4,au=1,nw=2,Pp=3,tw=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,rw=/[\x85\u2028\u2029]/,iw=/[,\[\]\{\}]/,xh=/^(?:!|!!|![a-z\-]+!)$/i,_h=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function bp(n){return Object.prototype.toString.call(n)}function Xn(n){return n===10||n===13}function lr(n){return n===9||n===32}function mn(n){return n===9||n===32||n===10||n===13}function Hr(n){return n===44||n===91||n===93||n===123||n===125}function ow(n){var r;return 48<=n&&n<=57?n-48:(r=n|32,97<=r&&r<=102?r-97+10:-1)}function aw(n){return n===120?2:n===117?4:n===85?8:0}function lw(n){return 48<=n&&n<=57?n-48:-1}function Lp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}function sw(n){return n<=65535?String.fromCharCode(n):String.fromCharCode((n-65536>>10)+55296,(n-65536&1023)+56320)}function Ah(n,r,o){r==="__proto__"?Object.defineProperty(n,r,{configurable:!0,enumerable:!0,writable:!0,value:o}):n[r]=o}var kh=new Array(256),Oh=new Array(256);for(var zr=0;zr<256;zr++)kh[zr]=Lp(zr)?1:0,Oh[zr]=Lp(zr);function uw(n,r){this.input=n,this.filename=r.filename||null,this.schema=r.schema||tc,this.onWarning=r.onWarning||null,this.legacy=r.legacy||!1,this.json=r.json||!1,this.listener=r.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=n.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Th(n,r){var o={name:n.filename,buffer:n.input.slice(0,-1),position:n.position,line:n.line,column:n.position-n.lineStart};return o.snippet=p1(o),new ln(r,o)}function ne(n,r){throw Th(n,r)}function Va(n,r){n.onWarning&&n.onWarning.call(null,Th(n,r))}var Dp={YAML:function(r,o,a){var s,u,f;r.version!==null&&ne(r,"duplication of %YAML directive"),a.length!==1&&ne(r,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(a[0]),s===null&&ne(r,"ill-formed argument of the YAML directive"),u=parseInt(s[1],10),f=parseInt(s[2],10),u!==1&&ne(r,"unacceptable YAML version of the document"),r.version=a[0],r.checkLineBreaks=f<2,f!==1&&f!==2&&Va(r,"unsupported YAML version of the document")},TAG:function(r,o,a){var s,u;a.length!==2&&ne(r,"TAG directive accepts exactly two arguments"),s=a[0],u=a[1],xh.test(s)||ne(r,"ill-formed tag handle (first argument) of the TAG directive"),Ut.call(r.tagMap,s)&&ne(r,'there is a previously declared suffix for "'+s+'" tag handle'),_h.test(u)||ne(r,"ill-formed tag prefix (second argument) of the TAG directive");try{u=decodeURIComponent(u)}catch{ne(r,"tag prefix is malformed: "+u)}r.tagMap[s]=u}};function Mt(n,r,o,a){var s,u,f,p;if(r<o){if(p=n.input.slice(r,o),a)for(s=0,u=p.length;s<u;s+=1)f=p.charCodeAt(s),f===9||32<=f&&f<=1114111||ne(n,"expected valid JSON character");else tw.test(p)&&ne(n,"the stream contains non-printable characters");n.result+=p}}function Fp(n,r,o,a){var s,u,f,p;for(He.isObject(o)||ne(n,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(o),f=0,p=s.length;f<p;f+=1)u=s[f],Ut.call(r,u)||(Ah(r,u,o[u]),a[u]=!0)}function Yr(n,r,o,a,s,u,f,p,m){var v,g;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),v=0,g=s.length;v<g;v+=1)Array.isArray(s[v])&&ne(n,"nested arrays are not supported inside keys"),typeof s=="object"&&bp(s[v])==="[object Object]"&&(s[v]="[object Object]");if(typeof s=="object"&&bp(s)==="[object Object]"&&(s="[object Object]"),s=String(s),r===null&&(r={}),a==="tag:yaml.org,2002:merge")if(Array.isArray(u))for(v=0,g=u.length;v<g;v+=1)Fp(n,r,u[v],o);else Fp(n,r,u,o);else!n.json&&!Ut.call(o,s)&&Ut.call(r,s)&&(n.line=f||n.line,n.lineStart=p||n.lineStart,n.position=m||n.position,ne(n,"duplicated mapping key")),Ah(r,s,u),delete o[s];return r}function rc(n){var r;r=n.input.charCodeAt(n.position),r===10?n.position++:r===13?(n.position++,n.input.charCodeAt(n.position)===10&&n.position++):ne(n,"a line break is expected"),n.line+=1,n.lineStart=n.position,n.firstTabInLine=-1}function ze(n,r,o){for(var a=0,s=n.input.charCodeAt(n.position);s!==0;){for(;lr(s);)s===9&&n.firstTabInLine===-1&&(n.firstTabInLine=n.position),s=n.input.charCodeAt(++n.position);if(r&&s===35)do s=n.input.charCodeAt(++n.position);while(s!==10&&s!==13&&s!==0);if(Xn(s))for(rc(n),s=n.input.charCodeAt(n.position),a++,n.lineIndent=0;s===32;)n.lineIndent++,s=n.input.charCodeAt(++n.position);else break}return o!==-1&&a!==0&&n.lineIndent<o&&Va(n,"deficient indentation"),a}function tl(n){var r=n.position,o;return o=n.input.charCodeAt(r),!!((o===45||o===46)&&o===n.input.charCodeAt(r+1)&&o===n.input.charCodeAt(r+2)&&(r+=3,o=n.input.charCodeAt(r),o===0||mn(o)))}function ic(n,r){r===1?n.result+=" ":r>1&&(n.result+=He.repeat(`
`,r-1))}function cw(n,r,o){var a,s,u,f,p,m,v,g,y=n.kind,S=n.result,x;if(x=n.input.charCodeAt(n.position),mn(x)||Hr(x)||x===35||x===38||x===42||x===33||x===124||x===62||x===39||x===34||x===37||x===64||x===96||(x===63||x===45)&&(s=n.input.charCodeAt(n.position+1),mn(s)||o&&Hr(s)))return!1;for(n.kind="scalar",n.result="",u=f=n.position,p=!1;x!==0;){if(x===58){if(s=n.input.charCodeAt(n.position+1),mn(s)||o&&Hr(s))break}else if(x===35){if(a=n.input.charCodeAt(n.position-1),mn(a))break}else{if(n.position===n.lineStart&&tl(n)||o&&Hr(x))break;if(Xn(x))if(m=n.line,v=n.lineStart,g=n.lineIndent,ze(n,!1,-1),n.lineIndent>=r){p=!0,x=n.input.charCodeAt(n.position);continue}else{n.position=f,n.line=m,n.lineStart=v,n.lineIndent=g;break}}p&&(Mt(n,u,f,!1),ic(n,n.line-m),u=f=n.position,p=!1),lr(x)||(f=n.position+1),x=n.input.charCodeAt(++n.position)}return Mt(n,u,f,!1),n.result?!0:(n.kind=y,n.result=S,!1)}function fw(n,r){var o,a,s;if(o=n.input.charCodeAt(n.position),o!==39)return!1;for(n.kind="scalar",n.result="",n.position++,a=s=n.position;(o=n.input.charCodeAt(n.position))!==0;)if(o===39)if(Mt(n,a,n.position,!0),o=n.input.charCodeAt(++n.position),o===39)a=n.position,n.position++,s=n.position;else return!0;else Xn(o)?(Mt(n,a,s,!0),ic(n,ze(n,!1,r)),a=s=n.position):n.position===n.lineStart&&tl(n)?ne(n,"unexpected end of the document within a single quoted scalar"):(n.position++,s=n.position);ne(n,"unexpected end of the stream within a single quoted scalar")}function dw(n,r){var o,a,s,u,f,p;if(p=n.input.charCodeAt(n.position),p!==34)return!1;for(n.kind="scalar",n.result="",n.position++,o=a=n.position;(p=n.input.charCodeAt(n.position))!==0;){if(p===34)return Mt(n,o,n.position,!0),n.position++,!0;if(p===92){if(Mt(n,o,n.position,!0),p=n.input.charCodeAt(++n.position),Xn(p))ze(n,!1,r);else if(p<256&&kh[p])n.result+=Oh[p],n.position++;else if((f=aw(p))>0){for(s=f,u=0;s>0;s--)p=n.input.charCodeAt(++n.position),(f=ow(p))>=0?u=(u<<4)+f:ne(n,"expected hexadecimal character");n.result+=sw(u),n.position++}else ne(n,"unknown escape sequence");o=a=n.position}else Xn(p)?(Mt(n,o,a,!0),ic(n,ze(n,!1,r)),o=a=n.position):n.position===n.lineStart&&tl(n)?ne(n,"unexpected end of the document within a double quoted scalar"):(n.position++,a=n.position)}ne(n,"unexpected end of the stream within a double quoted scalar")}function pw(n,r){var o=!0,a,s,u,f=n.tag,p,m=n.anchor,v,g,y,S,x,I=Object.create(null),R,T,M,P;if(P=n.input.charCodeAt(n.position),P===91)g=93,x=!1,p=[];else if(P===123)g=125,x=!0,p={};else return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=p),P=n.input.charCodeAt(++n.position);P!==0;){if(ze(n,!0,r),P=n.input.charCodeAt(n.position),P===g)return n.position++,n.tag=f,n.anchor=m,n.kind=x?"mapping":"sequence",n.result=p,!0;o?P===44&&ne(n,"expected the node content, but found ','"):ne(n,"missed comma between flow collection entries"),T=R=M=null,y=S=!1,P===63&&(v=n.input.charCodeAt(n.position+1),mn(v)&&(y=S=!0,n.position++,ze(n,!0,r))),a=n.line,s=n.lineStart,u=n.position,Qr(n,r,Ha,!1,!0),T=n.tag,R=n.result,ze(n,!0,r),P=n.input.charCodeAt(n.position),(S||n.line===a)&&P===58&&(y=!0,P=n.input.charCodeAt(++n.position),ze(n,!0,r),Qr(n,r,Ha,!1,!0),M=n.result),x?Yr(n,p,I,T,R,M,a,s,u):y?p.push(Yr(n,null,I,T,R,M,a,s,u)):p.push(R),ze(n,!0,r),P=n.input.charCodeAt(n.position),P===44?(o=!0,P=n.input.charCodeAt(++n.position)):o=!1}ne(n,"unexpected end of the stream within a flow collection")}function mw(n,r){var o,a,s=au,u=!1,f=!1,p=r,m=0,v=!1,g,y;if(y=n.input.charCodeAt(n.position),y===124)a=!1;else if(y===62)a=!0;else return!1;for(n.kind="scalar",n.result="";y!==0;)if(y=n.input.charCodeAt(++n.position),y===43||y===45)au===s?s=y===43?Pp:nw:ne(n,"repeat of a chomping mode identifier");else if((g=lw(y))>=0)g===0?ne(n,"bad explicit indentation width of a block scalar; it cannot be less than one"):f?ne(n,"repeat of an indentation width identifier"):(p=r+g-1,f=!0);else break;if(lr(y)){do y=n.input.charCodeAt(++n.position);while(lr(y));if(y===35)do y=n.input.charCodeAt(++n.position);while(!Xn(y)&&y!==0)}for(;y!==0;){for(rc(n),n.lineIndent=0,y=n.input.charCodeAt(n.position);(!f||n.lineIndent<p)&&y===32;)n.lineIndent++,y=n.input.charCodeAt(++n.position);if(!f&&n.lineIndent>p&&(p=n.lineIndent),Xn(y)){m++;continue}if(n.lineIndent<p){s===Pp?n.result+=He.repeat(`
`,u?1+m:m):s===au&&u&&(n.result+=`
`);break}for(a?lr(y)?(v=!0,n.result+=He.repeat(`
`,u?1+m:m)):v?(v=!1,n.result+=He.repeat(`
`,m+1)):m===0?u&&(n.result+=" "):n.result+=He.repeat(`
`,m):n.result+=He.repeat(`
`,u?1+m:m),u=!0,f=!0,m=0,o=n.position;!Xn(y)&&y!==0;)y=n.input.charCodeAt(++n.position);Mt(n,o,n.position,!1)}return!0}function Mp(n,r){var o,a=n.tag,s=n.anchor,u=[],f,p=!1,m;if(n.firstTabInLine!==-1)return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=u),m=n.input.charCodeAt(n.position);m!==0&&(n.firstTabInLine!==-1&&(n.position=n.firstTabInLine,ne(n,"tab characters must not be used in indentation")),!(m!==45||(f=n.input.charCodeAt(n.position+1),!mn(f))));){if(p=!0,n.position++,ze(n,!0,-1)&&n.lineIndent<=r){u.push(null),m=n.input.charCodeAt(n.position);continue}if(o=n.line,Qr(n,r,Ch,!1,!0),u.push(n.result),ze(n,!0,-1),m=n.input.charCodeAt(n.position),(n.line===o||n.lineIndent>r)&&m!==0)ne(n,"bad indentation of a sequence entry");else if(n.lineIndent<r)break}return p?(n.tag=a,n.anchor=s,n.kind="sequence",n.result=u,!0):!1}function hw(n,r,o){var a,s,u,f,p,m,v=n.tag,g=n.anchor,y={},S=Object.create(null),x=null,I=null,R=null,T=!1,M=!1,P;if(n.firstTabInLine!==-1)return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=y),P=n.input.charCodeAt(n.position);P!==0;){if(!T&&n.firstTabInLine!==-1&&(n.position=n.firstTabInLine,ne(n,"tab characters must not be used in indentation")),a=n.input.charCodeAt(n.position+1),u=n.line,(P===63||P===58)&&mn(a))P===63?(T&&(Yr(n,y,S,x,I,null,f,p,m),x=I=R=null),M=!0,T=!0,s=!0):T?(T=!1,s=!0):ne(n,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),n.position+=1,P=a;else{if(f=n.line,p=n.lineStart,m=n.position,!Qr(n,o,Sh,!1,!0))break;if(n.line===u){for(P=n.input.charCodeAt(n.position);lr(P);)P=n.input.charCodeAt(++n.position);if(P===58)P=n.input.charCodeAt(++n.position),mn(P)||ne(n,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(Yr(n,y,S,x,I,null,f,p,m),x=I=R=null),M=!0,T=!1,s=!1,x=n.tag,I=n.result;else if(M)ne(n,"can not read an implicit mapping pair; a colon is missed");else return n.tag=v,n.anchor=g,!0}else if(M)ne(n,"can not read a block mapping entry; a multiline key may not be an implicit key");else return n.tag=v,n.anchor=g,!0}if((n.line===u||n.lineIndent>r)&&(T&&(f=n.line,p=n.lineStart,m=n.position),Qr(n,r,Ya,!0,s)&&(T?I=n.result:R=n.result),T||(Yr(n,y,S,x,I,R,f,p,m),x=I=R=null),ze(n,!0,-1),P=n.input.charCodeAt(n.position)),(n.line===u||n.lineIndent>r)&&P!==0)ne(n,"bad indentation of a mapping entry");else if(n.lineIndent<r)break}return T&&Yr(n,y,S,x,I,null,f,p,m),M&&(n.tag=v,n.anchor=g,n.kind="mapping",n.result=y),M}function vw(n){var r,o=!1,a=!1,s,u,f;if(f=n.input.charCodeAt(n.position),f!==33)return!1;if(n.tag!==null&&ne(n,"duplication of a tag property"),f=n.input.charCodeAt(++n.position),f===60?(o=!0,f=n.input.charCodeAt(++n.position)):f===33?(a=!0,s="!!",f=n.input.charCodeAt(++n.position)):s="!",r=n.position,o){do f=n.input.charCodeAt(++n.position);while(f!==0&&f!==62);n.position<n.length?(u=n.input.slice(r,n.position),f=n.input.charCodeAt(++n.position)):ne(n,"unexpected end of the stream within a verbatim tag")}else{for(;f!==0&&!mn(f);)f===33&&(a?ne(n,"tag suffix cannot contain exclamation marks"):(s=n.input.slice(r-1,n.position+1),xh.test(s)||ne(n,"named tag handle cannot contain such characters"),a=!0,r=n.position+1)),f=n.input.charCodeAt(++n.position);u=n.input.slice(r,n.position),iw.test(u)&&ne(n,"tag suffix cannot contain flow indicator characters")}u&&!_h.test(u)&&ne(n,"tag name cannot contain such characters: "+u);try{u=decodeURIComponent(u)}catch{ne(n,"tag name is malformed: "+u)}return o?n.tag=u:Ut.call(n.tagMap,s)?n.tag=n.tagMap[s]+u:s==="!"?n.tag="!"+u:s==="!!"?n.tag="tag:yaml.org,2002:"+u:ne(n,'undeclared tag handle "'+s+'"'),!0}function gw(n){var r,o;if(o=n.input.charCodeAt(n.position),o!==38)return!1;for(n.anchor!==null&&ne(n,"duplication of an anchor property"),o=n.input.charCodeAt(++n.position),r=n.position;o!==0&&!mn(o)&&!Hr(o);)o=n.input.charCodeAt(++n.position);return n.position===r&&ne(n,"name of an anchor node must contain at least one character"),n.anchor=n.input.slice(r,n.position),!0}function yw(n){var r,o,a;if(a=n.input.charCodeAt(n.position),a!==42)return!1;for(a=n.input.charCodeAt(++n.position),r=n.position;a!==0&&!mn(a)&&!Hr(a);)a=n.input.charCodeAt(++n.position);return n.position===r&&ne(n,"name of an alias node must contain at least one character"),o=n.input.slice(r,n.position),Ut.call(n.anchorMap,o)||ne(n,'unidentified alias "'+o+'"'),n.result=n.anchorMap[o],ze(n,!0,-1),!0}function Qr(n,r,o,a,s){var u,f,p,m=1,v=!1,g=!1,y,S,x,I,R,T;if(n.listener!==null&&n.listener("open",n),n.tag=null,n.anchor=null,n.kind=null,n.result=null,u=f=p=Ya===o||Ch===o,a&&ze(n,!0,-1)&&(v=!0,n.lineIndent>r?m=1:n.lineIndent===r?m=0:n.lineIndent<r&&(m=-1)),m===1)for(;vw(n)||gw(n);)ze(n,!0,-1)?(v=!0,p=u,n.lineIndent>r?m=1:n.lineIndent===r?m=0:n.lineIndent<r&&(m=-1)):p=!1;if(p&&(p=v||s),(m===1||Ya===o)&&(Ha===o||Sh===o?R=r:R=r+1,T=n.position-n.lineStart,m===1?p&&(Mp(n,T)||hw(n,T,R))||pw(n,R)?g=!0:(f&&mw(n,R)||fw(n,R)||dw(n,R)?g=!0:yw(n)?(g=!0,(n.tag!==null||n.anchor!==null)&&ne(n,"alias node should not have any properties")):cw(n,R,Ha===o)&&(g=!0,n.tag===null&&(n.tag="?")),n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):m===0&&(g=p&&Mp(n,T))),n.tag===null)n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);else if(n.tag==="?"){for(n.result!==null&&n.kind!=="scalar"&&ne(n,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+n.kind+'"'),y=0,S=n.implicitTypes.length;y<S;y+=1)if(I=n.implicitTypes[y],I.resolve(n.result)){n.result=I.construct(n.result),n.tag=I.tag,n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);break}}else if(n.tag!=="!"){if(Ut.call(n.typeMap[n.kind||"fallback"],n.tag))I=n.typeMap[n.kind||"fallback"][n.tag];else for(I=null,x=n.typeMap.multi[n.kind||"fallback"],y=0,S=x.length;y<S;y+=1)if(n.tag.slice(0,x[y].tag.length)===x[y].tag){I=x[y];break}I||ne(n,"unknown tag !<"+n.tag+">"),n.result!==null&&I.kind!==n.kind&&ne(n,"unacceptable node kind for !<"+n.tag+'> tag; it should be "'+I.kind+'", not "'+n.kind+'"'),I.resolve(n.result,n.tag)?(n.result=I.construct(n.result,n.tag),n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):ne(n,"cannot resolve a node with !<"+n.tag+"> explicit tag")}return n.listener!==null&&n.listener("close",n),n.tag!==null||n.anchor!==null||g}function ww(n){var r=n.position,o,a,s,u=!1,f;for(n.version=null,n.checkLineBreaks=n.legacy,n.tagMap=Object.create(null),n.anchorMap=Object.create(null);(f=n.input.charCodeAt(n.position))!==0&&(ze(n,!0,-1),f=n.input.charCodeAt(n.position),!(n.lineIndent>0||f!==37));){for(u=!0,f=n.input.charCodeAt(++n.position),o=n.position;f!==0&&!mn(f);)f=n.input.charCodeAt(++n.position);for(a=n.input.slice(o,n.position),s=[],a.length<1&&ne(n,"directive name must not be less than one character in length");f!==0;){for(;lr(f);)f=n.input.charCodeAt(++n.position);if(f===35){do f=n.input.charCodeAt(++n.position);while(f!==0&&!Xn(f));break}if(Xn(f))break;for(o=n.position;f!==0&&!mn(f);)f=n.input.charCodeAt(++n.position);s.push(n.input.slice(o,n.position))}f!==0&&rc(n),Ut.call(Dp,a)?Dp[a](n,a,s):Va(n,'unknown document directive "'+a+'"')}if(ze(n,!0,-1),n.lineIndent===0&&n.input.charCodeAt(n.position)===45&&n.input.charCodeAt(n.position+1)===45&&n.input.charCodeAt(n.position+2)===45?(n.position+=3,ze(n,!0,-1)):u&&ne(n,"directives end mark is expected"),Qr(n,n.lineIndent-1,Ya,!1,!0),ze(n,!0,-1),n.checkLineBreaks&&rw.test(n.input.slice(r,n.position))&&Va(n,"non-ASCII line breaks are interpreted as content"),n.documents.push(n.result),n.position===n.lineStart&&tl(n)){n.input.charCodeAt(n.position)===46&&(n.position+=3,ze(n,!0,-1));return}if(n.position<n.length-1)ne(n,"end of the stream or a document separator is expected");else return}function Nh(n,r){n=String(n),r=r||{},n.length!==0&&(n.charCodeAt(n.length-1)!==10&&n.charCodeAt(n.length-1)!==13&&(n+=`
`),n.charCodeAt(0)===65279&&(n=n.slice(1)));var o=new uw(n,r),a=n.indexOf("\0");for(a!==-1&&(o.position=a,ne(o,"null byte is not allowed in input")),o.input+="\0";o.input.charCodeAt(o.position)===32;)o.lineIndent+=1,o.position+=1;for(;o.position<o.length-1;)ww(o);return o.documents}function Ew(n,r,o){r!==null&&typeof r=="object"&&typeof o>"u"&&(o=r,r=null);var a=Nh(n,o);if(typeof r!="function")return a;for(var s=0,u=a.length;s<u;s+=1)r(a[s])}function Sw(n,r){var o=Nh(n,r);if(o.length!==0){if(o.length===1)return o[0];throw new ln("expected a single document in the stream, but found more")}}var Cw=Ew,xw=Sw,Rh={loadAll:Cw,load:xw},Ih=Object.prototype.toString,Ph=Object.prototype.hasOwnProperty,oc=65279,_w=9,lo=10,Aw=13,kw=32,Ow=33,Tw=34,Nu=35,Nw=37,Rw=38,Iw=39,Pw=42,bh=44,bw=45,Ka=58,Lw=61,Dw=62,Fw=63,Mw=64,Lh=91,Dh=93,jw=96,Fh=123,Uw=124,Mh=125,tn={};tn[0]="\\0";tn[7]="\\a";tn[8]="\\b";tn[9]="\\t";tn[10]="\\n";tn[11]="\\v";tn[12]="\\f";tn[13]="\\r";tn[27]="\\e";tn[34]='\\"';tn[92]="\\\\";tn[133]="\\N";tn[160]="\\_";tn[8232]="\\L";tn[8233]="\\P";var zw=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],$w=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Bw(n,r){var o,a,s,u,f,p,m;if(r===null)return{};for(o={},a=Object.keys(r),s=0,u=a.length;s<u;s+=1)f=a[s],p=String(r[f]),f.slice(0,2)==="!!"&&(f="tag:yaml.org,2002:"+f.slice(2)),m=n.compiledTypeMap.fallback[f],m&&Ph.call(m.styleAliases,p)&&(p=m.styleAliases[p]),o[f]=p;return o}function Ww(n){var r,o,a;if(r=n.toString(16).toUpperCase(),n<=255)o="x",a=2;else if(n<=65535)o="u",a=4;else if(n<=4294967295)o="U",a=8;else throw new ln("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+o+He.repeat("0",a-r.length)+r}var Hw=1,so=2;function Yw(n){this.schema=n.schema||tc,this.indent=Math.max(1,n.indent||2),this.noArrayIndent=n.noArrayIndent||!1,this.skipInvalid=n.skipInvalid||!1,this.flowLevel=He.isNothing(n.flowLevel)?-1:n.flowLevel,this.styleMap=Bw(this.schema,n.styles||null),this.sortKeys=n.sortKeys||!1,this.lineWidth=n.lineWidth||80,this.noRefs=n.noRefs||!1,this.noCompatMode=n.noCompatMode||!1,this.condenseFlow=n.condenseFlow||!1,this.quotingType=n.quotingType==='"'?so:Hw,this.forceQuotes=n.forceQuotes||!1,this.replacer=typeof n.replacer=="function"?n.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function jp(n,r){for(var o=He.repeat(" ",r),a=0,s=-1,u="",f,p=n.length;a<p;)s=n.indexOf(`
`,a),s===-1?(f=n.slice(a),a=p):(f=n.slice(a,s+1),a=s+1),f.length&&f!==`
`&&(u+=o),u+=f;return u}function Ru(n,r){return`
`+He.repeat(" ",n.indent*r)}function Vw(n,r){var o,a,s;for(o=0,a=n.implicitTypes.length;o<a;o+=1)if(s=n.implicitTypes[o],s.resolve(r))return!0;return!1}function Ga(n){return n===kw||n===_w}function uo(n){return 32<=n&&n<=126||161<=n&&n<=55295&&n!==8232&&n!==8233||57344<=n&&n<=65533&&n!==oc||65536<=n&&n<=1114111}function Up(n){return uo(n)&&n!==oc&&n!==Aw&&n!==lo}function zp(n,r,o){var a=Up(n),s=a&&!Ga(n);return(o?a:a&&n!==bh&&n!==Lh&&n!==Dh&&n!==Fh&&n!==Mh)&&n!==Nu&&!(r===Ka&&!s)||Up(r)&&!Ga(r)&&n===Nu||r===Ka&&s}function Kw(n){return uo(n)&&n!==oc&&!Ga(n)&&n!==bw&&n!==Fw&&n!==Ka&&n!==bh&&n!==Lh&&n!==Dh&&n!==Fh&&n!==Mh&&n!==Nu&&n!==Rw&&n!==Pw&&n!==Ow&&n!==Uw&&n!==Lw&&n!==Dw&&n!==Iw&&n!==Tw&&n!==Nw&&n!==Mw&&n!==jw}function Gw(n){return!Ga(n)&&n!==Ka}function Qi(n,r){var o=n.charCodeAt(r),a;return o>=55296&&o<=56319&&r+1<n.length&&(a=n.charCodeAt(r+1),a>=56320&&a<=57343)?(o-55296)*1024+a-56320+65536:o}function jh(n){var r=/^\n* /;return r.test(n)}var Uh=1,Iu=2,zh=3,$h=4,Wr=5;function qw(n,r,o,a,s,u,f,p){var m,v=0,g=null,y=!1,S=!1,x=a!==-1,I=-1,R=Kw(Qi(n,0))&&Gw(Qi(n,n.length-1));if(r||f)for(m=0;m<n.length;v>=65536?m+=2:m++){if(v=Qi(n,m),!uo(v))return Wr;R=R&&zp(v,g,p),g=v}else{for(m=0;m<n.length;v>=65536?m+=2:m++){if(v=Qi(n,m),v===lo)y=!0,x&&(S=S||m-I-1>a&&n[I+1]!==" ",I=m);else if(!uo(v))return Wr;R=R&&zp(v,g,p),g=v}S=S||x&&m-I-1>a&&n[I+1]!==" "}return!y&&!S?R&&!f&&!s(n)?Uh:u===so?Wr:Iu:o>9&&jh(n)?Wr:f?u===so?Wr:Iu:S?$h:zh}function Qw(n,r,o,a,s){n.dump=(function(){if(r.length===0)return n.quotingType===so?'""':"''";if(!n.noCompatMode&&(zw.indexOf(r)!==-1||$w.test(r)))return n.quotingType===so?'"'+r+'"':"'"+r+"'";var u=n.indent*Math.max(1,o),f=n.lineWidth===-1?-1:Math.max(Math.min(n.lineWidth,40),n.lineWidth-u),p=a||n.flowLevel>-1&&o>=n.flowLevel;function m(v){return Vw(n,v)}switch(qw(r,p,n.indent,f,m,n.quotingType,n.forceQuotes&&!a,s)){case Uh:return r;case Iu:return"'"+r.replace(/'/g,"''")+"'";case zh:return"|"+$p(r,n.indent)+Bp(jp(r,u));case $h:return">"+$p(r,n.indent)+Bp(jp(Xw(r,f),u));case Wr:return'"'+Jw(r)+'"';default:throw new ln("impossible error: invalid scalar style")}})()}function $p(n,r){var o=jh(n)?String(r):"",a=n[n.length-1]===`
`,s=a&&(n[n.length-2]===`
`||n===`
`),u=s?"+":a?"":"-";return o+u+`
`}function Bp(n){return n[n.length-1]===`
`?n.slice(0,-1):n}function Xw(n,r){for(var o=/(\n+)([^\n]*)/g,a=(function(){var v=n.indexOf(`
`);return v=v!==-1?v:n.length,o.lastIndex=v,Wp(n.slice(0,v),r)})(),s=n[0]===`
`||n[0]===" ",u,f;f=o.exec(n);){var p=f[1],m=f[2];u=m[0]===" ",a+=p+(!s&&!u&&m!==""?`
`:"")+Wp(m,r),s=u}return a}function Wp(n,r){if(n===""||n[0]===" ")return n;for(var o=/ [^ ]/g,a,s=0,u,f=0,p=0,m="";a=o.exec(n);)p=a.index,p-s>r&&(u=f>s?f:p,m+=`
`+n.slice(s,u),s=u+1),f=p;return m+=`
`,n.length-s>r&&f>s?m+=n.slice(s,f)+`
`+n.slice(f+1):m+=n.slice(s),m.slice(1)}function Jw(n){for(var r="",o=0,a,s=0;s<n.length;o>=65536?s+=2:s++)o=Qi(n,s),a=tn[o],!a&&uo(o)?(r+=n[s],o>=65536&&(r+=n[s+1])):r+=a||Ww(o);return r}function Zw(n,r,o){var a="",s=n.tag,u,f,p;for(u=0,f=o.length;u<f;u+=1)p=o[u],n.replacer&&(p=n.replacer.call(o,String(u),p)),(ct(n,r,p,!1,!1)||typeof p>"u"&&ct(n,r,null,!1,!1))&&(a!==""&&(a+=","+(n.condenseFlow?"":" ")),a+=n.dump);n.tag=s,n.dump="["+a+"]"}function Hp(n,r,o,a){var s="",u=n.tag,f,p,m;for(f=0,p=o.length;f<p;f+=1)m=o[f],n.replacer&&(m=n.replacer.call(o,String(f),m)),(ct(n,r+1,m,!0,!0,!1,!0)||typeof m>"u"&&ct(n,r+1,null,!0,!0,!1,!0))&&((!a||s!=="")&&(s+=Ru(n,r)),n.dump&&lo===n.dump.charCodeAt(0)?s+="-":s+="- ",s+=n.dump);n.tag=u,n.dump=s||"[]"}function eE(n,r,o){var a="",s=n.tag,u=Object.keys(o),f,p,m,v,g;for(f=0,p=u.length;f<p;f+=1)g="",a!==""&&(g+=", "),n.condenseFlow&&(g+='"'),m=u[f],v=o[m],n.replacer&&(v=n.replacer.call(o,m,v)),ct(n,r,m,!1,!1)&&(n.dump.length>1024&&(g+="? "),g+=n.dump+(n.condenseFlow?'"':"")+":"+(n.condenseFlow?"":" "),ct(n,r,v,!1,!1)&&(g+=n.dump,a+=g));n.tag=s,n.dump="{"+a+"}"}function nE(n,r,o,a){var s="",u=n.tag,f=Object.keys(o),p,m,v,g,y,S;if(n.sortKeys===!0)f.sort();else if(typeof n.sortKeys=="function")f.sort(n.sortKeys);else if(n.sortKeys)throw new ln("sortKeys must be a boolean or a function");for(p=0,m=f.length;p<m;p+=1)S="",(!a||s!=="")&&(S+=Ru(n,r)),v=f[p],g=o[v],n.replacer&&(g=n.replacer.call(o,v,g)),ct(n,r+1,v,!0,!0,!0)&&(y=n.tag!==null&&n.tag!=="?"||n.dump&&n.dump.length>1024,y&&(n.dump&&lo===n.dump.charCodeAt(0)?S+="?":S+="? "),S+=n.dump,y&&(S+=Ru(n,r)),ct(n,r+1,g,!0,y)&&(n.dump&&lo===n.dump.charCodeAt(0)?S+=":":S+=": ",S+=n.dump,s+=S));n.tag=u,n.dump=s||"{}"}function Yp(n,r,o){var a,s,u,f,p,m;for(s=o?n.explicitTypes:n.implicitTypes,u=0,f=s.length;u<f;u+=1)if(p=s[u],(p.instanceOf||p.predicate)&&(!p.instanceOf||typeof r=="object"&&r instanceof p.instanceOf)&&(!p.predicate||p.predicate(r))){if(o?p.multi&&p.representName?n.tag=p.representName(r):n.tag=p.tag:n.tag="?",p.represent){if(m=n.styleMap[p.tag]||p.defaultStyle,Ih.call(p.represent)==="[object Function]")a=p.represent(r,m);else if(Ph.call(p.represent,m))a=p.represent[m](r,m);else throw new ln("!<"+p.tag+'> tag resolver accepts not "'+m+'" style');n.dump=a}return!0}return!1}function ct(n,r,o,a,s,u,f){n.tag=null,n.dump=o,Yp(n,o,!1)||Yp(n,o,!0);var p=Ih.call(n.dump),m=a,v;a&&(a=n.flowLevel<0||n.flowLevel>r);var g=p==="[object Object]"||p==="[object Array]",y,S;if(g&&(y=n.duplicates.indexOf(o),S=y!==-1),(n.tag!==null&&n.tag!=="?"||S||n.indent!==2&&r>0)&&(s=!1),S&&n.usedDuplicates[y])n.dump="*ref_"+y;else{if(g&&S&&!n.usedDuplicates[y]&&(n.usedDuplicates[y]=!0),p==="[object Object]")a&&Object.keys(n.dump).length!==0?(nE(n,r,n.dump,s),S&&(n.dump="&ref_"+y+n.dump)):(eE(n,r,n.dump),S&&(n.dump="&ref_"+y+" "+n.dump));else if(p==="[object Array]")a&&n.dump.length!==0?(n.noArrayIndent&&!f&&r>0?Hp(n,r-1,n.dump,s):Hp(n,r,n.dump,s),S&&(n.dump="&ref_"+y+n.dump)):(Zw(n,r,n.dump),S&&(n.dump="&ref_"+y+" "+n.dump));else if(p==="[object String]")n.tag!=="?"&&Qw(n,n.dump,r,u,m);else{if(p==="[object Undefined]")return!1;if(n.skipInvalid)return!1;throw new ln("unacceptable kind of an object to dump "+p)}n.tag!==null&&n.tag!=="?"&&(v=encodeURI(n.tag[0]==="!"?n.tag.slice(1):n.tag).replace(/!/g,"%21"),n.tag[0]==="!"?v="!"+v:v.slice(0,18)==="tag:yaml.org,2002:"?v="!!"+v.slice(18):v="!<"+v+">",n.dump=v+" "+n.dump)}return!0}function tE(n,r){var o=[],a=[],s,u;for(Pu(n,o,a),s=0,u=a.length;s<u;s+=1)r.duplicates.push(o[a[s]]);r.usedDuplicates=new Array(u)}function Pu(n,r,o){var a,s,u;if(n!==null&&typeof n=="object")if(s=r.indexOf(n),s!==-1)o.indexOf(s)===-1&&o.push(s);else if(r.push(n),Array.isArray(n))for(s=0,u=n.length;s<u;s+=1)Pu(n[s],r,o);else for(a=Object.keys(n),s=0,u=a.length;s<u;s+=1)Pu(n[a[s]],r,o)}function rE(n,r){r=r||{};var o=new Yw(r);o.noRefs||tE(n,o);var a=n;return o.replacer&&(a=o.replacer.call({"":a},"",a)),ct(o,0,a,!0,!0)?o.dump+`
`:""}var iE=rE,oE={dump:iE};function ac(n,r){return function(){throw new Error("Function yaml."+n+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}var aE=Qe,lE=th,sE=ah,uE=fh,cE=dh,fE=tc,dE=Rh.load,pE=Rh.loadAll,mE=oE.dump,hE=ln,vE={binary:gh,float:ch,map:oh,null:lh,pairs:wh,set:Eh,timestamp:hh,bool:sh,int:uh,merge:vh,omap:yh,seq:ih,str:rh},gE=ac("safeLoad","load"),yE=ac("safeLoadAll","loadAll"),wE=ac("safeDump","dump"),EE={Type:aE,Schema:lE,FAILSAFE_SCHEMA:sE,JSON_SCHEMA:uE,CORE_SCHEMA:cE,DEFAULT_SCHEMA:fE,load:dE,loadAll:pE,dump:mE,YAMLException:hE,types:vE,safeLoad:gE,safeLoadAll:yE,safeDump:wE};const SE=`studyGuides:
  kubernetes-fundamentals:
    title: Kubernetes Fundamentals
    tip: Focus on core concepts like pods, services, deployments, and the role of control
      plane components like etcd and the API server.
    link: https://kubernetes.io/docs/concepts/
  cloud-native-architecture:
    title: Cloud Native Architecture
    tip: Understand the core principles that define cloud-native applications, such
      as microservices and immutable infrastructure.
    link: https://www.cncf.io/blog/2018/03/08/introducing-the-cloud-native-landscape-2-0-interactive-edition/
  container-orchestration:
    title: Container Orchestration
    tip: Review the role of container runtimes (like containerd) and how they interact
      with Kubernetes via the CRI.
    link: https://kubernetes.io/docs/concepts/overview/components/#container-runtime
  cloud-native-application-delivery:
    title: Cloud Native Application Delivery
    tip: Study how applications are deployed and managed in Kubernetes, including
      Deployments and configuration management with ConfigMaps.
    link: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
  cloud-native-ecosystem:
    title: Cloud Native Ecosystem
    tip: Familiarize yourself with the major projects in the CNCF landscape and their
      functions, such as Prometheus for monitoring.
    link: https://landscape.cncf.io/
  vulnerability-scanning:
    title: Vulnerability Scanning
    tip: Understand the importance of scanning container images for known vulnerabilities
      using tools like Trivy.
    link: https://github.com/aquasecurity/trivy
  runtime-security:
    title: Runtime Security
    tip: Learn about tools like Falco that monitor for unexpected application behavior
      and threats at runtime.
    link: https://falco.org/docs/
  network-security:
    title: Network Security
    tip: Focus on how to secure network traffic between pods using NetworkPolicies.
    link: https://kubernetes.io/docs/concepts/services-networking/network-policies/
  policy-enforcement:
    title: Policy Enforcement
    tip: Study how admission controllers and policy engines like Kyverno can be
      used to enforce rules and best practices.
    link: https://kyverno.io/docs/
  security-fundamentals:
    title: Security Fundamentals
    tip: Review core Kubernetes security concepts like Role-Based Access Control
      (RBAC) to control who can do what in the cluster.
    link: https://kubernetes.io/docs/reference/access-authn-authz/rbac/
decks:
  KCNA:
    passingPercentage: 75
    answers:
      FOUR_PILLARS:
        id: four_pillars
        title: The Four Pillars
        lines:
          - Containers
          - Microservices
          - Service Mesh
          - Immutable Infrastructure
      FOUR_CS:
        id: four_cs
        title: The 4 C's of
        titlealt: Cloud Native Security
        lines:
          - Cloud
          - Cluster
          - Container
          - Code
      GOLDEN_SIGNALS:
        id: golden_signals
        title: The Four
        titlealt: Golden Signals
        lines:
          - Latency
          - Traffic
          - Errors
          - Saturation
      CIS_BENCHMARK:
        id: cis_benchmark
        title: CIS Kubernetes
        titlealt: Benchmark
        lines:
          - Control Plane
          - Worker Nodes
          - etcd
          - Policies
      ANTI_PILLARS:
        id: anti_pillars
        title: The 'Anti'-Pillars
        lines:
          - Virtual Machines
          - Monoliths
          - FTP
          - Snowflake Servers
      KUBECTL_GET_PODS:
        id: k_get_pods
        lines:
          - kubectl get pods
      KUBECTL_LIST_PODS:
        id: k_list_pods
        lines:
          - kubectl list pods
      KUBECTL_SHOW_PODS:
        id: k_show_pods
        lines:
          - kubectl show pods
      KUBECTL_PODS:
        id: k_pods
        lines:
          - kubectl pods
      KUBECTL_DISPLAY_PODS:
        id: k_display_pods
        lines:
          - kubectl display pods
      KUBE_API_SERVER:
        id: kube_api_server
        lines:
          - kube-apiserver
      KUBELET:
        id: kubelet
        lines:
          - kubelet
      CONTAINERD_RUNTIME:
        id: containerd_runtime
        lines:
          - containerd
      DOCKER:
        id: docker
        lines:
          - docker
      ETCD:
        id: etcd_component
        lines:
          - etcd
      METRICS_SERVER:
        id: metrics_server
        lines:
          - metrics-server
      INGRESS_CONTROLLER:
        id: ingress_controller
        lines:
          - Ingress Controller
      SERVICE_STABLE_ENDPOINT:
        id: service_stable_endpoint
        lines:
          - Provide a stable network endpoint for a set of pods
      SERVICE_RESTART_PODS:
        id: service_restart_pods
        lines:
          - Restart pods that have crashed
      SERVICE_RESOURCE_LIMITS:
        id: service_resource_limits
        lines:
          - Define resource limits for pods
      SERVICE_PACKAGE_APP:
        id: service_package_app
        lines:
          - Package an application and its dependencies
      SERVICE_INGRESS:
        id: service_ingress
        lines:
          - Provide ingress for external traffic
      SERVICE_LOAD_BALANCE:
        id: service_load_balance
        lines:
          - Load balance traffic between nodes
      ETCD_STORE_STATE:
        id: etcd_store_state
        lines:
          - Store the cluster's state and configuration
      ETCD_RUN_CONTAINERS:
        id: etcd_run_containers
        lines:
          - Run containers on worker nodes
      ETCD_SCHEDULE_PODS:
        id: etcd_schedule_pods
        lines:
          - Schedule pods onto nodes
      ETCD_PROVIDE_MESH:
        id: etcd_provide_mesh
        lines:
          - Provide a service mesh for pods
      ETCD_BACKUP_STATE:
        id: etcd_backup_state
        lines:
          - Backup the cluster state
      ETCD_AUTHENTICATE:
        id: etcd_authenticate
        lines:
          - Authenticate users
      PROMETHEUS:
        id: prometheus
        lines:
          - Prometheus
      OPERATOR_FRAMEWORK:
        id: operator_framework
        lines:
          - Operator Framework
      BACKSTAGE:
        id: backstage
        lines:
          - Backstage
      SPINNAKER:
        id: spinnaker
        lines:
          - Spinnaker
      NATS:
        id: nats
        lines:
          - NATS
      KYVERNO:
        id: kyverno
        lines:
          - Kyverno
      CRI_CONTAINERD:
        id: cri_containerd
        lines:
          - containerd
      CRI_RKT:
        id: cri_rkt
        lines:
          - rkt
      CRI_LXC:
        id: cri_lxc
        lines:
          - LXC
      CRIO:
        id: cri_o
        lines:
          - CRI-O
      RUNV:
        id: runv
        lines:
          - runV
      CONFIGMAP_DECOUPLE:
        id: configmap_decouple
        lines:
          - To decouple configuration artifacts from container images
      CONFIGMAP_SECRETS:
        id: configmap_secrets
        lines:
          - To store sensitive information like passwords
      CONFIGMAP_STORAGE:
        id: configmap_storage
        lines:
          - To define persistent storage for a pod
      CONFIGMAP_DESIRED_STATE:
        id: configmap_desired_state
        lines:
          - To define the desired state of a deployment
      CONFIGMAP_INJECT_SIDECAR:
        id: configmap_inject_sidecar
        lines:
          - To inject a sidecar container
      CONFIGMAP_DEFINE_NETWORK:
        id: configmap_define_network
        lines:
          - To define network policies
      POD_UNIT:
        id: pod_unit
        lines:
          - Pod
      CONTAINER_UNIT:
        id: container_unit
        lines:
          - Container
      NODE_UNIT:
        id: node_unit
        lines:
          - Node
      DEPLOYMENT_UNIT:
        id: deployment_unit
        lines:
          - Deployment
      SERVICE_UNIT:
        id: service_unit
        lines:
          - Service
      REPLICASET_UNIT:
        id: replicaset_unit
        lines:
          - ReplicaSet
      ROLLING_UPDATE:
        id: rolling_update
        lines:
          - It triggers a rolling update to the pods
      DELETE_ALL_PODS:
        id: delete_all_pods
        lines:
          - It deletes all old pods at once and creates new ones
      MANUAL_RESTART:
        id: manual_restart
        lines:
          - It requires a manual restart of the cluster
      AUTO_SCALE_UP:
        id: auto_scale_up
        lines:
          - It automatically scales the number of pods up
      BLUE_GREEN:
        id: blue_green
        lines:
          - It performs a blue-green deployment
      CANARY:
        id: canary
        lines:
          - It performs a canary release
      INGRESS_OBJECT:
        id: ingress_object
        lines:
          - Ingress
      SERVICE_OBJECT:
        id: service_object
        lines:
          - Service
      NETWORK_POLICY:
        id: network_policy
        lines:
          - NetworkPolicy
      ENDPOINT_SLICE:
        id: endpoint_slice
        lines:
          - EndpointSlice
      NODEPORT:
        id: nodeport
        lines:
          - NodePort
      LOADBALANCER:
        id: loadbalancer
        lines:
          - LoadBalancer
      RBAC_ROLE:
        id: rbac_role
        lines:
          - Role
      RBAC_CLUSTERROLE:
        id: rbac_clusterrole
        lines:
          - ClusterRole
      RBAC_BINDING:
        id: rbac_binding
        lines:
          - RoleBinding
      RBAC_SA:
        id: rbac_sa
        lines:
          - ServiceAccount
      RBAC_USER:
        id: rbac_user
        lines:
          - User
      RBAC_GROUP:
        id: rbac_group
        lines:
          - Group
      RBAC_PSP:
        id: rbac_psp
        lines:
          - PodSecurityPolicy
      DAEMONSET:
        id: daemonset
        lines:
          - DaemonSet
      STATEFULSET:
        id: statefulset
        lines:
          - StatefulSet
      JOB_UNIT:
        id: job_unit
        lines:
          - Job
      CRONJOB_UNIT:
        id: cronjob_unit
        lines:
          - CronJob
      HELM_CHART:
        id: helm_chart
        lines:
          - Chart
      HELM_RELEASE:
        id: helm_release
        lines:
          - Release
      HELM_REPO:
        id: helm_repo
        lines:
          - Repository
      HELM_TEMPLATE:
        id: helm_template
        lines:
          - Template
      HELM_VALUES:
        id: helm_values
        lines:
          - Values
      HELM_REVISION:
        id: helm_revision
        lines:
          - Revision
      HELM_HOOK:
        id: helm_hook
        lines:
          - Hook
      HPA_SCALER:
        id: hpa_scaler
        lines:
          - HorizontalPodAutoscaler
      VPA_SCALER:
        id: vpa_scaler
        lines:
          - VerticalPodAutoscaler
      CA_SCALER:
        id: ca_scaler
        lines:
          - ClusterAutoscaler
      KEDA_SCALER:
        id: keda_scaler
        lines:
          - KEDA
      SERVERLESS_SCALER:
        id: serverless_scaler
        lines:
          - Knative Service
      NODE_SCALER:
        id: node_scaler
        lines:
          - Node Auto-provisioning
      MANUAL_SCALER:
        id: manual_scaler
        lines:
          - Manual Scaling
      PVC_STORAGE:
        id: pvc_storage
        lines:
          - PersistentVolumeClaim
      PV_STORAGE:
        id: pv_storage
        lines:
          - PersistentVolume
      SC_STORAGE:
        id: sc_storage
        lines:
          - StorageClass
      CSI_DRIVER:
        id: csi_driver
        lines:
          - CSI Driver
      EMPTY_DIR:
        id: empty_dir
        lines:
          - emptyDir
      HOST_PATH:
        id: host_path
        lines:
          - hostPath
      VOLUME_MOUNT:
        id: volume_mount
        lines:
          - VolumeMount
      KUBECTL_DESCRIBE:
        id: k_describe
        lines:
          - kubectl describe
      KUBECTL_EXPLAIN:
        id: k_explain
        lines:
          - kubectl explain
      KUBECTL_LOGS:
        id: k_logs
        lines:
          - kubectl logs
      KUBECTL_EVENTS:
        id: k_events
        lines:
          - kubectl events
      KUBECTL_INSPECT:
        id: k_inspect
        lines:
          - kubectl inspect
      KUBECTL_STATUS:
        id: k_status
        lines:
          - kubectl status
      KUBE_SCHEDULER:
        id: kube_scheduler
        lines:
          - kube-scheduler
      KUBE_CONTROLLER_MANAGER:
        id: kube_controller_manager
        lines:
          - kube-controller-manager
      KUBE_PROXY:
        id: kube_proxy
        lines:
          - kube-proxy
      CLOUD_CONTROLLER:
        id: cloud_controller
        lines:
          - cloud-controller-manager
      COREDNS:
        id: coredns
        lines:
          - CoreDNS
      LIVENESS_PROBE:
        id: liveness_probe
        lines:
          - Liveness Probe
      READINESS_PROBE:
        id: readiness_probe
        lines:
          - Readiness Probe
      STARTUP_PROBE:
        id: startup_probe
        lines:
          - Startup Probe
      TCP_SOCKET_ACTION:
        id: tcp_socket_action
        lines:
          - TCPSocket
      HTTP_GET_ACTION:
        id: http_get_action
        lines:
          - HTTPGet
      EXEC_ACTION:
        id: exec_action
        lines:
          - Exec
      GRPC_ACTION:
        id: grpc_action
        lines:
          - GRPC
      NAMESPACE_ISOLATION:
        id: namespace_isolation
        lines:
          - Namespace
      QUOTA_LIMIT:
        id: quota_limit
        lines:
          - ResourceQuota
      LIMIT_RANGE:
        id: limit_range
        lines:
          - LimitRange
      POD_SECURITY:
        id: pod_security
        lines:
          - PodSecurity
      CONTEXT_SWITCH:
        id: context_switch
        lines:
          - Context
      CLUSTER_INFO:
        id: cluster_info
        lines:
          - ClusterInfo
      SIDECAR_PATTERN:
        id: sidecar_pattern
        lines:
          - Sidecar
      ADAPTER_PATTERN:
        id: adapter_pattern
        lines:
          - Adapter
      AMBASSADOR_PATTERN:
        id: ambassador_pattern
        lines:
          - Ambassador
      INIT_CONTAINER:
        id: init_container
        lines:
          - InitContainer
      EPHEMERAL_CONTAINER:
        id: ephemeral_container
        lines:
          - EphemeralContainer
      SINGLETON_PATTERN:
        id: singleton_pattern
        lines:
          - Singleton
      BUILDER_PATTERN:
        id: builder_pattern
        lines:
          - Builder
      FALCO_SEC:
        id: falco_sec
        lines:
          - Falco
      OPA_SEC:
        id: opa_sec
        lines:
          - Open Policy Agent (OPA)
      NOTARY_SEC:
        id: notary_sec
        lines:
          - Notary
      CLAIR_SEC:
        id: clair_sec
        lines:
          - Clair
      TRIVY_SEC:
        id: trivy_sec
        lines:
          - Trivy
      CLUSTER_IP:
        id: cluster_ip
        lines:
          - ClusterIP
      EXTERNAL_NAME:
        id: external_name
        lines:
          - ExternalName
      HEADLESS_SVC:
        id: headless_svc
        lines:
          - Headless Service
      GIT_REPO:
        id: git_repo
        lines:
          - Git Repository
      IMAGE_REGISTRY:
        id: image_registry
        lines:
          - Image Registry
      DISTRIBUTED_TRACING:
        id: distributed_tracing
        lines:
          - Distributed Tracing
      METRICS_AGG:
        id: metrics_agg
        lines:
          - Metrics Aggregation
      LOG_AGG:
        id: log_agg
        lines:
          - Log Aggregation
      CNI_PLUGIN:
        id: cni_plugin
        lines:
          - CNI Plugin
      CSI_PLUGIN:
        id: csi_plugin
        lines:
          - CSI Plugin
      ACCESS_RWO:
        id: access_rwo
        lines:
          - ReadWriteOnce
      ACCESS_RWX:
        id: access_rwx
        lines:
          - ReadWriteMany
      ACCESS_ROX:
        id: access_rox
        lines:
          - ReadOnlyMany
      KNATIVE_SERV:
        id: knative_serv
        lines:
          - Knative
      OPENFAAS_SERV:
        id: openfaas_serv
        lines:
          - OpenFaaS
    rounds:
      - prompt:
          text: What are the four pillars of the Cloud Native Computing Foundation (CNCF) definition of 'Cloud Native'
        tag: cloud-native-architecture
        answers:
          - FOUR_PILLARS
          - FOUR_CS
          - GOLDEN_SIGNALS
          - CIS_BENCHMARK
          - ANTI_PILLARS
        correctAnswerId: four_pillars
      - prompt:
          text: Which command is used to list all pods in the default namespace?
        tag: kubernetes-fundamentals
        answers:
          - KUBECTL_GET_PODS
          - KUBECTL_LIST_PODS
          - KUBECTL_SHOW_PODS
          - KUBECTL_PODS
          - KUBECTL_DISPLAY_PODS
        correctAnswerId: k_get_pods
      - prompt:
          text: Which of these is a core component of the Kubernetes control plane?
        tag: kubernetes-fundamentals
        answers:
          - KUBE_API_SERVER
          - KUBELET
          - CONTAINERD_RUNTIME
          - DOCKER
          - INGRESS_CONTROLLER
          - METRICS_SERVER
        correctAnswerId: kube_api_server
      - prompt:
          text: What is the primary purpose of a Kubernetes Service?
        tag: kubernetes-fundamentals
        answers:
          - SERVICE_STABLE_ENDPOINT
          - SERVICE_RESTART_PODS
          - SERVICE_RESOURCE_LIMITS
          - SERVICE_PACKAGE_APP
          - SERVICE_INGRESS
          - SERVICE_LOAD_BALANCE
        correctAnswerId: service_stable_endpoint
      - prompt:
          text: What is the role of etcd in a Kubernetes cluster?
        tag: kubernetes-fundamentals
        answers:
          - ETCD_STORE_STATE
          - ETCD_RUN_CONTAINERS
          - ETCD_SCHEDULE_PODS
          - ETCD_PROVIDE_MESH
          - ETCD_BACKUP_STATE
          - ETCD_AUTHENTICATE
        correctAnswerId: etcd_store_state
      - prompt:
          text: Which of the following is a 'Graduated' CNCF project?
        tag: cloud-native-ecosystem
        answers:
          - PROMETHEUS
          - KYVERNO
          - OPERATOR_FRAMEWORK
          - BACKSTAGE
          - SPINNAKER
          - NATS
        correctAnswerId: prometheus
      - prompt:
          text: Which of the following is a CRI-compliant container runtime?
        tag: container-orchestration
        answers:
          - CRI_CONTAINERD
          - DOCKER
          - CRI_RKT
          - CRI_LXC
          - RUNV
        correctAnswerId: cri_containerd
      - prompt:
          text: How are ConfigMaps typically used in Kubernetes?
        tag: cloud-native-application-delivery
        answers:
          - CONFIGMAP_DECOUPLE
          - CONFIGMAP_SECRETS
          - CONFIGMAP_STORAGE
          - CONFIGMAP_DESIRED_STATE
          - CONFIGMAP_INJECT_SIDECAR
          - CONFIGMAP_DEFINE_NETWORK
        correctAnswerId: configmap_decouple
      - prompt:
          text: What is the smallest and simplest unit in the Kubernetes object model that you create or deploy?
        tag: kubernetes-fundamentals
        answers:
          - POD_UNIT
          - CONTAINER_UNIT
          - NODE_UNIT
          - DEPLOYMENT_UNIT
          - SERVICE_UNIT
          - REPLICASET_UNIT
        correctAnswerId: pod_unit
      - prompt:
          text: What behavior does a standard Kubernetes Deployment trigger when you update its pod template?
        tag: cloud-native-application-delivery
        answers:
          - ROLLING_UPDATE
          - DELETE_ALL_PODS
          - MANUAL_RESTART
          - AUTO_SCALE_UP
          - BLUE_GREEN
          - CANARY
        correctAnswerId: rolling_update
      - prompt:
          text: Which Kubernetes object provides HTTP routing for services, allowing you to expose them externally?
        tag: kubernetes-fundamentals
        answers:
          - INGRESS_OBJECT
          - SERVICE_OBJECT
          - NETWORK_POLICY
          - ENDPOINT_SLICE
          - NODEPORT
          - LOADBALANCER
        correctAnswerId: ingress_object
      - prompt:
          text: Which RBAC object contains rules representing a set of permissions within a specific namespace?
        tag: kubernetes-security
        answers:
          - RBAC_ROLE
          - RBAC_CLUSTERROLE
          - RBAC_BINDING
          - RBAC_SA
          - RBAC_USER
          - RBAC_GROUP
          - RBAC_PSP
        correctAnswerId: rbac_role
      - prompt:
          text: Which workload object ensures that a copy of a Pod runs on all (or some) Nodes in the cluster?
        tag: kubernetes-workloads
        answers:
          - DAEMONSET
          - DEPLOYMENT_UNIT
          - REPLICASET_UNIT
          - STATEFULSET
          - JOB_UNIT
          - CRONJOB_UNIT
          - POD_UNIT
        correctAnswerId: daemonset
      - prompt:
          text: What is the packaging format used by Helm?
        tag: cloud-native-application-delivery
        answers:
          - HELM_CHART
          - HELM_RELEASE
          - HELM_REPO
          - HELM_TEMPLATE
          - HELM_VALUES
          - HELM_REVISION
          - HELM_HOOK
        correctAnswerId: helm_chart
      - prompt:
          text: Which controller automatically scales the number of Pods based on observed CPU utilization?
        tag: kubernetes-workloads
        answers:
          - HPA_SCALER
          - VPA_SCALER
          - CA_SCALER
          - KEDA_SCALER
          - SERVERLESS_SCALER
          - NODE_SCALER
          - MANUAL_SCALER
        correctAnswerId: hpa_scaler
      - prompt:
          text: Which object allows a user to request storage resources without knowing the details of the underlying infrastructure?
        tag: kubernetes-storage
        answers:
          - PVC_STORAGE
          - PV_STORAGE
          - SC_STORAGE
          - CSI_DRIVER
          - EMPTY_DIR
          - HOST_PATH
          - VOLUME_MOUNT
        correctAnswerId: pvc_storage
      - prompt:
          text: Which command allows you to view detailed state and event information about a specific resource?
        tag: kubernetes-fundamentals
        answers:
          - KUBECTL_DESCRIBE
          - KUBECTL_EXPLAIN
          - KUBECTL_LOGS
          - KUBECTL_EVENTS
          - KUBECTL_INSPECT
          - KUBECTL_STATUS
          - KUBECTL_GET_PODS
        correctAnswerId: k_describe
      - prompt:
          text: Which Control Plane component selects which node an unscheduled Pod should run on?
        tag: kubernetes-architecture
        answers:
          - KUBE_SCHEDULER
          - KUBE_CONTROLLER_MANAGER
          - KUBE_PROXY
          - KUBELET
          - CLOUD_CONTROLLER
          - COREDNS
          - KUBE_API_SERVER
        correctAnswerId: kube_scheduler
      - prompt:
          text: Which type of Probe determines if a container is ready to accept traffic?
        tag: kubernetes-application-delivery
        answers:
          - READINESS_PROBE
          - LIVENESS_PROBE
          - STARTUP_PROBE
          - TCP_SOCKET_ACTION
          - HTTP_GET_ACTION
          - EXEC_ACTION
          - GRPC_ACTION
        correctAnswerId: readiness_probe
      - prompt:
          text: Which Kubernetes feature provides a scope for names and divides cluster resources between multiple users?
        tag: kubernetes-fundamentals
        answers:
          - NAMESPACE_ISOLATION
          - QUOTA_LIMIT
          - LIMIT_RANGE
          - NETWORK_POLICY
          - POD_SECURITY
          - CONTEXT_SWITCH
          - CLUSTER_INFO
        correctAnswerId: namespace_isolation
      - prompt:
          text: Which multi-container pattern involves a helper container augmenting the main container (e.g., log forwarding)?
        tag: cloud-native-architecture
        answers:
          - SIDECAR_PATTERN
          - ADAPTER_PATTERN
          - AMBASSADOR_PATTERN
          - INIT_CONTAINER
          - EPHEMERAL_CONTAINER
          - SINGLETON_PATTERN
          - BUILDER_PATTERN
        correctAnswerId: sidecar_pattern
      - prompt:
          text: Which CNCF project is considered the de facto standard for runtime security and threat detection in Kubernetes?
        tag: kubernetes-security
        answers:
          - FALCO_SEC
          - OPA_SEC
          - NOTARY_SEC
          - CLAIR_SEC
          - TRIVY_SEC
          - KYVERNO
          - PROMETHEUS
        correctAnswerId: falco_sec
      - prompt:
          text: Which Service type exposes the Service on a static port on the IP address of each Node?
        tag: kubernetes-networking
        answers:
          - NODEPORT
          - CLUSTER_IP
          - LOADBALANCER
          - EXTERNAL_NAME
          - INGRESS_OBJECT
          - HEADLESS_SVC
          - ENDPOINT_SLICE
        correctAnswerId: nodeport
      - prompt:
          text: In a GitOps workflow, what serves as the single source of truth for the desired state of the system?
        tag: gitops
        answers:
          - GIT_REPO
          - IMAGE_REGISTRY
          - HELM_CHART
          - ETCD_STORE_STATE
          - CI_SERVER
          - KUBE_API_SERVER
          - DOCKER
        correctAnswerId: git_repo
      - prompt:
          text: Which telemetry type provides insight into the lifecycle of a request as it traverses distributed microservices?
        tag: observability
        answers:
          - DISTRIBUTED_TRACING
          - METRICS_AGG
          - LOG_AGG
          - GOLDEN_SIGNALS
          - PROMETHEUS
          - READINESS_PROBE
          - LIVENESS_PROBE
        correctAnswerId: distributed_tracing
      - prompt:
          text: What standard interface handles the insertion of a network interface into a container namespace?
        tag: kubernetes-networking
        answers:
          - CNI_PLUGIN
          - CSI_PLUGIN
          - CRI_CONTAINERD
          - KUBE_PROXY
          - CORE_DNS
          - INGRESS_CONTROLLER
          - NETWORK_POLICY
        correctAnswerId: cni_plugin
      - prompt:
          text: Which workload controller is best suited for running a batch process that terminates once the task is complete?
        tag: kubernetes-workloads
        answers:
          - JOB_UNIT
          - CRONJOB_UNIT
          - DEPLOYMENT_UNIT
          - STATEFULSET
          - DAEMONSET
          - REPLICASET_UNIT
          - POD_UNIT
        correctAnswerId: job_unit
      - prompt:
          text: Which PersistentVolume access mode allows the volume to be mounted as read-write by a single node?
        tag: kubernetes-storage
        answers:
          - ACCESS_RWO
          - ACCESS_RWX
          - ACCESS_ROX
          - STORAGE_CLASS
          - PVC_STORAGE
          - HOST_PATH
          - EMPTY_DIR
        correctAnswerId: access_rwo
      - prompt:
          text: Which CNCF project allows you to run serverless workloads on top of Kubernetes?
        tag: cloud-native-application-delivery
        answers:
          - KNATIVE_SERV
          - OPENFAAS_SERV
          - KEDA_SCALER
          - HELM_CHART
          - PROMETHEUS
          - NATS
          - SPINNAKER
        correctAnswerId: knative_serv
      - prompt:
          text: Which tool is primarily used to sign and verify container images to ensure supply chain security?
        tag: kubernetes-security
        answers:
          - NOTARY_SEC
          - FALCO_SEC
          - OPA_SEC
          - TRIVY_SEC
          - CLAIR_SEC
          - KYVERNO
          - IMAGE_REGISTRY
        correctAnswerId: notary_sec
  KCSA:
    passingPercentage: 75
    answers:
      TRIVY_SCAN:
        id: kcsa_q1_correct
        lines:
          - Scan container images for vulnerabilities.
      TRIVY_DECOY1:
        id: kcsa_q1_decoy1
        lines:
          - Manage network policies.
      TRIVY_DECOY2:
        id: kcsa_q1_decoy2
        lines:
          - Automate cluster provisioning.
      TRIVY_DECOY3:
        id: kcsa_q1_decoy3
        lines:
          - Monitor application performance.
      TRIVY_DECOY4:
        id: kcsa_q1_decoy4
        lines:
          - Enforce security policies.
      TRIVY_DECOY5:
        id: kcsa_q1_decoy5
        lines:
          - Deploy applications.
      FALCO_MONITOR:
        id: kcsa_q2_correct
        lines:
          - Falco
      FALCO_DECOY1:
        id: kcsa_q2_decoy1
        lines:
          - Prometheus
      FALCO_DECOY2:
        id: kcsa_q2_decoy2
        lines:
          - Grafana
      FALCO_DECOY3:
        id: kcsa_q2_decoy3
        lines:
          - Kube-router
      FALCO_DECOY4:
        id: kcsa_q2_decoy4
        lines:
          - Trivy
      FALCO_DECOY5:
        id: kcsa_q2_decoy5
        lines:
          - Kyverno
      NETPOL_DENY:
        id: kcsa_q3_correct
        lines:
          - Deny all ingress and egress traffic.
      NETPOL_DECOY1:
        id: kcsa_q3_decoy1
        lines:
          - Allow all ingress and egress traffic.
      NETPOL_DECOY2:
        id: kcsa_q3_decoy2
        lines:
          - Allow only ingress traffic.
      NETPOL_DECOY3:
        id: kcsa_q3_decoy3
        lines:
          - Allow only egress traffic.
      NETPOL_DECOY4:
        id: kcsa_q3_decoy4
        lines:
          - Deny all traffic within the namespace.
      NETPOL_DECOY5:
        id: kcsa_q3_decoy5
        lines:
          - Allow traffic from all namespaces.
      KYVERNO_POLICY:
        id: kcsa_q4_correct
        lines:
          - Kyverno
      KYVERNO_DECOY1:
        id: kcsa_q4_decoy1
        lines:
          - etcd
      KYVERNO_DECOY2:
        id: kcsa_q4_decoy2
        lines:
          - CoreDNS
      KYVERNO_DECOY3:
        id: kcsa_q4_decoy3
        lines:
          - Fluentd
      KYVERNO_DECOY4:
        id: kcsa_q4_decoy4
        lines:
          - Falco
      KYVERNO_DECOY5:
        id: kcsa_q4_decoy5
        lines:
          - Trivy
      RBAC_GRANT:
        id: kcsa_q5_correct
        lines:
          - It grants the permissions defined in a Role or ClusterRole to a user, group,
            or service account.
      RBAC_DECOY1:
        id: kcsa_q5_decoy1
        lines:
          - It defines a set of permissions.
      RBAC_DECOY2:
        id: kcsa_q5_decoy2
        lines:
          - It creates a new user.
      RBAC_DECOY3:
        id: kcsa_q5_decoy3
        lines:
          - It specifies resource quotas for a namespace.
      RBAC_DECOY4:
        id: kcsa_q5_decoy4
        lines:
          - It defines a new role.
      RBAC_DECOY5:
        id: kcsa_q5_decoy5
        lines:
          - It authenticates a user.
    rounds:
      - prompt:
          text: What is the primary function of Trivy in a Kubernetes environment?
        tag: vulnerability-scanning
        answers:
          - TRIVY_SCAN
          - TRIVY_DECOY1
          - TRIVY_DECOY2
          - TRIVY_DECOY3
          - TRIVY_DECOY4
          - TRIVY_DECOY5
        correctAnswerId: kcsa_q1_correct
      - prompt:
          text: Which tool is used for runtime security monitoring and threat detection
            in Kubernetes by analyzing kernel-level events?
        tag: runtime-security
        answers:
          - FALCO_MONITOR
          - FALCO_DECOY1
          - FALCO_DECOY2
          - FALCO_DECOY3
          - FALCO_DECOY4
          - FALCO_DECOY5
        correctAnswerId: kcsa_q2_correct
      - prompt:
          text: What is the default behavior of a Kubernetes NetworkPolicy?
        tag: network-security
        answers:
          - NETPOL_DENY
          - NETPOL_DECOY1
          - NETPOL_DECOY2
          - NETPOL_DECOY3
          - NETPOL_DECOY4
          - NETPOL_DECOY5
        correctAnswerId: kcsa_q3_correct
      - prompt:
          text: Which tool can be used to enforce policies on Kubernetes resources
            as they are created or updated, for example to require that all images
            come from a trusted registry?
        tag: policy-enforcement
        answers:
          - KYVERNO_POLICY
          - KYVERNO_DECOY1
          - KYVERNO_DECOY2
          - KYVERNO_DECOY3
          - KYVERNO_DECOY4
          - KYVERNO_DECOY5
        correctAnswerId: kcsa_q4_correct
      - prompt:
          text: In Kubernetes RBAC, what does a RoleBinding or ClusterRoleBinding do?
        tag: security-fundamentals
        answers:
          - RBAC_GRANT
          - RBAC_DECOY1
          - RBAC_DECOY2
          - RBAC_DECOY3
          - RBAC_DECOY4
          - RBAC_DECOY5
        correctAnswerId: kcsa_q5_correct
`,Ua=EE.load(SE);var lu={exports:{}};var Vp;function CE(){return Vp||(Vp=1,(function(n){(function(){var r={}.hasOwnProperty;function o(){for(var u="",f=0;f<arguments.length;f++){var p=arguments[f];p&&(u=s(u,a(p)))}return u}function a(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return o.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var f="";for(var p in u)r.call(u,p)&&u[p]&&(f=s(f,p));return f}function s(u,f){return f?u?u+" "+f:u+f:u}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(lu)),lu.exports}var xE=CE();const Ee=ho(xE);function bu(){return bu=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)({}).hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},bu.apply(null,arguments)}function _E(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)!==-1)continue;o[a]=n[a]}return o}function Kp(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function AE(n){var r=kE(n,"string");return typeof r=="symbol"?r:String(r)}function kE(n,r){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function OE(n,r,o){var a=k.useRef(n!==void 0),s=k.useState(r),u=s[0],f=s[1],p=n!==void 0,m=a.current;return a.current=p,!p&&m&&u!==r&&f(r),[p?n:u,k.useCallback(function(v){for(var g=arguments.length,y=new Array(g>1?g-1:0),S=1;S<g;S++)y[S-1]=arguments[S];o&&o.apply(void 0,[v].concat(y)),f(v)},[o])]}function TE(n,r){return Object.keys(r).reduce(function(o,a){var s,u=o,f=u[Kp(a)],p=u[a],m=_E(u,[Kp(a),a].map(AE)),v=r[a],g=OE(p,f,n[v]),y=g[0],S=g[1];return bu({},m,(s={},s[a]=y,s[v]=S,s))},n)}var su={exports:{}},Gi={};var Gp;function NE(){if(Gp)return Gi;Gp=1;var n=ec(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,m,v){var g,y={},S=null,x=null;v!==void 0&&(S=""+v),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(x=m.ref);for(g in m)a.call(m,g)&&!u.hasOwnProperty(g)&&(y[g]=m[g]);if(p&&p.defaultProps)for(g in m=p.defaultProps,m)y[g]===void 0&&(y[g]=m[g]);return{$$typeof:r,type:p,key:S,ref:x,props:y,_owner:s.current}}return Gi.Fragment=o,Gi.jsx=f,Gi.jsxs=f,Gi}var qp;function RE(){return qp||(qp=1,su.exports=NE()),su.exports}var lc=RE();const L=lc.jsx,We=lc.jsxs,rl=lc.Fragment,IE=["xxl","xl","lg","md","sm","xs"],PE="xs",vo=k.createContext({prefixes:{},breakpoints:IE,minBreakpoint:PE}),{Consumer:Xk,Provider:Jk}=vo;function _e(n,r){const{prefixes:o}=k.useContext(vo);return n||o[r]||r}function Bh(){const{breakpoints:n}=k.useContext(vo);return n}function Wh(){const{minBreakpoint:n}=k.useContext(vo);return n}function bE(){const{dir:n}=k.useContext(vo);return n==="rtl"}function LE(n){return n&&n.ownerDocument||document}var uu={exports:{}},cu,Qp;function DE(){if(Qp)return cu;Qp=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return cu=n,cu}var fu,Xp;function FE(){if(Xp)return fu;Xp=1;var n=DE();function r(){}function o(){}return o.resetWarningCache=r,fu=function(){function a(f,p,m,v,g,y){if(y!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}a.isRequired=a;function s(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:r};return u.PropTypes=u,u},fu}var Jp;function ME(){return Jp||(Jp=1,uu.exports=FE()()),uu.exports}var jE=ME();const Kr=ho(jE),Hh=!!(typeof window<"u"&&window.document&&window.document.createElement);var Lu=!1,Du=!1;try{var du={get passive(){return Lu=!0},get once(){return Du=Lu=!0}};Hh&&(window.addEventListener("test",du,du),window.removeEventListener("test",du,!0))}catch{}function Yh(n,r,o,a){if(a&&typeof a!="boolean"&&!Du){var s=a.once,u=a.capture,f=o;!Du&&s&&(f=o.__once||function p(m){this.removeEventListener(r,p,u),o.call(this,m)},o.__once=f),n.addEventListener(r,f,Lu?a:u)}n.addEventListener(r,o,a)}function UE(n,r,o,a){var s=a&&typeof a!="boolean"?a.capture:a;n.removeEventListener(r,o,s),o.__once&&n.removeEventListener(r,o.__once,s)}function Da(n,r,o,a){return Yh(n,r,o,a),function(){UE(n,r,o,a)}}const Zp=n=>!n||typeof n=="function"?n:r=>{n.current=r};function zE(n,r){const o=Zp(n),a=Zp(r);return s=>{o&&o(s),a&&a(s)}}function Vh(n,r){return k.useMemo(()=>zE(n,r),[n,r])}function $E(n){const r=k.useRef(n);return k.useEffect(()=>{r.current=n},[n]),r}function BE(n){const r=$E(n);return k.useCallback(function(...o){return r.current&&r.current(...o)},[r])}const Kh=(n=>k.forwardRef((r,o)=>L("div",{...r,ref:o,className:Ee(r.className,n)})));function WE(){return k.useState(null)}function HE(n){const r=k.useRef(n);return k.useEffect(()=>{r.current=n},[n]),r}function jt(n){const r=HE(n);return k.useCallback(function(...o){return r.current&&r.current(...o)},[r])}function YE(n,r,o,a=!1){const s=jt(o);k.useEffect(()=>{const u=typeof n=="function"?n():n;return u.addEventListener(r,s,a),()=>u.removeEventListener(r,s,a)},[n])}function VE(){const n=k.useRef(!0),r=k.useRef(()=>n.current);return k.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),r.current}function KE(n){const r=k.useRef(null);return k.useEffect(()=>{r.current=n}),r.current}const GE=["as","disabled"];function qE(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}function QE(n){return!n||n.trim()==="#"}function sc({tagName:n,disabled:r,href:o,target:a,rel:s,role:u,onClick:f,tabIndex:p=0,type:m}){n||(o!=null||a!=null||s!=null?n="a":n="button");const v={tagName:n};if(n==="button")return[{type:m||"button",disabled:r},v];const g=S=>{if((r||n==="a"&&QE(o))&&S.preventDefault(),r){S.stopPropagation();return}f?.(S)},y=S=>{S.key===" "&&(S.preventDefault(),g(S))};return n==="a"&&(o||(o="#"),r&&(o=void 0)),[{role:u??"button",disabled:void 0,tabIndex:r?void 0:p,href:o,target:n==="a"?a:void 0,"aria-disabled":r||void 0,rel:n==="a"?s:void 0,onClick:g,onKeyDown:y},v]}const Gh=k.forwardRef((n,r)=>{let{as:o,disabled:a}=n,s=qE(n,GE);const[u,{tagName:f}]=sc(Object.assign({tagName:o,disabled:a},s));return L(f,Object.assign({},s,u,{ref:r}))});Gh.displayName="Button";const XE=["onKeyDown"];function JE(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}function ZE(n){return!n||n.trim()==="#"}const qh=k.forwardRef((n,r)=>{let{onKeyDown:o}=n,a=JE(n,XE);const[s]=sc(Object.assign({tagName:"a"},a)),u=jt(f=>{s.onKeyDown(f),o?.(f)});return ZE(a.href)||a.role==="button"?L("a",Object.assign({ref:r},a,s,{onKeyDown:u})):L("a",Object.assign({ref:r},a,{onKeyDown:o}))});qh.displayName="Anchor";const Xr=k.forwardRef(({as:n,bsPrefix:r,variant:o="primary",size:a,active:s=!1,disabled:u=!1,className:f,...p},m)=>{const v=_e(r,"btn"),[g,{tagName:y}]=sc({tagName:n,disabled:u,...p});return L(y,{...g,...p,ref:m,disabled:u,className:Ee(f,v,s&&"active",o&&`${v}-${o}`,a&&`${v}-${a}`,p.href&&u&&"disabled")})});Xr.displayName="Button";const uc=k.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=_e(r,"card-body"),L(o,{ref:s,className:Ee(n,r),...a})));uc.displayName="CardBody";const Qh=k.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=_e(r,"card-footer"),L(o,{ref:s,className:Ee(n,r),...a})));Qh.displayName="CardFooter";const Xh=k.createContext(null);Xh.displayName="CardHeaderContext";const Jh=k.forwardRef(({bsPrefix:n,className:r,as:o="div",...a},s)=>{const u=_e(n,"card-header"),f=k.useMemo(()=>({cardHeaderBsPrefix:u}),[u]);return L(Xh.Provider,{value:f,children:L(o,{ref:s,...a,className:Ee(r,u)})})});Jh.displayName="CardHeader";const Zh=k.forwardRef(({bsPrefix:n,className:r,variant:o,as:a="img",...s},u)=>{const f=_e(n,"card-img");return L(a,{ref:u,className:Ee(o?`${f}-${o}`:f,r),...s})});Zh.displayName="CardImg";const ev=k.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=_e(r,"card-img-overlay"),L(o,{ref:s,className:Ee(n,r),...a})));ev.displayName="CardImgOverlay";const nv=k.forwardRef(({className:n,bsPrefix:r,as:o="a",...a},s)=>(r=_e(r,"card-link"),L(o,{ref:s,className:Ee(n,r),...a})));nv.displayName="CardLink";const eS=Kh("h6"),tv=k.forwardRef(({className:n,bsPrefix:r,as:o=eS,...a},s)=>(r=_e(r,"card-subtitle"),L(o,{ref:s,className:Ee(n,r),...a})));tv.displayName="CardSubtitle";const rv=k.forwardRef(({className:n,bsPrefix:r,as:o="p",...a},s)=>(r=_e(r,"card-text"),L(o,{ref:s,className:Ee(n,r),...a})));rv.displayName="CardText";const nS=Kh("h5"),iv=k.forwardRef(({className:n,bsPrefix:r,as:o=nS,...a},s)=>(r=_e(r,"card-title"),L(o,{ref:s,className:Ee(n,r),...a})));iv.displayName="CardTitle";const ov=k.forwardRef(({bsPrefix:n,className:r,bg:o,text:a,border:s,body:u=!1,children:f,as:p="div",...m},v)=>{const g=_e(n,"card");return L(p,{ref:v,...m,className:Ee(r,g,o&&`bg-${o}`,a&&`text-${a}`,s&&`border-${s}`),children:u?L(uc,{children:f}):f})});ov.displayName="Card";const qn=Object.assign(ov,{Img:Zh,Title:iv,Subtitle:tv,Body:uc,Link:nv,Text:rv,Header:Jh,Footer:Qh,ImgOverlay:ev});function tS(n,r){return k.Children.toArray(n).some(o=>k.isValidElement(o)&&o.type===r)}function rS({as:n,bsPrefix:r,className:o,...a}){r=_e(r,"col");const s=Bh(),u=Wh(),f=[],p=[];return s.forEach(m=>{const v=a[m];delete a[m];let g,y,S;typeof v=="object"&&v!=null?{span:g,offset:y,order:S}=v:g=v;const x=m!==u?`-${m}`:"";g&&f.push(g===!0?`${r}${x}`:`${r}${x}-${g}`),S!=null&&p.push(`order${x}-${S}`),y!=null&&p.push(`offset${x}-${y}`)}),[{...a,className:Ee(o,...f,...p)},{as:n,bsPrefix:r,spans:f}]}const go=k.forwardRef((n,r)=>{const[{className:o,...a},{as:s="div",bsPrefix:u,spans:f}]=rS(n);return L(s,{...a,ref:r,className:Ee(o,!f.length&&u)})});go.displayName="Col";const Gr=k.forwardRef(({bsPrefix:n,fluid:r=!1,as:o="div",className:a,...s},u)=>{const f=_e(n,"container"),p=typeof r=="string"?`-${r}`:"-fluid";return L(o,{ref:u,...s,className:Ee(a,r?`${f}${p}`:f)})});Gr.displayName="Container";var iS=Function.prototype.bind.call(Function.prototype.call,[].slice);function em(n,r){return iS(n.querySelectorAll(r))}function oS(n,r,o){const a=k.useRef(n!==void 0),[s,u]=k.useState(r),f=n!==void 0,p=a.current;return a.current=f,!f&&p&&s!==r&&u(r),[f?n:s,k.useCallback((...m)=>{const[v,...g]=m;let y=o?.(v,...g);return u(v),y},[o])]}function aS(){const[,n]=k.useReducer(r=>r+1,0);return n}const il=k.createContext(null);var nm=Object.prototype.hasOwnProperty;function tm(n,r,o){for(o of n.keys())if(Ji(o,r))return o}function Ji(n,r){var o,a,s;if(n===r)return!0;if(n&&r&&(o=n.constructor)===r.constructor){if(o===Date)return n.getTime()===r.getTime();if(o===RegExp)return n.toString()===r.toString();if(o===Array){if((a=n.length)===r.length)for(;a--&&Ji(n[a],r[a]););return a===-1}if(o===Set){if(n.size!==r.size)return!1;for(a of n)if(s=a,s&&typeof s=="object"&&(s=tm(r,s),!s)||!r.has(s))return!1;return!0}if(o===Map){if(n.size!==r.size)return!1;for(a of n)if(s=a[0],s&&typeof s=="object"&&(s=tm(r,s),!s)||!Ji(a[1],r.get(s)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),r=new Uint8Array(r);else if(o===DataView){if((a=n.byteLength)===r.byteLength)for(;a--&&n.getInt8(a)===r.getInt8(a););return a===-1}if(ArrayBuffer.isView(n)){if((a=n.byteLength)===r.byteLength)for(;a--&&n[a]===r[a];);return a===-1}if(!o||typeof n=="object"){a=0;for(o in n)if(nm.call(n,o)&&++a&&!nm.call(r,o)||!(o in r)||!Ji(n[o],r[o]))return!1;return Object.keys(r).length===a}}return n!==n&&r!==r}function lS(n){const r=VE();return[n[0],k.useCallback(o=>{if(r())return n[1](o)},[r,n[1]])]}var hn="top",Pn="bottom",bn="right",vn="left",cc="auto",yo=[hn,Pn,bn,vn],Jr="start",co="end",sS="clippingParents",av="viewport",qi="popper",uS="reference",rm=yo.reduce(function(n,r){return n.concat([r+"-"+Jr,r+"-"+co])},[]),lv=[].concat(yo,[cc]).reduce(function(n,r){return n.concat([r,r+"-"+Jr,r+"-"+co])},[]),cS="beforeRead",fS="read",dS="afterRead",pS="beforeMain",mS="main",hS="afterMain",vS="beforeWrite",gS="write",yS="afterWrite",wS=[cS,fS,dS,pS,mS,hS,vS,gS,yS];function Jn(n){return n.split("-")[0]}function _n(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var r=n.ownerDocument;return r&&r.defaultView||window}return n}function ur(n){var r=_n(n).Element;return n instanceof r||n instanceof Element}function Zn(n){var r=_n(n).HTMLElement;return n instanceof r||n instanceof HTMLElement}function fc(n){if(typeof ShadowRoot>"u")return!1;var r=_n(n).ShadowRoot;return n instanceof r||n instanceof ShadowRoot}var sr=Math.max,qa=Math.min,Zr=Math.round;function Fu(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function sv(){return!/^((?!chrome|android).)*safari/i.test(Fu())}function ei(n,r,o){r===void 0&&(r=!1),o===void 0&&(o=!1);var a=n.getBoundingClientRect(),s=1,u=1;r&&Zn(n)&&(s=n.offsetWidth>0&&Zr(a.width)/n.offsetWidth||1,u=n.offsetHeight>0&&Zr(a.height)/n.offsetHeight||1);var f=ur(n)?_n(n):window,p=f.visualViewport,m=!sv()&&o,v=(a.left+(m&&p?p.offsetLeft:0))/s,g=(a.top+(m&&p?p.offsetTop:0))/u,y=a.width/s,S=a.height/u;return{width:y,height:S,top:g,right:v+y,bottom:g+S,left:v,x:v,y:g}}function dc(n){var r=ei(n),o=n.offsetWidth,a=n.offsetHeight;return Math.abs(r.width-o)<=1&&(o=r.width),Math.abs(r.height-a)<=1&&(a=r.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:a}}function uv(n,r){var o=r.getRootNode&&r.getRootNode();if(n.contains(r))return!0;if(o&&fc(o)){var a=r;do{if(a&&n.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function zt(n){return n?(n.nodeName||"").toLowerCase():null}function ft(n){return _n(n).getComputedStyle(n)}function ES(n){return["table","td","th"].indexOf(zt(n))>=0}function Ht(n){return((ur(n)?n.ownerDocument:n.document)||window.document).documentElement}function ol(n){return zt(n)==="html"?n:n.assignedSlot||n.parentNode||(fc(n)?n.host:null)||Ht(n)}function im(n){return!Zn(n)||ft(n).position==="fixed"?null:n.offsetParent}function SS(n){var r=/firefox/i.test(Fu()),o=/Trident/i.test(Fu());if(o&&Zn(n)){var a=ft(n);if(a.position==="fixed")return null}var s=ol(n);for(fc(s)&&(s=s.host);Zn(s)&&["html","body"].indexOf(zt(s))<0;){var u=ft(s);if(u.transform!=="none"||u.perspective!=="none"||u.contain==="paint"||["transform","perspective"].indexOf(u.willChange)!==-1||r&&u.willChange==="filter"||r&&u.filter&&u.filter!=="none")return s;s=s.parentNode}return null}function wo(n){for(var r=_n(n),o=im(n);o&&ES(o)&&ft(o).position==="static";)o=im(o);return o&&(zt(o)==="html"||zt(o)==="body"&&ft(o).position==="static")?r:o||SS(n)||r}function pc(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Zi(n,r,o){return sr(n,qa(r,o))}function CS(n,r,o){var a=Zi(n,r,o);return a>o?o:a}function cv(){return{top:0,right:0,bottom:0,left:0}}function fv(n){return Object.assign({},cv(),n)}function dv(n,r){return r.reduce(function(o,a){return o[a]=n,o},{})}var xS=function(r,o){return r=typeof r=="function"?r(Object.assign({},o.rects,{placement:o.placement})):r,fv(typeof r!="number"?r:dv(r,yo))};function _S(n){var r,o=n.state,a=n.name,s=n.options,u=o.elements.arrow,f=o.modifiersData.popperOffsets,p=Jn(o.placement),m=pc(p),v=[vn,bn].indexOf(p)>=0,g=v?"height":"width";if(!(!u||!f)){var y=xS(s.padding,o),S=dc(u),x=m==="y"?hn:vn,I=m==="y"?Pn:bn,R=o.rects.reference[g]+o.rects.reference[m]-f[m]-o.rects.popper[g],T=f[m]-o.rects.reference[m],M=wo(u),P=M?m==="y"?M.clientHeight||0:M.clientWidth||0:0,W=R/2-T/2,H=y[x],j=P-S[g]-y[I],Q=P/2-S[g]/2+W,ee=Zi(H,Q,j),re=m;o.modifiersData[a]=(r={},r[re]=ee,r.centerOffset=ee-Q,r)}}function AS(n){var r=n.state,o=n.options,a=o.element,s=a===void 0?"[data-popper-arrow]":a;s!=null&&(typeof s=="string"&&(s=r.elements.popper.querySelector(s),!s)||uv(r.elements.popper,s)&&(r.elements.arrow=s))}const kS={name:"arrow",enabled:!0,phase:"main",fn:_S,effect:AS,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ni(n){return n.split("-")[1]}var OS={top:"auto",right:"auto",bottom:"auto",left:"auto"};function TS(n,r){var o=n.x,a=n.y,s=r.devicePixelRatio||1;return{x:Zr(o*s)/s||0,y:Zr(a*s)/s||0}}function om(n){var r,o=n.popper,a=n.popperRect,s=n.placement,u=n.variation,f=n.offsets,p=n.position,m=n.gpuAcceleration,v=n.adaptive,g=n.roundOffsets,y=n.isFixed,S=f.x,x=S===void 0?0:S,I=f.y,R=I===void 0?0:I,T=typeof g=="function"?g({x,y:R}):{x,y:R};x=T.x,R=T.y;var M=f.hasOwnProperty("x"),P=f.hasOwnProperty("y"),W=vn,H=hn,j=window;if(v){var Q=wo(o),ee="clientHeight",re="clientWidth";if(Q===_n(o)&&(Q=Ht(o),ft(Q).position!=="static"&&p==="absolute"&&(ee="scrollHeight",re="scrollWidth")),Q=Q,s===hn||(s===vn||s===bn)&&u===co){H=Pn;var de=y&&Q===j&&j.visualViewport?j.visualViewport.height:Q[ee];R-=de-a.height,R*=m?1:-1}if(s===vn||(s===hn||s===Pn)&&u===co){W=bn;var ve=y&&Q===j&&j.visualViewport?j.visualViewport.width:Q[re];x-=ve-a.width,x*=m?1:-1}}var ae=Object.assign({position:p},v&&OS),se=g===!0?TS({x,y:R},_n(o)):{x,y:R};if(x=se.x,R=se.y,m){var V;return Object.assign({},ae,(V={},V[H]=P?"0":"",V[W]=M?"0":"",V.transform=(j.devicePixelRatio||1)<=1?"translate("+x+"px, "+R+"px)":"translate3d("+x+"px, "+R+"px, 0)",V))}return Object.assign({},ae,(r={},r[H]=P?R+"px":"",r[W]=M?x+"px":"",r.transform="",r))}function NS(n){var r=n.state,o=n.options,a=o.gpuAcceleration,s=a===void 0?!0:a,u=o.adaptive,f=u===void 0?!0:u,p=o.roundOffsets,m=p===void 0?!0:p,v={placement:Jn(r.placement),variation:ni(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:s,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,om(Object.assign({},v,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:f,roundOffsets:m})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,om(Object.assign({},v,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const RS={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:NS,data:{}};var Fa={passive:!0};function IS(n){var r=n.state,o=n.instance,a=n.options,s=a.scroll,u=s===void 0?!0:s,f=a.resize,p=f===void 0?!0:f,m=_n(r.elements.popper),v=[].concat(r.scrollParents.reference,r.scrollParents.popper);return u&&v.forEach(function(g){g.addEventListener("scroll",o.update,Fa)}),p&&m.addEventListener("resize",o.update,Fa),function(){u&&v.forEach(function(g){g.removeEventListener("scroll",o.update,Fa)}),p&&m.removeEventListener("resize",o.update,Fa)}}const PS={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:IS,data:{}};var bS={left:"right",right:"left",bottom:"top",top:"bottom"};function za(n){return n.replace(/left|right|bottom|top/g,function(r){return bS[r]})}var LS={start:"end",end:"start"};function am(n){return n.replace(/start|end/g,function(r){return LS[r]})}function mc(n){var r=_n(n),o=r.pageXOffset,a=r.pageYOffset;return{scrollLeft:o,scrollTop:a}}function hc(n){return ei(Ht(n)).left+mc(n).scrollLeft}function DS(n,r){var o=_n(n),a=Ht(n),s=o.visualViewport,u=a.clientWidth,f=a.clientHeight,p=0,m=0;if(s){u=s.width,f=s.height;var v=sv();(v||!v&&r==="fixed")&&(p=s.offsetLeft,m=s.offsetTop)}return{width:u,height:f,x:p+hc(n),y:m}}function FS(n){var r,o=Ht(n),a=mc(n),s=(r=n.ownerDocument)==null?void 0:r.body,u=sr(o.scrollWidth,o.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),f=sr(o.scrollHeight,o.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),p=-a.scrollLeft+hc(n),m=-a.scrollTop;return ft(s||o).direction==="rtl"&&(p+=sr(o.clientWidth,s?s.clientWidth:0)-u),{width:u,height:f,x:p,y:m}}function vc(n){var r=ft(n),o=r.overflow,a=r.overflowX,s=r.overflowY;return/auto|scroll|overlay|hidden/.test(o+s+a)}function pv(n){return["html","body","#document"].indexOf(zt(n))>=0?n.ownerDocument.body:Zn(n)&&vc(n)?n:pv(ol(n))}function eo(n,r){var o;r===void 0&&(r=[]);var a=pv(n),s=a===((o=n.ownerDocument)==null?void 0:o.body),u=_n(a),f=s?[u].concat(u.visualViewport||[],vc(a)?a:[]):a,p=r.concat(f);return s?p:p.concat(eo(ol(f)))}function Mu(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function MS(n,r){var o=ei(n,!1,r==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function lm(n,r,o){return r===av?Mu(DS(n,o)):ur(r)?MS(r,o):Mu(FS(Ht(n)))}function jS(n){var r=eo(ol(n)),o=["absolute","fixed"].indexOf(ft(n).position)>=0,a=o&&Zn(n)?wo(n):n;return ur(a)?r.filter(function(s){return ur(s)&&uv(s,a)&&zt(s)!=="body"}):[]}function US(n,r,o,a){var s=r==="clippingParents"?jS(n):[].concat(r),u=[].concat(s,[o]),f=u[0],p=u.reduce(function(m,v){var g=lm(n,v,a);return m.top=sr(g.top,m.top),m.right=qa(g.right,m.right),m.bottom=qa(g.bottom,m.bottom),m.left=sr(g.left,m.left),m},lm(n,f,a));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function mv(n){var r=n.reference,o=n.element,a=n.placement,s=a?Jn(a):null,u=a?ni(a):null,f=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,m;switch(s){case hn:m={x:f,y:r.y-o.height};break;case Pn:m={x:f,y:r.y+r.height};break;case bn:m={x:r.x+r.width,y:p};break;case vn:m={x:r.x-o.width,y:p};break;default:m={x:r.x,y:r.y}}var v=s?pc(s):null;if(v!=null){var g=v==="y"?"height":"width";switch(u){case Jr:m[v]=m[v]-(r[g]/2-o[g]/2);break;case co:m[v]=m[v]+(r[g]/2-o[g]/2);break}}return m}function fo(n,r){r===void 0&&(r={});var o=r,a=o.placement,s=a===void 0?n.placement:a,u=o.strategy,f=u===void 0?n.strategy:u,p=o.boundary,m=p===void 0?sS:p,v=o.rootBoundary,g=v===void 0?av:v,y=o.elementContext,S=y===void 0?qi:y,x=o.altBoundary,I=x===void 0?!1:x,R=o.padding,T=R===void 0?0:R,M=fv(typeof T!="number"?T:dv(T,yo)),P=S===qi?uS:qi,W=n.rects.popper,H=n.elements[I?P:S],j=US(ur(H)?H:H.contextElement||Ht(n.elements.popper),m,g,f),Q=ei(n.elements.reference),ee=mv({reference:Q,element:W,placement:s}),re=Mu(Object.assign({},W,ee)),de=S===qi?re:Q,ve={top:j.top-de.top+M.top,bottom:de.bottom-j.bottom+M.bottom,left:j.left-de.left+M.left,right:de.right-j.right+M.right},ae=n.modifiersData.offset;if(S===qi&&ae){var se=ae[s];Object.keys(ve).forEach(function(V){var fe=[bn,Pn].indexOf(V)>=0?1:-1,Oe=[hn,Pn].indexOf(V)>=0?"y":"x";ve[V]+=se[Oe]*fe})}return ve}function zS(n,r){r===void 0&&(r={});var o=r,a=o.placement,s=o.boundary,u=o.rootBoundary,f=o.padding,p=o.flipVariations,m=o.allowedAutoPlacements,v=m===void 0?lv:m,g=ni(a),y=g?p?rm:rm.filter(function(I){return ni(I)===g}):yo,S=y.filter(function(I){return v.indexOf(I)>=0});S.length===0&&(S=y);var x=S.reduce(function(I,R){return I[R]=fo(n,{placement:R,boundary:s,rootBoundary:u,padding:f})[Jn(R)],I},{});return Object.keys(x).sort(function(I,R){return x[I]-x[R]})}function $S(n){if(Jn(n)===cc)return[];var r=za(n);return[am(n),r,am(r)]}function BS(n){var r=n.state,o=n.options,a=n.name;if(!r.modifiersData[a]._skip){for(var s=o.mainAxis,u=s===void 0?!0:s,f=o.altAxis,p=f===void 0?!0:f,m=o.fallbackPlacements,v=o.padding,g=o.boundary,y=o.rootBoundary,S=o.altBoundary,x=o.flipVariations,I=x===void 0?!0:x,R=o.allowedAutoPlacements,T=r.options.placement,M=Jn(T),P=M===T,W=m||(P||!I?[za(T)]:$S(T)),H=[T].concat(W).reduce(function(ce,pe){return ce.concat(Jn(pe)===cc?zS(r,{placement:pe,boundary:g,rootBoundary:y,padding:v,flipVariations:I,allowedAutoPlacements:R}):pe)},[]),j=r.rects.reference,Q=r.rects.popper,ee=new Map,re=!0,de=H[0],ve=0;ve<H.length;ve++){var ae=H[ve],se=Jn(ae),V=ni(ae)===Jr,fe=[hn,Pn].indexOf(se)>=0,Oe=fe?"width":"height",Se=fo(r,{placement:ae,boundary:g,rootBoundary:y,altBoundary:S,padding:v}),he=fe?V?bn:vn:V?Pn:hn;j[Oe]>Q[Oe]&&(he=za(he));var Y=za(he),X=[];if(u&&X.push(Se[se]<=0),p&&X.push(Se[he]<=0,Se[Y]<=0),X.every(function(ce){return ce})){de=ae,re=!1;break}ee.set(ae,X)}if(re)for(var B=I?3:1,_=function(pe){var ge=H.find(function(Ae){var we=ee.get(Ae);if(we)return we.slice(0,pe).every(function(Te){return Te})});if(ge)return de=ge,"break"},b=B;b>0;b--){var ue=_(b);if(ue==="break")break}r.placement!==de&&(r.modifiersData[a]._skip=!0,r.placement=de,r.reset=!0)}}const WS={name:"flip",enabled:!0,phase:"main",fn:BS,requiresIfExists:["offset"],data:{_skip:!1}};function sm(n,r,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-r.height-o.y,right:n.right-r.width+o.x,bottom:n.bottom-r.height+o.y,left:n.left-r.width-o.x}}function um(n){return[hn,bn,Pn,vn].some(function(r){return n[r]>=0})}function HS(n){var r=n.state,o=n.name,a=r.rects.reference,s=r.rects.popper,u=r.modifiersData.preventOverflow,f=fo(r,{elementContext:"reference"}),p=fo(r,{altBoundary:!0}),m=sm(f,a),v=sm(p,s,u),g=um(m),y=um(v);r.modifiersData[o]={referenceClippingOffsets:m,popperEscapeOffsets:v,isReferenceHidden:g,hasPopperEscaped:y},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":g,"data-popper-escaped":y})}const YS={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:HS};function VS(n,r,o){var a=Jn(n),s=[vn,hn].indexOf(a)>=0?-1:1,u=typeof o=="function"?o(Object.assign({},r,{placement:n})):o,f=u[0],p=u[1];return f=f||0,p=(p||0)*s,[vn,bn].indexOf(a)>=0?{x:p,y:f}:{x:f,y:p}}function KS(n){var r=n.state,o=n.options,a=n.name,s=o.offset,u=s===void 0?[0,0]:s,f=lv.reduce(function(g,y){return g[y]=VS(y,r.rects,u),g},{}),p=f[r.placement],m=p.x,v=p.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=m,r.modifiersData.popperOffsets.y+=v),r.modifiersData[a]=f}const GS={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:KS};function qS(n){var r=n.state,o=n.name;r.modifiersData[o]=mv({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})}const QS={name:"popperOffsets",enabled:!0,phase:"read",fn:qS,data:{}};function XS(n){return n==="x"?"y":"x"}function JS(n){var r=n.state,o=n.options,a=n.name,s=o.mainAxis,u=s===void 0?!0:s,f=o.altAxis,p=f===void 0?!1:f,m=o.boundary,v=o.rootBoundary,g=o.altBoundary,y=o.padding,S=o.tether,x=S===void 0?!0:S,I=o.tetherOffset,R=I===void 0?0:I,T=fo(r,{boundary:m,rootBoundary:v,padding:y,altBoundary:g}),M=Jn(r.placement),P=ni(r.placement),W=!P,H=pc(M),j=XS(H),Q=r.modifiersData.popperOffsets,ee=r.rects.reference,re=r.rects.popper,de=typeof R=="function"?R(Object.assign({},r.rects,{placement:r.placement})):R,ve=typeof de=="number"?{mainAxis:de,altAxis:de}:Object.assign({mainAxis:0,altAxis:0},de),ae=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,se={x:0,y:0};if(Q){if(u){var V,fe=H==="y"?hn:vn,Oe=H==="y"?Pn:bn,Se=H==="y"?"height":"width",he=Q[H],Y=he+T[fe],X=he-T[Oe],B=x?-re[Se]/2:0,_=P===Jr?ee[Se]:re[Se],b=P===Jr?-re[Se]:-ee[Se],ue=r.elements.arrow,ce=x&&ue?dc(ue):{width:0,height:0},pe=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:cv(),ge=pe[fe],Ae=pe[Oe],we=Zi(0,ee[Se],ce[Se]),Te=W?ee[Se]/2-B-we-ge-ve.mainAxis:_-we-ge-ve.mainAxis,rn=W?-ee[Se]/2+B+we+Ae+ve.mainAxis:b+we+Ae+ve.mainAxis,vt=r.elements.arrow&&wo(r.elements.arrow),_o=vt?H==="y"?vt.clientTop||0:vt.clientLeft||0:0,Yt=(V=ae?.[H])!=null?V:0,ii=he+Te-Yt-_o,Ao=he+rn-Yt,oi=Zi(x?qa(Y,ii):Y,he,x?sr(X,Ao):X);Q[H]=oi,se[H]=oi-he}if(p){var dr,ko=H==="x"?hn:vn,ai=H==="x"?Pn:bn,yn=Q[j],Ln=j==="y"?"height":"width",pr=yn+T[ko],li=yn-T[ai],mr=[hn,vn].indexOf(M)!==-1,si=(dr=ae?.[j])!=null?dr:0,ui=mr?pr:yn-ee[Ln]-re[Ln]-si+ve.altAxis,hr=mr?yn+ee[Ln]+re[Ln]-si-ve.altAxis:li,Vt=x&&mr?CS(ui,yn,hr):Zi(x?ui:pr,yn,x?hr:li);Q[j]=Vt,se[j]=Vt-yn}r.modifiersData[a]=se}}const ZS={name:"preventOverflow",enabled:!0,phase:"main",fn:JS,requiresIfExists:["offset"]};function eC(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function nC(n){return n===_n(n)||!Zn(n)?mc(n):eC(n)}function tC(n){var r=n.getBoundingClientRect(),o=Zr(r.width)/n.offsetWidth||1,a=Zr(r.height)/n.offsetHeight||1;return o!==1||a!==1}function rC(n,r,o){o===void 0&&(o=!1);var a=Zn(r),s=Zn(r)&&tC(r),u=Ht(r),f=ei(n,s,o),p={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(a||!a&&!o)&&((zt(r)!=="body"||vc(u))&&(p=nC(r)),Zn(r)?(m=ei(r,!0),m.x+=r.clientLeft,m.y+=r.clientTop):u&&(m.x=hc(u))),{x:f.left+p.scrollLeft-m.x,y:f.top+p.scrollTop-m.y,width:f.width,height:f.height}}function iC(n){var r=new Map,o=new Set,a=[];n.forEach(function(u){r.set(u.name,u)});function s(u){o.add(u.name);var f=[].concat(u.requires||[],u.requiresIfExists||[]);f.forEach(function(p){if(!o.has(p)){var m=r.get(p);m&&s(m)}}),a.push(u)}return n.forEach(function(u){o.has(u.name)||s(u)}),a}function oC(n){var r=iC(n);return wS.reduce(function(o,a){return o.concat(r.filter(function(s){return s.phase===a}))},[])}function aC(n){var r;return function(){return r||(r=new Promise(function(o){Promise.resolve().then(function(){r=void 0,o(n())})})),r}}function lC(n){var r=n.reduce(function(o,a){var s=o[a.name];return o[a.name]=s?Object.assign({},s,a,{options:Object.assign({},s.options,a.options),data:Object.assign({},s.data,a.data)}):a,o},{});return Object.keys(r).map(function(o){return r[o]})}var cm={placement:"bottom",modifiers:[],strategy:"absolute"};function fm(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return!r.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function sC(n){n===void 0&&(n={});var r=n,o=r.defaultModifiers,a=o===void 0?[]:o,s=r.defaultOptions,u=s===void 0?cm:s;return function(p,m,v){v===void 0&&(v=u);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},cm,u),modifiersData:{},elements:{reference:p,popper:m},attributes:{},styles:{}},y=[],S=!1,x={state:g,setOptions:function(M){var P=typeof M=="function"?M(g.options):M;R(),g.options=Object.assign({},u,g.options,P),g.scrollParents={reference:ur(p)?eo(p):p.contextElement?eo(p.contextElement):[],popper:eo(m)};var W=oC(lC([].concat(a,g.options.modifiers)));return g.orderedModifiers=W.filter(function(H){return H.enabled}),I(),x.update()},forceUpdate:function(){if(!S){var M=g.elements,P=M.reference,W=M.popper;if(fm(P,W)){g.rects={reference:rC(P,wo(W),g.options.strategy==="fixed"),popper:dc(W)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(ve){return g.modifiersData[ve.name]=Object.assign({},ve.data)});for(var H=0;H<g.orderedModifiers.length;H++){if(g.reset===!0){g.reset=!1,H=-1;continue}var j=g.orderedModifiers[H],Q=j.fn,ee=j.options,re=ee===void 0?{}:ee,de=j.name;typeof Q=="function"&&(g=Q({state:g,options:re,name:de,instance:x})||g)}}}},update:aC(function(){return new Promise(function(T){x.forceUpdate(),T(g)})}),destroy:function(){R(),S=!0}};if(!fm(p,m))return x;x.setOptions(v).then(function(T){!S&&v.onFirstUpdate&&v.onFirstUpdate(T)});function I(){g.orderedModifiers.forEach(function(T){var M=T.name,P=T.options,W=P===void 0?{}:P,H=T.effect;if(typeof H=="function"){var j=H({state:g,name:M,instance:x,options:W}),Q=function(){};y.push(j||Q)}})}function R(){y.forEach(function(T){return T()}),y=[]}return x}}const uC=sC({defaultModifiers:[YS,QS,RS,PS,GS,WS,ZS,kS]}),cC=["enabled","placement","strategy","modifiers"];function fC(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}const dC={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},pC={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:n})=>()=>{const{reference:r,popper:o}=n.elements;if("removeAttribute"in r){const a=(r.getAttribute("aria-describedby")||"").split(",").filter(s=>s.trim()!==o.id);a.length?r.setAttribute("aria-describedby",a.join(",")):r.removeAttribute("aria-describedby")}},fn:({state:n})=>{var r;const{popper:o,reference:a}=n.elements,s=(r=o.getAttribute("role"))==null?void 0:r.toLowerCase();if(o.id&&s==="tooltip"&&"setAttribute"in a){const u=a.getAttribute("aria-describedby");if(u&&u.split(",").indexOf(o.id)!==-1)return;a.setAttribute("aria-describedby",u?`${u},${o.id}`:o.id)}}},mC=[];function hC(n,r,o={}){let{enabled:a=!0,placement:s="bottom",strategy:u="absolute",modifiers:f=mC}=o,p=fC(o,cC);const m=k.useRef(f),v=k.useRef(),g=k.useCallback(()=>{var T;(T=v.current)==null||T.update()},[]),y=k.useCallback(()=>{var T;(T=v.current)==null||T.forceUpdate()},[]),[S,x]=lS(k.useState({placement:s,update:g,forceUpdate:y,attributes:{},styles:{popper:{},arrow:{}}})),I=k.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:T})=>{const M={},P={};Object.keys(T.elements).forEach(W=>{M[W]=T.styles[W],P[W]=T.attributes[W]}),x({state:T,styles:M,attributes:P,update:g,forceUpdate:y,placement:T.placement})}}),[g,y,x]),R=k.useMemo(()=>(Ji(m.current,f)||(m.current=f),m.current),[f]);return k.useEffect(()=>{!v.current||!a||v.current.setOptions({placement:s,strategy:u,modifiers:[...R,I,dC]})},[u,s,I,a,R]),k.useEffect(()=>{if(!(!a||n==null||r==null))return v.current=uC(n,r,Object.assign({},p,{placement:s,strategy:u,modifiers:[...R,pC,I]})),()=>{v.current!=null&&(v.current.destroy(),v.current=void 0,x(T=>Object.assign({},T,{attributes:{},styles:{popper:{}}})))}},[a,n,r]),S}function dm(n,r){if(n.contains)return n.contains(r);if(n.compareDocumentPosition)return n===r||!!(n.compareDocumentPosition(r)&16)}var pu,pm;function vC(){if(pm)return pu;pm=1;var n=function(){};return pu=n,pu}var gC=vC();const yC=ho(gC),mm=()=>{};function wC(n){return n.button===0}function EC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}const mu=n=>n&&("current"in n?n.current:n),hm={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function SC(n,r=mm,{disabled:o,clickTrigger:a="click"}={}){const s=k.useRef(!1),u=k.useRef(!1),f=k.useCallback(v=>{const g=mu(n);yC(!!g,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),s.current=!g||EC(v)||!wC(v)||!!dm(g,v.target)||u.current,u.current=!1},[n]),p=jt(v=>{const g=mu(n);g&&dm(g,v.target)?u.current=!0:u.current=!1}),m=jt(v=>{s.current||r(v)});k.useEffect(()=>{var v,g;if(o||n==null)return;const y=LE(mu(n)),S=y.defaultView||window;let x=(v=S.event)!=null?v:(g=S.parent)==null?void 0:g.event,I=null;hm[a]&&(I=Da(y,hm[a],p,!0));const R=Da(y,a,f,!0),T=Da(y,a,P=>{if(P===x){x=void 0;return}m(P)});let M=[];return"ontouchstart"in y.documentElement&&(M=[].slice.call(y.body.children).map(P=>Da(P,"mousemove",mm))),()=>{I?.(),R(),T(),M.forEach(P=>P())}},[n,o,a,f,p,m])}function CC(n){const r={};return Array.isArray(n)?(n?.forEach(o=>{r[o.name]=o}),r):n||r}function xC(n={}){return Array.isArray(n)?n:Object.keys(n).map(r=>(n[r].name=r,n[r]))}function _C({enabled:n,enableEvents:r,placement:o,flip:a,offset:s,fixed:u,containerPadding:f,arrowElement:p,popperConfig:m={}}){var v,g,y,S,x;const I=CC(m.modifiers);return Object.assign({},m,{placement:o,enabled:n,strategy:u?"fixed":m.strategy,modifiers:xC(Object.assign({},I,{eventListeners:{enabled:r,options:(v=I.eventListeners)==null?void 0:v.options},preventOverflow:Object.assign({},I.preventOverflow,{options:f?Object.assign({padding:f},(g=I.preventOverflow)==null?void 0:g.options):(y=I.preventOverflow)==null?void 0:y.options}),offset:{options:Object.assign({offset:s},(S=I.offset)==null?void 0:S.options)},arrow:Object.assign({},I.arrow,{enabled:!!p,options:Object.assign({},(x=I.arrow)==null?void 0:x.options,{element:p})}),flip:Object.assign({enabled:!!a},I.flip)}))})}const AC=["children","usePopper"];function kC(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}const OC=()=>{};function hv(n={}){const r=k.useContext(il),[o,a]=WE(),s=k.useRef(!1),{flip:u,offset:f,rootCloseEvent:p,fixed:m=!1,placement:v,popperConfig:g={},enableEventListeners:y=!0,usePopper:S=!!r}=n,x=r?.show==null?!!n.show:r.show;x&&!s.current&&(s.current=!0);const I=Q=>{r?.toggle(!1,Q)},{placement:R,setMenu:T,menuElement:M,toggleElement:P}=r||{},W=hC(P,M,_C({placement:v||R||"bottom-start",enabled:S,enableEvents:y??x,offset:f,flip:u,fixed:m,arrowElement:o,popperConfig:g})),H=Object.assign({ref:T||OC,"aria-labelledby":P?.id},W.attributes.popper,{style:W.styles.popper}),j={show:x,placement:R,hasShown:s.current,toggle:r?.toggle,popper:S?W:null,arrowProps:S?Object.assign({ref:a},W.attributes.arrow,{style:W.styles.arrow}):{}};return SC(M,I,{clickTrigger:p,disabled:!x}),[H,j]}function vv(n){let{children:r,usePopper:o=!0}=n,a=kC(n,AC);const[s,u]=hv(Object.assign({},a,{usePopper:o}));return L(rl,{children:r(s,u)})}vv.displayName="DropdownMenu";const gv={prefix:String(Math.round(Math.random()*1e10)),current:0},yv=gn.createContext(gv),TC=gn.createContext(!1);let hu=new WeakMap;function NC(n=!1){let r=k.useContext(yv),o=k.useRef(null);if(o.current===null&&!n){var a,s;let u=(s=gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||s===void 0||(a=s.ReactCurrentOwner)===null||a===void 0?void 0:a.current;if(u){let f=hu.get(u);f==null?hu.set(u,{id:r.current,state:u.memoizedState}):u.memoizedState!==f.state&&(r.current=f.id,hu.delete(u))}o.current=++r.current}return o.current}function RC(n){let r=k.useContext(yv),o=NC(!!n),a=`react-aria${r.prefix}`;return n||`${a}-${o}`}function IC(n){let r=gn.useId(),[o]=k.useState(FC()),a=o?"react-aria":`react-aria${gv.prefix}`;return n||`${a}-${r}`}const PC=typeof gn.useId=="function"?IC:RC;function bC(){return!1}function LC(){return!0}function DC(n){return()=>{}}function FC(){return typeof gn.useSyncExternalStore=="function"?gn.useSyncExternalStore(DC,bC,LC):k.useContext(TC)}const wv=n=>{var r;return((r=n.getAttribute("role"))==null?void 0:r.toLowerCase())==="menu"},vm=()=>{};function Ev(){const n=PC(),{show:r=!1,toggle:o=vm,setToggle:a,menuElement:s}=k.useContext(il)||{},u=k.useCallback(p=>{o(!r,p)},[r,o]),f={id:n,ref:a||vm,onClick:u,"aria-expanded":!!r};return s&&wv(s)&&(f["aria-haspopup"]=!0),[f,{show:r,toggle:o}]}function Sv({children:n}){const[r,o]=Ev();return L(rl,{children:n(r,o)})}Sv.displayName="DropdownToggle";const ju=k.createContext(null),gm=(n,r=null)=>n!=null?String(n):r||null,Cv=k.createContext(null);Cv.displayName="NavContext";const MC="data-rr-ui-";function xv(n){return`${MC}${n}`}const jC=["eventKey","disabled","onClick","active","as"];function UC(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}function _v({key:n,href:r,active:o,disabled:a,onClick:s}){const u=k.useContext(ju),f=k.useContext(Cv),{activeKey:p}=f||{},m=gm(n,r),v=o==null&&n!=null?gm(p)===m:o;return[{onClick:jt(y=>{a||(s?.(y),u&&!y.isPropagationStopped()&&u(m,y))}),"aria-disabled":a||void 0,"aria-selected":v,[xv("dropdown-item")]:""},{isActive:v}]}const Av=k.forwardRef((n,r)=>{let{eventKey:o,disabled:a,onClick:s,active:u,as:f=Gh}=n,p=UC(n,jC);const[m]=_v({key:o,href:p.href,disabled:a,onClick:s,active:u});return L(f,Object.assign({},p,{ref:r},m))});Av.displayName="DropdownItem";const kv=k.createContext(Hh?window:void 0);kv.Provider;function zC(){return k.useContext(kv)}function ym(){const n=aS(),r=k.useRef(null),o=k.useCallback(a=>{r.current=a,n()},[n]);return[r,o]}function Eo({defaultShow:n,show:r,onSelect:o,onToggle:a,itemSelector:s=`* [${xv("dropdown-item")}]`,focusFirstItemOnShow:u,placement:f="bottom-start",children:p}){const m=zC(),[v,g]=oS(r,n,a),[y,S]=ym(),x=y.current,[I,R]=ym(),T=I.current,M=KE(v),P=k.useRef(null),W=k.useRef(!1),H=k.useContext(ju),j=k.useCallback((ae,se,V=se?.type)=>{g(ae,{originalEvent:se,source:V})},[g]),Q=jt((ae,se)=>{o?.(ae,se),j(!1,se,"select"),se.isPropagationStopped()||H?.(ae,se)}),ee=k.useMemo(()=>({toggle:j,placement:f,show:v,menuElement:x,toggleElement:T,setMenu:S,setToggle:R}),[j,f,v,x,T,S,R]);x&&M&&!v&&(W.current=x.contains(x.ownerDocument.activeElement));const re=jt(()=>{T&&T.focus&&T.focus()}),de=jt(()=>{const ae=P.current;let se=u;if(se==null&&(se=y.current&&wv(y.current)?"keyboard":!1),se===!1||se==="keyboard"&&!/^key.+$/.test(ae))return;const V=em(y.current,s)[0];V&&V.focus&&V.focus()});k.useEffect(()=>{v?de():W.current&&(W.current=!1,re())},[v,W,re,de]),k.useEffect(()=>{P.current=null});const ve=(ae,se)=>{if(!y.current)return null;const V=em(y.current,s);let fe=V.indexOf(ae)+se;return fe=Math.max(0,Math.min(fe,V.length)),V[fe]};return YE(k.useCallback(()=>m.document,[m]),"keydown",ae=>{var se,V;const{key:fe}=ae,Oe=ae.target,Se=(se=y.current)==null?void 0:se.contains(Oe),he=(V=I.current)==null?void 0:V.contains(Oe);if(/input|textarea/i.test(Oe.tagName)&&(fe===" "||fe!=="Escape"&&Se||fe==="Escape"&&Oe.type==="search")||!Se&&!he||fe==="Tab"&&(!y.current||!v))return;P.current=ae.type;const X={originalEvent:ae,source:ae.type};switch(fe){case"ArrowUp":{const B=ve(Oe,-1);B&&B.focus&&B.focus(),ae.preventDefault();return}case"ArrowDown":if(ae.preventDefault(),!v)g(!0,X);else{const B=ve(Oe,1);B&&B.focus&&B.focus()}return;case"Tab":Yh(Oe.ownerDocument,"keyup",B=>{var _;(B.key==="Tab"&&!B.target||!((_=y.current)!=null&&_.contains(B.target)))&&g(!1,X)},{once:!0});break;case"Escape":fe==="Escape"&&(ae.preventDefault(),ae.stopPropagation()),g(!1,X);break}}),L(ju.Provider,{value:Q,children:L(il.Provider,{value:ee,children:p})})}Eo.displayName="Dropdown";Eo.Menu=vv;Eo.Toggle=Sv;Eo.Item=Av;const gc=k.createContext({});gc.displayName="DropdownContext";const Ov=k.forwardRef(({className:n,bsPrefix:r,as:o="hr",role:a="separator",...s},u)=>(r=_e(r,"dropdown-divider"),L(o,{ref:u,className:Ee(n,r),role:a,...s})));Ov.displayName="DropdownDivider";const Tv=k.forwardRef(({className:n,bsPrefix:r,as:o="div",role:a="heading",...s},u)=>(r=_e(r,"dropdown-header"),L(o,{ref:u,className:Ee(n,r),role:a,...s})));Tv.displayName="DropdownHeader";const Nv=k.forwardRef(({bsPrefix:n,className:r,eventKey:o,disabled:a=!1,onClick:s,active:u,as:f=qh,...p},m)=>{const v=_e(n,"dropdown-item"),[g,y]=_v({key:o,href:p.href,disabled:a,onClick:s,active:u});return L(f,{...p,...g,ref:m,className:Ee(r,v,y.isActive&&"active",a&&"disabled")})});Nv.displayName="DropdownItem";const Rv=k.forwardRef(({className:n,bsPrefix:r,as:o="span",...a},s)=>(r=_e(r,"dropdown-item-text"),L(o,{ref:s,className:Ee(n,r),...a})));Rv.displayName="DropdownItemText";const $C=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",BC=typeof document<"u",WC=BC||$C?k.useLayoutEffect:k.useEffect,yc=k.createContext(null);yc.displayName="InputGroupContext";const Iv=k.createContext(null);Iv.displayName="NavbarContext";function Pv(n,r){return n}function bv(n,r,o){const a=o?"top-end":"top-start",s=o?"top-start":"top-end",u=o?"bottom-end":"bottom-start",f=o?"bottom-start":"bottom-end",p=o?"right-start":"left-start",m=o?"right-end":"left-end",v=o?"left-start":"right-start",g=o?"left-end":"right-end";let y=n?f:u;return r==="up"?y=n?s:a:r==="end"?y=n?g:v:r==="start"?y=n?m:p:r==="down-centered"?y="bottom":r==="up-centered"&&(y="top"),y}const Lv=k.forwardRef(({bsPrefix:n,className:r,align:o,rootCloseEvent:a,flip:s=!0,show:u,renderOnMount:f,as:p="div",popperConfig:m,variant:v,...g},y)=>{let S=!1;const x=k.useContext(Iv),I=_e(n,"dropdown-menu"),{align:R,drop:T,isRTL:M}=k.useContext(gc);o=o||R;const P=k.useContext(yc),W=[];if(o)if(typeof o=="object"){const ae=Object.keys(o);if(ae.length){const se=ae[0],V=o[se];S=V==="start",W.push(`${I}-${se}-${V}`)}}else o==="end"&&(S=!0);const H=bv(S,T,M),[j,{hasShown:Q,popper:ee,show:re,toggle:de}]=hv({flip:s,rootCloseEvent:a,show:u,usePopper:!x&&W.length===0,offset:[0,2],popperConfig:m,placement:H});if(j.ref=Vh(Pv(y),j.ref),WC(()=>{re&&ee?.update()},[re]),!Q&&!f&&!P)return null;typeof p!="string"&&(j.show=re,j.close=()=>de?.(!1),j.align=o);let ve=g.style;return ee!=null&&ee.placement&&(ve={...g.style,...j.style},g["x-placement"]=ee.placement),L(p,{...g,...j,style:ve,...(W.length||x)&&{"data-bs-popper":"static"},className:Ee(r,I,re&&"show",S&&`${I}-end`,v&&`${I}-${v}`,...W)})});Lv.displayName="DropdownMenu";const Dv=k.forwardRef(({bsPrefix:n,split:r,className:o,childBsPrefix:a,as:s=Xr,...u},f)=>{const p=_e(n,"dropdown-toggle"),m=k.useContext(il);a!==void 0&&(u.bsPrefix=a);const[v]=Ev();return v.ref=Vh(v.ref,Pv(f)),L(s,{className:Ee(o,p,r&&`${p}-split`,m?.show&&"show"),...v,...u})});Dv.displayName="DropdownToggle";const Fv=k.forwardRef((n,r)=>{const{bsPrefix:o,drop:a="down",show:s,className:u,align:f="start",onSelect:p,onToggle:m,focusFirstItemOnShow:v,as:g="div",navbar:y,autoClose:S=!0,...x}=TE(n,{show:"onToggle"}),I=k.useContext(yc),R=_e(o,"dropdown"),T=bE(),M=ee=>S===!1?ee==="click":S==="inside"?ee!=="rootClose":S==="outside"?ee!=="select":!0,P=BE((ee,re)=>{var de;!((de=re.originalEvent)==null||(de=de.target)==null)&&de.classList.contains("dropdown-toggle")&&re.source==="mousedown"||(re.originalEvent.currentTarget===document&&(re.source!=="keydown"||re.originalEvent.key==="Escape")&&(re.source="rootClose"),M(re.source)&&m?.(ee,re))}),H=bv(f==="end",a,T),j=k.useMemo(()=>({align:f,drop:a,isRTL:T}),[f,a,T]),Q={down:R,"down-centered":`${R}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return L(gc.Provider,{value:j,children:L(Eo,{placement:H,show:s,onSelect:p,onToggle:P,focusFirstItemOnShow:v,itemSelector:`.${R}-item:not(.disabled):not(:disabled)`,children:I?x.children:L(g,{...x,ref:r,className:Ee(u,s&&"show",Q[a])})})})});Fv.displayName="Dropdown";const vu=Object.assign(Fv,{Toggle:Dv,Menu:Lv,Item:Nv,ItemText:Rv,Divider:Ov,Header:Tv}),HC={type:Kr.string,tooltip:Kr.bool,as:Kr.elementType},al=k.forwardRef(({as:n="div",className:r,type:o="valid",tooltip:a=!1,...s},u)=>L(n,{...s,ref:u,className:Ee(r,`${o}-${a?"tooltip":"feedback"}`)}));al.displayName="Feedback";al.propTypes=HC;const dt=k.createContext({}),wc=k.forwardRef(({id:n,bsPrefix:r,className:o,type:a="checkbox",isValid:s=!1,isInvalid:u=!1,as:f="input",...p},m)=>{const{controlId:v}=k.useContext(dt);return r=_e(r,"form-check-input"),L(f,{...p,ref:m,type:a,id:n||v,className:Ee(o,r,s&&"is-valid",u&&"is-invalid")})});wc.displayName="FormCheckInput";const Qa=k.forwardRef(({bsPrefix:n,className:r,htmlFor:o,...a},s)=>{const{controlId:u}=k.useContext(dt);return n=_e(n,"form-check-label"),L("label",{...a,ref:s,htmlFor:o||u,className:Ee(r,n)})});Qa.displayName="FormCheckLabel";const Mv=k.forwardRef(({id:n,bsPrefix:r,bsSwitchPrefix:o,inline:a=!1,reverse:s=!1,disabled:u=!1,isValid:f=!1,isInvalid:p=!1,feedbackTooltip:m=!1,feedback:v,feedbackType:g,className:y,style:S,title:x="",type:I="checkbox",label:R,children:T,as:M="input",...P},W)=>{r=_e(r,"form-check"),o=_e(o,"form-switch");const{controlId:H}=k.useContext(dt),j=k.useMemo(()=>({controlId:n||H}),[H,n]),Q=!T&&R!=null&&R!==!1||tS(T,Qa),ee=L(wc,{...P,type:I==="switch"?"checkbox":I,ref:W,isValid:f,isInvalid:p,disabled:u,as:M});return L(dt.Provider,{value:j,children:L("div",{style:S,className:Ee(y,Q&&r,a&&`${r}-inline`,s&&`${r}-reverse`,I==="switch"&&o),children:T||We(rl,{children:[ee,Q&&L(Qa,{title:x,children:R}),v&&L(al,{type:g,tooltip:m,children:v})]})})})});Mv.displayName="FormCheck";const Xa=Object.assign(Mv,{Input:wc,Label:Qa}),jv=k.forwardRef(({bsPrefix:n,type:r,size:o,htmlSize:a,id:s,className:u,isValid:f=!1,isInvalid:p=!1,plaintext:m,readOnly:v,as:g="input",...y},S)=>{const{controlId:x}=k.useContext(dt);return n=_e(n,"form-control"),L(g,{...y,type:r,size:a,ref:S,readOnly:v,id:s||x,className:Ee(u,m?`${n}-plaintext`:n,o&&`${n}-${o}`,r==="color"&&`${n}-color`,f&&"is-valid",p&&"is-invalid")})});jv.displayName="FormControl";const YC=Object.assign(jv,{Feedback:al}),Uv=k.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=_e(r,"form-floating"),L(o,{ref:s,className:Ee(n,r),...a})));Uv.displayName="FormFloating";const Ec=k.forwardRef(({controlId:n,as:r="div",...o},a)=>{const s=k.useMemo(()=>({controlId:n}),[n]);return L(dt.Provider,{value:s,children:L(r,{...o,ref:a})})});Ec.displayName="FormGroup";const zv=k.forwardRef(({as:n="label",bsPrefix:r,column:o=!1,visuallyHidden:a=!1,className:s,htmlFor:u,...f},p)=>{const{controlId:m}=k.useContext(dt);r=_e(r,"form-label");let v="col-form-label";typeof o=="string"&&(v=`${v} ${v}-${o}`);const g=Ee(s,r,a&&"visually-hidden",o&&v);return u=u||m,o?L(go,{ref:p,as:"label",className:g,htmlFor:u,...f}):L(n,{ref:p,className:g,htmlFor:u,...f})});zv.displayName="FormLabel";const $v=k.forwardRef(({bsPrefix:n,className:r,id:o,...a},s)=>{const{controlId:u}=k.useContext(dt);return n=_e(n,"form-range"),L("input",{...a,type:"range",ref:s,className:Ee(r,n),id:o||u})});$v.displayName="FormRange";const Bv=k.forwardRef(({bsPrefix:n,size:r,htmlSize:o,className:a,isValid:s=!1,isInvalid:u=!1,id:f,...p},m)=>{const{controlId:v}=k.useContext(dt);return n=_e(n,"form-select"),L("select",{...p,size:o,ref:m,className:Ee(a,n,r&&`${n}-${r}`,s&&"is-valid",u&&"is-invalid"),id:f||v})});Bv.displayName="FormSelect";const Wv=k.forwardRef(({bsPrefix:n,className:r,as:o="small",muted:a,...s},u)=>(n=_e(n,"form-text"),L(o,{...s,ref:u,className:Ee(r,n,a&&"text-muted")})));Wv.displayName="FormText";const Hv=k.forwardRef((n,r)=>L(Xa,{...n,ref:r,type:"switch"}));Hv.displayName="Switch";const VC=Object.assign(Hv,{Input:Xa.Input,Label:Xa.Label}),Yv=k.forwardRef(({bsPrefix:n,className:r,children:o,controlId:a,label:s,...u},f)=>(n=_e(n,"form-floating"),We(Ec,{ref:f,className:Ee(r,n),controlId:a,...u,children:[o,L("label",{htmlFor:a,children:s})]})));Yv.displayName="FloatingLabel";const KC={_ref:Kr.any,validated:Kr.bool,as:Kr.elementType},Sc=k.forwardRef(({className:n,validated:r,as:o="form",...a},s)=>L(o,{...a,ref:s,className:Ee(n,r&&"was-validated")}));Sc.displayName="Form";Sc.propTypes=KC;const GC=Object.assign(Sc,{Group:Ec,Control:YC,Floating:Uv,Check:Xa,Switch:VC,Label:zv,Text:Wv,Range:$v,Select:Bv,FloatingLabel:Yv}),Ja=k.forwardRef(({bsPrefix:n,className:r,as:o="div",...a},s)=>{const u=_e(n,"row"),f=Bh(),p=Wh(),m=`${u}-cols`,v=[];return f.forEach(g=>{const y=a[g];delete a[g];let S;y!=null&&typeof y=="object"?{cols:S}=y:S=y;const x=g!==p?`-${g}`:"";S!=null&&v.push(`${m}${x}-${S}`)}),L(o,{ref:s,...a,className:Ee(r,u,...v)})});Ja.displayName="Row";function qC(n){let r="";n.lines&&(r=n.lines.map(u=>L("li",{children:u},u)));const o=()=>{let u="Answer-cards rounded-3 shadow-sm";return(n.isSelected||n.isSubmitted&&n.isActuallyCorrect)&&(u+=" selected-card"),n.isSubmitted&&(n.isActuallyCorrect?u+=" correct":n.isSelected&&(u+=" wrong")),u},a=n.isSubmitted&&(n.isSelected||n.isActuallyCorrect),s=n.isSubmitted&&!n.isSelected&&!n.isActuallyCorrect;return L(go,{className:s?"fade-out":"",children:L(qn,{className:o(),onClick:n.onSelect,children:We(qn.Body,{className:"p-4",children:[a&&We(qn.Text,{children:[n.title," ",L("span",{className:"text-muted fw-light",children:n.titlealt})]}),L("ul",{className:"list-unstyled mt-3",children:L("small",{children:r})})]})})})}function QC(n){let r="";return n!==void 0&&n.lines!==void 0&&(r=n.lines.map(o=>L("li",{children:o},o))),L(go,{md:"3",children:L(qn,{className:"Prompt-cards rounded-3 shadow-sm",children:We(qn.Body,{className:"p-4",children:[L(qn.Text,{children:n.text}),L("ul",{className:"list-unstyled mt-3",children:L("small",{children:r})})]})})})}function Uu(n,r){(r==null||r>n.length)&&(r=n.length);for(var o=0,a=Array(r);o<r;o++)a[o]=n[o];return a}function XC(n){if(Array.isArray(n))return n}function JC(n){if(Array.isArray(n))return Uu(n)}function ZC(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function ex(n,r){for(var o=0;o<r.length;o++){var a=r[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,Vv(a.key),a)}}function nx(n,r,o){return r&&ex(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function $a(n,r){var o=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=Cc(n))||r){o&&(n=o);var a=0,s=function(){};return{s,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(m){throw m},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,f=!0,p=!1;return{s:function(){o=o.call(n)},n:function(){var m=o.next();return f=m.done,m},e:function(m){p=!0,u=m},f:function(){try{f||o.return==null||o.return()}finally{if(p)throw u}}}}function me(n,r,o){return(r=Vv(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function tx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function rx(n,r){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a,s,u,f,p=[],m=!0,v=!1;try{if(u=(o=o.call(n)).next,r===0){if(Object(o)!==o)return;m=!1}else for(;!(m=(a=u.call(o)).done)&&(p.push(a.value),p.length!==r);m=!0);}catch(g){v=!0,s=g}finally{try{if(!m&&o.return!=null&&(f=o.return(),Object(f)!==f))return}finally{if(v)throw s}}return p}}function ix(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ox(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wm(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),o.push.apply(o,a)}return o}function z(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?wm(Object(o),!0).forEach(function(a){me(n,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):wm(Object(o)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(o,a))})}return n}function ll(n,r){return XC(n)||rx(n,r)||Cc(n,r)||ix()}function Wn(n){return JC(n)||tx(n)||Cc(n)||ox()}function ax(n,r){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Vv(n){var r=ax(n,"string");return typeof r=="symbol"?r:r+""}function Za(n){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Za(n)}function Cc(n,r){if(n){if(typeof n=="string")return Uu(n,r);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Uu(n,r):void 0}}var Em=function(){},xc={},Kv={},Gv=null,qv={mark:Em,measure:Em};try{typeof window<"u"&&(xc=window),typeof document<"u"&&(Kv=document),typeof MutationObserver<"u"&&(Gv=MutationObserver),typeof performance<"u"&&(qv=performance)}catch{}var lx=xc.navigator||{},Sm=lx.userAgent,Cm=Sm===void 0?"":Sm,$t=xc,Pe=Kv,xm=Gv,Ma=qv;$t.document;var ht=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",Qv=~Cm.indexOf("MSIE")||~Cm.indexOf("Trident/"),gu,sx=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ux=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Xv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},cx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Jv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Xe="classic",So="duotone",Zv="sharp",eg="sharp-duotone",ng="chisel",tg="etch",rg="jelly",ig="jelly-duo",og="jelly-fill",ag="notdog",lg="notdog-duo",sg="slab",ug="slab-press",cg="thumbprint",fg="utility",dg="utility-duo",pg="utility-fill",mg="whiteboard",fx="Classic",dx="Duotone",px="Sharp",mx="Sharp Duotone",hx="Chisel",vx="Etch",gx="Jelly",yx="Jelly Duo",wx="Jelly Fill",Ex="Notdog",Sx="Notdog Duo",Cx="Slab",xx="Slab Press",_x="Thumbprint",Ax="Utility",kx="Utility Duo",Ox="Utility Fill",Tx="Whiteboard",hg=[Xe,So,Zv,eg,ng,tg,rg,ig,og,ag,lg,sg,ug,cg,fg,dg,pg,mg];gu={},me(me(me(me(me(me(me(me(me(me(gu,Xe,fx),So,dx),Zv,px),eg,mx),ng,hx),tg,vx),rg,gx),ig,yx),og,wx),ag,Ex),me(me(me(me(me(me(me(me(gu,lg,Sx),sg,Cx),ug,xx),cg,_x),fg,Ax),dg,kx),pg,Ox),mg,Tx);var Nx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Rx={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Ix=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Px={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},vg=["fak","fa-kit","fakd","fa-kit-duotone"],_m={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},bx=["kit"],Lx="kit",Dx="kit-duotone",Fx="Kit",Mx="Kit Duotone";me(me({},Lx,Fx),Dx,Mx);var jx={kit:{"fa-kit":"fak"}},Ux={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zx={kit:{fak:"fa-kit"}},Am={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},yu,ja={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$x=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Bx="classic",Wx="duotone",Hx="sharp",Yx="sharp-duotone",Vx="chisel",Kx="etch",Gx="jelly",qx="jelly-duo",Qx="jelly-fill",Xx="notdog",Jx="notdog-duo",Zx="slab",e_="slab-press",n_="thumbprint",t_="utility",r_="utility-duo",i_="utility-fill",o_="whiteboard",a_="Classic",l_="Duotone",s_="Sharp",u_="Sharp Duotone",c_="Chisel",f_="Etch",d_="Jelly",p_="Jelly Duo",m_="Jelly Fill",h_="Notdog",v_="Notdog Duo",g_="Slab",y_="Slab Press",w_="Thumbprint",E_="Utility",S_="Utility Duo",C_="Utility Fill",x_="Whiteboard";yu={},me(me(me(me(me(me(me(me(me(me(yu,Bx,a_),Wx,l_),Hx,s_),Yx,u_),Vx,c_),Kx,f_),Gx,d_),qx,p_),Qx,m_),Xx,h_),me(me(me(me(me(me(me(me(yu,Jx,v_),Zx,g_),e_,y_),n_,w_),t_,E_),r_,S_),i_,C_),o_,x_);var __="kit",A_="kit-duotone",k_="Kit",O_="Kit Duotone";me(me({},__,k_),A_,O_);var T_={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},N_={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},zu={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},R_=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],gg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat($x,R_),I_=["solid","regular","light","thin","duotone","brands","semibold"],yg=[1,2,3,4,5,6,7,8,9,10],P_=yg.concat([11,12,13,14,15,16,17,18,19,20]),b_=["aw","fw","pull-left","pull-right"],L_=[].concat(Wn(Object.keys(N_)),I_,b_,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ja.GROUP,ja.SWAP_OPACITY,ja.PRIMARY,ja.SECONDARY]).concat(yg.map(function(n){return"".concat(n,"x")})).concat(P_.map(function(n){return"w-".concat(n)})),D_={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},pt="___FONT_AWESOME___",$u=16,wg="fa",Eg="svg-inline--fa",cr="data-fa-i2svg",Bu="data-fa-pseudo-element",F_="data-fa-pseudo-element-pending",_c="data-prefix",Ac="data-icon",km="fontawesome-i2svg",M_="async",j_=["HTML","HEAD","STYLE","SCRIPT"],Sg=["::before","::after",":before",":after"],Cg=(function(){try{return!0}catch{return!1}})();function Co(n){return new Proxy(n,{get:function(o,a){return a in o?o[a]:o[Xe]}})}var xg=z({},Xv);xg[Xe]=z(z(z(z({},{"fa-duotone":"duotone"}),Xv[Xe]),_m.kit),_m["kit-duotone"]);var U_=Co(xg),Wu=z({},Px);Wu[Xe]=z(z(z(z({},{duotone:"fad"}),Wu[Xe]),Am.kit),Am["kit-duotone"]);var Om=Co(Wu),Hu=z({},zu);Hu[Xe]=z(z({},Hu[Xe]),zx.kit);var kc=Co(Hu),Yu=z({},T_);Yu[Xe]=z(z({},Yu[Xe]),jx.kit);Co(Yu);var z_=sx,_g="fa-layers-text",$_=ux,B_=z({},Nx);Co(B_);var W_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wu=cx,H_=[].concat(Wn(bx),Wn(L_)),no=$t.FontAwesomeConfig||{};function Y_(n){var r=Pe.querySelector("script["+n+"]");if(r)return r.getAttribute(n)}function V_(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Pe&&typeof Pe.querySelector=="function"){var K_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];K_.forEach(function(n){var r=ll(n,2),o=r[0],a=r[1],s=V_(Y_(o));s!=null&&(no[a]=s)})}var Ag={styleDefault:"solid",familyDefault:Xe,cssPrefix:wg,replacementClass:Eg,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};no.familyPrefix&&(no.cssPrefix=no.familyPrefix);var ti=z(z({},Ag),no);ti.autoReplaceSvg||(ti.observeMutations=!1);var te={};Object.keys(Ag).forEach(function(n){Object.defineProperty(te,n,{enumerable:!0,set:function(o){ti[n]=o,to.forEach(function(a){return a(te)})},get:function(){return ti[n]}})});Object.defineProperty(te,"familyPrefix",{enumerable:!0,set:function(r){ti.cssPrefix=r,to.forEach(function(o){return o(te)})},get:function(){return ti.cssPrefix}});$t.FontAwesomeConfig=te;var to=[];function G_(n){return to.push(n),function(){to.splice(to.indexOf(n),1)}}var $r=$u,Qn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q_(n){if(!(!n||!ht)){var r=Pe.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=n;for(var o=Pe.head.childNodes,a=null,s=o.length-1;s>-1;s--){var u=o[s],f=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=u)}return Pe.head.insertBefore(r,a),n}}var Q_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Tm(){for(var n=12,r="";n-- >0;)r+=Q_[Math.random()*62|0];return r}function ri(n){for(var r=[],o=(n||[]).length>>>0;o--;)r[o]=n[o];return r}function Oc(n){return n.classList?ri(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(r){return r})}function kg(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X_(n){return Object.keys(n||{}).reduce(function(r,o){return r+"".concat(o,'="').concat(kg(n[o]),'" ')},"").trim()}function sl(n){return Object.keys(n||{}).reduce(function(r,o){return r+"".concat(o,": ").concat(n[o].trim(),";")},"")}function Tc(n){return n.size!==Qn.size||n.x!==Qn.x||n.y!==Qn.y||n.rotate!==Qn.rotate||n.flipX||n.flipY}function J_(n){var r=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(u," ").concat(f," ").concat(p)},v={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:m,path:v}}function Z_(n){var r=n.transform,o=n.width,a=o===void 0?$u:o,s=n.height,u=s===void 0?$u:s,f="";return Qv?f+="translate(".concat(r.x/$r-a/2,"em, ").concat(r.y/$r-u/2,"em) "):f+="translate(calc(-50% + ".concat(r.x/$r,"em), calc(-50% + ").concat(r.y/$r,"em)) "),f+="scale(".concat(r.size/$r*(r.flipX?-1:1),", ").concat(r.size/$r*(r.flipY?-1:1),") "),f+="rotate(".concat(r.rotate,"deg) "),f}var eA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Og(){var n=wg,r=Eg,o=te.cssPrefix,a=te.replacementClass,s=eA;if(o!==n||a!==r){var u=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),p=new RegExp("\\.".concat(r),"g");s=s.replace(u,".".concat(o,"-")).replace(f,"--".concat(o,"-")).replace(p,".".concat(a))}return s}var Nm=!1;function Eu(){te.autoAddCss&&!Nm&&(q_(Og()),Nm=!0)}var nA={mixout:function(){return{dom:{css:Og,insertCss:Eu}}},hooks:function(){return{beforeDOMElementCreation:function(){Eu()},beforeI2svg:function(){Eu()}}}},mt=$t||{};mt[pt]||(mt[pt]={});mt[pt].styles||(mt[pt].styles={});mt[pt].hooks||(mt[pt].hooks={});mt[pt].shims||(mt[pt].shims=[]);var Bn=mt[pt],Tg=[],Ng=function(){Pe.removeEventListener("DOMContentLoaded",Ng),el=1,Tg.map(function(r){return r()})},el=!1;ht&&(el=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),el||Pe.addEventListener("DOMContentLoaded",Ng));function tA(n){ht&&(el?setTimeout(n,0):Tg.push(n))}function xo(n){var r=n.tag,o=n.attributes,a=o===void 0?{}:o,s=n.children,u=s===void 0?[]:s;return typeof n=="string"?kg(n):"<".concat(r," ").concat(X_(a),">").concat(u.map(xo).join(""),"</").concat(r,">")}function Rm(n,r,o){if(n&&n[r]&&n[r][o])return{prefix:r,iconName:o,icon:n[r][o]}}var Su=function(r,o,a,s){var u=Object.keys(r),f=u.length,p=o,m,v,g;for(a===void 0?(m=1,g=r[u[0]]):(m=0,g=a);m<f;m++)v=u[m],g=p(g,r[v],v,r);return g};function Rg(n){return Wn(n).length!==1?null:n.codePointAt(0).toString(16)}function Im(n){return Object.keys(n).reduce(function(r,o){var a=n[o],s=!!a.icon;return s?r[a.iconName]=a.icon:r[o]=a,r},{})}function Vu(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=o.skipHooks,s=a===void 0?!1:a,u=Im(r);typeof Bn.hooks.addPack=="function"&&!s?Bn.hooks.addPack(n,Im(r)):Bn.styles[n]=z(z({},Bn.styles[n]||{}),u),n==="fas"&&Vu("fa",r)}var po=Bn.styles,rA=Bn.shims,Ig=Object.keys(kc),iA=Ig.reduce(function(n,r){return n[r]=Object.keys(kc[r]),n},{}),Nc=null,Pg={},bg={},Lg={},Dg={},Fg={};function oA(n){return~H_.indexOf(n)}function aA(n,r){var o=r.split("-"),a=o[0],s=o.slice(1).join("-");return a===n&&s!==""&&!oA(s)?s:null}var Mg=function(){var r=function(u){return Su(po,function(f,p,m){return f[m]=Su(p,u,{}),f},{})};Pg=r(function(s,u,f){if(u[3]&&(s[u[3]]=f),u[2]){var p=u[2].filter(function(m){return typeof m=="number"});p.forEach(function(m){s[m.toString(16)]=f})}return s}),bg=r(function(s,u,f){if(s[f]=f,u[2]){var p=u[2].filter(function(m){return typeof m=="string"});p.forEach(function(m){s[m]=f})}return s}),Fg=r(function(s,u,f){var p=u[2];return s[f]=f,p.forEach(function(m){s[m]=f}),s});var o="far"in po||te.autoFetchSvg,a=Su(rA,function(s,u){var f=u[0],p=u[1],m=u[2];return p==="far"&&!o&&(p="fas"),typeof f=="string"&&(s.names[f]={prefix:p,iconName:m}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:p,iconName:m}),s},{names:{},unicodes:{}});Lg=a.names,Dg=a.unicodes,Nc=ul(te.styleDefault,{family:te.familyDefault})};G_(function(n){Nc=ul(n.styleDefault,{family:te.familyDefault})});Mg();function Rc(n,r){return(Pg[n]||{})[r]}function lA(n,r){return(bg[n]||{})[r]}function ar(n,r){return(Fg[n]||{})[r]}function jg(n){return Lg[n]||{prefix:null,iconName:null}}function sA(n){var r=Dg[n],o=Rc("fas",n);return r||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function Bt(){return Nc}var Ug=function(){return{prefix:null,iconName:null,rest:[]}};function uA(n){var r=Xe,o=Ig.reduce(function(a,s){return a[s]="".concat(te.cssPrefix,"-").concat(s),a},{});return hg.forEach(function(a){(n.includes(o[a])||n.some(function(s){return iA[a].includes(s)}))&&(r=a)}),r}function ul(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.family,a=o===void 0?Xe:o,s=U_[a][n];if(a===So&&!n)return"fad";var u=Om[a][n]||Om[a][s],f=n in Bn.styles?n:null,p=u||f||null;return p}function cA(n){var r=[],o=null;return n.forEach(function(a){var s=aA(te.cssPrefix,a);s?o=s:a&&r.push(a)}),{iconName:o,rest:r}}function Pm(n){return n.sort().filter(function(r,o,a){return a.indexOf(r)===o})}var bm=gg.concat(vg);function cl(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.skipLookups,a=o===void 0?!1:o,s=null,u=Pm(n.filter(function(x){return bm.includes(x)})),f=Pm(n.filter(function(x){return!bm.includes(x)})),p=u.filter(function(x){return s=x,!Jv.includes(x)}),m=ll(p,1),v=m[0],g=v===void 0?null:v,y=uA(u),S=z(z({},cA(f)),{},{prefix:ul(g,{family:y})});return z(z(z({},S),mA({values:n,family:y,styles:po,config:te,canonical:S,givenPrefix:s})),fA(a,s,S))}function fA(n,r,o){var a=o.prefix,s=o.iconName;if(n||!a||!s)return{prefix:a,iconName:s};var u=r==="fa"?jg(s):{},f=ar(a,s);return s=u.iconName||f||s,a=u.prefix||a,a==="far"&&!po.far&&po.fas&&!te.autoFetchSvg&&(a="fas"),{prefix:a,iconName:s}}var dA=hg.filter(function(n){return n!==Xe||n!==So}),pA=Object.keys(zu).filter(function(n){return n!==Xe}).map(function(n){return Object.keys(zu[n])}).flat();function mA(n){var r=n.values,o=n.family,a=n.canonical,s=n.givenPrefix,u=s===void 0?"":s,f=n.styles,p=f===void 0?{}:f,m=n.config,v=m===void 0?{}:m,g=o===So,y=r.includes("fa-duotone")||r.includes("fad"),S=v.familyDefault==="duotone",x=a.prefix==="fad"||a.prefix==="fa-duotone";if(!g&&(y||S||x)&&(a.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(a.prefix="fab"),!a.prefix&&dA.includes(o)){var I=Object.keys(p).find(function(T){return pA.includes(T)});if(I||v.autoFetchSvg){var R=Ix.get(o).defaultShortPrefixId;a.prefix=R,a.iconName=ar(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||u==="fa")&&(a.prefix=Bt()||"fas"),a}var hA=(function(){function n(){ZC(this,n),this.definitions={}}return nx(n,[{key:"add",value:function(){for(var o=this,a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];var f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(p){o.definitions[p]=z(z({},o.definitions[p]||{}),f[p]),Vu(p,f[p]);var m=kc[Xe][p];m&&Vu(m,f[p]),Mg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(o,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(u){var f=s[u],p=f.prefix,m=f.iconName,v=f.icon,g=v[2];o[p]||(o[p]={}),g.length>0&&g.forEach(function(y){typeof y=="string"&&(o[p][y]=v)}),o[p][m]=v}),o}}])})(),Lm=[],Vr={},qr={},vA=Object.keys(qr);function gA(n,r){var o=r.mixoutsTo;return Lm=n,Vr={},Object.keys(qr).forEach(function(a){vA.indexOf(a)===-1&&delete qr[a]}),Lm.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(f){typeof s[f]=="function"&&(o[f]=s[f]),Za(s[f])==="object"&&Object.keys(s[f]).forEach(function(p){o[f]||(o[f]={}),o[f][p]=s[f][p]})}),a.hooks){var u=a.hooks();Object.keys(u).forEach(function(f){Vr[f]||(Vr[f]=[]),Vr[f].push(u[f])})}a.provides&&a.provides(qr)}),o}function Ku(n,r){for(var o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];var u=Vr[n]||[];return u.forEach(function(f){r=f.apply(null,[r].concat(a))}),r}function fr(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var s=Vr[n]||[];s.forEach(function(u){u.apply(null,o)})}function Wt(){var n=arguments[0],r=Array.prototype.slice.call(arguments,1);return qr[n]?qr[n].apply(null,r):void 0}function Gu(n){n.prefix==="fa"&&(n.prefix="fas");var r=n.iconName,o=n.prefix||Bt();if(r)return r=ar(o,r)||r,Rm(zg.definitions,o,r)||Rm(Bn.styles,o,r)}var zg=new hA,yA=function(){te.autoReplaceSvg=!1,te.observeMutations=!1,fr("noAuto")},wA={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ht?(fr("beforeI2svg",r),Wt("pseudoElements2svg",r),Wt("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=r.autoReplaceSvgRoot;te.autoReplaceSvg===!1&&(te.autoReplaceSvg=!0),te.observeMutations=!0,tA(function(){SA({autoReplaceSvgRoot:o}),fr("watch",r)})}},EA={icon:function(r){if(r===null)return null;if(Za(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:ar(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var o=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],a=ul(r[0]);return{prefix:a,iconName:ar(a,o)||o}}if(typeof r=="string"&&(r.indexOf("".concat(te.cssPrefix,"-"))>-1||r.match(z_))){var s=cl(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||Bt(),iconName:ar(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){var u=Bt();return{prefix:u,iconName:ar(u,r)||r}}}},An={noAuto:yA,config:te,dom:wA,parse:EA,library:zg,findIconDefinition:Gu,toHtml:xo},SA=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=r.autoReplaceSvgRoot,a=o===void 0?Pe:o;(Object.keys(Bn.styles).length>0||te.autoFetchSvg)&&ht&&te.autoReplaceSvg&&An.dom.i2svg({node:a})};function fl(n,r){return Object.defineProperty(n,"abstract",{get:r}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return xo(a)})}}),Object.defineProperty(n,"node",{get:function(){if(ht){var a=Pe.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function CA(n){var r=n.children,o=n.main,a=n.mask,s=n.attributes,u=n.styles,f=n.transform;if(Tc(f)&&o.found&&!a.found){var p=o.width,m=o.height,v={x:p/m/2,y:.5};s.style=sl(z(z({},u),{},{"transform-origin":"".concat(v.x+f.x/16,"em ").concat(v.y+f.y/16,"em")}))}return[{tag:"svg",attributes:s,children:r}]}function xA(n){var r=n.prefix,o=n.iconName,a=n.children,s=n.attributes,u=n.symbol,f=u===!0?"".concat(r,"-").concat(te.cssPrefix,"-").concat(o):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},s),{},{id:f}),children:a}]}]}function _A(n){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(o){return o in n})}function Ic(n){var r=n.icons,o=r.main,a=r.mask,s=n.prefix,u=n.iconName,f=n.transform,p=n.symbol,m=n.maskId,v=n.extra,g=n.watchable,y=g===void 0?!1:g,S=a.found?a:o,x=S.width,I=S.height,R=[te.replacementClass,u?"".concat(te.cssPrefix,"-").concat(u):""].filter(function(j){return v.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(v.classes).join(" "),T={children:[],attributes:z(z({},v.attributes),{},{"data-prefix":s,"data-icon":u,class:R,role:v.attributes.role||"img",viewBox:"0 0 ".concat(x," ").concat(I)})};!_A(v.attributes)&&!v.attributes["aria-hidden"]&&(T.attributes["aria-hidden"]="true"),y&&(T.attributes[cr]="");var M=z(z({},T),{},{prefix:s,iconName:u,main:o,mask:a,maskId:m,transform:f,symbol:p,styles:z({},v.styles)}),P=a.found&&o.found?Wt("generateAbstractMask",M)||{children:[],attributes:{}}:Wt("generateAbstractIcon",M)||{children:[],attributes:{}},W=P.children,H=P.attributes;return M.children=W,M.attributes=H,p?xA(M):CA(M)}function Dm(n){var r=n.content,o=n.width,a=n.height,s=n.transform,u=n.extra,f=n.watchable,p=f===void 0?!1:f,m=z(z({},u.attributes),{},{class:u.classes.join(" ")});p&&(m[cr]="");var v=z({},u.styles);Tc(s)&&(v.transform=Z_({transform:s,width:o,height:a}),v["-webkit-transform"]=v.transform);var g=sl(v);g.length>0&&(m.style=g);var y=[];return y.push({tag:"span",attributes:m,children:[r]}),y}function AA(n){var r=n.content,o=n.extra,a=z(z({},o.attributes),{},{class:o.classes.join(" ")}),s=sl(o.styles);s.length>0&&(a.style=s);var u=[];return u.push({tag:"span",attributes:a,children:[r]}),u}var Cu=Bn.styles;function qu(n){var r=n[0],o=n[1],a=n.slice(4),s=ll(a,1),u=s[0],f=null;return Array.isArray(u)?f={tag:"g",attributes:{class:"".concat(te.cssPrefix,"-").concat(wu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(wu.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(wu.PRIMARY),fill:"currentColor",d:u[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:r,height:o,icon:f}}var kA={found:!1,width:512,height:512};function OA(n,r){!Cg&&!te.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(r,'" is missing.'))}function Qu(n,r){var o=r;return r==="fa"&&te.styleDefault!==null&&(r=Bt()),new Promise(function(a,s){if(o==="fa"){var u=jg(n)||{};n=u.iconName||n,r=u.prefix||r}if(n&&r&&Cu[r]&&Cu[r][n]){var f=Cu[r][n];return a(qu(f))}OA(n,r),a(z(z({},kA),{},{icon:te.showMissingIcons&&n?Wt("missingIconAbstract")||{}:{}}))})}var Fm=function(){},Xu=te.measurePerformance&&Ma&&Ma.mark&&Ma.measure?Ma:{mark:Fm,measure:Fm},Xi='FA "7.1.0"',TA=function(r){return Xu.mark("".concat(Xi," ").concat(r," begins")),function(){return $g(r)}},$g=function(r){Xu.mark("".concat(Xi," ").concat(r," ends")),Xu.measure("".concat(Xi," ").concat(r),"".concat(Xi," ").concat(r," begins"),"".concat(Xi," ").concat(r," ends"))},Pc={begin:TA,end:$g},Ba=function(){};function Mm(n){var r=n.getAttribute?n.getAttribute(cr):null;return typeof r=="string"}function NA(n){var r=n.getAttribute?n.getAttribute(_c):null,o=n.getAttribute?n.getAttribute(Ac):null;return r&&o}function RA(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(te.replacementClass)}function IA(){if(te.autoReplaceSvg===!0)return Wa.replace;var n=Wa[te.autoReplaceSvg];return n||Wa.replace}function PA(n){return Pe.createElementNS("http://www.w3.org/2000/svg",n)}function bA(n){return Pe.createElement(n)}function Bg(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.ceFn,a=o===void 0?n.tag==="svg"?PA:bA:o;if(typeof n=="string")return Pe.createTextNode(n);var s=a(n.tag);Object.keys(n.attributes||[]).forEach(function(f){s.setAttribute(f,n.attributes[f])});var u=n.children||[];return u.forEach(function(f){s.appendChild(Bg(f,{ceFn:a}))}),s}function LA(n){var r=" ".concat(n.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var Wa={replace:function(r){var o=r[0];if(o.parentNode)if(r[1].forEach(function(s){o.parentNode.insertBefore(Bg(s),o)}),o.getAttribute(cr)===null&&te.keepOriginalSource){var a=Pe.createComment(LA(o));o.parentNode.replaceChild(a,o)}else o.remove()},nest:function(r){var o=r[0],a=r[1];if(~Oc(o).indexOf(te.replacementClass))return Wa.replace(r);var s=new RegExp("".concat(te.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var u=a[0].attributes.class.split(" ").reduce(function(p,m){return m===te.replacementClass||m.match(s)?p.toSvg.push(m):p.toNode.push(m),p},{toNode:[],toSvg:[]});a[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",u.toNode.join(" "))}var f=a.map(function(p){return xo(p)}).join(`
`);o.setAttribute(cr,""),o.innerHTML=f}};function jm(n){n()}function Wg(n,r){var o=typeof r=="function"?r:Ba;if(n.length===0)o();else{var a=jm;te.mutateApproach===M_&&(a=$t.requestAnimationFrame||jm),a(function(){var s=IA(),u=Pc.begin("mutate");n.map(s),u(),o()})}}var bc=!1;function Hg(){bc=!0}function Ju(){bc=!1}var nl=null;function Um(n){if(xm&&te.observeMutations){var r=n.treeCallback,o=r===void 0?Ba:r,a=n.nodeCallback,s=a===void 0?Ba:a,u=n.pseudoElementsCallback,f=u===void 0?Ba:u,p=n.observeMutationsRoot,m=p===void 0?Pe:p;nl=new xm(function(v){if(!bc){var g=Bt();ri(v).forEach(function(y){if(y.type==="childList"&&y.addedNodes.length>0&&!Mm(y.addedNodes[0])&&(te.searchPseudoElements&&f(y.target),o(y.target)),y.type==="attributes"&&y.target.parentNode&&te.searchPseudoElements&&f([y.target],!0),y.type==="attributes"&&Mm(y.target)&&~W_.indexOf(y.attributeName))if(y.attributeName==="class"&&NA(y.target)){var S=cl(Oc(y.target)),x=S.prefix,I=S.iconName;y.target.setAttribute(_c,x||g),I&&y.target.setAttribute(Ac,I)}else RA(y.target)&&s(y.target)})}}),ht&&nl.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function DA(){nl&&nl.disconnect()}function FA(n){var r=n.getAttribute("style"),o=[];return r&&(o=r.split(";").reduce(function(a,s){var u=s.split(":"),f=u[0],p=u.slice(1);return f&&p.length>0&&(a[f]=p.join(":").trim()),a},{})),o}function MA(n){var r=n.getAttribute("data-prefix"),o=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",s=cl(Oc(n));return s.prefix||(s.prefix=Bt()),r&&o&&(s.prefix=r,s.iconName=o),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=lA(s.prefix,n.innerText)||Rc(s.prefix,Rg(n.innerText))),!s.iconName&&te.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=n.firstChild.data)),s}function jA(n){var r=ri(n.attributes).reduce(function(o,a){return o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o},{});return r}function UA(){return{iconName:null,prefix:null,transform:Qn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zm(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},o=MA(n),a=o.iconName,s=o.prefix,u=o.rest,f=jA(n),p=Ku("parseNodeAttributes",{},n),m=r.styleParser?FA(n):[];return z({iconName:a,prefix:s,transform:Qn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:f}},p)}var zA=Bn.styles;function Yg(n){var r=te.autoReplaceSvg==="nest"?zm(n,{styleParser:!1}):zm(n);return~r.extra.classes.indexOf(_g)?Wt("generateLayersText",n,r):Wt("generateSvgReplacementMutation",n,r)}function $A(){return[].concat(Wn(vg),Wn(gg))}function $m(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ht)return Promise.resolve();var o=Pe.documentElement.classList,a=function(y){return o.add("".concat(km,"-").concat(y))},s=function(y){return o.remove("".concat(km,"-").concat(y))},u=te.autoFetchSvg?$A():Jv.concat(Object.keys(zA));u.includes("fa")||u.push("fa");var f=[".".concat(_g,":not([").concat(cr,"])")].concat(u.map(function(g){return".".concat(g,":not([").concat(cr,"])")})).join(", ");if(f.length===0)return Promise.resolve();var p=[];try{p=ri(n.querySelectorAll(f))}catch{}if(p.length>0)a("pending"),s("complete");else return Promise.resolve();var m=Pc.begin("onTree"),v=p.reduce(function(g,y){try{var S=Yg(y);S&&g.push(S)}catch(x){Cg||x.name==="MissingIcon"&&console.error(x)}return g},[]);return new Promise(function(g,y){Promise.all(v).then(function(S){Wg(S,function(){a("active"),a("complete"),s("pending"),typeof r=="function"&&r(),m(),g()})}).catch(function(S){m(),y(S)})})}function BA(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yg(n).then(function(o){o&&Wg([o],r)})}function WA(n){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(r||{}).icon?r:Gu(r||{}),s=o.mask;return s&&(s=(s||{}).icon?s:Gu(s||{})),n(a,z(z({},o),{},{mask:s}))}}var HA=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.transform,s=a===void 0?Qn:a,u=o.symbol,f=u===void 0?!1:u,p=o.mask,m=p===void 0?null:p,v=o.maskId,g=v===void 0?null:v,y=o.classes,S=y===void 0?[]:y,x=o.attributes,I=x===void 0?{}:x,R=o.styles,T=R===void 0?{}:R;if(r){var M=r.prefix,P=r.iconName,W=r.icon;return fl(z({type:"icon"},r),function(){return fr("beforeDOMElementCreation",{iconDefinition:r,params:o}),Ic({icons:{main:qu(W),mask:m?qu(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:P,transform:z(z({},Qn),s),symbol:f,maskId:g,extra:{attributes:I,styles:T,classes:S}})})}},YA={mixout:function(){return{icon:WA(HA)}},hooks:function(){return{mutationObserverCallbacks:function(o){return o.treeCallback=$m,o.nodeCallback=BA,o}}},provides:function(r){r.i2svg=function(o){var a=o.node,s=a===void 0?Pe:a,u=o.callback,f=u===void 0?function(){}:u;return $m(s,f)},r.generateSvgReplacementMutation=function(o,a){var s=a.iconName,u=a.prefix,f=a.transform,p=a.symbol,m=a.mask,v=a.maskId,g=a.extra;return new Promise(function(y,S){Promise.all([Qu(s,u),m.iconName?Qu(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var I=ll(x,2),R=I[0],T=I[1];y([o,Ic({icons:{main:R,mask:T},prefix:u,iconName:s,transform:f,symbol:p,maskId:v,extra:g,watchable:!0})])}).catch(S)})},r.generateAbstractIcon=function(o){var a=o.children,s=o.attributes,u=o.main,f=o.transform,p=o.styles,m=sl(p);m.length>0&&(s.style=m);var v;return Tc(f)&&(v=Wt("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),a.push(v||u.icon),{children:a,attributes:s}}}},VA={mixout:function(){return{layer:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,u=s===void 0?[]:s;return fl({type:"layer"},function(){fr("beforeDOMElementCreation",{assembler:o,params:a});var f=[];return o(function(p){Array.isArray(p)?p.map(function(m){f=f.concat(m.abstract)}):f=f.concat(p.abstract)}),[{tag:"span",attributes:{class:["".concat(te.cssPrefix,"-layers")].concat(Wn(u)).join(" ")},children:f}]})}}}},KA={mixout:function(){return{counter:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var s=a.classes,u=s===void 0?[]:s,f=a.attributes,p=f===void 0?{}:f,m=a.styles,v=m===void 0?{}:m;return fl({type:"counter",content:o},function(){return fr("beforeDOMElementCreation",{content:o,params:a}),AA({content:o.toString(),extra:{attributes:p,styles:v,classes:["".concat(te.cssPrefix,"-layers-counter")].concat(Wn(u))}})})}}}},GA={mixout:function(){return{text:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,u=s===void 0?Qn:s,f=a.classes,p=f===void 0?[]:f,m=a.attributes,v=m===void 0?{}:m,g=a.styles,y=g===void 0?{}:g;return fl({type:"text",content:o},function(){return fr("beforeDOMElementCreation",{content:o,params:a}),Dm({content:o,transform:z(z({},Qn),u),extra:{attributes:v,styles:y,classes:["".concat(te.cssPrefix,"-layers-text")].concat(Wn(p))}})})}}},provides:function(r){r.generateLayersText=function(o,a){var s=a.transform,u=a.extra,f=null,p=null;if(Qv){var m=parseInt(getComputedStyle(o).fontSize,10),v=o.getBoundingClientRect();f=v.width/m,p=v.height/m}return Promise.resolve([o,Dm({content:o.innerHTML,width:f,height:p,transform:s,extra:u,watchable:!0})])}}},Vg=new RegExp('"',"ug"),Bm=[1105920,1112319],Wm=z(z(z(z({},{FontAwesome:{normal:"fas",400:"fas"}}),Rx),D_),Ux),Zu=Object.keys(Wm).reduce(function(n,r){return n[r.toLowerCase()]=Wm[r],n},{}),qA=Object.keys(Zu).reduce(function(n,r){var o=Zu[r];return n[r]=o[900]||Wn(Object.entries(o))[0][1],n},{});function QA(n){var r=n.replace(Vg,"");return Rg(Wn(r)[0]||"")}function XA(n){var r=n.getPropertyValue("font-feature-settings").includes("ss01"),o=n.getPropertyValue("content"),a=o.replace(Vg,""),s=a.codePointAt(0),u=s>=Bm[0]&&s<=Bm[1],f=a.length===2?a[0]===a[1]:!1;return u||f||r}function JA(n,r){var o=n.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(r),s=isNaN(a)?"normal":a;return(Zu[o]||{})[s]||qA[o]}function Hm(n,r){var o="".concat(F_).concat(r.replace(":","-"));return new Promise(function(a,s){if(n.getAttribute(o)!==null)return a();var u=ri(n.children),f=u.filter(function(Q){return Q.getAttribute(Bu)===r})[0],p=$t.getComputedStyle(n,r),m=p.getPropertyValue("font-family"),v=m.match($_),g=p.getPropertyValue("font-weight"),y=p.getPropertyValue("content");if(f&&!v)return n.removeChild(f),a();if(v&&y!=="none"&&y!==""){var S=p.getPropertyValue("content"),x=JA(m,g),I=QA(S),R=v[0].startsWith("FontAwesome"),T=XA(p),M=Rc(x,I),P=M;if(R){var W=sA(I);W.iconName&&W.prefix&&(M=W.iconName,x=W.prefix)}if(M&&!T&&(!f||f.getAttribute(_c)!==x||f.getAttribute(Ac)!==P)){n.setAttribute(o,P),f&&n.removeChild(f);var H=UA(),j=H.extra;j.attributes[Bu]=r,Qu(M,x).then(function(Q){var ee=Ic(z(z({},H),{},{icons:{main:Q,mask:Ug()},prefix:x,iconName:P,extra:j,watchable:!0})),re=Pe.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?n.insertBefore(re,n.firstChild):n.appendChild(re),re.outerHTML=ee.map(function(de){return xo(de)}).join(`
`),n.removeAttribute(o),a()}).catch(s)}else a()}else a()})}function ZA(n){return Promise.all([Hm(n,"::before"),Hm(n,"::after")])}function ek(n){return n.parentNode!==document.head&&!~j_.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Bu)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var nk=function(r){return!!r&&Sg.some(function(o){return r.includes(o)})},tk=function(r){if(!r)return[];var o=new Set,a=r.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(v){return v.trim()})});var s=$a(a),u;try{for(s.s();!(u=s.n()).done;){var f=u.value;if(nk(f)){var p=Sg.reduce(function(m,v){return m.replace(v,"")},f);p!==""&&p!=="*"&&o.add(p)}}}catch(m){s.e(m)}finally{s.f()}return o};function Ym(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ht){var o;if(r)o=n;else if(te.searchPseudoElementsFullScan)o=n.querySelectorAll("*");else{var a=new Set,s=$a(document.styleSheets),u;try{for(s.s();!(u=s.n()).done;){var f=u.value;try{var p=$a(f.cssRules),m;try{for(p.s();!(m=p.n()).done;){var v=m.value,g=tk(v.selectorText),y=$a(g),S;try{for(y.s();!(S=y.n()).done;){var x=S.value;a.add(x)}}catch(R){y.e(R)}finally{y.f()}}}catch(R){p.e(R)}finally{p.f()}}catch(R){te.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(R.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(R){s.e(R)}finally{s.f()}if(!a.size)return;var I=Array.from(a).join(", ");try{o=n.querySelectorAll(I)}catch{}}return new Promise(function(R,T){var M=ri(o).filter(ek).map(ZA),P=Pc.begin("searchPseudoElements");Hg(),Promise.all(M).then(function(){P(),Ju(),R()}).catch(function(){P(),Ju(),T()})})}}var rk={hooks:function(){return{mutationObserverCallbacks:function(o){return o.pseudoElementsCallback=Ym,o}}},provides:function(r){r.pseudoElements2svg=function(o){var a=o.node,s=a===void 0?Pe:a;te.searchPseudoElements&&Ym(s)}}},Vm=!1,ik={mixout:function(){return{dom:{unwatch:function(){Hg(),Vm=!0}}}},hooks:function(){return{bootstrap:function(){Um(Ku("mutationObserverCallbacks",{}))},noAuto:function(){DA()},watch:function(o){var a=o.observeMutationsRoot;Vm?Ju():Um(Ku("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Km=function(r){var o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(a,s){var u=s.toLowerCase().split("-"),f=u[0],p=u.slice(1).join("-");if(f&&p==="h")return a.flipX=!0,a;if(f&&p==="v")return a.flipY=!0,a;if(p=parseFloat(p),isNaN(p))return a;switch(f){case"grow":a.size=a.size+p;break;case"shrink":a.size=a.size-p;break;case"left":a.x=a.x-p;break;case"right":a.x=a.x+p;break;case"up":a.y=a.y-p;break;case"down":a.y=a.y+p;break;case"rotate":a.rotate=a.rotate+p;break}return a},o)},ok={mixout:function(){return{parse:{transform:function(o){return Km(o)}}}},hooks:function(){return{parseNodeAttributes:function(o,a){var s=a.getAttribute("data-fa-transform");return s&&(o.transform=Km(s)),o}}},provides:function(r){r.generateAbstractTransformGrouping=function(o){var a=o.main,s=o.transform,u=o.containerWidth,f=o.iconWidth,p={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(s.x*32,", ").concat(s.y*32,") "),v="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),y={transform:"".concat(m," ").concat(v," ").concat(g)},S={transform:"translate(".concat(f/2*-1," -256)")},x={outer:p,inner:y,path:S};return{tag:"g",attributes:z({},x.outer),children:[{tag:"g",attributes:z({},x.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:z(z({},a.icon.attributes),x.path)}]}]}}}},xu={x:0,y:0,width:"100%",height:"100%"};function Gm(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||r)&&(n.attributes.fill="black"),n}function ak(n){return n.tag==="g"?n.children:[n]}var lk={hooks:function(){return{parseNodeAttributes:function(o,a){var s=a.getAttribute("data-fa-mask"),u=s?cl(s.split(" ").map(function(f){return f.trim()})):Ug();return u.prefix||(u.prefix=Bt()),o.mask=u,o.maskId=a.getAttribute("data-fa-mask-id"),o}}},provides:function(r){r.generateAbstractMask=function(o){var a=o.children,s=o.attributes,u=o.main,f=o.mask,p=o.maskId,m=o.transform,v=u.width,g=u.icon,y=f.width,S=f.icon,x=J_({transform:m,containerWidth:y,iconWidth:v}),I={tag:"rect",attributes:z(z({},xu),{},{fill:"white"})},R=g.children?{children:g.children.map(Gm)}:{},T={tag:"g",attributes:z({},x.inner),children:[Gm(z({tag:g.tag,attributes:z(z({},g.attributes),x.path)},R))]},M={tag:"g",attributes:z({},x.outer),children:[T]},P="mask-".concat(p||Tm()),W="clip-".concat(p||Tm()),H={tag:"mask",attributes:z(z({},xu),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,M]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:W},children:ak(S)},H]};return a.push(j,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(W,")"),mask:"url(#".concat(P,")")},xu)}),{children:a,attributes:s}}}},sk={provides:function(r){var o=!1;$t.matchMedia&&(o=$t.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var a=[],s={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:z(z({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=z(z({},u),{},{attributeName:"opacity"}),p={tag:"circle",attributes:z(z({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||p.children.push({tag:"animate",attributes:z(z({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:z(z({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(p),a.push({tag:"path",attributes:z(z({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:z(z({},f),{},{values:"1;0;0;0;0;1;"})}]}),o||a.push({tag:"path",attributes:z(z({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:z(z({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},uk={hooks:function(){return{parseNodeAttributes:function(o,a){var s=a.getAttribute("data-fa-symbol"),u=s===null?!1:s===""?!0:s;return o.symbol=u,o}}}},ck=[nA,YA,VA,KA,GA,rk,ik,ok,lk,sk,uk];gA(ck,{mixoutsTo:An});An.noAuto;var mo=An.config;An.library;An.dom;var Kg=An.parse;An.findIconDefinition;An.toHtml;var fk=An.icon;An.layer;An.text;An.counter;function dk(n){return n=n-0,n===n}function Gg(n){return dk(n)?n:(n=n.replace(/[_-]+(.)?/g,(r,o)=>o?o.toUpperCase():""),n.charAt(0).toLowerCase()+n.slice(1))}function pk(n){return n.charAt(0).toUpperCase()+n.slice(1)}var Br=new Map,mk=1e3;function hk(n){if(Br.has(n))return Br.get(n);const r={};let o=0;const a=n.length;for(;o<a;){const s=n.indexOf(";",o),u=s===-1?a:s,f=n.slice(o,u).trim();if(f){const p=f.indexOf(":");if(p>0){const m=f.slice(0,p).trim(),v=f.slice(p+1).trim();if(m&&v){const g=Gg(m);r[g.startsWith("webkit")?pk(g):g]=v}}}o=u+1}if(Br.size===mk){const s=Br.keys().next().value;s&&Br.delete(s)}return Br.set(n,r),r}function qg(n,r,o={}){if(typeof r=="string")return r;const a=(r.children||[]).map(g=>qg(n,g)),s=r.attributes||{},u={};for(const[g,y]of Object.entries(s))switch(!0){case g==="class":{u.className=y;break}case g==="style":{u.style=hk(String(y));break}case g.startsWith("aria-"):case g.startsWith("data-"):{u[g.toLowerCase()]=y;break}default:u[Gg(g)]=y}const{style:f,role:p,"aria-label":m,...v}=o;return f&&(u.style=u.style?{...u.style,...f}:f),p&&(u.role=p),m&&(u["aria-label"]=m,u["aria-hidden"]="false"),n(r.tag,{...v,...u},...a)}var vk=qg.bind(null,gn.createElement),qm=(n,r)=>{const o=k.useId();return n||(r?o:void 0)},gk=class{constructor(n="react-fontawesome"){this.enabled=!1;let r=!1;try{r=typeof process<"u"&&!1}catch{}this.scope=n,this.enabled=r}log(...n){this.enabled&&console.log(`[${this.scope}]`,...n)}warn(...n){this.enabled&&console.warn(`[${this.scope}]`,...n)}error(...n){this.enabled&&console.error(`[${this.scope}]`,...n)}},yk="searchPseudoElementsFullScan"in mo?"7.0.0":"6.0.0",wk=Number.parseInt(yk)>=7,ro="fa",st={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Ek={left:"fa-pull-left",right:"fa-pull-right"},Sk={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Ck={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},ut={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function xk(n){const r=mo.cssPrefix||mo.familyPrefix||ro;return r===ro?n:n.replace(new RegExp(String.raw`(?<=^|\s)${ro}-`,"g"),`${r}-`)}function _k(n){const{beat:r,fade:o,beatFade:a,bounce:s,shake:u,spin:f,spinPulse:p,spinReverse:m,pulse:v,fixedWidth:g,inverse:y,border:S,flip:x,size:I,rotation:R,pull:T,swapOpacity:M,rotateBy:P,widthAuto:W,className:H}=n,j=[];return H&&j.push(...H.split(" ")),r&&j.push(st.beat),o&&j.push(st.fade),a&&j.push(st.beatFade),s&&j.push(st.bounce),u&&j.push(st.shake),f&&j.push(st.spin),m&&j.push(st.spinReverse),p&&j.push(st.spinPulse),v&&j.push(st.pulse),g&&j.push(ut.fixedWidth),y&&j.push(ut.inverse),S&&j.push(ut.border),x===!0&&j.push(ut.flip),(x==="horizontal"||x==="both")&&j.push(ut.flipHorizontal),(x==="vertical"||x==="both")&&j.push(ut.flipVertical),I!=null&&j.push(Ck[I]),R!=null&&R!==0&&j.push(Sk[R]),T!=null&&j.push(Ek[T]),M&&j.push(ut.swapOpacity),wk?(P&&j.push(ut.rotateBy),W&&j.push(ut.widthAuto),(mo.cssPrefix||mo.familyPrefix||ro)===ro?j:j.map(xk)):j}var Ak=n=>typeof n=="object"&&"icon"in n&&!!n.icon;function Qm(n){if(n)return Ak(n)?n:Kg.icon(n)}function kk(n){return Object.keys(n)}var Xm=new gk("FontAwesomeIcon"),Qg={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Ok=new Set(Object.keys(Qg)),Lc=gn.forwardRef((n,r)=>{const o={...Qg,...n},{icon:a,mask:s,symbol:u,title:f,titleId:p,maskId:m,transform:v}=o,g=qm(m,!!s),y=qm(p,!!f),S=Qm(a);if(!S)return Xm.error("Icon lookup is undefined",a),null;const x=_k(o),I=typeof v=="string"?Kg.transform(v):v,R=Qm(s),T=fk(S,{...x.length>0&&{classes:x},...I&&{transform:I},...R&&{mask:R},symbol:u,title:f,titleId:y,maskId:g});if(!T)return Xm.error("Could not find icon",S),null;const{abstract:M}=T,P={ref:r};for(const W of kk(o))Ok.has(W)||(P[W]=o[W]);return vk(M[0],P)});Lc.displayName="FontAwesomeIcon";var Tk={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},_u,Jm;function Nk(){if(Jm)return _u;Jm=1;var n={linear:function(r,o,a,s){var u=a-o;return u*r/s+o},easeInQuad:function(r,o,a,s){var u=a-o;return u*(r/=s)*r+o},easeOutQuad:function(r,o,a,s){var u=a-o;return-u*(r/=s)*(r-2)+o},easeInOutQuad:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r+o:-u/2*(--r*(r-2)-1)+o},easeInCubic:function(r,o,a,s){var u=a-o;return u*(r/=s)*r*r+o},easeOutCubic:function(r,o,a,s){var u=a-o;return u*((r=r/s-1)*r*r+1)+o},easeInOutCubic:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r*r+o:u/2*((r-=2)*r*r+2)+o},easeInQuart:function(r,o,a,s){var u=a-o;return u*(r/=s)*r*r*r+o},easeOutQuart:function(r,o,a,s){var u=a-o;return-u*((r=r/s-1)*r*r*r-1)+o},easeInOutQuart:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r*r*r+o:-u/2*((r-=2)*r*r*r-2)+o},easeInQuint:function(r,o,a,s){var u=a-o;return u*(r/=s)*r*r*r*r+o},easeOutQuint:function(r,o,a,s){var u=a-o;return u*((r=r/s-1)*r*r*r*r+1)+o},easeInOutQuint:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r*r*r*r+o:u/2*((r-=2)*r*r*r*r+2)+o},easeInSine:function(r,o,a,s){var u=a-o;return-u*Math.cos(r/s*(Math.PI/2))+u+o},easeOutSine:function(r,o,a,s){var u=a-o;return u*Math.sin(r/s*(Math.PI/2))+o},easeInOutSine:function(r,o,a,s){var u=a-o;return-u/2*(Math.cos(Math.PI*r/s)-1)+o},easeInExpo:function(r,o,a,s){var u=a-o;return r==0?o:u*Math.pow(2,10*(r/s-1))+o},easeOutExpo:function(r,o,a,s){var u=a-o;return r==s?o+u:u*(-Math.pow(2,-10*r/s)+1)+o},easeInOutExpo:function(r,o,a,s){var u=a-o;return r===0?o:r===s?o+u:(r/=s/2)<1?u/2*Math.pow(2,10*(r-1))+o:u/2*(-Math.pow(2,-10*--r)+2)+o},easeInCirc:function(r,o,a,s){var u=a-o;return-u*(Math.sqrt(1-(r/=s)*r)-1)+o},easeOutCirc:function(r,o,a,s){var u=a-o;return u*Math.sqrt(1-(r=r/s-1)*r)+o},easeInOutCirc:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?-u/2*(Math.sqrt(1-r*r)-1)+o:u/2*(Math.sqrt(1-(r-=2)*r)+1)+o},easeInElastic:function(r,o,a,s){var u=a-o,f,p,m;return m=1.70158,p=0,f=u,r===0?o:(r/=s)===1?o+u:(p||(p=s*.3),f<Math.abs(u)?(f=u,m=p/4):m=p/(2*Math.PI)*Math.asin(u/f),-(f*Math.pow(2,10*(r-=1))*Math.sin((r*s-m)*(2*Math.PI)/p))+o)},easeOutElastic:function(r,o,a,s){var u=a-o,f,p,m;return m=1.70158,p=0,f=u,r===0?o:(r/=s)===1?o+u:(p||(p=s*.3),f<Math.abs(u)?(f=u,m=p/4):m=p/(2*Math.PI)*Math.asin(u/f),f*Math.pow(2,-10*r)*Math.sin((r*s-m)*(2*Math.PI)/p)+u+o)},easeInOutElastic:function(r,o,a,s){var u=a-o,f,p,m;return m=1.70158,p=0,f=u,r===0?o:(r/=s/2)===2?o+u:(p||(p=s*(.3*1.5)),f<Math.abs(u)?(f=u,m=p/4):m=p/(2*Math.PI)*Math.asin(u/f),r<1?-.5*(f*Math.pow(2,10*(r-=1))*Math.sin((r*s-m)*(2*Math.PI)/p))+o:f*Math.pow(2,-10*(r-=1))*Math.sin((r*s-m)*(2*Math.PI)/p)*.5+u+o)},easeInBack:function(r,o,a,s,u){var f=a-o;return u===void 0&&(u=1.70158),f*(r/=s)*r*((u+1)*r-u)+o},easeOutBack:function(r,o,a,s,u){var f=a-o;return u===void 0&&(u=1.70158),f*((r=r/s-1)*r*((u+1)*r+u)+1)+o},easeInOutBack:function(r,o,a,s,u){var f=a-o;return u===void 0&&(u=1.70158),(r/=s/2)<1?f/2*(r*r*(((u*=1.525)+1)*r-u))+o:f/2*((r-=2)*r*(((u*=1.525)+1)*r+u)+2)+o},easeInBounce:function(r,o,a,s){var u=a-o,f;return f=n.easeOutBounce(s-r,0,u,s),u-f+o},easeOutBounce:function(r,o,a,s){var u=a-o;return(r/=s)<1/2.75?u*(7.5625*r*r)+o:r<2/2.75?u*(7.5625*(r-=1.5/2.75)*r+.75)+o:r<2.5/2.75?u*(7.5625*(r-=2.25/2.75)*r+.9375)+o:u*(7.5625*(r-=2.625/2.75)*r+.984375)+o},easeInOutBounce:function(r,o,a,s){var u=a-o,f;return r<s/2?(f=n.easeInBounce(r*2,0,u,s),f*.5+o):(f=n.easeOutBounce(r*2-s,0,u,s),f*.5+u*.5+o)}};return _u=n,_u}var Rk=Nk();function Ik(n){return n*Math.PI/180}function xn(n,r){return n+Math.random()*(r-n)}function Pk(n,r){return Math.floor(n+Math.random()*(r-n+1))}var io;(function(n){n[n.Circle=0]="Circle",n[n.Square=1]="Square",n[n.Strip=2]="Strip"})(io||(io={}));var Ft;(function(n){n[n.Positive=1]="Positive",n[n.Negative=-1]="Negative"})(Ft||(Ft={}));const bk=1e3/60;class Lk{constructor(r,o,a,s){this.getOptions=o;const{colors:u,initialVelocityX:f,initialVelocityY:p}=this.getOptions();this.context=r,this.x=a,this.y=s,this.w=xn(5,20),this.h=xn(5,20),this.radius=xn(5,10),this.vx=typeof f=="number"?xn(-f,f):xn(f.min,f.max),this.vy=typeof p=="number"?xn(-p,0):xn(p.min,p.max),this.shape=Pk(0,2),this.angle=Ik(xn(0,360)),this.angularSpin=xn(-.2,.2),this.color=u[Math.floor(Math.random()*u.length)],this.rotateY=xn(0,1),this.rotationDirection=xn(0,1)?Ft.Positive:Ft.Negative}update(r){const{gravity:o,wind:a,friction:s,opacity:u,drawShape:f}=this.getOptions(),p=r/bk;this.x+=this.vx*p,this.y+=this.vy*p,this.vy+=o*p,this.vx+=a*p,this.vx*=s**p,this.vy*=s**p,this.rotateY>=1&&this.rotationDirection===Ft.Positive?this.rotationDirection=Ft.Negative:this.rotateY<=-1&&this.rotationDirection===Ft.Negative&&(this.rotationDirection=Ft.Positive);const m=.1*this.rotationDirection*p;if(this.rotateY+=m,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=u,this.context.lineCap="round",this.context.lineWidth=2,f&&typeof f=="function")f.call(this,this.context);else switch(this.shape){case io.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case io.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case io.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Dk{constructor(r,o){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=s=>{this.particles.splice(s,1)},this.getParticle=()=>{const s=xn(this.x,this.w+this.x),u=xn(this.y,this.h+this.y);return new Lk(this.context,this.getOptions,s,u)},this.animate=s=>{const{canvas:u,context:f,particlesGenerated:p,lastNumberOfPieces:m}=this,{run:v,recycle:g,numberOfPieces:y,debug:S,tweenFunction:x,tweenDuration:I}=this.getOptions();if(!v)return!1;const R=this.particles.length,T=g?R:p;if(T<y){m!==y&&(this.tweenProgress=0,this.tweenFrom=T,this.lastNumberOfPieces=y),this.tweenProgress=Math.min(I,Math.max(0,this.tweenProgress+s));const M=x(this.tweenProgress,this.tweenFrom,y,I),P=Math.round(M-T);for(let W=0;W<P;W++)this.particles.push(this.getParticle());this.particlesGenerated+=P}S&&(f.font="12px sans-serif",f.fillStyle="#333",f.textAlign="right",f.fillText(`Particles: ${R}`,u.width-10,u.height-20));for(let M=this.particles.length-1;M>=0;M--){const P=this.particles[M];P.update(s),(P.y>u.height||P.y<-100||P.x>u.width+100||P.x<-100)&&(g&&T<=y?this.particles[M]=this.getParticle():this.removeParticleAt(M))}return R>0||T<y},this.canvas=r;const a=this.canvas.getContext("2d");if(!a)throw new Error("Could not get canvas context");this.context=a,this.getOptions=o}}const Dc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:Rk.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class Fk{constructor(r,o){this.lastFrameTime=0,this.setOptionsWithDefaults=s=>{const u={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...u,...Dc,...s},Object.assign(this,s.confettiSource)},this.update=(s=0)=>{const{options:{run:u,onConfettiComplete:f,frameRate:p},canvas:m,context:v}=this,g=Math.min(s-this.lastFrameTime,50);if(p&&g<1e3/p){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=s-(p?g%p:0),u&&(v.fillStyle="white",v.clearRect(0,0,m.width,m.height)),this.generator.animate(g)?this.rafId=requestAnimationFrame(this.update):(f&&typeof f=="function"&&this.generator.particlesGenerated>0&&f.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=r;const a=this.canvas.getContext("2d");if(!a)throw new Error("Could not get canvas context");this.context=a,this.generator=new Dk(this.canvas,()=>this.options),this.options=o,this.update()}get options(){return this._options}set options(r){const o=this._options?.run,a=this._options?.recycle;this.setOptionsWithDefaults(r),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof r.recycle=="boolean"&&r.recycle&&a===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof r.run=="boolean"&&r.run&&o===!1&&this.update()}}const Mk=gn.createRef();class Fc extends gn.Component{constructor(r){super(r),this.canvas=gn.createRef(),this.canvas=r.canvasRef||Mk}componentDidMount(){if(this.canvas.current){const r=Au(this.props)[0];this.confetti=new Fk(this.canvas.current,r)}}componentDidUpdate(){const r=Au(this.props)[0];this.confetti&&(this.confetti.options=r)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[r,o]=Au(this.props),a={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...o.style};return L("canvas",{width:r.width,height:r.height,ref:this.canvas,...o,style:a})}}Fc.defaultProps={...Dc};Fc.displayName="ReactConfetti";function Au(n){const r={},o={},a={},s=[...Object.keys(Dc),"confettiSource","drawShape","onConfettiComplete","frameRate"],u=["canvasRef"];for(const f in n){const p=n[f];s.includes(f)?r[f]=p:u.includes(f)?u[f]=p:a[f]=p}return[r,a,o]}const jk=gn.forwardRef((n,r)=>L(Fc,{canvasRef:r,...n})),Uk=n=>{const r=k.useRef(n);return k.useEffect(()=>{r.current=n}),r},zk=(n,r=100,o=!1)=>{const a=Uk(n),s=k.useRef(),u=[r,o,a];function f(){s.current&&clearTimeout(s.current),s.current=void 0}k.useEffect(()=>f,u);function p(){s.current=void 0}return k.useCallback(function(){const m=arguments,{current:v}=s;if(v===void 0&&o)return s.current=setTimeout(p,r),a.current.apply(null,m);v&&clearTimeout(v),s.current=setTimeout(()=>{s.current=void 0,a.current.apply(null,m)},r)},u)},$k=(n,r,o)=>{const a=k.useState(n);return[a[0],zk(a[1],r,o)]};function ku(n,r,o,a){const s=k.useRef(o),u=k.useRef(a);k.useEffect(()=>{s.current=o,u.current=a}),k.useEffect(()=>{const f=n&&"current"in n?n.current:n;if(!f)return;let p=0;function m(...g){p||s.current.apply(this,g)}f.addEventListener(r,m);const v=u.current;return()=>{p=1,f.removeEventListener(r,m),v&&v()}},[n,r])}const Bk={},oo=typeof window>"u"?null:window,Wk=oo&&typeof oo.visualViewport<"u"?oo.visualViewport:null,Zm=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],Hk=function(n){n===void 0&&(n=Bk);const{wait:r,leading:o,initialWidth:a=0,initialHeight:s=0}=n,[u,f]=$k(typeof document>"u"?[a,s]:Zm,r,o),p=()=>f(Zm);return ku(oo,"resize",p),ku(Wk,"resize",p),ku(oo,"orientationchange",p),u},Yk="/assets/kubernetes-BUHmYqv8.svg";var Vk={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},Kk=Vk;const Gk=({isDarkMode:n,toggleDarkMode:r,handleDeckChange:o,currentDeck:a})=>L("header",{children:We("div",{className:"d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom",children:[We("a",{href:"/",className:"d-flex align-items-center text-dark text-decoration-none",children:[L("img",{className:"kubernetes-logo",src:Yk}),L("span",{className:"fs-4 ubuntu",children:"Cards Against Kubernetes"})]}),We("nav",{className:"d-inline-flex mt-2 mt-md-0 ms-md-auto align-items-center",children:[L("a",{className:`me-3 py-2 text-dark text-decoration-none ${a==="KCNA"?"fw-bold":""}`,href:"#",onClick:()=>o("KCNA"),children:"KCNA"}),L("a",{className:`me-3 py-2 text-dark text-decoration-none ${a==="KCSA"?"fw-bold":""}`,href:"#",onClick:()=>o("KCSA"),children:"KCSA"}),We(vu,{align:"end",children:[L(vu.Toggle,{as:"a",className:"navbar-icon-toggle",children:L(Lc,{icon:Kk,size:"lg"})}),L(vu.Menu,{children:L("div",{className:"px-3 py-1",children:L(GC.Check,{type:"switch",id:"dark-mode-switch",label:"Dark Mode",checked:n,onChange:r})})})]})]})]})});function Ou(n){let r=n.length,o;for(;r!=0;)o=Math.floor(Math.random()*r),r--,[n[r],n[o]]=[n[o],n[r]];return n}function qk({score:n,totalQuestions:r,incorrectAnswers:o,playAgain:a,passingPercentage:s}){const{width:u,height:f}=Hk(),p=r>0?Math.round(n/r*100):0,m=p>=s,v=o.reduce((y,S)=>(S.tag&&(y[S.tag]=(y[S.tag]||0)+1),y),{}),g=Object.keys(v);return We(Gr,{className:"py-3",children:[m&&L(jk,{width:u,height:f,recycle:!1,numberOfPieces:200}),L("main",{children:We(Gr,{className:"p-4 prompt-banner bg-light rounded-3 text-center score-screen-container",children:[L("h1",{className:"display-4",children:"Deck Complete!"}),L("p",{className:"lead",children:"You scored"}),We("h2",{className:"display-1",children:[p,"%"]}),We("p",{className:"lead mb-4",children:["(",n," out of ",r," correct)"]}),g.length>0&&We(rl,{children:[L("hr",{}),L("h3",{className:"mt-4",children:"Study Guide"}),L("p",{children:"Based on your answers, here are some areas to focus on:"}),L(Ja,{className:"justify-content-center",children:g.map(y=>{const S=Ua.studyGuides[y];return S?L(go,{md:6,lg:4,className:"mb-3",children:L(qn,{children:We(qn.Body,{children:[L(qn.Title,{children:S.title}),L(qn.Text,{children:S.tip}),L(Xr,{variant:"primary",href:S.link,target:"_blank",children:"Learn More"})]})})},y):null})})]}),L(Xr,{variant:"success",size:"lg",onClick:a,className:"mt-4 ubuntu",children:"Play Again"})]})})]})}function Qk(){const[n,r]=k.useState("KCNA"),[o,a]=k.useState([]),[s,u]=k.useState(0),[f,p]=k.useState(null),[m,v]=k.useState("playing"),[g,y]=k.useState(null),[S,x]=k.useState(null),[I,R]=k.useState(0),[T,M]=k.useState([]),[P,W]=k.useState(!1),[H,j]=k.useState(()=>{const V=localStorage.getItem("darkMode");return V?JSON.parse(V):!1}),Q=V=>{const fe=[...Ua.decks[V].rounds];Ou(fe),a(fe),u(0),R(0),M([]),v("playing"),p(null)};k.useEffect(()=>{Q(n)},[n]),k.useEffect(()=>{if(o.length>0&&s<o.length){const V=o[s],fe=Ua.decks[n].answers,{correctAnswerId:Oe,answers:Se}=V,he=Object.keys(fe).find(b=>fe[b].id===Oe);if(!he){console.error("Data inconsistency: Could not find the correct answer key for round:",V);return}const Y=Se.filter(b=>b!==he);Ou(Y);const X=Y.slice(0,3),B=[he,...X];Ou(B);const _=B.map(b=>fe[b]);p({...V,answers:_})}},[o,s]),k.useEffect(()=>{if(P){const V=setTimeout(()=>{W(!1)},500);return()=>clearTimeout(V)}},[P]);const ee=V=>{r(V)};k.useEffect(()=>{H?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(H))},[H]);const re=()=>j(!H),de=V=>{m==="playing"&&y(fe=>fe===V?null:V)},ve=()=>{if(g===null)return;const V=g===f.correctAnswerId;V?(R(fe=>fe+1),W(!0)):M(fe=>[...fe,f]),x(V),v("submitted")},ae=()=>{s+1<o.length?(v("playing"),y(null),x(null),u(V=>V+1)):v("finished")};if(m==="finished"){const V=Ua.decks[n]?.passingPercentage||75;return L(qk,{score:I,totalQuestions:o.length,incorrectAnswers:T,playAgain:()=>Q(n),passingPercentage:V})}if(!f)return L(Gr,{className:"py-3 text-center",children:L("h1",{children:"Loading Deck..."})});const se=f.answers.map(V=>L(qC,{...V,isSelected:g===V.id,onSelect:()=>de(V.id),isSubmitted:m==="submitted",isCorrect:S,isActuallyCorrect:V.id===f.correctAnswerId},V.id));return We(Gr,{className:"py-3",children:[L(Gk,{isDarkMode:H,toggleDarkMode:re,handleDeckChange:ee,currentDeck:n}),We("main",{children:[We(Gr,{className:`p-3 prompt-banner bg-light rounded-3 ${P?"prompt-correct-flash":""}`,children:[L(Ja,{className:"row mb-3 justify-content-center align-items-center",children:L(QC,{text:f.prompt.text})}),L("div",{className:"d-grid gap-2",children:m==="playing"?L(Xr,{variant:"primary",size:"lg",onClick:ve,disabled:g===null,className:"ubuntu",children:"Submit Answer"}):L(Xr,{variant:S?"success":"danger",size:"lg",onClick:ae,className:"ubuntu",children:"Next Round"})}),L("br",{}),L(Ja,{className:`answer-card-container mt-4 ${m}`,children:se})]}),L("hr",{}),We("div",{className:"d-flex justify-content-end footer-link",children:[L("a",{href:"https://hartje.io",target:"_blank",children:"Hartje.io"})," ",L("span",{className:"mx-2",children:"|"}),L("a",{href:"https://github.com/goshlanguage/cardsagainstkubernetes",target:"_blank",children:L(Lc,{icon:Tk})})]})]})]})}e1.createRoot(document.getElementById("root")).render(L(gn.StrictMode,{children:L(Qk,{})}));
