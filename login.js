document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username");
  const pass = document.getElementById("password");
  const error = document.getElementById("error");

  const validUsers = [
    { username: "Geet", password: "Saifu" },
    { username: "Tristan", password: "Jhon" }
  ];

  const isValid = validUsers.some(u => u.username === user.value && u.password === pass.value);

  if (isValid) {
    error.textContent = "";
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = "geetdev.html";
    }, 500);
  } else {
    error.textContent = "Username atau password salah!";
    user.classList.add("shake");
    pass.classList.add("shake");
    setTimeout(() => {
      user.classList.remove("shake");
      pass.classList.remove("shake");
    }, 300);
  }
});
