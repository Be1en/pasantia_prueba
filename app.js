
  document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces del menú, excluyendo el enlace del dropdown
    const menuLinks = document.querySelectorAll('.navbar-menu > li > a:not(.dropdown-toggle)');

    // Agregar un evento de clic a cada enlace
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Obtener el checkbox del menú
            const menuCheckbox = document.getElementById('menu');
            // Verificar si el menú está abierto
            if (menuCheckbox.checked) {
                // Cerrar el menú si está abierto
                menuCheckbox.checked = false;
            }
        });
    });


    // Cerrar el menú cuando se desplaza hacia abajo
    window.addEventListener('scroll', function() {
        const menuCheckbox = document.getElementById('menu');
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
        }
    });
});
