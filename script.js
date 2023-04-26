function enableEditMode() {
    ChampDeTexte.document.designMode = "on";
}
function Edit(command) {
    ChampDeTexte.document.execCommand(command, false, null);
}
function execVal(command, value) {
    ChampDeTexte.document.execCommand(command, false, value);
}