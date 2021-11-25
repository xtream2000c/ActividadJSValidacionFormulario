
function nombreMayus() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

function apellidoMayus() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}

function validaNombre(){
    if (document.getElementById("nombre").value != "") {
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
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {
                /************************************
                 * 
                 * \w+([\.-]?\w+)* CON ESTA EXPRESION SE PERMITE QUE LA PARTE INICIAL
                 * DEL EMAIL TENGA PALABRAS ALFANUMETICAS, \w+ POSTERIORMENTE CON ([\.-]?\w+)*
                 * SE PERMITE QUE PUEDA HABER UN PUNTO O GUION SEGUIDO DE UNA PALABRA Y CON * SE
                 * INDICA QUE ESTA PARTE PUEDE REPETIRSE 0 O VARIAS VECES.
                 * 
                 * TRAS EL NOMBRE DEL EMAIL, VIENE @ PARA OBLIGAR QUE TENGA QUE ESTAR PRESENTE, Y SEGUIDO DE
                 * LA MISMA SENTENCIA QUE ANTES, PARA EL SUBDOMINIO DE CORREO ELECTRONICO w+([\.-]?\w+)*
                 * 
                 * FINALMENTE (\.\w{2,3})+ CON ESTA SENTENCIA SE OBLIGA A PONER UN PUNTO
                 * SEGUIDO DE UNA PALABRA DE LONGITUD ENTRE 2 Y 3 CARACTERES, Y ESTA PARTE PUEDE REPETIRSE UNA O MAS
                 * VECES.
                 * 
                 *************************************/
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

function validaProvincia(){
    if(document.getElementById("provincia").value != "0"){

        document.getElementById("provincia").style.backgroundColor = "white";

    }else{
        errores += "No se ha seleccionado ninguna provincia </br>";
        document.getElementById("provincia").focus();
        document.getElementById("provincia").style.backgroundColor = "red";
    }
}

function validaFechaNac(){
    if (document.getElementById("fecha").value != "") {
        if (!/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[0-2])\1\d{4}$/.test(document.getElementById("fecha").value)) {
            /*******************************
             * PARA LOS DIAS (?:3[01]|[12][0-9]|0?[1-9])
             * ?:3[01] PUEDE APARECER EL 3 O NO 
             * [12][0-9] PRIMER DIGITO 1 O 2 SEGUIDO DE UN DIGITO ENTRE 0 Y 9
             * 0?[1-9] PUEDE APARECER EL 0 O NO, SEGUIDO DE UN NUMERO ENTRE 1 Y 9
             * 
             * ([\.-]) OBLIGA A INTRODUCIR O . O - PARA SEPARAR LOS DIAS DE LOS MESES
             * 
             * PARA LOS MESES (0?[1-9]|1[0-2])\1
             * 
             * 0?[1-9] PUEDE APARECER O NO 0 SEGUIDO DE UN NUMERO DEL 1 AL 9
             * 1[0-2] APARECE UN 1 SEGUIDO DE 0 O 2
             * \1 NO TERMINO DE ENTENDER QUE HACE, PERO ES ALGO TIPO RECIBE EL FORMATO
             * Y DESPUES LOS VALORES EL EJEMPLO QUE HE ENCONTRADO (A|B)\1 PUEDE DAR AA O BB 
             * 
             * PARA EL AÑO \d{4}
             * 
             * 4 DIGITOS NUMERICOS ENTRE 0 Y 9
             * 
             *******************************/
            errores += "La fecha introducido no cumple con el formato dd-mm-aaaa</br>";

            document.getElementById("fecha").focus();
            document.getElementById("fecha").style.backgroundColor = "red";
        }else{
            document.getElementById("fecha").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo fecha no puede estar vacio </br>";
        document.getElementById("fecha").focus();
        document.getElementById("fecha").style.backgroundColor = "red";
    }
}

function validaTelf(){
    if (document.getElementById("telefono").value != "") {
        if (!/^\d{9}$/.test(document.getElementById("telefono").value)) {
            /*************************************************
             * 
             * CON LA EXPRESION /d SE PERMITE CUALQUIER CARACTER NUMERICO
             * Y CON {9} SE OBLIGA A QUE LA LONGITUD DE LA CADENA DEBE TENER
             * 9 CARACTERES
             * 
             *************************************************/
            errores += "El telefono introducido no cumple con el formato </br>";

            document.getElementById("telefono").focus();
            document.getElementById("telefono").style.backgroundColor = "red";
        }else{
            document.getElementById("telefono").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo telefono no puede estar vacio </br>";
        document.getElementById("telefono").focus();
        document.getElementById("telefono").style.backgroundColor = "red";
    }
}

function validaHora(){
    if (document.getElementById("hora").value != "") {
        if (!/^([0-1][0-9]|2[0-3])(:)([0-5][0-9])$/.test(document.getElementById("hora").value)) {
            /****************************
             * 
             * PARA LAS HORAS ([0-1][0-9]|2[0-3])
             * [0-1][0-9] DOS DIGITOS ENTRE 00 Y 19
             * 2[0-3] DOS DIGITOS ENTRE 20 Y 23
             * 
             * SEPARADOR (:)
             * 
             * PARA LOS MINUTOS ([0-5][0-9])
             * DOS DIGITOS ENTRE 00 Y 59
             */ 
            errores += "La hora introducido no cumple con el formato hh:mm </br>";

            document.getElementById("hora").focus();
            document.getElementById("hora").style.backgroundColor = "red";
        }else{
            document.getElementById("hora").style.backgroundColor = "white";
        }
    }else{
        errores += "El campo hora no puede estar vacio </br>";
        document.getElementById("hora").focus();
        document.getElementById("hora").style.backgroundColor = "red";
    }
}

function validacion(event){
    
    errores="";
    validaHora();
    validaTelf();
    validaFechaNac();
    validaProvincia();
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