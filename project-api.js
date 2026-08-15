function generateProjectID() {
    const now = new Date();
    const date = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
        String(now.getHours()).padStart(2, "0"),
        String(now.getMinutes()).padStart(2, "0")
    ].join("-");

    const random = Math.random().toString(36).substring(2, 8).toUpperCase();

    return `EM-${date}-${random}`;
}
let currentProject = {
    id: generateProjectID(),
    name: "Untitled Project",
    sprites: [],
    sounds: [],
    blocks: [],
    variables: {},
    metadata: {}
};
document.getElementById("guideBar").textContent =
    "// PROJECT ID: " + currentProject.id;
function exportProject() {
    const data = JSON.stringify(currentProject);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentProject.name}_${currentProject.id}.json`;
    a.click();
}
function importProject(json) {
    const data = JSON.parse(json);
    currentProject = data;

    document.getElementById("guideBar").textContent =
        "// PROJECT ID: " + currentProject.id;
}
if (!currentProject.id) {
    currentProject.id = generateProjectID();
}
