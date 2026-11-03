// Demo credentials. Replace with a real server login later.
const DEMO_USER = "admin";
const DEMO_PASS = "rdb123";

document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;

    if (user === DEMO_USER && pass === DEMO_PASS) {
        sessionStorage.setItem("rdbLoggedIn", "yes");
        location.href = "dashboard.html";
    } else {
        document.getElementById("loginMessage").textContent =
            "Incorrect username or password.";
    }
});
