const slides = document.querySelectorAll(".slide");
const anterior = document.querySelector(".anterior");
const siguiente = document.querySelector(".siguiente");
const indicadores = document.querySelectorAll(".indicador");

let actual = 0;
let intervalo;

function mostrarSlide(numero) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  indicadores.forEach((indicador) => {
    indicador.classList.remove("activo");
  });

  slides[numero].style.display = "block";
  indicadores[numero].classList.add("activo");
}

function siguienteSlide() {
  actual++;

  if (actual >= slides.length) {
    actual = 0;
  }

  mostrarSlide(actual);
}

function anteriorSlide() {
  actual--;

  if (actual < 0) {
    actual = slides.length - 1;
  }

  mostrarSlide(actual);
}

function iniciarSlider() {
  clearInterval(intervalo);

  intervalo = setInterval(() => {
    siguienteSlide();
  }, 5000);
}

siguiente.addEventListener("click", () => {
  siguienteSlide();
  iniciarSlider();
});

anterior.addEventListener("click", () => {
  anteriorSlide();
  iniciarSlider();
});

indicadores.forEach((indicador, indice) => {
  indicador.addEventListener("click", () => {
    actual = indice;
    mostrarSlide(actual);
    iniciarSlider();
  });
});

mostrarSlide(actual);
iniciarSlider();
