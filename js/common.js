"use strict";

(function(){
	function openSearchLayer(event){
		var srchLayer = document.querySelector("#search-layer"),
			clsBtn = srchLayer.querySelector(".search-btn-reset");
		event = event || window.event;
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		srchLayer.style.display = "block";
		clsBtn.addEventListener("click", closeSrchLayer, false);
	}
	function closeSrchLayer(event){
		var srchLayer = document.querySelector("#search-layer");
		event = event || window.event;
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		srchLayer.style.display = "none";
		clsBtn.removeEventListener("click", closeSrchLayer, false);
	}
	var srchBtn = document.querySelector("#search-layer-open");
	srchBtn.addEventListener("click", openSearchLayer, false);
})();