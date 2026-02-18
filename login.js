const correctUsername = "FatherName";
const correctPassword = "MotherName";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "gallery.html";
    } else {
        document.getElementById("message").textContent = "Login failed — try again!";
        document.getElementById("message").style.color = "red";
    }
});
