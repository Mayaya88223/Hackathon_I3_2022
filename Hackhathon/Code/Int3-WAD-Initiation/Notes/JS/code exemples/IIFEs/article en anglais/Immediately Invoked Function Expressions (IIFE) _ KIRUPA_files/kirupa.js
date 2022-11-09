window.addEventListener("load", postLoadStuff, false);

function setActiveLink() {
	var tutorialsLink = document.getElementById("tutorialsLink");
	var jobsLink = document.getElementById("jobsLink");
	var snippetsLink = document.getElementById("snippetsLink");
	var designLink = document.getElementById("designLink");
	var forumsLink = document.getElementById("forumLink");
	var bookLink = document.getElementById("bookLink");
	
	var url = " " + window.location;
	
	if (url.indexOf("jobs") != -1)
	{
		jobsLink.classList.add("activeLink");
	}
	else if (url.indexOf("interviews") != -1)
	{
		designLink.classList.add("activeLink");
	}
	else if (url.indexOf("html5") != -1)
	{
		tutorialsLink.classList.add("activeLink");
	}
	else if (url.indexOf("motiongraphics") != -1)
	{
		designLink.classList.add("activeLink");
	}
	else if (url.indexOf("hodgepodge") != -1)
	{
		designLink.classList.add("activeLink");
	}
	else if (url.indexOf("contact.htm") != -1)
	{
		//contactLink.classList.add("activeLink");
	}
	else if (url.indexOf("/snippets/") != -1)
	{
		snippetsLink.classList.add("activeLink");
	}
	else if (url.indexOf("/book/") != -1)
	{
		bookLink.classList.add("activeLink");
	}
	else if (url.indexOf("/forum/") != -1)
	{
		forumsLink.classList.add("activeLink");
	}
	else if ((url == " //www.kirupa.com/") || (url == " //www.kirupa.com/index.html"))
	{
		tutorialsLink.classList.add("activeLink");
	}
	else if (url.indexOf("random") != -1)
	{
		designLink.classList.add("activeLink");
	}
	else
	{
		tutorialsLink.classList.add("activeLink");
	}
	
	//decide which book to show in the signature
	
	var js101Book = document.querySelector("#js101Signature");
	var animationBook = document.querySelector("#animationSignature");
	var canvasBook = document.querySelector("#canvasSignature");
	var reactBook = document.querySelector("#reactSignature");
	
	var articleType = document.querySelector("body").getAttribute("data-article");
	
	if (articleType == null) {
		if (js101Book && animationBook) {
			if (url.indexOf("sorts") != -1) {
				js101Book.style.display = "block";
				animationBook.style.display = "none";
				canvasBook.style.display = "none";
				reactBook.style.display = "none";
			} else if (url.indexOf("j") != -1) {
				js101Book.style.display = "block";
				animationBook.style.display = "none";
				canvasBook.style.display = "none";
				reactBook.style.display = "none";
			} else if (url.indexOf("react") != -1) {
				js101Book.style.display = "none";
				animationBook.style.display = "none";
				canvasBook.style.display = "none";
				reactBook.style.display = "block";
			} else {
				js101Book.style.display = "none";
				animationBook.style.display = "block";
				canvasBook.style.display = "none";
				reactBook.style.display = "none";
			}
		}
	} else if (articleType == "js") {
		js101Book.style.display = "block";
		animationBook.style.display = "none";
		canvasBook.style.display = "none";
		reactBook.style.display = "none";
	}
	
	var articleType2 = document.querySelector("body").getAttribute("data-type");

	if ((articleType2 == "canvas") || (url.indexOf("canvas") != -1)) {
			js101Book.style.display = "none";
			animationBook.style.display = "none";
			canvasBook.style.display = "block";
			reactBook.style.display = "none";
	}
}



function hideDisqus() {
	var dataHelp = document.querySelector("body").getAttribute("data-help");
	var oldComments = document.querySelector("#oldComments");
	
	if (dataHelp == null) {
		if (oldComments) {
			oldComments.style.display = "none";
		}
	}
}

var navLink = document.querySelector("#navMobile");
var navigationSlider = document.querySelector("#navigationSlider");
var mobileNavItems = document.querySelector("#mobileNavItems");

function mobileStuff() {
	navLink.addEventListener("click", slideMenu, false);
	navigationSlider.addEventListener("click", slideMenuBack, false);
	navigationSlider.addEventListener("touchmove", makeItStop, true);
}

function makeItStop(e) {
	//e.stopPropagation();
	//e.stopImmediatePropagation();
}

function slideMenu(e) {

	navigationSlider.classList.remove("hidden");
	navigationSlider.classList.add("slideRight");
	document.body.classList.add("scrollOff");
	
	document.body.addEventListener("touchmove", stopTouchMove, false);
	
	iNoBounce.enable();
}

function slideMenuBack(e) {
	navigationSlider.classList.remove("slideRight");
	document.body.classList.remove("scrollOff");
	
	document.body.removeEventListener("touchmove", stopTouchMove, false);
	
	iNoBounce.disable();
}

function stopTouchMove(e) {

}

function postLoadStuff(e) {
	//navigationSlider.style.display = "block";
	
}

var miniHeader = document.querySelector("#miniHeader");

function checkScrollPosition() {
	
	var sY = window.scrollY;
	
	if (sY > 200) {
		miniHeader.classList.add("miniVisible");
	} else {
		miniHeader.classList.remove("miniVisible");
	}
	
	
	requestAnimationFrame(checkScrollPosition);	
}
checkScrollPosition();

/*! iNoBounce - v0.1.0
* https://github.com/lazd/iNoBounce/
* Copyright (c) 2013 Larry Davis <lazdnet@gmail.com>; Licensed BSD */
(function(global) {
	// Stores the Y position where the touch started
	var startY = 0;

	// Store enabled status
	var enabled = false;

	var handleTouchmove = function(evt) {
		// Get the element that was scrolled upon
		var el = evt.target;

		// Check all parent elements for scrollability
		while (el !== document.body) {
			// Get some style properties
			var style = window.getComputedStyle(el);
			var scrolling = style.getPropertyValue('-webkit-overflow-scrolling');
			var overflowY = style.getPropertyValue('overflow-y');
			var height = parseInt(style.getPropertyValue('height'), 10);

			// Determine if the element should scroll
			var isScrollable = scrolling === 'touch' && (overflowY === 'auto' || overflowY === 'scroll');
			var canScroll = el.scrollHeight > el.offsetHeight;

			if (isScrollable && canScroll) {
				// Get the current Y position of the touch
				var curY = evt.touches ? evt.touches[0].screenY : evt.screenY;

				// Determine if the user is trying to scroll past the top or bottom
				// In this case, the window will bounce, so we have to prevent scrolling completely
				var isAtTop = (startY <= curY && el.scrollTop === 0);
				var isAtBottom = (startY >= curY && el.scrollHeight - el.scrollTop === height);

				// Stop a bounce bug when at the bottom or top of the scrollable element
				if (isAtTop || isAtBottom) {
					evt.preventDefault();
				}

				// No need to continue up the DOM, we've done our job
				return;
			}

			// Test the next parent
			el = el.parentNode;
		}

		// Stop the bouncing -- no parents are scrollable
		evt.preventDefault();
	};

	var handleTouchstart = function(evt) {
		// Store the first Y position of the touch
		startY = evt.touches ? evt.touches[0].screenY : evt.screenY;
	};

	var enable = function() {
		// Listen to a couple key touch events
		window.addEventListener('touchstart', handleTouchstart, false);
		window.addEventListener('touchmove', handleTouchmove, false);
		enabled = true;
	};

	var disable = function() {
		// Stop listening
		window.removeEventListener('touchstart', handleTouchstart, false);
		window.removeEventListener('touchmove', handleTouchmove, false);
		enabled = false;
	};

	var isEnabled = function() {
		return enabled;
	};

	// Enable by default if the browser supports -webkit-overflow-scrolling
	// Test this by setting the property with JavaScript on an element that exists in the DOM
	// Then, see if the property is reflected in the computed style
	var testDiv = document.createElement('div');
	document.documentElement.appendChild(testDiv);
	testDiv.style.WebkitOverflowScrolling = 'touch';
	var scrollSupport = window.getComputedStyle(testDiv)['-webkit-overflow-scrolling'] === 'touch';
	document.documentElement.removeChild(testDiv);

	if (scrollSupport) {
		enable();
	}

	// A module to support enabling/disabling iNoBounce
	var iNoBounce = {
		enable: enable,
		disable: disable,
		isEnabled: isEnabled
	};

	if (typeof module !== 'undefined' && module.exports) {
		// Node.js Support
		module.exports = iNoBounce;
	}
	if (typeof global.define === 'function') {
		// AMD Support
		(function(define) {
			define(function() { return iNoBounce; });
		}(global.define));
	}
	else {
		// Browser support
		global.iNoBounce = iNoBounce;
	}
}(this));

iNoBounce.disable();


//setActiveLink();
mobileStuff();
