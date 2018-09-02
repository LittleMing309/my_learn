'use strict'
function addClass(obj,sClass){
	if(obj.className){
		var re = new RegExp('\\b'+sClass+'\\b');
		if(obj.className.search(re)==-1){
			obj.className+=' '+sClass;
		}
	}else{
		obj.className = sClass;
	}
}
function removeClass(obj,sClass){
	if(obj.className){
		var re = new RegExp('\\b'+sClass+'\\b','g');
		obj.className = obj.className.replace(re,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
		if(obj.className==''){
			obj.removeAttribute('class');
		}
	}
}
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var result = [];
		var aEle = oParent.getElementsByTagName('*');
		var re = new RegExp('\\b'+sClass+'\\b');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				result.push(aEle[i]);
			}
		}
		return result;
	}
}







