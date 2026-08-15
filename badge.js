// Default badges for new users
const defaultBadges = [
    "newUser",      // Joined the platform
    "verifiedEmail" // Email entered
];

// Add badges to account object
function addBadge(user, badge) {
    if (!user.badges) user.badges = [];
    if (!user.badges.includes(badge)) {
        user.badges.push(badge);
        localStorage.setItem("acc_" + user.username, JSON.stringify(user));
    }
}
const account = {
    username: u,
    password: p,
    email: e,
    birthday: b,
    created: Date.now(),
    badges: [...defaultBadges]
};
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #2b2b40;
    border-radius: 8px;
    margin: 5px;
    font-size: 22px;
    border: 2px solid #9D4BFF;
}

/* Badge icons */
.badge-newUser::after { content: "🆕"; }
.badge-verifiedEmail::after { content: "📧"; }
.badge-birthday::after { content: "🎂"; }
.badge-projectMaker::after { content: "📁"; }
.badge-chatUser::after { content: "💬"; }
.badge-devMode::after { content: "💻"; }
.badge-earlyAccess::after { content: "🚀"; }
.badge-collector::after { content: "📛"; }
<div class="label">Badges:</div>
<div id="p_badges"></div>
function renderBadges(list) {
    return list.map(b => `<span class="badge badge-${b}"></span>`).join("");
}

document.getElementById("p_badges").innerHTML =
    renderBadges(user.badges || []);
addBadge(user, "chatUser");
addBadge(user, "projectMaker");
addBadge(user, "devMode");
const today = new Date();
if (today.toISOString().slice(5,10) === user.birthday.slice(5,10)) {
    addBadge(user, "birthday");
}
