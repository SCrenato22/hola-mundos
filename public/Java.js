const btnAdd = document.getElementById('btnAdd');
const lcanciones = document.getElementById('lcanciones');
const inputsong = document.getElementById('inputsong');

// Agrega un evento de clic al botón
btnAdd.addEventListener('click', () => {
  const nuevaCancion = inputsong.value.trim(); // Obtiene el valor del input
  if (nuevaCancion) {
    // Crea un nuevo elemento <li>
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nuevaCancion;

    // Agrega el nuevo elemento a la lista
    lcanciones.appendChild(nuevoElemento);

    // Limpia el campo de entrada
    inputsong.value = '';
  } else {
    alert('Por favor, ingresa el nombre de una canción.');
  }
});