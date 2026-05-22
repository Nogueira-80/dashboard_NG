const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger");
const icon = document.getElementById("burgerIcon");
const links = document.querySelectorAll(".nav-link");

let isOpen = false;

/* Abrir / fechar */
burger.addEventListener("click", () => {
  isOpen = !isOpen;
  sidebar.classList.toggle("open");
  icon.textContent = isOpen ? "close" : "menu";
});

/* Detectar link ativo automaticamente */
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});