'use strict'

var Validate = ( function(){

	// validacion de campo nombre
	var _name = function( value ) {
		if ( value ) { // si existe un nombre
			return '';
		}
		return 'Campo nombre requerido.';
	}

	var _email = function( value ) {

		if ( !value ) {
			return 'Campo email requerido.';
		}

		var reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if ( reEmail.test(value) ) {
			return '';
		}

		return 'Email no valido.';
	}

	var _comentarios = function( value ) {
		if ( value ) {
			return '';
		}
		return 'Ingresa tus comentarios.'
	}

	return {
		name: _name,
		email: _email,
		comentarios: _comentarios
	};

})();