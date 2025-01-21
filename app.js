// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Valida que el nombre no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agrega el nombre a la lista
  listaAmigos.push(nombreAmigo);

  // Limpia el campo de texto
  inputAmigo.value = "";

  // Actualiza la lista visible en la página
  mostrarLista();
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
  const ulListaAmigos = document.getElementById("listaAmigos");

  // Limpia la lista antes de actualizar
  ulListaAmigos.innerHTML = "";

  // Agrega cada amigo como un elemento de la lista
  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    // Botón para eliminar un nombre
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "button-remove";
    botonEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(botonEliminar);
    ulListaAmigos.appendChild(li);
  });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
  listaAmigos.splice(index, 1);
  mostrarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  // Aqui valida que haya al menos un amigo en la lista
  if (listaAmigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un amigo.");
    return;
  }

  // Selecciona un nombre aleatorio
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];

  // Visibiliza el resultado en la página
  const ulResultado = document.getElementById("resultado");
  ulResultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}

//Funcion para reiniciar el juego
function reiniciarJuego() {
  listaAmigos = [];
  mostrarLista();
  const ulResultado = document.getElementById("resultado");
  ulResultado.innerHTML = "";
}
