var XHR = (function(){
	
	var _stateChange = function(xhr, callback) {

		return function(){
            if(xhr.readyState === 4){
            	if (xhr.status >= 200 & xhr.status <= 299) {
            		var data = JSON.parse(xhr.responseText);
	                if(data.status >= 200 & data.status <=299){
	                    callback(data.data);
	                }
            	}
            }            
        };
	}

	var _get = function(_callback) {
		var url = 'contactos.php';
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = _stateChange(xhr, _callback);		
		xhr.open('GET', url);
		xhr.send();
	}

	return {
		get: _get
	}

})();