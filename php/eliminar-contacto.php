<?php

include('conexion.php');


$id = isset($_POST['id'])  ? $_POST['id'] : false;
$consulta = "DELETE FROM contactos WHERE id=$id";

$eliminar = $conexion->query($consulta);
echo json_encode($eliminar);