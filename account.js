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
function signin() {
    const u = user.value.trim();
    const p = pass.value.trim();

    const data = localStorage.getItem("acc_" + u);
    if (!data) {
        msg.textContent = "No such user.";
        return;
    }

    const acc = JSON.parse(data);

    if (acc.password !== p) {
        msg.textContent = "Wrong password.";
        return;
    }

    localStorage.setItem("currentUser", u);
    msg.textContent = "Signed in!";
    setTimeout(() => location.href = "home.html", 800);
}
