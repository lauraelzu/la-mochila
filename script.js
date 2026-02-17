const paginas = document.querySelectorAll(".page");
let paginaActual = 0;

/* Mostrar imagen con delay */
function mostrarImagenDePagina(index) {
  paginas.forEach((pagina, i) => {
    const img = pagina.querySelector(".imagen-momento");

    if (!img) return;

    if (i === index) {
      img.classList.add("ocultar");

      setTimeout(() => {
        img.classList.remove("ocultar");
      }, 600);
    } else {
      img.classList.add("ocultar");
    }
  });
}

/* Botón siguiente */
function siguientePagina() {
  if (paginaActual < paginas.length - 1) {
    paginas[paginaActual].classList.add("turn");
    paginaActual++;
    mostrarImagenDePagina(paginaActual);
  }
}

/* Botón anterior */
function paginaAnterior() {
  if (paginaActual > 0) {
    paginaActual--;
    paginas[paginaActual].classList.remove("turn");
    mostrarImagenDePagina(paginaActual);
  }
}

/* Inicial */
window.onload = () => {
  mostrarImagenDePagina(0);
};


