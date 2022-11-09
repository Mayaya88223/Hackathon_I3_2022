jQuery.extend( jQuery.easing, {
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(Math.E, -10 * t/d) + 1) + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	}
});


$.fn.extend({
	disableSelection: function (exception) {
		return this
			.attr('unselectable', 'on')
			.css('MozUserSelect', 'none')
			.bind('selectstart.disableTextSelect', function(e){e.preventDefault();})
			.bind('mousedown.disableTextSelect', function(e){e.preventDefault();});
	}
});




// Analytics
window._gaq = [];
_gaq.push(['_setAccount', 'UA-9748685-8']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();






//// Dev tools
//$(function () {
//	
//	var devtools = $('<div/>', {css: {
//		position: 'absolute',
//		top: 50,
//		left: 1200,
//		color: '#fff'
//	}}).appendTo('#wrapper').html('dev tools');
//	
//	// Baseline grid
//	(function () {
//		var grid = $('<div/>', {
//			css: {
//				position: 'fixed',
//				background: 'url("/wp-content/themes/reallifejs/images/grid.png")',
//				top: 1,
//				left: 0,
//				width: '100%',
//				height: '100%',
//				zIndex: 100,
//				opacity: .2
//			}
//		}).appendTo($('body')).hide().click(function () {$(this).hide();});
//		$('<button>baseline grid</button>')
//			.appendTo(devtools)
//			.click(function () {
//				grid.show();
//			});
//	}());
//});




$(function () {
	
	
	
	var config = {
		pages: ['the-meat', 'brainchunks', 'the-real-real-life', 'evolve'],
		easing: 'easeOutQuint',
		animationDuration: 600,
		previewAnimationDuration: 150,
		smallScroll: 120,
		largeScroll: 240,
		margin: 24
	};

	
	
	// On IE version <= 7, don't even try, and show update notice instead.
	if (window.IE_VERSION && IE_VERSION <= 7) {
		if (IE_VERSION == 6) {
			var age = new Date().getFullYear() - 2001;
		}
		else if (IE_VERSION == 7) {
			var age = new Date().getFullYear() - 2006;
		}
//		else if (IE_VERSION == 8) {
//			var age = new Date().getFullYear() - 2009;
//		}
		// Remove any errors that might already be there. This is more important.
		var message = 'In order to view this site the way it was intended, please upgrade to a more modern browser. ' + 
			'Yours is about ' + age + ' years old, which is just silly. ' +
			'You wouldn\'t watch your Blu-rays on Granny\'s old black-and-white now, would you? ' +
			'I recommend you use <a href="http://www.google.com/chrome">Google Chrome</a>. ' +
			'Also, there\'s no button to remove this message. ' +
			'If you\'re at work right now, where you are not allowed to use a more modern browser, ' +
			'I do feel sorry for you, but it doesn\'t change a thing.';
		$('<div class="error">' + message + '</div>').appendTo($('#container'));
		return;
	}
	
	// jQuery won't play nice with Konqueror
	if (navigator.userAgent.match(/konqueror/i)) return;	

	
	// On IE9, at least show a message
	if (window.IE_VERSION == 9 || window.IE_VERSION == 8) {
		$('<div class="error">I\'m not particularly thrilled about you using IE' + window.IE_VERSION + ', so this message will stay right where it is. I recommend you switch to <a href="http://www.google.com/chrome">Google Chrome</a>.</div>')
			.appendTo($('#container'));
	}
	

	
	// On initial page load, some things have to be done differently
	// e.g. don't do any scrolling, so the browser can restore the last scroll position.
	// This is mainly for dev purposes to see changes without having to manually
	// scroll to the affected portion of the content.
	// In production, there aren't supposed to be actual page refreshes anyway.
	var pageLoaded = false;
	$(window).bind('newContent', function () {pageLoaded = true;});
	
		
	// Helper function to remove protocol and host from URL
	var simplifyUrl = function (url) {
		return url.replace(/^(https?\:\/)?\/[^\/]*\/?/, '/');
	};

	
	
	
	// Navigation object
	var Nav = (function () {
		return {
			goTo: function (i) {
				var $page = i instanceof jQuery ? i : $('#page-' + i); 
				// If there's already specific content showing on the page, fetch its URL and go there
				// This is necessary, since the pages are not animated directly but via URL changes
				if ($page.data('currentUrl')) {
					$.address.value($page.data('currentUrl'));
				}
				// Else go to the first piece of content on the requested page
				else {
					$page.find('.nav a').first().click();
				}
			},
			prev: function () {
				Nav.goTo(Pages.getActivePage() + 1);
			},
			next: function () {
				Nav.goTo(Pages.getActivePage() - 1);
			},
			onAddressChangeByLink: function () {
				var url = $(this).attr('href');
				// If the page has no own content, redirect immediately instead of waiting for the server to redirect,
				// so the displayed URL will be the correct (redirected) one (despite AJAX navigation)
				url = REDIRECTION_MAP[url] ? REDIRECTION_MAP[url] : url;
				url = simplifyUrl(url);
				// If the start page is requested, use its actual URL
// Removed - start page redirection is disabled, so browser history keeps working beyond entry point
//				if (url.match(/^\/?$/)) url = '/' + config.pages[0] + '/';
				return url;
			}
		};
	})();
	
	
	
	
	// Page animation object
	var Pages = (function () {
		// How long to wait before hover activates.
		// Should be long enough so moderately fast movements over hidden pages won't trigger page animations
		var hoverDelay = 40;
		// After first hover, don't delay subsequent hovers until the user leaves the nav area for long enough
		var isHoverDelayed = true;
		// Time before reactivating hover delay after leaving the nav area
		var idleTimeBeforeHoverDelayReactivation = 200;
		// Page animation duration
		var duration = config.animationDuration;
		// Duration of the little sliding animation when hovering non-active pages
		var teaseDuration = config.previewAnimationDuration;
		var easing = config.easing;
		var activePage = 0;
		// How far the pages overlap
		var offset = parseInt($('#page-0').css('left')) / (config.pages.length - 1);
		var teaseWidth = $('.side').width() - offset;
		var lightboxTeaseWidth = 6;
		var containerWidth = $('#container').width();
		var pageWidth = $('div.page').first().width();
		var activeCodeboxIndex;
		var i, j;

		
		// Activate hover animations
		var setupPreviews = function () {
			
			var delayReactivationTimeout;
			$('div.page').not('.lightbox').css({cursor: 'default'}).unbind('click');
			
			var setupPageHover = function (i, onenter, onleave) {
				var timeout, isTimeoutActive = false;
				var $page = $('#page-' + i);
				$page.hover(function () {
					var self = this;
					var _action = function () {
						if ( ! onenter.call(self, i)) return;
						isHoverDelayed = false;
						isTimeoutActive = false;
						clearTimeout(delayReactivationTimeout);
					};
					if (isHoverDelayed) {
						isTimeoutActive = true;
						timeout = setTimeout(_action, hoverDelay);
					}
					else {
						_action();
					}
				}, function () {
					var self = this;
					var _action = function () {onleave.call(self, i);};
					if (isTimeoutActive) {
						clearTimeout(timeout);
						return;
					}
					if (isHoverDelayed) {
						setTimeout(_action, hoverDelay);
					}
					else {
						delayReactivationTimeout = setTimeout(function () {
							isHoverDelayed = true;
						}, idleTimeBeforeHoverDelayReactivation);
						_action();
					}
				});
			};
			
			var _movePages = function (firstPage, lastPagePlusOne, type) {
				var direction = firstPage < activePage ? -1 : 1;
				var offset = (type == 'preview') ? teaseWidth : 0;
				var currentPage, destination;
				for (var j = firstPage; j < lastPagePlusOne; j++) {
					currentPage = $('#page-' + j);
					destination = currentPage.data('position') + direction * offset;
					currentPage.data({destination: destination});
				}
				movePages(teaseDuration);
				$(this).trigger(type);
			};

			
			for (i = 0; i < config.pages.length; i++) {
			
				var $page = $('#page-' + i);

				// All pages except the active one are clickable as a whole
				if (i != activePage) {
					$page.css({cursor: 'pointer'}).click((function (i) {
						return function () {Nav.goTo(i);};
					})(i));
				}
				
				// All pages potentially move lightbox when hovered
				// Whether this actually happens or not depends on the state of the lightbox
				setupPageHover(i, function (i) {
					if ( ! lightbox.data('active') || Pages.getIndex($(this)) < activePage) return false;
					lightbox.data({destination: lightbox.data('position') + teaseWidth});
					movePages(teaseDuration);
					return true;
				}, function (i) {
					if ( ! lightbox.data('active') || Pages.getIndex($(this)) < activePage) return false;
					lightbox.data({destination: lightbox.data('position')});
					movePages(teaseDuration);
					return true;
				});

				// Pages right of the active one
				if (i < activePage) {
					setupPageHover(i, function (i) {
						_movePages.call(this, i, activePage, 'preview');
						return true;
					}, function (i) {
						_movePages.call(this, i, activePage, 'unpreview');
						return true;
					});
				}
				// Pages left of the active one
				else if (i > activePage) {
					setupPageHover(i, function (i) {
						_movePages.call(this, activePage, i, 'preview');
						return true;
					}, function (i) {
						_movePages.call(this, activePage, i, 'unpreview');
						return true;
					});
				}
			}
		};
		
		// Start the actual page animation
		var movePages = function (duration, callback) {
			$('div.page').each(function () {
				if (parseInt($(this).css('left')) == $(this).data('destination')) {
					$(this).stop();
					return;
				}
				$(this).stop().animate({left: $(this).data('destination')}, duration, easing, callback);
			});
		};
		
		
		// Do the actual site height adjustment
		var setSiteHeight = function (newHeight) {
			$('html, body, #container').css({minHeight: newHeight});
			// Maximize sidebar heights, so they can be used for hovering regardless of scroll position
			$('div.page .side').each(function () {
				$(this).css({height: newHeight});
			});
			$('.lightbox').height(newHeight);
		};

		
		
		// Add lightbox page
		var lightbox = $('<div class="page lightbox"></div>').css({
			left: containerWidth,
			cursor: 'pointer',
			width: $('div.page').first().width() - offset
		}).appendTo('#container');
		var lightboxContainer = $('<div class="lightbox-container"></div>').appendTo(lightbox);
		// Close lightbox on URL change
		// Remove from flow, so other handlers will know that the lightbox has been active
		$.address.change(function() {setTimeout(Pages.closeLightbox, 0);});
		// Close light box on left, right, space, esc, tab, enter keyboard actions
		$(document).keydown(function (event) {
			if ( ! Pages.isLightboxActive()) return;
			if ($.inArray(event.keyCode, [37, 39, 32, 27, 9, 13]) == -1) return;
			event.preventDefault();
			// If the prevention of accidental lightbox closes is on, only close it by hitting esc
			if (Pages.preventAccidentalLightboxClose && event.keyCode != 27) return;
			// Use timeout, so other keyboard actions will run first and can thus be prevented
			setTimeout(function () {
				Pages.closeLightbox();
			}, 0);
		});
		// Close lightbox on click
		lightbox.click(function () {
			if ( ! Pages.preventAccidentalLightboxClose) {
				Pages.closeLightbox();
			}
		});
		

		return {
			goTo: function (page) {
				if (typeof page == 'string') {
					page = $.inArray(page, config.pages);
				}
				if (page < 0 || page >= config.pages.length) return;
				activePage = page;
				var $activePage = Pages.getActivePageElement();
				// Remove hover bindings, so hover animations won't interfere with the main page navigation that's about to start
				$('div.page').unbind('mouseenter mouseleave');
				// Calculate destination coordinates for all pages
				for (i = 0; i < config.pages.length; i++) {
					var currentPage = $('#page-' + i);
					// Destination data will be used by the animating routine
					if (i < page) currentPage.data({destination: containerWidth - (i + 1) * offset});
					else currentPage.data({destination: (config.pages.length - i - 1) * offset});
					// Position data stores destination redundantly, since destination data might be overwritten by the hovering animation
					currentPage.data({position: currentPage.data('destination')});
				}
				// Start the actual animation
				movePages(duration);
				// Reset hover bindings
				// The page animation is probably still running, but that's ok —
				// the hover animation uses the stored destination data, so hovering moving pages won't cause any conflicts
				setupPreviews();
				// Set title, in case this is just a page animation without content refresh
				// If new content is going to be loaded into the page in the next step, the title will be overwritten anyway
				// Don't use address.title; it adds a hash to the URL in Firefox, which causes all sorts of problems
				document.title = $activePage.data('title');
				$activePage.trigger('pageActivation');
			},
			getActivePage: function () {
				return activePage;
			},
			getActivePageElement: function () {
				return $('#page-' + activePage);
			},
			getIndex: function ($page) {
				return $page.index('div.page');
			},
			getByIndex: function (index) {
				return $('#page-' + index);
			},
			openLightbox: function (html, index) {
				var $activePage = Pages.getActivePageElement();
				$activePage.trigger('beforeLightboxOpen');
				// Set active codebox index, which might be used for tracking purposes
				if (typeof index != 'undefined') {
					activeCodeboxIndex = index;
				}
				// Populate lightbox
				lightboxContainer.html(html);
				// Open lightbox
				var destination = (config.pages.length - activePage) * offset;
				lightbox.css({zIndex: Pages.getActivePageElement().css('zIndex'), cursor: 'pointer'});
				lightbox.data({destination: destination, position: destination, active: true});
				movePages(duration);
				Pages.adjustSiteHeight(lightbox);
				// Clicks on active page should close the lightbox
				// (Clicks on other pages will trigger navigation events anyway, which will close the lightbox)
				// Use timeout, since the click that opened the lightbox might still be propagating to the active page
				setTimeout(function () {$activePage.css({cursor: 'pointer'}).click(Pages.closeLightbox);}, 0);
				$activePage.trigger('lightboxOpen');
			},
			closeLightbox: function () {
				if ( ! Pages.isLightboxActive()) return;
				lightbox.data({destination: containerWidth, position: containerWidth, active: false});
				movePages(duration);
				Pages.getActivePageElement().css({cursor: 'default'}).unbind('click');
				Pages.adjustSiteHeight(Pages.getActivePageElement());
				Pages.getActivePageElement().trigger('lightboxClose');
				Pages.preventAccidentalLightboxClose = false;
			},
			preventAccidentalLightboxClose: false,
			teaseLightbox: function () {
				var position = (config.pages.length - activePage - 1) * offset + pageWidth;
				var destination = position - lightboxTeaseWidth;
				lightbox.css({zIndex: Pages.getActivePageElement().css('zIndex')});
				lightbox.data({destination: destination, position: position});
				movePages(teaseDuration);
			},
			unteaseLightbox: function () {
				lightbox.data({destination: lightbox.data('position')});
				movePages(teaseDuration);
			},
			teasePage: function (page) {
				var $page = $('#page-' + page);
				var destination = $page.data('position') - lightboxTeaseWidth;
				$page.data({destination: destination});
				movePages(teaseDuration);
			},
			unteasePage: function (page) {
				var $page = $('#page-' + page);
				$page.data({destination: $page.data('position')});
				movePages(teaseDuration);
			},
			isLightboxActive: function () {
				return !! lightbox.data('active');
			},
			// For animation purposes, pages are taken out of the HTML flow, so the height of their container
			// has to be adjusted manually for the scrollbars to show when content overflows
			adjustSiteHeight: function ($page) {
				var isLightbox = $page.hasClass('lightbox');
				var contentContainer = isLightbox ? $page.find('.lightbox-container') : $page.find('.main');
				var currentHeight = $('#container').height();
				var newHeight = contentContainer.outerHeight() + 200;
				// If this is about the lightbox, never make the page *smaller*, because that would mess with
				// the scroll position of the page outside of the lightbox
				if (isLightbox) {
					newHeight = Math.max(newHeight, currentHeight);
					// Since the scroll position isn't changed, the contents have to be put where they can actually be seen
					lightboxContainer.css({paddingTop: Scrolling.getScrollTop()});
				}
				// Delay the actual height adjustment, so scrolling animations can start before
				setTimeout(function () {
					if (Scrolling.isScrolling() && newHeight < currentHeight) {
						$(window).bind('afterScroll', function () {
							$(window).unbind('afterScroll');
							setSiteHeight(newHeight);
						});
					}
					else {
						setSiteHeight(newHeight);
					}
				}, 0);
			},
			getActiveCodeboxIndex: function () {
				return activeCodeboxIndex;
			}
		};
	})();
	
	
	
	
	// Content handling object
	var Content = (function () {
		var requestedUrl, currentUrl;
		var currentRequest;
		var cache = {};
		// Make internal links page-refresh free, and open external links in new tab
		var activateLinks = function ($page) {
			var links = $page.find('.main a');
			var mailLinks = links.filter(function () {
				return ($(this).attr('href').match('^mailto'));
			});
			var internalLinks = links.filter(function () {
				return ($(this).attr('href').match(new RegExp('^(http://)?/?'+HOSTNAME)) || ! $(this).attr('href').match('^http|^mailto'));
			});
			links.not(internalLinks).not(mailLinks).attr({target: '_blank'});
			internalLinks
				.addClass('internal')
				.address(Nav.onAddressChangeByLink)
				.click(function (e) {e.stopPropagation();});
		};

		// Put the requested content into the DOM
		var populate = function (page, url) {
			var $page = $('#page-' + page);
			// If this is the initial page load, remove the original content, so it won't mess with scroll heights
			if ( ! pageLoaded) {
				$('#page-0 .main').html('');
			}
			// If the requested content is already showing, just trigger the content change event
			if (requestedUrl == $page.data('currentUrl')) {
				currentUrl = requestedUrl;
				$page.trigger('newContent');
				return;
			}
			// If there has been another request in the meantime, don't do anything
			if (url != requestedUrl) return;
			var $data = $(cache[requestedUrl]);
			var content = $data.find('.main').html();
			var titleMatches = cache[requestedUrl].match(/<title>(.*?)<\/title>/);
			// Decode HTML entities in the title, before putting it in the actual title bar
			var title = $('<div/>').html(titleMatches[1]).text();
			$page.find('.main').html(content);
			// Don't use address.title; it adds a hash to the URL in Firefox, which causes all sorts of problems
			document.title = $('<div/>').html(title).text();
			$page.data({title: title});
			currentUrl = requestedUrl;
			// Activate new links
			activateLinks($page);
			// Make each page remember its current content, so when clicking on an inactive page,
			// the URL of the last shown content is available
			// (It's not enough to simply move the other pages — every request needs an actual URL for deep linking and history purposes)
			$page.data({currentUrl: currentUrl});
			// The container has hidden overflow in order to make the page animations work,
			// so make sure that it's high enough to show all the content
			Pages.adjustSiteHeight($page);
			// Trigger an event, so whatever else needs to be done after content has been added to the DOM can be done
			$page.trigger('newContent');
		};
		// Give the navigational elements CSS classes reflecting their current state (active/inactive)
		var updateNav = function ($page) {
			// If there's a page argument, that means that that page is currently hovered and should show its active state
			// Else this is just a regular navigation update after opening a page
			var url = ($page && $page.data('currentUrl')) ? $page.data('currentUrl') : requestedUrl;
			var activeLink = $('.nav a[href$="' + url + '"]').first();
			// If this is not a hovered page, update the navigation on all the pages
			if ( ! $page) $page = $('div.page');
			if ( ! activeLink.length) activeLink = $('#page-0 .nav a').first();
			$page.find('.nav li').removeClass('current_page_item current_page_ancestor');
			activeLink.closest('li').addClass('current_page_item');
			activeLink.closest('li').parentsUntil('.nav', 'li').addClass('current_page_ancestor');
		};
		return {
			load: function (url) {
				var $page = Pages.getActivePageElement();
				requestedUrl = url;
				Pages.getActivePageElement().trigger('beforeNewContent');
				updateNav();
				// If the URL is supposed to be redirected to one that already has content cached, use that cached content
				// This is only useful for the start page, since its actual URL isn't listed in the redirection map
				var fullUrl = window.location.protocol + '//' + window.location.hostname + url;
				if ( ! cache[url] && cache[REDIRECTION_MAP[fullUrl]]) {
					cache[url] = cache[REDIRECTION_MAP[fullUrl]];
				}
				// If the requested content isn't cached yet, fetch it
				if ( ! cache[url]) {
					var page = Pages.getActivePage();
					// Abort any former requests
					if (currentRequest) {
						currentRequest.abort();
					}
					// Trigger load event
					Pages.getActivePageElement().trigger('loadContent');
					// Set AJAX flag manually, since the HTTP_X_REQUESTED_WITH header seems not to be reliable in IE
					currentRequest = $.ajax({
						url: url,
						data: {ajax: true},
						complete: function (jqXHR) {
							if (jqXHR.statusText != 'error' && jqXHR.statusText != 'success') return;
							var data = jqXHR.responseText;
							currentRequest = null;
							cache[url] = data;
							populate(page, url);
							$page.trigger('afterLoadContent');
							if (jqXHR.statusText == 'error') {
								$page.trigger('loadError');
								$('.nav').hide();
								$('div.page').unbind('click mouseenter mouseleave').css({cursor: 'default'});
								$('.main a').unbind('click');
							}
						}
					});
				}
				else {
					populate(Pages.getActivePage(), url);
				}
			},
			updateNav: function (e) {
				var parameter = e ? $(this) : null;
				updateNav(parameter);
			},
			getCurrentUrl: function () {
				return currentUrl;
			},
			getRequestedUrl: function () {
				return requestedUrl;
			}
		};
	})();

	
	


	
	
	
	
	
	
	
	
	
	
	
	
	// Set up PRF-navigation
	(function () {
		
		// Hide overflow, so pages on the right will be cut off
		$('#container').css({overflow: 'hidden'});
		
		// Split the menu up in parts and distribute them among the pages
		var nav = $('.nav').remove();
		$('div.page').each(function (i) {
			var sidebar = $('#page-' + i + ' .page-container .side');
			nav.clone().appendTo(sidebar);
			sidebar.find('.nav').children('ul').each(function (j) {
				if (i != j) {
					$(this).remove();
				}
			});
		});
		
		
		// Header and sidebar links won't trigger page refresh
		$('.nav a, .breadcrumb a, h1 a, .internal a')
			.address(Nav.onAddressChangeByLink)
			.click(function (e) {
				// Don't bubble clicks — there might be click listeners on the whole page, and we don't want more than one to fire
				e.stopPropagation();
			});
		
		
		// Tease destination of internal links
		$('a').live('mouseover', function () {
			if ( ! $(this).data('page')) return;
			Pages.teasePage($(this).data('page'));
		});
		$('a').live('mouseout', function () {
			if ( ! $(this).data('page')) return;
			Pages.unteasePage($(this).data('page'));
		});
		
		// Set base directory for history API
		$.address.state('/');
		
		// Update contents after URL change
		$.address.change(function(e) {
			// If the URL is empty (start page is being requested), redirect to the start page's full URL.
			// Make sure that the URL is actually empty,
			// and doesn't just look empty because it hasn't been redirected to hash/HTML5-state yet.
			// $.address.baseURL() will be non-trivial when deep link has not yet been redirected.
// Redirecting removed, since it might remove ability to use browser history beyond the entry point
//			if ( ! e.pathNames.length && simplifyUrl($.address.baseURL()) == '/') {
//				$.address.value(config.pages[0] + '/');
//				return;
//			}
			// Animate pages
			Pages.goTo(e.pathNames.length ? e.pathNames[0] : 0);
			// Fetch requested content
			Content.load(e.value);
		});
		

		// Add keyboard navigation
		// Cursor keys for page-left-right
		$(document).keydown(function (event) {
			if ($.inArray(event.keyCode, [37, 39]) == -1) return;
			event.preventDefault();
			switch (event.keyCode) {
			    case 37: Nav.prev(); break;
			    case 39: Nav.next(); break;
			}
		});			
		
	})();

	
	
	
	
	
	
	// Code stuff
	(function () {
		var defaultClass = 'default';
		var lightboxClass = 'vibrant';
		var codeboxMaxHeight = 750;
		var overflowHeight = 724;
		var lightbox = $('.lightbox');
		var lightboxContainer = $('.lightbox .lightbox-container');
		
		$('div.page').bind('newContent', function () {
			
			var codeboxes = $(this).find('.codecolorer-container').not('.output');
			
			codeboxes.each(function () {
				if ($(this).height() > codeboxMaxHeight) {
					$(this).addClass('overflown');
				}
			});
			
			//Readjust site height, since some code boxes might now be overflown
			Pages.adjustSiteHeight(Pages.getActivePageElement());
			
			codeboxes
				.css({cursor: 'pointer', overflow: 'hidden'})
				.hover(Pages.teaseLightbox, Pages.unteaseLightbox)
				.click(function () {
					var iframe, output, $this = $(this);
					if ($this.closest('.lightbox').length) return;
					var code = $this.clone().removeClass(defaultClass).removeClass('focus').addClass(lightboxClass);
					var executable = ($this.data('executable') || $this.data('url'));
					var editable = !! $this.data('executable');
					var fullPage = !! $this.data('url');
					var index = codeboxes.index($(this));
					Pages.openLightbox(code, index);
					var codeContainer = $('.lightbox .codecolorer-container');
					codeContainer.css({
						height: 'auto',
						left: 0
					});
					// IE < 9's innerHTML doesn't respect line breaks, so replace them manually 
					var nonStandardNewlines = !! codeContainer.html().match(/\r/);
					codeContainer.html(codeContainer.html().replace(/<br>/ig, '[[REALLIFEJS LINE BREAK]]<br>'));

					// Set up CodeMirror
					// If after the line numbers there's a "<", this is probably HTML
					var isHtml = fullPage || $('.lightbox .codecolorer-container').text().match(/^\d*</);
					var codeMirror = CodeMirror(function (el) {
						codeContainer.replaceWith(el);
					}, {
						value: $('.lightbox .codecolorer').text().replace(/\[\[REALLIFEJS LINE BREAK\]\]/g, nonStandardNewlines ? '\n' : ''),
						readOnly: ! editable,
						theme: 'night',
						lineNumbers: true,
						matchBrackets: true,
						mode: isHtml ? 'htmlmixed' : 'javascript'
					});
					var codebox = $('.lightbox .CodeMirror');
					
					// Add headline
					lightboxContainer.prepend('<h2>The Code:</h2>');

					
					// If the example isn't just a snippet but a whole example page,
					// set up a live example page in an iframe
					if ($this.data('url')) {
						// Add results display
						lightboxContainer.prepend('<div class="reset">Reset</div>');
						iframe = $('<iframe />', {
							src: $this.data('url')
						}).prependTo(lightboxContainer);
						lightboxContainer.prepend('<h2>The Result:</h2>');
						// Reset iframe button
						lightboxContainer.find('.reset').click(function () {
							iframe.attr({src: $this.data('url')});
							return false;
						});
					}
					
					// If this is an executable snippet, make it so
					else if ($this.data('executable')) {
						// Since you can make changes to the code, don't risk losing them
						// by unintentionally deactivating the lightbox
						$('.lightbox').css({cursor: 'default'});
						Pages.preventAccidentalLightboxClose = true;
						
						codebox
							.click(function (e) {return false;})
							.css({cursor: 'text'})
							.keydown(function (e) {
								e.stopPropagation();
							});
						
						// Add results display
						lightboxContainer.prepend('<div class="execute">Run The Code!</div>');
						output = $('<div class="console"/>').prependTo(lightboxContainer);
						lightboxContainer.prepend('<h2>The Result:</h2>');
						// Execute the code button
						lightboxContainer.find('.execute').click(function () {
							// Track the code execution
							_gaq.push(['_trackEvent', 'Codebox', 'Execute', Content.getCurrentUrl() + Pages.getActiveCodeboxIndex()]);
							var print = function (str, type) {
								type = type ? type + ': ' : '';
								setTimeout(function () {
									var out = '<p>' + type + str + '</p>';
									output.html(output.html() + out);
									Pages.adjustSiteHeight(lightbox);
								}, 0);
							};
							// Overwrite alert, so alert output goes to output div
							var alert = function (str) {
								print(str, 'Alert');
							};
							var error = function (str) {
								print(str, 'Error');
							};
							var log = function (str) {
								print(str, 'Log');
							};
							var console = {error: error, log: log};
							(function () {
								try {
									output.html('');
									print('Script started ...');
									eval(codeMirror.getValue());
								} catch (e) {
									console.error(e);
								}
							})();
							return false;
						});
//						// Clear the console button
//						lightboxContainer.find('.clear').click(function () {
//							output.html('');
//						});
					}
					
					Pages.adjustSiteHeight($('.lightbox'));
				});
			
		});
		
	})();

	
	



	// Add shadows
	$('div.page').append('<div class="shadow"></div>');
	

	
	// Add code info
	$(window).bind('newContent', function () {
		$('.codecolorer-container').each(function () {
			if ($(this).data('executable') || $(this).data('url')) {
				$(this).append($('<div class="code-info">RUN ME</div>'));
			}
		});
	});



	// Vegetarian heading
	$(window).bind('newContent', function () {
		if ( ! Content.getCurrentUrl().match(/\//)) return;
		$('h1').first()
			.css({cursor: 'text'})
			.attr({contentEditable: true})
			.keydown(function (e) {
				var $this = $(this);
				e.stopPropagation();
				// Blur on enter
				if (e.keyCode == 13) {
					e.preventDefault();
					$this.blur();
					return;
				}
				setTimeout(function () {$('.nav li a').first().text($this.text());}, 0);
			});
	});
	
	
	
	

	
	
	// Logo loading animation
	(function () {
		var delay = 50;
		var smearOffset = 1;
		var smearRemoveDuration = 300;
		var logoSmearRemoveDuration = 3000;
		var fadeoutDuration = 1000;
		var cycleDuration = 1000;
		var totalFrames = 12;
		var totalLetters = 10;
		var letterOpacity = .1;
		var frameHeight = $('.logo').height();
		var letterFrames = [];
		for (var i = 2; i < totalFrames; i++) {
			letterFrames.push(i);
		}
		var isLoading = 0;
		
		var Loader = function ($logo) {
			
			$logo.wrap($('<div class="logo-wrapper" />').css({position: 'absolute'}));
			var $wrapper = $logo.parent();
			var position = {left: parseInt($logo.css('left')), top: parseInt($logo.css('top'))};
			var cycleTimeout;
			
			var _addFrame = function (i, offsetX, offsetY) {
				offsetX = offsetX || 0;
				offsetY = offsetY || 0;
				$frame = $logo.clone().css({
					backgroundPosition: '0 ' + (-i * frameHeight) + 'px',
					display: 'block',
					left: position.left + offsetX,
					top: position.top + offsetY
				}).appendTo($wrapper);
				return $frame;
			};
			
			var shuffleLetters = function () {
				//letterFrames.sort(function () {return Math.random() - .5;});
			};
			
			var addFrame = function (i, isLogo) {
				var _smearRemoveDuration = isLogo ? logoSmearRemoveDuration : smearRemoveDuration;
				var opacity = isLogo ? 1 : letterOpacity;
				var easing = isLogo ? 'easeOutQuint' : 'linear';
				for (var j = -smearOffset; j <= smearOffset; j += 2 * smearOffset) {
					for (var k = -smearOffset; k <= smearOffset; k += 2 * smearOffset) {
						_addFrame(i, j, k)
							.css({opacity: opacity})
							.animate({opacity: 0}, _smearRemoveDuration, easing, function () {
								$(this).remove();
							});
					}					
				}
				return _addFrame(i).css({opacity: opacity});
			};
			
			var addLogo = function () {
				addFrame(0, true);
			};

			$logo.closest('div.page')
				.bind('loadContent', function () {
					// Don't show loading animation on initial load of main page, since the contents
					// are already there from the original request and without any AJAX calls
					if ( ! pageLoaded && Pages.getActivePage() == 0) return;
					// If the animation is already running from a previous request, don't start it again
					if (isLoading) return;
					isLoading++;
					$wrapper.html('');
					(function addLetters() {
						var i = 0;
						shuffleLetters();
						(function addLetter() {
							if ( ! isLoading) return;
							addFrame(letterFrames[i]).animate({opacity: 0}, fadeoutDuration, function () {
								$(this).remove();
							});
							if (++i == totalLetters) return;
							setTimeout(addLetter, delay);
						}());
						if (isLoading) {
							cycleTimeout = setTimeout(addLetters, cycleDuration);
						}
					}());
				})
				.bind('afterLoadContent', function (e) {
					if ( ! isLoading) return;
					isLoading--;
					addLogo();
					clearTimeout(cycleTimeout);
				});
		};
		
		$('.logo').each(function (){
			new Loader($(this));
		});
	}());

	
	
	// Update navigation on preview
	(function () {
		var timeout;
		$('div.page').bind('preview', Content.updateNav);
		$('div.page').bind('unpreview', function () {
			// Make sure to call updateNav without parameters, so navigation is updated on all pages
			Content.updateNav();
		});
	})();

	

	
	
	
	// Tabbing through links
	var Tabbing = (function () {
		var selector = 'a, .codecolorer-container:not(.output)';
		var teaseWidth = 24;					
		var setTabindices = function () {
			var tabindex = 1;
			var $page = Pages.getActivePageElement();
			$(selector).attr({tabindex: null});
			$page.find(selector).each(function () {
				$(this).attr({tabindex: tabindex++});
			});
		};
		var focus = function ($el) {
			$el.addClass('focus');
			if (isNavItem($el)) return;
			$el.animate({left: - teaseWidth}, config.previewAnimationDuration, config.easing);
		};
		var blur = function ($el) {
			if ( ! $el) $el = $('.focus');
			$el.removeClass('focus');
			if (isNavItem($el)) return;
			$el.animate({left: 0}, config.previewAnimationDuration, config.easing);
		};
		var isNavItem = function ($el) {
			return !! $el.parents('.nav').length;
		};
		// Set tabindices immediately, in case user tabs before content change event has been triggered
		setTabindices();
		// On content change, set tabindices to make currently active page tabbable
		$(window).bind('newContent', setTabindices);
		$(window).bind('pageActivation', function () {blur();});
		$(window).bind('scrollToTop', function () {
			if (isNavItem($('.focus'))) return;
			blur();
		});
		// Add keyboard navigation
		$(document).keydown(function (e) {
			// Tab
			if (e.keyCode == 9) {
				e.preventDefault();
				// If the lightbox is active, tab closes ist. Don't do anything else.
				if (Pages.isLightboxActive()) return;
				// Get all visible tabbable items on current page, sorted by tabindex
				var items = Pages.getActivePageElement().find(selector).filter(function () {return $(this).attr('tabindex') && $(this).is(':visible');});
				items.sort(function (a, b) {return $(a).attr('tabindex') - $(b).attr('tabindex');});
				// Tab is tabindex up, Shift-Tab is tabindex down
				var tabindexDelta = e.shiftKey ? items.length - 1 : 1;
				var oldActive = $('.focus');
				var newActive = $(oldActive.length ? items[(items.index(oldActive) + tabindexDelta) % items.length] : items[0]);
				// Focus the item the user has just tabbed to
				// Use a custom class instad of actually focussing, which would mess with the scrolling
				blur(oldActive);
				focus(newActive);
				// If it's a nav item, move nav down to scroll position
				if ((newActive).parents('.nav').length) {
					$('#nav-notification').trigger('mouseenter');
				}
				// Else scroll to item
				else if (! Scrolling.isInViewport(newActive, config.margin * 2)) {
					// If the item is fully visible when site is scrolled to the very top, do that
					if (newActive.offset().top + newActive.height() + config.margin * 2 < $(window).height()) {
						Scrolling.scrollTo(0);
					}
					// Else scroll to item
					else {
						Scrolling.scrollTo(newActive.offset().top - config.margin * 2);
					}
				}
			}
			// Enter
			else if (e.keyCode == 13) {
				e.preventDefault();
				if (Pages.isLightboxActive()) return;
				$('.focus').click();
			}
		});
		
		return {
		};
	})();
	
	

	
	// Scrolling
	var Scrolling = (function () {
		// When starting scrolling animation, put the destination in here, so other components
		// can act on the final position before the animation is actually done
		var scrollTop;
		// Each content's last scroll position
		var positions = {};
		// Flag to check whether contents are currently scrolling, in order to prevent the saving
		// of scroll positions that are just animation tween positions, and not the original ones
		var isScrolling = false;
		var isScrollingToTop = false;
		var scrollTo = function (_scrollTop, callback) {
			if ( ! pageLoaded) return;
			isScrolling = true;
			scrollTop = _scrollTop;
			$('html, body').stop(true, true).animate({scrollTop: scrollTop}, config.animationDuration, config.easing, function () {
				isScrolling = false;
				if (callback) callback();
				$(window).trigger('afterScroll');
			});
		};
		var scrollBy = function (height) {
			scrollTo(Scrolling.getScrollTop() + height);
		};
		var scrollToTop = function () {
			if (Scrolling.getScrollTop() == 0) return;
			$(window).trigger('scrollToTop');
			isScrollingToTop = true;
			scrollTo(0, function () {
				isScrollingToTop = false;
			});
		};
		var savePosition = function () {
			// Don't store lightbox position to the actual page's URL
			// (lightbox doesn't have its own URL, and, also, saving lightbox position wouldn't make sense as its content changes every time)
			if (Pages.isLightboxActive()) return;
			var url = Content.getCurrentUrl();
			positions[url] = Scrolling.getScrollTop();
			//console.log('save ' + url + ' ' + positions[url]);
		};
		var restorePosition = function () {
			var url = Content.getRequestedUrl();
			var _scrollTop = positions[url] ? positions[url] : 0;
			scrollTo(_scrollTop);
			//console.log('restore ' + url + ' ' + positions[url]);
		};
		// Manage scroll position between page activations and lightbox (de-)activation
		$(window).bind('beforeNewContent beforeLightboxOpen', function () {
			savePosition();
		});
		$(window).bind('beforeNewContent lightboxClose', function () {
			restorePosition();
		});
		// Mousewheel scrolling action should never be blocked by animations
		$(document).bind('mousewheel', function (e) {
			$('html, body').stop(true, true);
		});
//		// Smooth scrolling
//		$(window).bind('mousewheel', function (e, delta) {
//			e.preventDefault();
//			scrollBy(( - delta) * config.smallScroll);
//		});
		$(document).keydown(function (e) {
			// Up, down, pageUp, pageDown, home, end, space
//			if ($.inArray(e.keyCode, [38, 40, 33, 34, 36, 35, 32]) == -1) return;
			if ($.inArray(e.keyCode, [36, 35]) == -1) return;
			e.preventDefault();
			switch (e.keyCode) {
//			    case 38: scrollBy( - config.smallScroll); break;
//			    case 40: scrollBy(config.smallScroll); break;
//			    case 33: scrollBy( - ($(window).height() - 50)); break;
//			    case 34: scrollBy($(window).height() - 50); break;
			    case 36: scrollToTop(); break;
			    case 35: scrollTo($(document).height() - $(window).height()); break;
//			    case 32: scrollBy($(window).height() - 50); break;
			}
		});
		
		return {
			scrollToTop: function () {
				scrollToTop();
			},
			scrollTo: function (scrollTop, callback) {
				scrollTo(scrollTop, callback);
			},
			getScrollTop: function () {
				return isScrolling ? scrollTop : $(window).scrollTop();
			},
			isScrollingToTop: function () {
				return isScrollingToTop;
			},
			isScrolling: function () {
				return isScrolling;
			},
			isInViewport: function ($el, margin) {
				if ( ! margin) margin = 0;
				var topVisible = $el.offset().top > Scrolling.getScrollTop() + margin;
				var bottomVisible = $el.offset().top + $el.height() < Scrolling.getScrollTop() + $(window).height() - margin;
				return topVisible && bottomVisible;
			}
		};
	})();

	
	
	
	
	

	
	
	
	//***************************************************************************************************
	// Notifications ************************************************************************************
	//***************************************************************************************************
	
	
	// Set up navigation-out-of-viewport notification with nav staying at its new position
	(function () {
		var notificationMargin = 24;
		var notification = $('<div id="nav-notification" class="notification">Menu <span class="icon">[MOU]</span></div>').appendTo('#wrapper');
		// Notification visibility
		var visibility = 'hidden';
		var isNavDown = false;
		var top = 210, left;
		var triggerScrollPosition;
		var moveElements = $('div.page .nav');
		
		var moveNav = function (top) {
			moveElements.stop().animate({paddingTop: top}, config.previewAnimationDuration, config.easing);
		};
		var moveNavDown = function () {
			isNavDown = true;
			moveNav(Scrolling.getScrollTop());
		};
		var moveNavUp = function () {
			if ( ! isNavDown) return;
			isNavDown = false;
			moveNav(0);
		};
		var isNavVisible = function () {
			return Scrolling.isInViewport(moveElements.find('ul').first());
		};
		var setNotificationVisibility = function (_visibility) {
			// If there's  currently a scroll to top going on, don't show the notification,
			// not even at scroll positions it would normally show
			if (Scrolling.isScrollingToTop() || isNavVisible()) _visibility = 'hidden';
			if ( ! _visibility) _visibility = (Scrolling.getScrollTop() > triggerScrollPosition) ? 'visible' : 'hidden';
			if (_visibility == visibility) return;
			visibility = _visibility;
			notification.stop().animate({left: left[visibility]}, config.previewAnimationDuration, config.easing);
		};
		var onscroll = function () {
			setNotificationVisibility();
			// Move nav back immediately, if nav is already in viewport at its original position
			if (Scrolling.getScrollTop() < triggerScrollPosition) {
				moveNavUp();
			}
		};
		// Calculate notification positions for visible and hidden state (and immediately apply the appropriate one)
		var setPositions = function () {
			var wrapperOffset = $('#wrapper').offset().left;
			//top = $('div.page .nav ul').first().offset().top;
			left = {
				visible:  wrapperOffset - notification.outerWidth() - notificationMargin,
				hidden: wrapperOffset
			};
			notification.css({left: left[visibility], top: top});
		};
		
		// Calculate scroll position at which notification should appear
		(function () {
			var ul = $(moveElements).find('ul').first(); 
			triggerScrollPosition = ul.offset().top;
		})();
		
		// Set notification visibility on scroll
		$(window).scroll(onscroll);
		// Recalculate positions on viewport resize
		$(window).resize(setPositions).resize();
		
		notification.hover(function () {
			// Immediately stop scroll action, since notification hides when hovered,
			// but scroll events would cause it to reappear again
			$('html, body').stop(true, true);
			moveNavDown();
			// Delay, so there won't be another scroll event after hiding the notification,
			// which would cause it to reappear
			setTimeout(function () {setNotificationVisibility('hidden');}, 0);
		}, function () {
		});

	})();
	
	
	
	
	
	
	
	// Set up back-to-top notification
	(function () {
		var notificationMargin = 24;
		var notification = $('<div id="top-notification" class="notification">Top <span class="icon">[HOM]</span></div>').appendTo('#wrapper');
		var visibility = 'hidden';
		var top = 24, left;
		var triggerScrollPosition = 100;
		
		var setNotificationVisibility = function (_visibility) {
			// If there's  currently a scroll to top going on, don't show the notification,
			// not even at scroll positions it would normally show
			if (Scrolling.isScrollingToTop()) _visibility = 'hidden';
			if ( ! _visibility) _visibility = (Scrolling.getScrollTop() > triggerScrollPosition) ? 'visible' : 'hidden';
			if (_visibility == visibility) return;
			visibility = _visibility;
			notification.stop().animate({left: left[visibility]}, config.previewAnimationDuration, config.easing);
		};
		var onscroll = function () {
			setNotificationVisibility();
		};
		// Calculate notification positions for visible and hidden state (and immediately apply the appropriate one)
		var setPositions = function () {
			var wrapperOffset = $('#wrapper').offset().left;
			left = {
				visible:  wrapperOffset - notification.outerWidth() - notificationMargin,
				hidden: wrapperOffset
			};
			notification.css({left: left[visibility], top: top});
		};
		
		
		// Set notification visibility on scroll
		$(window).scroll(onscroll);
		// Recalculate positions on viewport resize
		$(window).resize(setPositions).resize();
		// Close lightbox when homing
		$(window).bind('scrollToTop', function () {Pages.closeLightbox();});
		
		notification.css({cursor: 'pointer'}).click(function () {
			Scrolling.scrollToTop();
			// Delay, so there won't be another scroll event after hiding the notification,
			// which would cause it to reappear
			setTimeout(function () {setNotificationVisibility('hidden');}, 0);
		});

	})();
	
	
	
	
	
	
	
	// Set up end lightbox notification
	(function () {
		var notificationMargin = 24;
		var top = 114, left;
		var notification = $('<div id="back-notification" class="notification">Back <span class="icon">[ESC]</span></div>').appendTo('#wrapper');
		var visibility = 'hidden';
		
		var setNotificationVisibility = function (_visibility) {
			if ( ! _visibility) _visibility = Pages.isLightboxActive();
			if (_visibility == visibility) return;
			visibility = _visibility;
			notification.stop().animate({left: left[visibility]}, config.previewAnimationDuration, config.easing);
		};
		// Calculate notification positions for visible and hidden state (and immediately apply the appropriate one)
		var setPositions = function () {
			var wrapperOffset = $('#wrapper').offset().left;
			left = {
				visible:  wrapperOffset - notification.outerWidth() - notificationMargin,
				hidden: wrapperOffset
			};
			notification.css({left: left[visibility], top: top});
		};
		
		
		// Set up showing/hiding of notification
		$(window).bind('lightboxOpen', function () {
			setNotificationVisibility('visible');
		});
		$(window).bind('lightboxClose', function () {
			setNotificationVisibility('hidden');
		});
		// Recalculate positions on viewport resize
		$(window).resize(setPositions).resize();
		
		notification.css({cursor: 'pointer'}).click(function () {
			Pages.closeLightbox();
			setNotificationVisibility('hidden');
		});

	})();

	
	
});
