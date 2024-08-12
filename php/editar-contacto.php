<?php

include('conexion.php');


$id = $_POST['id'];
$consulta = "SELECT * FROM contactos WHERE id=$id";
$editar = $conexion->query($consulta);
$resultado = array();

while ($fila = mysqli_fetch_array($editar)) {
       $resultado[] = $fila;
}


echo json_encode($resultado);