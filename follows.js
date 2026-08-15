function getCurrentUser() {
    const u = localStorage.getItem("currentUser");
    if (!u) return null;

    const data = localStorage.getItem("acc_" + u);
    if (!data) return null;

    return JSON.parse(data);
}

const user = getCurrentUser();

if (user) {
    console.log("Logged in as:", user.username);
    // Example: show username in top bar
    document.getElementById("guideBar").textContent =
        "// Logged in as: " + user.username;
} else {
    // Not logged in → redirect
    location.href = "signin.html";
}
