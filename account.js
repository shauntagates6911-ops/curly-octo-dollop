// Save account to localStorage
function signup() {
    const u = user.value.trim();
    const p = pass.value.trim();
    const e = email.value.trim();
    const b = birthday.value.trim();

    if (!u || !p || !e || !b) {
        msg.textContent = "All fields required.";
        return;
    }

    // Prevent duplicate usernames
    if (localStorage.getItem("acc_" + u)) {
        msg.textContent = "Username already exists.";
        return;
    }

    const account = {
        username: u,
        password: p,
        email: e,
        birthday: b,
        created: Date.now()
    };

    localStorage.setItem("acc_" + u, JSON.stringify(account));
    localStorage.setItem("currentUser", u);

    msg.textContent = "Account created! Redirecting...";
    setTimeout(() => location.href = "home.html", 800);
}
