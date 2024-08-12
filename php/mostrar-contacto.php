<?php 

include('conexion.php');


$consulta = "SELECT * FROM contactos";
$mostrar = $conexion->query($consulta);
$resultado = array();

while ($fila = mysqli_fetch_array($mostrar)) {
       $resultado[] = $fila;
}

echo json_encode($resultado);