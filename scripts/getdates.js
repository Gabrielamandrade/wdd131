document.getElementById("currentyear").textContent = new Date().getFullYear();

const el = document.getElementById("lastModified");
if (el) {
  el.textContent = "Last modified: " + document.lastModified;
}

