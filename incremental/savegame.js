//Savegame garbage
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("klickClickerSave", JSON.stringify(gameData))
}, 1000)

var savegame = JSON.parse(localStorage.getItem("klickClickerSave"))
if (savegame !== null) {
  gameData = savegame
}
