<?php

	require './connection.php';

	$sql = "SELECT * FROM contacto;";
	$connection = new Connection;
	$connection->open();
	$result = $connection->select($sql);
	$connection->close();

	echo json_encode(array('status' => 200,'message' => 'ok', 'data' => $result ));

?>