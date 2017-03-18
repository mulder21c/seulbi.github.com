"use strict";

/**
 * ClassList polyfill
 */
(function(){var regExp=function(name){return new RegExp("(^| )"+name+"( |$)")};var forEach=function(list,fn,scope){for(var i=0;i<list.length;i++)fn.call(scope,list[i])};function ClassList(element){this.element=element}ClassList.prototype={add:function(){forEach(arguments,function(name){if(!this.contains(name))this.element.className+=" "+name},this)},remove:function(){forEach(arguments,function(name){this.element.className=this.element.className.replace(regExp(name),"")},this)},toggle:function(name){return this.contains(name)?(this.remove(name),false):(this.add(name),true)},contains:function(name){return regExp(name).test(this.element.className)},replace:function(oldName,newName){this.remove(oldName),this.add(newName)}};if(!("classList"in Element.prototype))Object.defineProperty(Element.prototype,"classList",{get:function(){return new ClassList(this)}});if(window.DOMTokenList&&DOMTokenList.prototype.replace==null)DOMTokenList.prototype.replace=ClassList.prototype.replace})();

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

		function restore(){
			dialog.removeAttribute("style");
			for(var i = -1, item = null; item = siblingElems[++i];){
				item.removeAttribute("aria-hidden");
			}
			dialog.setAttribute("aria-hidden", "true");
			openDlgBtn.setAttribute("aria-expanded", "false");
			dialog.removeEventListener("transitionend", restore, false);
		}

		dialog.classList.remove("opened");
	}

	openDlgBtn.addEventListener("click", openDialog, false);

})();