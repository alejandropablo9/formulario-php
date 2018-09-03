<!DOCTYPE html>
<html>
<head>
	<title>Formulario</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
	<div style="margin: 20px;" >
		<div class="row">
			<div class="col-sm-8" style="float: none; margin: 0 auto;">

				<form>
					<div class="form-group">
						<label for="inputNombre">Nombre</label>
					    <input type="text" class="form-control" id="inputNombre" aria-describedby="nombreErr" placeholder="Nombre" name="nombre">
					    <div  id="nombreErr" class="invalid-feedback"></div>
					</div>
					<div class="form-group">
						<label for="inputEmail">Email</label>
					    <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="email">
					    <div id="emailErr" class="invalid-feedback"></div>
					</div>
					<div class="form-group">
					    <label for="textComentarios">Comentarios</label>
					    <textarea class="form-control" id="textComentarios" placeholder="comentarios" rows="2" name="comentarios"></textarea>
					    <div id="comentariosErr" class="invalid-feedback"></div>
				  	</div>
				  	<div id="msgAlert" class="alert" role="alert">
					</div>
				  	<button id="btnGuardar" type="button" class="btn btn-info btn-block">Enviar</button>
				  	<button id="btnLimpiar" type="button" class="btn btn-danger btn-block">Limpiar</button>
				</form>
				<hr>
				<a href="comentarios.php"> ver comentarios </a>

			</div>
		</div>
		
	</div>

	<script type="text/javascript" src="js/Main.js"></script>
	<script type="text/javascript" src="js/Validate.js"></script>
	<script type="text/javascript" src="js/XHR.js"></script>
	<script type="text/javascript">
		Main.init();
	</script>
</body>
</html>