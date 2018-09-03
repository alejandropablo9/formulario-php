var Main = (function() {
	
	var _init = function() {
		var btnGuardar = document.getElementById('btnGuardar');
		btnGuardar.addEventListener('click', _getValues, false);

		var btnLimpiar = document.getElementById('btnLimpiar');
		btnLimpiar.addEventListener('click', _clean, false);
	}

	var _getValues = function() {
		var nombre = document.getElementById('inputNombre').value;
		var email = document.getElementById('inputEmail').value;
		var comentarios = document.getElementById('textComentarios').value;

		
		var errNombre = Validate.name(nombre);

		if ( errNombre ) {
			document.getElementById('inputNombre').setAttribute('class', 'form-control is-invalid');
			document.getElementById('nombreErr').textContent = errNombre;
		} else {
			document.getElementById('inputNombre').setAttribute('class', 'form-control');
			document.getElementById('nombreErr').textContent = errNombre;
		}
		
		var errEmail = Validate.email( email );

		if ( errEmail ) {
			document.getElementById('inputEmail').setAttribute('class', 'form-control is-invalid');
			document.getElementById('emailErr').textContent = errEmail;
		} else {
			document.getElementById('inputEmail').setAttribute('class', 'form-control');
			document.getElementById('emailErr').textContent = errEmail;
		}

		var errComentarios = Validate.comentarios( comentarios );

		if ( errComentarios ) {
			document.getElementById('textComentarios').setAttribute('class', 'form-control is-invalid');
			document.getElementById('comentariosErr').textContent = errComentarios;
		} else {
			document.getElementById('textComentarios').setAttribute('class', 'form-control');
			document.getElementById('comentariosErr').textContent = errComentarios;
		}

		if ( !errEmail && !errNombre && !errComentarios ) {
			XHR.post( nombre, email, comentarios, _response );
		}

	}

	var _response = function ( _message, _alert_type) {
		var alert = document.getElementById('msgAlert');
		alert.textContent = _message;
		alert.setAttribute('class', 'alert ' + _alert_type );

		console.log(_alert_type);
		if (_alert_type === 'alert-success') {
			console.log(_alert_type, 'si');
			_cleanValues();
		}
	}

	var _cleanValues = function() {
		document.getElementById('inputNombre').value = '';
		document.getElementById('inputEmail').value = '';
		document.getElementById('textComentarios').value = '';
	}

	var _clean = function() {
		_cleanValues();

		var alert = document.getElementById('msgAlert');
		alert.textContent = '';
		alert.setAttribute('class', 'alert ');
	}



	return {
		init: _init
	};
})();