'use strict'
function ZQuery(arg){ 		//主要是用来存东西的
	this.elements = [];
	
	this.domString = ''; 	//字符串元素
	
	switch(typeof arg){
		case 'function':
			domReady(arg);
			break;
		case 'string':
			//div
			//<strong></strong>
			if(arg.indexOf('<')!=-1){
				this.domString = arg;
			}else{
				this.elements = getEle(arg);
				this.length = this.elements.length;
			}
			break;
		default:
			this.elements.push(arg);
			break;	
	}
}

function domReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn();
			}
		});
	}
}

ZQuery.prototype.css=function(name,value){
	if(arguments.length==2){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].style[name] = value;
		}
	}else{
		if(typeof name=='string'){
			return getStyle(this.elements[0],name);
		}else{
			var json = name;
			for(var i=0;i<this.elements.length;i++){
				for(var name in json){
					this.elements[i].style[name]=json[name];
				}
			}
		}
	}
	return this;
};
ZQuery.prototype.attr=function(name,value){
	if(arguments.length==2){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].setAttribute(name,value);
		}
	}else{
		if(typeof name=='string'){
			return this.elements[0].getAttribute(name);
		}else{
			var json = name;
			for(var i=0;i<this.elements.length;i++){
				for(var name in json){
					this.elements[i].setAttribute(name,json[name]);
				}
			}
		}
	}
	return this;
};

ZQuery.prototype.val=function(str){
	if(str||str==''){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].value = str;
		}
	}else{
		return this.elements[0].value;
	}
	return this;
};
ZQuery.prototype.html=function(str){
	if(str||str==''){
		for(var i=0;i<this.elements.length;i++){
			this.elements[i].innerHTML = str;
		}
	}else{
		return this.elements[0].innerHTML;
	}
	return this;
};

ZQuery.prototype.addClass=function(sClass){
	sClass = sClass.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
	for(var i=0;i<this.elements.length;i++){
		if(this.elements[i].className){
			var re = new RegExp('\\b'+sClass+'\\b','g');
			if(this.elements[i].className.search(re)==-1){
				this.elements[i].className+=' '+sClass;
			}
		}else{
			this.elements[i].className = sClass;
		}
	}
	return this;
};
ZQuery.prototype.removeClass=function(str){
	for(var i=0;i<this.elements.length;i++){
		if(this.elements[i].className){
			var re = new RegExp('\\b'+str+'\\b','g');
			this.elements[i].className = this.elements[i].className.replace(re,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
			if(this.elements[i].className==''){
				this.elements[i].removeAttribute('class');
			}
		}
	}
	return this;
};

ZQuery.prototype.animate=function(json,options){
	for(var i=0;i<this.elements.length;i++){
		move(this.elements[i],json,options);
	}
};

/*ZQuery.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
		addEvent(this.elements[i],'click',fn);
	}
};*/

;'click mouseover mouseout dblclick contextmenu keyup keydown scroll mousedown mousemove mouseup'.replace(/\w+/g,function(sEv){
	ZQuery.prototype[sEv]=function(fn){
		for(var i=0;i<this.elements.length;i++){
			addEvent(this.elements[i],sEv,fn);
		}
	};
});

ZQuery.prototype.eq=function(n){
	return $(this.elements[n]);
}
ZQuery.prototype.get=function(n){
	return this.elements[n];
}

ZQuery.prototype.index=function(){
	var obj = this.elements[0];
	var aSibling = obj.parentNode.children;
	for(var i=0;i<aSibling.length;i++){
		if(aSibling[i]==obj){
			return i;
		}
	}
};

ZQuery.prototype.appendTo=function(str){
	var aEle = getEle(str);
	for(var i=0;i<aEle.length;i++){
		aEle[i].insertAdjacentHTML('beforeEnd',this.domString);
	}
	return this;
};

ZQuery.prototype.prependTo=function(str){
	var aEle = getEle(str);
	for(var i=0;i<aEle.length;i++){
		aEle[i].insertAdjacentHTML('afterBegin',this.domString);
	}
	return this;
};

ZQuery.prototype.insertBefore=function(str){
	var aEle = getEle(str);
	for(var i=0;i<aEle.length;i++){
		aEle[i].insertAdjacentHTML('beforeBegin',this.domString);
	}
	return this;
};

ZQuery.prototype.insertAfter=function(str){
	var aEle = getEle(str);
	for(var i=0;i<aEle.length;i++){
		aEle[i].insertAdjacentHTML('afterEnd',this.domString);
	}
	return this;
};
ZQuery.prototype.remove=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].parentNode.removeChild(this.elements[i]);
	}
};

ZQuery.prototype.mouseenter=function(fn){
	for(var i=0;i<this.elements.length;i++){
		addEvent(this.elements[i],'mouseover',function(ev){
			var oFrom = ev.fromElement||ev.relatedTarget;
			if(this.contains(oFrom))return;
			fn.apply(this,arguments);
		});
	}
};
ZQuery.prototype.mouseleave=function(fn){
	for(var i=0;i<this.elements.length;i++){
		addEvent(this.elements[i],'mouseout',function(ev){
			var oTo = ev.toElement||ev.relatedTarget;
			if(this.contains(oTo))return;
			fn.apply(this,arguments);
		});
	}
};
ZQuery.prototype.hover=function(fn1,fn2){
	this.mouseenter(fn1);
	this.mouseleave(fn2);
};
ZQuery.prototype.toggle=function(){
	var arg = arguments;
	var _this = this;
	for(var i=0;i<this.elements.length;i++){
		(function(count){
			addEvent(_this.elements[i],'click',function(){
				arg[count%arg.length].apply(this,arguments);
				count++;
			});
		})(0);
	}
};

ZQuery.prototype.show=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='block';
	}
	return this;
};
ZQuery.prototype.hide=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
	}
	return this;
};
ZQuery.prototype.extend=function(json){
	for(var name in json){
		ZQuery.prototype[name] = json[name];
	}
};

function $(arg){
	return new ZQuery(arg);
}

$.fn = ZQuery.prototype;


function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,function(ev){
			var oEvent = ev||event;
			if(fn.call(this,oEvent)==false){
				oEvent.cancelBubble = true;
				oEvent.preventDefault&&oEvent.preventDefault();
			}
		},false);
	}else{
		obj.attachEvent('on'+sEv,function(ev){
			var oEvent =ev||event;
			if(fn.call(this,oEvent)==false){
				oEvent.cancelBubble = true;
				return false;
			}
		});
	}
}

function getStyle(obj,sName){
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}

function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var aResult = [];
		var aEle = oParent.getElementsByTagName('*');
		var re = new RegExp('\\b'+sClass+'\\b','g');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}
function getByStr(aParent,str){
	var aChild = [];
	for(var i=0;i<aParent.length;i++){
		//#box   .on    li
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
				if(/^\w+\[\w+\=\w+\]$/.test(str)){
					//属性选择器   input[type=button]
					var arr = str.split(/\[|\=|\]/);
					var aEle = aParent[i].getElementsByTagName(arr[0]);
					for(var j=0;j<aEle.length;j++){
						if(aEle[j].getAttribute(arr[1])==arr[2]){
							aChild.push(aEle[j]);
						}
					}
				}else if(/^\w+\.\w+$/.test(str)){
					//li.on 	li    on
					
					var arr = str.split(/\./);
					var aEle = aParent[i].getElementsByTagName(arr[0]);
					var re = new RegExp('\\b'+arr[1]+'\\b','g');
					for(var j=0;j<aEle.length;j++){
						if(aEle[j].className.search(re)!=-1){
							aChild.push(aEle[j]);
						}
					}
				}else if(/^\w+\:\w+(\(\d+\))?$/.test(str)){
					//标签    伪类    索引
					var arr = str.split(/\:|\(|\)/);
					var aEle = aParent[i].getElementsByTagName(arr[0]);
					switch(arr[1]){
						case 'first':
							aChild.push(aEle[0]);
							break;
						case 'last':
							aChild.push(aEle[aEle.length-1]);
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
						case 'eq':
							aChild.push(aEle[arr[2]]);
							break;
					}
				}else{
					var aEle = aParent[i].getElementsByTagName(str);
					for(var j=0;j<aEle.length;j++){
						aChild.push(aEle[j]);
					}
				}
				break;
		}
	}
	return aChild;
}
function getEle(str){
	var arr = str.match(/\S+/g);
	var aParent = [document];
	var aChild = [];
	for(var i=0;i<arr.length;i++){
		aChild = getByStr(aParent,arr[i]);
		aParent = aChild;
	}
	return aChild;
}



function move(obj,json,options){
	options = options||{};
	options.duration = options.duration||700;
	options.easing = options.easing||'easeOut';
	var start = {};
	var dis = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name] = obj.offsetLeft;
					break;
				case 'top':
					start[name] = obj.offsetTop;
					break;
				case 'width':
					start[name] = obj.offsetWidth;
					break;
				case 'height':
					start[name] = obj.offsetHeight;
					break;
				case 'opacity':
					start[name] = 1;
					break;
				case 'borderWidth':
					start[name] = 0;
					break;
			}
		}
		dis[name] = json[name]-start[name];
	}
	
	var count = Math.floor(options.duration/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
					break;
				case 'easeIn':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'easeOut':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);
}