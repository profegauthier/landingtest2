$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('.top-header').addClass('scrolled');
            
        } else {
            $('.navbar').removeClass('scrolled');
            $('.top-header').removeClass('scrolled');
        }
    });
    
    $('#teamCarouselMovil').carousel({
        interval: 2000 // Cambia el número para ajustar el tiempo entre transiciones
    });
    
    $('#videoModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Botón que activó el modal
        var videoSrc = button.data('video'); // Extrae la información del atributo data-video
        var modal = $(this);
        modal.find('.modal-body video source').attr('src', videoSrc);
        modal.find('.modal-body video')[0].load(); // Carga el video
        modal.find('.modal-body video')[0].play(); // Reproduce el video
    });

    // Detiene la reproducción del video cuando se cierra el modal
    $('#videoModal').on('hidden.bs.modal', function (e) {
        $('#videoModal video')[0].pause();
    });

    // cambios de validacion desde acá Maxi Gauthier
    $('form').submit(function(event) {
        // Obtener el valor del campo de nombre
        var nombre = $('input[placeholder="Nombre"]').val().trim();

        // Validar si el campo de nombre está vacío
        if (nombre === '') {
            alert('Por favor, ingrese su nombre.');
            event.preventDefault(); // Evitar el envío del formulario si la validación falla
        } else {
            // Validación de email
            var email = $('input[placeholder="Email"]').val().trim();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                event.preventDefault();
                return;
            } else {
                // Validación de teléfono
                var telefono = $('input[placeholder="Teléfono"]').val().trim();
                var telefonoRegex = /^[0-9]+$/;
                if (telefono === '') {
                    alert('Por favor, ingrese su número de teléfono.');
                    event.preventDefault();
                    return;
                } else if (!telefonoRegex.test(telefono) || telefono.length < 10) {
                    alert('Por favor, ingrese un número de teléfono válido (solo números y al menos 10 dígitos).');
                    event.preventDefault();
                    return;
                } else {
                    // Validación de asunto
                    var asunto = $('input[placeholder="Asunto"]').val().trim();
                    if (asunto === '') {
                        alert('Por favor, ingrese un asunto.');
                        event.preventDefault();
                        return;
                    } else {
                        // Validación de mensaje
                        var mensaje = $('textarea').val().trim();
                        if (mensaje === '' || mensaje.length < 15) {
                            alert('Por favor, ingrese un mensaje con al menos 15 caracteres.');
                            event.preventDefault();
                            return;
                        }
                    }
                }
            }
        }
                    });

    });

