var idEmail = document.getElementById('textoEmail'); // Elemento de entrada de correo electrónico
var textoAyudaEmail = document.getElementById('ayudaEmail'); // Elemento para mostrar el mensaje de ayuda del correo electrónico
var formulario = document.getElementById('formulario');
var fechaNacimientoValida = false;

// Evento de entrada para validar el correo electrónico
idEmail.addEventListener('input', function () {
    var email = idEmail.value.trim(); // Obtener el valor del correo electrónico y eliminar espacios en blanco
    var esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Validar el formato del correo electrónico usando una expresión regular

    // Restablecer clases y contenido de ayuda del correo electrónico
    idEmail.classList.remove('is-danger', 'is-success');
    textoAyudaEmail.textContent = '';

    if ((esValido) && (!email.startsWith('.')) && (!email.endsWith('.'))) {
        idEmail.classList.add('is-success'); // Agregar clase de éxito si el correo electrónico es válido
    } else {
        idEmail.classList.add('is-danger'); // Agregar clase de error si el correo electrónico no es válido
        textoAyudaEmail.textContent = 'Por favor, ingresa un correo electrónico válido.'; // Mostrar mensaje de ayuda
    }
});

// Evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    var email = idEmail.value.trim();
    var isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var cursosLabel = document.getElementById('cursosLabel');
    var eleccion = cursosLabel ? cursosLabel.value : '';
    
    if (
      email.startsWith('.') ||
      !isValid ||
      eleccion === 'Seleccione idioma a cursar' 
    ) {
      event.preventDefault();
  
      if (cursosLabel && cursosLabel.value === 'Seleccione idioma a cursar') {
        var textoAyudaCursosLabel = document.getElementById('ayudaCursos');
        if (textoAyudaCursosLabel) {
          textoAyudaCursosLabel.textContent = 'Por favor, selecciona un idioma válido.';
        }
      }
    }
    var fechaNacimiento = new Date(fechaNacimientoInput.value);
    var fechaActual = new Date();

    var diferenciaAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (diferenciaAnios < 8 || diferenciaAnios > 150) {
        event.preventDefault(); // Evitar el envío del formulario
    }
});


// Evento de restablecimiento del formulario
formulario.addEventListener('reset', function () {
    idEmail.classList.remove('is-danger', 'is-success'); // Restablecer las clases de estado del correo electrónico
});
var cursosLabel = document.getElementById('cursosLabel'); // Guardamos en una variable el elemento por su ID

if (cursosLabel) { // Comprobamos si el elemento existe
    var textoAyudaCursosLabel = document.getElementById('ayudaCursos'); // Elemento para mostrar el mensaje de ayuda del selector
    cursosLabel.addEventListener('change', function () {
        if (cursosLabel.value === 'Seleccione idioma a cursar') {
            // No se ha seleccionado ninguna opción válida
            textoAyudaCursosLabel.textContent = 'Por favor, selecciona un idioma válido.'; // Mostrar mensaje de ayuda
        } else {
            textoAyudaCursosLabel.textContent = ''; // Restablecer mensaje de ayuda
        }
    });
    var fechaNacimientoInput = document.getElementById('fecha'); // Obtener el elemento de entrada de fecha de nacimiento
    fechaNacimientoInput.addEventListener('change', function () {
        var fechaNacimiento = new Date(fechaNacimientoInput.value); // Obtener la fecha de nacimiento ingresada como objeto Date
        var fechaActual = new Date(); // Obtener la fecha actual como objeto Date
        var textoAyudaNacimiento = document.getElementById('ayudaNacimiento'); // Elemento para mostrar el mensaje de ayuda de la fecha
        var diferenciaAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear(); // Calcular la diferencia de años entre la fecha de nacimiento y la fecha actual
    
        if (diferenciaAnios < 8 || diferenciaAnios > 150) {
            textoAyudaNacimiento.textContent = "Por favor, selecciona una fecha válida. Debes tener entre 8 y 150 años."; // Mostrar mensaje de ayuda
        } else {
            textoAyudaNacimiento.textContent = ""; // Restablecer mensaje de ayuda
        }
    });
    

}


