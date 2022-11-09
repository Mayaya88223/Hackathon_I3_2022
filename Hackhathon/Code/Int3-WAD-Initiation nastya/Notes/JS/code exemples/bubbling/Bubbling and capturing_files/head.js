var head = function(t) {
var e = window.webpackJsonp_name_;
window.webpackJsonp_name_ = function(n, o, s) {
for (var a, c, u, l = 0, d = []; l < n.length; l++) c = n[l], r[c] && d.push(r[c][0]), 
r[c] = 0;
for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
for (e && e(n, o, s); d.length; ) d.shift()();
if (s) for (l = 0; l < s.length; l++) u = i(i.s = s[l]);
return u;
};
var n = {}, r = {
14: 0
};
function i(e) {
if (n[e]) return n[e].exports;
var r = n[e] = {
i: e,
l: !1,
exports: {}
};
return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
}
return i.e = function(t) {
var e = r[t];
if (0 === e) return new Promise(function(t) {
t();
});
if (e) return e[2];
var n = new Promise(function(n, i) {
e = r[t] = [ n, i ];
});
e[2] = n;
var o = document.getElementsByTagName("head")[0], s = document.createElement("script");
s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, 
i.nc && s.setAttribute("nonce", i.nc), s.src = i.p + "" + ({
2: "authClient",
6: "ebookExtras"
}[t] || t) + "-" + t + ".5ac6aee21473ea597203.js";
var a = setTimeout(c, 12e4);
function c() {
s.onerror = s.onload = null, clearTimeout(a);
var e = r[t];
0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), r[t] = void 0);
}
return s.onerror = s.onload = c, o.appendChild(s), n;
}, i.m = t, i.c = n, i.d = function(t, e, n) {
i.o(t, e) || Object.defineProperty(t, e, {
configurable: !1,
enumerable: !0,
get: n
});
}, i.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return i.d(e, "a", e), e;
}, i.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, i.p = "/pack/", i.oe = function(t) {
throw t;
}, i(i.s = 149);
}({
1: function(t, e, n) {
var r = {
"./en.yml": 672,
"./ru.yml": 673
};
function i(t) {
return n(o(t));
}
function o(t) {
var e = r[t];
if (!(e + 1)) throw new Error("Cannot find module '" + t + "'.");
return e;
}
i.keys = function() {
return Object.keys(r);
}, i.resolve = o, t.exports = i, i.id = 1;
},
143: function(t, e, n) {
(function(t) {
"use strict";
t.defineLocale("en-gb", {
months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat: {
LT: "HH:mm",
LTS: "HH:mm:ss",
L: "DD/MM/YYYY",
LL: "D MMMM YYYY",
LLL: "D MMMM YYYY HH:mm",
LLLL: "dddd, D MMMM YYYY HH:mm"
},
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
},
week: {
dow: 1,
doy: 4
}
});
})(n(86));
},
149: function(t, e, n) {
"use strict";
n(270), e.login = n(278), n(279), e.Modal = n(193), e.resizeOnload = n(214), n(328), 
n(332), n(333), n(334), n(337), n(340), n(341), n(184).init(), n(342), n(343);
},
182: function(t, e, n) {
"use strict";
t.exports = {
lang: "en",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Github",
id: "github"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW",
automationGhGroup: "js-tasks-ru"
};
},
183: function(t, e, n) {
"use strict";
const r = new (n(256))("en"), i = n(182).lang;
let o = console.error;
function s() {
r.hasPhrase(i, arguments[0]) || o("No such phrase", arguments[0]);
let t = [ i ];
for (let e = 0; e < arguments.length; e++) t.push(arguments[e]);
return r.t.apply(r, t);
}
let a = {};
s.i18n = r, s.requirePhrase = function(t, e) {
a[t] && -1 != a[t].indexOf(e) || (a[t] || (a[t] = []), a[t].push(e), r.addPhrase(i, t, e));
}, t.exports = s;
},
184: function(t, e, n) {
"use strict";
Object.defineProperty(e, "__esModule", {
value: !0
});
var r, i = n(192);
e.init = function(t) {
r = new class {
constructor(t = {}) {
this.notifications = [], this.verticalSpace = t.verticalSpace || 8;
}
register(t) {
this.notifications.unshift(t), setTimeout(() => this.recalculate(), 20);
}
unregister(t) {
var e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
recalculate() {
var t = this.verticalSpace;
this.notifications.forEach(e => {
e.top = t, t += e.height + this.verticalSpace;
});
}
}(t);
};
class o {
constructor(t, e, n) {
var i = `<div class="notification notification_popup notification_${e}">\n    <div class="notification__content">${t}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", i), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
r.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 2500;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), r.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
}
i.delegateMixin(o.prototype);
e.Info = class extends o {
constructor(t, e) {
super(t, "info", e);
}
};
e.Warning = class extends o {
constructor(t, e) {
super(t, "warning", e);
}
};
e.Success = class extends o {
constructor(t, e) {
super(t, "success", e);
}
};
class s extends o {
constructor(t, e) {
super(t, "error", e);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
e.Error = s, e.Error = s;
},
188: function(t, e, n) {
"use strict";
function r(t) {
if (t = t || {}, this.elem = t.elem, this.size = t.size || "medium", this.class = t.class ? " " + t.class : "", 
this.elemClass = t.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
r.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, r.prototype.stop = function() {
var t = this.elem.querySelector(".spinner");
t && (t.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = r, t.exports = r;
},
192: function(t, e, n) {
"use strict";
function r(t, e, n, r, i) {
t.addEventListener(n, function(t) {
var n = function(t, e) {
for (var n = t.target; n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(i || this, t);
});
}
r.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
r(this.elem, t, e, n, this);
};
}, t.exports = r;
},
193: function(t, e, n) {
"use strict";
const r = n(183), i = n(182).lang;
function o(t) {
t = t || {}, this.render(), this.setHasClose(void 0 === t.hasClose || t.hasClose), 
this.onClick = this.onClick.bind(this), this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), 
this.elem.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onDocumentKeyDown);
}
r.requirePhrase("site", n(1)("./" + i + ".yml")), o.prototype.setHasClose = function(t) {
this._hasClose = t, this._hasClose ? this.elem.classList.add("modal__has-close") : this.elem.classList.remove("modal__has-close");
}, o.prototype.render = function() {
document.body.insertAdjacentHTML("beforeEnd", '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close" title="' + r("site.close") + '"></button><div class="modal__content"></div></div></div>'), 
document.body.classList.add("paranja-open"), this.elem = document.body.lastChild, 
this.contentElem = this.elem.querySelector(".modal__content");
}, o.prototype.onClick = function(t) {
t.target.classList.contains("modal__close") && (this.remove(), t.preventDefault());
}, o.prototype.onDocumentKeyDown = function(t) {
27 == t.keyCode && (t.preventDefault(), this.remove());
}, o.prototype.showOverlay = function() {
this.contentElem.classList.add("modal-overlay_light");
}, o.prototype.hideOverlay = function() {
this.contentElem.classList.remove("modal-overlay_light");
}, o.prototype.setContent = function(t) {
"string" == typeof t ? this.contentElem.innerHTML = t : (this.contentElem.innerHTML = "", 
this.contentElem.appendChild(t));
var e = this.contentElem.querySelector("[data-modal-autofocus],[autofocus]");
e && e.focus();
}, o.prototype.remove = function() {
document.body.classList.remove("paranja-open"), document.body.removeChild(this.elem), 
document.removeEventListener("keydown", this.onDocumentKeyDown), this.elem.dispatchEvent(new CustomEvent("modal-remove"));
}, t.exports = o;
},
196: function(t, e, n) {
"use strict";
const r = n(182).lang;
let i = n(86);
"ru" === r ? (n(83), i.updateLocale("ru", {
monthsShort: {
format: "янв_февр_мар_апр_мая_июня_июля_авг_сент_окт_нояб_дек".split("_"),
standalone: "янв_февр_март_апр_май_июнь_июль_авг_сент_окт_нояб_дек".split("_")
}
})) : n(143), t.exports = i;
},
214: function(t, e, n) {
"use strict";
var r = n(280), i = n(228), o = [];
e.iframe = function(t) {
r.async(t, function(e, n) {
n && (t.style.height = n + "px");
});
}, e.codeTabs = function(t) {
function e() {
var e = t.closest(".code-tabs"), n = (t.closest("[data-code-tabs-content]"), e.querySelector("[data-code-tabs-switches]"));
n.firstElementChild.offsetWidth > n.offsetWidth ? e.classList.add("code-tabs_scroll") : e.classList.remove("code-tabs_scroll");
}
e(), o.push(e);
}, window.addEventListener("resize", i(function() {
o.forEach(function(t) {
t();
});
}, 200));
},
226: function(t, e, n) {
"use strict";
t.exports = function(t) {
return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
Object.defineProperty(t, "loaded", {
enumerable: !0,
get: function() {
return t.l;
}
}), Object.defineProperty(t, "id", {
enumerable: !0,
get: function() {
return t.i;
}
}), t.webpackPolyfill = 1), t;
};
},
228: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
var n, r, i = !1;
return function o() {
if (i) return n = arguments, void (r = this);
t.apply(this, arguments), i = !0, setTimeout(function() {
i = !1, n && (o.apply(r, n), n = r = null);
}, e);
};
};
},
229: function(t, e, n) {
"use strict";
let r = new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts;
t.exports = function() {
if (r) return new Intl.DateTimeFormat([], {
timeZoneName: "short"
}).formatToParts(new Date()).find(t => "timeZoneName" == t.type).value;
let t = -new Date().getTimezoneOffset(), e = new Date().toLocaleTimeString([], {
timeZoneName: "short"
}).split(" ");
return e[0].match(/[+-]/) ? e = e[0] : e[e.length - 1].match(/[+-]/) ? e = e[e.length - 1] : e[e.length - 1].match(/[A-Z]{2,}/) ? e = e[e.length - 1] : (e = "GMT", 
t > 0 && (e += "+" + t / 60), t < 0 && (e += "-" + -t / 60)), e;
};
},
256: function(t, e, n) {
"use strict";
t.exports = n(257);
},
257: function(t, e, n) {
"use strict";
var r = n(258), i = n(259);
function o(t) {
return Object.prototype.toString.call(t);
}
function s(t) {
return "[object String]" === o(t);
}
function a(t) {
return !isNaN(t) && isFinite(t);
}
function c(t) {
return !0 === t || !1 === t;
}
function u(t) {
return "[object Object]" === o(t);
}
var l = Array.isArray || function(t) {
return "[object Array]" === o(t);
}, d = Array.prototype.forEach;
function h(t, e, n) {
if (null !== t) if (d && t.forEach === d) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, i = t.length; r < i; r += 1) e.call(n, t[r], r, t); else for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(n, t[o], o, t);
}
var f = /%[sdj%]/g;
function m(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(f, function(t) {
if ("%%" === t) return "%";
if (e >= r) return t;
switch (t) {
case "%s":
return String(n[e++]);

case "%d":
return Number(n[e++]);

case "%j":
return JSON.stringify(n[e++]);

default:
return t;
}
});
}
var p = "en";
function _(t) {
var e = {};
return h(t || {}, function(t, n) {
t && "object" == typeof t ? h(_(t), function(t, r) {
e[n + "." + r] = t;
}) : e[n] = t;
}), e;
}
var g = "#@$";
function y(t, e) {
return t + g + e;
}
function v(t, e, n) {
var r = y(e, n), i = t._storage;
if (i.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var o = t._fallbacks_cache;
if (o.hasOwnProperty(r)) return o[r];
for (var s, a = t._fallbacks[e] || [ t._defaultLocale ], c = 0, u = a.length; c < u; c++) if (s = y(a[c], n), 
i.hasOwnProperty(s)) return o[r] = s, o[r];
return o[r] = null, null;
}
function w(t, e, n) {
var r = i.indexOf(t, e);
return -1 === r ? m('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? m('[plural form %d ("%s") not found in translation]', r, i.forms(t)[r]) : n[r];
}
function b(t) {
if (!(this instanceof b)) return new b(t);
this._defaultLocale = t ? String(t) : p, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
b.prototype.addPhrase = function(t, e, n, r) {
var i, o = this;
if (c(r)) i = r ? 1 / 0 : 0; else if (a(r)) {
if ((i = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else i = 1 / 0;
if (u(n) && i > 0) return h(n, function(n, r) {
o.addPhrase(t, (e ? e + "." : "") + r, n, i - 1);
}), this;
if (s(n)) this._storage[y(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(l(n) || a(n) || c(n) || 0 === i && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[y(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return o._fallbacks_cache = {}, this;
}, b.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw new Error("Default locale can't have fallbacks");
var r = l(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var k = /#\{|\(\(|\\\\/;
b.prototype.translate = function(t, e, n) {
var i, c = v(this, t, e);
return c ? (i = this._storage[c]).raw ? i.translation : (i.hasOwnProperty("compiled") || (i.compiled = function(t, e, n) {
var i, o, s, a, c, u;
return k.test(e) ? 1 === (i = r.parse(e)).length && "literal" === i[0].type ? i[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new b(n)), 
u = t._plurals_cache[n], (o = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
o.push("params = flatten(params);"), h(i, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return s = t.anchor, void o.push(m('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', s, s, s));
if ("plural" !== t.type) throw new Error("Unknown node type");
s = t.anchor, a = {}, h(t.strict, function(e, i) {
var o = r.parse(e);
if (1 === o.length && "literal" === o[0].type) return a[i] = !1, void (t.strict[i] = o[0].text);
a[i] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), c = {}, h(t.forms, function(e, i) {
var o, s = r.parse(e);
if (1 === s.length && "literal" === s[0].type) return o = s[0].text, t.forms[i] = o, 
void (c[o] = !1);
c[e] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), o.push(m("loc = %j;", n)), o.push(m("loc_plzr = %j;", n.split(/[-_]/)[0])), 
o.push(m("anchor = params[%j];", s)), o.push(m("cache = this._plurals_cache[loc];")), 
o.push(m("strict = %j;", t.strict)), o.push(m("strict_exec = %j;", a)), o.push(m("forms = %j;", t.forms)), 
o.push(m("forms_exec = %j;", c)), o.push("if (+(anchor) != anchor) {"), o.push(m('  str += "[invalid plurals amount: %s(" + anchor + ")]";', s)), 
o.push("} else {"), o.push("  if (strict[anchor] !== undefined) {"), o.push("    plrl = strict[anchor];"), 
o.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), o.push("  } else {"), 
o.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), o.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
o.push("  }"), o.push("}");
} else o.push(m("str += %j;", t.text));
}), o.push("return str;"), new Function("params", "flatten", "pluralizer", o.join("\n"))) : e;
}(this, i.translation, i.locale)), "[object Function]" !== o(i.compiled) ? i.compiled : ((a(n) || s(n)) && (n = {
count: n,
value: n
}), i.compiled.call(this, n, _, w))) : t + ": No translation for [" + e + "]";
}, b.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(y(t, e)) : !!v(this, t, e);
}, b.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(y(t, e)) ? t : null;
var r = v(this, t, e);
return r ? r.split(g, 2)[0] : null;
}, b.prototype.t = b.prototype.translate, b.prototype.stringify = function(t) {
var e = this, n = {};
h(this._storage, function(t, e) {
n[e.split(g)[1]] = !0;
});
var r = {};
h(n, function(n, i) {
var o = v(e, t, i);
if (o) {
var s = e._storage[o].locale;
r[s] || (r[s] = {}), r[s][i] = e._storage[o].translation;
}
});
var i = {
fallback: {},
locales: r
}, o = (e._fallbacks[t] || []).slice(0, -1);
return o.length && (i.fallback[t] = o), JSON.stringify(i);
}, b.prototype.load = function(t) {
var e = this;
return s(t) && (t = JSON.parse(t)), h(t.locales, function(t, n) {
h(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), h(t.fallback, function(t, n) {
e.setFallback(n, t);
}), this;
}, t.exports = b;
},
258: function(t, e, n) {
"use strict";
t.exports = function() {
function t(t, e, n, r, i, o) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = i, 
this.column = o, this.name = "SyntaxError";
}
return function(t, e) {
function n() {
this.constructor = t;
}
n.prototype = e.prototype, t.prototype = new n();
}(t, Error), {
SyntaxError: t,
parse: function(e) {
var n, r = arguments.length > 1 ? arguments[1] : {}, i = {}, o = {
start: lt
}, s = lt, a = i, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", d = {
type: "literal",
value: "))",
description: '"))"'
}, h = null, f = function(t, e) {
return {
type: "plural",
forms: function(t) {
for (var e = [], n = 0; n < t.length; n++) void 0 === t[n].strict && e.push(t[n].text);
return e;
}(t),
strict: function(t) {
for (var e = {}, n = 0; n < t.length; n++) void 0 !== t[n].strict && (e[t[n].strict] = t[n].text);
return e;
}(t),
anchor: e || "count"
};
}, m = "|", p = {
type: "literal",
value: "|",
description: '"|"'
}, _ = function(t, e) {
return [ t ].concat(e);
}, g = function(t) {
return [ t ];
}, y = "=", v = {
type: "literal",
value: "=",
description: '"="'
}, w = /^[0-9]/, b = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, k = " ", S = {
type: "literal",
value: " ",
description: '" "'
}, M = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, D = function() {
return {
text: st()
};
}, E = "\\", T = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, C = /^[\\|)(]/, x = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, Y = function(t) {
return t;
}, O = void 0, L = {
type: "any",
description: "any character"
}, F = function() {
return st();
}, A = ":", P = {
type: "literal",
value: ":",
description: '":"'
}, N = function(t) {
return t;
}, j = "#{", H = {
type: "literal",
value: "#{",
description: '"#{"'
}, W = "}", R = {
type: "literal",
value: "}",
description: '"}"'
}, U = function(t) {
return {
type: "variable",
anchor: t
};
}, z = ".", I = {
type: "literal",
value: ".",
description: '"."'
}, G = function() {
return st();
}, q = /^[a-zA-Z_$]/, V = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, Z = /^[a-zA-Z0-9_$]/, $ = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, B = function(t) {
return t;
}, J = function(t) {
return {
type: "literal",
text: t.join("")
};
}, K = /^[\\#()|]/, X = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, it = [], ot = 0;
if ("startRule" in r) {
if (!(r.startRule in o)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
s = o[r.startRule];
}
function st() {
return e.substring(tt, Q);
}
function at(t) {
return et !== t && (et > t && (et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}), function(t, n, r) {
var i, o;
for (i = n; i < r; i++) "\n" === (o = e.charAt(i)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}(nt, et, t), et = t), nt;
}
function ct(t) {
Q < rt || (Q > rt && (rt = Q, it = []), it.push(t));
}
function ut(n, r, i) {
var o = at(i), s = i < e.length ? e.charAt(i) : null;
return null !== r && function(t) {
var e = 1;
for (t.sort(function(t, e) {
return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
}); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
}(r), new t(null !== n ? n : function(t, e) {
var n, r = new Array(t.length);
for (n = 0; n < t.length; n++) r[n] = t[n].description;
return "Expected " + (t.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[t.length - 1] : r[0]) + " but " + (e ? '"' + function(t) {
function e(t) {
return t.charCodeAt(0).toString(16).toUpperCase();
}
return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
return "\\x0" + e(t);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
return "\\x" + e(t);
}).replace(/[\u0180-\u0FFF]/g, function(t) {
return "\\u0" + e(t);
}).replace(/[\u1080-\uFFFF]/g, function(t) {
return "\\u" + e(t);
});
}(e) + '"' : "end of input") + " found.";
}(r, s), r, s, i, o.line, o.column);
}
function lt() {
var t, e;
for (t = [], (e = gt()) === i && (e = dt()) === i && (e = mt()); e !== i; ) t.push(e), 
(e = gt()) === i && (e = dt()) === i && (e = mt());
return t;
}
function dt() {
var t, n, r, o, s;
return t = Q, e.substr(Q, 2) === c ? (n = c, Q += 2) : (n = i, 0 === ot && ct(u)), 
n !== i && (r = function t() {
var n, r, o, s;
return n = Q, (r = ht()) !== i ? (124 === e.charCodeAt(Q) ? (o = m, Q++) : (o = i, 
0 === ot && ct(p)), o !== i && (s = t()) !== i ? (tt = n, r = _(r, s), n = r) : (Q = n, 
n = a)) : (Q = n, n = a), n === i && (n = Q, (r = ht()) !== i && (tt = n, r = g(r)), 
n = r), n;
}()) !== i ? (e.substr(Q, 2) === l ? (o = l, Q += 2) : (o = i, 0 === ot && ct(d)), 
o !== i ? ((s = function() {
var t, n, r;
return t = Q, 58 === e.charCodeAt(Q) ? (n = A, Q++) : (n = i, 0 === ot && ct(P)), 
n !== i && (r = pt()) !== i ? (tt = t, n = N(r), t = n) : (Q = t, t = a), t;
}()) === i && (s = h), s !== i ? (tt = t, t = n = f(r, s)) : (Q = t, t = a)) : (Q = t, 
t = a)) : (Q = t, t = a), t;
}
function ht() {
var t, n, r, o, s, c;
if (t = Q, 61 === e.charCodeAt(Q) ? (n = y, Q++) : (n = i, 0 === ot && ct(v)), n !== i) {
if (r = [], w.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 0 === ot && ct(b)), 
o !== i) for (;o !== i; ) r.push(o), w.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 
0 === ot && ct(b)); else r = a;
if (r !== i) if (32 === e.charCodeAt(Q) ? (o = k, Q++) : (o = i, 0 === ot && ct(S)), 
o === i && (o = h), o !== i) {
if (s = [], (c = ft()) !== i) for (;c !== i; ) s.push(c), c = ft(); else s = a;
s !== i ? (tt = t, t = n = M(r, s)) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
} else Q = t, t = a;
if (t === i) {
if (t = Q, n = [], (r = ft()) !== i) for (;r !== i; ) n.push(r), r = ft(); else n = a;
n !== i && (tt = t, n = D()), t = n;
}
return t;
}
function ft() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = E, Q++) : (n = i, 0 === ot && ct(T)), 
n !== i ? (C.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = i, 0 === ot && ct(x)), 
r !== i ? (tt = t, t = n = Y(r)) : (Q = t, t = a)) : (Q = t, t = a), t === i && (t = Q, 
n = Q, ot++, 124 === e.charCodeAt(Q) ? (r = m, Q++) : (r = i, 0 === ot && ct(p)), 
r === i && (e.substr(Q, 2) === l ? (r = l, Q += 2) : (r = i, 0 === ot && ct(d))), 
ot--, r === i ? n = O : (Q = n, n = a), n !== i ? (e.length > Q ? (r = e.charAt(Q), 
Q++) : (r = i, 0 === ot && ct(L)), r !== i ? (tt = t, t = n = F()) : (Q = t, t = a)) : (Q = t, 
t = a)), t;
}
function mt() {
var t, n, r, o;
return t = Q, e.substr(Q, 2) === j ? (n = j, Q += 2) : (n = i, 0 === ot && ct(H)), 
n !== i && (r = pt()) !== i ? (125 === e.charCodeAt(Q) ? (o = W, Q++) : (o = i, 
0 === ot && ct(R)), o !== i ? (tt = t, t = n = U(r)) : (Q = t, t = a)) : (Q = t, 
t = a), t;
}
function pt() {
var t, n, r, o;
if (t = Q, _t() !== i) if (46 === e.charCodeAt(Q) ? (n = z, Q++) : (n = i, 0 === ot && ct(I)), 
n !== i) {
if (r = [], (o = pt()) !== i) for (;o !== i; ) r.push(o), o = pt(); else r = a;
r !== i ? (tt = t, t = G()) : (Q = t, t = a);
} else Q = t, t = a; else Q = t, t = a;
return t === i && (t = _t()), t;
}
function _t() {
var t, n, r, o;
if (t = Q, q.test(e.charAt(Q)) ? (n = e.charAt(Q), Q++) : (n = i, 0 === ot && ct(V)), 
n !== i) {
for (r = [], Z.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 0 === ot && ct($)); o !== i; ) r.push(o), 
Z.test(e.charAt(Q)) ? (o = e.charAt(Q), Q++) : (o = i, 0 === ot && ct($));
r !== i ? (tt = t, t = n = F()) : (Q = t, t = a);
} else Q = t, t = a;
return t;
}
function gt() {
var t, e, n, r, o;
if (t = Q, e = [], n = Q, r = Q, ot++, (o = dt()) === i && (o = mt()), ot--, o === i ? r = O : (Q = r, 
r = a), r !== i && (o = yt()) !== i ? (tt = n, n = r = B(o)) : (Q = n, n = a), n !== i) for (;n !== i; ) e.push(n), 
n = Q, r = Q, ot++, (o = dt()) === i && (o = mt()), ot--, o === i ? r = O : (Q = r, 
r = a), r !== i && (o = yt()) !== i ? (tt = n, n = r = B(o)) : (Q = n, n = a); else e = a;
return e !== i && (tt = t, e = J(e)), t = e;
}
function yt() {
var t, n, r;
return t = Q, 92 === e.charCodeAt(Q) ? (n = E, Q++) : (n = i, 0 === ot && ct(T)), 
n !== i ? (K.test(e.charAt(Q)) ? (r = e.charAt(Q), Q++) : (r = i, 0 === ot && ct(X)), 
r !== i ? (tt = t, t = n = Y(r)) : (Q = t, t = a)) : (Q = t, t = a), t === i && (e.length > Q ? (t = e.charAt(Q), 
Q++) : (t = i, 0 === ot && ct(L))), t;
}
if ((n = s()) !== i && Q === e.length) return n;
throw n !== i && Q < e.length && ct({
type: "end",
description: "end of input"
}), ut(null, it, rt);
}
};
}();
},
259: function(t, e, n) {
"use strict";
var r = {};
function i(t) {
var e;
return r[t] ? t : (e = t.toLowerCase().replace("_", "-"), r[e] ? e : (e = e.split("-")[0], 
r[e] ? e : null));
}
function o(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].cFn) return 0;
var o = String(e), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, c = +e, u = +o.split(".")[0], l = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].cFn(c, u, a, +s, l);
}
function s(t, e) {
var n = i(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var o = String(e), s = o.indexOf(".") < 0 ? "" : o.split(".")[1], a = s.length, c = +e, u = +o.split(".")[0], l = 0 === s.length ? 0 : +s.replace(/0+$/, "");
return r[n].oFn(c, u, a, +s, l);
}
t.exports = function(t, e) {
var n = i(t);
return n ? r[n].c[o(n, e)] : null;
}, t.exports.indexOf = o, t.exports.forms = function(t) {
var e = i(t);
return r[e] ? r[e].c : null;
}, t.exports.ordinal = function(t, e) {
var n = i(t);
return r[n] ? r[n].o[s(n, e)] : null;
}, t.exports.ordinal.indexOf = s, t.exports.ordinal.forms = function(t) {
var e = i(t);
return r[e] ? r[e].o : null;
};
var a = [ "zero", "one", "two", "few", "many", "other" ];
function c(t) {
return a[t];
}
function u(t, e) {
var n;
for (e.c = e.c ? e.c.map(c) : [ "other" ], e.o = e.o ? e.o.map(c) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function l(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function d(t, e) {
return t.indexOf(e) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : l(3, 10, e) ? 3 : l(11, 99, e) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return d([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, i = e % 1e3;
return d([ 1, 2, 5, 7, 8 ], n) || d([ 20, 50, 70, 80 ], r) ? 0 : d([ 3, 4 ], n) || d([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], i) ? 1 : 0 === e || 6 === n || d([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : l(2, 4, e) && !l(12, 14, n) ? 1 : 0 === e || l(5, 9, e) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return d([ 2, 3 ], t % 10) && !d([ 12, 13 ], e) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || d([ 11, 71, 91 ], n) ? 2 !== e || d([ 12, 72, 92 ], n) ? !l(3, 4, e) && 9 !== e || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, o = e % 100, s = r % 10, a = r % 100;
return 0 === n && 1 === i && 11 !== o || 1 === s && 11 !== a ? 0 : 0 === n && l(2, 4, i) && !l(12, 14, o) || l(2, 4, s) && !l(12, 14, a) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return d([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : l(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return d([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : d([ 3, 4 ], t) ? 3 : d([ 5, 6 ], t) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 1 === t || 0 !== i && d([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var i = e % 100, o = r % 100;
return 0 === n && 1 === i || 1 === o ? 0 : 0 === n && 2 === i || 2 === o ? 1 : 0 === n && l(3, 4, i) || l(3, 4, o) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return d([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var i = e % 10, o = r % 10;
return 0 === n && d([ 1, 2, 3 ], e) || 0 === n && !d([ 4, 6, 9 ], i) || 0 !== n && !d([ 4, 6, 9 ], o) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return d([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : l(3, 6, t) ? 2 : l(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return d([ 1, 11 ], t) ? 0 : d([ 2, 12 ], t) ? 1 : l(3, 10, t) || l(13, 19, t) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && d([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || l(0, 10, t) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return d([ 1, 5 ], t) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, i) {
return 0 === i && 1 === e % 10 && 11 !== e % 100 || 0 !== i ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return d([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : d([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, o = t % 100;
return 1 !== i || l(11, 19, o) ? l(2, 9, i) && !l(11, 19, o) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var i = t % 10, o = t % 100, s = r % 100, a = r % 10;
return 0 === i || l(11, 19, o) || 2 === n && l(11, 19, s) ? 0 : 1 === i && 11 !== o || 2 === n && 1 === a && 11 !== s || 2 !== n && 1 === a ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : d([ 7, 8 ], n) && !d([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && l(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : d([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 10, e) ? 1 : l(11, 19, e) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return l(1, 4, t) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 1 !== e && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, i) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 2, t) && 2 !== t ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, i) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : l(2, 10, t) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return d([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return d([ 1, 2 ], t % 10) && !d([ 11, 12 ], e) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) || l(11, 99, t) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, i = e % 100;
return 0 === n && 1 === r && 11 !== i ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, i) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, i) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
return 3 === t % 10 && 13 !== t % 100 ? 0 : 1;
}
});
},
270: function(t, e, n) {
"use strict";
n(271), n(277);
},
271: function(t, e, n) {
"use strict";
function r(t) {
if (t.length) {
if (1 === t.length) return "string" == typeof t[0] ? document.createTextNode(t[0]) : t[0];
for (var e, n = document.createDocumentFragment(), r = t.length, i = -1; ++i < r; ) e = t[i], 
n.appendChild("string" == typeof e ? document.createTextNode(e) : e);
return n;
}
throw new Error("DOM Exception 8");
}
var i = {
matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
replace() {
this.parentNode && this.parentNode.replaceChild(r(arguments), this);
},
prepend() {
this.insertBefore(r(arguments), this.firstChild);
},
append() {
this.appendChild(r(arguments));
},
remove() {
var t = this.parentNode;
if (t) return t.removeChild(this);
},
before: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this);
},
after: function() {
this.parentNode && this.parentNode.insertBefore(r(arguments), this.nextSibling);
},
closest: function(t) {
for (var e = this; e; ) {
if (e.matches && e.matches(t)) return e;
e = e.parentElement;
}
return null;
}
};
for (var o in i) Element.prototype[o] || (Element.prototype[o] = i[o]);
n(272), n(273), n(274), n(275), n(276);
},
272: function(t, e, n) {
"use strict";
try {
new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (t) {
window.CustomEvent = function(t, e) {
var n;
return e = e || {
bubbles: !1,
cancelable: !1,
detail: void 0
}, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), 
n;
}, CustomEvent.prototype = Object.create(window.Event.prototype);
}
},
273: function(t, e, n) {
"use strict";
if (!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
var r = {
enumerable: !0,
get: function() {
var t, e, n, r, i, o, s = this.attributes, a = s.length, c = function(t) {
return t.charAt(1).toUpperCase();
}, u = function() {
return this;
}, l = function(t, e) {
return void 0 !== e ? this.setAttribute(t, e) : this.removeAttribute(t);
};
try {
({}).__defineGetter__("test", function() {}), e = {};
} catch (t) {
e = document.createElement("div");
}
for (t = 0; t < a; t++) if ((o = s[t]) && o.name && /^data-\w[\w\-]*$/.test(o.name)) {
n = o.value, i = (r = o.name).substr(5).replace(/-./g, c);
try {
Object.defineProperty(e, i, {
enumerable: this.enumerable,
get: u.bind(n || ""),
set: l.bind(this, r)
});
} catch (t) {
e[i] = n;
}
}
return e;
}
};
try {
Object.defineProperty(Element.prototype, "dataset", r);
} catch (t) {
r.enumerable = !1, Object.defineProperty(Element.prototype, "dataset", r);
}
}
},
274: function(t, e, n) {
"use strict";
void 0 === document.documentElement.hidden && (document.head.insertAdjacentHTML("beforeEnd", "<style> [hidden] { display: none } </style>"), 
Object.defineProperty(Element.prototype, "hidden", {
set: function(t) {
this.setAttribute("hidden", t);
},
get: function() {
return this.getAttribute("hidden");
}
}));
},
275: function(t, e, n) {
"use strict";
var r;
r = 0, window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
var n = new Date().getTime(), i = Math.max(0, 16 - (n - r)), o = window.setTimeout(function() {
t(n + i);
}, i);
return r = n + i, o;
}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
clearTimeout(t);
});
},
276: function(t, e, n) {
"use strict";
(function() {
var t = new function() {}(), e = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
function n(t) {
var n = e.has(t);
return t = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t), !n && t;
}
function r(t) {
var e = t.isConnected;
if (void 0 !== e) return e;
for (;t && !(t.__CE_isImportDocument || t instanceof Document); ) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
return !(!t || !(t.__CE_isImportDocument || t instanceof Document));
}
function i(t, e) {
for (;e && e !== t && !e.nextSibling; ) e = e.parentNode;
return e && e !== t ? e.nextSibling : null;
}
function o(t, e, n) {
n = n || new Set();
for (var r = t; r; ) {
if (r.nodeType === Node.ELEMENT_NODE) {
var s = r;
e(s);
var a = s.localName;
if ("link" === a && "import" === s.getAttribute("rel")) {
if ((r = s.import) instanceof Node && !n.has(r)) for (n.add(r), r = r.firstChild; r; r = r.nextSibling) o(r, e, n);
r = i(t, s);
continue;
}
if ("template" === a) {
r = i(t, s);
continue;
}
if (s = s.__CE_shadowRoot) for (s = s.firstChild; s; s = s.nextSibling) o(s, e, n);
}
r = r.firstChild ? r.firstChild : i(t, r);
}
}
function s(t, e, n) {
t[e] = n;
}
function a() {
this.a = new Map(), this.s = new Map(), this.f = [], this.b = !1;
}
function c(t, e) {
t.b = !0, t.f.push(e);
}
function u(t, e) {
t.b && o(e, function(e) {
return l(t, e);
});
}
function l(t, e) {
if (t.b && !e.__CE_patched) {
e.__CE_patched = !0;
for (var n = 0; n < t.f.length; n++) t.f[n](e);
}
}
function d(t, e) {
var n = [];
for (o(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state ? t.connectedCallback(r) : m(t, r);
}
}
function h(t, e) {
var n = [];
for (o(e, function(t) {
return n.push(t);
}), e = 0; e < n.length; e++) {
var r = n[e];
1 === r.__CE_state && t.disconnectedCallback(r);
}
}
function f(t, e, n) {
var r = (n = n || {}).w || new Set(), i = n.i || function(e) {
return m(t, e);
}, s = [];
if (o(e, function(e) {
if ("link" === e.localName && "import" === e.getAttribute("rel")) {
var n = e.import;
n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function() {
var n = e.import;
if (!n.__CE_documentLoadHandled) {
n.__CE_documentLoadHandled = !0;
var o = new Set(r);
o.delete(n), f(t, n, {
w: o,
i
});
}
});
} else s.push(e);
}, r), t.b) for (e = 0; e < s.length; e++) l(t, s[e]);
for (e = 0; e < s.length; e++) i(s[e]);
}
function m(t, e) {
if (void 0 === e.__CE_state) {
var n = e.ownerDocument;
if ((n.defaultView || n.__CE_isImportDocument && n.__CE_hasRegistry) && (n = t.a.get(e.localName))) {
n.constructionStack.push(e);
var i = n.constructor;
try {
try {
if (new i() !== e) throw Error("The custom element constructor did not produce the element being upgraded.");
} finally {
n.constructionStack.pop();
}
} catch (t) {
throw e.__CE_state = 2, t;
}
if (e.__CE_state = 1, e.__CE_definition = n, n.attributeChangedCallback) for (n = n.observedAttributes, 
i = 0; i < n.length; i++) {
var o = n[i], s = e.getAttribute(o);
null !== s && t.attributeChangedCallback(e, o, null, s, null);
}
r(e) && t.connectedCallback(e);
}
}
}
function p(t, e) {
this.c = t, this.a = e, this.b = void 0, f(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), 
this.b.observe(this.a, {
childList: !0,
subtree: !0
}));
}
function _(t) {
t.b && t.b.disconnect();
}
function g(t) {
if (t.a) throw Error("Already resolved.");
t.a = void 0, t.b && t.b(void 0);
}
function y(t) {
this.j = !1, this.c = t, this.o = new Map(), this.l = function(t) {
return t();
}, this.g = !1, this.m = [], this.u = new p(t, document);
}
a.prototype.connectedCallback = function(t) {
var e = t.__CE_definition;
e.connectedCallback && e.connectedCallback.call(t);
}, a.prototype.disconnectedCallback = function(t) {
var e = t.__CE_definition;
e.disconnectedCallback && e.disconnectedCallback.call(t);
}, a.prototype.attributeChangedCallback = function(t, e, n, r, i) {
var o = t.__CE_definition;
o.attributeChangedCallback && -1 < o.observedAttributes.indexOf(e) && o.attributeChangedCallback.call(t, e, n, r, i);
}, p.prototype.f = function(t) {
var e = this.a.readyState;
for ("interactive" !== e && "complete" !== e || _(this), e = 0; e < t.length; e++) for (var n = t[e].addedNodes, r = 0; r < n.length; r++) f(this.c, n[r]);
}, y.prototype.define = function(t, e) {
var r, i, o, s, a, c = this;
if (!(e instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
if (!n(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
if (this.c.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
if (this.j) throw Error("A custom element is already being defined.");
this.j = !0;
try {
var u = function(t) {
var e = l[t];
if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
return e;
}, l = e.prototype;
if (!(l instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
r = u("connectedCallback"), i = u("disconnectedCallback"), o = u("adoptedCallback"), 
s = u("attributeChangedCallback"), a = e.observedAttributes || [];
} catch (t) {
return;
} finally {
this.j = !1;
}
e = {
localName: t,
constructor: e,
connectedCallback: r,
disconnectedCallback: i,
adoptedCallback: o,
attributeChangedCallback: s,
observedAttributes: a,
constructionStack: []
}, function(t, e, n) {
t.a.set(e, n), t.s.set(n.constructor, n);
}(this.c, t, e), this.m.push(e), this.g || (this.g = !0, this.l(function() {
return function(t) {
if (!1 !== t.g) {
t.g = !1;
for (var e = t.m, n = [], r = new Map(), i = 0; i < e.length; i++) r.set(e[i].localName, []);
for (f(t.c, document, {
i: function(e) {
if (void 0 === e.__CE_state) {
var i = e.localName, o = r.get(i);
o ? o.push(e) : t.c.a.get(i) && n.push(e);
}
}
}), i = 0; i < n.length; i++) m(t.c, n[i]);
for (;0 < e.length; ) {
for (var o = e.shift(), i = o.localName, o = r.get(o.localName), s = 0; s < o.length; s++) m(t.c, o[s]);
(i = t.o.get(i)) && g(i);
}
}
}(c);
}));
}, y.prototype.i = function(t) {
f(this.c, t);
}, y.prototype.get = function(t) {
if (t = this.c.a.get(t)) return t.constructor;
}, y.prototype.whenDefined = function(t) {
if (!n(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
var e = this.o.get(t);
return e ? e.f : (e = new function() {
var t = this;
this.b = this.a = void 0, this.f = new Promise(function(e) {
t.b = e, t.a && e(t.a);
});
}(), this.o.set(t, e), this.c.a.get(t) && !this.m.some(function(e) {
return e.localName === t;
}) && g(e), e.f);
}, y.prototype.v = function(t) {
_(this.u);
var e = this.l;
this.l = function(n) {
return t(function() {
return e(n);
});
};
}, window.CustomElementRegistry = y, y.prototype.define = y.prototype.define, y.prototype.upgrade = y.prototype.i, 
y.prototype.get = y.prototype.get, y.prototype.whenDefined = y.prototype.whenDefined, 
y.prototype.polyfillWrapFlushCallback = y.prototype.v;
var v = window.Document.prototype.createElement, w = window.Document.prototype.createElementNS, b = window.Document.prototype.importNode, k = window.Document.prototype.prepend, S = window.Document.prototype.append, M = window.DocumentFragment.prototype.prepend, D = window.DocumentFragment.prototype.append, E = window.Node.prototype.cloneNode, T = window.Node.prototype.appendChild, C = window.Node.prototype.insertBefore, x = window.Node.prototype.removeChild, Y = window.Node.prototype.replaceChild, O = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), L = window.Element.prototype.attachShadow, F = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), A = window.Element.prototype.getAttribute, P = window.Element.prototype.setAttribute, N = window.Element.prototype.removeAttribute, j = window.Element.prototype.getAttributeNS, H = window.Element.prototype.setAttributeNS, W = window.Element.prototype.removeAttributeNS, R = window.Element.prototype.insertAdjacentElement, U = window.Element.prototype.insertAdjacentHTML, z = window.Element.prototype.prepend, I = window.Element.prototype.append, G = window.Element.prototype.before, q = window.Element.prototype.after, V = window.Element.prototype.replaceWith, Z = window.Element.prototype.remove, $ = window.HTMLElement, B = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), J = window.HTMLElement.prototype.insertAdjacentElement, K = window.HTMLElement.prototype.insertAdjacentHTML;
function X(t, e, n) {
function i(e) {
return function(n) {
for (var i = [], o = 0; o < arguments.length; ++o) i[o - 0] = arguments[o];
o = [];
for (var s = [], a = 0; a < i.length; a++) {
var c = i[a];
if (c instanceof Element && r(c) && s.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) o.push(c); else o.push(c);
}
for (e.apply(this, i), i = 0; i < s.length; i++) h(t, s[i]);
if (r(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && d(t, s);
};
}
n.h && (e.prepend = i(n.h)), n.append && (e.append = i(n.append));
}
var Q, tt = window.customElements;
if (!tt || tt.forcePolyfill || "function" != typeof tt.define || "function" != typeof tt.get) {
var et = new a();
Q = et, window.HTMLElement = function() {
function e() {
var e = this.constructor;
if (!(r = Q.s.get(e))) throw Error("The custom element being constructed was not registered with `customElements`.");
var n = r.constructionStack;
if (!n.length) return n = v.call(document, r.localName), Object.setPrototypeOf(n, e.prototype), 
n.__CE_state = 1, n.__CE_definition = r, l(Q, n), n;
var r, i = n[r = n.length - 1];
if (i === t) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
return n[r] = t, Object.setPrototypeOf(i, e.prototype), l(Q, i), i;
}
return e.prototype = $.prototype, Object.defineProperty(e.prototype, "constructor", {
writable: !0,
configurable: !0,
enumerable: !1,
value: e
}), e;
}(), function() {
var t = et;
s(Document.prototype, "createElement", function(e) {
if (this.__CE_hasRegistry) {
var n = t.a.get(e);
if (n) return new n.constructor();
}
return e = v.call(this, e), l(t, e), e;
}), s(Document.prototype, "importNode", function(e, n) {
return e = b.call(this, e, n), this.__CE_hasRegistry ? f(t, e) : u(t, e), e;
}), s(Document.prototype, "createElementNS", function(e, n) {
if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
var r = t.a.get(n);
if (r) return new r.constructor();
}
return e = w.call(this, e, n), l(t, e), e;
}), X(t, Document.prototype, {
h: k,
append: S
});
}(), X(et, DocumentFragment.prototype, {
h: M,
append: D
}), function() {
var t = et;
function e(e, n) {
Object.defineProperty(e, "textContent", {
enumerable: n.enumerable,
configurable: !0,
get: n.get,
set: function(e) {
if (this.nodeType === Node.TEXT_NODE) n.set.call(this, e); else {
var i = void 0;
if (this.firstChild) {
var o = this.childNodes, s = o.length;
if (0 < s && r(this)) {
i = Array(s);
for (var a = 0; a < s; a++) i[a] = o[a];
}
}
if (n.set.call(this, e), i) for (e = 0; e < i.length; e++) h(t, i[e]);
}
}
});
}
s(Node.prototype, "insertBefore", function(e, n) {
if (e instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(e.childNodes);
if (e = C.call(this, e, n), r(this)) for (n = 0; n < i.length; n++) d(t, i[n]);
return e;
}
return i = r(e), n = C.call(this, e, n), i && h(t, e), r(this) && d(t, e), n;
}), s(Node.prototype, "appendChild", function(e) {
if (e instanceof DocumentFragment) {
var n = Array.prototype.slice.apply(e.childNodes);
if (e = T.call(this, e), r(this)) for (var i = 0; i < n.length; i++) d(t, n[i]);
return e;
}
return n = r(e), i = T.call(this, e), n && h(t, e), r(this) && d(t, e), i;
}), s(Node.prototype, "cloneNode", function(e) {
return e = E.call(this, e), this.ownerDocument.__CE_hasRegistry ? f(t, e) : u(t, e), 
e;
}), s(Node.prototype, "removeChild", function(e) {
var n = r(e), i = x.call(this, e);
return n && h(t, e), i;
}), s(Node.prototype, "replaceChild", function(e, n) {
if (e instanceof DocumentFragment) {
var i = Array.prototype.slice.apply(e.childNodes);
if (e = Y.call(this, e, n), r(this)) for (h(t, n), n = 0; n < i.length; n++) d(t, i[n]);
return e;
}
i = r(e);
var o = Y.call(this, e, n), s = r(this);
return s && h(t, n), i && h(t, e), s && d(t, e), o;
}), O && O.get ? e(Node.prototype, O) : c(t, function(t) {
e(t, {
enumerable: !0,
configurable: !0,
get: function() {
for (var t = [], e = 0; e < this.childNodes.length; e++) t.push(this.childNodes[e].textContent);
return t.join("");
},
set: function(t) {
for (;this.firstChild; ) x.call(this, this.firstChild);
T.call(this, document.createTextNode(t));
}
});
});
}(), function() {
var t = et;
function e(e, n) {
Object.defineProperty(e, "innerHTML", {
enumerable: n.enumerable,
configurable: !0,
get: n.get,
set: function(e) {
var i = this, s = void 0;
if (r(this) && (s = [], o(this, function(t) {
t !== i && s.push(t);
})), n.set.call(this, e), s) for (var a = 0; a < s.length; a++) {
var c = s[a];
1 === c.__CE_state && t.disconnectedCallback(c);
}
return this.ownerDocument.__CE_hasRegistry ? f(t, this) : u(t, this), e;
}
});
}
function n(e, n) {
s(e, "insertAdjacentElement", function(e, i) {
var o = r(i);
return e = n.call(this, e, i), o && h(t, i), r(e) && d(t, i), e;
});
}
function i(e, n) {
function r(e, n) {
for (var r = []; e !== n; e = e.nextSibling) r.push(e);
for (n = 0; n < r.length; n++) f(t, r[n]);
}
s(e, "insertAdjacentHTML", function(t, e) {
if ("beforebegin" === (t = t.toLowerCase())) {
var i = this.previousSibling;
n.call(this, t, e), r(i || this.parentNode.firstChild, this);
} else if ("afterbegin" === t) i = this.firstChild, n.call(this, t, e), r(this.firstChild, i); else if ("beforeend" === t) i = this.lastChild, 
n.call(this, t, e), r(i || this.firstChild, null); else {
if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
i = this.nextSibling, n.call(this, t, e), r(this.nextSibling, i);
}
});
}
L && s(Element.prototype, "attachShadow", function(t) {
return this.__CE_shadowRoot = L.call(this, t);
}), F && F.get ? e(Element.prototype, F) : B && B.get ? e(HTMLElement.prototype, B) : c(t, function(t) {
e(t, {
enumerable: !0,
configurable: !0,
get: function() {
return E.call(this, !0).innerHTML;
},
set: function(t) {
var e = "template" === this.localName, n = e ? this.content : this, r = w.call(document, this.namespaceURI, this.localName);
for (r.innerHTML = t; 0 < n.childNodes.length; ) x.call(n, n.childNodes[0]);
for (t = e ? r.content : r; 0 < t.childNodes.length; ) T.call(n, t.childNodes[0]);
}
});
}), s(Element.prototype, "setAttribute", function(e, n) {
if (1 !== this.__CE_state) return P.call(this, e, n);
var r = A.call(this, e);
P.call(this, e, n), n = A.call(this, e), t.attributeChangedCallback(this, e, r, n, null);
}), s(Element.prototype, "setAttributeNS", function(e, n, r) {
if (1 !== this.__CE_state) return H.call(this, e, n, r);
var i = j.call(this, e, n);
H.call(this, e, n, r), r = j.call(this, e, n), t.attributeChangedCallback(this, n, i, r, e);
}), s(Element.prototype, "removeAttribute", function(e) {
if (1 !== this.__CE_state) return N.call(this, e);
var n = A.call(this, e);
N.call(this, e), null !== n && t.attributeChangedCallback(this, e, n, null, null);
}), s(Element.prototype, "removeAttributeNS", function(e, n) {
if (1 !== this.__CE_state) return W.call(this, e, n);
var r = j.call(this, e, n);
W.call(this, e, n);
var i = j.call(this, e, n);
r !== i && t.attributeChangedCallback(this, n, r, i, e);
}), J ? n(HTMLElement.prototype, J) : R && n(Element.prototype, R), K ? i(HTMLElement.prototype, K) : U && i(Element.prototype, U), 
X(t, Element.prototype, {
h: z,
append: I
}), function(t) {
var e = Element.prototype;
function n(e) {
return function(n) {
for (var i = [], o = 0; o < arguments.length; ++o) i[o - 0] = arguments[o];
o = [];
for (var s = [], a = 0; a < i.length; a++) {
var c = i[a];
if (c instanceof Element && r(c) && s.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) o.push(c); else o.push(c);
}
for (e.apply(this, i), i = 0; i < s.length; i++) h(t, s[i]);
if (r(this)) for (i = 0; i < o.length; i++) (s = o[i]) instanceof Element && d(t, s);
};
}
G && (e.before = n(G)), G && (e.after = n(q)), V && s(e, "replaceWith", function(e) {
for (var n = [], i = 0; i < arguments.length; ++i) n[i - 0] = arguments[i];
i = [];
for (var o = [], s = 0; s < n.length; s++) {
var a = n[s];
if (a instanceof Element && r(a) && o.push(a), a instanceof DocumentFragment) for (a = a.firstChild; a; a = a.nextSibling) i.push(a); else i.push(a);
}
for (s = r(this), V.apply(this, n), n = 0; n < o.length; n++) h(t, o[n]);
if (s) for (h(t, this), n = 0; n < i.length; n++) (o = i[n]) instanceof Element && d(t, o);
}), Z && s(e, "remove", function() {
var e = r(this);
Z.call(this), e && h(t, this);
});
}(t);
}(), document.__CE_hasRegistry = !0;
var nt = new y(et);
Object.defineProperty(window, "customElements", {
configurable: !0,
enumerable: !0,
value: nt
});
}
}).call(self);
},
277: function(t, e, n) {
"use strict";
String.prototype.startsWith || (String.prototype.startsWith = function(t) {
var e = arguments.length < 2 ? 0 : arguments[1];
return 0 === this.slice(e).indexOf(t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(t) {
var e = arguments.length < 2 ? this.length : arguments[1], n = this.lastIndexOf(t);
return -1 !== n && n === e - t.length;
}), String.prototype.includes || (String.prototype.includes = function(t, e) {
if ("object" == typeof t && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
return -1 !== this.indexOf(t, e);
});
},
278: function(t, e, n) {
"use strict";
var r = n(193), i = n(188);
for (let t of document.querySelectorAll("[data-action-login]")) for (let e of t.classList) e.endsWith("_unready") && t.classList.remove(e);
function o() {
var t = new r({
hasClose: !1,
mixClass: "login-modal"
}), e = new i();
t.setContent(e.elem), e.start(), n.e(2).then(function() {
t.remove(), new (n(194))();
}.bind(null, n)).catch(n.oe);
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-login") && (t.preventDefault(), o());
}), t.exports = o;
},
279: function(t, e, n) {
"use strict";
function r() {
var t = document.createElement("form");
t.method = "POST", t.action = "/auth/logout?_csrf=" + document.cookie.match(/XSRF-TOKEN=([\w-]+)/)[1], 
document.body.appendChild(t), t.submit();
}
document.addEventListener("click", function(t) {
t.target.hasAttribute("data-action-user-logout") && (t.preventDefault(), r());
}), t.exports = r;
},
280: function(t, e, n) {
"use strict";
var r = n(326);
function i(t, e) {
var n = setTimeout(function() {
e(new Error("timeout"));
}, 500);
function i(t, r) {
clearTimeout(n), e(t, r);
}
try {
(t.contentDocument || t.contentWindow.document).body;
} catch (t) {
!function(t, e) {
throw new Error("Not implemented yet");
}();
}
if (!t.offsetWidth) {
var o = t.cloneNode(!0);
return o.name = "", o.style.height = "50px", o.style.position = "absolute", o.style.display = "block", 
o.style.top = "10000px", o.onload = function() {
var e = r(this.contentDocument);
t.style.display = "block", o.remove(), i(null, e);
}, void document.body.appendChild(o);
}
t.style.display = "block", t.style.height = "1px";
var s = r(t.contentDocument);
t.style.height = "", i(null, s);
}
i.async = function(t, e) {
setTimeout(function() {
i(t, e);
}, 0);
}, t.exports = i;
},
326: function(t, e, n) {
"use strict";
var r, i = n(327);
t.exports = function(t) {
t = t || document;
var e = Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight);
return t.documentElement.scrollWidth > t.documentElement.clientWidth && (r || (r = i()), 
e += r), e;
};
},
327: function(t, e, n) {
"use strict";
t.exports = function() {
var t = document.createElement("div");
if (t.style.cssText = "visibility:hidden;height:100px", !document.body) throw new Error("getScrollbarHeight called to early: no document.body");
document.body.appendChild(t);
var e = t.offsetWidth;
t.style.overflow = "scroll";
var n = document.createElement("div");
n.style.width = "100%", t.appendChild(n);
var r = n.offsetWidth;
return t.parentNode.removeChild(t), e - r;
};
},
328: function(t, e, n) {
"use strict";
var r, i = n(188);
let o = "//" + window.disqus_shortname + ".disqus.com/embed.js";
window.disqus_shortname;
var s = 840;
function a() {
r || (r = window.requestAnimationFrame(function() {
!function() {
var t = document.querySelector(".sitetoolbar");
if (!t) return;
var e = document.querySelector(".sidebar");
e && (e.style.top = Math.max(t.getBoundingClientRect().bottom, 0) + "px", function() {
var t = document.querySelector(".sidebar"), e = t.querySelector(".sidebar__content"), n = t.querySelector(".sidebar__inner"), r = t.classList.contains("sidebar_sticky-footer");
if (t.classList.contains("sidebar_compact")) {
(r ? e.lastElementChild.getBoundingClientRect().top - e.lastElementChild.previousElementSibling.getBoundingClientRect().bottom : e.getBoundingClientRect().bottom - e.lastElementChild.getBoundingClientRect().bottom) > 150 && t.classList.remove("sidebar_compact");
} else n.scrollHeight, n.clientHeight, n.scrollHeight > n.clientHeight && t.classList.add("sidebar_compact");
}());
n = document.documentElement.clientWidth <= s, r = document.querySelector('meta[name="viewport"]').content, 
r = r.replace(/user-scalable=\w+/, "user-scalable=" + (n ? "yes" : "no")), document.querySelector('meta[name="viewport"]').content = r, 
function() {
if (!window.disqus_enabled) return;
if (document.querySelector(`script[src="${o}"]`)) return;
let t = document.getElementById("disqus_thread");
if (t.hasChildNodes()) return;
let e = t.getBoundingClientRect();
if (e.top > document.documentElement.clientHeight + 150 || e.bottom < -150) return;
u();
}();
var n, r;
}(), r = null;
}));
}
function c() {
window.location.hash.match(/#comment-/) && u(), a();
}
function u() {
let t = document.getElementById("disqus_thread");
if (t.classList.contains("disqus-loading")) return;
t.classList.add("disqus-loading");
let e = new i({
size: "large"
});
t.append(e.elem), e.start();
var n = document.createElement("script");
n.src = o, n.setAttribute("data-timestamp", +new Date()), document.head.appendChild(n), 
n.onload = (() => {
e.stop(), e.elem.remove();
});
}
window.addEventListener("resize-internal", a), window.addEventListener("scroll", a), 
window.addEventListener("resize", a), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", c) : c();
},
332: function(t, e, n) {
"use strict";
document.addEventListener("click", function(t) {
if (!t.target.closest) return;
t.target.closest(o + "__search-toggle") && (r || (n = document.querySelector(o), 
i = n.querySelector(o + "__search-input input"), n.querySelector(o + "__find").onmousedown = function(t) {
e = !0;
}, i.onkeydown = function(t) {
27 == t.keyCode && (this.value = "", s());
}, i.onblur = function(t) {
!e && s();
}, r = !0), s());
var e, n, i;
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
var e = t.target.closest("[data-dropdown-toggler]");
if (!e) return;
e.nextElementSibling.style.display = e.nextElementSibling.offsetWidth ? "none" : "block";
}), document.addEventListener("click", function(t) {
if (!t.target.closest) return;
if (!t.target.closest(".sitetoolbar__nav-toggle")) return;
t.target.classList.toggle("sitetoolbar__nav-toggle--active"), document.querySelector(".sitetoolbar").classList.toggle("sitetoolbar_menu_open");
});
var r = !1, i = "sitetoolbar", o = "." + i;
function s() {
var t, e = document.querySelector(o);
e.classList.toggle(i + "_search_open");
var n = e.querySelector(o + "__search-input input");
e.classList.contains(i + "_search_open") ? (n.focus(), (t = document.createElement("div")).className = "search-paranja", 
t.style.top = e.offsetHeight + "px", document.body.appendChild(t), document.body.classList.add("paranja-open")) : ((t = document.querySelector(".search-paranja")).parentNode.removeChild(t), 
document.body.classList.remove("paranja-open"));
}
},
333: function(t, e, n) {
"use strict";
function r() {
var t = document.querySelector(".page-wrapper");
document.querySelector(".page").classList.toggle("page_sidebar_on"), t && t.classList.toggle("page-wrapper_sidebar_on"), 
document.querySelector(".page").classList.contains("page_sidebar_on") ? delete localStorage.noSidebar : localStorage.noSidebar = 1;
}
document.addEventListener("click", function(t) {
if (!t.target.hasAttribute("data-sidebar-toggle")) return;
r();
}), document.addEventListener("keydown", function(t) {
if (document.activeElement && ~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) return;
if (t.keyCode != "S".charCodeAt(0)) return;
if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
if (!t.metaKey || !t.altKey) return;
} else if (!t.altKey) return;
r(), t.preventDefault();
});
},
334: function(t, e, n) {
"use strict";
var r = n(336), i = ~navigator.userAgent.toLowerCase().indexOf("mac os x") ? "ctrl" : "alt";
function o() {
var t = i[0].toUpperCase() + i.slice(1), e = document.querySelector('link[rel="next"]');
e && (document.querySelector('a[href="' + e.getAttribute("href") + '"] .page__nav-text-shortcut').innerHTML = t + ' + <span class="page__nav-text-arr">→</span>');
var n = document.querySelector('link[rel="prev"]');
n && (document.querySelector('a[href="' + n.getAttribute("href") + '"] .page__nav-text-shortcut').innerHTML = t + ' + <span class="page__nav-text-arr">←</span>');
}
r(document, {
onRight: function() {
var t = document.querySelector('link[rel="prev"]');
t && (document.location = t.href);
},
onLeft: function() {
var t = document.querySelector('link[rel="next"]');
t && (document.location = t.href);
}
}), document.addEventListener("keydown", function(t) {
if ((!document.activeElement || !~[ "INPUT", "TEXTAREA", "SELECT" ].indexOf(document.activeElement.tagName)) && t[i + "Key"]) {
var e = null;
switch (t.keyCode) {
case 37:
e = "prev";
break;

case 39:
e = "next";
break;

default:
return;
}
var n = document.querySelector('link[rel="' + e + '"]');
n && (document.location = n.href, t.preventDefault());
}
}), "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", o) : o();
},
336: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
var n, r, i, o, s, a = (e = e || {}).onRight || function() {}, c = e.onLeft || function() {}, u = e.tolerance || 50, l = e.threshold || 150, d = e.allowedTime || 500;
t.addEventListener("touchstart", function(t) {
var e = t.changedTouches[0];
i = 0, n = e.pageX, r = e.pageY, s = Date.now();
}), t.addEventListener("touchend", function(t) {
var e = t.changedTouches[0];
if (i = e.pageX - n, o = Date.now() - s, !(Math.abs(e.pageY - r) > u || o > d)) {
for (var h = !1, f = t.target; f != document.body; ) {
if (f.scrollWidth > f.clientWidth) {
h = !0;
break;
}
f = f.parentElement;
}
h || (i > l && a(t), i < -l && c(t));
}
});
};
},
337: function(t, e, n) {
"use strict";
var r;
document.addEventListener("mouseover", function(t) {
if (t.target.closest) {
var e = t.target.closest("[data-add-class-on-hover]") || t.target.closest(".button");
e && (r = e, e.classList.add("hover"));
}
}), document.addEventListener("touchend", function(t) {
setTimeout(function() {
r && (r.classList.remove("hover"), r = null);
}, 500);
}), document.addEventListener("mouseout", function(t) {
r && (r.contains(t.relatedTarget) || (r.classList.remove("hover"), r = null));
}), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) || document.documentElement.classList.add("working-hover");
},
340: function(t, e, n) {
"use strict";
var r = window.location.host;
document.addEventListener("click", function(t) {
if (1 == t.which && !t.defaultPrevented) {
var e = t.target.closest && t.target.closest("a");
if (e && (r != e.host || e.hasAttribute("data-track-outbound")) && ~[ "_self", "_top", "_parent" ].indexOf(e.target) && !(t.shiftKey || t.ctrlKey || t.altKey)) {
t.preventDefault();
var n = e.href;
window.ga("send", "event", "outbound", "click", n, {
hitCallback: i
}), setTimeout(i, 500);
}
}
function i() {
document.location = n;
}
});
},
341: function(t, e, n) {
"use strict";
var r = n(184);
document.addEventListener("click", function(t) {
let e = t.target.closest("[data-banner-close]");
e && (localStorage["hideBanner" + e.dataset.bannerClose] = 1, e.parentNode.remove(), 
new r.Success(e.dataset.bannerCloseMessage));
});
},
342: function(t, e, n) {
"use strict";
let r = n(196), i = n(229);
class o extends HTMLElement {
constructor() {
super(), this.render();
}
connectedCallback() {
this.render();
}
static get observedAttributes() {
return [ "timestamp", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
format(t, e, n) {
let o = r(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (o += " " + i()), o;
}
render() {
let t = [ "timestamp", "from", "to", "format" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
if (this.lastParams = t, this.getAttribute("timestamp")) {
if ("{" === this.getAttribute("timestamp")[0]) return;
return void (this.innerHTML = this.format(this.getAttribute("timestamp"), this.getAttribute("format"), this.hasAttribute("with-zone")));
}
if ("{" === this.getAttribute("from")[0]) return;
let e = new Date(this.getAttribute("from"));
if ("{" === this.getAttribute("to")[0]) return;
let n = new Date(this.getAttribute("to")), r = this.getAttribute("format"), i = this.getAttribute("format");
e.getFullYear() === n.getFullYear() && (r = r.replace(/ YY(YY)?$/g, "")), this.innerHTML = this.format(e, r) + " – " + this.format(n, i, this.hasAttribute("with-zone"));
}
}
window.DateLocalElement = o, window.customElements.define("date-local", o);
},
343: function(t, e, n) {
"use strict";
let r = n(196), i = n(229), o = n(344);
const s = n(182).lang;
class a extends HTMLElement {
constructor() {
super(), this.render();
}
static get observedAttributes() {
return [ "weekdays", "format", "with-zone", "to", "from" ];
}
attributeChangedCallback(t, e, n) {
this.render();
}
connectedCallback() {
this.render();
}
format(t, e, n) {
let o = r(t).utcOffset(-new Date().getTimezoneOffset()).format(e);
return n && (o += " " + i()), o;
}
render() {
if ("{" === this.getAttribute("weekdays")[0]) return;
let t = [ "weekdays", "with-zone", "from", "to" ].map(t => this.getAttribute(t)).join(":");
if (this.lastParams === t) return;
this.lastParams = t;
let e, n = this.getAttribute("weekdays").split(",").map(Number), r = this.getAttribute("from"), a = this.getAttribute("to");
[n, r, a] = o(n, r, a, -new Date().getTimezoneOffset()), e = "ru" === s ? [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ] : [ "", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ], 
n = n.map(t => e[t]), n = "ru" === s ? n.join("/") : n.join(", ");
let c = this.hasAttribute("with-zone") ? " " + i() : "";
this.innerHTML = n + " " + r + " – " + a + c;
}
}
window.WeekRangeElement = a, window.customElements.define("week-range", a);
},
344: function(t, e, n) {
"use strict";
t.exports = function(t, e, n, r) {
r = +r, e.split && (e = e.split(":").map(Number)), n.split && (n = n.split(":").map(Number)), 
e = 60 * e[0] + e[1] + r, n = 60 * n[0] + n[1] + r, e < 0 ? (e += 1440, n += 1440, 
t = t.map(t => 1 === t ? 7 : t - 1)) : e >= 1440 && (e -= 1440, n -= 1440, t = t.map(t => 7 === t ? 1 : t + 1)), 
n > 1440 && (n -= 1440), n < 0 && (n += 1440);
let i = t => 0 === t ? "00" : t < 10 ? "0" + t : t;
return [ t, e = [ Math.floor(e / 60), e % 60 ].map(i).join(":"), n = [ Math.floor(n / 60), n % 60 ].map(i).join(":") ];
};
},
672: function(t, e) {
t.exports = {
toolbar: {
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "sitetoolbar__logo_en-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "sitetoolbar__logo_small_en-white.svg"
}
},
sections: [ {
slug: "tutorial",
title: "Tutorial"
}, {
slug: "courses",
title: "Courses"
} ],
buy_ebook_extra: "Buy",
buy_ebook: "EPUB/PDF",
search_placeholder: "Search on Javascript.info",
search_button: "Search",
public_profile: "Public profile",
account: "Account",
notifications: "Notifications",
admin: "Admin",
logout: "Logout"
},
errors: {
server_connection_error: "Server connection error.",
server_request_timeout: "Server request timeout.",
request_aborted: "Request was aborted.",
no_response: "No response from server.",
server_error: "Server error (code #{status}), try again later.",
invalid_format: "Invalid response format."
},
sorry_old_browser: "Sorry, IE<10 is not supported, please use a newer browser.",
contact_us: "contact us",
about_the_project: "about the project",
ilya_kantor: "Ilya Kantor",
comments: "Comments",
loading: "Loading...",
search: "Search",
share: "Share",
donate: "Donate",
read_before_commenting: "read this before commenting…",
"tablet-menu": {
choose_section: "Choose section",
search_placeholder: "Search in the tutorial",
search_button: "Search"
},
tutorial: "Tutorial",
tutorial_map: "Tutorial map",
additional_articles: "Additional articles",
comment: {
help: [ "You're welcome to post additions, questions to the articles and answers to them.", "To insert a few words of code, use the <code>&lt;code&gt;</code> tag, for several lines – use <code>&lt;pre&gt;</code>, for more than 10 lines – use a sandbox (<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "If you can't understand something in the article – please elaborate." ]
},
edit_on_github: "Edit on Github",
Error: "Error",
close: "close",
Close: "Close",
hide_forever: "hide permanently",
hidden_forever: "This information will not show up any more.",
profile_tab_names: {
quiz: "Quizes",
orders: "Orders",
courses: "Courses",
aboutme: "Public profile",
subscriptions: "Notifications",
account: "Account"
}
};
},
673: function(t, e) {
t.exports = {
toolbar: {
logo: {
normal: {
svg: "sitetoolbar__logo_ru.svg",
width: 171
},
"normal-white": {
svg: "sitetoolbar__logo_ru.svg"
},
small: {
svg: "sitetoolbar__logo_small_ru.svg",
width: 80
},
"small-white": {
svg: "sitetoolbar__logo_small_ru.svg"
}
},
sections: [ {
slug: "tutorial",
title: "Учебник"
}, {
slug: "courses",
title: "Курсы"
}, {
url: "https://javascript.ru/forum/",
title: "Форум"
}, {
url: "https://es5.javascript.ru",
title: "ES5"
}, {
slug: "quiz",
title: "Тесты знаний"
}, {
slug: "jobs",
title: "Стажировки"
} ],
buy_ebook_extra: "Купить",
buy_ebook: "EPUB/PDF",
search_placeholder: "Искать на Javascript.ru",
search_button: "Найти",
public_profile: "Публичный профиль",
account: "Аккаунт",
notifications: "Уведомления",
admin: "Админ",
logout: "Выйти"
},
errors: {
server_connection_error: "Ошибка связи с сервером.",
server_request_timeout: "Превышено максимально допустимое время ожидания ответа от сервера.",
request_aborted: "Запрос был прерван.",
no_response: "Не получен ответ от сервера.",
server_error: "Ошибка на стороне сервера (код #{status}), попытайтесь позднее.",
invalid_format: "Некорректный формат ответа от сервера."
},
sorry_old_browser: "Извините, IE<10 не поддерживается, пожалуйста используйте более новый браузер.",
contact_us: "связаться с нами",
about_the_project: "о проекте",
ilya_kantor: "Илья Кантор",
comments: "Комментарии",
loading: "Загружается...",
search: "Искать",
share: "Поделиться",
donate: "Поддержать",
read_before_commenting: "перед тем как писать…",
"tablet-menu": {
choose_section: "Выберите раздел",
search_placeholder: "Поиск в учебнике",
search_button: "Поиск"
},
tutorial: "Учебник",
tutorial_map: "Карта учебника",
additional_articles: "Дополнительно",
comment: {
help: [ "Приветствуются комментарии, содержащие дополнения и вопросы по статье, и ответы на них.", "Для одной строки кода используйте тег <code>&lt;code&gt;</code>, для нескольких строк кода&nbsp;&mdash; тег <code>&lt;pre&gt;</code>, если больше 10 строк&nbsp;&mdash; ссылку на песочницу (<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "Если что-то непонятно в статье&nbsp;&mdash; пишите, что именно и с какого места." ]
},
edit_on_github: "Редактировать на Github",
Error: "Ошибка",
close: "закрыть",
Close: "Закрыть",
hide_forever: "не показывать",
hidden_forever: "Эта информация больше не будет выводиться.",
profile_tab_names: {
quiz: "Тесты",
orders: "Заказы",
courses: "Курсы",
aboutme: "Публичный профиль",
subscriptions: "Уведомления",
account: "Аккаунт"
}
};
},
83: function(t, e, n) {
(function(t) {
"use strict";
function e(t, e, n) {
var r, i;
return "m" === n ? e ? "минута" : "минуту" : t + " " + (r = +t, i = {
ss: e ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
mm: e ? "минута_минуты_минут" : "минуту_минуты_минут",
hh: "час_часа_часов",
dd: "день_дня_дней",
MM: "месяц_месяца_месяцев",
yy: "год_года_лет"
}[n].split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2]);
}
var n = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
t.defineLocale("ru", {
months: {
format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
},
monthsShort: {
format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
},
weekdays: {
standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
},
weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
monthsParse: n,
longMonthsParse: n,
shortMonthsParse: n,
monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
longDateFormat: {
LT: "H:mm",
LTS: "H:mm:ss",
L: "DD.MM.YYYY",
LL: "D MMMM YYYY г.",
LLL: "D MMMM YYYY г., H:mm",
LLLL: "dddd, D MMMM YYYY г., H:mm"
},
calendar: {
sameDay: "[Сегодня, в] LT",
nextDay: "[Завтра, в] LT",
lastDay: "[Вчера, в] LT",
nextWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В следующее] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В следующий] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В следующую] dddd, [в] LT";
}
},
lastWeek: function(t) {
if (t.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
switch (this.day()) {
case 0:
return "[В прошлое] dddd, [в] LT";

case 1:
case 2:
case 4:
return "[В прошлый] dddd, [в] LT";

case 3:
case 5:
case 6:
return "[В прошлую] dddd, [в] LT";
}
},
sameElse: "L"
},
relativeTime: {
future: "через %s",
past: "%s назад",
s: "несколько секунд",
ss: e,
m: e,
mm: e,
h: "час",
hh: e,
d: "день",
dd: e,
M: "месяц",
MM: e,
y: "год",
yy: e
},
meridiemParse: /ночи|утра|дня|вечера/i,
isPM: function(t) {
return /^(дня|вечера)$/.test(t);
},
meridiem: function(t, e, n) {
return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера";
},
dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
ordinal: function(t, e) {
switch (e) {
case "M":
case "d":
case "DDD":
return t + "-й";

case "D":
return t + "-го";

case "w":
case "W":
return t + "-я";

default:
return t;
}
},
week: {
dow: 1,
doy: 4
}
});
})(n(86));
},
86: function(t, e, n) {
(function(t) {
var e;
e = function() {
"use strict";
var e, n;
function r() {
return e.apply(null, arguments);
}
function i(t) {
return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
}
function o(t) {
return null != t && "[object Object]" === Object.prototype.toString.call(t);
}
function s(t) {
return void 0 === t;
}
function a(t) {
return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
}
function c(t) {
return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
}
function u(t, e) {
var n, r = [];
for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
return r;
}
function l(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function d(t, e) {
for (var n in e) l(e, n) && (t[n] = e[n]);
return l(e, "toString") && (t.toString = e.toString), l(e, "valueOf") && (t.valueOf = e.valueOf), 
t;
}
function h(t, e, n, r) {
return Ce(t, e, n, r, !0).utc();
}
function f(t) {
return null == t._pf && (t._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1,
parsedDateParts: [],
meridiem: null,
rfc2822: !1,
weekdayMismatch: !1
}), t._pf;
}
function m(t) {
if (null == t._isValid) {
var e = f(t), r = n.call(e.parsedDateParts, function(t) {
return null != t;
}), i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && r);
if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), 
null != Object.isFrozen && Object.isFrozen(t)) return i;
t._isValid = i;
}
return t._isValid;
}
function p(t) {
var e = h(NaN);
return null != t ? d(f(e), t) : f(e).userInvalidated = !0, e;
}
n = Array.prototype.some ? Array.prototype.some : function(t) {
for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return !0;
return !1;
};
var _ = r.momentProperties = [];
function g(t, e) {
var n, r, i;
if (s(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), s(e._i) || (t._i = e._i), 
s(e._f) || (t._f = e._f), s(e._l) || (t._l = e._l), s(e._strict) || (t._strict = e._strict), 
s(e._tzm) || (t._tzm = e._tzm), s(e._isUTC) || (t._isUTC = e._isUTC), s(e._offset) || (t._offset = e._offset), 
s(e._pf) || (t._pf = f(e)), s(e._locale) || (t._locale = e._locale), _.length > 0) for (n = 0; n < _.length; n++) s(i = e[r = _[n]]) || (t[r] = i);
return t;
}
var y = !1;
function v(t) {
g(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
!1 === y && (y = !0, r.updateOffset(this), y = !1);
}
function w(t) {
return t instanceof v || null != t && null != t._isAMomentObject;
}
function b(t) {
return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
}
function k(t) {
var e = +t, n = 0;
return 0 !== e && isFinite(e) && (n = b(e)), n;
}
function S(t, e, n) {
var r, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
for (r = 0; r < i; r++) (n && t[r] !== e[r] || !n && k(t[r]) !== k(e[r])) && s++;
return s + o;
}
function M(t) {
!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn;
}
function D(t, e) {
var n = !0;
return d(function() {
if (null != r.deprecationHandler && r.deprecationHandler(null, t), n) {
for (var i, o = [], s = 0; s < arguments.length; s++) {
if (i = "", "object" == typeof arguments[s]) {
for (var a in i += "\n[" + s + "] ", arguments[0]) i += a + ": " + arguments[0][a] + ", ";
i = i.slice(0, -2);
} else i = arguments[s];
o.push(i);
}
M((Array.prototype.slice.call(o).join(""), new Error().stack)), n = !1;
}
return e.apply(this, arguments);
}, e);
}
var E, T = {};
function C(t, e) {
null != r.deprecationHandler && r.deprecationHandler(t, e), T[t] || (M(), T[t] = !0);
}
function x(t) {
return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
}
function Y(t, e) {
var n, r = d({}, t);
for (n in e) l(e, n) && (o(t[n]) && o(e[n]) ? (r[n] = {}, d(r[n], t[n]), d(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
for (n in t) l(t, n) && !l(e, n) && o(t[n]) && (r[n] = d({}, r[n]));
return r;
}
function O(t) {
null != t && this.set(t);
}
r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, E = Object.keys ? Object.keys : function(t) {
var e, n = [];
for (e in t) l(t, e) && n.push(e);
return n;
};
var L = {};
function F(t, e) {
var n = t.toLowerCase();
L[n] = L[n + "s"] = L[e] = t;
}
function A(t) {
return "string" == typeof t ? L[t] || L[t.toLowerCase()] : void 0;
}
function P(t) {
var e, n, r = {};
for (n in t) l(t, n) && (e = A(n)) && (r[e] = t[n]);
return r;
}
var N = {};
function j(t, e) {
N[t] = e;
}
function H(t, e, n) {
var r = "" + Math.abs(t), i = e - r.length;
return (t >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r;
}
var W = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, R = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, U = {}, z = {};
function I(t, e, n, r) {
var i = r;
"string" == typeof r && (i = function() {
return this[r]();
}), t && (z[t] = i), e && (z[e[0]] = function() {
return H(i.apply(this, arguments), e[1], e[2]);
}), n && (z[n] = function() {
return this.localeData().ordinal(i.apply(this, arguments), t);
});
}
function G(t, e) {
return t.isValid() ? (e = q(e, t.localeData()), U[e] = U[e] || function(t) {
var e, n, r, i = t.match(W);
for (e = 0, n = i.length; e < n; e++) z[i[e]] ? i[e] = z[i[e]] : i[e] = (r = i[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
return function(e) {
var r, o = "";
for (r = 0; r < n; r++) o += x(i[r]) ? i[r].call(e, t) : i[r];
return o;
};
}(e), U[e](t)) : t.localeData().invalidDate();
}
function q(t, e) {
var n = 5;
function r(t) {
return e.longDateFormat(t) || t;
}
for (R.lastIndex = 0; n >= 0 && R.test(t); ) t = t.replace(R, r), R.lastIndex = 0, 
n -= 1;
return t;
}
var V = /\d/, Z = /\d\d/, $ = /\d{3}/, B = /\d{4}/, J = /[+-]?\d{6}/, K = /\d\d?/, X = /\d\d\d\d?/, Q = /\d\d\d\d\d\d?/, tt = /\d{1,3}/, et = /\d{1,4}/, nt = /[+-]?\d{1,6}/, rt = /\d+/, it = /[+-]?\d+/, ot = /Z|[+-]\d\d:?\d\d/gi, st = /Z|[+-]\d\d(?::?\d\d)?/gi, at = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ct = {};
function ut(t, e, n) {
ct[t] = x(e) ? e : function(t, r) {
return t && n ? n : e;
};
}
function lt(t, e) {
return l(ct, t) ? ct[t](e._strict, e._locale) : new RegExp(dt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, r, i) {
return e || n || r || i;
})));
}
function dt(t) {
return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var ht = {};
function ft(t, e) {
var n, r = e;
for ("string" == typeof t && (t = [ t ]), a(e) && (r = function(t, n) {
n[e] = k(t);
}), n = 0; n < t.length; n++) ht[t[n]] = r;
}
function mt(t, e) {
ft(t, function(t, n, r, i) {
r._w = r._w || {}, e(t, r._w, r, i);
});
}
function pt(t, e, n) {
null != e && l(ht, t) && ht[t](e, n._a, n, t);
}
var _t = 0, gt = 1, yt = 2, vt = 3, wt = 4, bt = 5, kt = 6, St = 7, Mt = 8;
function Dt(t) {
return Et(t) ? 366 : 365;
}
function Et(t) {
return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
}
I("Y", 0, 0, function() {
var t = this.year();
return t <= 9999 ? "" + t : "+" + t;
}), I(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), I(0, [ "YYYY", 4 ], 0, "year"), I(0, [ "YYYYY", 5 ], 0, "year"), I(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
F("year", "y"), j("year", 1), ut("Y", it), ut("YY", K, Z), ut("YYYY", et, B), ut("YYYYY", nt, J), 
ut("YYYYYY", nt, J), ft([ "YYYYY", "YYYYYY" ], _t), ft("YYYY", function(t, e) {
e[_t] = 2 === t.length ? r.parseTwoDigitYear(t) : k(t);
}), ft("YY", function(t, e) {
e[_t] = r.parseTwoDigitYear(t);
}), ft("Y", function(t, e) {
e[_t] = parseInt(t, 10);
}), r.parseTwoDigitYear = function(t) {
return k(t) + (k(t) > 68 ? 1900 : 2e3);
};
var Tt, Ct = xt("FullYear", !0);
function xt(t, e) {
return function(n) {
return null != n ? (Ot(this, t, n), r.updateOffset(this, e), this) : Yt(this, t);
};
}
function Yt(t, e) {
return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
}
function Ot(t, e, n) {
t.isValid() && !isNaN(n) && ("FullYear" === e && Et(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), Lt(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
}
function Lt(t, e) {
if (isNaN(t) || isNaN(e)) return NaN;
var n, r = (e % (n = 12) + n) % n;
return t += (e - r) / 12, 1 === r ? Et(t) ? 29 : 28 : 31 - r % 7 % 2;
}
Tt = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
var e;
for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
return -1;
}, I("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), I("MMM", 0, 0, function(t) {
return this.localeData().monthsShort(this, t);
}), I("MMMM", 0, 0, function(t) {
return this.localeData().months(this, t);
}), F("month", "M"), j("month", 8), ut("M", K), ut("MM", K, Z), ut("MMM", function(t, e) {
return e.monthsShortRegex(t);
}), ut("MMMM", function(t, e) {
return e.monthsRegex(t);
}), ft([ "M", "MM" ], function(t, e) {
e[gt] = k(t) - 1;
}), ft([ "MMM", "MMMM" ], function(t, e, n, r) {
var i = n._locale.monthsParse(t, r, n._strict);
null != i ? e[gt] = i : f(n).invalidMonth = t;
});
var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, At = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var Pt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
function Nt(t, e) {
var n;
if (!t.isValid()) return t;
if ("string" == typeof e) if (/^\d+$/.test(e)) e = k(e); else if (!a(e = t.localeData().monthsParse(e))) return t;
return n = Math.min(t.date(), Lt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), 
t;
}
function jt(t) {
return null != t ? (Nt(this, t), r.updateOffset(this, !0), this) : Yt(this, "Month");
}
var Ht = at;
var Wt = at;
function Rt() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r = [], i = [], o = [];
for (e = 0; e < 12; e++) n = h([ 2e3, e ]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), 
o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
for (r.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) r[e] = dt(r[e]), i[e] = dt(i[e]);
for (e = 0; e < 24; e++) o[e] = dt(o[e]);
this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
}
function Ut(t) {
var e = new Date(Date.UTC.apply(null, arguments));
return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), 
e;
}
function zt(t, e, n) {
var r = 7 + e - n;
return -((7 + Ut(t, 0, r).getUTCDay() - e) % 7) + r - 1;
}
function It(t, e, n, r, i) {
var o, s, a = 1 + 7 * (e - 1) + (7 + n - r) % 7 + zt(t, r, i);
return a <= 0 ? s = Dt(o = t - 1) + a : a > Dt(t) ? (o = t + 1, s = a - Dt(t)) : (o = t, 
s = a), {
year: o,
dayOfYear: s
};
}
function Gt(t, e, n) {
var r, i, o = zt(t.year(), e, n), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
return s < 1 ? r = s + qt(i = t.year() - 1, e, n) : s > qt(t.year(), e, n) ? (r = s - qt(t.year(), e, n), 
i = t.year() + 1) : (i = t.year(), r = s), {
week: r,
year: i
};
}
function qt(t, e, n) {
var r = zt(t, e, n), i = zt(t + 1, e, n);
return (Dt(t) - r + i) / 7;
}
I("w", [ "ww", 2 ], "wo", "week"), I("W", [ "WW", 2 ], "Wo", "isoWeek"), F("week", "w"), 
F("isoWeek", "W"), j("week", 5), j("isoWeek", 5), ut("w", K), ut("ww", K, Z), ut("W", K), 
ut("WW", K, Z), mt([ "w", "ww", "W", "WW" ], function(t, e, n, r) {
e[r.substr(0, 1)] = k(t);
});
I("d", 0, "do", "day"), I("dd", 0, 0, function(t) {
return this.localeData().weekdaysMin(this, t);
}), I("ddd", 0, 0, function(t) {
return this.localeData().weekdaysShort(this, t);
}), I("dddd", 0, 0, function(t) {
return this.localeData().weekdays(this, t);
}), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), 
F("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), ut("d", K), 
ut("e", K), ut("E", K), ut("dd", function(t, e) {
return e.weekdaysMinRegex(t);
}), ut("ddd", function(t, e) {
return e.weekdaysShortRegex(t);
}), ut("dddd", function(t, e) {
return e.weekdaysRegex(t);
}), mt([ "dd", "ddd", "dddd" ], function(t, e, n, r) {
var i = n._locale.weekdaysParse(t, r, n._strict);
null != i ? e.d = i : f(n).invalidWeekday = t;
}), mt([ "d", "e", "E" ], function(t, e, n, r) {
e[r] = k(t);
});
var Vt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var Zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
var Bt = at;
var Jt = at;
var Kt = at;
function Xt() {
function t(t, e) {
return e.length - t.length;
}
var e, n, r, i, o, s = [], a = [], c = [], u = [];
for (e = 0; e < 7; e++) n = h([ 2e3, 1 ]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), 
o = this.weekdays(n, ""), s.push(r), a.push(i), c.push(o), u.push(r), u.push(i), 
u.push(o);
for (s.sort(t), a.sort(t), c.sort(t), u.sort(t), e = 0; e < 7; e++) a[e] = dt(a[e]), 
c[e] = dt(c[e]), u[e] = dt(u[e]);
this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), 
this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
}
function Qt() {
return this.hours() % 12 || 12;
}
function te(t, e) {
I(t, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), e);
});
}
function ee(t, e) {
return e._meridiemParse;
}
I("H", [ "HH", 2 ], 0, "hour"), I("h", [ "hh", 2 ], 0, Qt), I("k", [ "kk", 2 ], 0, function() {
return this.hours() || 24;
}), I("hmm", 0, 0, function() {
return "" + Qt.apply(this) + H(this.minutes(), 2);
}), I("hmmss", 0, 0, function() {
return "" + Qt.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
}), I("Hmm", 0, 0, function() {
return "" + this.hours() + H(this.minutes(), 2);
}), I("Hmmss", 0, 0, function() {
return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
}), te("a", !0), te("A", !1), F("hour", "h"), j("hour", 13), ut("a", ee), ut("A", ee), 
ut("H", K), ut("h", K), ut("k", K), ut("HH", K, Z), ut("hh", K, Z), ut("kk", K, Z), 
ut("hmm", X), ut("hmmss", Q), ut("Hmm", X), ut("Hmmss", Q), ft([ "H", "HH" ], vt), 
ft([ "k", "kk" ], function(t, e, n) {
var r = k(t);
e[vt] = 24 === r ? 0 : r;
}), ft([ "a", "A" ], function(t, e, n) {
n._isPm = n._locale.isPM(t), n._meridiem = t;
}), ft([ "h", "hh" ], function(t, e, n) {
e[vt] = k(t), f(n).bigHour = !0;
}), ft("hmm", function(t, e, n) {
var r = t.length - 2;
e[vt] = k(t.substr(0, r)), e[wt] = k(t.substr(r)), f(n).bigHour = !0;
}), ft("hmmss", function(t, e, n) {
var r = t.length - 4, i = t.length - 2;
e[vt] = k(t.substr(0, r)), e[wt] = k(t.substr(r, 2)), e[bt] = k(t.substr(i)), f(n).bigHour = !0;
}), ft("Hmm", function(t, e, n) {
var r = t.length - 2;
e[vt] = k(t.substr(0, r)), e[wt] = k(t.substr(r));
}), ft("Hmmss", function(t, e, n) {
var r = t.length - 4, i = t.length - 2;
e[vt] = k(t.substr(0, r)), e[wt] = k(t.substr(r, 2)), e[bt] = k(t.substr(i));
});
var ne, re = xt("Hours", !0), ie = {
calendar: {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
},
longDateFormat: {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
},
invalidDate: "Invalid date",
ordinal: "%d",
dayOfMonthOrdinalParse: /\d{1,2}/,
relativeTime: {
future: "in %s",
past: "%s ago",
s: "a few seconds",
ss: "%d seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
},
months: At,
monthsShort: Pt,
week: {
dow: 0,
doy: 6
},
weekdays: Vt,
weekdaysMin: $t,
weekdaysShort: Zt,
meridiemParse: /[ap]\.?m?\.?/i
}, oe = {}, se = {};
function ae(t) {
return t ? t.toLowerCase().replace("_", "-") : t;
}
function ce(e) {
var n = null;
if (!oe[e] && void 0 !== t && t && t.exports) try {
n = ne._abbr;
!function() {
var t = new Error('Cannot find module "./locale"');
throw t.code = "MODULE_NOT_FOUND", t;
}(), ue(n);
} catch (t) {}
return oe[e];
}
function ue(t, e) {
var n;
return t && ((n = s(e) ? de(t) : le(t, e)) ? ne = n : "undefined" != typeof console && console.warn), 
ne._abbr;
}
function le(t, e) {
if (null !== e) {
var n, r = ie;
if (e.abbr = t, null != oe[t]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
r = oe[t]._config; else if (null != e.parentLocale) if (null != oe[e.parentLocale]) r = oe[e.parentLocale]._config; else {
if (null == (n = ce(e.parentLocale))) return se[e.parentLocale] || (se[e.parentLocale] = []), 
se[e.parentLocale].push({
name: t,
config: e
}), null;
r = n._config;
}
return oe[t] = new O(Y(r, e)), se[t] && se[t].forEach(function(t) {
le(t.name, t.config);
}), ue(t), oe[t];
}
return delete oe[t], null;
}
function de(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ne;
if (!i(t)) {
if (e = ce(t)) return e;
t = [ t ];
}
return function(t) {
for (var e, n, r, i, o = 0; o < t.length; ) {
for (e = (i = ae(t[o]).split("-")).length, n = (n = ae(t[o + 1])) ? n.split("-") : null; e > 0; ) {
if (r = ce(i.slice(0, e).join("-"))) return r;
if (n && n.length >= e && S(i, n, !0) >= e - 1) break;
e--;
}
o++;
}
return ne;
}(t);
}
function he(t) {
var e, n = t._a;
return n && -2 === f(t).overflow && (e = n[gt] < 0 || n[gt] > 11 ? gt : n[yt] < 1 || n[yt] > Lt(n[_t], n[gt]) ? yt : n[vt] < 0 || n[vt] > 24 || 24 === n[vt] && (0 !== n[wt] || 0 !== n[bt] || 0 !== n[kt]) ? vt : n[wt] < 0 || n[wt] > 59 ? wt : n[bt] < 0 || n[bt] > 59 ? bt : n[kt] < 0 || n[kt] > 999 ? kt : -1, 
f(t)._overflowDayOfYear && (e < _t || e > yt) && (e = yt), f(t)._overflowWeeks && -1 === e && (e = St), 
f(t)._overflowWeekday && -1 === e && (e = Mt), f(t).overflow = e), t;
}
function fe(t, e, n) {
return null != t ? t : null != e ? e : n;
}
function me(t) {
var e, n, i, o, s, a = [];
if (!t._d) {
for (i = function(t) {
var e = new Date(r.now());
return t._useUTC ? [ e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() ] : [ e.getFullYear(), e.getMonth(), e.getDate() ];
}(t), t._w && null == t._a[yt] && null == t._a[gt] && function(t) {
var e, n, r, i, o, s, a, c;
if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, s = 4, n = fe(e.GG, t._a[_t], Gt(xe(), 1, 4).year), 
r = fe(e.W, 1), ((i = fe(e.E, 1)) < 1 || i > 7) && (c = !0); else {
o = t._locale._week.dow, s = t._locale._week.doy;
var u = Gt(xe(), o, s);
n = fe(e.gg, t._a[_t], u.year), r = fe(e.w, u.week), null != e.d ? ((i = e.d) < 0 || i > 6) && (c = !0) : null != e.e ? (i = e.e + o, 
(e.e < 0 || e.e > 6) && (c = !0)) : i = o;
}
r < 1 || r > qt(n, o, s) ? f(t)._overflowWeeks = !0 : null != c ? f(t)._overflowWeekday = !0 : (a = It(n, r, i, o, s), 
t._a[_t] = a.year, t._dayOfYear = a.dayOfYear);
}(t), null != t._dayOfYear && (s = fe(t._a[_t], i[_t]), (t._dayOfYear > Dt(s) || 0 === t._dayOfYear) && (f(t)._overflowDayOfYear = !0), 
n = Ut(s, 0, t._dayOfYear), t._a[gt] = n.getUTCMonth(), t._a[yt] = n.getUTCDate()), 
e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = i[e];
for (;e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[vt] && 0 === t._a[wt] && 0 === t._a[bt] && 0 === t._a[kt] && (t._nextDay = !0, 
t._a[vt] = 0), t._d = (t._useUTC ? Ut : function(t, e, n, r, i, o, s) {
var a = new Date(t, e, n, r, i, o, s);
return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a;
}).apply(null, a), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
t._nextDay && (t._a[vt] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (f(t).weekdayMismatch = !0);
}
}
var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _e = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ge = /Z|[+-]\d\d(?::?\d\d)?/, ye = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], ve = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], we = /^\/?Date\((\-?\d+)/i;
function be(t) {
var e, n, r, i, o, s, a = t._i, c = pe.exec(a) || _e.exec(a);
if (c) {
for (f(t).iso = !0, e = 0, n = ye.length; e < n; e++) if (ye[e][1].exec(c[1])) {
i = ye[e][0], r = !1 !== ye[e][2];
break;
}
if (null == i) return void (t._isValid = !1);
if (c[3]) {
for (e = 0, n = ve.length; e < n; e++) if (ve[e][1].exec(c[3])) {
o = (c[2] || " ") + ve[e][0];
break;
}
if (null == o) return void (t._isValid = !1);
}
if (!r && null != o) return void (t._isValid = !1);
if (c[4]) {
if (!ge.exec(c[4])) return void (t._isValid = !1);
s = "Z";
}
t._f = i + (o || "") + (s || ""), Ee(t);
} else t._isValid = !1;
}
var ke = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
function Se(t, e, n, r, i, o) {
var s = [ function(t) {
var e = parseInt(t, 10);
if (e <= 49) return 2e3 + e;
if (e <= 999) return 1900 + e;
return e;
}(t), Pt.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10) ];
return o && s.push(parseInt(o, 10)), s;
}
var Me = {
UT: 0,
GMT: 0,
EDT: -240,
EST: -300,
CDT: -300,
CST: -360,
MDT: -360,
MST: -420,
PDT: -420,
PST: -480
};
function De(t) {
var e = ke.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
if (e) {
var n = Se(e[4], e[3], e[2], e[5], e[6], e[7]);
if (!function(t, e, n) {
return !t || Zt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (f(n).weekdayMismatch = !0, 
n._isValid = !1, !1);
}(e[1], n, t)) return;
t._a = n, t._tzm = function(t, e, n) {
if (t) return Me[t];
if (e) return 0;
var r = parseInt(n, 10), i = r % 100;
return (r - i) / 100 * 60 + i;
}(e[8], e[9], e[10]), t._d = Ut.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
f(t).rfc2822 = !0;
} else t._isValid = !1;
}
function Ee(t) {
if (t._f !== r.ISO_8601) if (t._f !== r.RFC_2822) {
t._a = [], f(t).empty = !0;
var e, n, i, o, s, a = "" + t._i, c = a.length, u = 0;
for (i = q(t._f, t._locale).match(W) || [], e = 0; e < i.length; e++) o = i[e], 
(n = (a.match(lt(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(n))).length > 0 && f(t).unusedInput.push(s), 
a = a.slice(a.indexOf(n) + n.length), u += n.length), z[o] ? (n ? f(t).empty = !1 : f(t).unusedTokens.push(o), 
pt(o, n, t)) : t._strict && !n && f(t).unusedTokens.push(o);
f(t).charsLeftOver = c - u, a.length > 0 && f(t).unusedInput.push(a), t._a[vt] <= 12 && !0 === f(t).bigHour && t._a[vt] > 0 && (f(t).bigHour = void 0), 
f(t).parsedDateParts = t._a.slice(0), f(t).meridiem = t._meridiem, t._a[vt] = function(t, e, n) {
var r;
if (null == n) return e;
return null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? ((r = t.isPM(n)) && e < 12 && (e += 12), 
r || 12 !== e || (e = 0), e) : e;
}(t._locale, t._a[vt], t._meridiem), me(t), he(t);
} else De(t); else be(t);
}
function Te(t) {
var e = t._i, n = t._f;
return t._locale = t._locale || de(t._l), null === e || void 0 === n && "" === e ? p({
nullInput: !0
}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new v(he(e)) : (c(e) ? t._d = e : i(n) ? function(t) {
var e, n, r, i, o;
if (0 === t._f.length) return f(t).invalidFormat = !0, void (t._d = new Date(NaN));
for (i = 0; i < t._f.length; i++) o = 0, e = g({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
e._f = t._f[i], Ee(e), m(e) && (o += f(e).charsLeftOver, o += 10 * f(e).unusedTokens.length, 
f(e).score = o, (null == r || o < r) && (r = o, n = e));
d(t, n || e);
}(t) : n ? Ee(t) : function(t) {
var e = t._i;
s(e) ? t._d = new Date(r.now()) : c(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function(t) {
var e = we.exec(t._i);
null === e ? (be(t), !1 === t._isValid && (delete t._isValid, De(t), !1 === t._isValid && (delete t._isValid, 
r.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
}(t) : i(e) ? (t._a = u(e.slice(0), function(t) {
return parseInt(t, 10);
}), me(t)) : o(e) ? function(t) {
if (!t._d) {
var e = P(t._i);
t._a = u([ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], function(t) {
return t && parseInt(t, 10);
}), me(t);
}
}(t) : a(e) ? t._d = new Date(e) : r.createFromInputFallback(t);
}(t), m(t) || (t._d = null), t));
}
function Ce(t, e, n, r, s) {
var a, c = {};
return !0 !== n && !1 !== n || (r = n, n = void 0), (o(t) && function(t) {
if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
var e;
for (e in t) if (t.hasOwnProperty(e)) return !1;
return !0;
}(t) || i(t) && 0 === t.length) && (t = void 0), c._isAMomentObject = !0, c._useUTC = c._isUTC = s, 
c._l = n, c._i = t, c._f = e, c._strict = r, (a = new v(he(Te(c))))._nextDay && (a.add(1, "d"), 
a._nextDay = void 0), a;
}
function xe(t, e, n, r) {
return Ce(t, e, n, r, !1);
}
r.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
}), r.ISO_8601 = function() {}, r.RFC_2822 = function() {};
var Ye = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = xe.apply(null, arguments);
return this.isValid() && t.isValid() ? t < this ? this : t : p();
}), Oe = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
var t = xe.apply(null, arguments);
return this.isValid() && t.isValid() ? t > this ? this : t : p();
});
function Le(t, e) {
var n, r;
if (1 === e.length && i(e[0]) && (e = e[0]), !e.length) return xe();
for (n = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](n) || (n = e[r]);
return n;
}
var Fe = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
function Ae(t) {
var e = P(t), n = e.year || 0, r = e.quarter || 0, i = e.month || 0, o = e.week || 0, s = e.day || 0, a = e.hour || 0, c = e.minute || 0, u = e.second || 0, l = e.millisecond || 0;
this._isValid = function(t) {
for (var e in t) if (-1 === Tt.call(Fe, e) || null != t[e] && isNaN(t[e])) return !1;
for (var n = !1, r = 0; r < Fe.length; ++r) if (t[Fe[r]]) {
if (n) return !1;
parseFloat(t[Fe[r]]) !== k(t[Fe[r]]) && (n = !0);
}
return !0;
}(e), this._milliseconds = +l + 1e3 * u + 6e4 * c + 1e3 * a * 60 * 60, this._days = +s + 7 * o, 
this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = de(), this._bubble();
}
function Pe(t) {
return t instanceof Ae;
}
function Ne(t) {
return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
}
function je(t, e) {
I(t, 0, 0, function() {
var t = this.utcOffset(), n = "+";
return t < 0 && (t = -t, n = "-"), n + H(~~(t / 60), 2) + e + H(~~t % 60, 2);
});
}
je("Z", ":"), je("ZZ", ""), ut("Z", st), ut("ZZ", st), ft([ "Z", "ZZ" ], function(t, e, n) {
n._useUTC = !0, n._tzm = We(st, t);
});
var He = /([\+\-]|\d\d)/gi;
function We(t, e) {
var n = (e || "").match(t);
if (null === n) return null;
var r = ((n[n.length - 1] || []) + "").match(He) || [ "-", 0, 0 ], i = 60 * r[1] + k(r[2]);
return 0 === i ? 0 : "+" === r[0] ? i : -i;
}
function Re(t, e) {
var n, i;
return e._isUTC ? (n = e.clone(), i = (w(t) || c(t) ? t.valueOf() : xe(t).valueOf()) - n.valueOf(), 
n._d.setTime(n._d.valueOf() + i), r.updateOffset(n, !1), n) : xe(t).local();
}
function Ue(t) {
return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
}
function ze() {
return !!this.isValid() && (this._isUTC && 0 === this._offset);
}
r.updateOffset = function() {};
var Ie = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ge = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function qe(t, e) {
var n, r, i, o = t, s = null;
return Pe(t) ? o = {
ms: t._milliseconds,
d: t._days,
M: t._months
} : a(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (s = Ie.exec(t)) ? (n = "-" === s[1] ? -1 : 1, 
o = {
y: 0,
d: k(s[yt]) * n,
h: k(s[vt]) * n,
m: k(s[wt]) * n,
s: k(s[bt]) * n,
ms: k(Ne(1e3 * s[kt])) * n
}) : (s = Ge.exec(t)) ? (n = "-" === s[1] ? -1 : (s[1], 1), o = {
y: Ve(s[2], n),
M: Ve(s[3], n),
w: Ve(s[4], n),
d: Ve(s[5], n),
h: Ve(s[6], n),
m: Ve(s[7], n),
s: Ve(s[8], n)
}) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (i = function(t, e) {
var n;
if (!t.isValid() || !e.isValid()) return {
milliseconds: 0,
months: 0
};
e = Re(e, t), t.isBefore(e) ? n = Ze(t, e) : ((n = Ze(e, t)).milliseconds = -n.milliseconds, 
n.months = -n.months);
return n;
}(xe(o.from), xe(o.to)), (o = {}).ms = i.milliseconds, o.M = i.months), r = new Ae(o), 
Pe(t) && l(t, "_locale") && (r._locale = t._locale), r;
}
function Ve(t, e) {
var n = t && parseFloat(t.replace(",", "."));
return (isNaN(n) ? 0 : n) * e;
}
function Ze(t, e) {
var n = {
milliseconds: 0,
months: 0
};
return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, 
n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
}
function $e(t, e) {
return function(n, r) {
var i;
return null === r || isNaN(+r) || (C(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
i = n, n = r, r = i), Be(this, qe(n = "string" == typeof n ? +n : n, r), t), this;
};
}
function Be(t, e, n, i) {
var o = e._milliseconds, s = Ne(e._days), a = Ne(e._months);
t.isValid() && (i = null == i || i, a && Nt(t, Yt(t, "Month") + a * n), s && Ot(t, "Date", Yt(t, "Date") + s * n), 
o && t._d.setTime(t._d.valueOf() + o * n), i && r.updateOffset(t, s || a));
}
qe.fn = Ae.prototype, qe.invalid = function() {
return qe(NaN);
};
var Je = $e(1, "add"), Ke = $e(-1, "subtract");
function Xe(t, e) {
var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(n, "months");
return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0;
}
function Qe(t) {
var e;
return void 0 === t ? this._locale._abbr : (null != (e = de(t)) && (this._locale = e), 
this);
}
r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
var tn = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
return void 0 === t ? this.localeData() : this.locale(t);
});
function en() {
return this._locale;
}
function nn(t, e) {
I(0, [ t, t.length ], 0, e);
}
function rn(t, e, n, r, i) {
var o;
return null == t ? Gt(this, r, i).year : (e > (o = qt(t, r, i)) && (e = o), function(t, e, n, r, i) {
var o = It(t, e, n, r, i), s = Ut(o.year, 0, o.dayOfYear);
return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), 
this;
}.call(this, t, e, n, r, i));
}
I(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), I(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), nn("gggg", "weekYear"), nn("ggggg", "weekYear"), nn("GGGG", "isoWeekYear"), 
nn("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), j("weekYear", 1), 
j("isoWeekYear", 1), ut("G", it), ut("g", it), ut("GG", K, Z), ut("gg", K, Z), ut("GGGG", et, B), 
ut("gggg", et, B), ut("GGGGG", nt, J), ut("ggggg", nt, J), mt([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, n, r) {
e[r.substr(0, 2)] = k(t);
}), mt([ "gg", "GG" ], function(t, e, n, i) {
e[i] = r.parseTwoDigitYear(t);
}), I("Q", 0, "Qo", "quarter"), F("quarter", "Q"), j("quarter", 7), ut("Q", V), 
ft("Q", function(t, e) {
e[gt] = 3 * (k(t) - 1);
}), I("D", [ "DD", 2 ], "Do", "date"), F("date", "D"), j("date", 9), ut("D", K), 
ut("DD", K, Z), ut("Do", function(t, e) {
return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
}), ft([ "D", "DD" ], yt), ft("Do", function(t, e) {
e[yt] = k(t.match(K)[0]);
});
var on = xt("Date", !0);
I("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), j("dayOfYear", 4), 
ut("DDD", tt), ut("DDDD", $), ft([ "DDD", "DDDD" ], function(t, e, n) {
n._dayOfYear = k(t);
}), I("m", [ "mm", 2 ], 0, "minute"), F("minute", "m"), j("minute", 14), ut("m", K), 
ut("mm", K, Z), ft([ "m", "mm" ], wt);
var sn = xt("Minutes", !1);
I("s", [ "ss", 2 ], 0, "second"), F("second", "s"), j("second", 15), ut("s", K), 
ut("ss", K, Z), ft([ "s", "ss" ], bt);
var an, cn = xt("Seconds", !1);
for (I("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), I(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), I(0, [ "SSS", 3 ], 0, "millisecond"), I(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), I(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), I(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), I(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), I(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), I(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), F("millisecond", "ms"), j("millisecond", 16), ut("S", tt, V), ut("SS", tt, Z), 
ut("SSS", tt, $), an = "SSSS"; an.length <= 9; an += "S") ut(an, rt);
function un(t, e) {
e[kt] = k(1e3 * ("0." + t));
}
for (an = "S"; an.length <= 9; an += "S") ft(an, un);
var ln = xt("Milliseconds", !1);
I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
var dn = v.prototype;
function hn(t) {
return t;
}
dn.add = Je, dn.calendar = function(t, e) {
var n = t || xe(), i = Re(n, this).startOf("day"), o = r.calendarFormat(this, i) || "sameElse", s = e && (x(e[o]) ? e[o].call(this, n) : e[o]);
return this.format(s || this.localeData().calendar(o, this, xe(n)));
}, dn.clone = function() {
return new v(this);
}, dn.diff = function(t, e, n) {
var r, i, o;
if (!this.isValid()) return NaN;
if (!(r = Re(t, this)).isValid()) return NaN;
switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = A(e)) {
case "year":
o = Xe(this, r) / 12;
break;

case "month":
o = Xe(this, r);
break;

case "quarter":
o = Xe(this, r) / 3;
break;

case "second":
o = (this - r) / 1e3;
break;

case "minute":
o = (this - r) / 6e4;
break;

case "hour":
o = (this - r) / 36e5;
break;

case "day":
o = (this - r - i) / 864e5;
break;

case "week":
o = (this - r - i) / 6048e5;
break;

default:
o = this - r;
}
return n ? o : b(o);
}, dn.endOf = function(t) {
return void 0 === (t = A(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"), 
this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"));
}, dn.format = function(t) {
t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
var e = G(this, t);
return this.localeData().postformat(e);
}, dn.from = function(t, e) {
return this.isValid() && (w(t) && t.isValid() || xe(t).isValid()) ? qe({
to: this,
from: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, dn.fromNow = function(t) {
return this.from(xe(), t);
}, dn.to = function(t, e) {
return this.isValid() && (w(t) && t.isValid() || xe(t).isValid()) ? qe({
from: this,
to: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, dn.toNow = function(t) {
return this.to(xe(), t);
}, dn.get = function(t) {
return x(this[t = A(t)]) ? this[t]() : this;
}, dn.invalidAt = function() {
return f(this).overflow;
}, dn.isAfter = function(t, e) {
var n = w(t) ? t : xe(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = A(s(e) ? "millisecond" : e)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf());
}, dn.isBefore = function(t, e) {
var n = w(t) ? t : xe(t);
return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = A(s(e) ? "millisecond" : e)) ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf());
}, dn.isBetween = function(t, e, n, r) {
return ("(" === (r = r || "()")[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === r[1] ? this.isBefore(e, n) : !this.isAfter(e, n));
}, dn.isSame = function(t, e) {
var n, r = w(t) ? t : xe(t);
return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = A(e || "millisecond")) ? this.valueOf() === r.valueOf() : (n = r.valueOf(), 
this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()));
}, dn.isSameOrAfter = function(t, e) {
return this.isSame(t, e) || this.isAfter(t, e);
}, dn.isSameOrBefore = function(t, e) {
return this.isSame(t, e) || this.isBefore(t, e);
}, dn.isValid = function() {
return m(this);
}, dn.lang = tn, dn.locale = Qe, dn.localeData = en, dn.max = Oe, dn.min = Ye, dn.parsingFlags = function() {
return d({}, f(this));
}, dn.set = function(t, e) {
if ("object" == typeof t) for (var n = function(t) {
var e = [];
for (var n in t) e.push({
unit: n,
priority: N[n]
});
return e.sort(function(t, e) {
return t.priority - e.priority;
}), e;
}(t = P(t)), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]); else if (x(this[t = A(t)])) return this[t](e);
return this;
}, dn.startOf = function(t) {
switch (t = A(t)) {
case "year":
this.month(0);

case "quarter":
case "month":
this.date(1);

case "week":
case "isoWeek":
case "day":
case "date":
this.hours(0);

case "hour":
this.minutes(0);

case "minute":
this.seconds(0);

case "second":
this.milliseconds(0);
}
return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), 
this;
}, dn.subtract = Ke, dn.toArray = function() {
var t = this;
return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
}, dn.toObject = function() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
};
}, dn.toDate = function() {
return new Date(this.valueOf());
}, dn.toISOString = function(t) {
if (!this.isValid()) return null;
var e = !0 !== t, n = e ? this.clone().utc() : this;
return n.year() < 0 || n.year() > 9999 ? G(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", G(n, "Z")) : G(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}, dn.inspect = function() {
if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
var t = "moment", e = "";
this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
e = "Z");
var n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = e + '[")]';
return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i);
}, dn.toJSON = function() {
return this.isValid() ? this.toISOString() : null;
}, dn.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}, dn.unix = function() {
return Math.floor(this.valueOf() / 1e3);
}, dn.valueOf = function() {
return this._d.valueOf() - 6e4 * (this._offset || 0);
}, dn.creationData = function() {
return {
input: this._i,
format: this._f,
locale: this._locale,
isUTC: this._isUTC,
strict: this._strict
};
}, dn.year = Ct, dn.isLeapYear = function() {
return Et(this.year());
}, dn.weekYear = function(t) {
return rn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}, dn.isoWeekYear = function(t) {
return rn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
}, dn.quarter = dn.quarters = function(t) {
return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
}, dn.month = jt, dn.daysInMonth = function() {
return Lt(this.year(), this.month());
}, dn.week = dn.weeks = function(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), "d");
}, dn.isoWeek = dn.isoWeeks = function(t) {
var e = Gt(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), "d");
}, dn.weeksInYear = function() {
var t = this.localeData()._week;
return qt(this.year(), t.dow, t.doy);
}, dn.isoWeeksInYear = function() {
return qt(this.year(), 1, 4);
}, dn.date = on, dn.day = dn.days = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return null != t ? (t = function(t, e) {
return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
}(t, this.localeData()), this.add(t - e, "d")) : e;
}, dn.weekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, "d");
}, dn.isoWeekday = function(t) {
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
var e = function(t, e) {
return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
}(t, this.localeData());
return this.day(this.day() % 7 ? e : e - 7);
}
return this.day() || 7;
}, dn.dayOfYear = function(t) {
var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == t ? e : this.add(t - e, "d");
}, dn.hour = dn.hours = re, dn.minute = dn.minutes = sn, dn.second = dn.seconds = cn, 
dn.millisecond = dn.milliseconds = ln, dn.utcOffset = function(t, e, n) {
var i, o = this._offset || 0;
if (!this.isValid()) return null != t ? this : NaN;
if (null != t) {
if ("string" == typeof t) {
if (null === (t = We(st, t))) return this;
} else Math.abs(t) < 16 && !n && (t *= 60);
return !this._isUTC && e && (i = Ue(this)), this._offset = t, this._isUTC = !0, 
null != i && this.add(i, "m"), o !== t && (!e || this._changeInProgress ? Be(this, qe(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
r.updateOffset(this, !0), this._changeInProgress = null)), this;
}
return this._isUTC ? o : Ue(this);
}, dn.utc = function(t) {
return this.utcOffset(0, t);
}, dn.local = function(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ue(this), "m")), 
this;
}, dn.parseZone = function() {
if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
var t = We(ot, this._i);
null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
}
return this;
}, dn.hasAlignedHourOffset = function(t) {
return !!this.isValid() && (t = t ? xe(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
}, dn.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}, dn.isLocal = function() {
return !!this.isValid() && !this._isUTC;
}, dn.isUtcOffset = function() {
return !!this.isValid() && this._isUTC;
}, dn.isUtc = ze, dn.isUTC = ze, dn.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
}, dn.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
}, dn.dates = D("dates accessor is deprecated. Use date instead.", on), dn.months = D("months accessor is deprecated. Use month instead", jt), 
dn.years = D("years accessor is deprecated. Use year instead", Ct), dn.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(t, e) {
return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
}), dn.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
if (!s(this._isDSTShifted)) return this._isDSTShifted;
var t = {};
if (g(t, this), (t = Te(t))._a) {
var e = t._isUTC ? h(t._a) : xe(t._a);
this._isDSTShifted = this.isValid() && S(t._a, e.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
});
var fn = O.prototype;
function mn(t, e, n, r) {
var i = de(), o = h().set(r, e);
return i[n](o, t);
}
function pn(t, e, n) {
if (a(t) && (e = t, t = void 0), t = t || "", null != e) return mn(t, e, n, "month");
var r, i = [];
for (r = 0; r < 12; r++) i[r] = mn(t, r, n, "month");
return i;
}
function _n(t, e, n, r) {
"boolean" == typeof t ? (a(e) && (n = e, e = void 0), e = e || "") : (n = e = t, 
t = !1, a(e) && (n = e, e = void 0), e = e || "");
var i, o = de(), s = t ? o._week.dow : 0;
if (null != n) return mn(e, (n + s) % 7, r, "day");
var c = [];
for (i = 0; i < 7; i++) c[i] = mn(e, (i + s) % 7, r, "day");
return c;
}
fn.calendar = function(t, e, n) {
var r = this._calendar[t] || this._calendar.sameElse;
return x(r) ? r.call(e, n) : r;
}, fn.longDateFormat = function(t) {
var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
return t.slice(1);
}), this._longDateFormat[t]);
}, fn.invalidDate = function() {
return this._invalidDate;
}, fn.ordinal = function(t) {
return this._ordinal.replace("%d", t);
}, fn.preparse = hn, fn.postformat = hn, fn.relativeTime = function(t, e, n, r) {
var i = this._relativeTime[n];
return x(i) ? i(t, e, n, r) : i.replace(/%d/i, t);
}, fn.pastFuture = function(t, e) {
var n = this._relativeTime[t > 0 ? "future" : "past"];
return x(n) ? n(e) : n.replace(/%s/i, e);
}, fn.set = function(t) {
var e, n;
for (n in t) x(e = t[n]) ? this[n] = e : this["_" + n] = e;
this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}, fn.months = function(t, e) {
return t ? i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Ft).test(e) ? "format" : "standalone"][t.month()] : i(this._months) ? this._months : this._months.standalone;
}, fn.monthsShort = function(t, e) {
return t ? i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Ft.test(e) ? "format" : "standalone"][t.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}, fn.monthsParse = function(t, e, n) {
var r, i, o;
if (this._monthsParseExact) return function(t, e, n) {
var r, i, o, s = t.toLocaleLowerCase();
if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
this._shortMonthsParse = [], r = 0; r < 12; ++r) o = h([ 2e3, r ]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), 
this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
return n ? "MMM" === e ? -1 !== (i = Tt.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Tt.call(this._longMonthsParse, s)) ? i : null : "MMM" === e ? -1 !== (i = Tt.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Tt.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Tt.call(this._longMonthsParse, s)) ? i : -1 !== (i = Tt.call(this._shortMonthsParse, s)) ? i : null;
}.call(this, t, e, n);
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
r = 0; r < 12; r++) {
if (i = h([ 2e3, r ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), 
n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), 
this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
if (!n && this._monthsParse[r].test(t)) return r;
}
}, fn.monthsRegex = function(t) {
return this._monthsParseExact ? (l(this, "_monthsRegex") || Rt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Wt), 
this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
}, fn.monthsShortRegex = function(t) {
return this._monthsParseExact ? (l(this, "_monthsRegex") || Rt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Ht), 
this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
}, fn.week = function(t) {
return Gt(t, this._week.dow, this._week.doy).week;
}, fn.firstDayOfYear = function() {
return this._week.doy;
}, fn.firstDayOfWeek = function() {
return this._week.dow;
}, fn.weekdays = function(t, e) {
return t ? i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : i(this._weekdays) ? this._weekdays : this._weekdays.standalone;
}, fn.weekdaysMin = function(t) {
return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
}, fn.weekdaysShort = function(t) {
return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
}, fn.weekdaysParse = function(t, e, n) {
var r, i, o;
if (this._weekdaysParseExact) return function(t, e, n) {
var r, i, o, s = t.toLocaleLowerCase();
if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = h([ 2e3, 1 ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), 
this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
return n ? "dddd" === e ? -1 !== (i = Tt.call(this._weekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Tt.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Tt.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === e ? -1 !== (i = Tt.call(this._weekdaysParse, s)) ? i : -1 !== (i = Tt.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Tt.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = Tt.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Tt.call(this._weekdaysParse, s)) ? i : -1 !== (i = Tt.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Tt.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Tt.call(this._weekdaysParse, s)) ? i : -1 !== (i = Tt.call(this._shortWeekdaysParse, s)) ? i : null;
}.call(this, t, e, n);
for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
if (i = h([ 2e3, 1 ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), 
this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), 
this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), 
this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
if (!n && this._weekdaysParse[r].test(t)) return r;
}
}, fn.weekdaysRegex = function(t) {
return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Bt), 
this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
}, fn.weekdaysShortRegex = function(t) {
return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Jt), 
this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}, fn.weekdaysMinRegex = function(t) {
return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Kt), 
this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}, fn.isPM = function(t) {
return "p" === (t + "").toLowerCase().charAt(0);
}, fn.meridiem = function(t, e, n) {
return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}, ue("en", {
dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 === k(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
}
}), r.lang = D("moment.lang is deprecated. Use moment.locale instead.", ue), r.langData = D("moment.langData is deprecated. Use moment.localeData instead.", de);
var gn = Math.abs;
function yn(t, e, n, r) {
var i = qe(e, n);
return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, 
t._bubble();
}
function vn(t) {
return t < 0 ? Math.floor(t) : Math.ceil(t);
}
function wn(t) {
return 4800 * t / 146097;
}
function bn(t) {
return 146097 * t / 4800;
}
function kn(t) {
return function() {
return this.as(t);
};
}
var Sn = kn("ms"), Mn = kn("s"), Dn = kn("m"), En = kn("h"), Tn = kn("d"), Cn = kn("w"), xn = kn("M"), Yn = kn("y");
function On(t) {
return function() {
return this.isValid() ? this._data[t] : NaN;
};
}
var Ln = On("milliseconds"), Fn = On("seconds"), An = On("minutes"), Pn = On("hours"), Nn = On("days"), jn = On("months"), Hn = On("years");
var Wn = Math.round, Rn = {
ss: 44,
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
};
var Un = Math.abs;
function zn(t) {
return (t > 0) - (t < 0) || +t;
}
function In() {
if (!this.isValid()) return this.localeData().invalidDate();
var t, e, n = Un(this._milliseconds) / 1e3, r = Un(this._days), i = Un(this._months);
e = b((t = b(n / 60)) / 60), n %= 60, t %= 60;
var o = b(i / 12), s = i %= 12, a = r, c = e, u = t, l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", d = this.asSeconds();
if (!d) return "P0D";
var h = d < 0 ? "-" : "", f = zn(this._months) !== zn(d) ? "-" : "", m = zn(this._days) !== zn(d) ? "-" : "", p = zn(this._milliseconds) !== zn(d) ? "-" : "";
return h + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? m + a + "D" : "") + (c || u || l ? "T" : "") + (c ? p + c + "H" : "") + (u ? p + u + "M" : "") + (l ? p + l + "S" : "");
}
var Gn = Ae.prototype;
return Gn.isValid = function() {
return this._isValid;
}, Gn.abs = function() {
var t = this._data;
return this._milliseconds = gn(this._milliseconds), this._days = gn(this._days), 
this._months = gn(this._months), t.milliseconds = gn(t.milliseconds), t.seconds = gn(t.seconds), 
t.minutes = gn(t.minutes), t.hours = gn(t.hours), t.months = gn(t.months), t.years = gn(t.years), 
this;
}, Gn.add = function(t, e) {
return yn(this, t, e, 1);
}, Gn.subtract = function(t, e) {
return yn(this, t, e, -1);
}, Gn.as = function(t) {
if (!this.isValid()) return NaN;
var e, n, r = this._milliseconds;
if ("month" === (t = A(t)) || "year" === t) return e = this._days + r / 864e5, n = this._months + wn(e), 
"month" === t ? n : n / 12;
switch (e = this._days + Math.round(bn(this._months)), t) {
case "week":
return e / 7 + r / 6048e5;

case "day":
return e + r / 864e5;

case "hour":
return 24 * e + r / 36e5;

case "minute":
return 1440 * e + r / 6e4;

case "second":
return 86400 * e + r / 1e3;

case "millisecond":
return Math.floor(864e5 * e) + r;

default:
throw new Error("Unknown unit " + t);
}
}, Gn.asMilliseconds = Sn, Gn.asSeconds = Mn, Gn.asMinutes = Dn, Gn.asHours = En, 
Gn.asDays = Tn, Gn.asWeeks = Cn, Gn.asMonths = xn, Gn.asYears = Yn, Gn.valueOf = function() {
return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN;
}, Gn._bubble = function() {
var t, e, n, r, i, o = this._milliseconds, s = this._days, a = this._months, c = this._data;
return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * vn(bn(a) + s), 
s = 0, a = 0), c.milliseconds = o % 1e3, t = b(o / 1e3), c.seconds = t % 60, e = b(t / 60), 
c.minutes = e % 60, n = b(e / 60), c.hours = n % 24, a += i = b(wn(s += b(n / 24))), 
s -= vn(bn(i)), r = b(a / 12), a %= 12, c.days = s, c.months = a, c.years = r, this;
}, Gn.clone = function() {
return qe(this);
}, Gn.get = function(t) {
return t = A(t), this.isValid() ? this[t + "s"]() : NaN;
}, Gn.milliseconds = Ln, Gn.seconds = Fn, Gn.minutes = An, Gn.hours = Pn, Gn.days = Nn, 
Gn.weeks = function() {
return b(this.days() / 7);
}, Gn.months = jn, Gn.years = Hn, Gn.humanize = function(t) {
if (!this.isValid()) return this.localeData().invalidDate();
var e = this.localeData(), n = function(t, e, n) {
var r = qe(t).abs(), i = Wn(r.as("s")), o = Wn(r.as("m")), s = Wn(r.as("h")), a = Wn(r.as("d")), c = Wn(r.as("M")), u = Wn(r.as("y")), l = i <= Rn.ss && [ "s", i ] || i < Rn.s && [ "ss", i ] || o <= 1 && [ "m" ] || o < Rn.m && [ "mm", o ] || s <= 1 && [ "h" ] || s < Rn.h && [ "hh", s ] || a <= 1 && [ "d" ] || a < Rn.d && [ "dd", a ] || c <= 1 && [ "M" ] || c < Rn.M && [ "MM", c ] || u <= 1 && [ "y" ] || [ "yy", u ];
return l[2] = e, l[3] = +t > 0, l[4] = n, function(t, e, n, r, i) {
return i.relativeTime(e || 1, !!n, t, r);
}.apply(null, l);
}(this, !t, e);
return t && (n = e.pastFuture(+this, n)), e.postformat(n);
}, Gn.toISOString = In, Gn.toString = In, Gn.toJSON = In, Gn.locale = Qe, Gn.localeData = en, 
Gn.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", In), 
Gn.lang = tn, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ut("x", it), ut("X", /[+-]?\d+(\.\d{1,3})?/), 
ft("X", function(t, e, n) {
n._d = new Date(1e3 * parseFloat(t, 10));
}), ft("x", function(t, e, n) {
n._d = new Date(k(t));
}), r.version = "2.22.2", e = xe, r.fn = dn, r.min = function() {
return Le("isBefore", [].slice.call(arguments, 0));
}, r.max = function() {
return Le("isAfter", [].slice.call(arguments, 0));
}, r.now = function() {
return Date.now ? Date.now() : +new Date();
}, r.utc = h, r.unix = function(t) {
return xe(1e3 * t);
}, r.months = function(t, e) {
return pn(t, e, "months");
}, r.isDate = c, r.locale = ue, r.invalid = p, r.duration = qe, r.isMoment = w, 
r.weekdays = function(t, e, n) {
return _n(t, e, n, "weekdays");
}, r.parseZone = function() {
return xe.apply(null, arguments).parseZone();
}, r.localeData = de, r.isDuration = Pe, r.monthsShort = function(t, e) {
return pn(t, e, "monthsShort");
}, r.weekdaysMin = function(t, e, n) {
return _n(t, e, n, "weekdaysMin");
}, r.defineLocale = le, r.updateLocale = function(t, e) {
if (null != e) {
var n, r, i = ie;
null != (r = ce(t)) && (i = r._config), (n = new O(e = Y(i, e))).parentLocale = oe[t], 
oe[t] = n, ue(t);
} else null != oe[t] && (null != oe[t].parentLocale ? oe[t] = oe[t].parentLocale : null != oe[t] && delete oe[t]);
return oe[t];
}, r.locales = function() {
return E(oe);
}, r.weekdaysShort = function(t, e, n) {
return _n(t, e, n, "weekdaysShort");
}, r.normalizeUnits = A, r.relativeTimeRounding = function(t) {
return void 0 === t ? Wn : "function" == typeof t && (Wn = t, !0);
}, r.relativeTimeThreshold = function(t, e) {
return void 0 !== Rn[t] && (void 0 === e ? Rn[t] : (Rn[t] = e, "s" === t && (Rn.ss = e - 1), 
!0));
}, r.calendarFormat = function(t, e) {
var n = t.diff(e, "days", !0);
return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}, r.prototype = dn, r.HTML5_FMT = {
DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
DATE: "YYYY-MM-DD",
TIME: "HH:mm",
TIME_SECONDS: "HH:mm:ss",
TIME_MS: "HH:mm:ss.SSS",
WEEK: "YYYY-[W]WW",
MONTH: "YYYY-MM"
}, r;
}, t.exports = e();
}).call(e, n(226)(t));
}
});