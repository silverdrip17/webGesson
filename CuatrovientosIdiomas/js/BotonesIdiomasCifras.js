function mostrarDatos() {
 
    var datos1 = document.getElementById("datosIngles");
    var datos2 = document.getElementById("datosFrances");
  
    // Reiniciar la visibilidad de los elementos
    datos1.style.display = "none";
    datos2.style.display = "none";
  
    // Determinar qué botón se ha pulsado y mostrar los datos correspondientes
    if (event.target.id === "btn1") {
      datos1.style.display = "block";
      datos1.classList.remove('is-hidden');
    } else if (event.target.id === "btn2") {
      datos2.style.display = "block";
      datos2.classList.remove('is-hidden');
    }
  }