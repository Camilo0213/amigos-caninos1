document.addEventListener("DOMContentLoaded", function() {
  // Acceder al formulario de contacto
  const contactForm = document.getElementById('contact-form');

  // Escuchar el evento de envío del formulario
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    const nombreElement = document.getElementById('id-nombre');
    const nombre = nombreElement ? nombreElement.value : '';
    const email = document.getElementById('id-email').value;
    const mensaje = document.getElementById('id-mensaje').value;
  
    // Realizar alguna operación con los valores del formulario
    // Por ejemplo, enviar los datos a través de una solicitud AJAX
  
    // Reiniciar el formulario
    contactForm.reset();

    // Obtener el elemento de la alerta por su ID
    var alertaEnvio = document.getElementById("alerta-envio");

    // Mostrar la alerta y cambiar su contenido
    alertaEnvio.style.display = "block";
    alertaEnvio.textContent = "¡El formulario se ha enviado correctamente!";
  
    // Obtener el elemento del botón de cierre
    var btnCerrar = document.getElementById("btn-cerrar");

    // Función para ocultar la alerta
    function ocultarAlerta() {
      alertaEnvio.style.display = "none";
    }

    // Agregar el evento de clic al botón de cierre
    btnCerrar.addEventListener("click", ocultarAlerta);

    // Ocultar la alerta después de 3 segundos (3000 ms)
    setTimeout(ocultarAlerta, 3000);
  });
});

const nombreElement = document.getElementById('nombre');
const nombre = nombreElement ? nombreElement.value : '';