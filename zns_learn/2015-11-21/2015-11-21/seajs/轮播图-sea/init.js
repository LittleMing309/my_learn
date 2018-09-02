seajs.config({
	alias:{
		's':'sea-slider'
	}
});
seajs.use('s',function(mod){
	mod.slider('box');
});