define(function(require,exports,module){
	var M = require('sea-move');
	exports.slider=function(id){
		var oBox = document.getElementById(id);
		var oUl = oBox.children[0];
		var aLi = oUl.children;
		oUl.style.width = aLi.length*aLi[0].offsetWidth+'px';
		var oOl = oBox.children[1];
		var aBtn = oOl.children;
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onclick=function(){
					for(var i=0;i<aBtn.length;i++){
						aBtn[i].className='';
					}
					this.className='on';
					//oUl.style.left = -index*aLi[0].offsetWidth+'px';
					M.startMove(oUl,{left:-index*aLi[0].offsetWidth},'linear',300);
				};
			})(i);
		}
	};
});