var XHR = ( function() {

	var _stateChange = function(xhr, callback) {

		return function(){
            if(xhr.readyState === 4){
            	console.log(xhr);
            	if (xhr.status >= 200 & xhr.status <= 299) {
            		var data = JSON.parse(xhr.responseText);
	                if(data.status >= 200 & data.status <=299){
	                    callback(data.message, 'alert-success');
	                } else if (data.status >= 400 & data.status <= 499){
	                	callback(data.message, 'alert-danger');
	                } else {
	                	callback(data.message, 'alert-danger');
	                }
            	} else {
            		callback('Ocurrio un error', 'alert-danger');
            	}
            }            
        };
	}

	var _post = function( _name, _mail, _coments, _callback) {

		var url = 'contacto.php';
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = _stateChange(xhr, _callback);		
		xhr.open('POST', url);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(`nombre=${_name}&email=${_mail}&comentarios=${_coments}`);

	}
	
	return {
		post: _post
	}
})();