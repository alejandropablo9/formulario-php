<?php
	class Connection {
		private $db_host="localhost";
		private $db_user="alejandro";
		private $db_password="alejandro";
		private $db_name="formulario";
		private $con=null; 

		function open(){
			try {
				$this->$con = new PDO("pgsql:host=$this->db_host;dbname=$this->db_name", $this->db_user, $this->db_password);
				$this->$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			} catch(Exception $e) {
				$this->$con = null;
				echo "Error ".$e->getMessage();
			}
			return $con;
		}

		function close(){
			$this->$con = null;
		}

		function query( $query ) {
			if ($this->$con) {
				$stmt = $this->$con->prepare($query);
				$rows = $stmt->execute();
				if ($rows == 1) { return true; }
			} else {
				return false;
			}			
		}

		function select($query) {
			if ($this->$con) {
				$stmt = $this->$con->prepare($query);	
				$stmt->execute();
				return $stmt->fetchAll();
			} 
			return [];
			
		}
	}
?>