$(document).ready(function () {

    if(sessionStorage.getItem('tokenAPI')){
        $('#itemReservar').removeClass('invisible');
        $('#loginuser').addClass('invisible');
        $('#panelLogout').removeClass('invisible');
    }
    else{
        $('#itemReservar').addClass('invisible');

    }


    $( "#fechaNacimiento" ).datepicker(
        {
            changeMonth: true,
            changeYear: true
          }
    );
          $( "#anim" ).on( "change", function() {
            $( "#fechaNacimiento" ).datepicker( "option", "showAnim", $( this ).val() );
          });


    $('#contenedorPrincipal').load('BloqueInicio.html');

    $('#botonInicio').click(function () {
        $('#contenedorPrincipal').load('BloqueInicio.html');
    });

    $('#logo').click(function () {
        $('#contenedorPrincipal').load('BloqueInicio.html');
    });

    $('#botonInstalaciones').click(function () {
        $('#contenedorPrincipal').load('BloqueInstalaciones.html');
        $('#botonInicio').removeClass('activo');
        $('#botonInstalaciones').addClass('activo');
        $('#botoServicios').removeClass('activo');
        $('#itemReservar').removeClass('activo');

    });

    $('#botoServicios').click(function () {
        $('#contenedorPrincipal').load('BloqueServicios.html');
        $('#botonInicio').removeClass('activo');
        $('#botonInstalaciones').removeClass('activo');
        $('#botoServicios').addClass('activo');
    });
    $('#panelLogout').click(function () {
        sessionStorage.removeItem("tokenAPI");
        sessionStorage.clear();
        $('#itemReservar').addClass('invisible');
        $('#loginuser').removeClass('invisible');
        $('#panelLogout').addClass('invisible');
        window.document.location.href = 'index.html';
    });
    
    function validarDatos() {
        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
$(document).on('click','#btnIniciarSesion',function () {
    let usuario = $('#txtUser').val();
    let password = $('#txtPassword').val();
    let url = "http://fenw.etsisi.upm.es:10000/users/login"
    $.ajax(
        {
            url: url,
            type: "GET",
            port: 10000,
            data:{"username":usuario, "password":password},
            datatype:"json"
        }
    ).done(function (data, textStatus, request) {
        sessionStorage.setItem('tokenAPI', request.getResponseHeader('Authorization'));
        sessionStorage.setItem('username', usuario);
        window.document.location.href = 'index.html';
       // alert(sessionStorage.getItem('tokenAPI'));
    });
});
});
