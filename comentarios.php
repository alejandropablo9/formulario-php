<!DOCTYPE html>
<html>
<head>
	<title>Comentarios</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>

	<div style="margin: 20px;" >
		<div class="row">
			<div class="col-sm-8" style="float: none; margin: 0 auto;">
				<table class="table table-hover">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Nombre</th>
				      <th scope="col">Email</th>
				      <th scope="col">comentario</th>
				    </tr>
				  </thead>
				  <tbody id="tbody">
				  </tbody>
				</table>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="js/MainC.js"></script>
	<script type="text/javascript" src="js/XHRC.js"></script>
	<script type="text/javascript">
		Main.init();
	</script>
</body>
</html>