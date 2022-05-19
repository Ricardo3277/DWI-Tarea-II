//Simulacion de BASE DE DATOS
const BaseDeDatos = [{
    user: "Ricardo",
    contrasenaB: "12345"
}]

//var Usuario = document.getElementById('usuario').value;
//const domContrasena = document.getElementById('contrasena');
const domBotonEntrar = document.getElementById('botonEntrar');
//const domCheck = document.getElementById('Check');

function ValidarInfo() {

    var Contrasena = document.getElementById('contrasena').value;
    var Usuario = document.getElementById('usuario').value;
    var Check = document.getElementById('box').checked;


    if (Usuario == `${BaseDeDatos[0].user}` && Contrasena == `${BaseDeDatos[0].contrasenaB}`) {
        var Check = document.getElementById('box').checked;
        if (Check == false) {
            alert("Verifica el reCaptcha")
        } else {
            window.location = "../CarritoCompras/carrito.html";
        }
    } else {
        alert("Usuario y/o Contraseña son incorrectos")

    }
}

domBotonEntrar.addEventListener('click', ValidarInfo)