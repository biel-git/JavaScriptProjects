//Data Attribute Assignment
function displayType(player) {
    var playerType = player.getAttribute("data-player-type");
    alert(playerType + " is in the " + player.innerHTML + " league!");
}