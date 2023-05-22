  // Obtener el botón y el ícono de la tarjeta
  var tarjeta = document.querySelector('.card');
  var icono = tarjeta.querySelector('i');

  // Agregar evento de clic al botón
  tarjeta.addEventListener('click', () => {
    // Cambiar el ícono al hacer clic
    if (icono.classList.contains('fa-angle-down')) {
      icono.classList.remove('fa-angle-down');
      icono.classList.add('fa-angle-up');
    } else {
      icono.classList.remove('fa-angle-up');
      icono.classList.add('fa-angle-down');
    }
  });

  // Obtener la tarjeta, el ícono y el contenido
  var contenido = tarjeta.querySelector('.card-content');

  // Agregar evento de clic al ícono
  tarjeta.addEventListener('click', function () {
    // Verificar si el ícono tiene la clase "active" informacion sacada de --> https://developer.mozilla.org/es/docs/Web/API/Element/classList
    if (tarjeta.classList.contains('active')) {
      // Si tiene la clase "active", se elimina y se oculta el contenido
      tarjeta.classList.remove('active');
      contenido.style.display = 'none';
    } else {
      // Si no tiene la clase "active", se agrega y se muestra el contenido
      tarjeta.classList.add('active');
      contenido.style.display = 'block';
    }
  });