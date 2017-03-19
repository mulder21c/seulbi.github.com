"use strict";

/**
 * ClassList polyfill
 */
(function(){var regExp=function(name){return new RegExp("(^| )"+name+"( |$)")};var forEach=function(list,fn,scope){for(var i=0;i<list.length;i++)fn.call(scope,list[i])};function ClassList(element){this.element=element}ClassList.prototype={add:function(){forEach(arguments,function(name){if(!this.contains(name))this.element.className+=" "+name},this)},remove:function(){forEach(arguments,function(name){this.element.className=this.element.className.replace(regExp(name),"")},this)},toggle:function(name){return this.contains(name)?(this.remove(name),false):(this.add(name),true)},contains:function(name){return regExp(name).test(this.element.className)},replace:function(oldName,newName){this.remove(oldName),this.add(newName)}};if(!("classList"in Element.prototype))Object.defineProperty(Element.prototype,"classList",{get:function(){return new ClassList(this)}});if(window.DOMTokenList&&DOMTokenList.prototype.replace==null)DOMTokenList.prototype.replace=ClassList.prototype.replace})();

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