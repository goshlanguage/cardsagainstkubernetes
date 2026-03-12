(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function o(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=o(s);fetch(s.href,u)}})();function mo(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Js={exports:{}},Ki={},Zs={exports:{}},ye={};var Cp;function W0(){if(Cp)return ye;Cp=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function C(x){return x===null||typeof x!="object"?null:(x=y&&x[y]||x["@@iterator"],typeof x=="function"?x:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,N={};function T(x,L,ue){this.props=x,this.context=L,this.refs=N,this.updater=ue||_}T.prototype.isReactComponent={},T.prototype.setState=function(x,L){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,L,"setState")},T.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function M(){}M.prototype=T.prototype;function b(x,L,ue){this.props=x,this.context=L,this.refs=N,this.updater=ue||_}var Y=b.prototype=new M;Y.constructor=b,I(Y,T.prototype),Y.isPureReactComponent=!0;var W=Array.isArray,j=Object.prototype.hasOwnProperty,Q={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function re(x,L,ue){var ce,pe={},ge=null,ke=null;if(L!=null)for(ce in L.ref!==void 0&&(ke=L.ref),L.key!==void 0&&(ge=""+L.key),L)j.call(L,ce)&&!ee.hasOwnProperty(ce)&&(pe[ce]=L[ce]);var we=arguments.length-2;if(we===1)pe.children=ue;else if(1<we){for(var Te=Array(we),tn=0;tn<we;tn++)Te[tn]=arguments[tn+2];pe.children=Te}if(x&&x.defaultProps)for(ce in we=x.defaultProps,we)pe[ce]===void 0&&(pe[ce]=we[ce]);return{$$typeof:n,type:x,key:ge,ref:ke,props:pe,_owner:Q.current}}function de(x,L){return{$$typeof:n,type:x.type,key:L,ref:x.ref,props:x.props,_owner:x._owner}}function ve(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function ae(x){var L={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return L[ue]})}var se=/\/+/g;function V(x,L){return typeof x=="object"&&x!==null&&x.key!=null?ae(""+x.key):L.toString(36)}function fe(x,L,ue,ce,pe){var ge=typeof x;(ge==="undefined"||ge==="boolean")&&(x=null);var ke=!1;if(x===null)ke=!0;else switch(ge){case"string":case"number":ke=!0;break;case"object":switch(x.$$typeof){case n:case r:ke=!0}}if(ke)return ke=x,pe=pe(ke),x=ce===""?"."+V(ke,0):ce,W(pe)?(ue="",x!=null&&(ue=x.replace(se,"$&/")+"/"),fe(pe,L,ue,"",function(tn){return tn})):pe!=null&&(ve(pe)&&(pe=de(pe,ue+(!pe.key||ke&&ke.key===pe.key?"":(""+pe.key).replace(se,"$&/")+"/")+x)),L.push(pe)),1;if(ke=0,ce=ce===""?".":ce+":",W(x))for(var we=0;we<x.length;we++){ge=x[we];var Te=ce+V(ge,we);ke+=fe(ge,L,ue,Te,pe)}else if(Te=C(x),typeof Te=="function")for(x=Te.call(x),we=0;!(ge=x.next()).done;)ge=ge.value,Te=ce+V(ge,we++),ke+=fe(ge,L,ue,Te,pe);else if(ge==="object")throw L=String(x),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ke}function Ae(x,L,ue){if(x==null)return x;var ce=[],pe=0;return fe(x,ce,"","",function(ge){return L.call(ue,ge,pe++)}),ce}function Ce(x){if(x._status===-1){var L=x._result;L=L(),L.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=L)}if(x._status===1)return x._result.default;throw x._result}var he={current:null},H={transition:null},X={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:H,ReactCurrentOwner:Q};function $(){throw Error("act(...) is not supported in production builds of React.")}return ye.Children={map:Ae,forEach:function(x,L,ue){Ae(x,function(){L.apply(this,arguments)},ue)},count:function(x){var L=0;return Ae(x,function(){L++}),L},toArray:function(x){return Ae(x,function(L){return L})||[]},only:function(x){if(!ve(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ye.Component=T,ye.Fragment=o,ye.Profiler=s,ye.PureComponent=b,ye.StrictMode=a,ye.Suspense=m,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,ye.act=$,ye.cloneElement=function(x,L,ue){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ce=I({},x.props),pe=x.key,ge=x.ref,ke=x._owner;if(L!=null){if(L.ref!==void 0&&(ge=L.ref,ke=Q.current),L.key!==void 0&&(pe=""+L.key),x.type&&x.type.defaultProps)var we=x.type.defaultProps;for(Te in L)j.call(L,Te)&&!ee.hasOwnProperty(Te)&&(ce[Te]=L[Te]===void 0&&we!==void 0?we[Te]:L[Te])}var Te=arguments.length-2;if(Te===1)ce.children=ue;else if(1<Te){we=Array(Te);for(var tn=0;tn<Te;tn++)we[tn]=arguments[tn+2];ce.children=we}return{$$typeof:n,type:x.type,key:pe,ref:ge,props:ce,_owner:ke}},ye.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},ye.createElement=re,ye.createFactory=function(x){var L=re.bind(null,x);return L.type=x,L},ye.createRef=function(){return{current:null}},ye.forwardRef=function(x){return{$$typeof:p,render:x}},ye.isValidElement=ve,ye.lazy=function(x){return{$$typeof:g,_payload:{_status:-1,_result:x},_init:Ce}},ye.memo=function(x,L){return{$$typeof:v,type:x,compare:L===void 0?null:L}},ye.startTransition=function(x){var L=H.transition;H.transition={};try{x()}finally{H.transition=L}},ye.unstable_act=$,ye.useCallback=function(x,L){return he.current.useCallback(x,L)},ye.useContext=function(x){return he.current.useContext(x)},ye.useDebugValue=function(){},ye.useDeferredValue=function(x){return he.current.useDeferredValue(x)},ye.useEffect=function(x,L){return he.current.useEffect(x,L)},ye.useId=function(){return he.current.useId()},ye.useImperativeHandle=function(x,L,ue){return he.current.useImperativeHandle(x,L,ue)},ye.useInsertionEffect=function(x,L){return he.current.useInsertionEffect(x,L)},ye.useLayoutEffect=function(x,L){return he.current.useLayoutEffect(x,L)},ye.useMemo=function(x,L){return he.current.useMemo(x,L)},ye.useReducer=function(x,L,ue){return he.current.useReducer(x,L,ue)},ye.useRef=function(x){return he.current.useRef(x)},ye.useState=function(x){return he.current.useState(x)},ye.useSyncExternalStore=function(x,L,ue){return he.current.useSyncExternalStore(x,L,ue)},ye.useTransition=function(){return he.current.useTransition()},ye.version="18.3.1",ye}var Ep;function Ju(){return Ep||(Ep=1,Zs.exports=W0()),Zs.exports}var _p;function H0(){if(_p)return Ki;_p=1;var n=Ju(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(p,m,v){var g,y={},C=null,_=null;v!==void 0&&(C=""+v),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(_=m.ref);for(g in m)a.call(m,g)&&!u.hasOwnProperty(g)&&(y[g]=m[g]);if(p&&p.defaultProps)for(g in m=p.defaultProps,m)y[g]===void 0&&(y[g]=m[g]);return{$$typeof:r,type:p,key:C,ref:_,props:y,_owner:s.current}}return Ki.Fragment=o,Ki.jsx=f,Ki.jsxs=f,Ki}var xp;function V0(){return xp||(xp=1,Js.exports=H0()),Js.exports}var P=V0(),O=Ju();const vn=mo(O);var ba={},eu={exports:{}},dn={},nu={exports:{}},tu={};var kp;function K0(){return kp||(kp=1,(function(n){function r(H,X){var $=H.length;H.push(X);e:for(;0<$;){var x=$-1>>>1,L=H[x];if(0<s(L,X))H[x]=X,H[$]=L,$=x;else break e}}function o(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var X=H[0],$=H.pop();if($!==X){H[0]=$;e:for(var x=0,L=H.length,ue=L>>>1;x<ue;){var ce=2*(x+1)-1,pe=H[ce],ge=ce+1,ke=H[ge];if(0>s(pe,$))ge<L&&0>s(ke,pe)?(H[x]=ke,H[ge]=$,x=ge):(H[x]=pe,H[ce]=$,x=ce);else if(ge<L&&0>s(ke,$))H[x]=ke,H[ge]=$,x=ge;else break e}}return X}function s(H,X){var $=H.sortIndex-X.sortIndex;return $!==0?$:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var m=[],v=[],g=1,y=null,C=3,_=!1,I=!1,N=!1,T=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(H){for(var X=o(v);X!==null;){if(X.callback===null)a(v);else if(X.startTime<=H)a(v),X.sortIndex=X.expirationTime,r(m,X);else break;X=o(v)}}function W(H){if(N=!1,Y(H),!I)if(o(m)!==null)I=!0,Ce(j);else{var X=o(v);X!==null&&he(W,X.startTime-H)}}function j(H,X){I=!1,N&&(N=!1,M(re),re=-1),_=!0;var $=C;try{for(Y(X),y=o(m);y!==null&&(!(y.expirationTime>X)||H&&!ae());){var x=y.callback;if(typeof x=="function"){y.callback=null,C=y.priorityLevel;var L=x(y.expirationTime<=X);X=n.unstable_now(),typeof L=="function"?y.callback=L:y===o(m)&&a(m),Y(X)}else a(m);y=o(m)}if(y!==null)var ue=!0;else{var ce=o(v);ce!==null&&he(W,ce.startTime-X),ue=!1}return ue}finally{y=null,C=$,_=!1}}var Q=!1,ee=null,re=-1,de=5,ve=-1;function ae(){return!(n.unstable_now()-ve<de)}function se(){if(ee!==null){var H=n.unstable_now();ve=H;var X=!0;try{X=ee(!0,H)}finally{X?V():(Q=!1,ee=null)}}else Q=!1}var V;if(typeof b=="function")V=function(){b(se)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Ae=fe.port2;fe.port1.onmessage=se,V=function(){Ae.postMessage(null)}}else V=function(){T(se,0)};function Ce(H){ee=H,Q||(Q=!0,V())}function he(H,X){re=T(function(){H(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){I||_||(I=!0,Ce(j))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return o(m)},n.unstable_next=function(H){switch(C){case 1:case 2:case 3:var X=3;break;default:X=C}var $=C;C=X;try{return H()}finally{C=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=C;C=H;try{return X()}finally{C=$}},n.unstable_scheduleCallback=function(H,X,$){var x=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?x+$:x):$=x,H){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=$+L,H={id:g++,callback:X,priorityLevel:H,startTime:$,expirationTime:L,sortIndex:-1},$>x?(H.sortIndex=$,r(v,H),o(m)===null&&H===o(v)&&(N?(M(re),re=-1):N=!0,he(W,$-x))):(H.sortIndex=L,r(m,H),I||_||(I=!0,Ce(j))),H},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(H){var X=C;return function(){var $=C;C=X;try{return H.apply(this,arguments)}finally{C=$}}}})(tu)),tu}var Op;function G0(){return Op||(Op=1,nu.exports=K0()),nu.exports}var Ap;function q0(){if(Ap)return dn;Ap=1;var n=Ju(),r=G0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function C(e){return m.call(y,e)?!0:m.call(g,e)?!1:v.test(e)?y[e]=!0:(g[e]=!0,!1)}function _(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,i,l){if(t===null||typeof t>"u"||_(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function N(e,t,i,l,c,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];T[t]=new N(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,b);T[t]=new N(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,b);T[t]=new N(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,b);T[t]=new N(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,i,l){var c=T.hasOwnProperty(t)?T[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,i,c,l)&&(i=null),l||c===null?C(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),Q=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),ae=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),H=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,x;function L(e){if(x===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var ue=!1;function ce(e,t){if(!e||ue)return"";ue=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var l=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){l=R}e.call(t.prototype)}else{try{throw Error()}catch(R){l=R}e()}}catch(R){if(R&&l&&typeof R.stack=="string"){for(var c=R.stack.split(`
`),d=l.stack.split(`
`),h=c.length-1,w=d.length-1;1<=h&&0<=w&&c[h]!==d[w];)w--;for(;1<=h&&0<=w;h--,w--)if(c[h]!==d[w]){if(h!==1||w!==1)do if(h--,w--,0>w||c[h]!==d[w]){var S=`
`+c[h].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=h&&0<=w);break}}}finally{ue=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?L(e):""}function pe(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=ce(e.type,!1),e;case 11:return e=ce(e.type.render,!1),e;case 1:return e=ce(e.type,!0),e;default:return""}}function ge(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case Q:return"Portal";case de:return"Profiler";case re:return"StrictMode";case V:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}function ke(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(t);case 8:return t===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tn(e){var t=Te(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(h){l=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(h){l=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ht(e){e._valueTracker||(e._valueTracker=tn(e))}function _o(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=Te(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function Wt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ri(e,t){var i=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function xo(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=we(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ii(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function fr(e,t){ii(e,t);var i=we(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,i):t.hasOwnProperty("defaultValue")&&oi(e,t.type,we(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ko(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function oi(e,t,i){(t!=="number"||Wt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var gn=Array.isArray;function bn(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+we(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function dr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ai(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(gn(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:we(i)}}function pr(e,t){var i=we(t.value),l=we(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function li(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function si(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?si(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ht,Lc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ht=Ht||document.createElement("div"),Ht.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ht.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gg=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(e){Gg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ci[t]=ci[e]})});function Dc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||ci.hasOwnProperty(e)&&ci[e]?(""+t).trim():t+"px"}function Fc(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Dc(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var qg=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cl(e,t){if(t){if(qg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function fl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dl=null;function pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,hr=null,vr=null;function Mc(e){if(e=Pi(e)){if(typeof ml!="function")throw Error(o(280));var t=e.stateNode;t&&(t=Go(t),ml(e.stateNode,e.type,t))}}function jc(e){hr?vr?vr.push(e):vr=[e]:hr=e}function Uc(){if(hr){var e=hr,t=vr;if(vr=hr=null,Mc(e),t)for(e=0;e<t.length;e++)Mc(t[e])}}function Bc(e,t){return e(t)}function zc(){}var hl=!1;function $c(e,t,i){if(hl)return e(t,i);hl=!0;try{return Bc(e,t,i)}finally{hl=!1,(hr!==null||vr!==null)&&(zc(),Uc())}}function fi(e,t){var i=e.stateNode;if(i===null)return null;var l=Go(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var vl=!1;if(p)try{var di={};Object.defineProperty(di,"passive",{get:function(){vl=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{vl=!1}function Qg(e,t,i,l,c,d,h,w,S){var R=Array.prototype.slice.call(arguments,3);try{t.apply(i,R)}catch(F){this.onError(F)}}var pi=!1,Oo=null,Ao=!1,gl=null,Xg={onError:function(e){pi=!0,Oo=e}};function Jg(e,t,i,l,c,d,h,w,S){pi=!1,Oo=null,Qg.apply(Xg,arguments)}function Zg(e,t,i,l,c,d,h,w,S){if(Jg.apply(this,arguments),pi){if(pi){var R=Oo;pi=!1,Oo=null}else throw Error(o(198));Ao||(Ao=!0,gl=R)}}function Vt(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Vt(e)!==e)throw Error(o(188))}function ey(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var d=c.alternate;if(d===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===i)return Wc(c),e;if(d===l)return Wc(c),t;d=d.sibling}throw Error(o(188))}if(i.return!==l.return)i=c,l=d;else{for(var h=!1,w=c.child;w;){if(w===i){h=!0,i=c,l=d;break}if(w===l){h=!0,l=c,i=d;break}w=w.sibling}if(!h){for(w=d.child;w;){if(w===i){h=!0,i=d,l=c;break}if(w===l){h=!0,l=d,i=c;break}w=w.sibling}if(!h)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function Hc(e){return e=ey(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Kc=r.unstable_scheduleCallback,Gc=r.unstable_cancelCallback,ny=r.unstable_shouldYield,ty=r.unstable_requestPaint,Me=r.unstable_now,ry=r.unstable_getCurrentPriorityLevel,yl=r.unstable_ImmediatePriority,qc=r.unstable_UserBlockingPriority,To=r.unstable_NormalPriority,iy=r.unstable_LowPriority,Qc=r.unstable_IdlePriority,Ro=null,Yn=null;function oy(e){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Ro,e,void 0,(e.current.flags&128)===128)}catch{}}var Ln=Math.clz32?Math.clz32:sy,ay=Math.log,ly=Math.LN2;function sy(e){return e>>>=0,e===0?32:31-(ay(e)/ly|0)|0}var No=64,Io=4194304;function mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,d=e.pingedLanes,h=i&268435455;if(h!==0){var w=h&~c;w!==0?l=mi(w):(d&=h,d!==0&&(l=mi(d)))}else h=i&~c,h!==0?l=mi(h):d!==0&&(l=mi(d));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,d=t&-t,c>=d||c===16&&(d&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-Ln(t),c=1<<i,l|=e[i],t&=~c;return l}function uy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cy(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Ln(d),w=1<<h,S=c[h];S===-1?((w&i)===0||(w&l)!==0)&&(c[h]=uy(w,t)):S<=t&&(e.expiredLanes|=w),d&=~w}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xc(){var e=No;return No<<=1,(No&4194240)===0&&(No=64),e}function Sl(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function hi(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ln(t),e[t]=i}function fy(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-Ln(i),d=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~d}}function Cl(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-Ln(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var Oe=0;function Jc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Zc,El,ef,nf,tf,_l=!1,bo=[],vt=null,gt=null,yt=null,vi=new Map,gi=new Map,wt=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rf(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":yt=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function yi(e,t,i,l,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:d,targetContainers:[c]},t!==null&&(t=Pi(t),t!==null&&El(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function py(e,t,i,l,c){switch(t){case"focusin":return vt=yi(vt,e,t,i,l,c),!0;case"dragenter":return gt=yi(gt,e,t,i,l,c),!0;case"mouseover":return yt=yi(yt,e,t,i,l,c),!0;case"pointerover":var d=c.pointerId;return vi.set(d,yi(vi.get(d)||null,e,t,i,l,c)),!0;case"gotpointercapture":return d=c.pointerId,gi.set(d,yi(gi.get(d)||null,e,t,i,l,c)),!0}return!1}function of(e){var t=Kt(e.target);if(t!==null){var i=Vt(t);if(i!==null){if(t=i.tag,t===13){if(t=Yc(i),t!==null){e.blockedOn=t,tf(e.priority,function(){ef(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);dl=l,i.target.dispatchEvent(l),dl=null}else return t=Pi(i),t!==null&&El(t),e.blockedOn=i,!1;t.shift()}return!0}function af(e,t,i){Lo(e)&&i.delete(t)}function my(){_l=!1,vt!==null&&Lo(vt)&&(vt=null),gt!==null&&Lo(gt)&&(gt=null),yt!==null&&Lo(yt)&&(yt=null),vi.forEach(af),gi.forEach(af)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,my)))}function Si(e){function t(c){return wi(c,e)}if(0<bo.length){wi(bo[0],e);for(var i=1;i<bo.length;i++){var l=bo[i];l.blockedOn===e&&(l.blockedOn=null)}}for(vt!==null&&wi(vt,e),gt!==null&&wi(gt,e),yt!==null&&wi(yt,e),vi.forEach(t),gi.forEach(t),i=0;i<wt.length;i++)l=wt[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<wt.length&&(i=wt[0],i.blockedOn===null);)of(i),i.blockedOn===null&&wt.shift()}var gr=W.ReactCurrentBatchConfig,Do=!0;function hy(e,t,i,l){var c=Oe,d=gr.transition;gr.transition=null;try{Oe=1,xl(e,t,i,l)}finally{Oe=c,gr.transition=d}}function vy(e,t,i,l){var c=Oe,d=gr.transition;gr.transition=null;try{Oe=4,xl(e,t,i,l)}finally{Oe=c,gr.transition=d}}function xl(e,t,i,l){if(Do){var c=kl(e,t,i,l);if(c===null)$l(e,t,l,Fo,i),rf(e,l);else if(py(c,e,t,i,l))l.stopPropagation();else if(rf(e,l),t&4&&-1<dy.indexOf(e)){for(;c!==null;){var d=Pi(c);if(d!==null&&Zc(d),d=kl(e,t,i,l),d===null&&$l(e,t,l,Fo,i),d===c)break;c=d}c!==null&&l.stopPropagation()}else $l(e,t,l,null,i)}}var Fo=null;function kl(e,t,i,l){if(Fo=null,e=pl(l),e=Kt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Yc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case yl:return 1;case qc:return 4;case To:case iy:return 16;case Qc:return 536870912;default:return 16}default:return 16}}var St=null,Ol=null,Mo=null;function sf(){if(Mo)return Mo;var e,t=Ol,i=t.length,l,c="value"in St?St.value:St.textContent,d=c.length;for(e=0;e<i&&t[e]===c[e];e++);var h=i-e;for(l=1;l<=h&&t[i-l]===c[d-l];l++);return Mo=c.slice(e,1<l?1-l:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function uf(){return!1}function yn(e){function t(i,l,c,d,h){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(i=e[w],this[w]=i?i(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Uo:uf,this.isPropagationStopped=uf,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=yn(yr),Ci=$({},yr,{view:0,detail:0}),gy=yn(Ci),Tl,Rl,Ei,Bo=$({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ei&&(Ei&&e.type==="mousemove"?(Tl=e.screenX-Ei.screenX,Rl=e.screenY-Ei.screenY):Rl=Tl=0,Ei=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),cf=yn(Bo),yy=$({},Bo,{dataTransfer:0}),wy=yn(yy),Sy=$({},Ci,{relatedTarget:0}),Nl=yn(Sy),Cy=$({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=yn(Cy),_y=$({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xy=yn(_y),ky=$({},yr,{data:0}),ff=yn(ky),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ty[e])?!!t[e]:!1}function Il(){return Ry}var Ny=$({},Ci,{key:function(e){if(e.key){var t=Oy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iy=yn(Ny),Py=$({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=yn(Py),by=$({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),Ly=yn(by),Dy=$({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fy=yn(Dy),My=$({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=yn(My),Uy=[9,13,27,32],Pl=p&&"CompositionEvent"in window,_i=null;p&&"documentMode"in document&&(_i=document.documentMode);var By=p&&"TextEvent"in window&&!_i,pf=p&&(!Pl||_i&&8<_i&&11>=_i),mf=" ",hf=!1;function vf(e,t){switch(e){case"keyup":return Uy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function zy(e,t){switch(e){case"compositionend":return gf(t);case"keypress":return t.which!==32?null:(hf=!0,mf);case"textInput":return e=t.data,e===mf&&hf?null:e;default:return null}}function $y(e,t){if(wr)return e==="compositionend"||!Pl&&vf(e,t)?(e=sf(),Mo=Ol=St=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pf&&t.locale!=="ko"?null:t.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yy[e.type]:t==="textarea"}function wf(e,t,i,l){jc(l),t=Ho(t,"onChange"),0<t.length&&(i=new Al("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var xi=null,ki=null;function Wy(e){Mf(e,0)}function zo(e){var t=xr(e);if(_o(t))return e}function Hy(e,t){if(e==="change")return t}var Sf=!1;if(p){var bl;if(p){var Ll="oninput"in document;if(!Ll){var Cf=document.createElement("div");Cf.setAttribute("oninput","return;"),Ll=typeof Cf.oninput=="function"}bl=Ll}else bl=!1;Sf=bl&&(!document.documentMode||9<document.documentMode)}function Ef(){xi&&(xi.detachEvent("onpropertychange",_f),ki=xi=null)}function _f(e){if(e.propertyName==="value"&&zo(ki)){var t=[];wf(t,ki,e,pl(e)),$c(Wy,t)}}function Vy(e,t,i){e==="focusin"?(Ef(),xi=t,ki=i,xi.attachEvent("onpropertychange",_f)):e==="focusout"&&Ef()}function Ky(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(ki)}function Gy(e,t){if(e==="click")return zo(t)}function qy(e,t){if(e==="input"||e==="change")return zo(t)}function Qy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:Qy;function Oi(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!m.call(t,c)||!Dn(e[c],t[c]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kf(e,t){var i=xf(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=xf(i)}}function Of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(){for(var e=window,t=Wt();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Dl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xy(e){var t=Af(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Of(i.ownerDocument.documentElement,i)){if(l!==null&&Dl(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,d=Math.min(l.start,c);l=l.end===void 0?d:Math.min(l.end,c),!e.extend&&d>l&&(c=l,l=d,d=c),c=kf(i,d);var h=kf(i,l);c&&h&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),d>l?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jy=p&&"documentMode"in document&&11>=document.documentMode,Sr=null,Fl=null,Ai=null,Ml=!1;function Tf(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ml||Sr==null||Sr!==Wt(l)||(l=Sr,"selectionStart"in l&&Dl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ai&&Oi(Ai,l)||(Ai=l,l=Ho(Fl,"onSelect"),0<l.length&&(t=new Al("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=Sr)))}function $o(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Cr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},jl={},Rf={};p&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Yo(e){if(jl[e])return jl[e];if(!Cr[e])return e;var t=Cr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Rf)return jl[e]=t[i];return e}var Nf=Yo("animationend"),If=Yo("animationiteration"),Pf=Yo("animationstart"),bf=Yo("transitionend"),Lf=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Lf.set(e,t),u(t,[e])}for(var Ul=0;Ul<Df.length;Ul++){var Bl=Df[Ul],Zy=Bl.toLowerCase(),e0=Bl[0].toUpperCase()+Bl.slice(1);Ct(Zy,"on"+e0)}Ct(Nf,"onAnimationEnd"),Ct(If,"onAnimationIteration"),Ct(Pf,"onAnimationStart"),Ct("dblclick","onDoubleClick"),Ct("focusin","onFocus"),Ct("focusout","onBlur"),Ct(bf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function Ff(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,Zg(l,t,void 0,e),e.currentTarget=null}function Mf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var d=void 0;if(t)for(var h=l.length-1;0<=h;h--){var w=l[h],S=w.instance,R=w.currentTarget;if(w=w.listener,S!==d&&c.isPropagationStopped())break e;Ff(c,w,R),d=S}else for(h=0;h<l.length;h++){if(w=l[h],S=w.instance,R=w.currentTarget,w=w.listener,S!==d&&c.isPropagationStopped())break e;Ff(c,w,R),d=S}}}if(Ao)throw e=gl,Ao=!1,gl=null,e}function Ne(e,t){var i=t[Gl];i===void 0&&(i=t[Gl]=new Set);var l=e+"__bubble";i.has(l)||(jf(t,e,2,!1),i.add(l))}function zl(e,t,i){var l=0;t&&(l|=4),jf(i,e,l,t)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[Wo]){e[Wo]=!0,a.forEach(function(i){i!=="selectionchange"&&(n0.has(i)||zl(i,!1,e),zl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wo]||(t[Wo]=!0,zl("selectionchange",!1,t))}}function jf(e,t,i,l){switch(lf(t)){case 1:var c=hy;break;case 4:c=vy;break;default:c=xl}i=c.bind(null,t,i,e),c=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function $l(e,t,i,l,c){var d=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var h=l.tag;if(h===3||h===4){var w=l.stateNode.containerInfo;if(w===c||w.nodeType===8&&w.parentNode===c)break;if(h===4)for(h=l.return;h!==null;){var S=h.tag;if((S===3||S===4)&&(S=h.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;h=h.return}for(;w!==null;){if(h=Kt(w),h===null)return;if(S=h.tag,S===5||S===6){l=d=h;continue e}w=w.parentNode}}l=l.return}$c(function(){var R=d,F=pl(i),U=[];e:{var D=Lf.get(e);if(D!==void 0){var K=Al,q=e;switch(e){case"keypress":if(jo(i)===0)break e;case"keydown":case"keyup":K=Iy;break;case"focusin":q="focus",K=Nl;break;case"focusout":q="blur",K=Nl;break;case"beforeblur":case"afterblur":K=Nl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Ly;break;case Nf:case If:case Pf:K=Ey;break;case bf:K=Fy;break;case"scroll":K=gy;break;case"wheel":K=jy;break;case"copy":case"cut":case"paste":K=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=df}var J=(t&4)!==0,je=!J&&e==="scroll",k=J?D!==null?D+"Capture":null:D;J=[];for(var E=R,A;E!==null;){A=E;var z=A.stateNode;if(A.tag===5&&z!==null&&(A=z,k!==null&&(z=fi(E,k),z!=null&&J.push(Ni(E,z,A)))),je)break;E=E.return}0<J.length&&(D=new K(D,q,null,i,F),U.push({event:D,listeners:J}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",D&&i!==dl&&(q=i.relatedTarget||i.fromElement)&&(Kt(q)||q[Zn]))break e;if((K||D)&&(D=F.window===F?F:(D=F.ownerDocument)?D.defaultView||D.parentWindow:window,K?(q=i.relatedTarget||i.toElement,K=R,q=q?Kt(q):null,q!==null&&(je=Vt(q),q!==je||q.tag!==5&&q.tag!==6)&&(q=null)):(K=null,q=R),K!==q)){if(J=cf,z="onMouseLeave",k="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(J=df,z="onPointerLeave",k="onPointerEnter",E="pointer"),je=K==null?D:xr(K),A=q==null?D:xr(q),D=new J(z,E+"leave",K,i,F),D.target=je,D.relatedTarget=A,z=null,Kt(F)===R&&(J=new J(k,E+"enter",q,i,F),J.target=A,J.relatedTarget=je,z=J),je=z,K&&q)n:{for(J=K,k=q,E=0,A=J;A;A=Er(A))E++;for(A=0,z=k;z;z=Er(z))A++;for(;0<E-A;)J=Er(J),E--;for(;0<A-E;)k=Er(k),A--;for(;E--;){if(J===k||k!==null&&J===k.alternate)break n;J=Er(J),k=Er(k)}J=null}else J=null;K!==null&&Uf(U,D,K,J,!1),q!==null&&je!==null&&Uf(U,je,q,J,!0)}}e:{if(D=R?xr(R):window,K=D.nodeName&&D.nodeName.toLowerCase(),K==="select"||K==="input"&&D.type==="file")var Z=Hy;else if(yf(D))if(Sf)Z=qy;else{Z=Ky;var ie=Vy}else(K=D.nodeName)&&K.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(Z=Gy);if(Z&&(Z=Z(e,R))){wf(U,Z,i,F);break e}ie&&ie(e,D,R),e==="focusout"&&(ie=D._wrapperState)&&ie.controlled&&D.type==="number"&&oi(D,"number",D.value)}switch(ie=R?xr(R):window,e){case"focusin":(yf(ie)||ie.contentEditable==="true")&&(Sr=ie,Fl=R,Ai=null);break;case"focusout":Ai=Fl=Sr=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Tf(U,i,F);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":Tf(U,i,F)}var oe;if(Pl)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else wr?vf(e,i)&&(le="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(le="onCompositionStart");le&&(pf&&i.locale!=="ko"&&(wr||le!=="onCompositionStart"?le==="onCompositionEnd"&&wr&&(oe=sf()):(St=F,Ol="value"in St?St.value:St.textContent,wr=!0)),ie=Ho(R,le),0<ie.length&&(le=new ff(le,e,null,i,F),U.push({event:le,listeners:ie}),oe?le.data=oe:(oe=gf(i),oe!==null&&(le.data=oe)))),(oe=By?zy(e,i):$y(e,i))&&(R=Ho(R,"onBeforeInput"),0<R.length&&(F=new ff("onBeforeInput","beforeinput",null,i,F),U.push({event:F,listeners:R}),F.data=oe))}Mf(U,t)})}function Ni(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ho(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,d=c.stateNode;c.tag===5&&d!==null&&(c=d,d=fi(e,i),d!=null&&l.unshift(Ni(e,d,c)),d=fi(e,t),d!=null&&l.push(Ni(e,d,c))),e=e.return}return l}function Er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uf(e,t,i,l,c){for(var d=t._reactName,h=[];i!==null&&i!==l;){var w=i,S=w.alternate,R=w.stateNode;if(S!==null&&S===l)break;w.tag===5&&R!==null&&(w=R,c?(S=fi(i,d),S!=null&&h.unshift(Ni(i,S,w))):c||(S=fi(i,d),S!=null&&h.push(Ni(i,S,w)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var t0=/\r\n?/g,r0=/\u0000|\uFFFD/g;function Bf(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(r0,"")}function Vo(e,t,i){if(t=Bf(t),Bf(e)!==t&&i)throw Error(o(425))}function Ko(){}var Yl=null,Wl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,i0=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(e){return zf.resolve(null).then(e).catch(a0)}:Vl;function a0(e){setTimeout(function(){throw e})}function Kl(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),Si(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);Si(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Wn="__reactFiber$"+_r,Ii="__reactProps$"+_r,Zn="__reactContainer$"+_r,Gl="__reactEvents$"+_r,l0="__reactListeners$"+_r,s0="__reactHandles$"+_r;function Kt(e){var t=e[Wn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Zn]||i[Wn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=$f(e);e!==null;){if(i=e[Wn])return i;e=$f(e)}return t}e=i,i=e.parentNode}return null}function Pi(e){return e=e[Wn]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Go(e){return e[Ii]||null}var ql=[],kr=-1;function _t(e){return{current:e}}function Ie(e){0>kr||(e.current=ql[kr],ql[kr]=null,kr--)}function Re(e,t){kr++,ql[kr]=e.current,e.current=t}var xt={},Xe=_t(xt),ln=_t(!1),Gt=xt;function Or(e,t){var i=e.type.contextTypes;if(!i)return xt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},d;for(d in i)c[d]=t[d];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function sn(e){return e=e.childContextTypes,e!=null}function qo(){Ie(ln),Ie(Xe)}function Yf(e,t,i){if(Xe.current!==xt)throw Error(o(168));Re(Xe,t),Re(ln,i)}function Wf(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(o(108,ke(e)||"Unknown",c));return $({},i,l)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Gt=Xe.current,Re(Xe,e),Re(ln,ln.current),!0}function Hf(e,t,i){var l=e.stateNode;if(!l)throw Error(o(169));i?(e=Wf(e,t,Gt),l.__reactInternalMemoizedMergedChildContext=e,Ie(ln),Ie(Xe),Re(Xe,e)):Ie(ln),Re(ln,i)}var et=null,Xo=!1,Ql=!1;function Vf(e){et===null?et=[e]:et.push(e)}function u0(e){Xo=!0,Vf(e)}function kt(){if(!Ql&&et!==null){Ql=!0;var e=0,t=Oe;try{var i=et;for(Oe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}et=null,Xo=!1}catch(c){throw et!==null&&(et=et.slice(e+1)),Kc(yl,kt),c}finally{Oe=t,Ql=!1}}return null}var Ar=[],Tr=0,Jo=null,Zo=0,kn=[],On=0,qt=null,nt=1,tt="";function Qt(e,t){Ar[Tr++]=Zo,Ar[Tr++]=Jo,Jo=e,Zo=t}function Kf(e,t,i){kn[On++]=nt,kn[On++]=tt,kn[On++]=qt,qt=e;var l=nt;e=tt;var c=32-Ln(l)-1;l&=~(1<<c),i+=1;var d=32-Ln(t)+c;if(30<d){var h=c-c%5;d=(l&(1<<h)-1).toString(32),l>>=h,c-=h,nt=1<<32-Ln(t)+c|i<<c|l,tt=d+e}else nt=1<<d|i<<c|l,tt=e}function Xl(e){e.return!==null&&(Qt(e,1),Kf(e,1,0))}function Jl(e){for(;e===Jo;)Jo=Ar[--Tr],Ar[Tr]=null,Zo=Ar[--Tr],Ar[Tr]=null;for(;e===qt;)qt=kn[--On],kn[On]=null,tt=kn[--On],kn[On]=null,nt=kn[--On],kn[On]=null}var wn=null,Sn=null,be=!1,Fn=null;function Gf(e,t){var i=Nn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function qf(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wn=e,Sn=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wn=e,Sn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=qt!==null?{id:nt,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Nn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,wn=e,Sn=null,!0):!1;default:return!1}}function Zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(be){var t=Sn;if(t){var i=t;if(!qf(e,t)){if(Zl(e))throw Error(o(418));t=Et(i.nextSibling);var l=wn;t&&qf(e,t)?Gf(l,i):(e.flags=e.flags&-4097|2,be=!1,wn=e)}}else{if(Zl(e))throw Error(o(418));e.flags=e.flags&-4097|2,be=!1,wn=e}}}function Qf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wn=e}function ea(e){if(e!==wn)return!1;if(!be)return Qf(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=Sn)){if(Zl(e))throw Xf(),Error(o(418));for(;t;)Gf(e,t),t=Et(t.nextSibling)}if(Qf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Sn=Et(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Sn=null}}else Sn=wn?Et(e.stateNode.nextSibling):null;return!0}function Xf(){for(var e=Sn;e;)e=Et(e.nextSibling)}function Rr(){Sn=wn=null,be=!1}function ns(e){Fn===null?Fn=[e]:Fn.push(e)}var c0=W.ReactCurrentBatchConfig;function bi(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var l=i.stateNode}if(!l)throw Error(o(147,e));var c=l,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var w=c.refs;h===null?delete w[d]:w[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function na(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jf(e){var t=e._init;return t(e._payload)}function Zf(e){function t(k,E){if(e){var A=k.deletions;A===null?(k.deletions=[E],k.flags|=16):A.push(E)}}function i(k,E){if(!e)return null;for(;E!==null;)t(k,E),E=E.sibling;return null}function l(k,E){for(k=new Map;E!==null;)E.key!==null?k.set(E.key,E):k.set(E.index,E),E=E.sibling;return k}function c(k,E){return k=bt(k,E),k.index=0,k.sibling=null,k}function d(k,E,A){return k.index=A,e?(A=k.alternate,A!==null?(A=A.index,A<E?(k.flags|=2,E):A):(k.flags|=2,E)):(k.flags|=1048576,E)}function h(k){return e&&k.alternate===null&&(k.flags|=2),k}function w(k,E,A,z){return E===null||E.tag!==6?(E=Vs(A,k.mode,z),E.return=k,E):(E=c(E,A),E.return=k,E)}function S(k,E,A,z){var Z=A.type;return Z===ee?F(k,E,A.props.children,z,A.key):E!==null&&(E.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ce&&Jf(Z)===E.type)?(z=c(E,A.props),z.ref=bi(k,E,A),z.return=k,z):(z=ka(A.type,A.key,A.props,null,k.mode,z),z.ref=bi(k,E,A),z.return=k,z)}function R(k,E,A,z){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Ks(A,k.mode,z),E.return=k,E):(E=c(E,A.children||[]),E.return=k,E)}function F(k,E,A,z,Z){return E===null||E.tag!==7?(E=ir(A,k.mode,z,Z),E.return=k,E):(E=c(E,A),E.return=k,E)}function U(k,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vs(""+E,k.mode,A),E.return=k,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case j:return A=ka(E.type,E.key,E.props,null,k.mode,A),A.ref=bi(k,null,E),A.return=k,A;case Q:return E=Ks(E,k.mode,A),E.return=k,E;case Ce:var z=E._init;return U(k,z(E._payload),A)}if(gn(E)||X(E))return E=ir(E,k.mode,A,null),E.return=k,E;na(k,E)}return null}function D(k,E,A,z){var Z=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return Z!==null?null:w(k,E,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case j:return A.key===Z?S(k,E,A,z):null;case Q:return A.key===Z?R(k,E,A,z):null;case Ce:return Z=A._init,D(k,E,Z(A._payload),z)}if(gn(A)||X(A))return Z!==null?null:F(k,E,A,z,null);na(k,A)}return null}function K(k,E,A,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number")return k=k.get(A)||null,w(E,k,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case j:return k=k.get(z.key===null?A:z.key)||null,S(E,k,z,Z);case Q:return k=k.get(z.key===null?A:z.key)||null,R(E,k,z,Z);case Ce:var ie=z._init;return K(k,E,A,ie(z._payload),Z)}if(gn(z)||X(z))return k=k.get(A)||null,F(E,k,z,Z,null);na(E,z)}return null}function q(k,E,A,z){for(var Z=null,ie=null,oe=E,le=E=0,Ve=null;oe!==null&&le<A.length;le++){oe.index>le?(Ve=oe,oe=null):Ve=oe.sibling;var _e=D(k,oe,A[le],z);if(_e===null){oe===null&&(oe=Ve);break}e&&oe&&_e.alternate===null&&t(k,oe),E=d(_e,E,le),ie===null?Z=_e:ie.sibling=_e,ie=_e,oe=Ve}if(le===A.length)return i(k,oe),be&&Qt(k,le),Z;if(oe===null){for(;le<A.length;le++)oe=U(k,A[le],z),oe!==null&&(E=d(oe,E,le),ie===null?Z=oe:ie.sibling=oe,ie=oe);return be&&Qt(k,le),Z}for(oe=l(k,oe);le<A.length;le++)Ve=K(oe,k,le,A[le],z),Ve!==null&&(e&&Ve.alternate!==null&&oe.delete(Ve.key===null?le:Ve.key),E=d(Ve,E,le),ie===null?Z=Ve:ie.sibling=Ve,ie=Ve);return e&&oe.forEach(function(Lt){return t(k,Lt)}),be&&Qt(k,le),Z}function J(k,E,A,z){var Z=X(A);if(typeof Z!="function")throw Error(o(150));if(A=Z.call(A),A==null)throw Error(o(151));for(var ie=Z=null,oe=E,le=E=0,Ve=null,_e=A.next();oe!==null&&!_e.done;le++,_e=A.next()){oe.index>le?(Ve=oe,oe=null):Ve=oe.sibling;var Lt=D(k,oe,_e.value,z);if(Lt===null){oe===null&&(oe=Ve);break}e&&oe&&Lt.alternate===null&&t(k,oe),E=d(Lt,E,le),ie===null?Z=Lt:ie.sibling=Lt,ie=Lt,oe=Ve}if(_e.done)return i(k,oe),be&&Qt(k,le),Z;if(oe===null){for(;!_e.done;le++,_e=A.next())_e=U(k,_e.value,z),_e!==null&&(E=d(_e,E,le),ie===null?Z=_e:ie.sibling=_e,ie=_e);return be&&Qt(k,le),Z}for(oe=l(k,oe);!_e.done;le++,_e=A.next())_e=K(oe,k,le,_e.value,z),_e!==null&&(e&&_e.alternate!==null&&oe.delete(_e.key===null?le:_e.key),E=d(_e,E,le),ie===null?Z=_e:ie.sibling=_e,ie=_e);return e&&oe.forEach(function(Y0){return t(k,Y0)}),be&&Qt(k,le),Z}function je(k,E,A,z){if(typeof A=="object"&&A!==null&&A.type===ee&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case j:e:{for(var Z=A.key,ie=E;ie!==null;){if(ie.key===Z){if(Z=A.type,Z===ee){if(ie.tag===7){i(k,ie.sibling),E=c(ie,A.props.children),E.return=k,k=E;break e}}else if(ie.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ce&&Jf(Z)===ie.type){i(k,ie.sibling),E=c(ie,A.props),E.ref=bi(k,ie,A),E.return=k,k=E;break e}i(k,ie);break}else t(k,ie);ie=ie.sibling}A.type===ee?(E=ir(A.props.children,k.mode,z,A.key),E.return=k,k=E):(z=ka(A.type,A.key,A.props,null,k.mode,z),z.ref=bi(k,E,A),z.return=k,k=z)}return h(k);case Q:e:{for(ie=A.key;E!==null;){if(E.key===ie)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){i(k,E.sibling),E=c(E,A.children||[]),E.return=k,k=E;break e}else{i(k,E);break}else t(k,E);E=E.sibling}E=Ks(A,k.mode,z),E.return=k,k=E}return h(k);case Ce:return ie=A._init,je(k,E,ie(A._payload),z)}if(gn(A))return q(k,E,A,z);if(X(A))return J(k,E,A,z);na(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(i(k,E.sibling),E=c(E,A),E.return=k,k=E):(i(k,E),E=Vs(A,k.mode,z),E.return=k,k=E),h(k)):i(k,E)}return je}var Nr=Zf(!0),ed=Zf(!1),ta=_t(null),ra=null,Ir=null,ts=null;function rs(){ts=Ir=ra=null}function is(e){var t=ta.current;Ie(ta),e._currentValue=t}function os(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function Pr(e,t){ra=e,ts=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(un=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(ts!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(ra===null)throw Error(o(308));Ir=e,ra.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Xt=null;function as(e){Xt===null?Xt=[e]:Xt.push(e)}function nd(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,as(t)):(i.next=c.next,c.next=i),t.interleaved=i,rt(e,l)}function rt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Ot=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,rt(e,i)}return c=l.interleaved,c===null?(t.next=t,as(l)):(t.next=c.next,c.next=t),l.interleaved=t,rt(e,i)}function ia(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Cl(e,i)}}function rd(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var h={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};d===null?c=d=h:d=d.next=h,i=i.next}while(i!==null);d===null?c=d=t:d=d.next=t}else c=d=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function oa(e,t,i,l){var c=e.updateQueue;Ot=!1;var d=c.firstBaseUpdate,h=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var S=w,R=S.next;S.next=null,h===null?d=R:h.next=R,h=S;var F=e.alternate;F!==null&&(F=F.updateQueue,w=F.lastBaseUpdate,w!==h&&(w===null?F.firstBaseUpdate=R:w.next=R,F.lastBaseUpdate=S))}if(d!==null){var U=c.baseState;h=0,F=R=S=null,w=d;do{var D=w.lane,K=w.eventTime;if((l&D)===D){F!==null&&(F=F.next={eventTime:K,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var q=e,J=w;switch(D=t,K=i,J.tag){case 1:if(q=J.payload,typeof q=="function"){U=q.call(K,U,D);break e}U=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,D=typeof q=="function"?q.call(K,U,D):q,D==null)break e;U=$({},U,D);break e;case 2:Ot=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,D=c.effects,D===null?c.effects=[w]:D.push(w))}else K={eventTime:K,lane:D,tag:w.tag,payload:w.payload,callback:w.callback,next:null},F===null?(R=F=K,S=U):F=F.next=K,h|=D;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;D=w,w=D.next,D.next=null,c.lastBaseUpdate=D,c.shared.pending=null}}while(!0);if(F===null&&(S=U),c.baseState=S,c.firstBaseUpdate=R,c.lastBaseUpdate=F,t=c.shared.interleaved,t!==null){c=t;do h|=c.lane,c=c.next;while(c!==t)}else d===null&&(c.shared.lanes=0);er|=h,e.lanes=h,e.memoizedState=U}}function id(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(o(191,c));c.call(l)}}}var Li={},Hn=_t(Li),Di=_t(Li),Fi=_t(Li);function Jt(e){if(e===Li)throw Error(o(174));return e}function ss(e,t){switch(Re(Fi,t),Re(Di,e),Re(Hn,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mr(t,e)}Ie(Hn),Re(Hn,t)}function br(){Ie(Hn),Ie(Di),Ie(Fi)}function od(e){Jt(Fi.current);var t=Jt(Hn.current),i=mr(t,e.type);t!==i&&(Re(Di,e),Re(Hn,i))}function us(e){Di.current===e&&(Ie(Hn),Ie(Di))}var Le=_t(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=[];function fs(){for(var e=0;e<cs.length;e++)cs[e]._workInProgressVersionPrimary=null;cs.length=0}var la=W.ReactCurrentDispatcher,ds=W.ReactCurrentBatchConfig,Zt=0,De=null,ze=null,We=null,sa=!1,Mi=!1,ji=0,f0=0;function Je(){throw Error(o(321))}function ps(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Dn(e[i],t[i]))return!1;return!0}function ms(e,t,i,l,c,d){if(Zt=d,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,la.current=e===null||e.memoizedState===null?h0:v0,e=i(l,c),Mi){d=0;do{if(Mi=!1,ji=0,25<=d)throw Error(o(301));d+=1,We=ze=null,t.updateQueue=null,la.current=g0,e=i(l,c)}while(Mi)}if(la.current=fa,t=ze!==null&&ze.next!==null,Zt=0,We=ze=De=null,sa=!1,t)throw Error(o(300));return e}function hs(){var e=ji!==0;return ji=0,e}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?De.memoizedState=We=e:We=We.next=e,We}function Tn(){if(ze===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=We===null?De.memoizedState:We.next;if(t!==null)We=t,ze=e;else{if(e===null)throw Error(o(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},We===null?De.memoizedState=We=e:We=We.next=e}return We}function Ui(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=Tn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=ze,c=l.baseQueue,d=i.pending;if(d!==null){if(c!==null){var h=c.next;c.next=d.next,d.next=h}l.baseQueue=c=d,i.pending=null}if(c!==null){d=c.next,l=l.baseState;var w=h=null,S=null,R=d;do{var F=R.lane;if((Zt&F)===F)S!==null&&(S=S.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),l=R.hasEagerState?R.eagerState:e(l,R.action);else{var U={lane:F,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};S===null?(w=S=U,h=l):S=S.next=U,De.lanes|=F,er|=F}R=R.next}while(R!==null&&R!==d);S===null?h=l:S.next=w,Dn(l,t.memoizedState)||(un=!0),t.memoizedState=l,t.baseState=h,t.baseQueue=S,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do d=c.lane,De.lanes|=d,er|=d,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function gs(e){var t=Tn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,d=t.memoizedState;if(c!==null){i.pending=null;var h=c=c.next;do d=e(d,h.action),h=h.next;while(h!==c);Dn(d,t.memoizedState)||(un=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),i.lastRenderedState=d}return[d,l]}function ad(){}function ld(e,t){var i=De,l=Tn(),c=t(),d=!Dn(l.memoizedState,c);if(d&&(l.memoizedState=c,un=!0),l=l.queue,ys(cd.bind(null,i,l,e),[e]),l.getSnapshot!==t||d||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,Bi(9,ud.bind(null,i,l,c,t),void 0,null),He===null)throw Error(o(349));(Zt&30)!==0||sd(i,t,c)}return c}function sd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function ud(e,t,i,l){t.value=i,t.getSnapshot=l,fd(t)&&dd(e)}function cd(e,t,i){return i(function(){fd(t)&&dd(e)})}function fd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Dn(e,i)}catch{return!0}}function dd(e){var t=rt(e,1);t!==null&&Bn(t,e,1,-1)}function pd(e){var t=Vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,De,e),[t.memoizedState,e]}function Bi(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=De.updateQueue,t===null?(t={lastEffect:null,stores:null},De.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function md(){return Tn().memoizedState}function ua(e,t,i,l){var c=Vn();De.flags|=e,c.memoizedState=Bi(1|t,i,void 0,l===void 0?null:l)}function ca(e,t,i,l){var c=Tn();l=l===void 0?null:l;var d=void 0;if(ze!==null){var h=ze.memoizedState;if(d=h.destroy,l!==null&&ps(l,h.deps)){c.memoizedState=Bi(t,i,d,l);return}}De.flags|=e,c.memoizedState=Bi(1|t,i,d,l)}function hd(e,t){return ua(8390656,8,e,t)}function ys(e,t){return ca(2048,8,e,t)}function vd(e,t){return ca(4,2,e,t)}function gd(e,t){return ca(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,i){return i=i!=null?i.concat([e]):null,ca(4,4,yd.bind(null,t,e),i)}function ws(){}function Sd(e,t){var i=Tn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&ps(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Cd(e,t){var i=Tn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&ps(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function Ed(e,t,i){return(Zt&21)===0?(e.baseState&&(e.baseState=!1,un=!0),e.memoizedState=i):(Dn(i,t)||(i=Xc(),De.lanes|=i,er|=i,e.baseState=!0),t)}function d0(e,t){var i=Oe;Oe=i!==0&&4>i?i:4,e(!0);var l=ds.transition;ds.transition={};try{e(!1),t()}finally{Oe=i,ds.transition=l}}function _d(){return Tn().memoizedState}function p0(e,t,i){var l=It(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},xd(e))kd(t,i);else if(i=nd(e,t,i,l),i!==null){var c=on();Bn(i,e,l,c),Od(i,t,l)}}function m0(e,t,i){var l=It(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(xd(e))kd(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,w=d(h,i);if(c.hasEagerState=!0,c.eagerState=w,Dn(w,h)){var S=t.interleaved;S===null?(c.next=c,as(t)):(c.next=S.next,S.next=c),t.interleaved=c;return}}catch{}i=nd(e,t,c,l),i!==null&&(c=on(),Bn(i,e,l,c),Od(i,t,l))}}function xd(e){var t=e.alternate;return e===De||t!==null&&t===De}function kd(e,t){Mi=sa=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Od(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Cl(e,i)}}var fa={readContext:An,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},h0={readContext:An,useCallback:function(e,t){return Vn().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:hd,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ua(4194308,4,yd.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ua(4194308,4,e,t)},useInsertionEffect:function(e,t){return ua(4,2,e,t)},useMemo:function(e,t){var i=Vn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=Vn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=p0.bind(null,De,e),[l.memoizedState,e]},useRef:function(e){var t=Vn();return e={current:e},t.memoizedState=e},useState:pd,useDebugValue:ws,useDeferredValue:function(e){return Vn().memoizedState=e},useTransition:function(){var e=pd(!1),t=e[0];return e=d0.bind(null,e[1]),Vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=De,c=Vn();if(be){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),He===null)throw Error(o(349));(Zt&30)!==0||sd(l,t,i)}c.memoizedState=i;var d={value:i,getSnapshot:t};return c.queue=d,hd(cd.bind(null,l,d,e),[e]),l.flags|=2048,Bi(9,ud.bind(null,l,d,i,t),void 0,null),i},useId:function(){var e=Vn(),t=He.identifierPrefix;if(be){var i=tt,l=nt;i=(l&~(1<<32-Ln(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=ji++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=f0++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v0={readContext:An,useCallback:Sd,useContext:An,useEffect:ys,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:gd,useMemo:Cd,useReducer:vs,useRef:md,useState:function(){return vs(Ui)},useDebugValue:ws,useDeferredValue:function(e){var t=Tn();return Ed(t,ze.memoizedState,e)},useTransition:function(){var e=vs(Ui)[0],t=Tn().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ld,useId:_d,unstable_isNewReconciler:!1},g0={readContext:An,useCallback:Sd,useContext:An,useEffect:ys,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:gd,useMemo:Cd,useReducer:gs,useRef:md,useState:function(){return gs(Ui)},useDebugValue:ws,useDeferredValue:function(e){var t=Tn();return ze===null?t.memoizedState=e:Ed(t,ze.memoizedState,e)},useTransition:function(){var e=gs(Ui)[0],t=Tn().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ld,useId:_d,unstable_isNewReconciler:!1};function Mn(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ss(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:$({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var da={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=on(),c=It(e),d=it(l,c);d.payload=t,i!=null&&(d.callback=i),t=At(e,d,c),t!==null&&(Bn(t,e,c,l),ia(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=on(),c=It(e),d=it(l,c);d.tag=1,d.payload=t,i!=null&&(d.callback=i),t=At(e,d,c),t!==null&&(Bn(t,e,c,l),ia(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=on(),l=It(e),c=it(i,l);c.tag=2,t!=null&&(c.callback=t),t=At(e,c,l),t!==null&&(Bn(t,e,l,i),ia(t,e,l))}};function Ad(e,t,i,l,c,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,h):t.prototype&&t.prototype.isPureReactComponent?!Oi(i,l)||!Oi(c,d):!0}function Td(e,t,i){var l=!1,c=xt,d=t.contextType;return typeof d=="object"&&d!==null?d=An(d):(c=sn(t)?Gt:Xe.current,l=t.contextTypes,d=(l=l!=null)?Or(e,c):xt),t=new t(i,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=da,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=d),t}function Rd(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&da.enqueueReplaceState(t,t.state,null)}function Cs(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},ls(e);var d=t.contextType;typeof d=="object"&&d!==null?c.context=An(d):(d=sn(t)?Gt:Xe.current,c.context=Or(e,d)),c.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Ss(e,t,d,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&da.enqueueReplaceState(c,c.state,null),oa(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var i="",l=t;do i+=pe(l),l=l.return;while(l);var c=i}catch(d){c=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:c,digest:null}}function Es(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function Nd(e,t,i){i=it(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){wa||(wa=!0,js=l),_s(e,t)},i}function Id(e,t,i){i=it(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){_s(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(i.callback=function(){_s(e,t),typeof l!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),i}function Pd(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new y0;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=P0.bind(null,e,t,i),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ld(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=it(-1,1),t.tag=2,At(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var w0=W.ReactCurrentOwner,un=!1;function rn(e,t,i,l){t.child=e===null?ed(t,null,i,l):Nr(t,e.child,i,l)}function Dd(e,t,i,l,c){i=i.render;var d=t.ref;return Pr(t,c),l=ms(e,t,i,l,d,c),i=hs(),e!==null&&!un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,ot(e,t,c)):(be&&i&&Xl(t),t.flags|=1,rn(e,t,l,c),t.child)}function Fd(e,t,i,l,c){if(e===null){var d=i.type;return typeof d=="function"&&!Hs(d)&&d.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=d,Md(e,t,d,l,c)):(e=ka(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&c)===0){var h=d.memoizedProps;if(i=i.compare,i=i!==null?i:Oi,i(h,l)&&e.ref===t.ref)return ot(e,t,c)}return t.flags|=1,e=bt(d,l),e.ref=t.ref,e.return=t,t.child=e}function Md(e,t,i,l,c){if(e!==null){var d=e.memoizedProps;if(Oi(d,l)&&e.ref===t.ref)if(un=!1,t.pendingProps=l=d,(e.lanes&c)!==0)(e.flags&131072)!==0&&(un=!0);else return t.lanes=e.lanes,ot(e,t,c)}return xs(e,t,i,l,c)}function jd(e,t,i){var l=t.pendingProps,c=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Fr,Cn),Cn|=i;else{if((i&1073741824)===0)return e=d!==null?d.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(Fr,Cn),Cn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=d!==null?d.baseLanes:i,Re(Fr,Cn),Cn|=l}else d!==null?(l=d.baseLanes|i,t.memoizedState=null):l=i,Re(Fr,Cn),Cn|=l;return rn(e,t,c,i),t.child}function Ud(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function xs(e,t,i,l,c){var d=sn(i)?Gt:Xe.current;return d=Or(t,d),Pr(t,c),i=ms(e,t,i,l,d,c),l=hs(),e!==null&&!un?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,ot(e,t,c)):(be&&l&&Xl(t),t.flags|=1,rn(e,t,i,c),t.child)}function Bd(e,t,i,l,c){if(sn(i)){var d=!0;Qo(t)}else d=!1;if(Pr(t,c),t.stateNode===null)ma(e,t),Td(t,i,l),Cs(t,i,l,c),l=!0;else if(e===null){var h=t.stateNode,w=t.memoizedProps;h.props=w;var S=h.context,R=i.contextType;typeof R=="object"&&R!==null?R=An(R):(R=sn(i)?Gt:Xe.current,R=Or(t,R));var F=i.getDerivedStateFromProps,U=typeof F=="function"||typeof h.getSnapshotBeforeUpdate=="function";U||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==l||S!==R)&&Rd(t,h,l,R),Ot=!1;var D=t.memoizedState;h.state=D,oa(t,l,h,c),S=t.memoizedState,w!==l||D!==S||ln.current||Ot?(typeof F=="function"&&(Ss(t,i,F,l),S=t.memoizedState),(w=Ot||Ad(t,i,w,l,D,S,R))?(U||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),h.props=l,h.state=S,h.context=R,l=w):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{h=t.stateNode,td(e,t),w=t.memoizedProps,R=t.type===t.elementType?w:Mn(t.type,w),h.props=R,U=t.pendingProps,D=h.context,S=i.contextType,typeof S=="object"&&S!==null?S=An(S):(S=sn(i)?Gt:Xe.current,S=Or(t,S));var K=i.getDerivedStateFromProps;(F=typeof K=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==U||D!==S)&&Rd(t,h,l,S),Ot=!1,D=t.memoizedState,h.state=D,oa(t,l,h,c);var q=t.memoizedState;w!==U||D!==q||ln.current||Ot?(typeof K=="function"&&(Ss(t,i,K,l),q=t.memoizedState),(R=Ot||Ad(t,i,R,l,D,q,S)||!1)?(F||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,q,S),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,q,S)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=q),h.props=l,h.state=q,h.context=S,l=R):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),l=!1)}return ks(e,t,i,l,d,c)}function ks(e,t,i,l,c,d){Ud(e,t);var h=(t.flags&128)!==0;if(!l&&!h)return c&&Hf(t,i,!1),ot(e,t,d);l=t.stateNode,w0.current=t;var w=h&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&h?(t.child=Nr(t,e.child,null,d),t.child=Nr(t,null,w,d)):rn(e,t,w,d),t.memoizedState=l.state,c&&Hf(t,i,!0),t.child}function zd(e){var t=e.stateNode;t.pendingContext?Yf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yf(e,t.context,!1),ss(e,t.containerInfo)}function $d(e,t,i,l,c){return Rr(),ns(c),t.flags|=256,rn(e,t,i,l),t.child}var Os={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,t,i){var l=t.pendingProps,c=Le.current,d=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(c&2)!==0),w?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Re(Le,c&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=l.children,e=l.fallback,d?(l=t.mode,d=t.child,h={mode:"hidden",children:h},(l&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Oa(h,l,0,null),e=ir(e,l,i,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=As(i),t.memoizedState=Os,e):Ts(t,h));if(c=e.memoizedState,c!==null&&(w=c.dehydrated,w!==null))return S0(e,t,h,l,w,c,i);if(d){d=l.fallback,h=t.mode,c=e.child,w=c.sibling;var S={mode:"hidden",children:l.children};return(h&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=S,t.deletions=null):(l=bt(c,S),l.subtreeFlags=c.subtreeFlags&14680064),w!==null?d=bt(w,d):(d=ir(d,h,i,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,l=d,d=t.child,h=e.child.memoizedState,h=h===null?As(i):{baseLanes:h.baseLanes|i,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~i,t.memoizedState=Os,l}return d=e.child,e=d.sibling,l=bt(d,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function Ts(e,t){return t=Oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pa(e,t,i,l){return l!==null&&ns(l),Nr(t,e.child,null,i),e=Ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S0(e,t,i,l,c,d,h){if(i)return t.flags&256?(t.flags&=-257,l=Es(Error(o(422))),pa(e,t,h,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=l.fallback,c=t.mode,l=Oa({mode:"visible",children:l.children},c,0,null),d=ir(d,c,h,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,(t.mode&1)!==0&&Nr(t,e.child,null,h),t.child.memoizedState=As(h),t.memoizedState=Os,d);if((t.mode&1)===0)return pa(e,t,h,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var w=l.dgst;return l=w,d=Error(o(419)),l=Es(d,l,void 0),pa(e,t,h,l)}if(w=(h&e.childLanes)!==0,un||w){if(l=He,l!==null){switch(h&-h){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|h))!==0?0:c,c!==0&&c!==d.retryLane&&(d.retryLane=c,rt(e,c),Bn(l,e,c,-1))}return Ws(),l=Es(Error(o(421))),pa(e,t,h,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=b0.bind(null,e),c._reactRetry=t,null):(e=d.treeContext,Sn=Et(c.nextSibling),wn=t,be=!0,Fn=null,e!==null&&(kn[On++]=nt,kn[On++]=tt,kn[On++]=qt,nt=e.id,tt=e.overflow,qt=t),t=Ts(t,l.children),t.flags|=4096,t)}function Wd(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),os(e.return,t,i)}function Rs(e,t,i,l,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=i,d.tailMode=c)}function Hd(e,t,i){var l=t.pendingProps,c=l.revealOrder,d=l.tail;if(rn(e,t,l.children,i),l=Le.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wd(e,i,t);else if(e.tag===19)Wd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Re(Le,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&aa(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Rs(t,!1,c,i,d);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&aa(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Rs(t,!0,i,null,d);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ma(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=bt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=bt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function C0(e,t,i){switch(t.tag){case 3:zd(t),Rr();break;case 5:od(t);break;case 1:sn(t.type)&&Qo(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Re(ta,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Re(Le,Le.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Yd(e,t,i):(Re(Le,Le.current&1),e=ot(e,t,i),e!==null?e.sibling:null);Re(Le,Le.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return Hd(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Re(Le,Le.current),l)break;return null;case 22:case 23:return t.lanes=0,jd(e,t,i)}return ot(e,t,i)}var Vd,Ns,Kd,Gd;Vd=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Ns=function(){},Kd=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Jt(Hn.current);var d=null;switch(i){case"input":c=ri(e,c),l=ri(e,l),d=[];break;case"select":c=$({},c,{value:void 0}),l=$({},l,{value:void 0}),d=[];break;case"textarea":c=dr(e,c),l=dr(e,l),d=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Ko)}cl(i,l);var h;i=null;for(R in c)if(!l.hasOwnProperty(R)&&c.hasOwnProperty(R)&&c[R]!=null)if(R==="style"){var w=c[R];for(h in w)w.hasOwnProperty(h)&&(i||(i={}),i[h]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(s.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in l){var S=l[R];if(w=c?.[R],l.hasOwnProperty(R)&&S!==w&&(S!=null||w!=null))if(R==="style")if(w){for(h in w)!w.hasOwnProperty(h)||S&&S.hasOwnProperty(h)||(i||(i={}),i[h]="");for(h in S)S.hasOwnProperty(h)&&w[h]!==S[h]&&(i||(i={}),i[h]=S[h])}else i||(d||(d=[]),d.push(R,i)),i=S;else R==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,w=w?w.__html:void 0,S!=null&&w!==S&&(d=d||[]).push(R,S)):R==="children"?typeof S!="string"&&typeof S!="number"||(d=d||[]).push(R,""+S):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(s.hasOwnProperty(R)?(S!=null&&R==="onScroll"&&Ne("scroll",e),d||w===S||(d=[])):(d=d||[]).push(R,S))}i&&(d=d||[]).push("style",i);var R=d;(t.updateQueue=R)&&(t.flags|=4)}},Gd=function(e,t,i,l){i!==l&&(t.flags|=4)};function zi(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function E0(e,t,i){var l=t.pendingProps;switch(Jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return sn(t.type)&&qo(),Ze(t),null;case 3:return l=t.stateNode,br(),Ie(ln),Ie(Xe),fs(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fn!==null&&(zs(Fn),Fn=null))),Ns(e,t),Ze(t),null;case 5:us(t);var c=Jt(Fi.current);if(i=t.type,e!==null&&t.stateNode!=null)Kd(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ze(t),null}if(e=Jt(Hn.current),ea(t)){l=t.stateNode,i=t.type;var d=t.memoizedProps;switch(l[Wn]=t,l[Ii]=d,e=(t.mode&1)!==0,i){case"dialog":Ne("cancel",l),Ne("close",l);break;case"iframe":case"object":case"embed":Ne("load",l);break;case"video":case"audio":for(c=0;c<Ti.length;c++)Ne(Ti[c],l);break;case"source":Ne("error",l);break;case"img":case"image":case"link":Ne("error",l),Ne("load",l);break;case"details":Ne("toggle",l);break;case"input":xo(l,d),Ne("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!d.multiple},Ne("invalid",l);break;case"textarea":ai(l,d),Ne("invalid",l)}cl(i,d),c=null;for(var h in d)if(d.hasOwnProperty(h)){var w=d[h];h==="children"?typeof w=="string"?l.textContent!==w&&(d.suppressHydrationWarning!==!0&&Vo(l.textContent,w,e),c=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(d.suppressHydrationWarning!==!0&&Vo(l.textContent,w,e),c=["children",""+w]):s.hasOwnProperty(h)&&w!=null&&h==="onScroll"&&Ne("scroll",l)}switch(i){case"input":ht(l),ko(l,d,!0);break;case"textarea":ht(l),li(l);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(l.onclick=Ko)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{h=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=si(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=h.createElement(i,{is:l.is}):(e=h.createElement(i),i==="select"&&(h=e,l.multiple?h.multiple=!0:l.size&&(h.size=l.size))):e=h.createElementNS(e,i),e[Wn]=t,e[Ii]=l,Vd(e,t,!1,!1),t.stateNode=e;e:{switch(h=fl(i,l),i){case"dialog":Ne("cancel",e),Ne("close",e),c=l;break;case"iframe":case"object":case"embed":Ne("load",e),c=l;break;case"video":case"audio":for(c=0;c<Ti.length;c++)Ne(Ti[c],e);c=l;break;case"source":Ne("error",e),c=l;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),c=l;break;case"details":Ne("toggle",e),c=l;break;case"input":xo(e,l),c=ri(e,l),Ne("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=$({},l,{value:void 0}),Ne("invalid",e);break;case"textarea":ai(e,l),c=dr(e,l),Ne("invalid",e);break;default:c=l}cl(i,c),w=c;for(d in w)if(w.hasOwnProperty(d)){var S=w[d];d==="style"?Fc(e,S):d==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Lc(e,S)):d==="children"?typeof S=="string"?(i!=="textarea"||S!=="")&&ui(e,S):typeof S=="number"&&ui(e,""+S):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(s.hasOwnProperty(d)?S!=null&&d==="onScroll"&&Ne("scroll",e):S!=null&&Y(e,d,S,h))}switch(i){case"input":ht(e),ko(e,l,!1);break;case"textarea":ht(e),li(e);break;case"option":l.value!=null&&e.setAttribute("value",""+we(l.value));break;case"select":e.multiple=!!l.multiple,d=l.value,d!=null?bn(e,!!l.multiple,d,!1):l.defaultValue!=null&&bn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=Ko)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Gd(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(i=Jt(Fi.current),Jt(Hn.current),ea(t)){if(l=t.stateNode,i=t.memoizedProps,l[Wn]=t,(d=l.nodeValue!==i)&&(e=wn,e!==null))switch(e.tag){case 3:Vo(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vo(l.nodeValue,i,(e.mode&1)!==0)}d&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Wn]=t,t.stateNode=l}return Ze(t),null;case 13:if(Ie(Le),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&Sn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Xf(),Rr(),t.flags|=98560,d=!1;else if(d=ea(t),l!==null&&l.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Wn]=t}else Rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),d=!1}else Fn!==null&&(zs(Fn),Fn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Le.current&1)!==0?$e===0&&($e=3):Ws())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return br(),Ns(e,t),e===null&&Ri(t.stateNode.containerInfo),Ze(t),null;case 10:return is(t.type._context),Ze(t),null;case 17:return sn(t.type)&&qo(),Ze(t),null;case 19:if(Ie(Le),d=t.memoizedState,d===null)return Ze(t),null;if(l=(t.flags&128)!==0,h=d.rendering,h===null)if(l)zi(d,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=aa(e),h!==null){for(t.flags|=128,zi(d,!1),l=h.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)d=i,e=l,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Re(Le,Le.current&1|2),t.child}e=e.sibling}d.tail!==null&&Me()>Mr&&(t.flags|=128,l=!0,zi(d,!1),t.lanes=4194304)}else{if(!l)if(e=aa(h),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),zi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!be)return Ze(t),null}else 2*Me()-d.renderingStartTime>Mr&&i!==1073741824&&(t.flags|=128,l=!0,zi(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(i=d.last,i!==null?i.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=Me(),t.sibling=null,i=Le.current,Re(Le,l?i&1|2:i&1),t):(Ze(t),null);case 22:case 23:return Ys(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Cn&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function _0(e,t){switch(Jl(t),t.tag){case 1:return sn(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),Ie(ln),Ie(Xe),fs(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return us(t),null;case 13:if(Ie(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Le),null;case 4:return br(),null;case 10:return is(t.type._context),null;case 22:case 23:return Ys(),null;case 24:return null;default:return null}}var ha=!1,en=!1,x0=typeof WeakSet=="function"?WeakSet:Set,G=null;function Dr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){Fe(e,t,l)}else i.current=null}function Is(e,t,i){try{i()}catch(l){Fe(e,t,l)}}var qd=!1;function k0(e,t){if(Yl=Do,e=Af(),Dl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break e}var h=0,w=-1,S=-1,R=0,F=0,U=e,D=null;n:for(;;){for(var K;U!==i||c!==0&&U.nodeType!==3||(w=h+c),U!==d||l!==0&&U.nodeType!==3||(S=h+l),U.nodeType===3&&(h+=U.nodeValue.length),(K=U.firstChild)!==null;)D=U,U=K;for(;;){if(U===e)break n;if(D===i&&++R===c&&(w=h),D===d&&++F===l&&(S=h),(K=U.nextSibling)!==null)break;U=D,D=U.parentNode}U=K}i=w===-1||S===-1?null:{start:w,end:S}}else i=null}i=i||{start:0,end:0}}else i=null;for(Wl={focusedElem:e,selectionRange:i},Do=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var J=q.memoizedProps,je=q.memoizedState,k=t.stateNode,E=k.getSnapshotBeforeUpdate(t.elementType===t.type?J:Mn(t.type,J),je);k.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=t.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(z){Fe(t,t.return,z)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return q=qd,qd=!1,q}function $i(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var d=c.destroy;c.destroy=void 0,d!==void 0&&Is(t,i,d)}c=c.next}while(c!==l)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Ps(e){var t=e.ref;if(t!==null){var i=e.stateNode;e.tag,e=i,typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wn],delete t[Ii],delete t[Gl],delete t[l0],delete t[s0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function Jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ko));else if(l!==4&&(e=e.child,e!==null))for(bs(e,t,i),e=e.sibling;e!==null;)bs(e,t,i),e=e.sibling}function Ls(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ls(e,t,i),e=e.sibling;e!==null;)Ls(e,t,i),e=e.sibling}var Ke=null,jn=!1;function Tt(e,t,i){for(i=i.child;i!==null;)Zd(e,t,i),i=i.sibling}function Zd(e,t,i){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Ro,i)}catch{}switch(i.tag){case 5:en||Dr(i,t);case 6:var l=Ke,c=jn;Ke=null,Tt(e,t,i),Ke=l,jn=c,Ke!==null&&(jn?(e=Ke,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Ke.removeChild(i.stateNode));break;case 18:Ke!==null&&(jn?(e=Ke,i=i.stateNode,e.nodeType===8?Kl(e.parentNode,i):e.nodeType===1&&Kl(e,i),Si(e)):Kl(Ke,i.stateNode));break;case 4:l=Ke,c=jn,Ke=i.stateNode.containerInfo,jn=!0,Tt(e,t,i),Ke=l,jn=c;break;case 0:case 11:case 14:case 15:if(!en&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var d=c,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&Is(i,t,h),c=c.next}while(c!==l)}Tt(e,t,i);break;case 1:if(!en&&(Dr(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(w){Fe(i,t,w)}Tt(e,t,i);break;case 21:Tt(e,t,i);break;case 22:i.mode&1?(en=(l=en)||i.memoizedState!==null,Tt(e,t,i),en=l):Tt(e,t,i);break;default:Tt(e,t,i)}}function ep(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new x0),t.forEach(function(l){var c=L0.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function Un(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var d=e,h=t,w=h;e:for(;w!==null;){switch(w.tag){case 5:Ke=w.stateNode,jn=!1;break e;case 3:Ke=w.stateNode.containerInfo,jn=!0;break e;case 4:Ke=w.stateNode.containerInfo,jn=!0;break e}w=w.return}if(Ke===null)throw Error(o(160));Zd(d,h,c),Ke=null,jn=!1;var S=c.alternate;S!==null&&(S.return=null),c.return=null}catch(R){Fe(c,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Un(t,e),Kn(e),l&4){try{$i(3,e,e.return),va(3,e)}catch(J){Fe(e,e.return,J)}try{$i(5,e,e.return)}catch(J){Fe(e,e.return,J)}}break;case 1:Un(t,e),Kn(e),l&512&&i!==null&&Dr(i,i.return);break;case 5:if(Un(t,e),Kn(e),l&512&&i!==null&&Dr(i,i.return),e.flags&32){var c=e.stateNode;try{ui(c,"")}catch(J){Fe(e,e.return,J)}}if(l&4&&(c=e.stateNode,c!=null)){var d=e.memoizedProps,h=i!==null?i.memoizedProps:d,w=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{w==="input"&&d.type==="radio"&&d.name!=null&&ii(c,d),fl(w,h);var R=fl(w,d);for(h=0;h<S.length;h+=2){var F=S[h],U=S[h+1];F==="style"?Fc(c,U):F==="dangerouslySetInnerHTML"?Lc(c,U):F==="children"?ui(c,U):Y(c,F,U,R)}switch(w){case"input":fr(c,d);break;case"textarea":pr(c,d);break;case"select":var D=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!d.multiple;var K=d.value;K!=null?bn(c,!!d.multiple,K,!1):D!==!!d.multiple&&(d.defaultValue!=null?bn(c,!!d.multiple,d.defaultValue,!0):bn(c,!!d.multiple,d.multiple?[]:"",!1))}c[Ii]=d}catch(J){Fe(e,e.return,J)}}break;case 6:if(Un(t,e),Kn(e),l&4){if(e.stateNode===null)throw Error(o(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(J){Fe(e,e.return,J)}}break;case 3:if(Un(t,e),Kn(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(J){Fe(e,e.return,J)}break;case 4:Un(t,e),Kn(e);break;case 13:Un(t,e),Kn(e),c=e.child,c.flags&8192&&(d=c.memoizedState!==null,c.stateNode.isHidden=d,!d||c.alternate!==null&&c.alternate.memoizedState!==null||(Ms=Me())),l&4&&ep(e);break;case 22:if(F=i!==null&&i.memoizedState!==null,e.mode&1?(en=(R=en)||F,Un(t,e),en=R):Un(t,e),Kn(e),l&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!F&&(e.mode&1)!==0)for(G=e,F=e.child;F!==null;){for(U=G=F;G!==null;){switch(D=G,K=D.child,D.tag){case 0:case 11:case 14:case 15:$i(4,D,D.return);break;case 1:Dr(D,D.return);var q=D.stateNode;if(typeof q.componentWillUnmount=="function"){l=D,i=D.return;try{t=l,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(J){Fe(l,i,J)}}break;case 5:Dr(D,D.return);break;case 22:if(D.memoizedState!==null){ip(U);continue}}K!==null?(K.return=D,G=K):ip(U)}F=F.sibling}e:for(F=null,U=e;;){if(U.tag===5){if(F===null){F=U;try{c=U.stateNode,R?(d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(w=U.stateNode,S=U.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null,w.style.display=Dc("display",h))}catch(J){Fe(e,e.return,J)}}}else if(U.tag===6){if(F===null)try{U.stateNode.nodeValue=R?"":U.memoizedProps}catch(J){Fe(e,e.return,J)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;F===U&&(F=null),U=U.return}F===U&&(F=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Un(t,e),Kn(e),l&4&&ep(e);break;case 21:break;default:Un(t,e),Kn(e)}}function Kn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Xd(i)){var l=i;break e}i=i.return}throw Error(o(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ui(c,""),l.flags&=-33);var d=Jd(e);Ls(e,d,c);break;case 3:case 4:var h=l.stateNode.containerInfo,w=Jd(e);bs(e,w,h);break;default:throw Error(o(161))}}catch(S){Fe(e,e.return,S)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O0(e,t,i){G=e,tp(e)}function tp(e,t,i){for(var l=(e.mode&1)!==0;G!==null;){var c=G,d=c.child;if(c.tag===22&&l){var h=c.memoizedState!==null||ha;if(!h){var w=c.alternate,S=w!==null&&w.memoizedState!==null||en;w=ha;var R=en;if(ha=h,(en=S)&&!R)for(G=c;G!==null;)h=G,S=h.child,h.tag===22&&h.memoizedState!==null?op(c):S!==null?(S.return=h,G=S):op(c);for(;d!==null;)G=d,tp(d),d=d.sibling;G=c,ha=w,en=R}rp(e)}else(c.subtreeFlags&8772)!==0&&d!==null?(d.return=c,G=d):rp(e)}}function rp(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:en||va(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!en)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:Mn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&id(t,d,l);break;case 3:var h=t.updateQueue;if(h!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}id(t,h,i)}break;case 5:var w=t.stateNode;if(i===null&&t.flags&4){i=w;var S=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&i.focus();break;case"img":S.src&&(i.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var F=R.memoizedState;if(F!==null){var U=F.dehydrated;U!==null&&Si(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}en||t.flags&512&&Ps(t)}catch(D){Fe(t,t.return,D)}}if(t===e){G=null;break}if(i=t.sibling,i!==null){i.return=t.return,G=i;break}G=t.return}}function ip(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var i=t.sibling;if(i!==null){i.return=t.return,G=i;break}G=t.return}}function op(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{va(4,t)}catch(S){Fe(t,i,S)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(S){Fe(t,c,S)}}var d=t.return;try{Ps(t)}catch(S){Fe(t,d,S)}break;case 5:var h=t.return;try{Ps(t)}catch(S){Fe(t,h,S)}}}catch(S){Fe(t,t.return,S)}if(t===e){G=null;break}var w=t.sibling;if(w!==null){w.return=t.return,G=w;break}G=t.return}}var A0=Math.ceil,ga=W.ReactCurrentDispatcher,Ds=W.ReactCurrentOwner,Rn=W.ReactCurrentBatchConfig,Ee=0,He=null,Ue=null,Ge=0,Cn=0,Fr=_t(0),$e=0,Yi=null,er=0,ya=0,Fs=0,Wi=null,cn=null,Ms=0,Mr=1/0,at=null,wa=!1,js=null,Rt=null,Sa=!1,Nt=null,Ca=0,Hi=0,Us=null,Ea=-1,_a=0;function on(){return(Ee&6)!==0?Me():Ea!==-1?Ea:Ea=Me()}function It(e){return(e.mode&1)===0?1:(Ee&2)!==0&&Ge!==0?Ge&-Ge:c0.transition!==null?(_a===0&&(_a=Xc()),_a):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:lf(e.type)),e)}function Bn(e,t,i,l){if(50<Hi)throw Hi=0,Us=null,Error(o(185));hi(e,i,l),((Ee&2)===0||e!==He)&&(e===He&&((Ee&2)===0&&(ya|=i),$e===4&&Pt(e,Ge)),fn(e,l),i===1&&Ee===0&&(t.mode&1)===0&&(Mr=Me()+500,Xo&&kt()))}function fn(e,t){var i=e.callbackNode;cy(e,t);var l=Po(e,e===He?Ge:0);if(l===0)i!==null&&Gc(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&Gc(i),t===1)e.tag===0?u0(lp.bind(null,e)):Vf(lp.bind(null,e)),o0(function(){(Ee&6)===0&&kt()}),i=null;else{switch(Jc(l)){case 1:i=yl;break;case 4:i=qc;break;case 16:i=To;break;case 536870912:i=Qc;break;default:i=To}i=hp(i,ap.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function ap(e,t){if(Ea=-1,_a=0,(Ee&6)!==0)throw Error(o(327));var i=e.callbackNode;if(jr()&&e.callbackNode!==i)return null;var l=Po(e,e===He?Ge:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=xa(e,l);else{t=l;var c=Ee;Ee|=2;var d=up();(He!==e||Ge!==t)&&(at=null,Mr=Me()+500,tr(e,t));do try{N0();break}catch(w){sp(e,w)}while(!0);rs(),ga.current=d,Ee=c,Ue!==null?t=0:(He=null,Ge=0,t=$e)}if(t!==0){if(t===2&&(c=wl(e),c!==0&&(l=c,t=Bs(e,c))),t===1)throw i=Yi,tr(e,0),Pt(e,l),fn(e,Me()),i;if(t===6)Pt(e,l);else{if(c=e.current.alternate,(l&30)===0&&!T0(c)&&(t=xa(e,l),t===2&&(d=wl(e),d!==0&&(l=d,t=Bs(e,d))),t===1))throw i=Yi,tr(e,0),Pt(e,l),fn(e,Me()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(o(345));case 2:rr(e,cn,at);break;case 3:if(Pt(e,l),(l&130023424)===l&&(t=Ms+500-Me(),10<t)){if(Po(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){on(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Vl(rr.bind(null,e,cn,at),t);break}rr(e,cn,at);break;case 4:if(Pt(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var h=31-Ln(l);d=1<<h,h=t[h],h>c&&(c=h),l&=~d}if(l=c,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*A0(l/1960))-l,10<l){e.timeoutHandle=Vl(rr.bind(null,e,cn,at),l);break}rr(e,cn,at);break;case 5:rr(e,cn,at);break;default:throw Error(o(329))}}}return fn(e,Me()),e.callbackNode===i?ap.bind(null,e):null}function Bs(e,t){var i=Wi;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=xa(e,t),e!==2&&(t=cn,cn=i,t!==null&&zs(t)),e}function zs(e){cn===null?cn=e:cn.push.apply(cn,e)}function T0(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],d=c.getSnapshot;c=c.value;try{if(!Dn(d(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~Fs,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Ln(t),l=1<<i;e[i]=-1,t&=~l}}function lp(e){if((Ee&6)!==0)throw Error(o(327));jr();var t=Po(e,0);if((t&1)===0)return fn(e,Me()),null;var i=xa(e,t);if(e.tag!==0&&i===2){var l=wl(e);l!==0&&(t=l,i=Bs(e,l))}if(i===1)throw i=Yi,tr(e,0),Pt(e,t),fn(e,Me()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,cn,at),fn(e,Me()),null}function $s(e,t){var i=Ee;Ee|=1;try{return e(t)}finally{Ee=i,Ee===0&&(Mr=Me()+500,Xo&&kt())}}function nr(e){Nt!==null&&Nt.tag===0&&(Ee&6)===0&&jr();var t=Ee;Ee|=1;var i=Rn.transition,l=Oe;try{if(Rn.transition=null,Oe=1,e)return e()}finally{Oe=l,Rn.transition=i,Ee=t,(Ee&6)===0&&kt()}}function Ys(){Cn=Fr.current,Ie(Fr)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,i0(i)),Ue!==null)for(i=Ue.return;i!==null;){var l=i;switch(Jl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&qo();break;case 3:br(),Ie(ln),Ie(Xe),fs();break;case 5:us(l);break;case 4:br();break;case 13:Ie(Le);break;case 19:Ie(Le);break;case 10:is(l.type._context);break;case 22:case 23:Ys()}i=i.return}if(He=e,Ue=e=bt(e.current,null),Ge=Cn=t,$e=0,Yi=null,Fs=ya=er=0,cn=Wi=null,Xt!==null){for(t=0;t<Xt.length;t++)if(i=Xt[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,d=i.pending;if(d!==null){var h=d.next;d.next=c,l.next=h}i.pending=l}Xt=null}return e}function sp(e,t){do{var i=Ue;try{if(rs(),la.current=fa,sa){for(var l=De.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}sa=!1}if(Zt=0,We=ze=De=null,Mi=!1,ji=0,Ds.current=null,i===null||i.return===null){$e=1,Yi=t,Ue=null;break}e:{var d=e,h=i.return,w=i,S=t;if(t=Ge,w.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var R=S,F=w,U=F.tag;if((F.mode&1)===0&&(U===0||U===11||U===15)){var D=F.alternate;D?(F.updateQueue=D.updateQueue,F.memoizedState=D.memoizedState,F.lanes=D.lanes):(F.updateQueue=null,F.memoizedState=null)}var K=bd(h);if(K!==null){K.flags&=-257,Ld(K,h,w,d,t),K.mode&1&&Pd(d,R,t),t=K,S=R;var q=t.updateQueue;if(q===null){var J=new Set;J.add(S),t.updateQueue=J}else q.add(S);break e}else{if((t&1)===0){Pd(d,R,t),Ws();break e}S=Error(o(426))}}else if(be&&w.mode&1){var je=bd(h);if(je!==null){(je.flags&65536)===0&&(je.flags|=256),Ld(je,h,w,d,t),ns(Lr(S,w));break e}}d=S=Lr(S,w),$e!==4&&($e=2),Wi===null?Wi=[d]:Wi.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var k=Nd(d,S,t);rd(d,k);break e;case 1:w=S;var E=d.type,A=d.stateNode;if((d.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Rt===null||!Rt.has(A)))){d.flags|=65536,t&=-t,d.lanes|=t;var z=Id(d,w,t);rd(d,z);break e}}d=d.return}while(d!==null)}fp(i)}catch(Z){t=Z,Ue===i&&i!==null&&(Ue=i=i.return);continue}break}while(!0)}function up(){var e=ga.current;return ga.current=fa,e===null?fa:e}function Ws(){($e===0||$e===3||$e===2)&&($e=4),He===null||(er&268435455)===0&&(ya&268435455)===0||Pt(He,Ge)}function xa(e,t){var i=Ee;Ee|=2;var l=up();(He!==e||Ge!==t)&&(at=null,tr(e,t));do try{R0();break}catch(c){sp(e,c)}while(!0);if(rs(),Ee=i,ga.current=l,Ue!==null)throw Error(o(261));return He=null,Ge=0,$e}function R0(){for(;Ue!==null;)cp(Ue)}function N0(){for(;Ue!==null&&!ny();)cp(Ue)}function cp(e){var t=mp(e.alternate,e,Cn);e.memoizedProps=e.pendingProps,t===null?fp(e):Ue=t,Ds.current=null}function fp(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=E0(i,t,Cn),i!==null){Ue=i;return}}else{if(i=_0(i,t),i!==null){i.flags&=32767,Ue=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);$e===0&&($e=5)}function rr(e,t,i){var l=Oe,c=Rn.transition;try{Rn.transition=null,Oe=1,I0(e,t,i,l)}finally{Rn.transition=c,Oe=l}return null}function I0(e,t,i,l){do jr();while(Nt!==null);if((Ee&6)!==0)throw Error(o(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var d=i.lanes|i.childLanes;if(fy(e,d),e===He&&(Ue=He=null,Ge=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Sa||(Sa=!0,hp(To,function(){return jr(),null})),d=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||d){d=Rn.transition,Rn.transition=null;var h=Oe;Oe=1;var w=Ee;Ee|=4,Ds.current=null,k0(e,i),np(i,e),Xy(Wl),Do=!!Yl,Wl=Yl=null,e.current=i,O0(i),ty(),Ee=w,Oe=h,Rn.transition=d}else e.current=i;if(Sa&&(Sa=!1,Nt=e,Ca=c),d=e.pendingLanes,d===0&&(Rt=null),oy(i.stateNode),fn(e,Me()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(wa)throw wa=!1,e=js,js=null,e;return(Ca&1)!==0&&e.tag!==0&&jr(),d=e.pendingLanes,(d&1)!==0?e===Us?Hi++:(Hi=0,Us=e):Hi=0,kt(),null}function jr(){if(Nt!==null){var e=Jc(Ca),t=Rn.transition,i=Oe;try{if(Rn.transition=null,Oe=16>e?16:e,Nt===null)var l=!1;else{if(e=Nt,Nt=null,Ca=0,(Ee&6)!==0)throw Error(o(331));var c=Ee;for(Ee|=4,G=e.current;G!==null;){var d=G,h=d.child;if((G.flags&16)!==0){var w=d.deletions;if(w!==null){for(var S=0;S<w.length;S++){var R=w[S];for(G=R;G!==null;){var F=G;switch(F.tag){case 0:case 11:case 15:$i(8,F,d)}var U=F.child;if(U!==null)U.return=F,G=U;else for(;G!==null;){F=G;var D=F.sibling,K=F.return;if(Qd(F),F===R){G=null;break}if(D!==null){D.return=K,G=D;break}G=K}}}var q=d.alternate;if(q!==null){var J=q.child;if(J!==null){q.child=null;do{var je=J.sibling;J.sibling=null,J=je}while(J!==null)}}G=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,G=h;else e:for(;G!==null;){if(d=G,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:$i(9,d,d.return)}var k=d.sibling;if(k!==null){k.return=d.return,G=k;break e}G=d.return}}var E=e.current;for(G=E;G!==null;){h=G;var A=h.child;if((h.subtreeFlags&2064)!==0&&A!==null)A.return=h,G=A;else e:for(h=E;G!==null;){if(w=G,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:va(9,w)}}catch(Z){Fe(w,w.return,Z)}if(w===h){G=null;break e}var z=w.sibling;if(z!==null){z.return=w.return,G=z;break e}G=w.return}}if(Ee=c,kt(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Ro,e)}catch{}l=!0}return l}finally{Oe=i,Rn.transition=t}}return!1}function dp(e,t,i){t=Lr(i,t),t=Nd(e,t,1),e=At(e,t,1),t=on(),e!==null&&(hi(e,1,t),fn(e,t))}function Fe(e,t,i){if(e.tag===3)dp(e,e,i);else for(;t!==null;){if(t.tag===3){dp(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rt===null||!Rt.has(l))){e=Lr(i,e),e=Id(t,e,1),t=At(t,e,1),e=on(),t!==null&&(hi(t,1,e),fn(t,e));break}}t=t.return}}function P0(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=on(),e.pingedLanes|=e.suspendedLanes&i,He===e&&(Ge&i)===i&&($e===4||$e===3&&(Ge&130023424)===Ge&&500>Me()-Ms?tr(e,0):Fs|=i),fn(e,t)}function pp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Io,Io<<=1,(Io&130023424)===0&&(Io=4194304)));var i=on();e=rt(e,t),e!==null&&(hi(e,t,i),fn(e,i))}function b0(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),pp(e,i)}function L0(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(o(314))}l!==null&&l.delete(t),pp(e,i)}var mp;mp=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||ln.current)un=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return un=!1,C0(e,t,i);un=(e.flags&131072)!==0}else un=!1,be&&(t.flags&1048576)!==0&&Kf(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ma(e,t),e=t.pendingProps;var c=Or(t,Xe.current);Pr(t,i),c=ms(null,t,l,e,c,i);var d=hs();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,sn(l)?(d=!0,Qo(t)):d=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ls(t),c.updater=da,t.stateNode=c,c._reactInternals=t,Cs(t,l,e,i),t=ks(null,t,l,!0,d,i)):(t.tag=0,be&&d&&Xl(t),rn(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(ma(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=F0(l),e=Mn(l,e),c){case 0:t=xs(null,t,l,e,i);break e;case 1:t=Bd(null,t,l,e,i);break e;case 11:t=Dd(null,t,l,e,i);break e;case 14:t=Fd(null,t,l,Mn(l.type,e),i);break e}throw Error(o(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:Mn(l,c),xs(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:Mn(l,c),Bd(e,t,l,c,i);case 3:e:{if(zd(t),e===null)throw Error(o(387));l=t.pendingProps,d=t.memoizedState,c=d.element,td(e,t),oa(t,l,null,i);var h=t.memoizedState;if(l=h.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){c=Lr(Error(o(423)),t),t=$d(e,t,l,i,c);break e}else if(l!==c){c=Lr(Error(o(424)),t),t=$d(e,t,l,i,c);break e}else for(Sn=Et(t.stateNode.containerInfo.firstChild),wn=t,be=!0,Fn=null,i=ed(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Rr(),l===c){t=ot(e,t,i);break e}rn(e,t,l,i)}t=t.child}return t;case 5:return od(t),e===null&&es(t),l=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,h=c.children,Hl(l,c)?h=null:d!==null&&Hl(l,d)&&(t.flags|=32),Ud(e,t),rn(e,t,h,i),t.child;case 6:return e===null&&es(t),null;case 13:return Yd(e,t,i);case 4:return ss(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Nr(t,null,l,i):rn(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:Mn(l,c),Dd(e,t,l,c,i);case 7:return rn(e,t,t.pendingProps,i),t.child;case 8:return rn(e,t,t.pendingProps.children,i),t.child;case 12:return rn(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,d=t.memoizedProps,h=c.value,Re(ta,l._currentValue),l._currentValue=h,d!==null)if(Dn(d.value,h)){if(d.children===c.children&&!ln.current){t=ot(e,t,i);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var w=d.dependencies;if(w!==null){h=d.child;for(var S=w.firstContext;S!==null;){if(S.context===l){if(d.tag===1){S=it(-1,i&-i),S.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var F=R.pending;F===null?S.next=S:(S.next=F.next,F.next=S),R.pending=S}}d.lanes|=i,S=d.alternate,S!==null&&(S.lanes|=i),os(d.return,i,t),w.lanes|=i;break}S=S.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(o(341));h.lanes|=i,w=h.alternate,w!==null&&(w.lanes|=i),os(h,i,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}rn(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,Pr(t,i),c=An(c),l=l(c),t.flags|=1,rn(e,t,l,i),t.child;case 14:return l=t.type,c=Mn(l,t.pendingProps),c=Mn(l.type,c),Fd(e,t,l,c,i);case 15:return Md(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:Mn(l,c),ma(e,t),t.tag=1,sn(l)?(e=!0,Qo(t)):e=!1,Pr(t,i),Td(t,l,c),Cs(t,l,c,i),ks(null,t,l,!0,e,i);case 19:return Hd(e,t,i);case 22:return jd(e,t,i)}throw Error(o(156,t.tag))};function hp(e,t){return Kc(e,t)}function D0(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,t,i,l){return new D0(e,t,i,l)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F0(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===se)return 11;if(e===Ae)return 14}return 2}function bt(e,t){var i=e.alternate;return i===null?(i=Nn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function ka(e,t,i,l,c,d){var h=2;if(l=e,typeof e=="function")Hs(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case ee:return ir(i.children,c,d,t);case re:h=8,c|=8;break;case de:return e=Nn(12,i,t,c|2),e.elementType=de,e.lanes=d,e;case V:return e=Nn(13,i,t,c),e.elementType=V,e.lanes=d,e;case fe:return e=Nn(19,i,t,c),e.elementType=fe,e.lanes=d,e;case he:return Oa(i,c,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:h=10;break e;case ae:h=9;break e;case se:h=11;break e;case Ae:h=14;break e;case Ce:h=16,l=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Nn(h,i,t,c),t.elementType=e,t.type=l,t.lanes=d,t}function ir(e,t,i,l){return e=Nn(7,e,l,t),e.lanes=i,e}function Oa(e,t,i,l){return e=Nn(22,e,l,t),e.elementType=he,e.lanes=i,e.stateNode={isHidden:!1},e}function Vs(e,t,i){return e=Nn(6,e,null,t),e.lanes=i,e}function Ks(e,t,i){return t=Nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Gs(e,t,i,l,c,d,h,w,S){return e=new M0(e,t,i,w,S),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Nn(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(d),e}function j0(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function vp(e){if(!e)return xt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(sn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(sn(i))return Wf(e,i,t)}return t}function gp(e,t,i,l,c,d,h,w,S){return e=Gs(i,l,!0,e,c,d,h,w,S),e.context=vp(null),i=e.current,l=on(),c=It(i),d=it(l,c),d.callback=t??null,At(i,d,c),e.current.lanes=c,hi(e,c,l),fn(e,l),e}function Aa(e,t,i,l){var c=t.current,d=on(),h=It(c);return i=vp(i),t.context===null?t.context=i:t.pendingContext=i,t=it(d,h),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=At(c,t,h),e!==null&&(Bn(e,c,h,d),ia(e,c,h)),h}function Ta(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function qs(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}function U0(){return null}var wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}Ra.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Aa(e,t,null,null)},Ra.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Aa(null,e,null,null)}),t[Zn]=null}};function Ra(e){this._internalRoot=e}Ra.prototype.unstable_scheduleHydration=function(e){if(e){var t=nf();e={blockedOn:null,target:e,priority:t};for(var i=0;i<wt.length&&t!==0&&t<wt[i].priority;i++);wt.splice(i,0,e),i===0&&of(e)}};function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function B0(e,t,i,l,c){if(c){if(typeof l=="function"){var d=l;l=function(){var R=Ta(h);d.call(R)}}var h=gp(t,l,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=h,e[Zn]=h.current,Ri(e.nodeType===8?e.parentNode:e),nr(),h}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var w=l;l=function(){var R=Ta(S);w.call(R)}}var S=Gs(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=S,e[Zn]=S.current,Ri(e.nodeType===8?e.parentNode:e),nr(function(){Aa(t,S,i,l)}),S}function Ia(e,t,i,l,c){var d=i._reactRootContainer;if(d){var h=d;if(typeof c=="function"){var w=c;c=function(){var S=Ta(h);w.call(S)}}Aa(t,h,e,c)}else h=B0(i,t,e,c,l);return Ta(h)}Zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=mi(t.pendingLanes);i!==0&&(Cl(t,i|1),fn(t,Me()),(Ee&6)===0&&(Mr=Me()+500,kt()))}break;case 13:nr(function(){var l=rt(e,1);if(l!==null){var c=on();Bn(l,e,1,c)}}),qs(e,1)}},El=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var i=on();Bn(t,e,134217728,i)}qs(e,134217728)}},ef=function(e){if(e.tag===13){var t=It(e),i=rt(e,t);if(i!==null){var l=on();Bn(i,e,t,l)}qs(e,t)}},nf=function(){return Oe},tf=function(e,t){var i=Oe;try{return Oe=e,t()}finally{Oe=i}},ml=function(e,t,i){switch(t){case"input":if(fr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=Go(l);if(!c)throw Error(o(90));_o(l),fr(l,c)}}}break;case"textarea":pr(e,i);break;case"select":t=i.value,t!=null&&bn(e,!!i.multiple,t,!1)}},Bc=$s,zc=nr;var z0={usingClientEntryPoint:!1,Events:[Pi,xr,Go,jc,Uc,$s]},Vi={findFiberByHostInstance:Kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$0={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Ro=Pa.inject($0),Yn=Pa}catch{}}return dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0,dn.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xs(t))throw Error(o(200));return j0(e,t,null,i)},dn.createRoot=function(e,t){if(!Xs(e))throw Error(o(299));var i=!1,l="",c=wp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Gs(e,1,!1,null,null,i,!1,l,c),e[Zn]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Qs(t)},dn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Hc(t),e=e===null?null:e.stateNode,e},dn.flushSync=function(e){return nr(e)},dn.hydrate=function(e,t,i){if(!Na(t))throw Error(o(200));return Ia(null,e,t,!0,i)},dn.hydrateRoot=function(e,t,i){if(!Xs(e))throw Error(o(405));var l=i!=null&&i.hydratedSources||null,c=!1,d="",h=wp;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),t=gp(t,null,e,1,i??null,c,!1,d,h),e[Zn]=t.current,Ri(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new Ra(t)},dn.render=function(e,t,i){if(!Na(t))throw Error(o(200));return Ia(null,e,t,!1,i)},dn.unmountComponentAtNode=function(e){if(!Na(e))throw Error(o(40));return e._reactRootContainer?(nr(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1},dn.unstable_batchedUpdates=$s,dn.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!Na(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ia(e,t,i,!1,l)},dn.version="18.3.1-next-f1338f8080-20240426",dn}var Tp;function Q0(){if(Tp)return eu.exports;Tp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),eu.exports=q0(),eu.exports}var Rp;function X0(){if(Rp)return ba;Rp=1;var n=Q0();return ba.createRoot=n.createRoot,ba.hydrateRoot=n.hydrateRoot,ba}var J0=X0();const Z0=mo(J0);function Xm(n){return typeof n>"u"||n===null}function e1(n){return typeof n=="object"&&n!==null}function n1(n){return Array.isArray(n)?n:Xm(n)?[]:[n]}function t1(n,r){var o,a,s,u;if(r)for(u=Object.keys(r),o=0,a=u.length;o<a;o+=1)s=u[o],n[s]=r[s];return n}function r1(n,r){var o="",a;for(a=0;a<r;a+=1)o+=n;return o}function i1(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var o1=Xm,a1=e1,l1=n1,s1=r1,u1=i1,c1=t1,Ye={isNothing:o1,isObject:a1,toArray:l1,repeat:s1,isNegativeZero:u1,extend:c1};function Jm(n,r){var o="",a=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(o+='in "'+n.mark.name+'" '),o+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!r&&n.mark.snippet&&(o+=`

`+n.mark.snippet),a+" "+o):a}function oo(n,r){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=r,this.message=Jm(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}oo.prototype=Object.create(Error.prototype);oo.prototype.constructor=oo;oo.prototype.toString=function(r){return this.name+": "+Jm(this,r)};var an=oo;function ru(n,r,o,a,s){var u="",f="",p=Math.floor(s/2)-1;return a-r>p&&(u=" ... ",r=a-p+u.length),o-a>p&&(f=" ...",o=a+p-f.length),{str:u+n.slice(r,o).replace(/\t/g,"→")+f,pos:a-r+u.length}}function iu(n,r){return Ye.repeat(" ",r-n.length)+n}function f1(n,r){if(r=Object.create(r||null),!n.buffer)return null;r.maxLength||(r.maxLength=79),typeof r.indent!="number"&&(r.indent=1),typeof r.linesBefore!="number"&&(r.linesBefore=3),typeof r.linesAfter!="number"&&(r.linesAfter=2);for(var o=/\r?\n|\r|\0/g,a=[0],s=[],u,f=-1;u=o.exec(n.buffer);)s.push(u.index),a.push(u.index+u[0].length),n.position<=u.index&&f<0&&(f=a.length-2);f<0&&(f=a.length-1);var p="",m,v,g=Math.min(n.line+r.linesAfter,s.length).toString().length,y=r.maxLength-(r.indent+g+3);for(m=1;m<=r.linesBefore&&!(f-m<0);m++)v=ru(n.buffer,a[f-m],s[f-m],n.position-(a[f]-a[f-m]),y),p=Ye.repeat(" ",r.indent)+iu((n.line-m+1).toString(),g)+" | "+v.str+`
`+p;for(v=ru(n.buffer,a[f],s[f],n.position,y),p+=Ye.repeat(" ",r.indent)+iu((n.line+1).toString(),g)+" | "+v.str+`
`,p+=Ye.repeat("-",r.indent+g+3+v.pos)+`^
`,m=1;m<=r.linesAfter&&!(f+m>=s.length);m++)v=ru(n.buffer,a[f+m],s[f+m],n.position-(a[f]-a[f+m]),y),p+=Ye.repeat(" ",r.indent)+iu((n.line+m+1).toString(),g)+" | "+v.str+`
`;return p.replace(/\n$/,"")}var d1=f1,p1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],m1=["scalar","sequence","mapping"];function h1(n){var r={};return n!==null&&Object.keys(n).forEach(function(o){n[o].forEach(function(a){r[String(a)]=o})}),r}function v1(n,r){if(r=r||{},Object.keys(r).forEach(function(o){if(p1.indexOf(o)===-1)throw new an('Unknown option "'+o+'" is met in definition of "'+n+'" YAML type.')}),this.options=r,this.tag=n,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(o){return o},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.representName=r.representName||null,this.defaultStyle=r.defaultStyle||null,this.multi=r.multi||!1,this.styleAliases=h1(r.styleAliases||null),m1.indexOf(this.kind)===-1)throw new an('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var qe=v1;function Np(n,r){var o=[];return n[r].forEach(function(a){var s=o.length;o.forEach(function(u,f){u.tag===a.tag&&u.kind===a.kind&&u.multi===a.multi&&(s=f)}),o[s]=a}),o}function g1(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},r,o;function a(s){s.multi?(n.multi[s.kind].push(s),n.multi.fallback.push(s)):n[s.kind][s.tag]=n.fallback[s.tag]=s}for(r=0,o=arguments.length;r<o;r+=1)arguments[r].forEach(a);return n}function Ou(n){return this.extend(n)}Ou.prototype.extend=function(r){var o=[],a=[];if(r instanceof qe)a.push(r);else if(Array.isArray(r))a=a.concat(r);else if(r&&(Array.isArray(r.implicit)||Array.isArray(r.explicit)))r.implicit&&(o=o.concat(r.implicit)),r.explicit&&(a=a.concat(r.explicit));else throw new an("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(u){if(!(u instanceof qe))throw new an("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(u.loadKind&&u.loadKind!=="scalar")throw new an("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(u.multi)throw new an("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),a.forEach(function(u){if(!(u instanceof qe))throw new an("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var s=Object.create(Ou.prototype);return s.implicit=(this.implicit||[]).concat(o),s.explicit=(this.explicit||[]).concat(a),s.compiledImplicit=Np(s,"implicit"),s.compiledExplicit=Np(s,"explicit"),s.compiledTypeMap=g1(s.compiledImplicit,s.compiledExplicit),s};var Zm=Ou,eh=new qe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),nh=new qe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),th=new qe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),rh=new Zm({explicit:[eh,nh,th]});function y1(n){if(n===null)return!0;var r=n.length;return r===1&&n==="~"||r===4&&(n==="null"||n==="Null"||n==="NULL")}function w1(){return null}function S1(n){return n===null}var ih=new qe("tag:yaml.org,2002:null",{kind:"scalar",resolve:y1,construct:w1,predicate:S1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function C1(n){if(n===null)return!1;var r=n.length;return r===4&&(n==="true"||n==="True"||n==="TRUE")||r===5&&(n==="false"||n==="False"||n==="FALSE")}function E1(n){return n==="true"||n==="True"||n==="TRUE"}function _1(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var oh=new qe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:C1,construct:E1,predicate:_1,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function x1(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function k1(n){return 48<=n&&n<=55}function O1(n){return 48<=n&&n<=57}function A1(n){if(n===null)return!1;var r=n.length,o=0,a=!1,s;if(!r)return!1;if(s=n[o],(s==="-"||s==="+")&&(s=n[++o]),s==="0"){if(o+1===r)return!0;if(s=n[++o],s==="b"){for(o++;o<r;o++)if(s=n[o],s!=="_"){if(s!=="0"&&s!=="1")return!1;a=!0}return a&&s!=="_"}if(s==="x"){for(o++;o<r;o++)if(s=n[o],s!=="_"){if(!x1(n.charCodeAt(o)))return!1;a=!0}return a&&s!=="_"}if(s==="o"){for(o++;o<r;o++)if(s=n[o],s!=="_"){if(!k1(n.charCodeAt(o)))return!1;a=!0}return a&&s!=="_"}}if(s==="_")return!1;for(;o<r;o++)if(s=n[o],s!=="_"){if(!O1(n.charCodeAt(o)))return!1;a=!0}return!(!a||s==="_")}function T1(n){var r=n,o=1,a;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),a=r[0],(a==="-"||a==="+")&&(a==="-"&&(o=-1),r=r.slice(1),a=r[0]),r==="0")return 0;if(a==="0"){if(r[1]==="b")return o*parseInt(r.slice(2),2);if(r[1]==="x")return o*parseInt(r.slice(2),16);if(r[1]==="o")return o*parseInt(r.slice(2),8)}return o*parseInt(r,10)}function R1(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Ye.isNegativeZero(n)}var ah=new qe("tag:yaml.org,2002:int",{kind:"scalar",resolve:A1,construct:T1,predicate:R1,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),N1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function I1(n){return!(n===null||!N1.test(n)||n[n.length-1]==="_")}function P1(n){var r,o;return r=n.replace(/_/g,"").toLowerCase(),o=r[0]==="-"?-1:1,"+-".indexOf(r[0])>=0&&(r=r.slice(1)),r===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:r===".nan"?NaN:o*parseFloat(r,10)}var b1=/^[-+]?[0-9]+e/;function L1(n,r){var o;if(isNaN(n))switch(r){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(r){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(r){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ye.isNegativeZero(n))return"-0.0";return o=n.toString(10),b1.test(o)?o.replace("e",".e"):o}function D1(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Ye.isNegativeZero(n))}var lh=new qe("tag:yaml.org,2002:float",{kind:"scalar",resolve:I1,construct:P1,predicate:D1,represent:L1,defaultStyle:"lowercase"}),sh=rh.extend({implicit:[ih,oh,ah,lh]}),uh=sh,ch=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),fh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function F1(n){return n===null?!1:ch.exec(n)!==null||fh.exec(n)!==null}function M1(n){var r,o,a,s,u,f,p,m=0,v=null,g,y,C;if(r=ch.exec(n),r===null&&(r=fh.exec(n)),r===null)throw new Error("Date resolve error");if(o=+r[1],a=+r[2]-1,s=+r[3],!r[4])return new Date(Date.UTC(o,a,s));if(u=+r[4],f=+r[5],p=+r[6],r[7]){for(m=r[7].slice(0,3);m.length<3;)m+="0";m=+m}return r[9]&&(g=+r[10],y=+(r[11]||0),v=(g*60+y)*6e4,r[9]==="-"&&(v=-v)),C=new Date(Date.UTC(o,a,s,u,f,p,m)),v&&C.setTime(C.getTime()-v),C}function j1(n){return n.toISOString()}var dh=new qe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:F1,construct:M1,instanceOf:Date,represent:j1});function U1(n){return n==="<<"||n===null}var ph=new qe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:U1}),Zu=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function B1(n){if(n===null)return!1;var r,o,a=0,s=n.length,u=Zu;for(o=0;o<s;o++)if(r=u.indexOf(n.charAt(o)),!(r>64)){if(r<0)return!1;a+=6}return a%8===0}function z1(n){var r,o,a=n.replace(/[\r\n=]/g,""),s=a.length,u=Zu,f=0,p=[];for(r=0;r<s;r++)r%4===0&&r&&(p.push(f>>16&255),p.push(f>>8&255),p.push(f&255)),f=f<<6|u.indexOf(a.charAt(r));return o=s%4*6,o===0?(p.push(f>>16&255),p.push(f>>8&255),p.push(f&255)):o===18?(p.push(f>>10&255),p.push(f>>2&255)):o===12&&p.push(f>>4&255),new Uint8Array(p)}function $1(n){var r="",o=0,a,s,u=n.length,f=Zu;for(a=0;a<u;a++)a%3===0&&a&&(r+=f[o>>18&63],r+=f[o>>12&63],r+=f[o>>6&63],r+=f[o&63]),o=(o<<8)+n[a];return s=u%3,s===0?(r+=f[o>>18&63],r+=f[o>>12&63],r+=f[o>>6&63],r+=f[o&63]):s===2?(r+=f[o>>10&63],r+=f[o>>4&63],r+=f[o<<2&63],r+=f[64]):s===1&&(r+=f[o>>2&63],r+=f[o<<4&63],r+=f[64],r+=f[64]),r}function Y1(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var mh=new qe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:B1,construct:z1,predicate:Y1,represent:$1}),W1=Object.prototype.hasOwnProperty,H1=Object.prototype.toString;function V1(n){if(n===null)return!0;var r=[],o,a,s,u,f,p=n;for(o=0,a=p.length;o<a;o+=1){if(s=p[o],f=!1,H1.call(s)!=="[object Object]")return!1;for(u in s)if(W1.call(s,u))if(!f)f=!0;else return!1;if(!f)return!1;if(r.indexOf(u)===-1)r.push(u);else return!1}return!0}function K1(n){return n!==null?n:[]}var hh=new qe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:V1,construct:K1}),G1=Object.prototype.toString;function q1(n){if(n===null)return!0;var r,o,a,s,u,f=n;for(u=new Array(f.length),r=0,o=f.length;r<o;r+=1){if(a=f[r],G1.call(a)!=="[object Object]"||(s=Object.keys(a),s.length!==1))return!1;u[r]=[s[0],a[s[0]]]}return!0}function Q1(n){if(n===null)return[];var r,o,a,s,u,f=n;for(u=new Array(f.length),r=0,o=f.length;r<o;r+=1)a=f[r],s=Object.keys(a),u[r]=[s[0],a[s[0]]];return u}var vh=new qe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:q1,construct:Q1}),X1=Object.prototype.hasOwnProperty;function J1(n){if(n===null)return!0;var r,o=n;for(r in o)if(X1.call(o,r)&&o[r]!==null)return!1;return!0}function Z1(n){return n!==null?n:{}}var gh=new qe("tag:yaml.org,2002:set",{kind:"mapping",resolve:J1,construct:Z1}),ec=uh.extend({implicit:[dh,ph],explicit:[mh,hh,vh,gh]}),jt=Object.prototype.hasOwnProperty,Ya=1,yh=2,wh=3,Wa=4,ou=1,ew=2,Ip=3,nw=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,tw=/[\x85\u2028\u2029]/,rw=/[,\[\]\{\}]/,Sh=/^(?:!|!!|![a-z\-]+!)$/i,Ch=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Pp(n){return Object.prototype.toString.call(n)}function Qn(n){return n===10||n===13}function ar(n){return n===9||n===32}function pn(n){return n===9||n===32||n===10||n===13}function Yr(n){return n===44||n===91||n===93||n===123||n===125}function iw(n){var r;return 48<=n&&n<=57?n-48:(r=n|32,97<=r&&r<=102?r-97+10:-1)}function ow(n){return n===120?2:n===117?4:n===85?8:0}function aw(n){return 48<=n&&n<=57?n-48:-1}function bp(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}function lw(n){return n<=65535?String.fromCharCode(n):String.fromCharCode((n-65536>>10)+55296,(n-65536&1023)+56320)}function Eh(n,r,o){r==="__proto__"?Object.defineProperty(n,r,{configurable:!0,enumerable:!0,writable:!0,value:o}):n[r]=o}var _h=new Array(256),xh=new Array(256);for(var Ur=0;Ur<256;Ur++)_h[Ur]=bp(Ur)?1:0,xh[Ur]=bp(Ur);function sw(n,r){this.input=n,this.filename=r.filename||null,this.schema=r.schema||ec,this.onWarning=r.onWarning||null,this.legacy=r.legacy||!1,this.json=r.json||!1,this.listener=r.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=n.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function kh(n,r){var o={name:n.filename,buffer:n.input.slice(0,-1),position:n.position,line:n.line,column:n.position-n.lineStart};return o.snippet=d1(o),new an(r,o)}function ne(n,r){throw kh(n,r)}function Ha(n,r){n.onWarning&&n.onWarning.call(null,kh(n,r))}var Lp={YAML:function(r,o,a){var s,u,f;r.version!==null&&ne(r,"duplication of %YAML directive"),a.length!==1&&ne(r,"YAML directive accepts exactly one argument"),s=/^([0-9]+)\.([0-9]+)$/.exec(a[0]),s===null&&ne(r,"ill-formed argument of the YAML directive"),u=parseInt(s[1],10),f=parseInt(s[2],10),u!==1&&ne(r,"unacceptable YAML version of the document"),r.version=a[0],r.checkLineBreaks=f<2,f!==1&&f!==2&&Ha(r,"unsupported YAML version of the document")},TAG:function(r,o,a){var s,u;a.length!==2&&ne(r,"TAG directive accepts exactly two arguments"),s=a[0],u=a[1],Sh.test(s)||ne(r,"ill-formed tag handle (first argument) of the TAG directive"),jt.call(r.tagMap,s)&&ne(r,'there is a previously declared suffix for "'+s+'" tag handle'),Ch.test(u)||ne(r,"ill-formed tag prefix (second argument) of the TAG directive");try{u=decodeURIComponent(u)}catch{ne(r,"tag prefix is malformed: "+u)}r.tagMap[s]=u}};function Ft(n,r,o,a){var s,u,f,p;if(r<o){if(p=n.input.slice(r,o),a)for(s=0,u=p.length;s<u;s+=1)f=p.charCodeAt(s),f===9||32<=f&&f<=1114111||ne(n,"expected valid JSON character");else nw.test(p)&&ne(n,"the stream contains non-printable characters");n.result+=p}}function Dp(n,r,o,a){var s,u,f,p;for(Ye.isObject(o)||ne(n,"cannot merge mappings; the provided source object is unacceptable"),s=Object.keys(o),f=0,p=s.length;f<p;f+=1)u=s[f],jt.call(r,u)||(Eh(r,u,o[u]),a[u]=!0)}function Wr(n,r,o,a,s,u,f,p,m){var v,g;if(Array.isArray(s))for(s=Array.prototype.slice.call(s),v=0,g=s.length;v<g;v+=1)Array.isArray(s[v])&&ne(n,"nested arrays are not supported inside keys"),typeof s=="object"&&Pp(s[v])==="[object Object]"&&(s[v]="[object Object]");if(typeof s=="object"&&Pp(s)==="[object Object]"&&(s="[object Object]"),s=String(s),r===null&&(r={}),a==="tag:yaml.org,2002:merge")if(Array.isArray(u))for(v=0,g=u.length;v<g;v+=1)Dp(n,r,u[v],o);else Dp(n,r,u,o);else!n.json&&!jt.call(o,s)&&jt.call(r,s)&&(n.line=f||n.line,n.lineStart=p||n.lineStart,n.position=m||n.position,ne(n,"duplicated mapping key")),Eh(r,s,u),delete o[s];return r}function nc(n){var r;r=n.input.charCodeAt(n.position),r===10?n.position++:r===13?(n.position++,n.input.charCodeAt(n.position)===10&&n.position++):ne(n,"a line break is expected"),n.line+=1,n.lineStart=n.position,n.firstTabInLine=-1}function Be(n,r,o){for(var a=0,s=n.input.charCodeAt(n.position);s!==0;){for(;ar(s);)s===9&&n.firstTabInLine===-1&&(n.firstTabInLine=n.position),s=n.input.charCodeAt(++n.position);if(r&&s===35)do s=n.input.charCodeAt(++n.position);while(s!==10&&s!==13&&s!==0);if(Qn(s))for(nc(n),s=n.input.charCodeAt(n.position),a++,n.lineIndent=0;s===32;)n.lineIndent++,s=n.input.charCodeAt(++n.position);else break}return o!==-1&&a!==0&&n.lineIndent<o&&Ha(n,"deficient indentation"),a}function nl(n){var r=n.position,o;return o=n.input.charCodeAt(r),!!((o===45||o===46)&&o===n.input.charCodeAt(r+1)&&o===n.input.charCodeAt(r+2)&&(r+=3,o=n.input.charCodeAt(r),o===0||pn(o)))}function tc(n,r){r===1?n.result+=" ":r>1&&(n.result+=Ye.repeat(`
`,r-1))}function uw(n,r,o){var a,s,u,f,p,m,v,g,y=n.kind,C=n.result,_;if(_=n.input.charCodeAt(n.position),pn(_)||Yr(_)||_===35||_===38||_===42||_===33||_===124||_===62||_===39||_===34||_===37||_===64||_===96||(_===63||_===45)&&(s=n.input.charCodeAt(n.position+1),pn(s)||o&&Yr(s)))return!1;for(n.kind="scalar",n.result="",u=f=n.position,p=!1;_!==0;){if(_===58){if(s=n.input.charCodeAt(n.position+1),pn(s)||o&&Yr(s))break}else if(_===35){if(a=n.input.charCodeAt(n.position-1),pn(a))break}else{if(n.position===n.lineStart&&nl(n)||o&&Yr(_))break;if(Qn(_))if(m=n.line,v=n.lineStart,g=n.lineIndent,Be(n,!1,-1),n.lineIndent>=r){p=!0,_=n.input.charCodeAt(n.position);continue}else{n.position=f,n.line=m,n.lineStart=v,n.lineIndent=g;break}}p&&(Ft(n,u,f,!1),tc(n,n.line-m),u=f=n.position,p=!1),ar(_)||(f=n.position+1),_=n.input.charCodeAt(++n.position)}return Ft(n,u,f,!1),n.result?!0:(n.kind=y,n.result=C,!1)}function cw(n,r){var o,a,s;if(o=n.input.charCodeAt(n.position),o!==39)return!1;for(n.kind="scalar",n.result="",n.position++,a=s=n.position;(o=n.input.charCodeAt(n.position))!==0;)if(o===39)if(Ft(n,a,n.position,!0),o=n.input.charCodeAt(++n.position),o===39)a=n.position,n.position++,s=n.position;else return!0;else Qn(o)?(Ft(n,a,s,!0),tc(n,Be(n,!1,r)),a=s=n.position):n.position===n.lineStart&&nl(n)?ne(n,"unexpected end of the document within a single quoted scalar"):(n.position++,s=n.position);ne(n,"unexpected end of the stream within a single quoted scalar")}function fw(n,r){var o,a,s,u,f,p;if(p=n.input.charCodeAt(n.position),p!==34)return!1;for(n.kind="scalar",n.result="",n.position++,o=a=n.position;(p=n.input.charCodeAt(n.position))!==0;){if(p===34)return Ft(n,o,n.position,!0),n.position++,!0;if(p===92){if(Ft(n,o,n.position,!0),p=n.input.charCodeAt(++n.position),Qn(p))Be(n,!1,r);else if(p<256&&_h[p])n.result+=xh[p],n.position++;else if((f=ow(p))>0){for(s=f,u=0;s>0;s--)p=n.input.charCodeAt(++n.position),(f=iw(p))>=0?u=(u<<4)+f:ne(n,"expected hexadecimal character");n.result+=lw(u),n.position++}else ne(n,"unknown escape sequence");o=a=n.position}else Qn(p)?(Ft(n,o,a,!0),tc(n,Be(n,!1,r)),o=a=n.position):n.position===n.lineStart&&nl(n)?ne(n,"unexpected end of the document within a double quoted scalar"):(n.position++,a=n.position)}ne(n,"unexpected end of the stream within a double quoted scalar")}function dw(n,r){var o=!0,a,s,u,f=n.tag,p,m=n.anchor,v,g,y,C,_,I=Object.create(null),N,T,M,b;if(b=n.input.charCodeAt(n.position),b===91)g=93,_=!1,p=[];else if(b===123)g=125,_=!0,p={};else return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=p),b=n.input.charCodeAt(++n.position);b!==0;){if(Be(n,!0,r),b=n.input.charCodeAt(n.position),b===g)return n.position++,n.tag=f,n.anchor=m,n.kind=_?"mapping":"sequence",n.result=p,!0;o?b===44&&ne(n,"expected the node content, but found ','"):ne(n,"missed comma between flow collection entries"),T=N=M=null,y=C=!1,b===63&&(v=n.input.charCodeAt(n.position+1),pn(v)&&(y=C=!0,n.position++,Be(n,!0,r))),a=n.line,s=n.lineStart,u=n.position,qr(n,r,Ya,!1,!0),T=n.tag,N=n.result,Be(n,!0,r),b=n.input.charCodeAt(n.position),(C||n.line===a)&&b===58&&(y=!0,b=n.input.charCodeAt(++n.position),Be(n,!0,r),qr(n,r,Ya,!1,!0),M=n.result),_?Wr(n,p,I,T,N,M,a,s,u):y?p.push(Wr(n,null,I,T,N,M,a,s,u)):p.push(N),Be(n,!0,r),b=n.input.charCodeAt(n.position),b===44?(o=!0,b=n.input.charCodeAt(++n.position)):o=!1}ne(n,"unexpected end of the stream within a flow collection")}function pw(n,r){var o,a,s=ou,u=!1,f=!1,p=r,m=0,v=!1,g,y;if(y=n.input.charCodeAt(n.position),y===124)a=!1;else if(y===62)a=!0;else return!1;for(n.kind="scalar",n.result="";y!==0;)if(y=n.input.charCodeAt(++n.position),y===43||y===45)ou===s?s=y===43?Ip:ew:ne(n,"repeat of a chomping mode identifier");else if((g=aw(y))>=0)g===0?ne(n,"bad explicit indentation width of a block scalar; it cannot be less than one"):f?ne(n,"repeat of an indentation width identifier"):(p=r+g-1,f=!0);else break;if(ar(y)){do y=n.input.charCodeAt(++n.position);while(ar(y));if(y===35)do y=n.input.charCodeAt(++n.position);while(!Qn(y)&&y!==0)}for(;y!==0;){for(nc(n),n.lineIndent=0,y=n.input.charCodeAt(n.position);(!f||n.lineIndent<p)&&y===32;)n.lineIndent++,y=n.input.charCodeAt(++n.position);if(!f&&n.lineIndent>p&&(p=n.lineIndent),Qn(y)){m++;continue}if(n.lineIndent<p){s===Ip?n.result+=Ye.repeat(`
`,u?1+m:m):s===ou&&u&&(n.result+=`
`);break}for(a?ar(y)?(v=!0,n.result+=Ye.repeat(`
`,u?1+m:m)):v?(v=!1,n.result+=Ye.repeat(`
`,m+1)):m===0?u&&(n.result+=" "):n.result+=Ye.repeat(`
`,m):n.result+=Ye.repeat(`
`,u?1+m:m),u=!0,f=!0,m=0,o=n.position;!Qn(y)&&y!==0;)y=n.input.charCodeAt(++n.position);Ft(n,o,n.position,!1)}return!0}function Fp(n,r){var o,a=n.tag,s=n.anchor,u=[],f,p=!1,m;if(n.firstTabInLine!==-1)return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=u),m=n.input.charCodeAt(n.position);m!==0&&(n.firstTabInLine!==-1&&(n.position=n.firstTabInLine,ne(n,"tab characters must not be used in indentation")),!(m!==45||(f=n.input.charCodeAt(n.position+1),!pn(f))));){if(p=!0,n.position++,Be(n,!0,-1)&&n.lineIndent<=r){u.push(null),m=n.input.charCodeAt(n.position);continue}if(o=n.line,qr(n,r,wh,!1,!0),u.push(n.result),Be(n,!0,-1),m=n.input.charCodeAt(n.position),(n.line===o||n.lineIndent>r)&&m!==0)ne(n,"bad indentation of a sequence entry");else if(n.lineIndent<r)break}return p?(n.tag=a,n.anchor=s,n.kind="sequence",n.result=u,!0):!1}function mw(n,r,o){var a,s,u,f,p,m,v=n.tag,g=n.anchor,y={},C=Object.create(null),_=null,I=null,N=null,T=!1,M=!1,b;if(n.firstTabInLine!==-1)return!1;for(n.anchor!==null&&(n.anchorMap[n.anchor]=y),b=n.input.charCodeAt(n.position);b!==0;){if(!T&&n.firstTabInLine!==-1&&(n.position=n.firstTabInLine,ne(n,"tab characters must not be used in indentation")),a=n.input.charCodeAt(n.position+1),u=n.line,(b===63||b===58)&&pn(a))b===63?(T&&(Wr(n,y,C,_,I,null,f,p,m),_=I=N=null),M=!0,T=!0,s=!0):T?(T=!1,s=!0):ne(n,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),n.position+=1,b=a;else{if(f=n.line,p=n.lineStart,m=n.position,!qr(n,o,yh,!1,!0))break;if(n.line===u){for(b=n.input.charCodeAt(n.position);ar(b);)b=n.input.charCodeAt(++n.position);if(b===58)b=n.input.charCodeAt(++n.position),pn(b)||ne(n,"a whitespace character is expected after the key-value separator within a block mapping"),T&&(Wr(n,y,C,_,I,null,f,p,m),_=I=N=null),M=!0,T=!1,s=!1,_=n.tag,I=n.result;else if(M)ne(n,"can not read an implicit mapping pair; a colon is missed");else return n.tag=v,n.anchor=g,!0}else if(M)ne(n,"can not read a block mapping entry; a multiline key may not be an implicit key");else return n.tag=v,n.anchor=g,!0}if((n.line===u||n.lineIndent>r)&&(T&&(f=n.line,p=n.lineStart,m=n.position),qr(n,r,Wa,!0,s)&&(T?I=n.result:N=n.result),T||(Wr(n,y,C,_,I,N,f,p,m),_=I=N=null),Be(n,!0,-1),b=n.input.charCodeAt(n.position)),(n.line===u||n.lineIndent>r)&&b!==0)ne(n,"bad indentation of a mapping entry");else if(n.lineIndent<r)break}return T&&Wr(n,y,C,_,I,null,f,p,m),M&&(n.tag=v,n.anchor=g,n.kind="mapping",n.result=y),M}function hw(n){var r,o=!1,a=!1,s,u,f;if(f=n.input.charCodeAt(n.position),f!==33)return!1;if(n.tag!==null&&ne(n,"duplication of a tag property"),f=n.input.charCodeAt(++n.position),f===60?(o=!0,f=n.input.charCodeAt(++n.position)):f===33?(a=!0,s="!!",f=n.input.charCodeAt(++n.position)):s="!",r=n.position,o){do f=n.input.charCodeAt(++n.position);while(f!==0&&f!==62);n.position<n.length?(u=n.input.slice(r,n.position),f=n.input.charCodeAt(++n.position)):ne(n,"unexpected end of the stream within a verbatim tag")}else{for(;f!==0&&!pn(f);)f===33&&(a?ne(n,"tag suffix cannot contain exclamation marks"):(s=n.input.slice(r-1,n.position+1),Sh.test(s)||ne(n,"named tag handle cannot contain such characters"),a=!0,r=n.position+1)),f=n.input.charCodeAt(++n.position);u=n.input.slice(r,n.position),rw.test(u)&&ne(n,"tag suffix cannot contain flow indicator characters")}u&&!Ch.test(u)&&ne(n,"tag name cannot contain such characters: "+u);try{u=decodeURIComponent(u)}catch{ne(n,"tag name is malformed: "+u)}return o?n.tag=u:jt.call(n.tagMap,s)?n.tag=n.tagMap[s]+u:s==="!"?n.tag="!"+u:s==="!!"?n.tag="tag:yaml.org,2002:"+u:ne(n,'undeclared tag handle "'+s+'"'),!0}function vw(n){var r,o;if(o=n.input.charCodeAt(n.position),o!==38)return!1;for(n.anchor!==null&&ne(n,"duplication of an anchor property"),o=n.input.charCodeAt(++n.position),r=n.position;o!==0&&!pn(o)&&!Yr(o);)o=n.input.charCodeAt(++n.position);return n.position===r&&ne(n,"name of an anchor node must contain at least one character"),n.anchor=n.input.slice(r,n.position),!0}function gw(n){var r,o,a;if(a=n.input.charCodeAt(n.position),a!==42)return!1;for(a=n.input.charCodeAt(++n.position),r=n.position;a!==0&&!pn(a)&&!Yr(a);)a=n.input.charCodeAt(++n.position);return n.position===r&&ne(n,"name of an alias node must contain at least one character"),o=n.input.slice(r,n.position),jt.call(n.anchorMap,o)||ne(n,'unidentified alias "'+o+'"'),n.result=n.anchorMap[o],Be(n,!0,-1),!0}function qr(n,r,o,a,s){var u,f,p,m=1,v=!1,g=!1,y,C,_,I,N,T;if(n.listener!==null&&n.listener("open",n),n.tag=null,n.anchor=null,n.kind=null,n.result=null,u=f=p=Wa===o||wh===o,a&&Be(n,!0,-1)&&(v=!0,n.lineIndent>r?m=1:n.lineIndent===r?m=0:n.lineIndent<r&&(m=-1)),m===1)for(;hw(n)||vw(n);)Be(n,!0,-1)?(v=!0,p=u,n.lineIndent>r?m=1:n.lineIndent===r?m=0:n.lineIndent<r&&(m=-1)):p=!1;if(p&&(p=v||s),(m===1||Wa===o)&&(Ya===o||yh===o?N=r:N=r+1,T=n.position-n.lineStart,m===1?p&&(Fp(n,T)||mw(n,T,N))||dw(n,N)?g=!0:(f&&pw(n,N)||cw(n,N)||fw(n,N)?g=!0:gw(n)?(g=!0,(n.tag!==null||n.anchor!==null)&&ne(n,"alias node should not have any properties")):uw(n,N,Ya===o)&&(g=!0,n.tag===null&&(n.tag="?")),n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):m===0&&(g=p&&Fp(n,T))),n.tag===null)n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);else if(n.tag==="?"){for(n.result!==null&&n.kind!=="scalar"&&ne(n,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+n.kind+'"'),y=0,C=n.implicitTypes.length;y<C;y+=1)if(I=n.implicitTypes[y],I.resolve(n.result)){n.result=I.construct(n.result),n.tag=I.tag,n.anchor!==null&&(n.anchorMap[n.anchor]=n.result);break}}else if(n.tag!=="!"){if(jt.call(n.typeMap[n.kind||"fallback"],n.tag))I=n.typeMap[n.kind||"fallback"][n.tag];else for(I=null,_=n.typeMap.multi[n.kind||"fallback"],y=0,C=_.length;y<C;y+=1)if(n.tag.slice(0,_[y].tag.length)===_[y].tag){I=_[y];break}I||ne(n,"unknown tag !<"+n.tag+">"),n.result!==null&&I.kind!==n.kind&&ne(n,"unacceptable node kind for !<"+n.tag+'> tag; it should be "'+I.kind+'", not "'+n.kind+'"'),I.resolve(n.result,n.tag)?(n.result=I.construct(n.result,n.tag),n.anchor!==null&&(n.anchorMap[n.anchor]=n.result)):ne(n,"cannot resolve a node with !<"+n.tag+"> explicit tag")}return n.listener!==null&&n.listener("close",n),n.tag!==null||n.anchor!==null||g}function yw(n){var r=n.position,o,a,s,u=!1,f;for(n.version=null,n.checkLineBreaks=n.legacy,n.tagMap=Object.create(null),n.anchorMap=Object.create(null);(f=n.input.charCodeAt(n.position))!==0&&(Be(n,!0,-1),f=n.input.charCodeAt(n.position),!(n.lineIndent>0||f!==37));){for(u=!0,f=n.input.charCodeAt(++n.position),o=n.position;f!==0&&!pn(f);)f=n.input.charCodeAt(++n.position);for(a=n.input.slice(o,n.position),s=[],a.length<1&&ne(n,"directive name must not be less than one character in length");f!==0;){for(;ar(f);)f=n.input.charCodeAt(++n.position);if(f===35){do f=n.input.charCodeAt(++n.position);while(f!==0&&!Qn(f));break}if(Qn(f))break;for(o=n.position;f!==0&&!pn(f);)f=n.input.charCodeAt(++n.position);s.push(n.input.slice(o,n.position))}f!==0&&nc(n),jt.call(Lp,a)?Lp[a](n,a,s):Ha(n,'unknown document directive "'+a+'"')}if(Be(n,!0,-1),n.lineIndent===0&&n.input.charCodeAt(n.position)===45&&n.input.charCodeAt(n.position+1)===45&&n.input.charCodeAt(n.position+2)===45?(n.position+=3,Be(n,!0,-1)):u&&ne(n,"directives end mark is expected"),qr(n,n.lineIndent-1,Wa,!1,!0),Be(n,!0,-1),n.checkLineBreaks&&tw.test(n.input.slice(r,n.position))&&Ha(n,"non-ASCII line breaks are interpreted as content"),n.documents.push(n.result),n.position===n.lineStart&&nl(n)){n.input.charCodeAt(n.position)===46&&(n.position+=3,Be(n,!0,-1));return}if(n.position<n.length-1)ne(n,"end of the stream or a document separator is expected");else return}function Oh(n,r){n=String(n),r=r||{},n.length!==0&&(n.charCodeAt(n.length-1)!==10&&n.charCodeAt(n.length-1)!==13&&(n+=`
`),n.charCodeAt(0)===65279&&(n=n.slice(1)));var o=new sw(n,r),a=n.indexOf("\0");for(a!==-1&&(o.position=a,ne(o,"null byte is not allowed in input")),o.input+="\0";o.input.charCodeAt(o.position)===32;)o.lineIndent+=1,o.position+=1;for(;o.position<o.length-1;)yw(o);return o.documents}function ww(n,r,o){r!==null&&typeof r=="object"&&typeof o>"u"&&(o=r,r=null);var a=Oh(n,o);if(typeof r!="function")return a;for(var s=0,u=a.length;s<u;s+=1)r(a[s])}function Sw(n,r){var o=Oh(n,r);if(o.length!==0){if(o.length===1)return o[0];throw new an("expected a single document in the stream, but found more")}}var Cw=ww,Ew=Sw,Ah={loadAll:Cw,load:Ew},Th=Object.prototype.toString,Rh=Object.prototype.hasOwnProperty,rc=65279,_w=9,ao=10,xw=13,kw=32,Ow=33,Aw=34,Au=35,Tw=37,Rw=38,Nw=39,Iw=42,Nh=44,Pw=45,Va=58,bw=61,Lw=62,Dw=63,Fw=64,Ih=91,Ph=93,Mw=96,bh=123,jw=124,Lh=125,nn={};nn[0]="\\0";nn[7]="\\a";nn[8]="\\b";nn[9]="\\t";nn[10]="\\n";nn[11]="\\v";nn[12]="\\f";nn[13]="\\r";nn[27]="\\e";nn[34]='\\"';nn[92]="\\\\";nn[133]="\\N";nn[160]="\\_";nn[8232]="\\L";nn[8233]="\\P";var Uw=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Bw=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function zw(n,r){var o,a,s,u,f,p,m;if(r===null)return{};for(o={},a=Object.keys(r),s=0,u=a.length;s<u;s+=1)f=a[s],p=String(r[f]),f.slice(0,2)==="!!"&&(f="tag:yaml.org,2002:"+f.slice(2)),m=n.compiledTypeMap.fallback[f],m&&Rh.call(m.styleAliases,p)&&(p=m.styleAliases[p]),o[f]=p;return o}function $w(n){var r,o,a;if(r=n.toString(16).toUpperCase(),n<=255)o="x",a=2;else if(n<=65535)o="u",a=4;else if(n<=4294967295)o="U",a=8;else throw new an("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+o+Ye.repeat("0",a-r.length)+r}var Yw=1,lo=2;function Ww(n){this.schema=n.schema||ec,this.indent=Math.max(1,n.indent||2),this.noArrayIndent=n.noArrayIndent||!1,this.skipInvalid=n.skipInvalid||!1,this.flowLevel=Ye.isNothing(n.flowLevel)?-1:n.flowLevel,this.styleMap=zw(this.schema,n.styles||null),this.sortKeys=n.sortKeys||!1,this.lineWidth=n.lineWidth||80,this.noRefs=n.noRefs||!1,this.noCompatMode=n.noCompatMode||!1,this.condenseFlow=n.condenseFlow||!1,this.quotingType=n.quotingType==='"'?lo:Yw,this.forceQuotes=n.forceQuotes||!1,this.replacer=typeof n.replacer=="function"?n.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Mp(n,r){for(var o=Ye.repeat(" ",r),a=0,s=-1,u="",f,p=n.length;a<p;)s=n.indexOf(`
`,a),s===-1?(f=n.slice(a),a=p):(f=n.slice(a,s+1),a=s+1),f.length&&f!==`
`&&(u+=o),u+=f;return u}function Tu(n,r){return`
`+Ye.repeat(" ",n.indent*r)}function Hw(n,r){var o,a,s;for(o=0,a=n.implicitTypes.length;o<a;o+=1)if(s=n.implicitTypes[o],s.resolve(r))return!0;return!1}function Ka(n){return n===kw||n===_w}function so(n){return 32<=n&&n<=126||161<=n&&n<=55295&&n!==8232&&n!==8233||57344<=n&&n<=65533&&n!==rc||65536<=n&&n<=1114111}function jp(n){return so(n)&&n!==rc&&n!==xw&&n!==ao}function Up(n,r,o){var a=jp(n),s=a&&!Ka(n);return(o?a:a&&n!==Nh&&n!==Ih&&n!==Ph&&n!==bh&&n!==Lh)&&n!==Au&&!(r===Va&&!s)||jp(r)&&!Ka(r)&&n===Au||r===Va&&s}function Vw(n){return so(n)&&n!==rc&&!Ka(n)&&n!==Pw&&n!==Dw&&n!==Va&&n!==Nh&&n!==Ih&&n!==Ph&&n!==bh&&n!==Lh&&n!==Au&&n!==Rw&&n!==Iw&&n!==Ow&&n!==jw&&n!==bw&&n!==Lw&&n!==Nw&&n!==Aw&&n!==Tw&&n!==Fw&&n!==Mw}function Kw(n){return!Ka(n)&&n!==Va}function qi(n,r){var o=n.charCodeAt(r),a;return o>=55296&&o<=56319&&r+1<n.length&&(a=n.charCodeAt(r+1),a>=56320&&a<=57343)?(o-55296)*1024+a-56320+65536:o}function Dh(n){var r=/^\n* /;return r.test(n)}var Fh=1,Ru=2,Mh=3,jh=4,$r=5;function Gw(n,r,o,a,s,u,f,p){var m,v=0,g=null,y=!1,C=!1,_=a!==-1,I=-1,N=Vw(qi(n,0))&&Kw(qi(n,n.length-1));if(r||f)for(m=0;m<n.length;v>=65536?m+=2:m++){if(v=qi(n,m),!so(v))return $r;N=N&&Up(v,g,p),g=v}else{for(m=0;m<n.length;v>=65536?m+=2:m++){if(v=qi(n,m),v===ao)y=!0,_&&(C=C||m-I-1>a&&n[I+1]!==" ",I=m);else if(!so(v))return $r;N=N&&Up(v,g,p),g=v}C=C||_&&m-I-1>a&&n[I+1]!==" "}return!y&&!C?N&&!f&&!s(n)?Fh:u===lo?$r:Ru:o>9&&Dh(n)?$r:f?u===lo?$r:Ru:C?jh:Mh}function qw(n,r,o,a,s){n.dump=(function(){if(r.length===0)return n.quotingType===lo?'""':"''";if(!n.noCompatMode&&(Uw.indexOf(r)!==-1||Bw.test(r)))return n.quotingType===lo?'"'+r+'"':"'"+r+"'";var u=n.indent*Math.max(1,o),f=n.lineWidth===-1?-1:Math.max(Math.min(n.lineWidth,40),n.lineWidth-u),p=a||n.flowLevel>-1&&o>=n.flowLevel;function m(v){return Hw(n,v)}switch(Gw(r,p,n.indent,f,m,n.quotingType,n.forceQuotes&&!a,s)){case Fh:return r;case Ru:return"'"+r.replace(/'/g,"''")+"'";case Mh:return"|"+Bp(r,n.indent)+zp(Mp(r,u));case jh:return">"+Bp(r,n.indent)+zp(Mp(Qw(r,f),u));case $r:return'"'+Xw(r)+'"';default:throw new an("impossible error: invalid scalar style")}})()}function Bp(n,r){var o=Dh(n)?String(r):"",a=n[n.length-1]===`
`,s=a&&(n[n.length-2]===`
`||n===`
`),u=s?"+":a?"":"-";return o+u+`
`}function zp(n){return n[n.length-1]===`
`?n.slice(0,-1):n}function Qw(n,r){for(var o=/(\n+)([^\n]*)/g,a=(function(){var v=n.indexOf(`
`);return v=v!==-1?v:n.length,o.lastIndex=v,$p(n.slice(0,v),r)})(),s=n[0]===`
`||n[0]===" ",u,f;f=o.exec(n);){var p=f[1],m=f[2];u=m[0]===" ",a+=p+(!s&&!u&&m!==""?`
`:"")+$p(m,r),s=u}return a}function $p(n,r){if(n===""||n[0]===" ")return n;for(var o=/ [^ ]/g,a,s=0,u,f=0,p=0,m="";a=o.exec(n);)p=a.index,p-s>r&&(u=f>s?f:p,m+=`
`+n.slice(s,u),s=u+1),f=p;return m+=`
`,n.length-s>r&&f>s?m+=n.slice(s,f)+`
`+n.slice(f+1):m+=n.slice(s),m.slice(1)}function Xw(n){for(var r="",o=0,a,s=0;s<n.length;o>=65536?s+=2:s++)o=qi(n,s),a=nn[o],!a&&so(o)?(r+=n[s],o>=65536&&(r+=n[s+1])):r+=a||$w(o);return r}function Jw(n,r,o){var a="",s=n.tag,u,f,p;for(u=0,f=o.length;u<f;u+=1)p=o[u],n.replacer&&(p=n.replacer.call(o,String(u),p)),(ut(n,r,p,!1,!1)||typeof p>"u"&&ut(n,r,null,!1,!1))&&(a!==""&&(a+=","+(n.condenseFlow?"":" ")),a+=n.dump);n.tag=s,n.dump="["+a+"]"}function Yp(n,r,o,a){var s="",u=n.tag,f,p,m;for(f=0,p=o.length;f<p;f+=1)m=o[f],n.replacer&&(m=n.replacer.call(o,String(f),m)),(ut(n,r+1,m,!0,!0,!1,!0)||typeof m>"u"&&ut(n,r+1,null,!0,!0,!1,!0))&&((!a||s!=="")&&(s+=Tu(n,r)),n.dump&&ao===n.dump.charCodeAt(0)?s+="-":s+="- ",s+=n.dump);n.tag=u,n.dump=s||"[]"}function Zw(n,r,o){var a="",s=n.tag,u=Object.keys(o),f,p,m,v,g;for(f=0,p=u.length;f<p;f+=1)g="",a!==""&&(g+=", "),n.condenseFlow&&(g+='"'),m=u[f],v=o[m],n.replacer&&(v=n.replacer.call(o,m,v)),ut(n,r,m,!1,!1)&&(n.dump.length>1024&&(g+="? "),g+=n.dump+(n.condenseFlow?'"':"")+":"+(n.condenseFlow?"":" "),ut(n,r,v,!1,!1)&&(g+=n.dump,a+=g));n.tag=s,n.dump="{"+a+"}"}function eS(n,r,o,a){var s="",u=n.tag,f=Object.keys(o),p,m,v,g,y,C;if(n.sortKeys===!0)f.sort();else if(typeof n.sortKeys=="function")f.sort(n.sortKeys);else if(n.sortKeys)throw new an("sortKeys must be a boolean or a function");for(p=0,m=f.length;p<m;p+=1)C="",(!a||s!=="")&&(C+=Tu(n,r)),v=f[p],g=o[v],n.replacer&&(g=n.replacer.call(o,v,g)),ut(n,r+1,v,!0,!0,!0)&&(y=n.tag!==null&&n.tag!=="?"||n.dump&&n.dump.length>1024,y&&(n.dump&&ao===n.dump.charCodeAt(0)?C+="?":C+="? "),C+=n.dump,y&&(C+=Tu(n,r)),ut(n,r+1,g,!0,y)&&(n.dump&&ao===n.dump.charCodeAt(0)?C+=":":C+=": ",C+=n.dump,s+=C));n.tag=u,n.dump=s||"{}"}function Wp(n,r,o){var a,s,u,f,p,m;for(s=o?n.explicitTypes:n.implicitTypes,u=0,f=s.length;u<f;u+=1)if(p=s[u],(p.instanceOf||p.predicate)&&(!p.instanceOf||typeof r=="object"&&r instanceof p.instanceOf)&&(!p.predicate||p.predicate(r))){if(o?p.multi&&p.representName?n.tag=p.representName(r):n.tag=p.tag:n.tag="?",p.represent){if(m=n.styleMap[p.tag]||p.defaultStyle,Th.call(p.represent)==="[object Function]")a=p.represent(r,m);else if(Rh.call(p.represent,m))a=p.represent[m](r,m);else throw new an("!<"+p.tag+'> tag resolver accepts not "'+m+'" style');n.dump=a}return!0}return!1}function ut(n,r,o,a,s,u,f){n.tag=null,n.dump=o,Wp(n,o,!1)||Wp(n,o,!0);var p=Th.call(n.dump),m=a,v;a&&(a=n.flowLevel<0||n.flowLevel>r);var g=p==="[object Object]"||p==="[object Array]",y,C;if(g&&(y=n.duplicates.indexOf(o),C=y!==-1),(n.tag!==null&&n.tag!=="?"||C||n.indent!==2&&r>0)&&(s=!1),C&&n.usedDuplicates[y])n.dump="*ref_"+y;else{if(g&&C&&!n.usedDuplicates[y]&&(n.usedDuplicates[y]=!0),p==="[object Object]")a&&Object.keys(n.dump).length!==0?(eS(n,r,n.dump,s),C&&(n.dump="&ref_"+y+n.dump)):(Zw(n,r,n.dump),C&&(n.dump="&ref_"+y+" "+n.dump));else if(p==="[object Array]")a&&n.dump.length!==0?(n.noArrayIndent&&!f&&r>0?Yp(n,r-1,n.dump,s):Yp(n,r,n.dump,s),C&&(n.dump="&ref_"+y+n.dump)):(Jw(n,r,n.dump),C&&(n.dump="&ref_"+y+" "+n.dump));else if(p==="[object String]")n.tag!=="?"&&qw(n,n.dump,r,u,m);else{if(p==="[object Undefined]")return!1;if(n.skipInvalid)return!1;throw new an("unacceptable kind of an object to dump "+p)}n.tag!==null&&n.tag!=="?"&&(v=encodeURI(n.tag[0]==="!"?n.tag.slice(1):n.tag).replace(/!/g,"%21"),n.tag[0]==="!"?v="!"+v:v.slice(0,18)==="tag:yaml.org,2002:"?v="!!"+v.slice(18):v="!<"+v+">",n.dump=v+" "+n.dump)}return!0}function nS(n,r){var o=[],a=[],s,u;for(Nu(n,o,a),s=0,u=a.length;s<u;s+=1)r.duplicates.push(o[a[s]]);r.usedDuplicates=new Array(u)}function Nu(n,r,o){var a,s,u;if(n!==null&&typeof n=="object")if(s=r.indexOf(n),s!==-1)o.indexOf(s)===-1&&o.push(s);else if(r.push(n),Array.isArray(n))for(s=0,u=n.length;s<u;s+=1)Nu(n[s],r,o);else for(a=Object.keys(n),s=0,u=a.length;s<u;s+=1)Nu(n[a[s]],r,o)}function tS(n,r){r=r||{};var o=new Ww(r);o.noRefs||nS(n,o);var a=n;return o.replacer&&(a=o.replacer.call({"":a},"",a)),ut(o,0,a,!0,!0)?o.dump+`
`:""}var rS=tS,iS={dump:rS};function ic(n,r){return function(){throw new Error("Function yaml."+n+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}var oS=qe,aS=Zm,lS=rh,sS=sh,uS=uh,cS=ec,fS=Ah.load,dS=Ah.loadAll,pS=iS.dump,mS=an,hS={binary:mh,float:lh,map:th,null:ih,pairs:vh,set:gh,timestamp:dh,bool:oh,int:ah,merge:ph,omap:hh,seq:nh,str:eh},vS=ic("safeLoad","load"),gS=ic("safeLoadAll","loadAll"),yS=ic("safeDump","dump"),wS={Type:oS,Schema:aS,FAILSAFE_SCHEMA:lS,JSON_SCHEMA:sS,CORE_SCHEMA:uS,DEFAULT_SCHEMA:cS,load:fS,loadAll:dS,dump:pS,YAMLException:mS,types:hS,safeLoad:vS,safeLoadAll:gS,safeDump:yS};const SS=`studyGuides:
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
    tip: Learn about Falco for kernel-level threat detection, and Kubernetes
      audit logging to record every API server request for forensic analysis.
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
  kubernetes-security:
    title: Kubernetes Security
    tip: Study RBAC objects (Role, ClusterRole, RoleBinding, ClusterRoleBinding)
      and how they control access to cluster resources.
    link: https://kubernetes.io/docs/reference/access-authn-authz/rbac/
  kubernetes-workloads:
    title: Kubernetes Workloads
    tip: Understand the different workload controllers — Deployment, DaemonSet,
      StatefulSet, Job, and CronJob — and when to use each.
    link: https://kubernetes.io/docs/concepts/workloads/controllers/
  kubernetes-storage:
    title: Kubernetes Storage
    tip: Learn about PersistentVolumes, PersistentVolumeClaims, StorageClasses,
      and the CSI standard for attaching storage to pods.
    link: https://kubernetes.io/docs/concepts/storage/
  kubernetes-architecture:
    title: Kubernetes Architecture
    tip: Review the control plane components (kube-apiserver, kube-scheduler,
      kube-controller-manager, etcd) and the node components (kubelet, kube-proxy).
    link: https://kubernetes.io/docs/concepts/overview/components/
  kubernetes-application-delivery:
    title: Kubernetes Application Delivery
    tip: Study pod lifecycle probes — Liveness, Readiness, and Startup — and
      how they affect traffic routing and container restarts.
    link: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
  kubernetes-networking:
    title: Kubernetes Networking
    tip: Learn the CNI standard, Service types (ClusterIP, NodePort, LoadBalancer),
      Ingress, and NetworkPolicy for controlling pod traffic.
    link: https://kubernetes.io/docs/concepts/services-networking/
  gitops:
    title: GitOps
    tip: Understand how GitOps uses a Git repository as the single source of
      truth for declarative infrastructure, with tools like Argo CD or Flux.
    link: https://opengitops.dev/
  observability:
    title: Observability
    tip: Study the three pillars of observability — metrics, logs, and traces —
      and CNCF projects like Prometheus, Fluentd, and Jaeger.
    link: https://opentelemetry.io/docs/concepts/observability-primer/
  cloud-native-security:
    title: Cloud Native Security
    tip: The 4 C's (Cloud, Cluster, Container, Code) describe the layers of
      defense. Security at each outer layer strengthens all inner layers.
    link: https://kubernetes.io/docs/concepts/security/overview/
  container-security:
    title: Container Security
    tip: Apply least privilege by running containers as non-root, dropping
      capabilities, and using seccomp/AppArmor profiles to restrict syscalls.
    link: https://kubernetes.io/docs/concepts/security/pod-security-standards/
  supply-chain-security:
    title: Supply Chain Security
    tip: Use image signing (Cosign/Notary), SBOMs, and admission policies to
      ensure only trusted, verified images run in your cluster.
    link: https://slsa.dev/
  compliance-security:
    title: Compliance & Security Frameworks
    tip: The CIS Kubernetes Benchmark provides hardening guidelines. Use tools
      like kube-bench to automatically check your cluster against them.
    link: https://www.cisecurity.org/benchmark/kubernetes
decks:
  KCNA:
    passingPercentage: 75
    answers:
      FOUR_PILLARS:
        id: four_pillars
        title: CNCF Cloud Native
        titlealt: Technologies
        lines:
          - Containers
          - Service Meshes
          - Microservices
          - Immutable Infrastructure
          - Declarative APIs
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
      DAPR:
        id: dapr
        lines:
          - Dapr
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
      CI_SERVER:
        id: ci_server
        lines:
          - CI Server
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
          text: Which of the following best represents the cloud-native technology approaches exemplified in the official CNCF definition?
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
          - DAPR
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
          - COREDNS
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
          - SC_STORAGE
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
          - All traffic is allowed; pods are non-isolated.
      NETPOL_DECOY1:
        id: kcsa_q3_decoy1
        lines:
          - All ingress traffic is denied by default.
      NETPOL_DECOY2:
        id: kcsa_q3_decoy2
        lines:
          - All egress traffic is denied by default.
      NETPOL_DECOY3:
        id: kcsa_q3_decoy3
        lines:
          - Only traffic within the same namespace is allowed.
      NETPOL_DECOY4:
        id: kcsa_q3_decoy4
        lines:
          - All ingress and egress traffic is denied.
      NETPOL_DECOY5:
        id: kcsa_q3_decoy5
        lines:
          - Only traffic matching a label selector is allowed.
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

      # Q6 — 4 C's of Cloud Native Security
      FOUR_CS_CORRECT:
        id: kcsa_q6_correct
        title: The 4 C's of
        titlealt: Cloud Native Security
        lines:
          - Cloud
          - Cluster
          - Container
          - Code
      FOUR_CS_DECOY1:
        id: kcsa_q6_decoy1
        lines:
          - Control, Container, Cluster, Code
      FOUR_CS_DECOY2:
        id: kcsa_q6_decoy2
        lines:
          - Cloud, Configuration, Container, Code
      FOUR_CS_DECOY3:
        id: kcsa_q6_decoy3
        lines:
          - Cluster, Control-Plane, Container, CI/CD
      FOUR_CS_DECOY4:
        id: kcsa_q6_decoy4
        lines:
          - Cloud, Cluster, Credentials, Code

      # Q7 — Pod Security Standards
      PSS_CORRECT:
        id: kcsa_q7_correct
        title: Pod Security Standards
        lines:
          - Privileged
          - Baseline
          - Restricted
      PSS_DECOY1:
        id: kcsa_q7_decoy1
        lines:
          - Open, Locked, Audited
      PSS_DECOY2:
        id: kcsa_q7_decoy2
        lines:
          - Default, Limited, Strict
      PSS_DECOY3:
        id: kcsa_q7_decoy3
        lines:
          - Permissive, Enforced, Audited
      PSS_DECOY4:
        id: kcsa_q7_decoy4
        lines:
          - Basic, Intermediate, Advanced

      # Q8 — seccomp
      SECCOMP_CORRECT:
        id: kcsa_q8_correct
        lines:
          - seccomp (Secure Computing Mode)
      SECCOMP_DECOY1:
        id: kcsa_q8_decoy1
        lines:
          - AppArmor
      SECCOMP_DECOY2:
        id: kcsa_q8_decoy2
        lines:
          - SELinux
      SECCOMP_DECOY3:
        id: kcsa_q8_decoy3
        lines:
          - cgroups
      SECCOMP_DECOY4:
        id: kcsa_q8_decoy4
        lines:
          - namespaces

      # Q9 — image signing / Cosign
      COSIGN_CORRECT:
        id: kcsa_q9_correct
        lines:
          - Cosign
      COSIGN_DECOY1:
        id: kcsa_q9_decoy1
        lines:
          - Trivy
      COSIGN_DECOY2:
        id: kcsa_q9_decoy2
        lines:
          - Falco
      COSIGN_DECOY3:
        id: kcsa_q9_decoy3
        lines:
          - Kyverno
      COSIGN_DECOY4:
        id: kcsa_q9_decoy4
        lines:
          - Harbor

      # Q10 — audit logging
      AUDIT_CORRECT:
        id: kcsa_q10_correct
        lines:
          - Requests made to the Kubernetes API server, including who made them
            and what action was taken.
      AUDIT_DECOY1:
        id: kcsa_q10_decoy1
        lines:
          - CPU and memory usage of each pod.
      AUDIT_DECOY2:
        id: kcsa_q10_decoy2
        lines:
          - Network traffic between pods.
      AUDIT_DECOY3:
        id: kcsa_q10_decoy3
        lines:
          - Container image vulnerability scan results.
      AUDIT_DECOY4:
        id: kcsa_q10_decoy4
        lines:
          - etcd read and write operations only.

      # Q11 — mTLS
      MTLS_CORRECT:
        id: kcsa_q11_correct
        lines:
          - Both client and server present certificates to verify each other's
            identity; commonly provided by service meshes like Istio or Linkerd.
      MTLS_DECOY1:
        id: kcsa_q11_decoy1
        lines:
          - Only the server presents a certificate; the client is anonymous.
      MTLS_DECOY2:
        id: kcsa_q11_decoy2
        lines:
          - Traffic is encrypted but neither party is authenticated.
      MTLS_DECOY3:
        id: kcsa_q11_decoy3
        lines:
          - The client presents a certificate; the server uses a shared secret.
      MTLS_DECOY4:
        id: kcsa_q11_decoy4
        lines:
          - Certificates are optional; mTLS falls back to plaintext if unavailable.

      # Q12 — Secrets
      SECRET_CORRECT:
        id: kcsa_q12_correct
        lines:
          - Store sensitive data such as passwords or tokens; values are
            base64-encoded, not encrypted at rest by default.
      SECRET_DECOY1:
        id: kcsa_q12_decoy1
        lines:
          - Store non-sensitive configuration data for pods.
      SECRET_DECOY2:
        id: kcsa_q12_decoy2
        lines:
          - Enforce network access rules between pods.
      SECRET_DECOY3:
        id: kcsa_q12_decoy3
        lines:
          - Store sensitive data with AES-256 encryption enabled by default.
      SECRET_DECOY4:
        id: kcsa_q12_decoy4
        lines:
          - Provide persistent storage volumes for stateful applications.

      # Q13 — CIS Benchmark
      CIS_CORRECT:
        id: kcsa_q13_correct
        lines:
          - Prescriptive security configuration guidelines and hardening
            recommendations for Kubernetes clusters.
      CIS_DECOY1:
        id: kcsa_q13_decoy1
        lines:
          - A runtime security monitoring tool for detecting threats.
      CIS_DECOY2:
        id: kcsa_q13_decoy2
        lines:
          - A policy engine for enforcing admission control rules.
      CIS_DECOY3:
        id: kcsa_q13_decoy3
        lines:
          - A vulnerability scanner for container images.
      CIS_DECOY4:
        id: kcsa_q13_decoy4
        lines:
          - A compliance framework for PCI-DSS audits only.

      # Q14 — SBOM
      SBOM_CORRECT:
        id: kcsa_q14_correct
        lines:
          - Software Bill of Materials — a formal inventory of all components,
            libraries, and dependencies in a software artifact.
      SBOM_DECOY1:
        id: kcsa_q14_decoy1
        lines:
          - A signed manifest that proves an image was built from a trusted
            source.
      SBOM_DECOY2:
        id: kcsa_q14_decoy2
        lines:
          - A list of CVEs found during a container image vulnerability scan.
      SBOM_DECOY3:
        id: kcsa_q14_decoy3
        lines:
          - A Kubernetes resource that tracks deployed workload versions.
      SBOM_DECOY4:
        id: kcsa_q14_decoy4
        lines:
          - A policy document that restricts which container registries are
            trusted.

      # Q16 — PSS admission controller
      PSS_AC_CORRECT:
        id: kcsa_q16_correct
        lines:
          - PodSecurity (the built-in admission controller, replacing the
            deprecated PodSecurityPolicy)
      PSS_AC_DECOY1:
        id: kcsa_q16_decoy1
        lines:
          - PodSecurityPolicy (PSP)
      PSS_AC_DECOY2:
        id: kcsa_q16_decoy2
        lines:
          - Kyverno
      PSS_AC_DECOY3:
        id: kcsa_q16_decoy3
        lines:
          - Open Policy Agent (OPA) Gatekeeper
      PSS_AC_DECOY4:
        id: kcsa_q16_decoy4
        lines:
          - ResourceQuota

      # Q15 — least privilege / non-root
      NONROOT_CORRECT:
        id: kcsa_q15_correct
        lines:
          - Run as a non-root user and drop all unnecessary Linux capabilities.
      NONROOT_DECOY1:
        id: kcsa_q15_decoy1
        lines:
          - Run as root to ensure the container has full access to the host.
      NONROOT_DECOY2:
        id: kcsa_q15_decoy2
        lines:
          - Use a privileged pod so the container can manage host resources.
      NONROOT_DECOY3:
        id: kcsa_q15_decoy3
        lines:
          - Share the host network namespace to simplify service discovery.
      NONROOT_DECOY4:
        id: kcsa_q15_decoy4
        lines:
          - Mount the host filesystem so the container can read node logs.

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
          text: A cluster has no NetworkPolicy resources. What is the default network behavior for pods?
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
      - prompt:
          text: What are the four layers of the '4 C's of Cloud Native Security'?
        tag: cloud-native-security
        answers:
          - FOUR_CS_CORRECT
          - FOUR_CS_DECOY1
          - FOUR_CS_DECOY2
          - FOUR_CS_DECOY3
          - FOUR_CS_DECOY4
        correctAnswerId: kcsa_q6_correct
      - prompt:
          text: What are the three Pod Security Standard profiles defined by Kubernetes?
        tag: security-fundamentals
        answers:
          - PSS_CORRECT
          - PSS_DECOY1
          - PSS_DECOY2
          - PSS_DECOY3
          - PSS_DECOY4
        correctAnswerId: kcsa_q7_correct
      - prompt:
          text: Which Linux kernel feature allows you to restrict the syscalls a
            container process is allowed to make?
        tag: container-security
        answers:
          - SECCOMP_CORRECT
          - SECCOMP_DECOY1
          - SECCOMP_DECOY2
          - SECCOMP_DECOY3
          - SECCOMP_DECOY4
        correctAnswerId: kcsa_q8_correct
      - prompt:
          text: Which tool from the Sigstore project is used to sign and verify
            container image signatures for supply chain integrity?
        tag: supply-chain-security
        answers:
          - COSIGN_CORRECT
          - COSIGN_DECOY1
          - COSIGN_DECOY2
          - COSIGN_DECOY3
          - COSIGN_DECOY4
        correctAnswerId: kcsa_q9_correct
      - prompt:
          text: What does Kubernetes audit logging record?
        tag: runtime-security
        answers:
          - AUDIT_CORRECT
          - AUDIT_DECOY1
          - AUDIT_DECOY2
          - AUDIT_DECOY3
          - AUDIT_DECOY4
        correctAnswerId: kcsa_q10_correct
      - prompt:
          text: What distinguishes mutual TLS (mTLS) from standard TLS?
        tag: security-fundamentals
        answers:
          - MTLS_CORRECT
          - MTLS_DECOY1
          - MTLS_DECOY2
          - MTLS_DECOY3
          - MTLS_DECOY4
        correctAnswerId: kcsa_q11_correct
      - prompt:
          text: What is the purpose of a Kubernetes Secret, and what is an important
            limitation to be aware of?
        tag: security-fundamentals
        answers:
          - SECRET_CORRECT
          - SECRET_DECOY1
          - SECRET_DECOY2
          - SECRET_DECOY3
          - SECRET_DECOY4
        correctAnswerId: kcsa_q12_correct
      - prompt:
          text: What does the CIS Kubernetes Benchmark provide?
        tag: compliance-security
        answers:
          - CIS_CORRECT
          - CIS_DECOY1
          - CIS_DECOY2
          - CIS_DECOY3
          - CIS_DECOY4
        correctAnswerId: kcsa_q13_correct
      - prompt:
          text: What is a Software Bill of Materials (SBOM)?
        tag: supply-chain-security
        answers:
          - SBOM_CORRECT
          - SBOM_DECOY1
          - SBOM_DECOY2
          - SBOM_DECOY3
          - SBOM_DECOY4
        correctAnswerId: kcsa_q14_correct
      - prompt:
          text: Following the principle of least privilege, what is the recommended
            approach for running container workloads?
        tag: container-security
        answers:
          - NONROOT_CORRECT
          - NONROOT_DECOY1
          - NONROOT_DECOY2
          - NONROOT_DECOY3
          - NONROOT_DECOY4
        correctAnswerId: kcsa_q15_correct
      - prompt:
          text: Which built-in Kubernetes admission controller enforces Pod Security
            Standards, replacing the deprecated PodSecurityPolicy?
        tag: security-fundamentals
        answers:
          - PSS_AC_CORRECT
          - PSS_AC_DECOY1
          - PSS_AC_DECOY2
          - PSS_AC_DECOY3
          - PSS_AC_DECOY4
        correctAnswerId: kcsa_q16_correct
`,ja=wS.load(SS);var au={exports:{}};var Hp;function CS(){return Hp||(Hp=1,(function(n){(function(){var r={}.hasOwnProperty;function o(){for(var u="",f=0;f<arguments.length;f++){var p=arguments[f];p&&(u=s(u,a(p)))}return u}function a(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return o.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var f="";for(var p in u)r.call(u,p)&&u[p]&&(f=s(f,p));return f}function s(u,f){return f?u?u+" "+f:u+f:u}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(au)),au.exports}var ES=CS();const Se=mo(ES);function Iu(){return Iu=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)({}).hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},Iu.apply(null,arguments)}function _S(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)!==-1)continue;o[a]=n[a]}return o}function Vp(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function xS(n){var r=kS(n,"string");return typeof r=="symbol"?r:String(r)}function kS(n,r){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function OS(n,r,o){var a=O.useRef(n!==void 0),s=O.useState(r),u=s[0],f=s[1],p=n!==void 0,m=a.current;return a.current=p,!p&&m&&u!==r&&f(r),[p?n:u,O.useCallback(function(v){for(var g=arguments.length,y=new Array(g>1?g-1:0),C=1;C<g;C++)y[C-1]=arguments[C];o&&o.apply(void 0,[v].concat(y)),f(v)},[o])]}function AS(n,r){return Object.keys(r).reduce(function(o,a){var s,u=o,f=u[Vp(a)],p=u[a],m=_S(u,[Vp(a),a].map(xS)),v=r[a],g=OS(p,f,n[v]),y=g[0],C=g[1];return Iu({},m,(s={},s[a]=y,s[v]=C,s))},n)}const TS=["xxl","xl","lg","md","sm","xs"],RS="xs",ho=O.createContext({prefixes:{},breakpoints:TS,minBreakpoint:RS}),{Consumer:GO,Provider:qO}=ho;function xe(n,r){const{prefixes:o}=O.useContext(ho);return n||o[r]||r}function Uh(){const{breakpoints:n}=O.useContext(ho);return n}function Bh(){const{minBreakpoint:n}=O.useContext(ho);return n}function NS(){const{dir:n}=O.useContext(ho);return n==="rtl"}function IS(n){return n&&n.ownerDocument||document}var lu={exports:{}},su,Kp;function PS(){if(Kp)return su;Kp=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return su=n,su}var uu,Gp;function bS(){if(Gp)return uu;Gp=1;var n=PS();function r(){}function o(){}return o.resetWarningCache=r,uu=function(){function a(f,p,m,v,g,y){if(y!==n){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}a.isRequired=a;function s(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:o,resetWarningCache:r};return u.PropTypes=u,u},uu}var qp;function LS(){return qp||(qp=1,lu.exports=bS()()),lu.exports}var DS=LS();const Vr=mo(DS),zh=!!(typeof window<"u"&&window.document&&window.document.createElement);var Pu=!1,bu=!1;try{var cu={get passive(){return Pu=!0},get once(){return bu=Pu=!0}};zh&&(window.addEventListener("test",cu,cu),window.removeEventListener("test",cu,!0))}catch{}function $h(n,r,o,a){if(a&&typeof a!="boolean"&&!bu){var s=a.once,u=a.capture,f=o;!bu&&s&&(f=o.__once||function p(m){this.removeEventListener(r,p,u),o.call(this,m)},o.__once=f),n.addEventListener(r,f,Pu?a:u)}n.addEventListener(r,o,a)}function FS(n,r,o,a){var s=a&&typeof a!="boolean"?a.capture:a;n.removeEventListener(r,o,s),o.__once&&n.removeEventListener(r,o.__once,s)}function La(n,r,o,a){return $h(n,r,o,a),function(){FS(n,r,o,a)}}const Qp=n=>!n||typeof n=="function"?n:r=>{n.current=r};function MS(n,r){const o=Qp(n),a=Qp(r);return s=>{o&&o(s),a&&a(s)}}function Yh(n,r){return O.useMemo(()=>MS(n,r),[n,r])}function jS(n){const r=O.useRef(n);return O.useEffect(()=>{r.current=n},[n]),r}function US(n){const r=jS(n);return O.useCallback(function(...o){return r.current&&r.current(...o)},[r])}const Wh=(n=>O.forwardRef((r,o)=>P.jsx("div",{...r,ref:o,className:Se(r.className,n)})));function BS(){return O.useState(null)}function zS(n){const r=O.useRef(n);return O.useEffect(()=>{r.current=n},[n]),r}function Mt(n){const r=zS(n);return O.useCallback(function(...o){return r.current&&r.current(...o)},[r])}function $S(n,r,o,a=!1){const s=Mt(o);O.useEffect(()=>{const u=typeof n=="function"?n():n;return u.addEventListener(r,s,a),()=>u.removeEventListener(r,s,a)},[n])}function YS(){const n=O.useRef(!0),r=O.useRef(()=>n.current);return O.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),r.current}function WS(n){const r=O.useRef(null);return O.useEffect(()=>{r.current=n}),r.current}const HS=["as","disabled"];function VS(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}function KS(n){return!n||n.trim()==="#"}function oc({tagName:n,disabled:r,href:o,target:a,rel:s,role:u,onClick:f,tabIndex:p=0,type:m}){n||(o!=null||a!=null||s!=null?n="a":n="button");const v={tagName:n};if(n==="button")return[{type:m||"button",disabled:r},v];const g=C=>{if((r||n==="a"&&KS(o))&&C.preventDefault(),r){C.stopPropagation();return}f?.(C)},y=C=>{C.key===" "&&(C.preventDefault(),g(C))};return n==="a"&&(o||(o="#"),r&&(o=void 0)),[{role:u??"button",disabled:void 0,tabIndex:r?void 0:p,href:o,target:n==="a"?a:void 0,"aria-disabled":r||void 0,rel:n==="a"?s:void 0,onClick:g,onKeyDown:y},v]}const Hh=O.forwardRef((n,r)=>{let{as:o,disabled:a}=n,s=VS(n,HS);const[u,{tagName:f}]=oc(Object.assign({tagName:o,disabled:a},s));return P.jsx(f,Object.assign({},s,u,{ref:r}))});Hh.displayName="Button";const GS=["onKeyDown"];function qS(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}function QS(n){return!n||n.trim()==="#"}const Vh=O.forwardRef((n,r)=>{let{onKeyDown:o}=n,a=qS(n,GS);const[s]=oc(Object.assign({tagName:"a"},a)),u=Mt(f=>{s.onKeyDown(f),o?.(f)});return QS(a.href)||a.role==="button"?P.jsx("a",Object.assign({ref:r},a,s,{onKeyDown:u})):P.jsx("a",Object.assign({ref:r},a,{onKeyDown:o}))});Vh.displayName="Anchor";const Qr=O.forwardRef(({as:n,bsPrefix:r,variant:o="primary",size:a,active:s=!1,disabled:u=!1,className:f,...p},m)=>{const v=xe(r,"btn"),[g,{tagName:y}]=oc({tagName:n,disabled:u,...p}),C=y;return P.jsx(C,{...g,...p,ref:m,disabled:u,className:Se(f,v,s&&"active",o&&`${v}-${o}`,a&&`${v}-${a}`,p.href&&u&&"disabled")})});Qr.displayName="Button";const ac=O.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=xe(r,"card-body"),P.jsx(o,{ref:s,className:Se(n,r),...a})));ac.displayName="CardBody";const Kh=O.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=xe(r,"card-footer"),P.jsx(o,{ref:s,className:Se(n,r),...a})));Kh.displayName="CardFooter";const Gh=O.createContext(null);Gh.displayName="CardHeaderContext";const qh=O.forwardRef(({bsPrefix:n,className:r,as:o="div",...a},s)=>{const u=xe(n,"card-header"),f=O.useMemo(()=>({cardHeaderBsPrefix:u}),[u]);return P.jsx(Gh.Provider,{value:f,children:P.jsx(o,{ref:s,...a,className:Se(r,u)})})});qh.displayName="CardHeader";const Qh=O.forwardRef(({bsPrefix:n,className:r,variant:o,as:a="img",...s},u)=>{const f=xe(n,"card-img");return P.jsx(a,{ref:u,className:Se(o?`${f}-${o}`:f,r),...s})});Qh.displayName="CardImg";const Xh=O.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=xe(r,"card-img-overlay"),P.jsx(o,{ref:s,className:Se(n,r),...a})));Xh.displayName="CardImgOverlay";const Jh=O.forwardRef(({className:n,bsPrefix:r,as:o="a",...a},s)=>(r=xe(r,"card-link"),P.jsx(o,{ref:s,className:Se(n,r),...a})));Jh.displayName="CardLink";const XS=Wh("h6"),Zh=O.forwardRef(({className:n,bsPrefix:r,as:o=XS,...a},s)=>(r=xe(r,"card-subtitle"),P.jsx(o,{ref:s,className:Se(n,r),...a})));Zh.displayName="CardSubtitle";const ev=O.forwardRef(({className:n,bsPrefix:r,as:o="p",...a},s)=>(r=xe(r,"card-text"),P.jsx(o,{ref:s,className:Se(n,r),...a})));ev.displayName="CardText";const JS=Wh("h5"),nv=O.forwardRef(({className:n,bsPrefix:r,as:o=JS,...a},s)=>(r=xe(r,"card-title"),P.jsx(o,{ref:s,className:Se(n,r),...a})));nv.displayName="CardTitle";const tv=O.forwardRef(({bsPrefix:n,className:r,bg:o,text:a,border:s,body:u=!1,children:f,as:p="div",...m},v)=>{const g=xe(n,"card");return P.jsx(p,{ref:v,...m,className:Se(r,g,o&&`bg-${o}`,a&&`text-${a}`,s&&`border-${s}`),children:u?P.jsx(ac,{children:f}):f})});tv.displayName="Card";const Gn=Object.assign(tv,{Img:Qh,Title:nv,Subtitle:Zh,Body:ac,Link:Jh,Text:ev,Header:qh,Footer:Kh,ImgOverlay:Xh});function ZS(n,r){return O.Children.toArray(n).some(o=>O.isValidElement(o)&&o.type===r)}function eC({as:n,bsPrefix:r,className:o,...a}){r=xe(r,"col");const s=Uh(),u=Bh(),f=[],p=[];return s.forEach(m=>{const v=a[m];delete a[m];let g,y,C;typeof v=="object"&&v!=null?{span:g,offset:y,order:C}=v:g=v;const _=m!==u?`-${m}`:"";g&&f.push(g===!0?`${r}${_}`:`${r}${_}-${g}`),C!=null&&p.push(`order${_}-${C}`),y!=null&&p.push(`offset${_}-${y}`)}),[{...a,className:Se(o,...f,...p)},{as:n,bsPrefix:r,spans:f}]}const vo=O.forwardRef((n,r)=>{const[{className:o,...a},{as:s="div",bsPrefix:u,spans:f}]=eC(n);return P.jsx(s,{...a,ref:r,className:Se(o,!f.length&&u)})});vo.displayName="Col";const Kr=O.forwardRef(({bsPrefix:n,fluid:r=!1,as:o="div",className:a,...s},u)=>{const f=xe(n,"container"),p=typeof r=="string"?`-${r}`:"-fluid";return P.jsx(o,{ref:u,...s,className:Se(a,r?`${f}${p}`:f)})});Kr.displayName="Container";var nC=Function.prototype.bind.call(Function.prototype.call,[].slice);function Xp(n,r){return nC(n.querySelectorAll(r))}function tC(n,r,o){const a=O.useRef(n!==void 0),[s,u]=O.useState(r),f=n!==void 0,p=a.current;return a.current=f,!f&&p&&s!==r&&u(r),[f?n:s,O.useCallback((...m)=>{const[v,...g]=m;let y=o?.(v,...g);return u(v),y},[o])]}function rC(){const[,n]=O.useReducer(r=>r+1,0);return n}const tl=O.createContext(null);var Jp=Object.prototype.hasOwnProperty;function Zp(n,r,o){for(o of n.keys())if(Xi(o,r))return o}function Xi(n,r){var o,a,s;if(n===r)return!0;if(n&&r&&(o=n.constructor)===r.constructor){if(o===Date)return n.getTime()===r.getTime();if(o===RegExp)return n.toString()===r.toString();if(o===Array){if((a=n.length)===r.length)for(;a--&&Xi(n[a],r[a]););return a===-1}if(o===Set){if(n.size!==r.size)return!1;for(a of n)if(s=a,s&&typeof s=="object"&&(s=Zp(r,s),!s)||!r.has(s))return!1;return!0}if(o===Map){if(n.size!==r.size)return!1;for(a of n)if(s=a[0],s&&typeof s=="object"&&(s=Zp(r,s),!s)||!Xi(a[1],r.get(s)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),r=new Uint8Array(r);else if(o===DataView){if((a=n.byteLength)===r.byteLength)for(;a--&&n.getInt8(a)===r.getInt8(a););return a===-1}if(ArrayBuffer.isView(n)){if((a=n.byteLength)===r.byteLength)for(;a--&&n[a]===r[a];);return a===-1}if(!o||typeof n=="object"){a=0;for(o in n)if(Jp.call(n,o)&&++a&&!Jp.call(r,o)||!(o in r)||!Xi(n[o],r[o]))return!1;return Object.keys(r).length===a}}return n!==n&&r!==r}function iC(n){const r=YS();return[n[0],O.useCallback(o=>{if(r())return n[1](o)},[r,n[1]])]}var mn="top",In="bottom",Pn="right",hn="left",lc="auto",go=[mn,In,Pn,hn],Xr="start",uo="end",oC="clippingParents",rv="viewport",Gi="popper",aC="reference",em=go.reduce(function(n,r){return n.concat([r+"-"+Xr,r+"-"+uo])},[]),iv=[].concat(go,[lc]).reduce(function(n,r){return n.concat([r,r+"-"+Xr,r+"-"+uo])},[]),lC="beforeRead",sC="read",uC="afterRead",cC="beforeMain",fC="main",dC="afterMain",pC="beforeWrite",mC="write",hC="afterWrite",vC=[lC,sC,uC,cC,fC,dC,pC,mC,hC];function Xn(n){return n.split("-")[0]}function _n(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var r=n.ownerDocument;return r&&r.defaultView||window}return n}function sr(n){var r=_n(n).Element;return n instanceof r||n instanceof Element}function Jn(n){var r=_n(n).HTMLElement;return n instanceof r||n instanceof HTMLElement}function sc(n){if(typeof ShadowRoot>"u")return!1;var r=_n(n).ShadowRoot;return n instanceof r||n instanceof ShadowRoot}var lr=Math.max,Ga=Math.min,Jr=Math.round;function Lu(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(r){return r.brand+"/"+r.version}).join(" "):navigator.userAgent}function ov(){return!/^((?!chrome|android).)*safari/i.test(Lu())}function Zr(n,r,o){r===void 0&&(r=!1),o===void 0&&(o=!1);var a=n.getBoundingClientRect(),s=1,u=1;r&&Jn(n)&&(s=n.offsetWidth>0&&Jr(a.width)/n.offsetWidth||1,u=n.offsetHeight>0&&Jr(a.height)/n.offsetHeight||1);var f=sr(n)?_n(n):window,p=f.visualViewport,m=!ov()&&o,v=(a.left+(m&&p?p.offsetLeft:0))/s,g=(a.top+(m&&p?p.offsetTop:0))/u,y=a.width/s,C=a.height/u;return{width:y,height:C,top:g,right:v+y,bottom:g+C,left:v,x:v,y:g}}function uc(n){var r=Zr(n),o=n.offsetWidth,a=n.offsetHeight;return Math.abs(r.width-o)<=1&&(o=r.width),Math.abs(r.height-a)<=1&&(a=r.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:a}}function av(n,r){var o=r.getRootNode&&r.getRootNode();if(n.contains(r))return!0;if(o&&sc(o)){var a=r;do{if(a&&n.isSameNode(a))return!0;a=a.parentNode||a.host}while(a)}return!1}function Ut(n){return n?(n.nodeName||"").toLowerCase():null}function ct(n){return _n(n).getComputedStyle(n)}function gC(n){return["table","td","th"].indexOf(Ut(n))>=0}function Yt(n){return((sr(n)?n.ownerDocument:n.document)||window.document).documentElement}function rl(n){return Ut(n)==="html"?n:n.assignedSlot||n.parentNode||(sc(n)?n.host:null)||Yt(n)}function nm(n){return!Jn(n)||ct(n).position==="fixed"?null:n.offsetParent}function yC(n){var r=/firefox/i.test(Lu()),o=/Trident/i.test(Lu());if(o&&Jn(n)){var a=ct(n);if(a.position==="fixed")return null}var s=rl(n);for(sc(s)&&(s=s.host);Jn(s)&&["html","body"].indexOf(Ut(s))<0;){var u=ct(s);if(u.transform!=="none"||u.perspective!=="none"||u.contain==="paint"||["transform","perspective"].indexOf(u.willChange)!==-1||r&&u.willChange==="filter"||r&&u.filter&&u.filter!=="none")return s;s=s.parentNode}return null}function yo(n){for(var r=_n(n),o=nm(n);o&&gC(o)&&ct(o).position==="static";)o=nm(o);return o&&(Ut(o)==="html"||Ut(o)==="body"&&ct(o).position==="static")?r:o||yC(n)||r}function cc(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Ji(n,r,o){return lr(n,Ga(r,o))}function wC(n,r,o){var a=Ji(n,r,o);return a>o?o:a}function lv(){return{top:0,right:0,bottom:0,left:0}}function sv(n){return Object.assign({},lv(),n)}function uv(n,r){return r.reduce(function(o,a){return o[a]=n,o},{})}var SC=function(r,o){return r=typeof r=="function"?r(Object.assign({},o.rects,{placement:o.placement})):r,sv(typeof r!="number"?r:uv(r,go))};function CC(n){var r,o=n.state,a=n.name,s=n.options,u=o.elements.arrow,f=o.modifiersData.popperOffsets,p=Xn(o.placement),m=cc(p),v=[hn,Pn].indexOf(p)>=0,g=v?"height":"width";if(!(!u||!f)){var y=SC(s.padding,o),C=uc(u),_=m==="y"?mn:hn,I=m==="y"?In:Pn,N=o.rects.reference[g]+o.rects.reference[m]-f[m]-o.rects.popper[g],T=f[m]-o.rects.reference[m],M=yo(u),b=M?m==="y"?M.clientHeight||0:M.clientWidth||0:0,Y=N/2-T/2,W=y[_],j=b-C[g]-y[I],Q=b/2-C[g]/2+Y,ee=Ji(W,Q,j),re=m;o.modifiersData[a]=(r={},r[re]=ee,r.centerOffset=ee-Q,r)}}function EC(n){var r=n.state,o=n.options,a=o.element,s=a===void 0?"[data-popper-arrow]":a;s!=null&&(typeof s=="string"&&(s=r.elements.popper.querySelector(s),!s)||av(r.elements.popper,s)&&(r.elements.arrow=s))}const _C={name:"arrow",enabled:!0,phase:"main",fn:CC,effect:EC,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ei(n){return n.split("-")[1]}var xC={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kC(n,r){var o=n.x,a=n.y,s=r.devicePixelRatio||1;return{x:Jr(o*s)/s||0,y:Jr(a*s)/s||0}}function tm(n){var r,o=n.popper,a=n.popperRect,s=n.placement,u=n.variation,f=n.offsets,p=n.position,m=n.gpuAcceleration,v=n.adaptive,g=n.roundOffsets,y=n.isFixed,C=f.x,_=C===void 0?0:C,I=f.y,N=I===void 0?0:I,T=typeof g=="function"?g({x:_,y:N}):{x:_,y:N};_=T.x,N=T.y;var M=f.hasOwnProperty("x"),b=f.hasOwnProperty("y"),Y=hn,W=mn,j=window;if(v){var Q=yo(o),ee="clientHeight",re="clientWidth";if(Q===_n(o)&&(Q=Yt(o),ct(Q).position!=="static"&&p==="absolute"&&(ee="scrollHeight",re="scrollWidth")),Q=Q,s===mn||(s===hn||s===Pn)&&u===uo){W=In;var de=y&&Q===j&&j.visualViewport?j.visualViewport.height:Q[ee];N-=de-a.height,N*=m?1:-1}if(s===hn||(s===mn||s===In)&&u===uo){Y=Pn;var ve=y&&Q===j&&j.visualViewport?j.visualViewport.width:Q[re];_-=ve-a.width,_*=m?1:-1}}var ae=Object.assign({position:p},v&&xC),se=g===!0?kC({x:_,y:N},_n(o)):{x:_,y:N};if(_=se.x,N=se.y,m){var V;return Object.assign({},ae,(V={},V[W]=b?"0":"",V[Y]=M?"0":"",V.transform=(j.devicePixelRatio||1)<=1?"translate("+_+"px, "+N+"px)":"translate3d("+_+"px, "+N+"px, 0)",V))}return Object.assign({},ae,(r={},r[W]=b?N+"px":"",r[Y]=M?_+"px":"",r.transform="",r))}function OC(n){var r=n.state,o=n.options,a=o.gpuAcceleration,s=a===void 0?!0:a,u=o.adaptive,f=u===void 0?!0:u,p=o.roundOffsets,m=p===void 0?!0:p,v={placement:Xn(r.placement),variation:ei(r.placement),popper:r.elements.popper,popperRect:r.rects.popper,gpuAcceleration:s,isFixed:r.options.strategy==="fixed"};r.modifiersData.popperOffsets!=null&&(r.styles.popper=Object.assign({},r.styles.popper,tm(Object.assign({},v,{offsets:r.modifiersData.popperOffsets,position:r.options.strategy,adaptive:f,roundOffsets:m})))),r.modifiersData.arrow!=null&&(r.styles.arrow=Object.assign({},r.styles.arrow,tm(Object.assign({},v,{offsets:r.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:m})))),r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-placement":r.placement})}const AC={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:OC,data:{}};var Da={passive:!0};function TC(n){var r=n.state,o=n.instance,a=n.options,s=a.scroll,u=s===void 0?!0:s,f=a.resize,p=f===void 0?!0:f,m=_n(r.elements.popper),v=[].concat(r.scrollParents.reference,r.scrollParents.popper);return u&&v.forEach(function(g){g.addEventListener("scroll",o.update,Da)}),p&&m.addEventListener("resize",o.update,Da),function(){u&&v.forEach(function(g){g.removeEventListener("scroll",o.update,Da)}),p&&m.removeEventListener("resize",o.update,Da)}}const RC={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:TC,data:{}};var NC={left:"right",right:"left",bottom:"top",top:"bottom"};function Ua(n){return n.replace(/left|right|bottom|top/g,function(r){return NC[r]})}var IC={start:"end",end:"start"};function rm(n){return n.replace(/start|end/g,function(r){return IC[r]})}function fc(n){var r=_n(n),o=r.pageXOffset,a=r.pageYOffset;return{scrollLeft:o,scrollTop:a}}function dc(n){return Zr(Yt(n)).left+fc(n).scrollLeft}function PC(n,r){var o=_n(n),a=Yt(n),s=o.visualViewport,u=a.clientWidth,f=a.clientHeight,p=0,m=0;if(s){u=s.width,f=s.height;var v=ov();(v||!v&&r==="fixed")&&(p=s.offsetLeft,m=s.offsetTop)}return{width:u,height:f,x:p+dc(n),y:m}}function bC(n){var r,o=Yt(n),a=fc(n),s=(r=n.ownerDocument)==null?void 0:r.body,u=lr(o.scrollWidth,o.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),f=lr(o.scrollHeight,o.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),p=-a.scrollLeft+dc(n),m=-a.scrollTop;return ct(s||o).direction==="rtl"&&(p+=lr(o.clientWidth,s?s.clientWidth:0)-u),{width:u,height:f,x:p,y:m}}function pc(n){var r=ct(n),o=r.overflow,a=r.overflowX,s=r.overflowY;return/auto|scroll|overlay|hidden/.test(o+s+a)}function cv(n){return["html","body","#document"].indexOf(Ut(n))>=0?n.ownerDocument.body:Jn(n)&&pc(n)?n:cv(rl(n))}function Zi(n,r){var o;r===void 0&&(r=[]);var a=cv(n),s=a===((o=n.ownerDocument)==null?void 0:o.body),u=_n(a),f=s?[u].concat(u.visualViewport||[],pc(a)?a:[]):a,p=r.concat(f);return s?p:p.concat(Zi(rl(f)))}function Du(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function LC(n,r){var o=Zr(n,!1,r==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function im(n,r,o){return r===rv?Du(PC(n,o)):sr(r)?LC(r,o):Du(bC(Yt(n)))}function DC(n){var r=Zi(rl(n)),o=["absolute","fixed"].indexOf(ct(n).position)>=0,a=o&&Jn(n)?yo(n):n;return sr(a)?r.filter(function(s){return sr(s)&&av(s,a)&&Ut(s)!=="body"}):[]}function FC(n,r,o,a){var s=r==="clippingParents"?DC(n):[].concat(r),u=[].concat(s,[o]),f=u[0],p=u.reduce(function(m,v){var g=im(n,v,a);return m.top=lr(g.top,m.top),m.right=Ga(g.right,m.right),m.bottom=Ga(g.bottom,m.bottom),m.left=lr(g.left,m.left),m},im(n,f,a));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function fv(n){var r=n.reference,o=n.element,a=n.placement,s=a?Xn(a):null,u=a?ei(a):null,f=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,m;switch(s){case mn:m={x:f,y:r.y-o.height};break;case In:m={x:f,y:r.y+r.height};break;case Pn:m={x:r.x+r.width,y:p};break;case hn:m={x:r.x-o.width,y:p};break;default:m={x:r.x,y:r.y}}var v=s?cc(s):null;if(v!=null){var g=v==="y"?"height":"width";switch(u){case Xr:m[v]=m[v]-(r[g]/2-o[g]/2);break;case uo:m[v]=m[v]+(r[g]/2-o[g]/2);break}}return m}function co(n,r){r===void 0&&(r={});var o=r,a=o.placement,s=a===void 0?n.placement:a,u=o.strategy,f=u===void 0?n.strategy:u,p=o.boundary,m=p===void 0?oC:p,v=o.rootBoundary,g=v===void 0?rv:v,y=o.elementContext,C=y===void 0?Gi:y,_=o.altBoundary,I=_===void 0?!1:_,N=o.padding,T=N===void 0?0:N,M=sv(typeof T!="number"?T:uv(T,go)),b=C===Gi?aC:Gi,Y=n.rects.popper,W=n.elements[I?b:C],j=FC(sr(W)?W:W.contextElement||Yt(n.elements.popper),m,g,f),Q=Zr(n.elements.reference),ee=fv({reference:Q,element:Y,placement:s}),re=Du(Object.assign({},Y,ee)),de=C===Gi?re:Q,ve={top:j.top-de.top+M.top,bottom:de.bottom-j.bottom+M.bottom,left:j.left-de.left+M.left,right:de.right-j.right+M.right},ae=n.modifiersData.offset;if(C===Gi&&ae){var se=ae[s];Object.keys(ve).forEach(function(V){var fe=[Pn,In].indexOf(V)>=0?1:-1,Ae=[mn,In].indexOf(V)>=0?"y":"x";ve[V]+=se[Ae]*fe})}return ve}function MC(n,r){r===void 0&&(r={});var o=r,a=o.placement,s=o.boundary,u=o.rootBoundary,f=o.padding,p=o.flipVariations,m=o.allowedAutoPlacements,v=m===void 0?iv:m,g=ei(a),y=g?p?em:em.filter(function(I){return ei(I)===g}):go,C=y.filter(function(I){return v.indexOf(I)>=0});C.length===0&&(C=y);var _=C.reduce(function(I,N){return I[N]=co(n,{placement:N,boundary:s,rootBoundary:u,padding:f})[Xn(N)],I},{});return Object.keys(_).sort(function(I,N){return _[I]-_[N]})}function jC(n){if(Xn(n)===lc)return[];var r=Ua(n);return[rm(n),r,rm(r)]}function UC(n){var r=n.state,o=n.options,a=n.name;if(!r.modifiersData[a]._skip){for(var s=o.mainAxis,u=s===void 0?!0:s,f=o.altAxis,p=f===void 0?!0:f,m=o.fallbackPlacements,v=o.padding,g=o.boundary,y=o.rootBoundary,C=o.altBoundary,_=o.flipVariations,I=_===void 0?!0:_,N=o.allowedAutoPlacements,T=r.options.placement,M=Xn(T),b=M===T,Y=m||(b||!I?[Ua(T)]:jC(T)),W=[T].concat(Y).reduce(function(ce,pe){return ce.concat(Xn(pe)===lc?MC(r,{placement:pe,boundary:g,rootBoundary:y,padding:v,flipVariations:I,allowedAutoPlacements:N}):pe)},[]),j=r.rects.reference,Q=r.rects.popper,ee=new Map,re=!0,de=W[0],ve=0;ve<W.length;ve++){var ae=W[ve],se=Xn(ae),V=ei(ae)===Xr,fe=[mn,In].indexOf(se)>=0,Ae=fe?"width":"height",Ce=co(r,{placement:ae,boundary:g,rootBoundary:y,altBoundary:C,padding:v}),he=fe?V?Pn:hn:V?In:mn;j[Ae]>Q[Ae]&&(he=Ua(he));var H=Ua(he),X=[];if(u&&X.push(Ce[se]<=0),p&&X.push(Ce[he]<=0,Ce[H]<=0),X.every(function(ce){return ce})){de=ae,re=!1;break}ee.set(ae,X)}if(re)for(var $=I?3:1,x=function(pe){var ge=W.find(function(ke){var we=ee.get(ke);if(we)return we.slice(0,pe).every(function(Te){return Te})});if(ge)return de=ge,"break"},L=$;L>0;L--){var ue=x(L);if(ue==="break")break}r.placement!==de&&(r.modifiersData[a]._skip=!0,r.placement=de,r.reset=!0)}}const BC={name:"flip",enabled:!0,phase:"main",fn:UC,requiresIfExists:["offset"],data:{_skip:!1}};function om(n,r,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-r.height-o.y,right:n.right-r.width+o.x,bottom:n.bottom-r.height+o.y,left:n.left-r.width-o.x}}function am(n){return[mn,Pn,In,hn].some(function(r){return n[r]>=0})}function zC(n){var r=n.state,o=n.name,a=r.rects.reference,s=r.rects.popper,u=r.modifiersData.preventOverflow,f=co(r,{elementContext:"reference"}),p=co(r,{altBoundary:!0}),m=om(f,a),v=om(p,s,u),g=am(m),y=am(v);r.modifiersData[o]={referenceClippingOffsets:m,popperEscapeOffsets:v,isReferenceHidden:g,hasPopperEscaped:y},r.attributes.popper=Object.assign({},r.attributes.popper,{"data-popper-reference-hidden":g,"data-popper-escaped":y})}const $C={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zC};function YC(n,r,o){var a=Xn(n),s=[hn,mn].indexOf(a)>=0?-1:1,u=typeof o=="function"?o(Object.assign({},r,{placement:n})):o,f=u[0],p=u[1];return f=f||0,p=(p||0)*s,[hn,Pn].indexOf(a)>=0?{x:p,y:f}:{x:f,y:p}}function WC(n){var r=n.state,o=n.options,a=n.name,s=o.offset,u=s===void 0?[0,0]:s,f=iv.reduce(function(g,y){return g[y]=YC(y,r.rects,u),g},{}),p=f[r.placement],m=p.x,v=p.y;r.modifiersData.popperOffsets!=null&&(r.modifiersData.popperOffsets.x+=m,r.modifiersData.popperOffsets.y+=v),r.modifiersData[a]=f}const HC={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:WC};function VC(n){var r=n.state,o=n.name;r.modifiersData[o]=fv({reference:r.rects.reference,element:r.rects.popper,placement:r.placement})}const KC={name:"popperOffsets",enabled:!0,phase:"read",fn:VC,data:{}};function GC(n){return n==="x"?"y":"x"}function qC(n){var r=n.state,o=n.options,a=n.name,s=o.mainAxis,u=s===void 0?!0:s,f=o.altAxis,p=f===void 0?!1:f,m=o.boundary,v=o.rootBoundary,g=o.altBoundary,y=o.padding,C=o.tether,_=C===void 0?!0:C,I=o.tetherOffset,N=I===void 0?0:I,T=co(r,{boundary:m,rootBoundary:v,padding:y,altBoundary:g}),M=Xn(r.placement),b=ei(r.placement),Y=!b,W=cc(M),j=GC(W),Q=r.modifiersData.popperOffsets,ee=r.rects.reference,re=r.rects.popper,de=typeof N=="function"?N(Object.assign({},r.rects,{placement:r.placement})):N,ve=typeof de=="number"?{mainAxis:de,altAxis:de}:Object.assign({mainAxis:0,altAxis:0},de),ae=r.modifiersData.offset?r.modifiersData.offset[r.placement]:null,se={x:0,y:0};if(Q){if(u){var V,fe=W==="y"?mn:hn,Ae=W==="y"?In:Pn,Ce=W==="y"?"height":"width",he=Q[W],H=he+T[fe],X=he-T[Ae],$=_?-re[Ce]/2:0,x=b===Xr?ee[Ce]:re[Ce],L=b===Xr?-re[Ce]:-ee[Ce],ue=r.elements.arrow,ce=_&&ue?uc(ue):{width:0,height:0},pe=r.modifiersData["arrow#persistent"]?r.modifiersData["arrow#persistent"].padding:lv(),ge=pe[fe],ke=pe[Ae],we=Ji(0,ee[Ce],ce[Ce]),Te=Y?ee[Ce]/2-$-we-ge-ve.mainAxis:x-we-ge-ve.mainAxis,tn=Y?-ee[Ce]/2+$+we+ke+ve.mainAxis:L+we+ke+ve.mainAxis,ht=r.elements.arrow&&yo(r.elements.arrow),_o=ht?W==="y"?ht.clientTop||0:ht.clientLeft||0:0,Wt=(V=ae?.[W])!=null?V:0,ri=he+Te-Wt-_o,xo=he+tn-Wt,ii=Ji(_?Ga(H,ri):H,he,_?lr(X,xo):X);Q[W]=ii,se[W]=ii-he}if(p){var fr,ko=W==="x"?mn:hn,oi=W==="x"?In:Pn,gn=Q[j],bn=j==="y"?"height":"width",dr=gn+T[ko],ai=gn-T[oi],pr=[mn,hn].indexOf(M)!==-1,li=(fr=ae?.[j])!=null?fr:0,si=pr?dr:gn-ee[bn]-re[bn]-li+ve.altAxis,mr=pr?gn+ee[bn]+re[bn]-li-ve.altAxis:ai,Ht=_&&pr?wC(si,gn,mr):Ji(_?si:dr,gn,_?mr:ai);Q[j]=Ht,se[j]=Ht-gn}r.modifiersData[a]=se}}const QC={name:"preventOverflow",enabled:!0,phase:"main",fn:qC,requiresIfExists:["offset"]};function XC(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function JC(n){return n===_n(n)||!Jn(n)?fc(n):XC(n)}function ZC(n){var r=n.getBoundingClientRect(),o=Jr(r.width)/n.offsetWidth||1,a=Jr(r.height)/n.offsetHeight||1;return o!==1||a!==1}function eE(n,r,o){o===void 0&&(o=!1);var a=Jn(r),s=Jn(r)&&ZC(r),u=Yt(r),f=Zr(n,s,o),p={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(a||!a&&!o)&&((Ut(r)!=="body"||pc(u))&&(p=JC(r)),Jn(r)?(m=Zr(r,!0),m.x+=r.clientLeft,m.y+=r.clientTop):u&&(m.x=dc(u))),{x:f.left+p.scrollLeft-m.x,y:f.top+p.scrollTop-m.y,width:f.width,height:f.height}}function nE(n){var r=new Map,o=new Set,a=[];n.forEach(function(u){r.set(u.name,u)});function s(u){o.add(u.name);var f=[].concat(u.requires||[],u.requiresIfExists||[]);f.forEach(function(p){if(!o.has(p)){var m=r.get(p);m&&s(m)}}),a.push(u)}return n.forEach(function(u){o.has(u.name)||s(u)}),a}function tE(n){var r=nE(n);return vC.reduce(function(o,a){return o.concat(r.filter(function(s){return s.phase===a}))},[])}function rE(n){var r;return function(){return r||(r=new Promise(function(o){Promise.resolve().then(function(){r=void 0,o(n())})})),r}}function iE(n){var r=n.reduce(function(o,a){var s=o[a.name];return o[a.name]=s?Object.assign({},s,a,{options:Object.assign({},s.options,a.options),data:Object.assign({},s.data,a.data)}):a,o},{});return Object.keys(r).map(function(o){return r[o]})}var lm={placement:"bottom",modifiers:[],strategy:"absolute"};function sm(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return!r.some(function(a){return!(a&&typeof a.getBoundingClientRect=="function")})}function oE(n){n===void 0&&(n={});var r=n,o=r.defaultModifiers,a=o===void 0?[]:o,s=r.defaultOptions,u=s===void 0?lm:s;return function(p,m,v){v===void 0&&(v=u);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},lm,u),modifiersData:{},elements:{reference:p,popper:m},attributes:{},styles:{}},y=[],C=!1,_={state:g,setOptions:function(M){var b=typeof M=="function"?M(g.options):M;N(),g.options=Object.assign({},u,g.options,b),g.scrollParents={reference:sr(p)?Zi(p):p.contextElement?Zi(p.contextElement):[],popper:Zi(m)};var Y=tE(iE([].concat(a,g.options.modifiers)));return g.orderedModifiers=Y.filter(function(W){return W.enabled}),I(),_.update()},forceUpdate:function(){if(!C){var M=g.elements,b=M.reference,Y=M.popper;if(sm(b,Y)){g.rects={reference:eE(b,yo(Y),g.options.strategy==="fixed"),popper:uc(Y)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(ve){return g.modifiersData[ve.name]=Object.assign({},ve.data)});for(var W=0;W<g.orderedModifiers.length;W++){if(g.reset===!0){g.reset=!1,W=-1;continue}var j=g.orderedModifiers[W],Q=j.fn,ee=j.options,re=ee===void 0?{}:ee,de=j.name;typeof Q=="function"&&(g=Q({state:g,options:re,name:de,instance:_})||g)}}}},update:rE(function(){return new Promise(function(T){_.forceUpdate(),T(g)})}),destroy:function(){N(),C=!0}};if(!sm(p,m))return _;_.setOptions(v).then(function(T){!C&&v.onFirstUpdate&&v.onFirstUpdate(T)});function I(){g.orderedModifiers.forEach(function(T){var M=T.name,b=T.options,Y=b===void 0?{}:b,W=T.effect;if(typeof W=="function"){var j=W({state:g,name:M,instance:_,options:Y}),Q=function(){};y.push(j||Q)}})}function N(){y.forEach(function(T){return T()}),y=[]}return _}}const aE=oE({defaultModifiers:[$C,KC,AC,RC,HC,BC,QC,_C]}),lE=["enabled","placement","strategy","modifiers"];function sE(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}const uE={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},cE={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:n})=>()=>{const{reference:r,popper:o}=n.elements;if("removeAttribute"in r){const a=(r.getAttribute("aria-describedby")||"").split(",").filter(s=>s.trim()!==o.id);a.length?r.setAttribute("aria-describedby",a.join(",")):r.removeAttribute("aria-describedby")}},fn:({state:n})=>{var r;const{popper:o,reference:a}=n.elements,s=(r=o.getAttribute("role"))==null?void 0:r.toLowerCase();if(o.id&&s==="tooltip"&&"setAttribute"in a){const u=a.getAttribute("aria-describedby");if(u&&u.split(",").indexOf(o.id)!==-1)return;a.setAttribute("aria-describedby",u?`${u},${o.id}`:o.id)}}},fE=[];function dE(n,r,o={}){let{enabled:a=!0,placement:s="bottom",strategy:u="absolute",modifiers:f=fE}=o,p=sE(o,lE);const m=O.useRef(f),v=O.useRef(),g=O.useCallback(()=>{var T;(T=v.current)==null||T.update()},[]),y=O.useCallback(()=>{var T;(T=v.current)==null||T.forceUpdate()},[]),[C,_]=iC(O.useState({placement:s,update:g,forceUpdate:y,attributes:{},styles:{popper:{},arrow:{}}})),I=O.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:T})=>{const M={},b={};Object.keys(T.elements).forEach(Y=>{M[Y]=T.styles[Y],b[Y]=T.attributes[Y]}),_({state:T,styles:M,attributes:b,update:g,forceUpdate:y,placement:T.placement})}}),[g,y,_]),N=O.useMemo(()=>(Xi(m.current,f)||(m.current=f),m.current),[f]);return O.useEffect(()=>{!v.current||!a||v.current.setOptions({placement:s,strategy:u,modifiers:[...N,I,uE]})},[u,s,I,a,N]),O.useEffect(()=>{if(!(!a||n==null||r==null))return v.current=aE(n,r,Object.assign({},p,{placement:s,strategy:u,modifiers:[...N,cE,I]})),()=>{v.current!=null&&(v.current.destroy(),v.current=void 0,_(T=>Object.assign({},T,{attributes:{},styles:{popper:{}}})))}},[a,n,r]),C}function um(n,r){if(n.contains)return n.contains(r);if(n.compareDocumentPosition)return n===r||!!(n.compareDocumentPosition(r)&16)}var fu,cm;function pE(){if(cm)return fu;cm=1;var n=function(){};return fu=n,fu}var mE=pE();const hE=mo(mE),fm=()=>{};function vE(n){return n.button===0}function gE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}const du=n=>n&&("current"in n?n.current:n),dm={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function yE(n,r=fm,{disabled:o,clickTrigger:a="click"}={}){const s=O.useRef(!1),u=O.useRef(!1),f=O.useCallback(v=>{const g=du(n);hE(!!g,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),s.current=!g||gE(v)||!vE(v)||!!um(g,v.target)||u.current,u.current=!1},[n]),p=Mt(v=>{const g=du(n);g&&um(g,v.target)?u.current=!0:u.current=!1}),m=Mt(v=>{s.current||r(v)});O.useEffect(()=>{var v,g;if(o||n==null)return;const y=IS(du(n)),C=y.defaultView||window;let _=(v=C.event)!=null?v:(g=C.parent)==null?void 0:g.event,I=null;dm[a]&&(I=La(y,dm[a],p,!0));const N=La(y,a,f,!0),T=La(y,a,b=>{if(b===_){_=void 0;return}m(b)});let M=[];return"ontouchstart"in y.documentElement&&(M=[].slice.call(y.body.children).map(b=>La(b,"mousemove",fm))),()=>{I?.(),N(),T(),M.forEach(b=>b())}},[n,o,a,f,p,m])}function wE(n){const r={};return Array.isArray(n)?(n?.forEach(o=>{r[o.name]=o}),r):n||r}function SE(n={}){return Array.isArray(n)?n:Object.keys(n).map(r=>(n[r].name=r,n[r]))}function CE({enabled:n,enableEvents:r,placement:o,flip:a,offset:s,fixed:u,containerPadding:f,arrowElement:p,popperConfig:m={}}){var v,g,y,C,_;const I=wE(m.modifiers);return Object.assign({},m,{placement:o,enabled:n,strategy:u?"fixed":m.strategy,modifiers:SE(Object.assign({},I,{eventListeners:{enabled:r,options:(v=I.eventListeners)==null?void 0:v.options},preventOverflow:Object.assign({},I.preventOverflow,{options:f?Object.assign({padding:f},(g=I.preventOverflow)==null?void 0:g.options):(y=I.preventOverflow)==null?void 0:y.options}),offset:{options:Object.assign({offset:s},(C=I.offset)==null?void 0:C.options)},arrow:Object.assign({},I.arrow,{enabled:!!p,options:Object.assign({},(_=I.arrow)==null?void 0:_.options,{element:p})}),flip:Object.assign({enabled:!!a},I.flip)}))})}const EE=["children","usePopper"];function _E(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}const xE=()=>{};function dv(n={}){const r=O.useContext(tl),[o,a]=BS(),s=O.useRef(!1),{flip:u,offset:f,rootCloseEvent:p,fixed:m=!1,placement:v,popperConfig:g={},enableEventListeners:y=!0,usePopper:C=!!r}=n,_=r?.show==null?!!n.show:r.show;_&&!s.current&&(s.current=!0);const I=Q=>{r?.toggle(!1,Q)},{placement:N,setMenu:T,menuElement:M,toggleElement:b}=r||{},Y=dE(b,M,CE({placement:v||N||"bottom-start",enabled:C,enableEvents:y??_,offset:f,flip:u,fixed:m,arrowElement:o,popperConfig:g})),W=Object.assign({ref:T||xE,"aria-labelledby":b?.id},Y.attributes.popper,{style:Y.styles.popper}),j={show:_,placement:N,hasShown:s.current,toggle:r?.toggle,popper:C?Y:null,arrowProps:C?Object.assign({ref:a},Y.attributes.arrow,{style:Y.styles.arrow}):{}};return yE(M,I,{clickTrigger:p,disabled:!_}),[W,j]}function pv(n){let{children:r,usePopper:o=!0}=n,a=_E(n,EE);const[s,u]=dv(Object.assign({},a,{usePopper:o}));return P.jsx(P.Fragment,{children:r(s,u)})}pv.displayName="DropdownMenu";const mv={prefix:String(Math.round(Math.random()*1e10)),current:0},hv=vn.createContext(mv),kE=vn.createContext(!1);let pu=new WeakMap;function OE(n=!1){let r=O.useContext(hv),o=O.useRef(null);if(o.current===null&&!n){var a,s;let u=(s=vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||s===void 0||(a=s.ReactCurrentOwner)===null||a===void 0?void 0:a.current;if(u){let f=pu.get(u);f==null?pu.set(u,{id:r.current,state:u.memoizedState}):u.memoizedState!==f.state&&(r.current=f.id,pu.delete(u))}o.current=++r.current}return o.current}function AE(n){let r=O.useContext(hv),o=OE(!!n),a=`react-aria${r.prefix}`;return n||`${a}-${o}`}function TE(n){let r=vn.useId(),[o]=O.useState(bE()),a=o?"react-aria":`react-aria${mv.prefix}`;return n||`${a}-${r}`}const RE=typeof vn.useId=="function"?TE:AE;function NE(){return!1}function IE(){return!0}function PE(n){return()=>{}}function bE(){return typeof vn.useSyncExternalStore=="function"?vn.useSyncExternalStore(PE,NE,IE):O.useContext(kE)}const vv=n=>{var r;return((r=n.getAttribute("role"))==null?void 0:r.toLowerCase())==="menu"},pm=()=>{};function gv(){const n=RE(),{show:r=!1,toggle:o=pm,setToggle:a,menuElement:s}=O.useContext(tl)||{},u=O.useCallback(p=>{o(!r,p)},[r,o]),f={id:n,ref:a||pm,onClick:u,"aria-expanded":!!r};return s&&vv(s)&&(f["aria-haspopup"]=!0),[f,{show:r,toggle:o}]}function yv({children:n}){const[r,o]=gv();return P.jsx(P.Fragment,{children:n(r,o)})}yv.displayName="DropdownToggle";const Fu=O.createContext(null),mm=(n,r=null)=>n!=null?String(n):r||null,wv=O.createContext(null);wv.displayName="NavContext";const LE="data-rr-ui-";function Sv(n){return`${LE}${n}`}const DE=["eventKey","disabled","onClick","active","as"];function FE(n,r){if(n==null)return{};var o={};for(var a in n)if({}.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;o[a]=n[a]}return o}function Cv({key:n,href:r,active:o,disabled:a,onClick:s}){const u=O.useContext(Fu),f=O.useContext(wv),{activeKey:p}=f||{},m=mm(n,r),v=o==null&&n!=null?mm(p)===m:o;return[{onClick:Mt(y=>{a||(s?.(y),u&&!y.isPropagationStopped()&&u(m,y))}),"aria-disabled":a||void 0,"aria-selected":v,[Sv("dropdown-item")]:""},{isActive:v}]}const Ev=O.forwardRef((n,r)=>{let{eventKey:o,disabled:a,onClick:s,active:u,as:f=Hh}=n,p=FE(n,DE);const[m]=Cv({key:o,href:p.href,disabled:a,onClick:s,active:u});return P.jsx(f,Object.assign({},p,{ref:r},m))});Ev.displayName="DropdownItem";const _v=O.createContext(zh?window:void 0);_v.Provider;function ME(){return O.useContext(_v)}function hm(){const n=rC(),r=O.useRef(null),o=O.useCallback(a=>{r.current=a,n()},[n]);return[r,o]}function wo({defaultShow:n,show:r,onSelect:o,onToggle:a,itemSelector:s=`* [${Sv("dropdown-item")}]`,focusFirstItemOnShow:u,placement:f="bottom-start",children:p}){const m=ME(),[v,g]=tC(r,n,a),[y,C]=hm(),_=y.current,[I,N]=hm(),T=I.current,M=WS(v),b=O.useRef(null),Y=O.useRef(!1),W=O.useContext(Fu),j=O.useCallback((ae,se,V=se?.type)=>{g(ae,{originalEvent:se,source:V})},[g]),Q=Mt((ae,se)=>{o?.(ae,se),j(!1,se,"select"),se.isPropagationStopped()||W?.(ae,se)}),ee=O.useMemo(()=>({toggle:j,placement:f,show:v,menuElement:_,toggleElement:T,setMenu:C,setToggle:N}),[j,f,v,_,T,C,N]);_&&M&&!v&&(Y.current=_.contains(_.ownerDocument.activeElement));const re=Mt(()=>{T&&T.focus&&T.focus()}),de=Mt(()=>{const ae=b.current;let se=u;if(se==null&&(se=y.current&&vv(y.current)?"keyboard":!1),se===!1||se==="keyboard"&&!/^key.+$/.test(ae))return;const V=Xp(y.current,s)[0];V&&V.focus&&V.focus()});O.useEffect(()=>{v?de():Y.current&&(Y.current=!1,re())},[v,Y,re,de]),O.useEffect(()=>{b.current=null});const ve=(ae,se)=>{if(!y.current)return null;const V=Xp(y.current,s);let fe=V.indexOf(ae)+se;return fe=Math.max(0,Math.min(fe,V.length)),V[fe]};return $S(O.useCallback(()=>m.document,[m]),"keydown",ae=>{var se,V;const{key:fe}=ae,Ae=ae.target,Ce=(se=y.current)==null?void 0:se.contains(Ae),he=(V=I.current)==null?void 0:V.contains(Ae);if(/input|textarea/i.test(Ae.tagName)&&(fe===" "||fe!=="Escape"&&Ce||fe==="Escape"&&Ae.type==="search")||!Ce&&!he||fe==="Tab"&&(!y.current||!v))return;b.current=ae.type;const X={originalEvent:ae,source:ae.type};switch(fe){case"ArrowUp":{const $=ve(Ae,-1);$&&$.focus&&$.focus(),ae.preventDefault();return}case"ArrowDown":if(ae.preventDefault(),!v)g(!0,X);else{const $=ve(Ae,1);$&&$.focus&&$.focus()}return;case"Tab":$h(Ae.ownerDocument,"keyup",$=>{var x;($.key==="Tab"&&!$.target||!((x=y.current)!=null&&x.contains($.target)))&&g(!1,X)},{once:!0});break;case"Escape":fe==="Escape"&&(ae.preventDefault(),ae.stopPropagation()),g(!1,X);break}}),P.jsx(Fu.Provider,{value:Q,children:P.jsx(tl.Provider,{value:ee,children:p})})}wo.displayName="Dropdown";wo.Menu=pv;wo.Toggle=yv;wo.Item=Ev;const mc=O.createContext({});mc.displayName="DropdownContext";const xv=O.forwardRef(({className:n,bsPrefix:r,as:o="hr",role:a="separator",...s},u)=>(r=xe(r,"dropdown-divider"),P.jsx(o,{ref:u,className:Se(n,r),role:a,...s})));xv.displayName="DropdownDivider";const kv=O.forwardRef(({className:n,bsPrefix:r,as:o="div",role:a="heading",...s},u)=>(r=xe(r,"dropdown-header"),P.jsx(o,{ref:u,className:Se(n,r),role:a,...s})));kv.displayName="DropdownHeader";const Ov=O.forwardRef(({bsPrefix:n,className:r,eventKey:o,disabled:a=!1,onClick:s,active:u,as:f=Vh,...p},m)=>{const v=xe(n,"dropdown-item"),[g,y]=Cv({key:o,href:p.href,disabled:a,onClick:s,active:u});return P.jsx(f,{...p,...g,ref:m,className:Se(r,v,y.isActive&&"active",a&&"disabled")})});Ov.displayName="DropdownItem";const Av=O.forwardRef(({className:n,bsPrefix:r,as:o="span",...a},s)=>(r=xe(r,"dropdown-item-text"),P.jsx(o,{ref:s,className:Se(n,r),...a})));Av.displayName="DropdownItemText";const jE=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",UE=typeof document<"u",BE=UE||jE?O.useLayoutEffect:O.useEffect,hc=O.createContext(null);hc.displayName="InputGroupContext";const Tv=O.createContext(null);Tv.displayName="NavbarContext";function Rv(n,r){return n}function Nv(n,r,o){const a=o?"top-end":"top-start",s=o?"top-start":"top-end",u=o?"bottom-end":"bottom-start",f=o?"bottom-start":"bottom-end",p=o?"right-start":"left-start",m=o?"right-end":"left-end",v=o?"left-start":"right-start",g=o?"left-end":"right-end";let y=n?f:u;return r==="up"?y=n?s:a:r==="end"?y=n?g:v:r==="start"?y=n?m:p:r==="down-centered"?y="bottom":r==="up-centered"&&(y="top"),y}const Iv=O.forwardRef(({bsPrefix:n,className:r,align:o,rootCloseEvent:a,flip:s=!0,show:u,renderOnMount:f,as:p="div",popperConfig:m,variant:v,...g},y)=>{let C=!1;const _=O.useContext(Tv),I=xe(n,"dropdown-menu"),{align:N,drop:T,isRTL:M}=O.useContext(mc);o=o||N;const b=O.useContext(hc),Y=[];if(o)if(typeof o=="object"){const ae=Object.keys(o);if(ae.length){const se=ae[0],V=o[se];C=V==="start",Y.push(`${I}-${se}-${V}`)}}else o==="end"&&(C=!0);const W=Nv(C,T,M),[j,{hasShown:Q,popper:ee,show:re,toggle:de}]=dv({flip:s,rootCloseEvent:a,show:u,usePopper:!_&&Y.length===0,offset:[0,2],popperConfig:m,placement:W});if(j.ref=Yh(Rv(y),j.ref),BE(()=>{re&&ee?.update()},[re]),!Q&&!f&&!b)return null;typeof p!="string"&&(j.show=re,j.close=()=>de?.(!1),j.align=o);let ve=g.style;return ee!=null&&ee.placement&&(ve={...g.style,...j.style},g["x-placement"]=ee.placement),P.jsx(p,{...g,...j,style:ve,...(Y.length||_)&&{"data-bs-popper":"static"},className:Se(r,I,re&&"show",C&&`${I}-end`,v&&`${I}-${v}`,...Y)})});Iv.displayName="DropdownMenu";const Pv=O.forwardRef(({bsPrefix:n,split:r,className:o,childBsPrefix:a,as:s=Qr,...u},f)=>{const p=xe(n,"dropdown-toggle"),m=O.useContext(tl);a!==void 0&&(u.bsPrefix=a);const[v]=gv();return v.ref=Yh(v.ref,Rv(f)),P.jsx(s,{className:Se(o,p,r&&`${p}-split`,m?.show&&"show"),...v,...u})});Pv.displayName="DropdownToggle";const bv=O.forwardRef((n,r)=>{const{bsPrefix:o,drop:a="down",show:s,className:u,align:f="start",onSelect:p,onToggle:m,focusFirstItemOnShow:v,as:g="div",navbar:y,autoClose:C=!0,..._}=AS(n,{show:"onToggle"}),I=O.useContext(hc),N=xe(o,"dropdown"),T=NS(),M=ee=>C===!1?ee==="click":C==="inside"?ee!=="rootClose":C==="outside"?ee!=="select":!0,b=US((ee,re)=>{var de;!((de=re.originalEvent)==null||(de=de.target)==null)&&de.classList.contains("dropdown-toggle")&&re.source==="mousedown"||(re.originalEvent.currentTarget===document&&(re.source!=="keydown"||re.originalEvent.key==="Escape")&&(re.source="rootClose"),M(re.source)&&m?.(ee,re))}),W=Nv(f==="end",a,T),j=O.useMemo(()=>({align:f,drop:a,isRTL:T}),[f,a,T]),Q={down:N,"down-centered":`${N}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return P.jsx(mc.Provider,{value:j,children:P.jsx(wo,{placement:W,show:s,onSelect:p,onToggle:b,focusFirstItemOnShow:v,itemSelector:`.${N}-item:not(.disabled):not(:disabled)`,children:I?_.children:P.jsx(g,{..._,ref:r,className:Se(u,s&&"show",Q[a])})})})});bv.displayName="Dropdown";const mu=Object.assign(bv,{Toggle:Pv,Menu:Iv,Item:Ov,ItemText:Av,Divider:xv,Header:kv}),zE={type:Vr.string,tooltip:Vr.bool,as:Vr.elementType},il=O.forwardRef(({as:n="div",className:r,type:o="valid",tooltip:a=!1,...s},u)=>P.jsx(n,{...s,ref:u,className:Se(r,`${o}-${a?"tooltip":"feedback"}`)}));il.displayName="Feedback";il.propTypes=zE;const ft=O.createContext({}),vc=O.forwardRef(({id:n,bsPrefix:r,className:o,type:a="checkbox",isValid:s=!1,isInvalid:u=!1,as:f="input",...p},m)=>{const{controlId:v}=O.useContext(ft);return r=xe(r,"form-check-input"),P.jsx(f,{...p,ref:m,type:a,id:n||v,className:Se(o,r,s&&"is-valid",u&&"is-invalid")})});vc.displayName="FormCheckInput";const qa=O.forwardRef(({bsPrefix:n,className:r,htmlFor:o,...a},s)=>{const{controlId:u}=O.useContext(ft);return n=xe(n,"form-check-label"),P.jsx("label",{...a,ref:s,htmlFor:o||u,className:Se(r,n)})});qa.displayName="FormCheckLabel";const Lv=O.forwardRef(({id:n,bsPrefix:r,bsSwitchPrefix:o,inline:a=!1,reverse:s=!1,disabled:u=!1,isValid:f=!1,isInvalid:p=!1,feedbackTooltip:m=!1,feedback:v,feedbackType:g,className:y,style:C,title:_="",type:I="checkbox",label:N,children:T,as:M="input",...b},Y)=>{r=xe(r,"form-check"),o=xe(o,"form-switch");const{controlId:W}=O.useContext(ft),j=O.useMemo(()=>({controlId:n||W}),[W,n]),Q=!T&&N!=null&&N!==!1||ZS(T,qa),ee=P.jsx(vc,{...b,type:I==="switch"?"checkbox":I,ref:Y,isValid:f,isInvalid:p,disabled:u,as:M});return P.jsx(ft.Provider,{value:j,children:P.jsx("div",{style:C,className:Se(y,Q&&r,a&&`${r}-inline`,s&&`${r}-reverse`,I==="switch"&&o),children:T||P.jsxs(P.Fragment,{children:[ee,Q&&P.jsx(qa,{title:_,children:N}),v&&P.jsx(il,{type:g,tooltip:m,children:v})]})})})});Lv.displayName="FormCheck";const Qa=Object.assign(Lv,{Input:vc,Label:qa}),Dv=O.forwardRef(({bsPrefix:n,type:r,size:o,htmlSize:a,id:s,className:u,isValid:f=!1,isInvalid:p=!1,plaintext:m,readOnly:v,as:g="input",...y},C)=>{const{controlId:_}=O.useContext(ft);return n=xe(n,"form-control"),P.jsx(g,{...y,type:r,size:a,ref:C,readOnly:v,id:s||_,className:Se(u,m?`${n}-plaintext`:n,o&&`${n}-${o}`,r==="color"&&`${n}-color`,f&&"is-valid",p&&"is-invalid")})});Dv.displayName="FormControl";const $E=Object.assign(Dv,{Feedback:il}),Fv=O.forwardRef(({className:n,bsPrefix:r,as:o="div",...a},s)=>(r=xe(r,"form-floating"),P.jsx(o,{ref:s,className:Se(n,r),...a})));Fv.displayName="FormFloating";const gc=O.forwardRef(({controlId:n,as:r="div",...o},a)=>{const s=O.useMemo(()=>({controlId:n}),[n]);return P.jsx(ft.Provider,{value:s,children:P.jsx(r,{...o,ref:a})})});gc.displayName="FormGroup";const Mv=O.forwardRef(({as:n="label",bsPrefix:r,column:o=!1,visuallyHidden:a=!1,className:s,htmlFor:u,...f},p)=>{const{controlId:m}=O.useContext(ft);r=xe(r,"form-label");let v="col-form-label";typeof o=="string"&&(v=`${v} ${v}-${o}`);const g=Se(s,r,a&&"visually-hidden",o&&v);return u=u||m,o?P.jsx(vo,{ref:p,as:"label",className:g,htmlFor:u,...f}):P.jsx(n,{ref:p,className:g,htmlFor:u,...f})});Mv.displayName="FormLabel";const jv=O.forwardRef(({bsPrefix:n,className:r,id:o,...a},s)=>{const{controlId:u}=O.useContext(ft);return n=xe(n,"form-range"),P.jsx("input",{...a,type:"range",ref:s,className:Se(r,n),id:o||u})});jv.displayName="FormRange";const Uv=O.forwardRef(({bsPrefix:n,size:r,htmlSize:o,className:a,isValid:s=!1,isInvalid:u=!1,id:f,...p},m)=>{const{controlId:v}=O.useContext(ft);return n=xe(n,"form-select"),P.jsx("select",{...p,size:o,ref:m,className:Se(a,n,r&&`${n}-${r}`,s&&"is-valid",u&&"is-invalid"),id:f||v})});Uv.displayName="FormSelect";const Bv=O.forwardRef(({bsPrefix:n,className:r,as:o="small",muted:a,...s},u)=>(n=xe(n,"form-text"),P.jsx(o,{...s,ref:u,className:Se(r,n,a&&"text-muted")})));Bv.displayName="FormText";const zv=O.forwardRef((n,r)=>P.jsx(Qa,{...n,ref:r,type:"switch"}));zv.displayName="Switch";const YE=Object.assign(zv,{Input:Qa.Input,Label:Qa.Label}),$v=O.forwardRef(({bsPrefix:n,className:r,children:o,controlId:a,label:s,...u},f)=>(n=xe(n,"form-floating"),P.jsxs(gc,{ref:f,className:Se(r,n),controlId:a,...u,children:[o,P.jsx("label",{htmlFor:a,children:s})]})));$v.displayName="FloatingLabel";const WE={_ref:Vr.any,validated:Vr.bool,as:Vr.elementType},yc=O.forwardRef(({className:n,validated:r,as:o="form",...a},s)=>P.jsx(o,{...a,ref:s,className:Se(n,r&&"was-validated")}));yc.displayName="Form";yc.propTypes=WE;const HE=Object.assign(yc,{Group:gc,Control:$E,Floating:Fv,Check:Qa,Switch:YE,Label:Mv,Text:Bv,Range:jv,Select:Uv,FloatingLabel:$v}),Xa=O.forwardRef(({bsPrefix:n,className:r,as:o="div",...a},s)=>{const u=xe(n,"row"),f=Uh(),p=Bh(),m=`${u}-cols`,v=[];return f.forEach(g=>{const y=a[g];delete a[g];let C;y!=null&&typeof y=="object"?{cols:C}=y:C=y;const _=g!==p?`-${g}`:"";C!=null&&v.push(`${m}${_}-${C}`)}),P.jsx(o,{ref:s,...a,className:Se(r,u,...v)})});Xa.displayName="Row";function VE(n){let r="";n.lines&&(r=n.lines.map(u=>P.jsx("li",{children:u},u)));const o=()=>{let u="Answer-cards rounded-3 shadow-sm";return(n.isSelected||n.isSubmitted&&n.isActuallyCorrect)&&(u+=" selected-card"),n.isSubmitted&&(n.isActuallyCorrect?u+=" correct":n.isSelected&&(u+=" wrong")),u},a=n.isSubmitted&&(n.isSelected||n.isActuallyCorrect),s=n.isSubmitted&&!n.isSelected&&!n.isActuallyCorrect;return P.jsx(vo,{className:s?"fade-out":"",children:P.jsx(Gn,{className:o(),onClick:n.onSelect,children:P.jsxs(Gn.Body,{className:"p-4",children:[a&&P.jsxs(Gn.Text,{children:[n.title," ",P.jsx("span",{className:"text-muted fw-light",children:n.titlealt})]}),P.jsx("ul",{className:"list-unstyled mt-3",children:P.jsx("small",{children:r})})]})})})}function KE(n){let r="";return n!==void 0&&n.lines!==void 0&&(r=n.lines.map(o=>P.jsx("li",{children:o},o))),P.jsx(vo,{md:"3",children:P.jsx(Gn,{className:"Prompt-cards rounded-3 shadow-sm",children:P.jsxs(Gn.Body,{className:"p-4",children:[P.jsx(Gn.Text,{children:n.text}),P.jsx("ul",{className:"list-unstyled mt-3",children:P.jsx("small",{children:r})})]})})})}function Mu(n,r){(r==null||r>n.length)&&(r=n.length);for(var o=0,a=Array(r);o<r;o++)a[o]=n[o];return a}function GE(n){if(Array.isArray(n))return n}function qE(n){if(Array.isArray(n))return Mu(n)}function QE(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function XE(n,r){for(var o=0;o<r.length;o++){var a=r[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,Yv(a.key),a)}}function JE(n,r,o){return r&&XE(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ba(n,r){var o=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=wc(n))||r){o&&(n=o);var a=0,s=function(){};return{s,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(m){throw m},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u,f=!0,p=!1;return{s:function(){o=o.call(n)},n:function(){var m=o.next();return f=m.done,m},e:function(m){p=!0,u=m},f:function(){try{f||o.return==null||o.return()}finally{if(p)throw u}}}}function me(n,r,o){return(r=Yv(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}function ZE(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function e_(n,r){var o=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var a,s,u,f,p=[],m=!0,v=!1;try{if(u=(o=o.call(n)).next,r===0){if(Object(o)!==o)return;m=!1}else for(;!(m=(a=u.call(o)).done)&&(p.push(a.value),p.length!==r);m=!0);}catch(g){v=!0,s=g}finally{try{if(!m&&o.return!=null&&(f=o.return(),Object(f)!==f))return}finally{if(v)throw s}}return p}}function n_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vm(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),o.push.apply(o,a)}return o}function B(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?vm(Object(o),!0).forEach(function(a){me(n,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):vm(Object(o)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(o,a))})}return n}function ol(n,r){return GE(n)||e_(n,r)||wc(n,r)||n_()}function $n(n){return qE(n)||ZE(n)||wc(n)||t_()}function r_(n,r){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var a=o.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function Yv(n){var r=r_(n,"string");return typeof r=="symbol"?r:r+""}function Ja(n){"@babel/helpers - typeof";return Ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ja(n)}function wc(n,r){if(n){if(typeof n=="string")return Mu(n,r);var o={}.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Mu(n,r):void 0}}var gm=function(){},Sc={},Wv={},Hv=null,Vv={mark:gm,measure:gm};try{typeof window<"u"&&(Sc=window),typeof document<"u"&&(Wv=document),typeof MutationObserver<"u"&&(Hv=MutationObserver),typeof performance<"u"&&(Vv=performance)}catch{}var i_=Sc.navigator||{},ym=i_.userAgent,wm=ym===void 0?"":ym,Bt=Sc,Pe=Wv,Sm=Hv,Fa=Vv;Bt.document;var mt=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",Kv=~wm.indexOf("MSIE")||~wm.indexOf("Trident/"),hu,o_=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,a_=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Gv={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},l_={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},qv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Qe="classic",So="duotone",Qv="sharp",Xv="sharp-duotone",Jv="chisel",Zv="etch",eg="jelly",ng="jelly-duo",tg="jelly-fill",rg="notdog",ig="notdog-duo",og="slab",ag="slab-press",lg="thumbprint",sg="utility",ug="utility-duo",cg="utility-fill",fg="whiteboard",s_="Classic",u_="Duotone",c_="Sharp",f_="Sharp Duotone",d_="Chisel",p_="Etch",m_="Jelly",h_="Jelly Duo",v_="Jelly Fill",g_="Notdog",y_="Notdog Duo",w_="Slab",S_="Slab Press",C_="Thumbprint",E_="Utility",__="Utility Duo",x_="Utility Fill",k_="Whiteboard",dg=[Qe,So,Qv,Xv,Jv,Zv,eg,ng,tg,rg,ig,og,ag,lg,sg,ug,cg,fg];hu={},me(me(me(me(me(me(me(me(me(me(hu,Qe,s_),So,u_),Qv,c_),Xv,f_),Jv,d_),Zv,p_),eg,m_),ng,h_),tg,v_),rg,g_),me(me(me(me(me(me(me(me(hu,ig,y_),og,w_),ag,S_),lg,C_),sg,E_),ug,__),cg,x_),fg,k_);var O_={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},A_={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},T_=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),R_={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},pg=["fak","fa-kit","fakd","fa-kit-duotone"],Cm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},N_=["kit"],I_="kit",P_="kit-duotone",b_="Kit",L_="Kit Duotone";me(me({},I_,b_),P_,L_);var D_={kit:{"fa-kit":"fak"}},F_={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},M_={kit:{fak:"fa-kit"}},Em={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},vu,Ma={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j_=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],U_="classic",B_="duotone",z_="sharp",$_="sharp-duotone",Y_="chisel",W_="etch",H_="jelly",V_="jelly-duo",K_="jelly-fill",G_="notdog",q_="notdog-duo",Q_="slab",X_="slab-press",J_="thumbprint",Z_="utility",ex="utility-duo",nx="utility-fill",tx="whiteboard",rx="Classic",ix="Duotone",ox="Sharp",ax="Sharp Duotone",lx="Chisel",sx="Etch",ux="Jelly",cx="Jelly Duo",fx="Jelly Fill",dx="Notdog",px="Notdog Duo",mx="Slab",hx="Slab Press",vx="Thumbprint",gx="Utility",yx="Utility Duo",wx="Utility Fill",Sx="Whiteboard";vu={},me(me(me(me(me(me(me(me(me(me(vu,U_,rx),B_,ix),z_,ox),$_,ax),Y_,lx),W_,sx),H_,ux),V_,cx),K_,fx),G_,dx),me(me(me(me(me(me(me(me(vu,q_,px),Q_,mx),X_,hx),J_,vx),Z_,gx),ex,yx),nx,wx),tx,Sx);var Cx="kit",Ex="kit-duotone",_x="Kit",xx="Kit Duotone";me(me({},Cx,_x),Ex,xx);var kx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Ox={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},ju={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Ax=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],mg=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(j_,Ax),Tx=["solid","regular","light","thin","duotone","brands","semibold"],hg=[1,2,3,4,5,6,7,8,9,10],Rx=hg.concat([11,12,13,14,15,16,17,18,19,20]),Nx=["aw","fw","pull-left","pull-right"],Ix=[].concat($n(Object.keys(Ox)),Tx,Nx,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Ma.GROUP,Ma.SWAP_OPACITY,Ma.PRIMARY,Ma.SECONDARY]).concat(hg.map(function(n){return"".concat(n,"x")})).concat(Rx.map(function(n){return"w-".concat(n)})),Px={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},dt="___FONT_AWESOME___",Uu=16,vg="fa",gg="svg-inline--fa",ur="data-fa-i2svg",Bu="data-fa-pseudo-element",bx="data-fa-pseudo-element-pending",Cc="data-prefix",Ec="data-icon",_m="fontawesome-i2svg",Lx="async",Dx=["HTML","HEAD","STYLE","SCRIPT"],yg=["::before","::after",":before",":after"],wg=(function(){try{return!0}catch{return!1}})();function Co(n){return new Proxy(n,{get:function(o,a){return a in o?o[a]:o[Qe]}})}var Sg=B({},Gv);Sg[Qe]=B(B(B(B({},{"fa-duotone":"duotone"}),Gv[Qe]),Cm.kit),Cm["kit-duotone"]);var Fx=Co(Sg),zu=B({},R_);zu[Qe]=B(B(B(B({},{duotone:"fad"}),zu[Qe]),Em.kit),Em["kit-duotone"]);var xm=Co(zu),$u=B({},ju);$u[Qe]=B(B({},$u[Qe]),M_.kit);var _c=Co($u),Yu=B({},kx);Yu[Qe]=B(B({},Yu[Qe]),D_.kit);Co(Yu);var Mx=o_,Cg="fa-layers-text",jx=a_,Ux=B({},O_);Co(Ux);var Bx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gu=l_,zx=[].concat($n(N_),$n(Ix)),eo=Bt.FontAwesomeConfig||{};function $x(n){var r=Pe.querySelector("script["+n+"]");if(r)return r.getAttribute(n)}function Yx(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(Pe&&typeof Pe.querySelector=="function"){var Wx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wx.forEach(function(n){var r=ol(n,2),o=r[0],a=r[1],s=Yx($x(o));s!=null&&(eo[a]=s)})}var Eg={styleDefault:"solid",familyDefault:Qe,cssPrefix:vg,replacementClass:gg,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};eo.familyPrefix&&(eo.cssPrefix=eo.familyPrefix);var ni=B(B({},Eg),eo);ni.autoReplaceSvg||(ni.observeMutations=!1);var te={};Object.keys(Eg).forEach(function(n){Object.defineProperty(te,n,{enumerable:!0,set:function(o){ni[n]=o,no.forEach(function(a){return a(te)})},get:function(){return ni[n]}})});Object.defineProperty(te,"familyPrefix",{enumerable:!0,set:function(r){ni.cssPrefix=r,no.forEach(function(o){return o(te)})},get:function(){return ni.cssPrefix}});Bt.FontAwesomeConfig=te;var no=[];function Hx(n){return no.push(n),function(){no.splice(no.indexOf(n),1)}}var Br=Uu,qn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vx(n){if(!(!n||!mt)){var r=Pe.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=n;for(var o=Pe.head.childNodes,a=null,s=o.length-1;s>-1;s--){var u=o[s],f=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(a=u)}return Pe.head.insertBefore(r,a),n}}var Kx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function km(){for(var n=12,r="";n-- >0;)r+=Kx[Math.random()*62|0];return r}function ti(n){for(var r=[],o=(n||[]).length>>>0;o--;)r[o]=n[o];return r}function xc(n){return n.classList?ti(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(r){return r})}function _g(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gx(n){return Object.keys(n||{}).reduce(function(r,o){return r+"".concat(o,'="').concat(_g(n[o]),'" ')},"").trim()}function al(n){return Object.keys(n||{}).reduce(function(r,o){return r+"".concat(o,": ").concat(n[o].trim(),";")},"")}function kc(n){return n.size!==qn.size||n.x!==qn.x||n.y!==qn.y||n.rotate!==qn.rotate||n.flipX||n.flipY}function qx(n){var r=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(u," ").concat(f," ").concat(p)},v={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:m,path:v}}function Qx(n){var r=n.transform,o=n.width,a=o===void 0?Uu:o,s=n.height,u=s===void 0?Uu:s,f="";return Kv?f+="translate(".concat(r.x/Br-a/2,"em, ").concat(r.y/Br-u/2,"em) "):f+="translate(calc(-50% + ".concat(r.x/Br,"em), calc(-50% + ").concat(r.y/Br,"em)) "),f+="scale(".concat(r.size/Br*(r.flipX?-1:1),", ").concat(r.size/Br*(r.flipY?-1:1),") "),f+="rotate(".concat(r.rotate,"deg) "),f}var Xx=`:root, :host {
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
}`;function xg(){var n=vg,r=gg,o=te.cssPrefix,a=te.replacementClass,s=Xx;if(o!==n||a!==r){var u=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),p=new RegExp("\\.".concat(r),"g");s=s.replace(u,".".concat(o,"-")).replace(f,"--".concat(o,"-")).replace(p,".".concat(a))}return s}var Om=!1;function yu(){te.autoAddCss&&!Om&&(Vx(xg()),Om=!0)}var Jx={mixout:function(){return{dom:{css:xg,insertCss:yu}}},hooks:function(){return{beforeDOMElementCreation:function(){yu()},beforeI2svg:function(){yu()}}}},pt=Bt||{};pt[dt]||(pt[dt]={});pt[dt].styles||(pt[dt].styles={});pt[dt].hooks||(pt[dt].hooks={});pt[dt].shims||(pt[dt].shims=[]);var zn=pt[dt],kg=[],Og=function(){Pe.removeEventListener("DOMContentLoaded",Og),Za=1,kg.map(function(r){return r()})},Za=!1;mt&&(Za=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),Za||Pe.addEventListener("DOMContentLoaded",Og));function Zx(n){mt&&(Za?setTimeout(n,0):kg.push(n))}function Eo(n){var r=n.tag,o=n.attributes,a=o===void 0?{}:o,s=n.children,u=s===void 0?[]:s;return typeof n=="string"?_g(n):"<".concat(r," ").concat(Gx(a),">").concat(u.map(Eo).join(""),"</").concat(r,">")}function Am(n,r,o){if(n&&n[r]&&n[r][o])return{prefix:r,iconName:o,icon:n[r][o]}}var wu=function(r,o,a,s){var u=Object.keys(r),f=u.length,p=o,m,v,g;for(a===void 0?(m=1,g=r[u[0]]):(m=0,g=a);m<f;m++)v=u[m],g=p(g,r[v],v,r);return g};function Ag(n){return $n(n).length!==1?null:n.codePointAt(0).toString(16)}function Tm(n){return Object.keys(n).reduce(function(r,o){var a=n[o],s=!!a.icon;return s?r[a.iconName]=a.icon:r[o]=a,r},{})}function Wu(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=o.skipHooks,s=a===void 0?!1:a,u=Tm(r);typeof zn.hooks.addPack=="function"&&!s?zn.hooks.addPack(n,Tm(r)):zn.styles[n]=B(B({},zn.styles[n]||{}),u),n==="fas"&&Wu("fa",r)}var fo=zn.styles,ek=zn.shims,Tg=Object.keys(_c),nk=Tg.reduce(function(n,r){return n[r]=Object.keys(_c[r]),n},{}),Oc=null,Rg={},Ng={},Ig={},Pg={},bg={};function tk(n){return~zx.indexOf(n)}function rk(n,r){var o=r.split("-"),a=o[0],s=o.slice(1).join("-");return a===n&&s!==""&&!tk(s)?s:null}var Lg=function(){var r=function(u){return wu(fo,function(f,p,m){return f[m]=wu(p,u,{}),f},{})};Rg=r(function(s,u,f){if(u[3]&&(s[u[3]]=f),u[2]){var p=u[2].filter(function(m){return typeof m=="number"});p.forEach(function(m){s[m.toString(16)]=f})}return s}),Ng=r(function(s,u,f){if(s[f]=f,u[2]){var p=u[2].filter(function(m){return typeof m=="string"});p.forEach(function(m){s[m]=f})}return s}),bg=r(function(s,u,f){var p=u[2];return s[f]=f,p.forEach(function(m){s[m]=f}),s});var o="far"in fo||te.autoFetchSvg,a=wu(ek,function(s,u){var f=u[0],p=u[1],m=u[2];return p==="far"&&!o&&(p="fas"),typeof f=="string"&&(s.names[f]={prefix:p,iconName:m}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:p,iconName:m}),s},{names:{},unicodes:{}});Ig=a.names,Pg=a.unicodes,Oc=ll(te.styleDefault,{family:te.familyDefault})};Hx(function(n){Oc=ll(n.styleDefault,{family:te.familyDefault})});Lg();function Ac(n,r){return(Rg[n]||{})[r]}function ik(n,r){return(Ng[n]||{})[r]}function or(n,r){return(bg[n]||{})[r]}function Dg(n){return Ig[n]||{prefix:null,iconName:null}}function ok(n){var r=Pg[n],o=Ac("fas",n);return r||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function zt(){return Oc}var Fg=function(){return{prefix:null,iconName:null,rest:[]}};function ak(n){var r=Qe,o=Tg.reduce(function(a,s){return a[s]="".concat(te.cssPrefix,"-").concat(s),a},{});return dg.forEach(function(a){(n.includes(o[a])||n.some(function(s){return nk[a].includes(s)}))&&(r=a)}),r}function ll(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.family,a=o===void 0?Qe:o,s=Fx[a][n];if(a===So&&!n)return"fad";var u=xm[a][n]||xm[a][s],f=n in zn.styles?n:null,p=u||f||null;return p}function lk(n){var r=[],o=null;return n.forEach(function(a){var s=rk(te.cssPrefix,a);s?o=s:a&&r.push(a)}),{iconName:o,rest:r}}function Rm(n){return n.sort().filter(function(r,o,a){return a.indexOf(r)===o})}var Nm=mg.concat(pg);function sl(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.skipLookups,a=o===void 0?!1:o,s=null,u=Rm(n.filter(function(_){return Nm.includes(_)})),f=Rm(n.filter(function(_){return!Nm.includes(_)})),p=u.filter(function(_){return s=_,!qv.includes(_)}),m=ol(p,1),v=m[0],g=v===void 0?null:v,y=ak(u),C=B(B({},lk(f)),{},{prefix:ll(g,{family:y})});return B(B(B({},C),fk({values:n,family:y,styles:fo,config:te,canonical:C,givenPrefix:s})),sk(a,s,C))}function sk(n,r,o){var a=o.prefix,s=o.iconName;if(n||!a||!s)return{prefix:a,iconName:s};var u=r==="fa"?Dg(s):{},f=or(a,s);return s=u.iconName||f||s,a=u.prefix||a,a==="far"&&!fo.far&&fo.fas&&!te.autoFetchSvg&&(a="fas"),{prefix:a,iconName:s}}var uk=dg.filter(function(n){return n!==Qe||n!==So}),ck=Object.keys(ju).filter(function(n){return n!==Qe}).map(function(n){return Object.keys(ju[n])}).flat();function fk(n){var r=n.values,o=n.family,a=n.canonical,s=n.givenPrefix,u=s===void 0?"":s,f=n.styles,p=f===void 0?{}:f,m=n.config,v=m===void 0?{}:m,g=o===So,y=r.includes("fa-duotone")||r.includes("fad"),C=v.familyDefault==="duotone",_=a.prefix==="fad"||a.prefix==="fa-duotone";if(!g&&(y||C||_)&&(a.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(a.prefix="fab"),!a.prefix&&uk.includes(o)){var I=Object.keys(p).find(function(T){return ck.includes(T)});if(I||v.autoFetchSvg){var N=T_.get(o).defaultShortPrefixId;a.prefix=N,a.iconName=or(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||u==="fa")&&(a.prefix=zt()||"fas"),a}var dk=(function(){function n(){QE(this,n),this.definitions={}}return JE(n,[{key:"add",value:function(){for(var o=this,a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];var f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(p){o.definitions[p]=B(B({},o.definitions[p]||{}),f[p]),Wu(p,f[p]);var m=_c[Qe][p];m&&Wu(m,f[p]),Lg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(o,a){var s=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(s).map(function(u){var f=s[u],p=f.prefix,m=f.iconName,v=f.icon,g=v[2];o[p]||(o[p]={}),g.length>0&&g.forEach(function(y){typeof y=="string"&&(o[p][y]=v)}),o[p][m]=v}),o}}])})(),Im=[],Hr={},Gr={},pk=Object.keys(Gr);function mk(n,r){var o=r.mixoutsTo;return Im=n,Hr={},Object.keys(Gr).forEach(function(a){pk.indexOf(a)===-1&&delete Gr[a]}),Im.forEach(function(a){var s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(function(f){typeof s[f]=="function"&&(o[f]=s[f]),Ja(s[f])==="object"&&Object.keys(s[f]).forEach(function(p){o[f]||(o[f]={}),o[f][p]=s[f][p]})}),a.hooks){var u=a.hooks();Object.keys(u).forEach(function(f){Hr[f]||(Hr[f]=[]),Hr[f].push(u[f])})}a.provides&&a.provides(Gr)}),o}function Hu(n,r){for(var o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];var u=Hr[n]||[];return u.forEach(function(f){r=f.apply(null,[r].concat(a))}),r}function cr(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];var s=Hr[n]||[];s.forEach(function(u){u.apply(null,o)})}function $t(){var n=arguments[0],r=Array.prototype.slice.call(arguments,1);return Gr[n]?Gr[n].apply(null,r):void 0}function Vu(n){n.prefix==="fa"&&(n.prefix="fas");var r=n.iconName,o=n.prefix||zt();if(r)return r=or(o,r)||r,Am(Mg.definitions,o,r)||Am(zn.styles,o,r)}var Mg=new dk,hk=function(){te.autoReplaceSvg=!1,te.observeMutations=!1,cr("noAuto")},vk={i2svg:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return mt?(cr("beforeI2svg",r),$t("pseudoElements2svg",r),$t("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=r.autoReplaceSvgRoot;te.autoReplaceSvg===!1&&(te.autoReplaceSvg=!0),te.observeMutations=!0,Zx(function(){yk({autoReplaceSvgRoot:o}),cr("watch",r)})}},gk={icon:function(r){if(r===null)return null;if(Ja(r)==="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:or(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){var o=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],a=ll(r[0]);return{prefix:a,iconName:or(a,o)||o}}if(typeof r=="string"&&(r.indexOf("".concat(te.cssPrefix,"-"))>-1||r.match(Mx))){var s=sl(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||zt(),iconName:or(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){var u=zt();return{prefix:u,iconName:or(u,r)||r}}}},xn={noAuto:hk,config:te,dom:vk,parse:gk,library:Mg,findIconDefinition:Vu,toHtml:Eo},yk=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=r.autoReplaceSvgRoot,a=o===void 0?Pe:o;(Object.keys(zn.styles).length>0||te.autoFetchSvg)&&mt&&te.autoReplaceSvg&&xn.dom.i2svg({node:a})};function ul(n,r){return Object.defineProperty(n,"abstract",{get:r}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return Eo(a)})}}),Object.defineProperty(n,"node",{get:function(){if(mt){var a=Pe.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function wk(n){var r=n.children,o=n.main,a=n.mask,s=n.attributes,u=n.styles,f=n.transform;if(kc(f)&&o.found&&!a.found){var p=o.width,m=o.height,v={x:p/m/2,y:.5};s.style=al(B(B({},u),{},{"transform-origin":"".concat(v.x+f.x/16,"em ").concat(v.y+f.y/16,"em")}))}return[{tag:"svg",attributes:s,children:r}]}function Sk(n){var r=n.prefix,o=n.iconName,a=n.children,s=n.attributes,u=n.symbol,f=u===!0?"".concat(r,"-").concat(te.cssPrefix,"-").concat(o):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B(B({},s),{},{id:f}),children:a}]}]}function Ck(n){var r=["aria-label","aria-labelledby","title","role"];return r.some(function(o){return o in n})}function Tc(n){var r=n.icons,o=r.main,a=r.mask,s=n.prefix,u=n.iconName,f=n.transform,p=n.symbol,m=n.maskId,v=n.extra,g=n.watchable,y=g===void 0?!1:g,C=a.found?a:o,_=C.width,I=C.height,N=[te.replacementClass,u?"".concat(te.cssPrefix,"-").concat(u):""].filter(function(j){return v.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(v.classes).join(" "),T={children:[],attributes:B(B({},v.attributes),{},{"data-prefix":s,"data-icon":u,class:N,role:v.attributes.role||"img",viewBox:"0 0 ".concat(_," ").concat(I)})};!Ck(v.attributes)&&!v.attributes["aria-hidden"]&&(T.attributes["aria-hidden"]="true"),y&&(T.attributes[ur]="");var M=B(B({},T),{},{prefix:s,iconName:u,main:o,mask:a,maskId:m,transform:f,symbol:p,styles:B({},v.styles)}),b=a.found&&o.found?$t("generateAbstractMask",M)||{children:[],attributes:{}}:$t("generateAbstractIcon",M)||{children:[],attributes:{}},Y=b.children,W=b.attributes;return M.children=Y,M.attributes=W,p?Sk(M):wk(M)}function Pm(n){var r=n.content,o=n.width,a=n.height,s=n.transform,u=n.extra,f=n.watchable,p=f===void 0?!1:f,m=B(B({},u.attributes),{},{class:u.classes.join(" ")});p&&(m[ur]="");var v=B({},u.styles);kc(s)&&(v.transform=Qx({transform:s,width:o,height:a}),v["-webkit-transform"]=v.transform);var g=al(v);g.length>0&&(m.style=g);var y=[];return y.push({tag:"span",attributes:m,children:[r]}),y}function Ek(n){var r=n.content,o=n.extra,a=B(B({},o.attributes),{},{class:o.classes.join(" ")}),s=al(o.styles);s.length>0&&(a.style=s);var u=[];return u.push({tag:"span",attributes:a,children:[r]}),u}var Su=zn.styles;function Ku(n){var r=n[0],o=n[1],a=n.slice(4),s=ol(a,1),u=s[0],f=null;return Array.isArray(u)?f={tag:"g",attributes:{class:"".concat(te.cssPrefix,"-").concat(gu.GROUP)},children:[{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(gu.SECONDARY),fill:"currentColor",d:u[0]}},{tag:"path",attributes:{class:"".concat(te.cssPrefix,"-").concat(gu.PRIMARY),fill:"currentColor",d:u[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:u}},{found:!0,width:r,height:o,icon:f}}var _k={found:!1,width:512,height:512};function xk(n,r){!wg&&!te.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(r,'" is missing.'))}function Gu(n,r){var o=r;return r==="fa"&&te.styleDefault!==null&&(r=zt()),new Promise(function(a,s){if(o==="fa"){var u=Dg(n)||{};n=u.iconName||n,r=u.prefix||r}if(n&&r&&Su[r]&&Su[r][n]){var f=Su[r][n];return a(Ku(f))}xk(n,r),a(B(B({},_k),{},{icon:te.showMissingIcons&&n?$t("missingIconAbstract")||{}:{}}))})}var bm=function(){},qu=te.measurePerformance&&Fa&&Fa.mark&&Fa.measure?Fa:{mark:bm,measure:bm},Qi='FA "7.1.0"',kk=function(r){return qu.mark("".concat(Qi," ").concat(r," begins")),function(){return jg(r)}},jg=function(r){qu.mark("".concat(Qi," ").concat(r," ends")),qu.measure("".concat(Qi," ").concat(r),"".concat(Qi," ").concat(r," begins"),"".concat(Qi," ").concat(r," ends"))},Rc={begin:kk,end:jg},za=function(){};function Lm(n){var r=n.getAttribute?n.getAttribute(ur):null;return typeof r=="string"}function Ok(n){var r=n.getAttribute?n.getAttribute(Cc):null,o=n.getAttribute?n.getAttribute(Ec):null;return r&&o}function Ak(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(te.replacementClass)}function Tk(){if(te.autoReplaceSvg===!0)return $a.replace;var n=$a[te.autoReplaceSvg];return n||$a.replace}function Rk(n){return Pe.createElementNS("http://www.w3.org/2000/svg",n)}function Nk(n){return Pe.createElement(n)}function Ug(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=r.ceFn,a=o===void 0?n.tag==="svg"?Rk:Nk:o;if(typeof n=="string")return Pe.createTextNode(n);var s=a(n.tag);Object.keys(n.attributes||[]).forEach(function(f){s.setAttribute(f,n.attributes[f])});var u=n.children||[];return u.forEach(function(f){s.appendChild(Ug(f,{ceFn:a}))}),s}function Ik(n){var r=" ".concat(n.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var $a={replace:function(r){var o=r[0];if(o.parentNode)if(r[1].forEach(function(s){o.parentNode.insertBefore(Ug(s),o)}),o.getAttribute(ur)===null&&te.keepOriginalSource){var a=Pe.createComment(Ik(o));o.parentNode.replaceChild(a,o)}else o.remove()},nest:function(r){var o=r[0],a=r[1];if(~xc(o).indexOf(te.replacementClass))return $a.replace(r);var s=new RegExp("".concat(te.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var u=a[0].attributes.class.split(" ").reduce(function(p,m){return m===te.replacementClass||m.match(s)?p.toSvg.push(m):p.toNode.push(m),p},{toNode:[],toSvg:[]});a[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",u.toNode.join(" "))}var f=a.map(function(p){return Eo(p)}).join(`
`);o.setAttribute(ur,""),o.innerHTML=f}};function Dm(n){n()}function Bg(n,r){var o=typeof r=="function"?r:za;if(n.length===0)o();else{var a=Dm;te.mutateApproach===Lx&&(a=Bt.requestAnimationFrame||Dm),a(function(){var s=Tk(),u=Rc.begin("mutate");n.map(s),u(),o()})}}var Nc=!1;function zg(){Nc=!0}function Qu(){Nc=!1}var el=null;function Fm(n){if(Sm&&te.observeMutations){var r=n.treeCallback,o=r===void 0?za:r,a=n.nodeCallback,s=a===void 0?za:a,u=n.pseudoElementsCallback,f=u===void 0?za:u,p=n.observeMutationsRoot,m=p===void 0?Pe:p;el=new Sm(function(v){if(!Nc){var g=zt();ti(v).forEach(function(y){if(y.type==="childList"&&y.addedNodes.length>0&&!Lm(y.addedNodes[0])&&(te.searchPseudoElements&&f(y.target),o(y.target)),y.type==="attributes"&&y.target.parentNode&&te.searchPseudoElements&&f([y.target],!0),y.type==="attributes"&&Lm(y.target)&&~Bx.indexOf(y.attributeName))if(y.attributeName==="class"&&Ok(y.target)){var C=sl(xc(y.target)),_=C.prefix,I=C.iconName;y.target.setAttribute(Cc,_||g),I&&y.target.setAttribute(Ec,I)}else Ak(y.target)&&s(y.target)})}}),mt&&el.observe(m,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pk(){el&&el.disconnect()}function bk(n){var r=n.getAttribute("style"),o=[];return r&&(o=r.split(";").reduce(function(a,s){var u=s.split(":"),f=u[0],p=u.slice(1);return f&&p.length>0&&(a[f]=p.join(":").trim()),a},{})),o}function Lk(n){var r=n.getAttribute("data-prefix"),o=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",s=sl(xc(n));return s.prefix||(s.prefix=zt()),r&&o&&(s.prefix=r,s.iconName=o),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=ik(s.prefix,n.innerText)||Ac(s.prefix,Ag(n.innerText))),!s.iconName&&te.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=n.firstChild.data)),s}function Dk(n){var r=ti(n.attributes).reduce(function(o,a){return o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o},{});return r}function Fk(){return{iconName:null,prefix:null,transform:qn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mm(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},o=Lk(n),a=o.iconName,s=o.prefix,u=o.rest,f=Dk(n),p=Hu("parseNodeAttributes",{},n),m=r.styleParser?bk(n):[];return B({iconName:a,prefix:s,transform:qn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:u,styles:m,attributes:f}},p)}var Mk=zn.styles;function $g(n){var r=te.autoReplaceSvg==="nest"?Mm(n,{styleParser:!1}):Mm(n);return~r.extra.classes.indexOf(Cg)?$t("generateLayersText",n,r):$t("generateSvgReplacementMutation",n,r)}function jk(){return[].concat($n(pg),$n(mg))}function jm(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!mt)return Promise.resolve();var o=Pe.documentElement.classList,a=function(y){return o.add("".concat(_m,"-").concat(y))},s=function(y){return o.remove("".concat(_m,"-").concat(y))},u=te.autoFetchSvg?jk():qv.concat(Object.keys(Mk));u.includes("fa")||u.push("fa");var f=[".".concat(Cg,":not([").concat(ur,"])")].concat(u.map(function(g){return".".concat(g,":not([").concat(ur,"])")})).join(", ");if(f.length===0)return Promise.resolve();var p=[];try{p=ti(n.querySelectorAll(f))}catch{}if(p.length>0)a("pending"),s("complete");else return Promise.resolve();var m=Rc.begin("onTree"),v=p.reduce(function(g,y){try{var C=$g(y);C&&g.push(C)}catch(_){wg||_.name==="MissingIcon"&&console.error(_)}return g},[]);return new Promise(function(g,y){Promise.all(v).then(function(C){Bg(C,function(){a("active"),a("complete"),s("pending"),typeof r=="function"&&r(),m(),g()})}).catch(function(C){m(),y(C)})})}function Uk(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$g(n).then(function(o){o&&Bg([o],r)})}function Bk(n){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(r||{}).icon?r:Vu(r||{}),s=o.mask;return s&&(s=(s||{}).icon?s:Vu(s||{})),n(a,B(B({},o),{},{mask:s}))}}var zk=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.transform,s=a===void 0?qn:a,u=o.symbol,f=u===void 0?!1:u,p=o.mask,m=p===void 0?null:p,v=o.maskId,g=v===void 0?null:v,y=o.classes,C=y===void 0?[]:y,_=o.attributes,I=_===void 0?{}:_,N=o.styles,T=N===void 0?{}:N;if(r){var M=r.prefix,b=r.iconName,Y=r.icon;return ul(B({type:"icon"},r),function(){return cr("beforeDOMElementCreation",{iconDefinition:r,params:o}),Tc({icons:{main:Ku(Y),mask:m?Ku(m.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:b,transform:B(B({},qn),s),symbol:f,maskId:g,extra:{attributes:I,styles:T,classes:C}})})}},$k={mixout:function(){return{icon:Bk(zk)}},hooks:function(){return{mutationObserverCallbacks:function(o){return o.treeCallback=jm,o.nodeCallback=Uk,o}}},provides:function(r){r.i2svg=function(o){var a=o.node,s=a===void 0?Pe:a,u=o.callback,f=u===void 0?function(){}:u;return jm(s,f)},r.generateSvgReplacementMutation=function(o,a){var s=a.iconName,u=a.prefix,f=a.transform,p=a.symbol,m=a.mask,v=a.maskId,g=a.extra;return new Promise(function(y,C){Promise.all([Gu(s,u),m.iconName?Gu(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var I=ol(_,2),N=I[0],T=I[1];y([o,Tc({icons:{main:N,mask:T},prefix:u,iconName:s,transform:f,symbol:p,maskId:v,extra:g,watchable:!0})])}).catch(C)})},r.generateAbstractIcon=function(o){var a=o.children,s=o.attributes,u=o.main,f=o.transform,p=o.styles,m=al(p);m.length>0&&(s.style=m);var v;return kc(f)&&(v=$t("generateAbstractTransformGrouping",{main:u,transform:f,containerWidth:u.width,iconWidth:u.width})),a.push(v||u.icon),{children:a,attributes:s}}}},Yk={mixout:function(){return{layer:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.classes,u=s===void 0?[]:s;return ul({type:"layer"},function(){cr("beforeDOMElementCreation",{assembler:o,params:a});var f=[];return o(function(p){Array.isArray(p)?p.map(function(m){f=f.concat(m.abstract)}):f=f.concat(p.abstract)}),[{tag:"span",attributes:{class:["".concat(te.cssPrefix,"-layers")].concat($n(u)).join(" ")},children:f}]})}}}},Wk={mixout:function(){return{counter:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};a.title;var s=a.classes,u=s===void 0?[]:s,f=a.attributes,p=f===void 0?{}:f,m=a.styles,v=m===void 0?{}:m;return ul({type:"counter",content:o},function(){return cr("beforeDOMElementCreation",{content:o,params:a}),Ek({content:o.toString(),extra:{attributes:p,styles:v,classes:["".concat(te.cssPrefix,"-layers-counter")].concat($n(u))}})})}}}},Hk={mixout:function(){return{text:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=a.transform,u=s===void 0?qn:s,f=a.classes,p=f===void 0?[]:f,m=a.attributes,v=m===void 0?{}:m,g=a.styles,y=g===void 0?{}:g;return ul({type:"text",content:o},function(){return cr("beforeDOMElementCreation",{content:o,params:a}),Pm({content:o,transform:B(B({},qn),u),extra:{attributes:v,styles:y,classes:["".concat(te.cssPrefix,"-layers-text")].concat($n(p))}})})}}},provides:function(r){r.generateLayersText=function(o,a){var s=a.transform,u=a.extra,f=null,p=null;if(Kv){var m=parseInt(getComputedStyle(o).fontSize,10),v=o.getBoundingClientRect();f=v.width/m,p=v.height/m}return Promise.resolve([o,Pm({content:o.innerHTML,width:f,height:p,transform:s,extra:u,watchable:!0})])}}},Yg=new RegExp('"',"ug"),Um=[1105920,1112319],Bm=B(B(B(B({},{FontAwesome:{normal:"fas",400:"fas"}}),A_),Px),F_),Xu=Object.keys(Bm).reduce(function(n,r){return n[r.toLowerCase()]=Bm[r],n},{}),Vk=Object.keys(Xu).reduce(function(n,r){var o=Xu[r];return n[r]=o[900]||$n(Object.entries(o))[0][1],n},{});function Kk(n){var r=n.replace(Yg,"");return Ag($n(r)[0]||"")}function Gk(n){var r=n.getPropertyValue("font-feature-settings").includes("ss01"),o=n.getPropertyValue("content"),a=o.replace(Yg,""),s=a.codePointAt(0),u=s>=Um[0]&&s<=Um[1],f=a.length===2?a[0]===a[1]:!1;return u||f||r}function qk(n,r){var o=n.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(r),s=isNaN(a)?"normal":a;return(Xu[o]||{})[s]||Vk[o]}function zm(n,r){var o="".concat(bx).concat(r.replace(":","-"));return new Promise(function(a,s){if(n.getAttribute(o)!==null)return a();var u=ti(n.children),f=u.filter(function(Q){return Q.getAttribute(Bu)===r})[0],p=Bt.getComputedStyle(n,r),m=p.getPropertyValue("font-family"),v=m.match(jx),g=p.getPropertyValue("font-weight"),y=p.getPropertyValue("content");if(f&&!v)return n.removeChild(f),a();if(v&&y!=="none"&&y!==""){var C=p.getPropertyValue("content"),_=qk(m,g),I=Kk(C),N=v[0].startsWith("FontAwesome"),T=Gk(p),M=Ac(_,I),b=M;if(N){var Y=ok(I);Y.iconName&&Y.prefix&&(M=Y.iconName,_=Y.prefix)}if(M&&!T&&(!f||f.getAttribute(Cc)!==_||f.getAttribute(Ec)!==b)){n.setAttribute(o,b),f&&n.removeChild(f);var W=Fk(),j=W.extra;j.attributes[Bu]=r,Gu(M,_).then(function(Q){var ee=Tc(B(B({},W),{},{icons:{main:Q,mask:Fg()},prefix:_,iconName:b,extra:j,watchable:!0})),re=Pe.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?n.insertBefore(re,n.firstChild):n.appendChild(re),re.outerHTML=ee.map(function(de){return Eo(de)}).join(`
`),n.removeAttribute(o),a()}).catch(s)}else a()}else a()})}function Qk(n){return Promise.all([zm(n,"::before"),zm(n,"::after")])}function Xk(n){return n.parentNode!==document.head&&!~Dx.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Bu)&&(!n.parentNode||n.parentNode.tagName!=="svg")}var Jk=function(r){return!!r&&yg.some(function(o){return r.includes(o)})},Zk=function(r){if(!r)return[];var o=new Set,a=r.split(/,(?![^()]*\))/).map(function(m){return m.trim()});a=a.flatMap(function(m){return m.includes("(")?m:m.split(",").map(function(v){return v.trim()})});var s=Ba(a),u;try{for(s.s();!(u=s.n()).done;){var f=u.value;if(Jk(f)){var p=yg.reduce(function(m,v){return m.replace(v,"")},f);p!==""&&p!=="*"&&o.add(p)}}}catch(m){s.e(m)}finally{s.f()}return o};function $m(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(mt){var o;if(r)o=n;else if(te.searchPseudoElementsFullScan)o=n.querySelectorAll("*");else{var a=new Set,s=Ba(document.styleSheets),u;try{for(s.s();!(u=s.n()).done;){var f=u.value;try{var p=Ba(f.cssRules),m;try{for(p.s();!(m=p.n()).done;){var v=m.value,g=Zk(v.selectorText),y=Ba(g),C;try{for(y.s();!(C=y.n()).done;){var _=C.value;a.add(_)}}catch(N){y.e(N)}finally{y.f()}}}catch(N){p.e(N)}finally{p.f()}}catch(N){te.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(f.href," (").concat(N.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(N){s.e(N)}finally{s.f()}if(!a.size)return;var I=Array.from(a).join(", ");try{o=n.querySelectorAll(I)}catch{}}return new Promise(function(N,T){var M=ti(o).filter(Xk).map(Qk),b=Rc.begin("searchPseudoElements");zg(),Promise.all(M).then(function(){b(),Qu(),N()}).catch(function(){b(),Qu(),T()})})}}var eO={hooks:function(){return{mutationObserverCallbacks:function(o){return o.pseudoElementsCallback=$m,o}}},provides:function(r){r.pseudoElements2svg=function(o){var a=o.node,s=a===void 0?Pe:a;te.searchPseudoElements&&$m(s)}}},Ym=!1,nO={mixout:function(){return{dom:{unwatch:function(){zg(),Ym=!0}}}},hooks:function(){return{bootstrap:function(){Fm(Hu("mutationObserverCallbacks",{}))},noAuto:function(){Pk()},watch:function(o){var a=o.observeMutationsRoot;Ym?Qu():Fm(Hu("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Wm=function(r){var o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce(function(a,s){var u=s.toLowerCase().split("-"),f=u[0],p=u.slice(1).join("-");if(f&&p==="h")return a.flipX=!0,a;if(f&&p==="v")return a.flipY=!0,a;if(p=parseFloat(p),isNaN(p))return a;switch(f){case"grow":a.size=a.size+p;break;case"shrink":a.size=a.size-p;break;case"left":a.x=a.x-p;break;case"right":a.x=a.x+p;break;case"up":a.y=a.y-p;break;case"down":a.y=a.y+p;break;case"rotate":a.rotate=a.rotate+p;break}return a},o)},tO={mixout:function(){return{parse:{transform:function(o){return Wm(o)}}}},hooks:function(){return{parseNodeAttributes:function(o,a){var s=a.getAttribute("data-fa-transform");return s&&(o.transform=Wm(s)),o}}},provides:function(r){r.generateAbstractTransformGrouping=function(o){var a=o.main,s=o.transform,u=o.containerWidth,f=o.iconWidth,p={transform:"translate(".concat(u/2," 256)")},m="translate(".concat(s.x*32,", ").concat(s.y*32,") "),v="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),y={transform:"".concat(m," ").concat(v," ").concat(g)},C={transform:"translate(".concat(f/2*-1," -256)")},_={outer:p,inner:y,path:C};return{tag:"g",attributes:B({},_.outer),children:[{tag:"g",attributes:B({},_.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:B(B({},a.icon.attributes),_.path)}]}]}}}},Cu={x:0,y:0,width:"100%",height:"100%"};function Hm(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||r)&&(n.attributes.fill="black"),n}function rO(n){return n.tag==="g"?n.children:[n]}var iO={hooks:function(){return{parseNodeAttributes:function(o,a){var s=a.getAttribute("data-fa-mask"),u=s?sl(s.split(" ").map(function(f){return f.trim()})):Fg();return u.prefix||(u.prefix=zt()),o.mask=u,o.maskId=a.getAttribute("data-fa-mask-id"),o}}},provides:function(r){r.generateAbstractMask=function(o){var a=o.children,s=o.attributes,u=o.main,f=o.mask,p=o.maskId,m=o.transform,v=u.width,g=u.icon,y=f.width,C=f.icon,_=qx({transform:m,containerWidth:y,iconWidth:v}),I={tag:"rect",attributes:B(B({},Cu),{},{fill:"white"})},N=g.children?{children:g.children.map(Hm)}:{},T={tag:"g",attributes:B({},_.inner),children:[Hm(B({tag:g.tag,attributes:B(B({},g.attributes),_.path)},N))]},M={tag:"g",attributes:B({},_.outer),children:[T]},b="mask-".concat(p||km()),Y="clip-".concat(p||km()),W={tag:"mask",attributes:B(B({},Cu),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,M]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:Y},children:rO(C)},W]};return a.push(j,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(Y,")"),mask:"url(#".concat(b,")")},Cu)}),{children:a,attributes:s}}}},oO={provides:function(r){var o=!1;Bt.matchMedia&&(o=Bt.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){var a=[],s={fill:"currentColor"},u={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:B(B({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=B(B({},u),{},{attributeName:"opacity"}),p={tag:"circle",attributes:B(B({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||p.children.push({tag:"animate",attributes:B(B({},u),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B(B({},f),{},{values:"1;0;1;1;0;1;"})}),a.push(p),a.push({tag:"path",attributes:B(B({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:B(B({},f),{},{values:"1;0;0;0;0;1;"})}]}),o||a.push({tag:"path",attributes:B(B({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B(B({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},aO={hooks:function(){return{parseNodeAttributes:function(o,a){var s=a.getAttribute("data-fa-symbol"),u=s===null?!1:s===""?!0:s;return o.symbol=u,o}}}},lO=[Jx,$k,Yk,Wk,Hk,eO,nO,tO,iO,oO,aO];mk(lO,{mixoutsTo:xn});xn.noAuto;var po=xn.config;xn.library;xn.dom;var Wg=xn.parse;xn.findIconDefinition;xn.toHtml;var sO=xn.icon;xn.layer;xn.text;xn.counter;function uO(n){return n=n-0,n===n}function Hg(n){return uO(n)?n:(n=n.replace(/[_-]+(.)?/g,(r,o)=>o?o.toUpperCase():""),n.charAt(0).toLowerCase()+n.slice(1))}function cO(n){return n.charAt(0).toUpperCase()+n.slice(1)}var zr=new Map,fO=1e3;function dO(n){if(zr.has(n))return zr.get(n);const r={};let o=0;const a=n.length;for(;o<a;){const s=n.indexOf(";",o),u=s===-1?a:s,f=n.slice(o,u).trim();if(f){const p=f.indexOf(":");if(p>0){const m=f.slice(0,p).trim(),v=f.slice(p+1).trim();if(m&&v){const g=Hg(m);r[g.startsWith("webkit")?cO(g):g]=v}}}o=u+1}if(zr.size===fO){const s=zr.keys().next().value;s&&zr.delete(s)}return zr.set(n,r),r}function Vg(n,r,o={}){if(typeof r=="string")return r;const a=(r.children||[]).map(g=>Vg(n,g)),s=r.attributes||{},u={};for(const[g,y]of Object.entries(s))switch(!0){case g==="class":{u.className=y;break}case g==="style":{u.style=dO(String(y));break}case g.startsWith("aria-"):case g.startsWith("data-"):{u[g.toLowerCase()]=y;break}default:u[Hg(g)]=y}const{style:f,role:p,"aria-label":m,...v}=o;return f&&(u.style=u.style?{...u.style,...f}:f),p&&(u.role=p),m&&(u["aria-label"]=m,u["aria-hidden"]="false"),n(r.tag,{...v,...u},...a)}var pO=Vg.bind(null,vn.createElement),Vm=(n,r)=>{const o=O.useId();return n||(r?o:void 0)},mO=class{constructor(n="react-fontawesome"){this.enabled=!1;let r=!1;try{r=typeof process<"u"&&!1}catch{}this.scope=n,this.enabled=r}log(...n){this.enabled&&console.log(`[${this.scope}]`,...n)}warn(...n){this.enabled&&console.warn(`[${this.scope}]`,...n)}error(...n){this.enabled&&console.error(`[${this.scope}]`,...n)}},hO="searchPseudoElementsFullScan"in po?"7.0.0":"6.0.0",vO=Number.parseInt(hO)>=7,to="fa",lt={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},gO={left:"fa-pull-left",right:"fa-pull-right"},yO={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},wO={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},st={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function SO(n){const r=po.cssPrefix||po.familyPrefix||to;return r===to?n:n.replace(new RegExp(String.raw`(?<=^|\s)${to}-`,"g"),`${r}-`)}function CO(n){const{beat:r,fade:o,beatFade:a,bounce:s,shake:u,spin:f,spinPulse:p,spinReverse:m,pulse:v,fixedWidth:g,inverse:y,border:C,flip:_,size:I,rotation:N,pull:T,swapOpacity:M,rotateBy:b,widthAuto:Y,className:W}=n,j=[];return W&&j.push(...W.split(" ")),r&&j.push(lt.beat),o&&j.push(lt.fade),a&&j.push(lt.beatFade),s&&j.push(lt.bounce),u&&j.push(lt.shake),f&&j.push(lt.spin),m&&j.push(lt.spinReverse),p&&j.push(lt.spinPulse),v&&j.push(lt.pulse),g&&j.push(st.fixedWidth),y&&j.push(st.inverse),C&&j.push(st.border),_===!0&&j.push(st.flip),(_==="horizontal"||_==="both")&&j.push(st.flipHorizontal),(_==="vertical"||_==="both")&&j.push(st.flipVertical),I!=null&&j.push(wO[I]),N!=null&&N!==0&&j.push(yO[N]),T!=null&&j.push(gO[T]),M&&j.push(st.swapOpacity),vO?(b&&j.push(st.rotateBy),Y&&j.push(st.widthAuto),(po.cssPrefix||po.familyPrefix||to)===to?j:j.map(SO)):j}var EO=n=>typeof n=="object"&&"icon"in n&&!!n.icon;function Km(n){if(n)return EO(n)?n:Wg.icon(n)}function _O(n){return Object.keys(n)}var Gm=new mO("FontAwesomeIcon"),Kg={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},xO=new Set(Object.keys(Kg)),Ic=vn.forwardRef((n,r)=>{const o={...Kg,...n},{icon:a,mask:s,symbol:u,title:f,titleId:p,maskId:m,transform:v}=o,g=Vm(m,!!s),y=Vm(p,!!f),C=Km(a);if(!C)return Gm.error("Icon lookup is undefined",a),null;const _=CO(o),I=typeof v=="string"?Wg.transform(v):v,N=Km(s),T=sO(C,{..._.length>0&&{classes:_},...I&&{transform:I},...N&&{mask:N},symbol:u,title:f,titleId:y,maskId:g});if(!T)return Gm.error("Could not find icon",C),null;const{abstract:M}=T,b={ref:r};for(const Y of _O(o))xO.has(Y)||(b[Y]=o[Y]);return pO(M[0],b)});Ic.displayName="FontAwesomeIcon";var kO={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Eu,qm;function OO(){if(qm)return Eu;qm=1;var n={linear:function(r,o,a,s){var u=a-o;return u*r/s+o},easeInQuad:function(r,o,a,s){var u=a-o;return u*(r/=s)*r+o},easeOutQuad:function(r,o,a,s){var u=a-o;return-u*(r/=s)*(r-2)+o},easeInOutQuad:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r+o:-u/2*(--r*(r-2)-1)+o},easeInCubic:function(r,o,a,s){var u=a-o;return u*(r/=s)*r*r+o},easeOutCubic:function(r,o,a,s){var u=a-o;return u*((r=r/s-1)*r*r+1)+o},easeInOutCubic:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r*r+o:u/2*((r-=2)*r*r+2)+o},easeInQuart:function(r,o,a,s){var u=a-o;return u*(r/=s)*r*r*r+o},easeOutQuart:function(r,o,a,s){var u=a-o;return-u*((r=r/s-1)*r*r*r-1)+o},easeInOutQuart:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r*r*r+o:-u/2*((r-=2)*r*r*r-2)+o},easeInQuint:function(r,o,a,s){var u=a-o;return u*(r/=s)*r*r*r*r+o},easeOutQuint:function(r,o,a,s){var u=a-o;return u*((r=r/s-1)*r*r*r*r+1)+o},easeInOutQuint:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?u/2*r*r*r*r*r+o:u/2*((r-=2)*r*r*r*r+2)+o},easeInSine:function(r,o,a,s){var u=a-o;return-u*Math.cos(r/s*(Math.PI/2))+u+o},easeOutSine:function(r,o,a,s){var u=a-o;return u*Math.sin(r/s*(Math.PI/2))+o},easeInOutSine:function(r,o,a,s){var u=a-o;return-u/2*(Math.cos(Math.PI*r/s)-1)+o},easeInExpo:function(r,o,a,s){var u=a-o;return r==0?o:u*Math.pow(2,10*(r/s-1))+o},easeOutExpo:function(r,o,a,s){var u=a-o;return r==s?o+u:u*(-Math.pow(2,-10*r/s)+1)+o},easeInOutExpo:function(r,o,a,s){var u=a-o;return r===0?o:r===s?o+u:(r/=s/2)<1?u/2*Math.pow(2,10*(r-1))+o:u/2*(-Math.pow(2,-10*--r)+2)+o},easeInCirc:function(r,o,a,s){var u=a-o;return-u*(Math.sqrt(1-(r/=s)*r)-1)+o},easeOutCirc:function(r,o,a,s){var u=a-o;return u*Math.sqrt(1-(r=r/s-1)*r)+o},easeInOutCirc:function(r,o,a,s){var u=a-o;return(r/=s/2)<1?-u/2*(Math.sqrt(1-r*r)-1)+o:u/2*(Math.sqrt(1-(r-=2)*r)+1)+o},easeInElastic:function(r,o,a,s){var u=a-o,f,p,m;return m=1.70158,p=0,f=u,r===0?o:(r/=s)===1?o+u:(p||(p=s*.3),f<Math.abs(u)?(f=u,m=p/4):m=p/(2*Math.PI)*Math.asin(u/f),-(f*Math.pow(2,10*(r-=1))*Math.sin((r*s-m)*(2*Math.PI)/p))+o)},easeOutElastic:function(r,o,a,s){var u=a-o,f,p,m;return m=1.70158,p=0,f=u,r===0?o:(r/=s)===1?o+u:(p||(p=s*.3),f<Math.abs(u)?(f=u,m=p/4):m=p/(2*Math.PI)*Math.asin(u/f),f*Math.pow(2,-10*r)*Math.sin((r*s-m)*(2*Math.PI)/p)+u+o)},easeInOutElastic:function(r,o,a,s){var u=a-o,f,p,m;return m=1.70158,p=0,f=u,r===0?o:(r/=s/2)===2?o+u:(p||(p=s*(.3*1.5)),f<Math.abs(u)?(f=u,m=p/4):m=p/(2*Math.PI)*Math.asin(u/f),r<1?-.5*(f*Math.pow(2,10*(r-=1))*Math.sin((r*s-m)*(2*Math.PI)/p))+o:f*Math.pow(2,-10*(r-=1))*Math.sin((r*s-m)*(2*Math.PI)/p)*.5+u+o)},easeInBack:function(r,o,a,s,u){var f=a-o;return u===void 0&&(u=1.70158),f*(r/=s)*r*((u+1)*r-u)+o},easeOutBack:function(r,o,a,s,u){var f=a-o;return u===void 0&&(u=1.70158),f*((r=r/s-1)*r*((u+1)*r+u)+1)+o},easeInOutBack:function(r,o,a,s,u){var f=a-o;return u===void 0&&(u=1.70158),(r/=s/2)<1?f/2*(r*r*(((u*=1.525)+1)*r-u))+o:f/2*((r-=2)*r*(((u*=1.525)+1)*r+u)+2)+o},easeInBounce:function(r,o,a,s){var u=a-o,f;return f=n.easeOutBounce(s-r,0,u,s),u-f+o},easeOutBounce:function(r,o,a,s){var u=a-o;return(r/=s)<1/2.75?u*(7.5625*r*r)+o:r<2/2.75?u*(7.5625*(r-=1.5/2.75)*r+.75)+o:r<2.5/2.75?u*(7.5625*(r-=2.25/2.75)*r+.9375)+o:u*(7.5625*(r-=2.625/2.75)*r+.984375)+o},easeInOutBounce:function(r,o,a,s){var u=a-o,f;return r<s/2?(f=n.easeInBounce(r*2,0,u,s),f*.5+o):(f=n.easeOutBounce(r*2-s,0,u,s),f*.5+u*.5+o)}};return Eu=n,Eu}var AO=OO();function TO(n){return n*Math.PI/180}function En(n,r){return n+Math.random()*(r-n)}function RO(n,r){return Math.floor(n+Math.random()*(r-n+1))}var ro;(function(n){n[n.Circle=0]="Circle",n[n.Square=1]="Square",n[n.Strip=2]="Strip"})(ro||(ro={}));var Dt;(function(n){n[n.Positive=1]="Positive",n[n.Negative=-1]="Negative"})(Dt||(Dt={}));const NO=1e3/60;class IO{constructor(r,o,a,s){this.getOptions=o;const{colors:u,initialVelocityX:f,initialVelocityY:p}=this.getOptions();this.context=r,this.x=a,this.y=s,this.w=En(5,20),this.h=En(5,20),this.radius=En(5,10),this.vx=typeof f=="number"?En(-f,f):En(f.min,f.max),this.vy=typeof p=="number"?En(-p,0):En(p.min,p.max),this.shape=RO(0,2),this.angle=TO(En(0,360)),this.angularSpin=En(-.2,.2),this.color=u[Math.floor(Math.random()*u.length)],this.rotateY=En(0,1),this.rotationDirection=En(0,1)?Dt.Positive:Dt.Negative}update(r){const{gravity:o,wind:a,friction:s,opacity:u,drawShape:f}=this.getOptions(),p=r/NO;this.x+=this.vx*p,this.y+=this.vy*p,this.vy+=o*p,this.vx+=a*p,this.vx*=s**p,this.vy*=s**p,this.rotateY>=1&&this.rotationDirection===Dt.Positive?this.rotationDirection=Dt.Negative:this.rotateY<=-1&&this.rotationDirection===Dt.Negative&&(this.rotationDirection=Dt.Positive);const m=.1*this.rotationDirection*p;if(this.rotateY+=m,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=u,this.context.lineCap="round",this.context.lineWidth=2,f&&typeof f=="function")f.call(this,this.context);else switch(this.shape){case ro.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case ro.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case ro.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class PO{constructor(r,o){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=s=>{this.particles.splice(s,1)},this.getParticle=()=>{const s=En(this.x,this.w+this.x),u=En(this.y,this.h+this.y);return new IO(this.context,this.getOptions,s,u)},this.animate=s=>{const{canvas:u,context:f,particlesGenerated:p,lastNumberOfPieces:m}=this,{run:v,recycle:g,numberOfPieces:y,debug:C,tweenFunction:_,tweenDuration:I}=this.getOptions();if(!v)return!1;const N=this.particles.length,T=g?N:p;if(T<y){m!==y&&(this.tweenProgress=0,this.tweenFrom=T,this.lastNumberOfPieces=y),this.tweenProgress=Math.min(I,Math.max(0,this.tweenProgress+s));const M=_(this.tweenProgress,this.tweenFrom,y,I),b=Math.round(M-T);for(let Y=0;Y<b;Y++)this.particles.push(this.getParticle());this.particlesGenerated+=b}C&&(f.font="12px sans-serif",f.fillStyle="#333",f.textAlign="right",f.fillText(`Particles: ${N}`,u.width-10,u.height-20));for(let M=this.particles.length-1;M>=0;M--){const b=this.particles[M];b.update(s),(b.y>u.height||b.y<-100||b.x>u.width+100||b.x<-100)&&(g&&T<=y?this.particles[M]=this.getParticle():this.removeParticleAt(M))}return N>0||T<y},this.canvas=r;const a=this.canvas.getContext("2d");if(!a)throw new Error("Could not get canvas context");this.context=a,this.getOptions=o}}const Pc={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:AO.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class bO{constructor(r,o){this.lastFrameTime=0,this.setOptionsWithDefaults=s=>{const u={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...u,...Pc,...s},Object.assign(this,s.confettiSource)},this.update=(s=0)=>{const{options:{run:u,onConfettiComplete:f,frameRate:p},canvas:m,context:v}=this,g=Math.min(s-this.lastFrameTime,50);if(p&&g<1e3/p){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=s-(p?g%p:0),u&&(v.fillStyle="white",v.clearRect(0,0,m.width,m.height)),this.generator.animate(g)?this.rafId=requestAnimationFrame(this.update):(f&&typeof f=="function"&&this.generator.particlesGenerated>0&&f.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=r;const a=this.canvas.getContext("2d");if(!a)throw new Error("Could not get canvas context");this.context=a,this.generator=new PO(this.canvas,()=>this.options),this.options=o,this.update()}get options(){return this._options}set options(r){const o=this._options?.run,a=this._options?.recycle;this.setOptionsWithDefaults(r),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof r.recycle=="boolean"&&r.recycle&&a===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof r.run=="boolean"&&r.run&&o===!1&&this.update()}}const LO=vn.createRef();class bc extends vn.Component{constructor(r){super(r),this.canvas=vn.createRef(),this.canvas=r.canvasRef||LO}componentDidMount(){if(this.canvas.current){const r=_u(this.props)[0];this.confetti=new bO(this.canvas.current,r)}}componentDidUpdate(){const r=_u(this.props)[0];this.confetti&&(this.confetti.options=r)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[r,o]=_u(this.props),a={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...o.style};return P.jsx("canvas",{width:r.width,height:r.height,ref:this.canvas,...o,style:a})}}bc.defaultProps={...Pc};bc.displayName="ReactConfetti";function _u(n){const r={},o={},a={},s=[...Object.keys(Pc),"confettiSource","drawShape","onConfettiComplete","frameRate"],u=["canvasRef"];for(const f in n){const p=n[f];s.includes(f)?r[f]=p:u.includes(f)?u[f]=p:a[f]=p}return[r,a,o]}const DO=vn.forwardRef((n,r)=>P.jsx(bc,{canvasRef:r,...n})),FO=n=>{const r=O.useRef(n);return O.useEffect(()=>{r.current=n}),r},MO=(n,r=100,o=!1)=>{const a=FO(n),s=O.useRef(),u=[r,o,a];function f(){s.current&&clearTimeout(s.current),s.current=void 0}O.useEffect(()=>f,u);function p(){s.current=void 0}return O.useCallback(function(){const m=arguments,{current:v}=s;if(v===void 0&&o)return s.current=setTimeout(p,r),a.current.apply(null,m);v&&clearTimeout(v),s.current=setTimeout(()=>{s.current=void 0,a.current.apply(null,m)},r)},u)},jO=(n,r,o)=>{const a=O.useState(n);return[a[0],MO(a[1],r,o)]};function xu(n,r,o,a){const s=O.useRef(o),u=O.useRef(a);O.useEffect(()=>{s.current=o,u.current=a}),O.useEffect(()=>{const f=n&&"current"in n?n.current:n;if(!f)return;let p=0;function m(...g){p||s.current.apply(this,g)}f.addEventListener(r,m);const v=u.current;return()=>{p=1,f.removeEventListener(r,m),v&&v()}},[n,r])}const UO={},io=typeof window>"u"?null:window,BO=io&&typeof io.visualViewport<"u"?io.visualViewport:null,Qm=()=>[document.documentElement.clientWidth,document.documentElement.clientHeight],zO=function(n){n===void 0&&(n=UO);const{wait:r,leading:o,initialWidth:a=0,initialHeight:s=0}=n,[u,f]=jO(typeof document>"u"?[a,s]:Qm,r,o),p=()=>f(Qm);return xu(io,"resize",p),xu(BO,"resize",p),xu(io,"orientationchange",p),u},$O="/assets/kubernetes-BUHmYqv8.svg";var YO={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},WO=YO;const HO=({isDarkMode:n,toggleDarkMode:r,handleDeckChange:o,currentDeck:a})=>P.jsx("header",{children:P.jsxs("div",{className:"d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom",children:[P.jsxs("a",{href:"/",className:"d-flex align-items-center text-dark text-decoration-none",children:[P.jsx("img",{className:"kubernetes-logo",src:$O}),P.jsx("span",{className:"fs-4 ubuntu",children:"Cards Against Kubernetes"})]}),P.jsxs("nav",{className:"d-inline-flex mt-2 mt-md-0 ms-md-auto align-items-center",children:[P.jsx("a",{className:`me-3 py-2 text-dark text-decoration-none ${a==="KCNA"?"fw-bold":""}`,href:"#",onClick:()=>o("KCNA"),children:"KCNA"}),P.jsx("a",{className:`me-3 py-2 text-dark text-decoration-none ${a==="KCSA"?"fw-bold":""}`,href:"#",onClick:()=>o("KCSA"),children:"KCSA"}),P.jsxs(mu,{align:"end",children:[P.jsx(mu.Toggle,{as:"a",className:"navbar-icon-toggle",children:P.jsx(Ic,{icon:WO,size:"lg"})}),P.jsx(mu.Menu,{children:P.jsx("div",{className:"px-3 py-1",children:P.jsx(HE.Check,{type:"switch",id:"dark-mode-switch",label:"Dark Mode",checked:n,onChange:r})})})]})]})]})});function ku(n){let r=n.length,o;for(;r!=0;)o=Math.floor(Math.random()*r),r--,[n[r],n[o]]=[n[o],n[r]];return n}function VO({score:n,totalQuestions:r,incorrectAnswers:o,playAgain:a,passingPercentage:s}){const{width:u,height:f}=zO(),p=r>0?Math.round(n/r*100):0,m=p>=s,v=o.reduce((y,C)=>(C.tag&&(y[C.tag]=(y[C.tag]||0)+1),y),{}),g=Object.keys(v);return P.jsxs(Kr,{className:"py-3",children:[m&&P.jsx(DO,{width:u,height:f,recycle:!1,numberOfPieces:200}),P.jsx("main",{children:P.jsxs(Kr,{className:"p-4 prompt-banner bg-light rounded-3 text-center score-screen-container",children:[P.jsx("h1",{className:"display-4",children:"Deck Complete!"}),P.jsx("p",{className:"lead",children:"You scored"}),P.jsxs("h2",{className:"display-1",children:[p,"%"]}),P.jsxs("p",{className:"lead mb-4",children:["(",n," out of ",r," correct)"]}),g.length>0&&P.jsxs(P.Fragment,{children:[P.jsx("hr",{}),P.jsx("h3",{className:"mt-4",children:"Study Guide"}),P.jsx("p",{children:"Based on your answers, here are some areas to focus on:"}),P.jsx(Xa,{className:"justify-content-center",children:g.map(y=>{const C=ja.studyGuides[y];return C?P.jsx(vo,{md:6,lg:4,className:"mb-3",children:P.jsx(Gn,{children:P.jsxs(Gn.Body,{children:[P.jsx(Gn.Title,{children:C.title}),P.jsx(Gn.Text,{children:C.tip}),P.jsx(Qr,{variant:"primary",href:C.link,target:"_blank",children:"Learn More"})]})})},y):null})})]}),P.jsx(Qr,{variant:"success",size:"lg",onClick:a,className:"mt-4 ubuntu",children:"Play Again"})]})})]})}function KO(){const[n,r]=O.useState("KCNA"),[o,a]=O.useState([]),[s,u]=O.useState(0),[f,p]=O.useState(null),[m,v]=O.useState("playing"),[g,y]=O.useState(null),[C,_]=O.useState(null),[I,N]=O.useState(0),[T,M]=O.useState([]),[b,Y]=O.useState(!1),[W,j]=O.useState(()=>{const V=localStorage.getItem("darkMode");return V?JSON.parse(V):!1}),Q=V=>{const fe=[...ja.decks[V].rounds];ku(fe),a(fe),u(0),N(0),M([]),v("playing"),p(null)};O.useEffect(()=>{Q(n)},[n]),O.useEffect(()=>{if(o.length>0&&s<o.length){const V=o[s],fe=ja.decks[n].answers,{correctAnswerId:Ae,answers:Ce}=V,he=Object.keys(fe).find(L=>fe[L].id===Ae);if(!he){console.error("Data inconsistency: Could not find the correct answer key for round:",V);return}const H=Ce.filter(L=>L!==he);ku(H);const X=H.slice(0,3),$=[he,...X];ku($);const x=$.map(L=>fe[L]);p({...V,answers:x})}},[o,s]),O.useEffect(()=>{if(b){const V=setTimeout(()=>{Y(!1)},500);return()=>clearTimeout(V)}},[b]);const ee=V=>{r(V)};O.useEffect(()=>{W?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",JSON.stringify(W))},[W]);const re=()=>j(!W),de=V=>{m==="playing"&&y(fe=>fe===V?null:V)},ve=()=>{if(g===null)return;const V=g===f.correctAnswerId;V?(N(fe=>fe+1),Y(!0)):M(fe=>[...fe,f]),_(V),v("submitted")},ae=()=>{s+1<o.length?(v("playing"),y(null),_(null),u(V=>V+1)):v("finished")};if(m==="finished"){const V=ja.decks[n]?.passingPercentage||75;return P.jsx(VO,{score:I,totalQuestions:o.length,incorrectAnswers:T,playAgain:()=>Q(n),passingPercentage:V})}if(!f)return P.jsx(Kr,{className:"py-3 text-center",children:P.jsx("h1",{children:"Loading Deck..."})});const se=f.answers.map(V=>P.jsx(VE,{...V,isSelected:g===V.id,onSelect:()=>de(V.id),isSubmitted:m==="submitted",isCorrect:C,isActuallyCorrect:V.id===f.correctAnswerId},V.id));return P.jsxs(Kr,{className:"py-3",children:[P.jsx(HO,{isDarkMode:W,toggleDarkMode:re,handleDeckChange:ee,currentDeck:n}),P.jsxs("main",{children:[P.jsxs(Kr,{className:`p-3 prompt-banner bg-light rounded-3 ${b?"prompt-correct-flash":""}`,children:[P.jsx(Xa,{className:"row mb-3 justify-content-center align-items-center",children:P.jsx(KE,{text:f.prompt.text})}),P.jsx("div",{className:"d-grid gap-2",children:m==="playing"?P.jsx(Qr,{variant:"primary",size:"lg",onClick:ve,disabled:g===null,className:"ubuntu",children:"Submit Answer"}):P.jsx(Qr,{variant:C?"success":"danger",size:"lg",onClick:ae,className:"ubuntu",children:"Next Round"})}),P.jsx("br",{}),P.jsx(Xa,{className:`answer-card-container mt-4 ${m}`,children:se})]}),P.jsx("hr",{}),P.jsxs("div",{className:"d-flex justify-content-end footer-link",children:[P.jsx("a",{href:"https://hartje.io",target:"_blank",children:"Hartje.io"})," ",P.jsx("span",{className:"mx-2",children:"|"}),P.jsx("a",{href:"https://github.com/goshlanguage/cardsagainstkubernetes",target:"_blank",children:P.jsx(Ic,{icon:kO})})]})]})]})}Z0.createRoot(document.getElementById("root")).render(P.jsx(vn.StrictMode,{children:P.jsx(KO,{})}));
