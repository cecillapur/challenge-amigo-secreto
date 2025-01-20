let listaAmigos = [];

// Agregar amigo
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  listaAmigos.push(nombreAmigo);
  inputAmigo.value = "";
  mostrarLista();
}

// Mostrar lista
function mostrarLista() {
  const ulListaAmigos = document.getElementById("listaAmigos");
  ulListaAmigos.innerHTML = "";

  listaAmigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "button-remove";
    botonEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(botonEliminar);
    ulListaAmigos.appendChild(li);
  });
}

// Eliminar amigo
function eliminarAmigo(index) {
  listaAmigos.splice(index, 1);
  mostrarLista();
}

// Sortear
function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("La lista está vacía.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];

  const ulResultado = document.getElementById("resultado");
  ulResultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
