$.fn.changeColor=function(){
	this.find('*').each(function(){
		var sColor = $(this).attr('changeColor');
		if(sColor){
			$(this).css('background',sColor);
		}
	});
};