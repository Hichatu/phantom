var gameData = {
	klicks: 0,
	klicksPerClick: 1,
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("klickClickerSave", JSON.stringify(gameData))
}, 1000)

var savegame = JSON.parse(localStorage.getItem("klickClickerSave"))
if (savegame !== null) {
  gameData = savegame
}


function click() {
	gameData.klicks += gameData.klicksPerClick
	document.getElementById("klicks").innerHTML = gameData.klicks
}