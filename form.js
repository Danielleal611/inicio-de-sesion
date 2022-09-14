function validar_formulario(){
    var nombre = document.formDatosPersonales.user;
    var nombre_len = nombre.value.length;
    if (nombre_len == 0 || nombre_len < 6){
        alert("el usuario debe tener minimo 6 caracteres.");
    }

}