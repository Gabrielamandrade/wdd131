document.getElementById("currentyear").textContent = new Date().getFullYear();

const el = document.getElementById("lastModified");
if (el) {
  el.textContent = "Last modified: " + document.lastModified;
}

// Pega o ano atual
const year = new Date().getFullYear();

// Seleciona o parágrafo que contém o ano
const p = document.querySelector('footer p');

// Coloca o texto com os emojis no lugar dos traços
p.innerHTML = `${year} 🍴🥄 Gabriela Magalhães de Andrade 🍳🔪 Brazil`;
