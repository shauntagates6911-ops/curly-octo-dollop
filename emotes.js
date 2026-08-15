// Map emote codes to CSS classes
const emoteMap = {
    ":happy:": "emote-happy",
    ":laugh:": "emote-laugh",
    ":cry:": "emote-cry",
    ":angry:": "emote-angry",
    ":shock:": "emote-shock",
    ":cool:": "emote-cool",
    ":heart:": "emote-heart",
    ":thumbsup:": "emote-thumbsup",
    ":thinking:": "emote-thinking",
    ":chaos:": "emote-chaos"
};

// Replace emote codes in text with <span> elements
function renderEmotes(text) {
    let output = text;
    for (const code in emoteMap) {
        const cls = emoteMap[code];
        const span = `<span class="emote ${cls}"></span>`;
        output = output.replaceAll(code, span);
    }
    return output;
}
