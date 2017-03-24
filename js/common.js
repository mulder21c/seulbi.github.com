"use strict";

/*! modernizr 3.4.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],n=g[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),S.push((o?"":"no-")+l.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function a(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function d(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):P?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function p(){var e=n.body;return e||(e=d(P?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,l,a,u="modernizr",f=d("div"),c=p();if(parseInt(r,10))for(;r--;)l=d("div"),l.id=o?o[r]:u+(r+1),f.appendChild(l);return i=d("style"),i.type="text/css",i.id="s"+u,(c.fake?c:f).appendChild(i),c.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",a=z.style.overflow,z.style.overflow="hidden",z.appendChild(c)),s=t(f,e),c.fake?(c.parentNode.removeChild(c),z.style.overflow=a,z.offsetHeight):f.parentNode.removeChild(f),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return t}function y(e,n,o,l){function a(){f&&(delete E.style,delete E.modElem)}if(l=r(l,"undefined")?!1:l,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var f,p,c,y,h,v=["modernizr","tspan","samp"];!E.style&&v.length;)f=!0,E.modElem=d(v.shift()),E.style=E.modElem.style;for(c=e.length,p=0;c>p;p++)if(y=e[p],h=E.style[y],i(y,"-")&&(y=s(y)),E.style[y]!==t){if(l||r(o,"undefined"))return a(),"pfx"==n?y:!0;try{E.style[y]=o}catch(g){}if(E.style[y]!=h)return a(),"pfx"==n?y:!0}return a(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+_.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,o,i):(l=(e+" "+x.join(s+" ")+s).split(" "),a(l,n,t))}function v(e,n,r){return h(e,t,t,n,r)}var g=[],C={_version:"3.4.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var S=[],w="Moz O ms Webkit",_=C._config.usePrefixes?w.split(" "):[];C._cssomPrefixes=_;var x=C._config.usePrefixes?w.toLowerCase().split(" "):[];C._domPrefixes=x;var z=n.documentElement,P="svg"===z.nodeName.toLowerCase(),b={elem:d("modernizr")};Modernizr._q.push(function(){delete b.elem});var E={style:b.elem.style};Modernizr._q.unshift(function(){delete E.style}),C.testAllProps=h,C.testAllProps=v,Modernizr.addTest("csstransitions",v("transition","all",!0)),o(),delete C.addTest,delete C.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);

/**
 * ClassList polyfill
 */
(function(){var regExp=function(name){return new RegExp("(^| )"+name+"( |$)")};var forEach=function(list,fn,scope){for(var i=0;i<list.length;i++)fn.call(scope,list[i])};function ClassList(element){this.element=element}ClassList.prototype={add:function(){forEach(arguments,function(name){if(!this.contains(name))this.element.className+=" "+name},this)},remove:function(){forEach(arguments,function(name){this.element.className=this.element.className.replace(regExp(name),"")},this)},toggle:function(name){return this.contains(name)?(this.remove(name),false):(this.add(name),true)},contains:function(name){return regExp(name).test(this.element.className)},replace:function(oldName,newName){this.remove(oldName),this.add(newName)}};if(!("classList"in Element.prototype))Object.defineProperty(Element.prototype,"classList",{get:function(){return new ClassList(this)}});if(window.DOMTokenList&&DOMTokenList.prototype.replace==null)DOMTokenList.prototype.replace=ClassList.prototype.replace})();

/**
 * closest polyfill
 */
if(window.Element&&!Element.prototype.closest)Element.prototype.closest=function(s){var matches=(this.document||this.ownerDocument).querySelectorAll(s),i,el=this;do{i=matches.length;while(--i>=0&&matches.item(i)!==el);}while(i<0&&(el=el.parentElement));return el};
/**
 * Simple Temporary Strage
 * @namespace tempStorage
 * @global
 * @example
 * // Set New Item
 * tempStorage.setItem('key', 'value');
 *
 * // Retrieve Specific Item
 * tempStorage.getItem('key');
 *
 * // Update Specific Item
 * tempStorage.replaceItem('key', 'new value');
 *
 * // Remove Specific Item
 * tempStorage.removeItem('key');
 */
;(function(global){
	global.tempStorage = global.tempStorage || new tempStorage();
	function tempStorage(){
		/**
		 * privated actual storage object
		 * @private
		 */
		var store = {};
		/**
		 * store some value with specific key, the value will be converted as JSON format string
		 * @function setItem
		 * @inner
		 * @memberof tempStorage
		 * @param {string} key the key used to save to the storage
		 * @param {string|object} value the data to save to the storage
		 */
		this.setItem = function(key, value){
			if(!key){
				return false;
			}
			if(value === undefined){
				return false;
			}
			if(store[key] !== undefined){
				return undefined;
			}
			store[key] = typeof value === "object" ? JSON.stringify(value) : value;
		};
		/**
		 * update data of specific item by key
		 * @function replaceItem
		 * @inner
		 * @memberof tempStorage
		 * @param {string} key the key used to update to the storage
		 * @param {string|object} value the data to update to the storage
		 */
		this.replaceItem = function(key, value){
			if(this.getItem(key) === undefined){
				return false;
			}
			if(value === undefined){
				return false;
			}
			store[key] = null;
			store[key] = typeof value === "object" ? JSON.stringify(value) : value;
		};
		/**
		 * get the value by specific key, the value will be converted as JSON format
		 * @function getItem
		 * @inner
		 * @memberof tempStorage
		 * @param {string} key the key used to access to the storage
		 * @return {object|string}
		 */
		this.getItem = function(key){
			if(key === undefined){
				return undefined;
			}
			if(store[key] === undefined){
				return undefined;
			}
			return typeof value === "object" ? JSON.parse(store[key]) : store[key];
		};
		/**
		 * remove specific item by key
		 * @function removeItem
		 * @inner
		 * @memberof tempStorage
		 * @param {string} key the key used to access to the storage
		 * @return {boolean} success or not
		 */
		this.removeItem = function(key){
			return delete store[key];
		};
		// object freezing
		try{
			Object.freeze(this);
		}catch(e){
		}
	};
})(window);

/**
 * Search Dialog FadeIn/Out
 */
(function(){
	var openDlgBtn = document.getElementById("search-layer-open");
	if( !openDlgBtn) return;

	/**
	 * for lock-in dialog of focus navigating with tab/shift-tab key
	 * @function focusLock
	 * @param {event} event
	 */
	function focusLock(event){
		event = event || window.event;
		var keycode = event.keyCode || event.which;

		switch(keycode){
			case 9 :
				if(event.shiftKey && event.target === document.getElementById("keyword")){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					cancelBtn.focus();
				}else if(!event.shiftKey && event.target === this.querySelector(".search-btn-reset")){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					txtFiled.focus();
				}
				break;
			case 27 :
				closeDialog();
				break;
		}
	}

	/**
	 * @function openDialog
	 * @param {event} event
	 */
	function openDialog(event){
		event = event || window.event;
		event.preventDefault ? event.preventDefault() : event.returnValue = false;

		var dialog = document.getElementById("search-layer");
		if( !dialog ) return;

		var openDlgBtn = document.getElementById("search-layer-open"),
			clsDlgBtn = dialog.querySelector(".search-btn-reset"),
			siblingElems = Array.prototype.filter.call(dialog.parentNode.children, function(child){return child !== dialog;});

		// add event handler for locking focus navigating in dialog
		dialog.addEventListener("keydown", focusLock, false);
		// add event handler for closing dialog
		clsDlgBtn.addEventListener("click", closeDialog, false);

		// apply WAI-ARIA
		openDlgBtn.setAttribute("aria-expanded", "true");
		dialog.setAttribute("aria-hidden", "false");
		for(var i = -1, item = null; item = siblingElems[++i];){
			item.setAttribute("aria-hidden", "true");
		}

		dialog.style.display = "block";
		setTimeout(function(){dialog.classList.add("opened")}, 5);
		document.getElementById("keyword").focus();
	}

	/**
	 * @function closeDialog
	 * @param {event} event
	 */
	function closeDialog(event){
		event = event || window.event;
		event.preventDefault ? event.preventDefault() : event.returnValue = false;

		var dialog = document.getElementById("search-layer"),
			openDlgBtn = document.getElementById("search-layer-open"),
			siblingElems = Array.prototype.filter.call(dialog.parentNode.children, function(child){return child !== dialog;});

		// remove event handler for locking focus navigating in dialog
		dialog.removeEventListener("keydown", focusLock, false);
		// remove event handler for restoring to initail state
		dialog.addEventListener("transitionend", restore, false);
		dialog.addEventListener("webkitTransitionend", restore, false);

		function restore(){
			dialog.removeAttribute("style");
			for(var i = -1, item = null; item = siblingElems[++i];){
				item.removeAttribute("aria-hidden");
			}
			dialog.setAttribute("aria-hidden", "true");
			openDlgBtn.setAttribute("aria-expanded", "false");
			dialog.removeEventListener("transitionend", restore, false);
			dialog.removeEventListener("webkitTransitionend", restore, false);
		}

		dialog.classList.remove("opened");
	}

	openDlgBtn.addEventListener("click", openDialog, false);
})();

/**
 * go top button
 */
(function(){
	var topBtn = document.querySelector(".go-top");
	if(!topBtn) return;
	/**
	 * ease-in-out animate
	 * @function easeInOut
	 * @param {number} currTime
	 * @param {number} start
	 * @param {number} change
	 * @param {number} duration
	 */
	function easeInOut(currTime, start, change, duration) {
		currTime /= duration / 2;
		if(currTime < 1){
			return change / 2 * currTime * currTime + start;
		}
		currTime -= 1;
		return -change / 2 * (currTime * (currTime - 2) - 1) + start;
	}

	/**
	 * @function scrollTo
	 * @param {object} element
	 * @param {number} to
	 * @param {number} duration
	 */
	function scrollTo(element, to, duration){
		var start = element.scrollTop,
			change = to - start,
			increment = 20;

		var animateScroll = function(elapsedTime) {
			elapsedTime += increment;
			var position = easeInOut(elapsedTime, start, change, duration);
			element.scrollTop = position;
			if (elapsedTime < duration) {
				setTimeout(function() {
					animateScroll(elapsedTime);
				}, increment);
			}
		};
		animateScroll(0);
	}

	topBtn.addEventListener("click", function(event){
		event = event || window.event;
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		scrollTo(document.body, 0, 500);
	}, false);
})();

/**
 * limiting a number of input(or textarea) fields
 */
(function(nodeList){
	if(nodeList.length === 0) return;

	/**
	 * event handler to indicate length of inputting text
	 * @function limitCharLen
	 * @param {event} event
	 */
	function limitCharLen(event){
		event = event || window.event;
		var maxLen = tempStorage.getItem(this.getAttribute("id") + "-maxlength"),
			val = this.value.trim();
		if(val > maxLen){
			val = val.substr(0, maxLen);
		}
		updateIndicator.call(this, val.length);
	}

	/**
	 * update the indicator for indicating length of inputted text.
	 * @function updateIndicator
	 * @param {number} cnt
	 */
	function updateIndicator(cnt){
		// if indicator is absent, then make indicator
		var hasIndicator = this.nextElementSibling && this.nextElementSibling.classList.contains("char-indicator"),
			indicator = hasIndicator ? this.nextElementSibling : document.createElement("span"),
			curr = hasIndicator ? indicator.querySelector(".current") : document.createElement("span"),
			limit = hasIndicator ? curr.nextElementSibling : document.createElement("span"),
			heading = hasIndicator ? null : document.createElement("span"),
			docFrag = this.nextElementSibling ? null : document.createDocumentFragment(),
			maxLen = tempStorage.getItem(this.getAttribute("id") + "-maxlength");
		if(!hasIndicator){
			indicator.classList.add("char-indicator");
			heading.setAttribute("id", "char-indicator-heading");
			heading.classList.add("a11y-hidden");
			heading.textContent = "입력 글자 수";
			curr.classList.add("current");
			curr.textContent  = "0";
			limit.textContent = maxLen;

			// apply WAI-ARIA
			indicator.setAttribute("aria-labelledby", "char-indicator-heading");
			indicator.setAttribute("role", "status");

			indicator.append(heading, curr, "/", limit);
			docFrag.append(indicator);
			this.parentNode.insertBefore(docFrag, this.nextSibling);
		}else{
			curr.textContent = cnt;
			if( cnt >= maxLen - 10){
				curr.classList.add("warn");
			}else{
				curr.classList.remove("warn");
			}
		}
	}

	for(var i = -1, item = null, counter = null, docFrag = null; item = nodeList[++i];){
		tempStorage.setItem(item.getAttribute("id") + "-maxlength", item.getAttribute("maxlength"));

		updateIndicator.call(item, 0);
		item.addEventListener("keyup", limitCharLen, false);
		item.addEventListener("paste", limitCharLen, false);
		item.addEventListener("focusout", limitCharLen, false);
	}
})(document.querySelectorAll("input[maxlength], textarea[maxlength]"));

/**
 * accordion UI
 */
(function(win){
	win = win || window;

	/**
	 * @class AnswerAccordion
	 * @mixes methods
	 * @param {object} node the element that used to applied answerAccordion
	 */
	var AnswerAccordion = function AnswerAccordion(node){
		if( !node ) return;
		this.article = node;
		this.answers = node.querySelectorAll(".accordion-answer.accordion-closed");
		this.paging = node.querySelector(".accordion-answer-paging.accordion-closed");
		this.detailBtn = node.querySelector(".answer-detail");
		this.tm = null;
		this.initialize();
	};

	/**
	 * This provides methods used for handling.
	 * @mixin
	 */
	var methods = {
		/**
		 * determining and setting min-height for accordion
		 * @param {string} type answer|heading
		 */
		getMaxHeight : function(type){
			//var cs = elem.querySelector("p") ? window.getComputedStyle(elem.querySelector("p"), null) : window.getComputedStyle(elem, null);
			var ref = null,
				height = 0;
			switch(type){
				case "answer" :
					ref = window.getComputedStyle(this.article.querySelector("blockquote"), null);
					height = ( ((parseFloat(ref.fontSize) * 150 / parseFloat(ref.width) + 4 ) * parseFloat(ref.lineHeight) + parseFloat(ref.marginTop) + parseFloat(ref.marginBottom) ) / parseFloat(ref.fontSize) ) + "em"
					break;
				case "heading" :
					ref = window.getComputedStyle(this.article.querySelector("blockquote p.answer:first-child"), null);
					height = (((parseFloat(ref.fontSize) * (50 + 2) / parseFloat(ref.width) ) * parseFloat(ref.lineHeight) + parseFloat(ref.marginTop) + parseFloat(ref.marginBottom)) / parseFloat(ref.fontSize)) + "em"
					break;
			}
			return height;
		},
		/**
		 * callback for transition
		 */
		adjustWholeHeight : function(){
			this.setAttribute("aria-hidden", "false");
			this.setAttribute("tabindex", -1);
			this.style.overflow = "visible";
			this.removeEventListener("transitionend", methods.adjustWholeHeight, false);
			this.removeEventListener("webkitTransitionend", methods.adjustWholeHeight, false);
			this.removeEventListener("OTransitionEnd", methods.adjustWholeHeight, false);
		},
		/**
		 * re-setting max height for resizing window
		 */
		resetMaxHeight : function(){
			clearTimeout(this.tm);
			this.tm = setTimeout( methods.setMaxHeight.bind(this), 100 );
		},
		/**
		 * sett max height to accordion-related element
		 */
		setMaxHeight : function(){
			var accordion = this.article.querySelector(".answer-slide-item [class*=\"accordion-\"]"),
				maxHeight = methods.getMaxHeight.call(this,'answer'),
				fullHeight = parseFloat(maxHeight) + parseFloat(methods.getMaxHeight.call(this,'heading'));
			accordion.style.maxHeight = maxHeight;
			accordion.style.minHeight = maxHeight;
			accordion.closest("blockquote").style.minHeight = fullHeight + "em";

			this.paging.removeAttribute("style");
		},
		/**
		 * open accordion
		 */
		openAccordion : function(){
			var accordions = this.article.querySelectorAll(".answer-slide-item [class*=\"accordion-\"]"),
				maxHeight = 0;
			if(accordions.length < 0) return;

			// answer accordion
			for(var i = -1, item = null, maxHeight = 0, fullHeight = 0 ;item = accordions[++i];){
				if( i === 0 ){
					maxHeight = methods.getMaxHeight.call(this,'answer');
					fullHeight = parseFloat(maxHeight) + parseFloat(methods.getMaxHeight.call(this,'heading'));
					item.closest("blockquote").style.minHeight = fullHeight + "em";

					if(item.classList.contains("accordion-closed") && Modernizr.csstransitions){
						item.addEventListener("transitionend", methods.adjustWholeHeight, false);
						item.addEventListener("webkitTransitionend", methods.adjustWholeHeight, false);
						item.addEventListener("OTransitionEnd", methods.adjustWholeHeight, false);
					}else{
						methods.adjustWholeHeight.bind(item);
					}
				}
				item.style.maxHeight = maxHeight;
				item.style.minHeight = maxHeight;
				item.classList.remove("accordion-closed");
			}

			// paging accordion
			if( this.paging !== null){
				this.paging.style.maxHeight = this.paging.scrollHeight / parseFloat(window.getComputedStyle(this.paging, null).fontSize) + "em";
				this.paging.style.minHeight = this.paging.style.maxHeight;
				this.paging.classList.remove("accordion-closed");
				this.paging.setAttribute("aria-hidden", "false");
			}
			
			this.resizeCallback = methods.resetMaxHeight.bind(this);
			window.addEventListener("resize", this.resizeCallback, null);

			// WAI-ARIA
			this.detailBtn.setAttribute("aria-expanded", "true");
			accordions[0].closest("blockquote").focus();
			
			this.detailBtn.querySelector("span").textContent = "상세닫기";
			this.detailBtn.removeEventListener("click", this.detailBtnCallback, null);
			this.detailBtnCallback = methods.closeAccordion.bind(this);
			this.detailBtn.addEventListener("click", this.detailBtnCallback, null);
			this.bindKey = methods.bindKey.bind(this);
			this.detailBtn.addEventListener("keydown", this.bindKey, null);
			setTimeout((function(){
				this.alertElem.textContent = "탭키를 눌러 상세 내용으로 초점 이동";
				setTimeout((function(){
					this.alertElem.textContent = "";
				}).bind(this), 3000);
			}).bind(this), 1500);

			new AnswerSlide(this.article);
		},
		/**
		 * close accordion
		 */
		closeAccordion : function(){
			var accordions = this.article.querySelectorAll(".answer-slide-item [class*=\"accordion-\"]"),
				maxHeight = 0;
			if(accordions.length < 0) return;

			for(var i = -1, item = null, blockquote = null;item = accordions[++i];){
				item.removeAttribute("style");
				item.removeAttribute("tabindex");
				item.setAttribute("aria-hidden", "true");
				item.classList.add("accordion-closed");

				blockquote = item.closest("blockquote");
				blockquote.removeAttribute("style");
			}

			// paging accordion
			if( this.paging !== null){
				this.paging.removeAttribute("style");
				this.paging.setAttribute("aria-hidden", "true");
				this.paging.classList.add("accordion-closed");
			}

			window.removeEventListener("resize", this.resizeCallback, null);
			this.resizeCallback = null;

			this.detailBtn.setAttribute("aria-expanded", "false");
			this.detailBtn.querySelector("span").textContent = "답변 상세보기";
			this.detailBtn.removeEventListener("click", this.detailBtnCallback, null);
			
			this.detailBtnCallback = methods.openAccordion.bind(this);
			this.detailBtn.removeEventListener("keydown", this.bindKey, null);
			this.detailBtn.addEventListener("click", this.detailBtnCallback, null);
		},
		bindKey : function(event){
			event = event || window.event;
			var keycode = event.keyCode || event.which;
			if( !event.shiftKey && keycode === 9){
				event.preventDefault ? event.preventDefault() : event.returnValue = false;
				this.article.querySelector("[class*=accordion-answer][aria-hidden=false]").focus();
			}
		}
	};

	AnswerAccordion.prototype = {
		initialize : function(){
			var docFrag = null;
			if( this.detailBtn !== null){
				this.detailBtn.setAttribute("aria-expanded", "false");
				this.detailBtnCallback = methods.openAccordion.bind(this);
				this.detailBtn.addEventListener("click", this.detailBtnCallback, null);

				docFrag = document.createDocumentFragment();				
				this.alertElem = document.createElement("span");
				this.alertElem.setAttribute("role", "alert");
				this.alertElem.classList.add("a11y-hidden");
				docFrag.append(this.alertElem);
				this.detailBtn.parentNode.insertBefore(docFrag, this.detailBtn.nextSibling);
			}
			for(var i = -1, item = null; item = this.answers[++i];){
				item.setAttribute("aria-hidden", "true");
			}
			if( this.paging !== null ){
				this.paging.setAttribute("aria-hidden", "true");
			}
		}
	};

	//win.AnswerAccordion = AnswerAccordion;
	for(var i = -1, item = null, articles = document.querySelectorAll("article.answer-type"); item = articles[++i];){
		new AnswerAccordion(item);
	}
})(window);

/**
 * carousel UI
 */
(function(win){
	win = win || window;

	/**
	 * @class AnswerSlide
	 * @mixes methods
	 * @param {object} node the element that used to applied answerAccordion
	 */
	var AnswerSlide = function AnswerSlide(node){
		this.wrapper = node.querySelector(".answer-slide-wrap");
		this.slideDeck = node.querySelector(".answer-slide-deck");
		this.slide = this.slideDeck.querySelectorAll(".answer-slide-item");
		this.prefix = "nu9-";
		this.currSlide = null;
		this.currIdx = 0;
		this.timer = 0;
		this.prevBtn = node.querySelector(".accordion-answer-paging .btn-prev");
		this.nextBtn = node.querySelector(".accordion-answer-paging .btn-next");
		this.pager = node.querySelector(".accordion-answer-paging .btn-answer span:first-child");
		this.initialize();
	}

	var methods = {
		animateCallback : function(){
			this.slideDeck.removeEventListener("transitionend", methods.animateCallback, false);
			this.slideDeck.removeEventListener("webkitTransitionend", methods.animateCallback, false);
			this.slideDeck.removeEventListener("OTransitionEnd", methods.animateCallback, false);			
			this.slideDeck.classList.remove("animate");
			this.slideDeck.style.transform = "";
			this.currSlide.style.display = "none";
			this.currSlide = this.slide[this.currIdx];
			this.pager.innerHTML = "<span class=\"current\">" + (this.currIdx + 1) + "</span> / " + this.slide.length + "<span class=\"accessible-hidden\">페이지</span>" ;
		},
		prevSlide : function(){
			if( new Date() - this.timer < 1000 ) return;
			this.timer = new Date();
			if( this.currIdx == 0 ) return;
			--this.currIdx;
			if(Modernizr.csstransitions){
				methods.animateCallback = methods.animateCallback.bind(this);
				this.slideDeck.addEventListener("transitionend", methods.animateCallback, false);
				this.slideDeck.addEventListener("webkitTransitionend", methods.animateCallback, false);
				this.slideDeck.addEventListener("OTransitionEnd", methods.animateCallback, false);
			}else{
				methods.animateCallback();
			}
			this.slide[this.currIdx].style.display = "block";
			this.slideDeck.style.transform = "translateX(-50%)";
			setTimeout( (function(){
				this.slideDeck.classList.add("animate");
				this.slideDeck.style.transform = "translateX(0)";
			}).bind(this), 10);
		},
		nextSlide : function(){
			if( new Date() - this.timer < 1000 ) return;
			this.timer = new Date();
			if( this.currIdx == this.slide.length - 1 ) return;
			++this.currIdx;
			this.slideDeck.classList.add("animate");
			if(Modernizr.csstransitions){
				methods.animateCallback = methods.animateCallback.bind(this);
				this.slideDeck.addEventListener("transitionend", methods.animateCallback, false);
				this.slideDeck.addEventListener("webkitTransitionend", methods.animateCallback, false);
				this.slideDeck.addEventListener("OTransitionEnd", methods.animateCallback, false);
			}else{
				methods.animateCallback();
			}
			this.slide[this.currIdx].style.display = "block";
			this.slideDeck.style.transform = "translateX(-50%)";
		}
	};

	AnswerSlide.prototype = {
		initialize : function(){
			var heading = this.wrapper.closest("article").querySelector("h3"),
				label = heading.getAttribute("id");
			heading = null;
			if( !label ){
				label = this.prefix + new Date().getTime();
				this.wrapper.closest("article").querySelector("h3").setAttribute("id", label);
			}
			this.wrapper.setAttribute("role", "region");
			this.wrapper.setAttribute("aria-labelledby", label);
			this.currSlide = this.slide[0];

			for(var i = -1, item = null, answer = null; item = this.slide[++i];){
				if( !(answer = item.querySelector(".accordion-answer")) ) continue;
				answer.setAttribute("aria-hidden", "false");
				answer.setAttribute("tabindex", -1);
				answer.style.overflow = "visible";
			}

			this.nextBtn.addEventListener("click", methods.nextSlide.bind(this), false);
			this.prevBtn.addEventListener("click", methods.prevSlide.bind(this), false);

			this.pager.setAttribute("aria-live", "polite")
			this.pager.setAttribute("aria-relevant", "all")
		}
	};

	win.AnswerSlide = AnswerSlide;
})(window);