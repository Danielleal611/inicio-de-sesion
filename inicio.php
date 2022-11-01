<?php
include ("conexion.php");
require ("conexion.php");
$nombre = ($_POST["nombre"]);
$usuario = ($_POST["usuario"]);
$contraseña = ($_POST["contraseña"]);

$insertar = "INSERT INTO datos (Nombre, Usuario, Contraseña) VALUES ('$nombre', '$usuario', '$contraseña')";
$consulta = mysqli_query($conexion, $insertar);
if($insertar){
    echo "Registro exitoso";
}
else{
    echo "Error de conexion.";
}
?>