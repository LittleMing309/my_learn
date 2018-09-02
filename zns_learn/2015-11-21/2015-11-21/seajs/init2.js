seajs.config({
	alias:{
		's':'a/b/c/a'
	}
});
seajs.use('s',function(mod){
	alert(mod.a);
});