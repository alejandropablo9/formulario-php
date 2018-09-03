<?php

	require './connection.php';

	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$comentarios = $_POST['comentarios'];

	if(empty($nombre)) {
		echo json_encode(array('status' => 400, 'message' => 'Campo nombre requerido.' ));
	} else if(empty($email)) {
		echo json_encode(array('status' => 400, 'message' => 'Campo email requerido.' ));
	} else if(empty($comentarios)) {
		echo json_encode(array('status' => 400, 'message' => 'Campo comentarios requerido.' ));
	} else {

		$sql = "INSERT INTO contacto (nombre, email, comentarios) VALUES ('".$nombre."', '".$email."', '".$comentarios."');";
		$connection = new Connection;
		$connection->open();
		$result = $connection->query($sql);
		$connection->close();
		if ($result) {
			echo json_encode(array('status' => 200, 'message' => 'Comentario enviado correctamente.' ));
		} else {
			echo json_encode(array('status' => 500, 'message' => 'Ocurrio un error en el servidor.' ));
		}
	}
?>