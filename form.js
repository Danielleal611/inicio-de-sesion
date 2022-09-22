function validar_formulario(){
    var nombre = document.formDatosPersonales.user;
    var nombre_len = nombre.value.length;
    if (nombre_len == 0 || nombre_len < 6){
        alert("el nombre de usuario debe tener minimo 6 caracteres.");
    }
    var contraseña = document.formDatosPersonales.password;
    var contraseña_len = contraseña.value.length;
    if (contraseña_len == 0 || contraseña_len < 6){
        alert("la contraseña debe tener minimo 6 caracteres.");
    }

}
function validar_contraseña(){
    var contraseña1 = document.formDatosPersonales.password.value;
    var contraseña2 = document.formDatosPersonales.password2.value; 
    if(contraseña1 == contraseña2){
        alert("contraseña confirmada.");
    }
    else{
        alert("las contraseñas no coinciden.");
    }
}
