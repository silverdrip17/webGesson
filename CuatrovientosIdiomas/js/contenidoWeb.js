document.addEventListener('DOMContentLoaded', () => {

  // Obtener todos los elementos "navbar-burger"
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Agregar un evento de clic a cada uno de ellos
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Obtener el objetivo del atributo "data-target"
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Alternar la clase "is-active" tanto en "navbar-burger" como en "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
});

let calcScrollValue = () => {
  // Obtiene los elementos
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');

  // Obtiene la posición actual del desplazamiento vertical de la página
  let pos = document.documentElement.scrollTop;

  // Calcula la altura total de desplazamiento posible
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calcula el valor de desplazamiento en porcentaje
  let scrollValue = Math.round((pos * 100) / calcHeight);

  // Si la posición de desplazamiento es mayor a 10 pixels, muestra el elemento de progreso
  if (pos > 10) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }

  // Agrega un evento de clic al elemento de progreso para desplazar al principio de la página
  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  // Establece el fondo del elemento de progreso con un degradado basado en el valor de desplazamiento
  scrollProgress.style.background = `conic-gradient(#9C0D91 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

// Agrega el evento de desplazamiento a la ventana para calcular el valor de desplazamiento al hacer scroll
window.addEventListener('scroll', calcScrollValue);

// Agrega el evento de carga a la ventana para calcular el valor de desplazamiento al cargar la página
window.addEventListener('load', calcScrollValue);
