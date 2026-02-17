let currentPage = 0;
const pages = document.querySelectorAll(".page");
const total = pages.length;

function showPage(index, direction) {
  pages.forEach(p => {
    p.classList.remove("active", "exit-left", "exit-right");
  });

  pages[index].classList.add("active");

  // actualizar contador
  document.getElementById("counter").textContent =
    "Página " + (index + 1) + " de " + total;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("exit-left");
    currentPage++;
    showPage(currentPage, "next");
  }
}

function prevPage() {
  if (currentPage > 0) {
    pages[currentPage].classList.add("exit-right");
    currentPage--;
    showPage(currentPage, "prev");
  }
}

showPage(currentPage);
