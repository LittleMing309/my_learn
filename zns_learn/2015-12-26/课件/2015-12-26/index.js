'use strict'

/*
**	@Author: 		eric
** 	@Date: 			2015-12-26
** 	@Licence:MIT
** 	@Version: 		1.1.1
** 	@CopyRight: 	BeiJing·ZhiNengshe
** 	@Desc: 	Portal interface of the entire website
*/
var myWeb = {
	utili:{}, 		//Common method interface
	effect:{} 		//Common effect interface
};
myWeb.utili = {
	/*
	**	getById 		get an element by id
	** 	parame
	** 				[string]
	**  return
	** 				[object]
	*/
	getById:function(id){
		return document.getElementById(id);
	},
	/*
	** 	getByTagName 	get many elements by tagName
	** 	parame
	** 				[object]
	** 				[string]
	** 	return
	** 				[array]
	*/
	getByTagName:function(obj,tagName){
		return obj.getElementsByTagName(tagName);
	},
	bind:function(obj,sEv,fn){
		if(obj.addEventListener){
			obj.addEventListener(sEv,fn,false);
		}else{
			obj.attachEvent('on'+sEv,fn);
		}
	}
};
myWeb.effect={
	click2red:function(id){
		var obj = myWeb.utili.getById(id);
		myWeb.utili.bind(obj,'click',function(){
			this.style.background='red';
		});
	}
};