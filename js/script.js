document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu-items a');
  
    // Función para actualizar el estilo del menú al hacer clic o desplazarse
    function updateMenuStyle() {
      var scrollPosition = window.scrollY;
  
      // Remover la clase 'selected' de todos los elementos del menú
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove('selected');
      });
  
      // Agregar la clase 'selected' al elemento del menú correspondiente al área visible
      menuItems.forEach(function (menuItem) {
        var targetId = menuItem.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          var targetOffset = targetElement.offsetTop;
          var targetHeight = targetElement.offsetHeight;
  
          if (scrollPosition >= targetOffset && scrollPosition < targetOffset + targetHeight) {
            menuItem.classList.add('selected');
          }
        }
      });
    }
  
    // Escuchador de eventos para el clic en el menú
    menuItems.forEach(function (item) {
      item.addEventListener('click', function () {
        updateMenuStyle();
      });
    });
  
    // Escuchador de eventos para el desplazamiento de la página
    window.addEventListener('scroll', function () {
      updateMenuStyle();
    });
  
    // Llamar a la función para establecer el estilo inicial
    updateMenuStyle();
  });
  