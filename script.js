
function nombreMayus() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

function apellidoMayus() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}

function validaNombre(){
    if (document.getElementById("apellidos").value != "") {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/.test(document.getElementById("nombre").value)) {
                    
            errores += "El nombre introducido no es valido </br>";

            document.getElementById("nombre").focus();
            document.getElementById("nombre").style.backgroundColor = "red";
        }else{
            document.getElementById("nombre").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo nombre no puede estar vacio </br>";
        document.getElementById("nombre").focus();
        document.getElementById("nombre").style.backgroundColor = "red";
    }
}

function validaApellido(){
    if (document.getElementById("apellidos").value != "") {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,})+$/.test(document.getElementById("apellidos").value)) {
                
            errores += "Los apellidos introducidos no son validos </br>";
    
            document.getElementById("apellidos").focus();
            document.getElementById("apellidos").style.backgroundColor = "red";
        }else{
            document.getElementById("apellidos").style.backgroundColor = "white";
            
        } 
    }else{
        errores += "El campo apellidos no puede estar vacio </br>";
        document.getElementById("apellidos").focus();
        document.getElementById("apellidos").style.backgroundColor = "red";
    }
    
}

function validaEdad(){
    if (document.getElementById("edad").value != "") {
        if (!/^(10[0-5]|\d{1,2})$/.test(document.getElementById("edad").value)) {

            errores += "La edad introducida debe estar entre 0 y 105 años </br>";
    
            document.getElementById("edad").focus();
            document.getElementById("edad").style.backgroundColor = "red";
        }else{
            document.getElementById("edad").style.backgroundColor = "white";
            
        }
    }else{
        errores += "El campo edad no puede estar vacio </br>";
        document.getElementById("edad").focus();
        document.getElementById("edad").style.backgroundColor = "red";
    }
}

function validaNif(){
    if (document.getElementById("nif").value != "") {
        if (!/(^[\d]{8})-[A-ZÑÁÉÍÓÚ]{1}$/.test(document.getElementById("nif").value)) {
                /***********************************
                 * VALIDACION CAMPO NIF /(^[\d]{8})-[A-ZÑÁÉÍÓÚ]{1}$/
                 * 
                 * LA PRIMERA PARTE SERIA COMENZAR POR FIJAR LA PARTE NUMERICA DEL NIF
                 * PARA ELLO SE EMPLEA LA EXPRESION (^[\d]{8}) \d SE EMPLEA PARA FIJAR QUE HA DE
                 * SER UN NUMERO ENTRE 0-9 Y CON {8} SE FIJA EL TAMAÑO.
                 * 
                 * DESPUES OBLIGAMOS A QUE HA DE TENER UN GUION PARA ELLO SIMPLEMENTE LO INTRODUCIMOS ENTRE
                 * LAS DOS PARTES DEL NIF -
                 * 
                 * FINALMENTE PARA COMPROBAR LA LETRA, [A-ZÑÁÉÍÓÚ]{1} CON LO QUE OBLIGAMOS QUE TENGA QUE SER UNA
                 * LETRA MAYUSCULA, Y TIENE QUE ESTAR SI O SI, PUES EL TAMAÑO ESTA FIJADO A 1.
                 * 
                 * PARA COMENZAR LA SENTENCIA REGEX EMPLEAMOS ^ Y PARA FINALIZAR LA SENTENCIA USAMOS $
                 ***********************************/
            errores += "El NIF introducido no cumple con el formato 99999999-Z</br>";
    
            document.getElementById("nif").focus();
            document.getElementById("nif").style.backgroundColor = "red";
        }else{
            document.getElementById("nif").style.backgroundColor = "white";
            
        } 
    }else{
        errores += "El campo NIF no puede estar vacio </br>";
        document.getElementById("nif").focus();
        document.getElementById("nif").style.backgroundColor = "red";
    }
}

function validaEmail(){
    if (document.getElementById("email").value != "") {
        if (!/(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,})+$/.test(document.getElementById("email").value)) {
                
            errores += "El Email introducido no cumple con el formato example@example.com </br>";
    
            document.getElementById("email").focus();
            document.getElementById("email").style.backgroundColor = "red";
        }else{
            document.getElementById("email").style.backgroundColor = "white";
            
        } 
    }else{
        errores += "El campo Email no puede estar vacio </br>";
        document.getElementById("email").focus();
        document.getElementById("email").style.backgroundColor = "red";
    }
}

function validacion(event){
    
    errores="";
    validaEmail();
    validaNif();
    validaEdad();
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