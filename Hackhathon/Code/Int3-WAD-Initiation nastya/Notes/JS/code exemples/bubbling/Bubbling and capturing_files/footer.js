var footer = webpackJsonp_name_([ 3 ], {
171: function(t, e, n) {
"use strict";
var o = n(386), i = n(388), l = n(218);
!function() {
o(), window.devicePixelRatio > 1 && i(), window.addEventListener("scroll", l), window.addEventListener("resize", l), 
l();
let t = document.querySelectorAll(".auto-currency");
for (let e = 0; e < t.length; e++) {
let n = t[e], o = Math.round(parseInt(n.innerHTML) / window.rateUsdRub);
n.insertAdjacentHTML("beforeEnd", `<span class="auto-currency__usd">(≈${o}$)</span>`);
}
}();
},
218: function(t, e, n) {
"use strict";
function o(t) {
var e = document.createElement("div"), n = getComputedStyle(t);
return e.style.width = t.offsetWidth + "px", e.style.marginLeft = n.marginLeft, 
e.style.marginRight = n.marginRight, e.style.position = n.position, e.style.height = t.offsetHeight + "px", 
e.style.marginBottom = n.marginBottom, e.style.marginTop = n.marginTop, e;
}
t.exports = function() {
for (var t = document.querySelectorAll("[data-sticky]"), e = 0; e < t.length; e++) {
var n = t[e];
let s = n.dataset.sticky ? JSON.parse(n.dataset.sticky) : {}, a = s.bottomLimit ? document.querySelector(s.bottomLimit) : null;
var i = s.container ? document.querySelector(s.container) : document.body;
let c = !s.minWidth || document.documentElement.clientWidth > s.minWidth;
if (n.placeholder) (n.placeholder.getBoundingClientRect().top > 0 || !c) && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null); else if (n.placeholder && a) a.getBoundingClientRect().top <= n.offsetHeight ? ("fixed" == n.style.position && (n.style.top = window.pageYOffset + "px"), 
n.style.position = "absolute") : (n.style.position = "fixed", n.style.top = 0); else if (n.getBoundingClientRect().top < 0 && c) {
if (n.style.cssText) return;
var l = n.getBoundingClientRect().left, r = s.noPlaceholder ? document.createElement("div") : o(n);
let t = n.offsetWidth;
n.after(r), i.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, n.style.left = l + "px", n.style.zIndex = 101, n.style.background = "white", 
n.style.margin = 0, n.style.width = t + "px", n.placeholder = r;
}
}
};
},
386: function(t, e, n) {
"use strict";
var o = n(387);
t.exports = function() {
var t = null, e = 8, n = 10;
function i(o) {
var i = o.clientX + e;
i + t.offsetWidth > document.documentElement.clientWidth && (i = Math.max(0, o.clientX - e - t.offsetWidth)), 
t.style.left = i + "px";
var l = o.clientY + n;
l + t.offsetHeight > document.documentElement.clientHeight && (l = Math.max(0, o.clientY - n - t.offsetHeight)), 
t.style.top = l + "px";
}
o("a,[data-tooltip]", function(e) {
if (e.target.closest) {
var n = e.target.closest("a, [data-tooltip]");
n && ("A" == n.tagName && n.closest(".toolbar") || n.classList.contains("button") || ((t = document.createElement("span")).className = "link__type", 
n.getAttribute("data-tooltip") ? t.setAttribute("data-tooltip", n.getAttribute("data-tooltip")) : t.setAttribute("data-url", n.getAttribute("href")), 
document.body.appendChild(t), i(e), document.addEventListener("mousemove", i)));
}
}, function() {
t && (document.removeEventListener("mousemove", i), t.remove(), t = null);
});
};
},
387: function(t, e, n) {
"use strict";
var o, i, l = 1 / 0, r = 1 / 0, s = Date.now(), a = .2, c = {};
document.addEventListener("mousemove", function(t) {
if (i) return;
if (Math.sqrt(Math.pow(t.pageX - l, 2) + Math.pow(t.pageY - r, 2)) / (Date.now() - s) < a) {
var e = document.elementFromPoint(t.clientX, t.clientY);
if (!e) return;
if (e != o) {
for (var n in c) {
var d = e.closest(n);
d && (i = {
elem: d,
out: c[n].out
}, c[n].over(t));
}
o = e;
}
}
l = t.pageX, r = t.pageY, s = Date.now();
}), document.addEventListener("mouseout", function(t) {
if (!i) return;
var e = t.relatedTarget;
for (;e; ) {
if (e == i.elem) return;
e = e.parentElement;
}
var n = i.out;
i = null, n(t);
}), t.exports = function(t, e, n) {
c[t] = {
over: e,
out: n
};
};
},
388: function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.querySelectorAll('figure img[src$=".png"]');
for (var e = 0; e < t.length; e++) {
let n = t[e];
n.onload = function() {
if (this.onload = null, this.src.match(/@2x.png$/)) return;
let t = new Image();
t.onload = function() {
this.width && this.height && (n.src = this.src);
}, t.src = this.src.replace(".png", "@2x.png");
}, n.complete && n.onload();
}
};
}
}, [ 171 ]);