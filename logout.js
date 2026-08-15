function logout() {
    localStorage.removeItem("currentUser");
    location.href = "signin.html";
}
