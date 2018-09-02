'use strict'
function LimitDrag(id){
	Drag.apply(this,arguments);
}

LimitDrag.prototype = new Drag();
LimitDrag.prototype.constructor=LimitDrag;

var oldMove = LimitDrag.prototype.fnMove;

LimitDrag.prototype.fnMove=function(ev){
	oldMove.apply(this,arguments);
	if(this.oBox.offsetLeft<0){
		this.oBox.style.left = 0;
	}
};












