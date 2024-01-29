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
        
});

