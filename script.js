
function nombreMayus() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

function apellidoMayus() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}

function validaNombre(){
    if (document.getElementById("apellidos").value != null) {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(document.getElementById("nombre").value)) {
                    
            errores += "El nombre introducido no es valido </br>";

            document.getElementById("nombre").focus();
            document.getElementById("nombre").style.backgroundColor = "red";
        }else{
            document.getElementById("nombre").style.backgroundColor = "white";
        }
    }
}

function validaApellido(){
    if (document.getElementById("apellidos").value != null) {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,})+$/.test(document.getElementById("apellidos").value)) {
                
            errores += "Los apellidos introducidos no son validos </br>";
    
            document.getElementById("apellidos").focus();
            document.getElementById("apellidos").style.backgroundColor = "red";
        }else{
            document.getElementById("apellidos").style.backgroundColor = "white";
            
        } 
    }
    
}

function validaEdad(){
    if (document.getElementById("edad").value != null) {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,})+$/.test(document.getElementById("edad").value)) {
                
            errores += "La edad introducida debe estar entre 0 y 105 años </br>";
    
            document.getElementById("edad").focus();
            document.getElementById("edad").style.backgroundColor = "red";
        }else{
            document.getElementById("edad").style.backgroundColor = "white";
            
        } 
    }
}

function validaNif(){
    if (document.getElementById("nif").value != null) {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,})+$/.test(document.getElementById("nif").value)) {
                
            errores += "El NIF introducido es incorrecto </br>";
    
            document.getElementById("nif").focus();
            document.getElementById("nif").style.backgroundColor = "red";
        }else{
            document.getElementById("nif").style.backgroundColor = "white";
            
        } 
    }
}



function validacion(event){
    
    errores="";

    validaApellido();
    validaNombre();
    
    if(errores!=""){
        event.preventDefault()
        document.getElementById("errores").innerHTML= errores;
        return false;
    }else{

        var confirmacion = confirm('Esta a punto de enviar el formulario ¿Esta seguro?');

        if (!confirmacion){
            evento.preventDefault();
        }
    }
    
}

window.onload = load;

function load(){

    document.getElementById("nombre").addEventListener("focusout", nombreMayus, false);
    document.getElementById("apellidos").addEventListener("focusout", apellidoMayus, false);
    
    
    document.getElementById("formulario").addEventListener("submit", validacion, false);

}