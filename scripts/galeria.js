
// Galería de imágenes del producto

const imagenPrincipal = document.querySelector("#imagen-principal");
const miniaturas = document.querySelectorAll(".miniatura");
const botonAnterior = document.querySelector(".galeria-anterior");
const botonSiguiente = document.querySelector(".galeria-siguiente");
const contenedorImagen = document.querySelector(
  ".producto-imagen-principal",
);
const botonZoom = document.querySelector("#boton-zoom");

let imagenActual = 0;

function mostrarImagen(indice) {
  imagenActual = (indice + miniaturas.length) % miniaturas.length;

  const miniaturaActual = miniaturas[imagenActual];
  const imagenMiniatura = miniaturaActual.querySelector("img");

  imagenPrincipal.src = imagenMiniatura.src;
  imagenPrincipal.alt = imagenMiniatura.alt;

  miniaturas.forEach((miniatura, posicion) => {
    const activa = posicion === imagenActual;

    miniatura.classList.toggle("activa", activa);
    miniatura.setAttribute("aria-pressed", String(activa));
  });

  // Restablecer el zoom al cambiar de imagen.
  contenedorImagen.classList.remove("zoom-activo");
  botonZoom.setAttribute("aria-pressed", "false");
  botonZoom.innerHTML =
    '<i class="fas fa-search-plus"></i><span>Ampliar imagen</span>';
}

miniaturas.forEach((miniatura, indice) => {
  miniatura.addEventListener("click", () => {
    mostrarImagen(indice);
  });
});

botonAnterior.addEventListener("click", () => {
  mostrarImagen(imagenActual - 1);
});

botonSiguiente.addEventListener("click", () => {
  mostrarImagen(imagenActual + 1);
});

// Activar o desactivar zoom.

function alternarZoom() {
  const zoomActivo = contenedorImagen.classList.toggle("zoom-activo");

  botonZoom.setAttribute("aria-pressed", String(zoomActivo));
  botonZoom.innerHTML = zoomActivo
    ? '<i class="fas fa-search-minus"></i><span>Reducir imagen</span>'
    : '<i class="fas fa-search-plus"></i><span>Ampliar imagen</span>';
}

botonZoom.addEventListener("click", alternarZoom);

imagenPrincipal.addEventListener("click", alternarZoom);

// Simulación de compra.

const botonComprar = document.querySelector("#boton-comprar");
const mensajeCompra = document.querySelector("#compra-mensaje");

botonComprar.addEventListener("click", () => {
  mensajeCompra.hidden = false;

  botonComprar.innerHTML =
    '<i class="fas fa-check"></i> Compra de demostración realizada';

  botonComprar.disabled = true;
  botonComprar.style.cursor = "default";
});
