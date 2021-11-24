
function nombreMayus() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

function apellidoMayus() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}

function validaNombre(){
    if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(document.getElementById("nombre").value)) {
                
        errores += "El nombre introducido no es valido </br>";

        document.getElementById("nombre").focus();
        document.getElementById("nombre").style.backgroundColor = "red";
    }else{
        document.getElementById("nombre").style.backgroundColor = "white";
    }
}

function validaApellido(){
    if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(document.getElementById("apellidos").value)) {
                
        errores += "Los apellidos introducidos no son validos </br>";

        document.getElementById("apellidos").focus();
        document.getElementById("apellidos").style.backgroundColor = "red";
    }else{
        document.getElementById("apellidos").style.backgroundColor = "white";
    }
}

function validacion(){
    document.getElementById("formulario").preventDefault();
    errores="";
    validaNombre();
    validaApellido();
    document.getElementById("errores").innerHTML= errores;
    return false;
}

window.onload = load;

function load(){

    document.getElementById("nombre").addEventListener("focusout", nombreMayus, false);
    document.getElementById("apellidos").addEventListener("focusout", apellidoMayus, false);
    document.getElementById("enviar").addEventListener("onsubmit", function(event){event.preventDefault()
    return false}, false);

}