<?php
$conexion = mysqli_connect("localhost","root","","inicio_sesion");
if(!$conexion){
    echo "No se pudo conectar con el servidor.".PHP_EOL;
}
?>