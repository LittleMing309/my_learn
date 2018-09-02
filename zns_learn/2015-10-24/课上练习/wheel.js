function addEvent(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false)
	}else{
		obj.attachEvent('on'+ev,fn)	
	}	
}

function mouseWheel(obj,fn){
		function wheel(ev){
				var bDown=true;
				var oEvent=ev||event;
				if(oEvent.detail){
					if(oEvent.detail>0){
						bDown=true;
					}else{
						bDown=false;
					}
				}else{
					if(oEvent.wheelDelta>0){
						bDown=false;
					}else{
						bDown=true;
					}
				}
				fn&&fn(bDown);
				oEvent.preventDefault&&oEvent.preventDefault();
				return false;
			}	
		
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){	
			obj.addEventListener('DOMMouseScroll',wheel,false);
		}
		addEvent(obj,'mousewheel',wheel);
	}
	
	
	
	
	
	
	