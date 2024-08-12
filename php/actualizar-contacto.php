<?php

include('conexion.php');

$id = isset($_POST['id']) ? $_POST['id'] : false;
$nombre=isset($_POST['nombre']) ? mysqli_real_escape_string($conexion,$_POST['nombre']) : false;
$apellido=isset($_POST['apellido']) ? mysqli_real_escape_string($conexion,$_POST['apellido']) : false;
$email=isset($_POST['email']) ? mysqli_real_escape_string($conexion,$_POST['email']) : false;
$telefono=isset($_POST['telefono']) ? mysqli_real_escape_string($conexion,$_POST['telefono']) : false;


if ($nombre === "" || $apellido == "" || $email == "" || $telefono == "") {
    return;
}


$consulta = "UPDATE contactos SET nombre='$nombre',apellido='$apellido',email='$email',telefono='$telefono' 
WHERE id=$id";

$actualizar = $conexion->query($consulta);
echo json_encode($actualizar);