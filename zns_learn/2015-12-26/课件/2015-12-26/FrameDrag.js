'use strict'
function FrameDrag(id){
	Drag.apply(this,arguments);
	this.borderWidth = 5;
}
FrameDrag.prototype = new Drag();
FrameDrag.prototype.constructor = FrameDrag;

var aParent = {};
for(var name in FrameDrag.prototype){
	aParent[name] = FrameDrag.prototype[name];
}

FrameDrag.prototype.fnDown=function(ev){
	aParent['fnDown'].apply(this,arguments);
	var oDiv = document.createElement('div');
	oDiv.style.width = this.oBox.offsetWidth-2*this.borderWidth+'px';
	oDiv.style.height = this.oBox.offsetHeight-2*this.borderWidth+'px';
	
	oDiv.style.position='absolute';
	this.oBox.parentNode.appendChild(oDiv);
	oDiv.style.left = this.oBox.offsetLeft+'px';
	oDiv.style.top = this.oBox.offsetTop+'px';
	oDiv.style.border = this.borderWidth+'px dashed #000';
	
	this.oldBox = this.oBox;
	this.oBox = oDiv;
}
FrameDrag.prototype.fnUp=function(){
	aParent['fnUp'].apply(this,arguments);
	this.oldBox.style.left = this.oBox.offsetLeft+'px';
	this.oldBox.style.top = this.oBox.offsetTop+'px';
	
	this.oBox.parentNode.removeChild(this.oBox);
	
	this.oBox = this.oldBox;
	this.oldBox = null;
};













