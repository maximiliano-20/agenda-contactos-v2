<?php

include('conexion.php');


$consulta = "SELECT COUNT(id) FROM contactos";
$contar = $conexion->query($consulta);
$resultado = array();

while ($fila = mysqli_fetch_array($contar)) {
      $resultado[] = $fila;
}


echo json_encode($resultado);
