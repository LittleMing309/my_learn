'use strict'
function LimitDrag(id){
	Drag.apply(this,arguments);
}

LimitDrag.prototype = new Drag();
LimitDrag.prototype.constructor=LimitDrag;

LimitDrag.prototype.fnMove=function(ev){
	var l = ev.clientX-this.disX;
	var t = ev.clientY-this.disY;
	if(l<0){
		l=0;
	}else if(l>document.documentElement.clientWidth-this.oBox.offsetWidth){
		l=document.documentElement.clientWidth-this.oBox.offsetWidth;
	}
	if(t<0){
		t=0;
	}else if(t>document.documentElement.clientHeight-this.oBox.offsetHeight){
		t=document.documentElement.clientHeight-this.oBox.offsetHeight;
	}
	this.oBox.style.left = l+'px';
	this.oBox.style.top = t+'px';
};




