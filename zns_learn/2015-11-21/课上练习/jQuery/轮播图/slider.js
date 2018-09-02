'use strict'
$.fn.slider = function(){
	var oUl = this.find('ul');
	var oLi = oUl.find('li');
	oUl.css('width',oLi.length*oLi.width());
	this.find('ol li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
		oUl.stop().animate({left:-$(this).index()*oLi.width()});
	});
};