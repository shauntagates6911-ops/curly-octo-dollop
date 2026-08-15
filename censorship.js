// censorship.js — EruptionMod Advanced Filter

// Normalize text to catch bypass attempts like b@dw0rd, b.a.d.w.o.r.d, etc.
function normalize(text) {
    return text
        .normalize("NFKD")                // normalize unicode
        .replace(/[\u0300-\u036f]/g, "")  // remove accents
        .replace(/[^a-zA-Z0-9 ]/g, "")    // remove symbols (@ . ! etc)
        .replace(/\s+/g, " ")             // collapse spaces
        .toLowerCase();
}

// Banned words list (add as many as you want)
const BANNED = [
    "fuck",
    "dick",
    "pussy",
    "shit",
    "sex"
     "nigger",
    "bomb",
    "kill",
    "shut up",
    "🖕🖕🖕"
];

// Censorship styles
const CENSOR_STYLES = {
    stars: "***",
    emoji: "🔇",
    block: "[CENSORED]",
    hash: "###"
};

// Main censor function
function censor(text, style = "stars") {
    if (typeof text !== "string") return text;

    const normalized = normalize(text);
    let output = text;

    BANNED.forEach(word => {
        const pattern = new RegExp(word, "gi");

        // If normalized text contains the banned word, censor original text
        if (normalized.includes(word)) {
            output = output.replace(pattern, CENSOR_STYLES[style] || "***");
        }
    });

    return output;
}

// Optional: live censorship for input fields
function attachCensorship(selector, style = "stars") {
    const input = document.querySelector(selector);
    if (!input) return;

    input.addEventListener("input", () => {
        input.value = censor(input.value, style);
    });
}

// Export for modules
export { censor, attachCensorship };
