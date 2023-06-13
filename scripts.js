function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtén los valores de los campos de entrada
    var nombre = document.querySelector('input[type="text"]').value;
    var fecha = document.querySelector('input[type="date"]').value;
    var hora = document.querySelector('input[type="time"]').value;
    var personas = document.querySelector('input[type="number"]').value;
  
    // Verifica si los campos requeridos están vacíos
    if (nombre === '' || fecha === '' || hora === '' || personas === '') {
      alert('Por favor, completa todos los campos.');
    } else {
     
      alert('¡Formulario enviado con éxito!');
      document.getElementById('reservacion-form').reset(); 
    }
  }
  