// Obtener todos los elementos de enlace de pestaña
const tabLinks = document.querySelectorAll('.tabs .tab');

// Para cada enlace de pestaña, agregar un manejador de eventos click
tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener la pestaña activa actualmente
    const currentTab = document.querySelector('.tabs .tab.is-active');

    // Quitar la clase is-active de la pestaña activa actualmente
    currentTab.classList.remove('is-active');

    // Agregar la clase is-active a la pestaña clickeada
    link.classList.add('is-active');

    // Obtener el identificador de la pestaña a mostrar
    const target = link.querySelector('a').getAttribute('href');

    // Ocultar todo el contenido de pestañas
    const tabContents = document.querySelectorAll('.tab-content > div');
    tabContents.forEach((content) => {
      content.classList.add('is-hidden');
    });

    // Mostrar el contenido de la pestaña correspondiente
    const targetContent = document.querySelector(target);
    targetContent.classList.remove('is-hidden');
  });
});