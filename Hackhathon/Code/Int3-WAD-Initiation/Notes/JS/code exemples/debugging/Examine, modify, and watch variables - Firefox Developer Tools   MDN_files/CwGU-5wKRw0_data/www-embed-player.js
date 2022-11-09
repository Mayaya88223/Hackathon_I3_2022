(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={va:!0},fa={};try{fa.__proto__=da;ca=fa.va;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(){ka=function(){};
ja.Symbol||(ja.Symbol=la)}
var la=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ma(){ka();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(this)}});
ma=function(){}}
function na(a){var b=0;return oa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function oa(a){ma();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function pa(a){ma();var b=a[Symbol.iterator];return b?b.call(a):na(a)}
function qa(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
qa("Object.assign",function(a){return a||sa});
qa("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){ka();ma();a=pa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){ra(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!ra(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return ra(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return ra(a,e)&&ra(a[e],this.b)};
b.prototype["delete"]=function(a){return ra(a,e)&&ra(a[e],this.b)?delete a[e][this.b]:!1};
return b});
qa("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return oa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&ra(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,o:h}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=pa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(pa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(T){return!1}}())return a;
ka();ma();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
qa("Set",function(a){function b(a){this.b=new Map;if(a){a=pa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(pa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ka();ma();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
qa("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
qa("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function ta(a){return"boolean"==typeof a}
function ua(a){return"number"==typeof a}
function u(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function va(){if(null===wa){a:{var a=p.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&xa.test(a))break a;a=null}wa=a||""}return wa}
var xa=/^[\w+/_-]+[=]{0,2}$/,wa=null;function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.fa=void 0;a.getInstance=function(){return a.fa?a.fa:a.fa=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==Aa(a)}
function Ba(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==Aa(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Ga:x=Ha;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function Ia(a,b){u(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ja=document,B=window;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(C,Error);C.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Qa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ra(a,b){var c=La(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ua=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Va(a){if(!Wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace($a,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ab,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(bb,"&#0;"));return a}
var Xa=/&/g,Ya=/</g,Za=/>/g,$a=/"/g,ab=/'/g,bb=/\x00/g,Wa=/[\x00&<>"']/;function cb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var db;a:{var eb=p.navigator;if(eb){var gb=eb.userAgent;if(gb){db=gb;break a}}db=""}function E(a){return-1!=db.indexOf(a)}
;function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ib(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ob(a){var b={},c;for(c in a)b[c]=a[c];return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function rb(a){rb[" "](a);return a}
rb[" "]=ya;var sb=E("Opera"),tb=E("Trident")||E("MSIE"),ub=E("Edge"),vb=E("Gecko")&&!(-1!=db.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),wb=-1!=db.toLowerCase().indexOf("webkit")&&!E("Edge");function xb(){var a=p.document;return a?a.documentMode:void 0}
var yb;a:{var zb="",Ab=function(){var a=db;if(vb)return/rv:([^\);]+)(\)|;)/.exec(a);if(ub)return/Edge\/([\d\.]+)/.exec(a);if(tb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(wb)return/WebKit\/(\S+)/.exec(a);if(sb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ab&&(zb=Ab?Ab[1]:"");if(tb){var Bb=xb();if(null!=Bb&&Bb>parseFloat(zb)){yb=String(Bb);break a}}yb=zb}var Cb=yb,Db;var Eb=p.document;Db=Eb&&tb?xb()||("CSS1Compat"==Eb.compatMode?parseInt(Cb,10):5):void 0;var Fb=null,Gb=null;function Hb(a){this.b=a||{cookie:""}}
k=Hb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ua(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ua(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ib=new Hb("undefined"==typeof document?null:document);Ib.f=3950;function Jb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Kb=!tb||9<=Number(Db);function Lb(){this.b="";this.f=Mb}
Lb.prototype.J=!0;Lb.prototype.H=function(){return this.b};
Lb.prototype.ea=!0;Lb.prototype.aa=function(){return 1};
function Nb(a){return a instanceof Lb&&a.constructor===Lb&&a.f===Mb?a.b:"type_error:TrustedResourceUrl"}
var Mb={};function F(){this.b="";this.f=Ob}
F.prototype.J=!0;F.prototype.H=function(){return this.b};
F.prototype.ea=!0;F.prototype.aa=function(){return 1};
function Pb(a){return a instanceof F&&a.constructor===F&&a.f===Ob?a.b:"type_error:SafeUrl"}
var Qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Rb(a){if(a instanceof F)return a;a="object"==typeof a&&a.J?a.H():String(a);Qb.test(a)||(a="about:invalid#zClosurez");return Sb(a)}
var Ob={};function Sb(a){var b=new F;b.b=a;return b}
Sb("about:blank");function Tb(){this.b="";this.g=Ub;this.f=null}
Tb.prototype.ea=!0;Tb.prototype.aa=function(){return this.f};
Tb.prototype.J=!0;Tb.prototype.H=function(){return this.b};
var Ub={};function Vb(a,b){var c=new Tb;c.b=a;c.f=b;return c}
Vb("<!DOCTYPE html>",0);Vb("",0);Vb("<br>",0);function Wb(a,b){var c=b instanceof F?b:Rb(b);a.href=Pb(c)}
function Xb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?Nb(b):b instanceof Lb?Nb(b):b instanceof F?Pb(b):Rb(b).H()}
function Yb(a,b){a.src=Nb(b);var c=va();c&&a.setAttribute("nonce",c)}
;function Zb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Zb.prototype;k.clone=function(){return new Zb(this.x,this.y)};
k.equals=function(a){return a instanceof Zb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function $b(a,b){this.width=a;this.height=b}
k=$b.prototype;k.clone=function(){return new $b(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){var b=document;return r(a)?b.getElementById(a):a}
function bc(a,b){hb(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.H());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:cc.hasOwnProperty(d)?a.setAttribute(cc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Kb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Va(g.name),'"');if(g.type){f.push(' type="',Va(g.type),'"');var h={};qb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):bc(f,g));2<d.length&&ec(e,f,d);return f}
function ec(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ba(f)||Da(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Da(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(Ca(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Sa(f):f,d)}}}
function fc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function gc(a){hc();var b=new Lb;b.b=a;return b}
var hc=ya;function ic(){var a=jc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{rb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function kc(a){var b=lc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function mc(){var a=[];kc(function(b){a.push(b)});
return a}
var lc={cb:"allow-forms",eb:"allow-modals",fb:"allow-orientation-lock",gb:"allow-pointer-lock",hb:"allow-popups",ib:"allow-popups-to-escape-sandbox",jb:"allow-presentation",kb:"allow-same-origin",lb:"allow-scripts",mb:"allow-top-navigation",nb:"allow-top-navigation-by-user-activation"},nc=Jb(function(){return mc()});
function oc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};D(nc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function pc(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}
;function qc(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;p.google_image_requests||(p.google_image_requests=[]);var d=p.document.createElement("img");if(b){var e=function(){b&&Ra(p.google_image_requests,d);d.removeEventListener&&d.removeEventListener("load",e,!1);d.removeEventListener&&d.removeEventListener("error",e,!1)};
pc(d,"load",e);pc(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;p.google_image_requests.push(d)}
;function rc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var sc=!!window.google_async_iframe_id,jc=sc&&window.parent||window;var tc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function G(a){return a.match(tc)}
function uc(a){return a?decodeURI(a):a}
function vc(a,b,c){if(w(b))for(var d=0;d<b.length;d++)vc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function wc(a){var b=[],c;for(c in a)vc(c,a[c],b);return b.join("&")}
function xc(a,b){var c=wc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var yc=null;function zc(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):z()}
function Ac(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null}
;function Bc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var H=p.performance,Cc=!!(H&&H.mark&&H.measure&&H.clearMarks),Dc=Jb(function(){var a;if(a=Cc){var b;if(null===yc){yc="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(yc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=yc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Ec(){var a=Fc;this.events=[];this.f=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=Dc()||(null!=b?b:1>Math.random())}
Ec.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(Dc()&&D(this.events,Gc),this.events.length=0)};
function Gc(a){a&&H&&Dc()&&(H.clearMarks("goog_"+a.uniqueId+"_start"),H.clearMarks("goog_"+a.uniqueId+"_end"))}
Ec.prototype.start=function(a,b){if(!this.b)return null;var c=Ac()||zc();c=new Bc(a,b,c);var d="goog_"+c.uniqueId+"_start";H&&Dc()&&H.mark(d);return c};
Ec.prototype.end=function(a){if(this.b&&ua(a.value)){var b=Ac()||zc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";H&&Dc()&&H.mark(b);this.b&&this.events.push(a)}};if(sc&&!ic()){var Hc="."+Ja.domain;try{for(;2<Hc.split(".").length&&!ic();)Ja.domain=Hc=Hc.substr(Hc.indexOf(".")+1),jc=window.parent}catch(a){}ic()||(jc=window)}var Fc=jc,Ic=new Ec;"complete"==Fc.document.readyState?Fc.google_measure_js_timing||Ic.disable():Ic.b&&pc(Fc,"load",function(){Fc.google_measure_js_timing||Ic.disable()});var Jc=(new Date).getTime();function Kc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Lc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var t=1518500249}else m=d^f^h,t=1859775393;else 60>c?(m=d&f|h&(d|f),t=2400959708):(m=d^f^h,t=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+t+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64;for(;d<c;)if(f[m++]=a[d++],t++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64}
function d(){var a=[],d=8*t;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,t;a();return{reset:a,update:c,digest:d,xa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Mc(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Nc(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Nc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nc(a){var b=Lc();b.update(a);return b.xa().toLowerCase()}
;function Oc(a){var b=Kc(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Hb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Hb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Mc(Kc(d),b,a||null)].join(" "):null}return null}
;function Pc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Pc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Qc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Rc(a){p.setTimeout(function(){throw a;},0)}
var Sc;
function Tc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.la;c.la=null;a()}};
return function(a){d.next={la:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Uc(){this.f=this.b=null}
var Wc=new Pc(function(){return new Vc},function(a){a.reset()});
Uc.prototype.add=function(a,b){var c=Wc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Uc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Vc(){this.next=this.scope=this.b=null}
Vc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Vc.prototype.reset=function(){this.next=this.scope=this.b=null};function Xc(a,b){Yc||Zc();$c||(Yc(),$c=!0);ad.add(a,b)}
var Yc;function Zc(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);Yc=function(){a.then(bd)}}else Yc=function(){var a=bd;
!Ca(p.setImmediate)||p.Window&&p.Window.prototype&&!E("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Sc||(Sc=Tc()),Sc(a)):p.setImmediate(a)}}
var $c=!1,ad=new Uc;function bd(){for(var a;a=ad.remove();){try{a.b.call(a.scope)}catch(b){Rc(b)}Qc(Wc,a)}$c=!1}
;function cd(){this.f=-1}
;function dd(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
A(dd,cd);dd.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function ed(a,b,c){c||(c=0);var d=a.u;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
dd.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)ed(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){ed(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){ed(this,e);f=0;break}}this.g=f;this.i+=b}};
dd.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;ed(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function I(){this.f=this.f;this.u=this.u}
I.prototype.f=!1;I.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function fd(a,b){a.f?q(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(q(void 0)?x(b,void 0):b))}
I.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function gd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function hd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?hd.apply(null,d):gd(d)}}
;function id(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function jd(a,b){if(a.classList)var c=a.classList.contains(b);else c=id(a),c=0<=La(c,b);return c}
function kd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):jd(a,"inverted-hdpi")&&(a.className=Ma(id(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var ld="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function md(){}
md.prototype.next=function(){throw ld;};
md.prototype.F=function(){return this};
function nd(a){if(a instanceof md)return a;if("function"==typeof a.F)return a.F(!1);if(Ba(a)){var b=0,c=new md;c.next=function(){for(;;){if(b>=a.length)throw ld;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function od(a,b){if(Ba(a))try{D(a,b,void 0)}catch(c){if(c!==ld)throw c;}else{a=nd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ld)throw c;}}}
function pd(a){if(Ba(a))return Sa(a);a=nd(a);var b=[];od(a,function(a){b.push(a)});
return b}
;function qd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof qd)for(c=rd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function rd(a){sd(a);return a.b.concat()}
k=qd.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||td;sd(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function td(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&sd(this),!0):!1};
function sd(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=rd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new qd(this)};
k.F=function(a){sd(this);var b=0,c=this.h,d=this,e=new md;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw ld;var e=d.b[b++];return a?e:d.g[e]};
return e};function ud(a){var b=[];vd(new wd,a,b);return b.join("")}
function wd(){}
function vd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),vd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),xd(d,c),c.push(":"),vd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":xd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var yd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},zd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function xd(a,b){b.push('"',a.replace(zd,function(a){var b=yd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),yd[a]=b);return b}),'"')}
;function Ad(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Bd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=ya)try{var c=this;a.call(b,function(a){Cd(c,2,a)},function(a){Cd(c,3,a)})}catch(d){Cd(this,3,d)}}
function Dd(){this.next=this.context=this.onRejected=this.g=this.b=null;this.f=!1}
Dd.prototype.reset=function(){this.context=this.onRejected=this.g=this.b=null;this.f=!1};
var Ed=new Pc(function(){return new Dd},function(a){a.reset()});
function Fd(a,b,c){var d=Ed.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Gd(a){return new J(function(b,c){c(a)})}
function Hd(a,b,c){Id(a,b,c,null)||Xc(y(b,a))}
function Jd(a){return new J(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Hd(e,b,c)})}
function Kd(a){return new J(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Z:!0,value:f}:{Z:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Hd(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
J.prototype.then=function(a,b,c){return Ld(this,Ca(a)?a:null,Ca(b)?b:null,c)};
Ad(J);function Md(a,b){var c=Fd(b,b,void 0);c.f=!0;Nd(a,c);return a}
function Od(a,b){return Ld(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&Xc(function(){var b=new Pd(a);Qd(this,b)},this)};
function Qd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Qd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Rd(c),Sd(c,e,3,b)))}a.g=null}else Cd(a,3,b)}
function Nd(a,b){a.f||2!=a.b&&3!=a.b||Td(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Ld(a,b,c,d){var e=Fd(null,null,null);e.b=new J(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Pd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Nd(a,e);return e.b}
J.prototype.w=function(a){this.b=0;Cd(this,2,a)};
J.prototype.B=function(a){this.b=0;Cd(this,3,a)};
function Cd(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Id(c,a.w,a.B,a)||(a.u=c,a.b=b,a.g=null,Td(a),3!=b||c instanceof Pd||Ud(a,c)))}
function Id(a,b,c,d){if(a instanceof J)return Nd(a,Fd(b||ya,c||null,d)),!0;if(Bd(a))return a.then(b,c,d),!0;if(Da(a))try{var e=a.then;if(Ca(e))return Vd(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Vd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Td(a){a.j||(a.j=!0,Xc(a.m,a))}
function Rd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
J.prototype.m=function(){for(var a;a=Rd(this);)Sd(this,a,this.b,this.u);this.j=!1};
function Sd(a,b,c,d){if(3==c&&b.onRejected&&!b.f)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Wd(b,c,d);else try{b.f?b.g.call(b.context):Wd(b,c,d)}catch(e){Xd.call(null,e)}Qc(Ed,b)}
function Wd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ud(a,b){a.i=!0;Xc(function(){a.i&&Xd.call(null,b)})}
var Xd=Rc;function Pd(a){C.call(this,a)}
A(Pd,C);Pd.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
A(K,I);k=K.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Yd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Qa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=ya):(c&&Ra(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Zd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Zd(a,b,c){Xc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(D(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){K.A.l.call(this);this.clear();this.h.length=0};function $d(a){this.b=a}
$d.prototype.set=function(a,b){q(b)?this.b.set(a,ud(b)):this.b.remove(a)};
$d.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
$d.prototype.remove=function(a){this.b.remove(a)};function ae(a){this.b=a}
A(ae,$d);function be(a){this.data=a}
function ce(a){return!q(a)||a instanceof be?a:new be(a)}
ae.prototype.set=function(a,b){ae.A.set.call(this,a,ce(b))};
ae.prototype.f=function(a){a=ae.A.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ae.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function de(a){this.b=a}
A(de,ae);de.prototype.set=function(a,b,c){if(b=ce(b)){if(c){if(c<z()){de.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}de.A.set.call(this,a,b)};
de.prototype.f=function(a){var b=de.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())de.prototype.remove.call(this,a);else return b}};function ee(a){this.b=a}
A(ee,de);function fe(){}
;function ge(){}
A(ge,fe);ge.prototype.clear=function(){var a=pd(this.F(!0)),b=this;D(a,function(a){b.remove(a)})};function he(a){this.b=a}
A(he,ge);k=he.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.F=function(a){var b=0,c=this.b,d=new md;d.next=function(){if(b>=c.length)throw ld;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function ie(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(ie,he);function je(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(je,he);function ke(a,b){this.f=a;this.b=null;if(tb&&!(9<=Number(Db))){le||(le=new qd);this.b=le.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),le.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(ke,ge);var me={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},le=null;function ne(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return me[a]})}
k=ke.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(ne(a),b);oe(this)};
k.get=function(a){a=this.b.getAttribute(ne(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(ne(a));oe(this)};
k.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new md;d.next=function(){if(b>=c.length)throw ld;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);oe(this)};
function oe(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function pe(a,b){this.f=a;this.b=b+"::"}
A(pe,ge);pe.prototype.set=function(a,b){this.f.set(this.b+a,b)};
pe.prototype.get=function(a){return this.f.get(this.b+a)};
pe.prototype.remove=function(a){this.f.remove(this.b+a)};
pe.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new md;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function qe(a){if(!Ca(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function re(){var a=null;return Od(new J(function(b,c){a=qe(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;function se(){this.f=[];this.b=-1}
se.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
se.prototype.get=function(a){return!!this.f[a]};
function ue(a){-1==a.b&&(a.b=Pa(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function ve(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{Xb(e,b,"preload")}catch(f){return}d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var we=/^\.google\.(com?\.)?[a-z]{2,3}$/,xe=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;function ye(a){return we.test(a)&&!xe.test(a)}
var ze=p;function Ae(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];L[3]>=z()&&b.push("adsid="+encodeURIComponent(L[1]));return a+"?"+b.join("&")}
var L,M;function Be(){ze=p;L=ze.googleToken=ze.googleToken||{};var a=z();L[1]&&L[3]>a&&0<L[2]||(L[1]="",L[2]=-1,L[3]=-1,L[4]="",L[6]="");M=ze.googleIMState=ze.googleIMState||{};ye(M[1])||(M[1]=".google.com");w(M[5])||(M[5]=[]);ta(M[6])||(M[6]=!1);w(M[7])||(M[7]=[]);ua(M[8])||(M[8]=0)}
function Ce(){Be();return L[1]}
var N={da:function(){return 0<M[8]},
Pa:function(){M[8]++},
Qa:function(){0<M[8]&&M[8]--},
Ra:function(){M[8]=0},
shouldRetry:function(){return!1},
ma:function(){return M[5]},
ka:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ia:function(){if(!N.da()){var a=p.document,b=function(b){b=Ae(b);a:{try{var c=va();break a}catch(h){}c=void 0}var d=c;ve(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=gc(b);Yb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),N.Pa()}catch(h){}},c=M[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function De(a){Be();var b=ze.googleToken[5]||0;a&&(0!=b||L[3]>=z()?N.ka(a):(N.ma().push(a),N.ia()));L[3]>=z()&&L[2]>=z()||N.ia()}
function Ee(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";Be();1==e?N.Ra():N.Qa();if(!f&&N.shouldRetry())ye(".google.com")&&(M[1]=".google.com"),N.ia();else{var t=ze.googleToken=ze.googleToken||{},T=0==e&&f&&r(f)&&!g&&ua(h)&&0<h&&ua(l)&&0<l&&r(m);g=g&&!N.da()&&(!(L[3]>=z())||"NT"==L[1]);var Ka=!(L[3]>=
z())&&0!=e;if(T||g||Ka)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&qc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),t[5]=e,t[1]=f,t[2]=h,t[3]=l,t[4]=m,t[6]=b,Be();if(T||!N.da()){e=N.ma();for(f=0;f<e.length;f++)N.ka(e[f]);e.length=0}}};
De(a)}
;function Fe(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ge=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Ge,void 0);function P(a){Fe(Ge,arguments)}
function Q(a,b){return a in Ge?Ge[a]:b}
function He(a){return Q(a,void 0)}
function Ie(){return Q("PLAYER_CONFIG",{})}
;z();function Je(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function Ke(a){R(a,"WARNING",void 0,void 0,void 0)}
;var Le=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Me(){if(!Le)return null;var a=Le();return"open"in a?a:null}
function Ne(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){Ca(a)&&(a=Je(a));return window.setTimeout(a,b)}
function Oe(a){window.clearTimeout(a)}
;function Pe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ta(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Qe={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Re=!1;
function Se(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=G(a)[1]||null,e=uc(G(a)[3]||null);d&&e?(d=c,c=G(a),d=G(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?uc(G(c)[3]||null)==e&&(Number(G(c)[4]||null)||null)==(Number(G(a)[4]||null)||null):!0;for(var f in Qe)(d=Q(Qe[f]))&&(c||Te(a,f))&&(b[f]=d);if(c||Te(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function Te(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=uc(G(a)[3]||null);return d?(c=c[d])?0<=La(c,b):!1:!0}
function Ue(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ve(a,b);var d=We(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Oe(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ha&&b.ha.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.oa&&0<b.timeout&&(f=S(function(){e||(e=!0,Oe(f),b.oa.call(b.context||p))},b.timeout))}else Xe(a,b)}
function Xe(a,b){var c=b.format||"JSON";a=Ve(a,b);var d=We(a,b),e=!1,f,g=Ye(a,function(a){if(!e){e=!0;f&&Oe(f);var d=Ne(a),g=null,h=400<=a.status&&500>a.status,T=500<=a.status&&600>a.status;if(d||h||T)g=Ze(c,a,b.rb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ha&&b.ha.call(h,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),Oe(f),b.M.call(b.context||p,g))},b.timeout));
return g}
function Ve(a,b){b.Ca&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.bb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Pe(f[1]||"");for(var g in d)f[g]=d[g];a=xc(c,f)+e}return a}
function We(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=He("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.sb||uc(G(a)[3]||null)&&!b.withCredentials&&uc(G(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Pe(e),qb(e,f),e=b.pa&&"JSON"==b.pa?JSON.stringify(e):wc(e));f=e||f&&!lb(f);!Re&&f&&"POST"!=b.method&&(Re=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Ze(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?$e(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=af(a)})}c&&bf(d);
return d}
function bf(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Vb(a[b],null);a[c]=d}else bf(a[b])}}
function $e(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function af(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function cf(a,b){b.method="POST";b.C||(b.C={});Xe(a,b)}
function Ye(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Je(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Me();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Se(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var df={},ef=0;
function ff(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=db,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof F||(a="object"==typeof a&&a.J?a.H():String(a),Qb.test(a)||(a="about:invalid#zClosurez"),a=Sb(a)),b=Pb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Tb?a=b:(d="object"==typeof b,a=null,d&&b.ea&&(a=b.aa()),b=Va(d&&b.J?b.H():String(b)),a=Vb(b,a)),a=encodeURIComponent(String(ud(a instanceof Tb&&a.constructor===Tb&&a.g===Ub?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=
dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ye(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ye(a,b,"GET","",d):gf(a,b))}
function gf(a,b){var c=new Image,d=""+ef++;df[d]=c;c.onload=c.onerror=function(){b&&df[d]&&b();delete df[d]};
c.src=a}
;var hf={},jf=0;
function kf(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=jf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(T){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(T){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(hf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={bb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.C.stack=l);for(var m in f)h.C["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var t in m)h.C[t]=m[t];Xe(Q("ECATCHER_REPORT_HOST","")+"/error_204",h);hf[a.message]=!0;jf++}}}
;var lf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",lf,void 0);function mf(a){Fe(lf,arguments)}
;function nf(a){a&&(a.dataset?a.dataset[of("loaded")]="true":a.setAttribute("data-loaded","true"))}
function pf(a,b){return a?a.dataset?a.dataset[of(b)]:a.getAttribute("data-"+b):null}
var qf={};function of(a){return qf[a]||(qf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var rf=v("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.L;K.prototype.publish=K.prototype.K;K.prototype.clear=K.prototype.clear;u("ytPubsubPubsubInstance",rf,void 0);var sf=v("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",sf,void 0);var tf=v("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",tf,void 0);var uf=v("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",uf,void 0);
function vf(a,b){var c=wf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){sf[d]&&b.apply(window,c)};
try{uf[a]?f():S(f,0)}catch(g){R(g)}},void 0);
sf[d]=!0;tf[a]||(tf[a]=[]);tf[a].push(d);return d}return 0}
function xf(a){var b=wf();b&&(ua(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete sf[a]}))}
function yf(a,b){var c=wf();c&&c.publish.apply(c,arguments)}
function zf(a){var b=wf();if(b)if(b.clear(a),a)Af(a);else for(var c in tf)Af(c)}
function wf(){return v("ytPubsubPubsubInstance")}
function Af(a){tf[a]&&(a=tf[a],D(a,function(a){sf[a]&&delete sf[a]}),a.length=0)}
;var Bf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Cf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Df(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Bf,""),c=c.replace(Cf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ef(a,b)}
function Ef(a,b){var c=Ff(a),d=document.getElementById(c),e=d&&pf(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=vf(c,b);var g=""+(b[Ea]||(b[Ea]=++Fa));Gf[g]=e}f||(d=Hf(a,c,function(){pf(d,"loaded")||(nf(d),yf(c),S(y(zf,c),0))}))}}
function Hf(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Yb(d,gc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function If(a){a=Ff(a);var b=document.getElementById(a);b&&(zf(a),b.parentNode.removeChild(b))}
function Jf(a,b){if(a&&b){var c=""+(b[Ea]||(b[Ea]=++Fa));(c=Gf[c])&&xf(c)}}
function Ff(a){var b=document.createElement("a");Wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+cb(a)}
var Gf={};function Kf(){}
function Lf(a,b){return Mf(a,1,b)}
;function Nf(){}
n(Nf,Kf);function Mf(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function Of(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):Oe(a)}}
Nf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Nf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
za(Nf);Nf.getInstance();var Pf=[],Qf=!1;function Rf(){if("1"!=ib(Ie(),"args","privembed")){var a=function(){Qf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
Df("//static.doubleclick.net/instream/ad_status.js",a);Pf.push(Lf(function(){Qf||"google_ad_status"in window||(Jf("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function Sf(){return parseInt(Q("DCLKSTAT",0),10)}
;function Tf(){this.f=!1;this.b=null}
Tf.prototype.initialize=function(a,b,c,d){b?(this.f=!0,Df(b,function(){this.f=!1;window.botguard?Uf(this,c,d):(If(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Uf(this,c,d):R(Error("Unable to load Botguard from JS"),"WARNING"))};
function Uf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){Ke(d)}c&&c(b)}
Tf.prototype.invoke=function(){return this.b?this.b.invoke():null};
Tf.prototype.dispose=function(){this.b=null};function U(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var Vf=new Tf,Wf=!1,Xf=0,Yf="";function Zf(a){U("botguard_periodic_refresh")?Xf=O():U("botguard_always_refresh")&&(Yf=a)}
function $f(a){if(a){if(Vf.f)return!1;if(U("botguard_periodic_refresh"))return 72E5<O()-Xf;if(U("botguard_always_refresh"))return Yf!=a}else return!1;return!Wf}
function ag(){return null!==Vf.b}
function bg(){return Vf.invoke()}
;var cg=0;u("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++cg},void 0);var dg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function eg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in dg||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function fg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
eg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
eg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
eg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=v("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",kb,void 0);var gg=v("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",gg,void 0);
function hg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f=ta(e[4])&&e[4]==!!d,g=Da(e[4])&&Da(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ig=Jb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=hg(a,b,c,d);if(e)return e;e=++gg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new eg(d);if(!fc(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new eg(b);
b.currentTarget=a;return c.call(a,b)};
g=Je(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ig()||ta(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d];return e}
function jg(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in kb){var b=kb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?ig()||ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[a]}}))}
;function kg(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=W(window,"mousemove",x(this.G,this));a=x(this.B,this);Ca(a)&&(a=Je(a));this.I=window.setInterval(a,25)}
A(kg,I);kg.prototype.G=function(a){q(a.b)||fg(a);var b=a.b;q(a.f)||fg(a);this.b=new Zb(b,a.f)};
kg.prototype.B=function(){if(this.b){var a=O();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
kg.prototype.l=function(){window.clearInterval(this.I);jg(this.D)};var lg={};
function mg(a){var b=void 0===a?{}:a;a=void 0===b.Da?!0:b.Da;b=void 0===b.Na?!1:b.Na;if(null==v("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&ng();W(document,"keydown",ng);W(document,"keyup",ng);W(document,"mousedown",ng);W(document,"mouseup",ng);a&&(b?W(window,"touchmove",function(){og("touchmove",200)},{passive:!0}):(W(window,"resize",function(){og("resize",200)}),W(window,"scroll",function(){og("scroll",200)})));
new kg(function(){og("mouse",100)});
W(document,"touchstart",ng,{passive:!0});W(document,"touchend",ng,{passive:!0})}}
function og(a,b){lg[a]||(lg[a]=!0,Lf(function(){ng();lg[a]=!1},b))}
function ng(){null==v("_lact",window)&&mg();var a=z();u("_lact",a,window);-1==v("_fact",window)&&u("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function pg(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var qg=Math.pow(2,16)-1,rg=null,sg=0,tg={log_event:"events",log_interaction:"interactions"},ug=Object.create(null);ug.log_event="GENERIC_EVENT_LOGGING";ug.log_interaction="INTERACTION_LOGGING";var vg=new Set(["log_event"]),wg={},xg=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",X,void 0);var yg=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",yg,void 0);var zg=v("ytLoggingTransportDispatchedStats_")||{};
u("ytLoggingTransportDispatchedStats_",zg,void 0);u("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Ag(a,b){if(a.W){var c=a.W;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);yg[a.W.token]=d;c=Bg(a.endpoint,a.W.token)}else c=Bg(a.endpoint);c.push(a.payload);wg[a.endpoint]=new b;c.length>=(Number(U("web_logging_max_batch")||0)||20)?Cg():Dg()}
function Cg(){Oe(xg);if(!lb(X)){for(var a in X){var b=wg[a];b&&(Eg(a,b),delete X[a])}lb(X)||Dg()}}
function Dg(){Oe(xg);xg=S(Cg,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function Bg(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
function Eg(a,b){var c=tg[a],d=zg[a]||{};zg[a]=d;var e=Math.round(O());for(m in X[a]){var f=b.b;f={client:{hl:f.Ga,gl:f.Fa,clientName:f.Ea,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));Q("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(f.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f={context:f};f[c]=Bg(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=yg[m])a:{var h=
m;if(g.videoId)var l="VIDEO";else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:h,scope:l}]}delete yg[m];f.requestTimeMs=e;if(g=He("EVENT_ID"))l=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>qg&&(l=1),P("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,rg&&sg&&U("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:rg,
roundtripMs:sg}),rg=g,sg=0;Fg(b,a,f,{retry:vg.has(a),onSuccess:Gg.bind(this,O())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function Gg(a){sg=Math.round(O()-a)}
;function Hg(a,b,c,d){var e=Ig,f={};f.eventTimeMs=Math.round(c||O());f[a]=b;f.context={lastActivityMs:String(c?-1:pg())};Ag({endpoint:"log_event",payload:f,W:d},e)}
;function Jg(a,b){var c={"X-Goog-Visitor-Id":Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+v("gapi.auth.getToken")().ob:d=Oc([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),U("pageid_as_header_web")&&(c["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return c}
function Kg(a){a=Object.assign({},a);delete a.Authorization;var b=Oc();if(b){var c=new dd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!Fb)for(Fb={},Gb={},c=0;65>c;c++)Fb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Gb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Gb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,t=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[t],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Lg(a,b,c,d){Ib.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Mg(){var a=new ie;(a=a.isAvailable()?new pe(a,"yt.innertube"):null)||(a=new ke("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new de(a):null;this.f=document.domain||window.location.hostname}
Mg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ud(b))}catch(f){return}else e=escape(b);Lg(a,e,c,this.f)};
Mg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Ib.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Mg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Ib.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ng=new Mg;function Og(a,b,c,d){if(d)return null;d=Ng.get("nextId",!0)||1;var e=Ng.get("requests",!0)||{};e[d]={method:a,request:b,authState:Kg(c),requestTime:Math.round(O())};Ng.set("nextId",d+1,86400,!0);Ng.set("requests",e,86400,!0);return d}
function Pg(a){var b=Ng.get("requests",!0)||{};delete b[a];Ng.set("requests",b,86400,!0)}
function Qg(a){var b=Ng.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=Kg(Jg(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Fg(a,d.method,e,{}));delete b[c]}}Ng.set("requests",b,86400,!0)}}
;function Ig(a){var b=this;this.b=a||{innertubeApiKey:He("INNERTUBE_API_KEY"),innertubeApiVersion:He("INNERTUBE_API_VERSION"),Ea:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:He("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ga:He("INNERTUBE_CONTEXT_HL"),Fa:He("INNERTUBE_CONTEXT_GL"),Ha:He("INNERTUBE_HOST_OVERRIDE")||"",Ia:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Mf(function(){Qg(b)},0,5E3)}
function Fg(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,pa:"JSON",M:function(){d.M()},
oa:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
na:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
tb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Ha;g&&(f=g);g=a.b.Ia||!1;var h=Jg(g,f);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Og(b,c,h,g))){var t=e.onSuccess,T=e.na;e.onSuccess=function(a,b){Pg(m);t(a,b)};
c.na=function(a,b){Pg(m);T(a,b)}}try{U("use_fetch_for_op_xhr")?Ue(l,e):cf(l,e)}catch(Ka){if("InvalidAccessError"==Ka)m&&(Pg(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw Ka;}m&&Mf(function(){Qg(a)},0,5E3)}
;var Rg=z().toString();
function Sg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Rg)for(a=1,b=0;b<Rg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Rg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Tg=Sg();function Ug(a){this.b=a}
function Vg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Vg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Wg=1;function Xg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Yg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Zg(a){return Q(Yg(void 0===a?0:a),void 0)}
u("yt.logging.screen.getRootVeType",Zg,void 0);function $g(){var a=Zg(0),b;a?b=new Ug({veType:a,youtubeData:void 0}):b=null;return b}
function ah(a){a=void 0===a?0:a;var b=Q(Xg(a));b||0!=a||(b=Q("EVENT_ID"));return b?b:null}
u("yt.logging.screen.getCurrentCsn",ah,void 0);function bh(a,b,c){c=void 0===c?0:c;P(Xg(c),a);P(Yg(c),b);0==c&&(b=function(){setTimeout(function(){a&&Hg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Tg,clientScreenNonce:a})},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
u("yt.logging.screen.setCurrentScreen",bh,void 0);function ch(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=uc(G(window.location.href)[3]||null);f&&e.push(f);f=uc(G(d)[3]||null);if(0<=La(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Wb(e,d),d=e.href),d){f=G(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
ah();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+cb(d).toString(36),b=b?wc(b):"",Lg(d,b,h||5))}else h="ST-"+cb(d).toString(36),b=b?wc(b):"",Lg(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var t=void 0===t?window:t;c=t.location;a=xc(a,l)+m;a=a instanceof F?a:Rb(a);c.href=Pb(a)}return!0}
;function dh(a,b,c){U("attach_child_on_gel_web")?eh(a,b,[c]):fh({attachChild:{csn:a,parentVisualElement:Vg(b),visualElements:[Vg(c)]}})}
function eh(a,b,c){U("attach_child_on_gel_web")?(a={csn:a,parentVe:Vg(b),childVes:Oa(c,function(a){return Vg(a)})},Hg("visualElementAttached",a)):(a={csn:a,
parentVisualElement:Vg(b),visualElements:Oa(c,function(a){return Vg(a)})},fh({attachChild:a}))}
function fh(a){var b=Ig;a.eventTimeMs=Math.round(O());a.lactMs=pg();Ag({endpoint:"log_interaction",payload:a},b)}
;function gh(a){a=a||{};this.url=a.url||"";this.args=a.args||ob(hh);this.assets=a.assets||{};this.attrs=a.attrs||ob(ih);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var hh={enablejsapi:1},ih={};gh.prototype.clone=function(){var a=new gh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==Aa(c)?ob(c):c}return a};function jh(){I.call(this);this.b=[]}
n(jh,I);jh.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.qb)}I.prototype.l.call(this)};var kh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function lh(a){a=a||"";if(window.spf){var b=a.match(kh);spf.style.load(a,b?b[1]:"",void 0)}else mh(a)}
function mh(a){var b=nh(a),c=document.getElementById(b),d=c&&pf(c,"loaded");d||c&&!d||(c=oh(a,b,function(){pf(c,"loaded")||(nf(c),yf(b),S(y(zf,b),0))}))}
function oh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gc(a);Xb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function nh(a){var b=document.createElement("A");a=Sb(a);Wb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+cb(b)}
;var ph=v("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",ph,void 0);var qh=0;function rh(a){ph[a]=ph[a]||{count:0};var b=ph[a];b.count++;b.time=O();qh||(qh=Mf(sh,0,5E3));return 10<b.count?(11==b.count&&kf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function sh(){var a=O(),b;for(b in ph)6E4<a-ph[b].time&&delete ph[b];qh=0}
;function th(a,b){this.version=a;this.args=b}
;function uh(a){this.topic=a}
uh.prototype.toString=function(){return this.topic};var vh=v("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.L;K.prototype.publish=K.prototype.K;K.prototype.clear=K.prototype.clear;u("ytPubsub2Pubsub2Instance",vh,void 0);u("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function wh(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var xh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function yh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function zh(){var a=yh(),b;for(b in a)Of(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Ah(a,b){th.call(this,1,arguments)}
n(Ah,th);function Bh(a,b){th.call(this,1,arguments)}
n(Bh,th);var Ch=new uh("aft-recorded"),Dh=new uh("timing-sent");var Gh={vc:!0},Y={},Hh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",
Y.yt_ad_pr="prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Ih="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Jh="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Kh=!1;function Lh(){var a=Mh().info.yt_lt="hot_bg";Nh().info_yt_lt=a;if(Oh())if("yt_lt"in Hh){var b=Hh.yt_lt;0<=La(Jh,b)&&(a=!!a);var c=a;if(Oh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Ph();b=Object.keys(a).join("");rh("info_"+b+"_"+c)||(a.clientActionNonce=c,Hg("latencyActionInfo",a,void 0,void 0))}}else 0<=La(Ih,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Qh(){var a=Rh();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var Sh=x(xh.clearResourceTimings||xh.webkitClearResourceTimings||xh.mozClearResourceTimings||xh.msClearResourceTimings||xh.oClearResourceTimings||ya,xh);function Ph(){var a=Mh().nonce;a||(a=Sg(),Mh().nonce=a);return a}
function Rh(){return Mh().tick}
function Nh(){var a=Mh();"gel"in a||(a.gel={});return a.gel}
function Mh(){return v("ytcsi.data_")||Th()}
function Th(){var a={tick:{},info:{}};u("ytcsi.data_",a,void 0);return a}
function Uh(a,b){u("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Vh(){var a=Rh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Mh().info.yt_pvis}
function Oh(){return!!U("csi_on_gel")||!!Mh().useGel}
function Wh(){zh();if(!Oh()){var a=Rh(),b=Mh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&w(a[f])){var d=f.slice(1);if(d in Gh){var e=Oa(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=v("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))Xh(a,f),Th(),Sh(),Uh(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:Q("TIMING_ACTION",void 0)};e=Lh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+v("ytplayer.config.assets.js");(h=xh.getEntriesByName?xh.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-
h.responseEnd):delete b.h5jse}a.aft=Qh();Vh()&&"youtube"==g&&(Lh(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=O();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=v("ytdebug.logTiming"))&&a(d,b);Xh(d,f,void 0);wh(Dh,new Bh(b.aft+(e||0),void 0))}}}
function Xh(a,b,c){if(U("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],u("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||ff(a,void 0,void 0,void 0,f)}catch(g){ff(a,void 0,void 0,void 0,f)}}else ff(a);Uh(!0,c)}
function Yh(a){if("_"!=a[0]){var b=a;xh.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),xh.mark(b))}b=Rh();var c=O();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=yh();if(c=b[a])Of(c),b[a]=0;Nh()["tick_"+a]=void 0;O();Oh()?(b=Ph(),"_start"==a?rh("baseline_"+b)||Hg("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):rh("tick_"+a+"_"+b)||Hg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=He("TIMING_ACTION"),
a=Rh(),v("ytglobal.timingready_")&&b&&a._start&&(b=Qh()))){Kh||(wh(Ch,new Ah(Math.round(b-a._start),void 0)),Kh=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Wh()}}
;function Zh(a,b){I.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new K;fd(this,y(gd,this.G));this.h={};this.N=this.R=this.g=this.Y=this.b=null;this.I=!1;this.i=this.w=null;this.U={};this.ta=["onReady"];this.X=null;this.ja=NaN;this.O={};$h(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Ka.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.La.bind(this));this.V("onAdAnnounce",this.wa.bind(this));this.ua=new jh(this);fd(this,y(gd,this.ua))}
n(Zh,I);k=Zh.prototype;
k.ga=function(a){if(!this.f){a instanceof gh||(a=new gh(a));this.Y=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=ai(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=rc(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=rc(Number(a)||
a);bi(this);this.m&&ci(this)}};
k.za=function(){return this.Y};
function ci(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function di(a){var b=!0,c=ei(a);c&&a.b&&(a=a.b,b=pf(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function bi(a){if(!a.f&&!a.I){var b=di(a);if(b&&"html5"==(ei(a)?"html5":null))a.N="html5",a.m||fi(a);else if(gi(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),fi(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.T,b);fi(a)};
a.I=!0;b?a.w():(Df(a.b.assets.js,a.w),lh(a.b.assets.css),hi(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function ei(a){var b=ac(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function fi(a){if(!a.f){var b=ei(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.I=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||ii(a)):a.ja=S(function(){fi(a)},50)}}
function ii(a){$h(a);a.m=!0;var b=ei(a);b.addEventListener&&(a.B=ji(a,b,"addEventListener"));b.removeEventListener&&(a.P=ji(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ji(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);ci(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function ji(a,b,c){var d=b[c];return function(){try{return a.X=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.X=e,Ke(e))}}}
function $h(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)Oe(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Sa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Aa.bind(a);a.api.getPlayerType=a.Ba.bind(a);a.api.getCurrentVideoConfig=a.za.bind(a);a.api.loadNewVideoConfig=a.ga.bind(a);a.api.isReady=a.Ja.bind(a)}
k.Ja=function(){return this.m};
k.V=function(a,b){var c=this,d=ai(this,b);if(d){if(!(0<=La(this.ta,a)||this.h[a])){var e=ki(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&S(function(){d(c.api)},0)}};
k.Sa=function(a,b){if(!this.f){var c=ai(this,b);c&&Yd(this.G,a,c)}};
function ai(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.U[b]=c}return c?c:null}
function ki(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;p[c]=function(c){var d=S(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
mb(a.O,String(d))};
return c}
k.wa=function(a){yf("a11y-announce",a)};
k.Ka=function(a){yf("WATCH_LATER_VIDEO_ADDED",a)};
k.La=function(a){yf("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ba=function(){return this.N||(ei(this)?"html5":null)};
k.Aa=function(){return this.X};
function gi(a){Yh("dcp");a.cancel();$h(a);a.N=null;a.b&&(a.b.loaded=!1);var b=ei(a);b&&(di(a)||!hi(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.w&&Jf(this.b.assets.js,this.w);Oe(this.ja);this.I=!1};
k.l=function(){gi(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){R(b)}this.U=null;for(var a in this.h)p[this.h[a]]=null;this.Y=this.b=this.api=null;delete this.T;delete this.j;I.prototype.l.call(this)};
function hi(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var li={},mi="player_uid_"+(1E9*Math.random()>>>0);function ni(a){var b="player";b=r(b)?ac(b):b;var c=mi+"_"+(b[Ea]||(b[Ea]=++Fa)),d=li[c];if(d)return d.ga(a),d.api;d=new Zh(b,c);li[c]=d;yf("player-added",d.api);fd(d,y(oi,d));S(function(){d.ga(a)},0);
return d.api}
function oi(a){delete li[a.D]}
;function pi(){var a=qi(),b=ri();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var ri=Jb(function(){var a=new ie;return a.isAvailable()?new ee(a):null}),qi=Jb(function(){var a=new je;
return a.isAvailable()?new ee(a):null});function si(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function ti(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ui(a)}
function ui(a,b,c){if(Da(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function vi(a,b,c,d){if(Da(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function wi(a){var b=a.video_id||a.videoId;if(r(b)){var c=pi()||{},d=pi()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=ri();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function xi(a){I.call(this);this.b=a;this.b.subscribe("command",this.qa,this);this.g={};this.i=!1}
A(xi,I);k=xi.prototype;k.start=function(){this.i||this.f||(this.i=!0,yi(this.b,"RECEIVING"))};
k.qa=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.g||(c=x(this.Ua,this,a),this.g[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&zi(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=Ai(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=Bi(a,c))&&this.i&&!this.f&&yi(this.b,a,c))}}};
k.Ua=function(a,b){this.i&&!this.f&&yi(this.b,a,this.ba(a,b))};
k.ba=function(a,b){if(null!=b)return{value:b}};
function zi(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
k.l=function(){var a=this.b;a.f||Yd(a.b,"command",this.qa,this);this.b=null;for(var b in this.g)zi(this,b);xi.A.l.call(this)};function Ci(a,b){xi.call(this,b);this.h=a;this.start()}
A(Ci,xi);Ci.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
Ci.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function Ai(a,b){switch(a){case "loadVideoById":return b=ui(b),wi(b),[b];case "cueVideoById":return b=ui(b),wi(b),[b];case "loadVideoByPlayerVars":return wi(b),[b];case "cueVideoByPlayerVars":return wi(b),[b];case "loadPlaylist":return b=vi(b),wi(b),[b];case "cuePlaylist":return b=vi(b),wi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Bi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ci.prototype.ba=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ci.A.ba.call(this,a,b)};
Ci.prototype.l=function(){Ci.A.l.call(this);delete this.h};function Di(a,b,c,d){I.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=x(this.B,this);window.addEventListener("message",this.m)}
n(Di,I);Di.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=La(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
Di.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=ud(a);c.postMessage(d,this.w)}catch(e){R(e,"WARNING")}}};
Di.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function Ei(a,b,c){Di.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Ei,Di);function Fi(){var a=this.f=new Ei(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Oa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=Fi.prototype;k.Oa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Gi(this,a)),this.i[a]=!0)):this.sa(a,b,c)};
k.sa=function(){};
function Gi(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.ya=function(){this.j=!0;this.sendMessage("initialDelivery",this.ca());this.sendMessage("onReady");D(this.h,this.ra,this);this.h=[]};
k.ca=function(){return null};
function Hi(a,b){a.sendMessage("infoDelivery",b)}
k.ra=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.ra({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Ii(a){Fi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Ma,this));this.addEventListener("onVideoProgress",x(this.Ya,this));this.addEventListener("onVolumeChange",x(this.Za,this));this.addEventListener("onApiChange",x(this.Ta,this));this.addEventListener("onPlaybackQualityChange",x(this.Va,this));this.addEventListener("onPlaybackRateChange",x(this.Wa,this));this.addEventListener("onStateChange",x(this.Xa,this));this.addEventListener("onWebglSettingsChanged",x(this.ab,
this))}
A(Ii,Fi);k=Ii.prototype;k.sa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&si(a)){var d=b;if(Da(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ui.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=ti.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=vi.apply(window,d)}d=e}wi(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);si(a)&&Hi(this,this.ca())}};
k.Ma=function(){var a=x(this.ya,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ca=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ra(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Xa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Hi(this,a)};
k.Va=function(a){Hi(this,{playbackQuality:a})};
k.Wa=function(a){Hi(this,{playbackRate:a})};
k.Ta=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Za=function(){Hi(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Ya=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Hi(this,a)};
k.ab=function(){var a={sphericalProperties:this.b.getSphericalProperties()};Hi(this,a)};
k.dispose=function(){Ii.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Ji(a){a=void 0===a?!1:a;I.call(this);this.b=new K(a);fd(this,y(gd,this.b))}
A(Ji,I);Ji.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
Ji.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function Ki(a,b,c){Ji.call(this);this.g=a;this.h=b;this.j=c}
A(Ki,Ji);function yi(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(ud(a),d.h))}}
Ki.prototype.l=function(){this.h=this.g=null;Ki.A.l.call(this)};function Li(a,b,c){I.call(this);this.b=a;this.h=c;this.i=W(window,"message",x(this.j,this));this.g=new Ki(this,a,b);fd(this,y(gd,this.g))}
A(Li,I);Li.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
Li.prototype.l=function(){jg(this.i);this.b=null;Li.A.l.call(this)};function Mi(){var a=ob(Ni),b;return Od(new J(function(c,d){a.onSuccess=function(a){Ne(a)?c(a):d(new Oi("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Oi("Unknown request error","net.unknown",a))};
a.M=function(a){d(new Oi("Request timed out","net.timeout",a))};
b=Xe("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Pd&&b.abort();
return Gd(a)})}
function Oi(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Oi,C);function Pi(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Pi.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Bd(a)?a:Qi(a)):2===this.f&&b?(a=b.call(c,this.b),Bd(a)?a:Ri(a)):this};
Pi.prototype.getValue=function(){return this.b};
Ad(Pi);function Ri(a){var b=new Pi;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Qi(a){var b=new Pi;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Si(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ti;this.isTimeout=a instanceof Oi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Pd}
n(Si,C);Si.prototype.name="BiscottiError";function Ti(){C.call(this,"Biscotti ID is missing from server")}
n(Ti,C);Ti.prototype.name="BiscottiMissingError";var Ni={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ui=null;function Vi(){if("1"===ib(Ie(),"args","privembed"))return Gd(Error("Biscotti ID is not available in private embed mode"));Ui||(Ui=Od(Mi().then(Wi),function(a){return Xi(2,a)}));
return Ui}
function Wi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ti;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ti;a=a.id;Yi(a);Ui=Qi(a);Zi(18E5,2);return a}
function Xi(a,b){var c=new Si(b);Yi("");Ui=Ri(c);0<a&&Zi(12E4,a-1);throw c;}
function Zi(a,b){S(function(){Od(Mi().then(Wi,function(a){return Xi(b,a)}),ya)},a)}
function Yi(a){u("yt.ads.biscotti.lastId_",a,void 0)}
function $i(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Vi()}catch(b){return Gd(b)}}
;function aj(a){C.apply(this,arguments)}
n(aj,C);aj.prototype.name="YuzuError";function bj(){var a=new aj("ID is missing"),b=new aj("Timeout"),c=null,d=!1;Ee(function(){c=Ce();d=!0});
if(d)return c?Qi(c):Ri(a);var e=new J(function(b,c){Ee(function(){var d=Ce();d?b(d):c(a)})}),f=re().then(function(){return Gd(b)});
return Md(Jd([e,f]),function(){return f.cancel()})}
;function cj(a){if("1"!==ib(Ie(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||Ia("yt.ads.biscotti.getId_",Vi));try{var b=$i();if(U("enable_yuzu")){v("yt.ads.yuzu.getId_")||u("yt.ads.yuzu.getId_",bj,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Gd(d)}}else c=Gd(new aj("unimplemented"));Kd([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Z||a.Z){b=b.value;a=a.value;var c={};c.dt=Jc;c.flash="0";a:{try{var d=window.top.location.href}catch(fb){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?B:h;try{var l=h.history.length}catch(fb){l=0}d.u_his=l;d.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(d.u_h=B.screen.height,d.u_w=B.screen.width,d.u_ah=B.screen.availHeight,d.u_aw=B.screen.availWidth,d.u_cd=B.screen.colorDepth);B.navigator&&B.navigator.plugins&&(d.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(d.u_nmime=
B.navigator.mimeTypes.length);d.ca_type="image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var t=l.screenY}catch(fb){}try{var T=l.outerWidth;var Ka=l.outerHeight}catch(fb){}try{var Eh=l.innerWidth;var Fh=l.innerHeight}catch(fb){}m=[l.screenLeft,l.screenTop,m,t,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,T,Ka,Eh,Fh];t=window.top;try{var V=(t||window).document,ea="CSS1Compat"==V.compatMode?V.documentElement:
V.body;var Na=(new $b(ea.clientWidth,ea.clientHeight)).round()}catch(fb){Na=new $b(-12245933,-12245933)}V={};ea=new se;p.SVGElement&&p.document.createElementNS&&ea.set(0);t=oc();t["allow-top-navigation-by-user-activation"]&&ea.set(1);t["allow-popups-to-escape-sandbox"]&&ea.set(2);ea=ue(ea);V.bc=ea;V.bih=Na.height;V.biw=Na.width;V.brdim=m.join();Na=(V.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ja.visibilityState||Ja.webkitVisibilityState||Ja.mozVisibilityState||""]||0,V.wgl=!!B.WebGLRenderingContext,
V);for(var te in Na)d[te]=Na[te]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=dj++;cf("//www.youtube.com/ad_data_204",{Ca:!1,C:d,withCredentials:!0})}});
S(cj,18E5)}catch(d){R(d)}}}
var dj=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function ej(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Ib.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=ej.prototype;k.get=function(a,b){fj(a);gj(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){fj(a);gj(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){fj(a);gj(a);delete Z[a]};
k.save=function(){Lg(this.b,this.dump(),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
k.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function gj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function fj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function hj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
za(ej);var ij=null,jj=null,kj=null,lj={};function mj(a){var b=a.id;a=a.ve_type;var c=Wg++;a=new Ug({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});lj[b]=a;b=ah();c=$g();b&&c&&dh(b,c,a)}
function nj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(bh(b,a),a=$g()))for(var c in lj){var d=lj[c];d&&dh(b,a,d)}}
function oj(a){lj[a.id]=new Ug({trackingParams:a.tracking_params})}
function pj(a){var b=ah();a=lj[a.id];b&&a&&Hg("visualElementGestured",{csn:b,ve:Vg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"})}
function qj(a){a=a.ids;var b=ah();if(b)for(var c=0;c<a.length;c++){var d=lj[a[c]];d&&Hg("visualElementShown",{csn:b,ve:Vg(d),eventType:1})}}
function rj(){var a=ij;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",P,void 0);u("yt.config.set",P,void 0);u("yt.setMsg",mf,void 0);u("yt.msgs.set",mf,void 0);u("yt.logging.errors.log",kf,void 0);
u("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);cj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&wi(a.args);ij=a=ni(a);a.addEventListener("onScreenChanged",nj);a.addEventListener("onLogClientVeCreated",mj);a.addEventListener("onLogServerVeCreated",oj);a.addEventListener("onLogVeClicked",
pj);a.addEventListener("onLogVesShown",qj);a.addEventListener("onReady",rj);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?kj=new Ii(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(jj=new Li(window.parent,b,c),kj=new Ci(a,jj.g));c=He("BG_P");$f(c)&&(Q("BG_I")||Q("BG_IU"))&&(Wf=!0,Vf.initialize(Q("BG_I",null),Q("BG_IU",null),c,Zf));Rf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){ff(a+"mac_204?action_fcts=1");return!0},void 0);
var sj=Je(function(){Yh("ol");var a=ej.getInstance(),b=!!((hj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&jd(document.body,"exp-invert-logo"))if(c&&!jd(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):jd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&jd(document.body,"inverted-hdpi")&&kd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=hj(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),tj=Je(function(){var a=ij;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Vf.dispose();a=0;for(var b=Pf.length;a<b;a++)Of(Pf[a]);Pf.length=0;If("//static.doubleclick.net/instream/ad_status.js");Qf=!1;P("DCLKSTAT",0);hd(kj,jj);if(a=ij)a.removeEventListener("onScreenChanged",nj),a.removeEventListener("onLogClientVeCreated",mj),a.removeEventListener("onLogServerVeCreated",oj),a.removeEventListener("onLogVeClicked",pj),a.removeEventListener("onLogVesShown",qj),a.removeEventListener("onReady",rj),a.destroy();lj=
{}});
window.addEventListener?(window.addEventListener("load",sj),window.addEventListener("unload",tj)):window.attachEvent&&(window.attachEvent("onload",sj),window.attachEvent("onunload",tj));Ia("yt.abuse.player.botguardInitialized",v("yt.abuse.player.botguardInitialized")||ag);Ia("yt.abuse.player.invokeBotguard",v("yt.abuse.player.invokeBotguard")||bg);Ia("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Sf);
Ia("yt.player.exports.navigate",v("yt.player.exports.navigate")||ch);Ia("yt.util.activity.init",v("yt.util.activity.init")||mg);Ia("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||pg);Ia("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||ng);}).call(this);
