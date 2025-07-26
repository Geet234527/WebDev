function showAlert() {
  const responses = [
    "Hello world 😁",
  ];
  const rand = Math.floor(Math.random() * responses.length);
  const out = document.getElementById("output");
  out.textContent = responses[rand];
  out.style.marginTop = "15px";
  out.style.fontSize = "18px";
  out.style.fontWeight = "600";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});
