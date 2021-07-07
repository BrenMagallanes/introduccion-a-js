const $botonAceptar = document.querySelector('#boton-aceptar');

$botonAceptar.onclick = function() {
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value 
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value
    const apellidoUsuario = document.querySelector('#apellido-usuario').value
    const edadUsuario = document.querySelector('#edad-usuario').value

    document.querySelector('#mostrar-datos').innerText = `Tus nombres son ${primerNombreUsuario} ${segundoNombreUsuario}, tu apellido es ${apellidoUsuario} y tu edad es ${edadUsuario}`
    document.querySelector('#bienvenida-usuario-titulo').innerText = `Bienvenido ${primerNombreUsuario}!`
    document.querySelector('#bienvenida-usuario-titulo').style.color= "purple"
    
    return false;
}
