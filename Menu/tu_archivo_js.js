ddocument.addEventListener('DOMContentLoaded', function () {
    const icono = document.getElementById('icono');
    const listaDesplegable = document.getElementById('listaDesplegable');
  
    icono.addEventListener('click', function () {
      // Alternar la visibilidad de la lista desplegable al hacer clic en el icono
      listaDesplegable.style.display = listaDesplegable.style.display === 'none' ? 'block' : 'none';
    });
  });
  