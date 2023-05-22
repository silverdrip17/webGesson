function cursosIdiomas() {
 
    var opciones = document.getElementById("cursosLabel");
    var datos1 = document.getElementById("formCursosIngles");
    var datos2 = document.getElementById("formCursosFrances");
  
    // Reiniciar la visibilidad de los elementos
    datos1.style.display = "none";
    datos2.style.display = "none";

    // Determinar qué botón se ha pulsado y mostrar los datos correspondientes
    if (opciones.value === "Ingles") {
      datos1.style.display = "block";
      datos1.classList.remove('is-hidden');
    } else if (opciones.value === "Frances") {
      datos2.style.display = "block";
      datos2.classList.remove('is-hidden');
    }
  }
