var Main = ( function() {

	var _init = function() {
		XHR.get(_loadData);
	}

	var _loadData = function( data ) {
		console.log(data);

		var tbody = document.getElementById('tbody');
		console.log(tbody);

		for (var element in data ) {
			console.log(data[element]);
			var tr = document.createElement('tr');
			var tdNo = document.createElement('td');
			tdNo.textContent = Number(element)+1;
			var tdName = document.createElement('td');
			tdName.textContent = data[element].nombre;
			var tdEmail = document.createElement('td');
			tdEmail.textContent = data[element].email;
			var tdComentarios = document.createElement('td');
			tdComentarios.textContent = data[element].comentarios;

			tr.appendChild(tdNo);
			tr.appendChild(tdName);
			tr.appendChild(tdEmail);
			tr.appendChild(tdComentarios);
			tbody.appendChild(tr);
		}

	}

	return {
		init: _init
	}
	
})();