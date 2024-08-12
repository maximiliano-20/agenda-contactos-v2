<?php
session_start();

include('conexion.php');


$nombre=isset($_POST['nombre']) ? mysqli_real_escape_string($conexion,$_POST['nombre']) : false;
$apellido=isset($_POST['apellido']) ? mysqli_real_escape_string($conexion,$_POST['apellido']) : false;
$email=isset($_POST['email']) ? mysqli_real_escape_string($conexion,$_POST['email']) : false;
$telefono=isset($_POST['telefono']) ? mysqli_real_escape_string($conexion,$_POST['telefono']) : false;


if ($nombre === "" || $apellido == "" || $email == "" || $telefono == "") {
    return;
}


$consulta = "INSERT INTO contactos VALUES (null,'$nombre','$apellido','$email','$telefono')";
$insertar = $conexion->query($consulta);
echo json_encode($insertar);






