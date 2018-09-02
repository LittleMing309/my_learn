'use strict'
;(function (){
	var reJson = {
		age:/^(1[89]|[2-9][0-9]|100)$/,
		tele:/^0[1-9]\d{1,2}\-[1-9]\d{6,7}$/,
		email:/^\w+\@[0-9a-zA-Z\-]+(\.[a-zA-Z]{2,8}){1,2}$/
	};
	window.formCheck = function (id){
		var oForm = document.getElementById(id);
		var aInp = oForm.getElementsByTagName('*');
		oForm.onsubmit = function(){
			var bOk = true;
			for(var i = 0; i<aInp.length; i++){
				var re = reJson[aInp[i].name];
				if(re){
					if(!checkRe(aInp[i],re)){
						bOk = false;
					}
				}
			}
			if(!bOk){
				return false;
			}
		};
		function checkRe(obj,re){
			if(re.test(obj.value)){
				obj.className = 'ok';
				return true;
			}else{
				obj.className = 'err';
				return false;
			}
		};
		for(var i = 0; i<aInp.length;i++){
			var re = reJson[aInp[i].name];
			if(re){
				(function(re){
					aInp[i].onblur = function(){
						checkRe(this,re);
					}
				})(re);
			}
		}
	}
	var oHead = document.getElementsByTagName('head')[0];
	var oLink = document.createElement('link');
	oLink.rel = 'stylesheet';
	oLink.href = 'formCheck.css';
	oHead.appendChild(oLink);
})();