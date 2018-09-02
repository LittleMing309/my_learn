define(function(require,exports,module){
	var J = require('sea-jquery');
	exports.slider=function(id){
		var oUl = J.$('#'+id).find('ul');
		var aLi = J.$('#'+id).find('ul li');
		oUl.css('width',aLi.length*aLi.width());
		J.$('#'+id).find('ol li').click(function(){
			J.$(this).addClass('on').siblings('li').removeClass('on');
			oUl.stop().animate({left:-(J.$(this).index())*aLi.width()});
		});
	}
});