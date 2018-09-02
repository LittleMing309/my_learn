'use strict'
function getEle(str){
	var arr = str.replace(/^\s+|\s+$/,'').split(/\s+/g);
	var aParent = [document];
	var aChild = [];
	
	for(var i=0;i<arr.length;i++){
		aChild = getByStr(aParent,arr[i]);
		aParent = aChild;
	}
	return aChild;
}

function getByStr(aParent,str){
	var aChild = [];
	for(var i=0;i<aParent.length;i++){
		switch(str.charAt(0)){
			case '#':
				aChild.push(document.getElementById(str.substring(1)));
				break;
			case '.':
				var aEle = getByClass(aParent[i],str.substring(1));
				for(var j=0;j<aEle.length;j++){
					aChild.push(aEle[j]);
				}
				break;
			default:
				if(/^\w+\.\w+$/.test(str)){
					//li.on
					var arr = str.split(/\./g);
					var aEle = aParent[i].getElementsByTagName(arr[0]);
					var re = new RegExp('\\b'+arr[1]+'\\b','g');
					for(var j=0;j<aEle.length;j++){
						if(aEle[j].className.search(re)){
							aChild.push(aEle[j]);
						}
					}
				}else if(/^\w+\[\w+\=\w+\]$/.test(str)){
					//input[type=button]
					var arr = str.split(/\[|\=|\]/);
					var aEle = aParent[i].getElementsByTagName(arr[0]);
					for(var j=0;j<aEle.length;j++){
						if(aEle[j].getAttribute(arr[1])==arr[2]){
							aChild.push(aEle[j]);
						}
					}
				}else if(/^\w+:\w+(\(\d+\))?$/.test(str)){
					//li:eq(2)
					var arr = str.split(/:|\(|\)/);
					var aEle = aParent[i].getElementsByTagName(arr[0]);
					switch(arr[1]){
						case 'first':
							aChild.push(aEle[0]);
							break;
						case 'last':
							aChild.push(aEle[aEle.length-1]);
							break;
						case 'eq':
							aChild.push(aEle[arr[2]]);
							break;
						case 'lt':
							for(var j=0;j<arr[2];j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'gt':
							for(var j=parseInt(arr[2])+1;j<aEle.length;j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'elt':
							for(var j=0;j<=arr[2];j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'egt':
							for(var j=arr[2];j<aEle.length;j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'even':
							for(var j=0;j<aEle.length;j+=2){
								aChild.push(aEle[j]);
							}
							break;
						case 'odd':
							for(var j=1;j<aEle.length;j+=2){
								aChild.push(aEle[j]);
							}
							break;
					}
				}else{
					//li
					var aEle = aParent[i].getElementsByTagName(str);
					//aChild = aChild.concat(aEle);
					for(var j=0;j<aEle.length;j++){
						aChild.push(aEle[j]);
					}
				}
				break;
		}
	}
	return aChild;
}

function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}else{
		var aResult = [];
		var aEle = obj.getElementsByTagName('*');
		var re = new RegExp('\\b'+sClass+'\\b','g');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}












